import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus("");

    try {
        console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");

      form.current.reset();
    } catch (error: any) {
        console.error("EmailJS Error:", error);
        alert(JSON.stringify(error));
        setStatus("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="glass rounded-3xl p-8 space-y-6"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        className="w-full rounded-xl bg-white/5 p-4 border border-white/10 outline-none focus:border-primary"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        className="w-full rounded-xl bg-white/5 p-4 border border-white/10 outline-none focus:border-primary"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Your Message"
        required
        className="w-full rounded-xl bg-white/5 p-4 border border-white/10 outline-none resize-none focus:border-primary"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-primary py-4 font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-center text-sm mt-2">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;