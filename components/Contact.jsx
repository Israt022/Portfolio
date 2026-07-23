"use client";

import { useState } from "react";
import Section from "./Section";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section id="contact" className="relative pb-32 overflow-hidden">

      {/* Background Glow (kept but softer) */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6">

        <div className="glass p-10 md:p-16 rounded-3xl relative z-10">

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>

              <h2 className="text-3xl md:text-4xl font-black font-display mb-6">
                Let’s <span className="text-gradient">Connect</span>
              </h2>

              <p className="text-muted-foreground text-base mb-10 leading-relaxed">
                I’m currently learning and building web development projects. If you have any feedback, ideas, or collaboration opportunities, feel free to reach out.
              </p>

              <div className="space-y-5">

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      Email
                    </p>
                    <p className="font-semibold">eraisrat022@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      Location
                    </p>
                    <p className="font-semibold">Bangladesh</p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE (FORM) */}
            <form
              className="space-y-5"
              onSubmit={sendEmail}
            >

              <input
                required
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition"
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition"
              />

              <textarea
                required
                rows={5}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition"
              />

              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary to-accent py-5 rounded-2xl font-black font-display text-white text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </Section>
  );
}

