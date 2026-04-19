import { NextRequest, NextResponse } from "next/server";

const OPENAI_KEY = process.env.OPENAI_API_KEY;

const DIAGNOSIS_PROMPT = `You are an expert mechanic from Gold Coast, Queensland, Australia. Analyze the customer's problem and provide:
1. Possible cause (1-2 sentences)
2. Related services (eg: oil change, brake pads, battery)
3. Estimated cost (AUD)
4. If urgent appointment needed

Respond in English, clear and professional.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ reply: "Please describe your issue" });
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
    return NextResponse.json({ reply: "Error. Call +61 7 1234 5678" });
  }
}

function diagnoseFallback(message: string): string {
  const m = message.toLowerCase();
  
  if (m.includes("brake") || m.includes("noise") || m.includes("stopping")) {
    return "🔧 Possible: Worn brake pads. Cost: $150-300 AUD. Book a time?";
  }
  if (m.includes("start") || m.includes("battery") || m.includes("won't start")) {
    return "🔧 Possible: Flat/defective battery. Cost: $150-250 AUD. Book a time?";
  }
  if (m.includes("oil") || m.includes("leak") || m.includes("burning")) {
    return "🔧 Possible: Oil leak or low oil. Inspection: $80-150 AUD. Book a time?";
  }
  if (m.includes("engine") || m.includes("hot") || m.includes("overheat")) {
    return "🔧 Possible: Overheating. URGENT: call now +61 7 1234 5678";
  }
  if (m.includes("tire") || m.includes("puncture") || m.includes("flat")) {
    return "🔧 Possible: Puncture or low pressure. Cost: $30-80 AUD. Book a time?";
  }
  if (m.includes("steering") || m.includes("wheel") || m.includes("pull")) {
    return "🔧 Possible: Wheel alignment or power steering. Cost: $80-150 AUD. Book a time?";
  }
  if (m.includes("clutch") || m.includes("gear") || m.includes("shift")) {
    return "🔧 Possible: Clutch issue. Inspection: $100-200 AUD. Book a time?";
  }
  if (m.includes("ac") || m.includes("air") || m.includes("heat") || m.includes("cooling")) {
    return "🔧 Possible: AC system issue. Cost: $100-300 AUD. Book a time?";
  }
  
  return "🔧 Describe more symptoms for an estimate. Or call +61 7 1234 5678";
}