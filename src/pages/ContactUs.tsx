import { useState } from "react";

const ContactUs = () => {
  // Unique Get in Touch form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    company: "",
    budget: "",
    phone: "",
    subject: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.fullName || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    setForm({
      fullName: "",
      email: "",
      message: "",
      company: "",
      budget: "",
      phone: "",
      subject: "",
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-16 md:pt-32 md:pb-16 px-4 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Let's Build Big Together – Join BidTales
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 text-center max-w-2xl">
          Get in touch! If you would like to learn more about our services or
          have a specific inquiry, please don’t hesitate to contact us.
        </p>
      </section>

      {/* Main Form Section */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Send us a message
            </h2>
            <p className="text-gray-600 mb-6">
              We'll get back to you as soon as possible
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-base bg-white shadow-sm"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-base bg-white shadow-sm"
                  placeholder="Email Address"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={form.subject || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-base bg-white shadow-sm"
                placeholder="Subject"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-base bg-white shadow-sm"
                placeholder="Message"
                required
              ></textarea>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {submitted && !error && (
                <div className="text-green-500 text-sm">
                  Your message has been sent! (Dummy form)
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
              >
                {submitted ? "Thank you!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              BidTales Marketing Pvt. Ltd.
            </h3>
            <div className="flex items-center gap-2 text-gray-700">
              <span>📧</span> info@bidtales.com
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span>📞</span> +91 6026767767
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span>📍</span> Hisar, Haryana, India – 125121
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span>📸</span> @bidtales_media
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span>⏰</span> Mon–Sat | 10 AM – 6 PM IST
            </div>
          </div>
          {/* Map Card */}
          <div className="bg-white rounded-2xl shadow-xl flex items-center justify-center min-h-[300px]">
            <iframe
              title="BidTales Location"
              src="https://www.google.com/maps?q=Hisar,+Haryana,+India&output=embed"
              width="100%"
              height="100%"
              className="rounded-xl border-0 w-full h-full min-h-[300px]"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
