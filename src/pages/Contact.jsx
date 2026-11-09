import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Footer from "../components/Footer.jsx";
import NavBar from "./NavBar.jsx";

const WHATSAPP_NUMBER = "2348021289677";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const whatsappMessage = [
      "Hello Folly Market,",
      "",
      `My name is: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "My enquiry:",
      message
    ].join("\n");

    setSubmitted(true);
    window.location.assign(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`);
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl bg-gradient-to-br from-purple-800 to-slate-950 p-7 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">We are here to help</p>
            <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Let's talk about your next look.</h1>
            <p className="mt-5 text-sm leading-7 text-purple-100">Have a question about a product, a bulk purchase or an order? Send us a message and our team can follow up with you.</p>
            <div className="mt-10 space-y-5 text-sm">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-300"><MessageCircle className="h-5 w-5 text-amber-300" /> WhatsApp customer care</a>
              <a href="tel:+2348021289677" className="flex items-center gap-3 hover:text-amber-300"><Phone className="h-5 w-5 text-amber-300" /> +234 802 128 9677</a>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-9">
            <h2 className="text-2xl font-bold text-slate-900">Send an enquiry</h2>
            <p className="mt-2 text-sm text-slate-500">Complete the form. It will open WhatsApp with your message ready to send.</p>
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label htmlFor="client-name" className="mb-2 block text-sm font-semibold text-slate-700">Your name</label>
                <input id="client-name" name="name" type="text" autoComplete="name" required minLength={2} placeholder="Enter your name" className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="client-phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone number</label>
                  <input id="client-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+234..." className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100" />
                </div>
                <div>
                  <label htmlFor="client-email" className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
                  <input id="client-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100" />
                </div>
              </div>
              <div>
                <label htmlFor="client-message" className="mb-2 block text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea id="client-message" name="message" required minLength={8} rows={5} placeholder="Tell us what you would like to know..." className="w-full resize-y rounded-xl border border-slate-200 p-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-purple-800">
                <Mail className="h-4 w-4" /> Continue to WhatsApp
              </button>
              {submitted && <p role="status" className="text-xs text-emerald-700">Opening WhatsApp…</p>}
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
