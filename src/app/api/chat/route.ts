import { NextRequest, NextResponse } from "next/server";

const OPENAI_KEY = process.env.OPENAI_API_KEY;

const DIAGNOSIS_PROMPT = `Eres un mecánico experto de Gold Coast, Australia. Analiza el problema descrito por el cliente y proporciona:
1. Posible causa (en 1-2 oraciones)
2. Servicios relacionados (ej: cambio de aceite, pastillas de freno, batería)
3. Presupuesto estimado (AUD)
4. Si requiere cita urgente

Responde en español, de forma clara y profesional.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ reply: "Describe tu problema" });
    }

    if (!OPENAI_KEY) {
      const fallbackReply = diagnoseFallback(message);
      return NextResponse.json({ reply: fallbackReply });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: DIAGNOSIS_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || diagnoseFallback(message);

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: "Error. Llama al +61 7 1234 5678" });
  }
}

function diagnoseFallback(message: string): string {
  const m = message.toLowerCase();
  
  if (m.includes("frenar") || m.includes("freno") || m.includes("ruido")) {
    return "📌 Possible: Pastillas de freno desgastadas. Cambios: $150-300 AUD. ¿Solicitas turno?";
  }
  if (m.includes("arrancar") || m.includes("batería") || m.includes("no arranca")) {
    return "📌 Posible: Batería descargada o defectuosa. Cambios: $150-250 AUD. ¿Solicitas turno?";
  }
  if (m.includes("aceite") || m.includes("fuga")) {
    return "📌 Posible: Fuga de aceite o aceite bajo. Revisión: $80-150 AUD. ¿Solicitas turno?";
  }
  if (m.includes("motor") || m.includes("caliente") || m.includes("sobrecalienta")) {
    return "📌 Posible: Sobrecalentamiento. Urgente: revisión inmediata. Llama ahora: +61 7 1234 5678";
  }
  if (m.includes("rueda") || m.includes("neumático") || m.includes("pinchazo")) {
    return "📌 Posible: Neumático pinchado o baja presión. Cambios: $30-80 AUD. ¿Solicitas turno?";
  }
  
  return "📌 Describe más síntomas.Nuestroacheobot analiza para darte presupuesto estimado. ¿Prefieres llamar al +61 7 1234 5678?";
}