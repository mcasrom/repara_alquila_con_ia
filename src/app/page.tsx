"use client";

import { useState } from "react";

const services = [
  { icon: "🔧", title: "Repair", desc: "AI diagnosis + instant quote" },
  { icon: "🚗", title: "Rental", desc: "20-vehicle fleet available" },
  { icon: "⚡", title: "Quick Service", desc: "Same-day appointments" },
  { icon: "🔄", title: "Loan Vehicle", desc: "While we fix yours" },
];

const fleet = [
  { model: "Toyota Camry", type: "Sedan", price: 45, available: true },
  { model: "Honda CR-V", type: "SUV", price: 55, available: true },
  { model: "Toyota Corolla", type: "Sedan", price: 40, available: false },
  { model: "Mitsubishi Outlander", type: "SUV", price: 60, available: true },
  { model: "Hyundai i30", type: "Hatchback", price: 38, available: true },
  { model: "Nissan X-Trail", type: "SUV", price: 58, available: false },
];

const faqs = [
  {
    q: "How much is the diagnosis?",
    a: "Initial diagnosis is free. You only pay for the repair.",
  },
  {
    q: "Can I rent without an Australian license?",
    a: "Yes, with a valid international license (IDP). Must be 21+ years old.",
  },
  {
    q: "Do you have a loan vehicle?",
    a: "Yes, included with premium services. Check availability.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Depends on type: oil/filter (1hr), brakes (2-4hrs), engine (varies).",
  },
];

export default function Home() {
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "repair", date: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookingSent, setBookingSent] = useState(false);

  const handleChat = async () => {
    if (!chatInput.trim()) return;
    setLoading(true);
    setChatResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: chatInput }),
      });
      const data = await res.json();
      setChatResponse(data.reply || "Contact us at +61 7 1234 5678");
    } catch {
      setChatResponse("Describe your issue and we'll respond shortly.");
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSent(true);
    setForm({ name: "", phone: "", service: "repair", date: "" });
    setTimeout(() => setBookingSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-700">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-600">
            🔧 Fix & Rent Gold Coast
          </h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-teal-600">Services</a>
            <a href="#fleet" className="hover:text-teal-600">Fleet</a>
            <a href="#chat" className="hover:text-teal-600">AI Chat</a>
            <a href="#contact" className="hover:text-teal-600">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-teal-50 to-stone-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Smart Car Repair + Rental in Gold Coast
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            AI-powered diagnosis. Book in minutes. Loan vehicle available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700"
            >
              Book Repair
            </a>
            <a
              href="#fleet"
              className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900"
            >
              View Fleet
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-500">20+</div>
            <div className="text-sm text-slate-300">Vehicles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">500+</div>
            <div className="text-sm text-slate-300">Repairs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">4.8★</div>
            <div className="text-sm text-slate-300">Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">24/7</div>
            <div className="text-sm text-slate-300">Emergencies</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Fleet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.map((car, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{car.model}</h3>
                    <p className="text-slate-500 text-sm">{car.type}</p>
                  </div>
                  {car.available ? (
                    <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-medium">
                      Rented
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-teal-600">${car.price}</span>
                  <span className="text-slate-400 text-sm">/day</span>
                </div>
                <button
                  disabled={!car.available}
                  className={`w-full mt-4 py-2 rounded-lg font-medium ${
                    car.available
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-stone-200 text-stone-400 cursor-not-allowed"
                  }`}
                >
                  {car.available ? "Rent" : "Unavailable"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat IA */}
      <section id="chat" className="py-16 px-4 bg-gradient-to-b from-stone-50 to-teal-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">AI Chat - Diagnosis</h2>
          <p className="text-center text-slate-600 mb-8">
            Describe your issue and get an instant preliminary diagnosis
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-stone-100">
            <div className="mb-4 min-h-[120px] bg-stone-50 rounded-xl p-4">
              {loading ? (
                <p className="text-slate-400">Analyzing...</p>
              ) : chatResponse ? (
                <p className="text-slate-700">{chatResponse}</p>
              ) : (
                <p className="text-slate-400 text-sm">
                  Try: "I hear a noise when braking" or "Car won't start"
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Describe your problem..."
                className="flex-1 px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:border-teal-500"
                onKeyDown={(e) => e.key === "Enter" && handleChat()}
              />
              <button
                onClick={handleChat}
                disabled={loading}
                className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "James T.", text: "Instant diagnosis, saved me time and money.", stars: "⭐⭐⭐⭐⭐" },
              { name: "Sarah M.", text: "Super easy rental, no paperwork. Will be back.", stars: "⭐⭐⭐⭐⭐" },
              { name: "Mike R.", text: "Loan vehicle saved my trip.", stars: "⭐⭐⭐⭐" },
            ].map((t, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-2xl">
                <div className="text-amber-400 mb-2">{t.stars}</div>
                <p className="text-slate-600 mb-4">"{t.text}"</p>
                <p className="font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-slate-600 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700"
                >
                  <span className="font-medium">{f.q}</span>
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-slate-300">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Book Your Appointment</h2>
          <p className="text-center text-slate-600 mb-8">
            Fill the form and we'll contact you
          </p>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Service</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:border-teal-500"
              >
                <option value="repair">Repair</option>
                <option value="rental">Rental</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:border-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700"
            >
              {bookingSent ? "✓ Sent! We'll call you soon" : "Request Booking"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400 text-center">
        <div className="max-w-6xl mx-auto">
          <p>📍 Gold Coast, Queensland, Australia</p>
          <p className="mt-2">📞 +61 7 1234 5678 | ✉️ info@fixrentgoldcoast.com.au</p>
          <p className="mt-4 text-sm">© 2026 Fix & Rent Gold Coast</p>
        </div>
      </footer>
    </div>
  );
}