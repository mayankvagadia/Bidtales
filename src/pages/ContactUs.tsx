import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

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
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!form.fullName || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const templateParams = {
        from_name: form.fullName,
        from_email: form.email,
        message: form.message,
        subject: form.subject || "Contact Form Submission",
        company: form.company || "Not specified",
        budget: form.budget || "Not specified",
        phone: form.phone || "Not specified",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.CONTACT_FORM,
        templateParams
      );

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
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Section with Masked Text */}
      <section className="relative w-full py-16 md:pt-32 md:pb-16 px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
          </div>
        </div>

        {/* Masked Text Container */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-6 leading-tight">
            GET IN TOUCH
          </h1>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4 relative z-20">
              Let's Build Big Together
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/50 blur-sm transform scale-110"></div>
          </div>
          <p className="text-lg md:text-xl text-indigo-100 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
            Ready to transform your digital presence? We're here to turn your
            vision into reality. Let's create something extraordinary together.
          </p>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-300/40 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-10 left-20 w-2 h-2 bg-purple-300/50 rounded-full animate-bounce delay-1000"></div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="relative h-24 bg-gradient-to-b from-transparent via-gray-50 to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 transform -skew-y-2"></div>
      </div>

      {/* Main Form Section with Enhanced Design */}
      <section className="relative w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Masked Text */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 mb-4">
              SEND MESSAGE
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24
              hours
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <form
                onSubmit={handleSubmit}
                className="space-y-8 max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-400/20 focus:border-blue-400 text-base bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-blue-300"
                      placeholder="Full Name"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 text-base bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-purple-300"
                      placeholder="Email Address"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={form.subject || ""}
                      onChange={handleChange}
                      className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-400/20 focus:border-indigo-400 text-base bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-indigo-300"
                      placeholder="Subject"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-blue-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="company"
                      value={form.company || ""}
                      onChange={handleChange}
                      className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 text-base bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-purple-300"
                      placeholder="Company (Optional)"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="phone"
                      value={form.phone || ""}
                      onChange={handleChange}
                      className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-400/20 focus:border-green-400 text-base bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-green-300"
                      placeholder="Phone Number (Optional)"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="budget"
                      value={form.budget || ""}
                      onChange={handleChange}
                      className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-400/20 focus:border-orange-400 text-base bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-orange-300"
                      placeholder="Budget Range (Optional)"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-8 py-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-400/20 focus:border-green-400 text-base bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-green-300 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                {error && (
                  <div className="text-red-500 text-sm bg-red-50 p-4 rounded-lg border border-red-200">
                    {error}
                  </div>
                )}
                {submitted && !error && (
                  <div className="text-green-600 text-sm bg-green-50 p-4 rounded-lg border border-green-200">
                    Your message has been sent! We'll get back to you soon.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Sending..."
                    : submitted
                    ? "Message Sent! 🎉"
                    : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info & Map Section */}
      <section className="relative w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 mb-4">
              FIND US
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey? Here's where you can reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Enhanced Contact Info Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden h-full min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BidTales Marketing Pvt. Ltd.
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@bidtales.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 6026767767</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Hisar, Haryana, India – 125121
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">📸</span>
                    <div>
                      <p className="font-semibold text-gray-900">Social</p>
                      <p className="text-gray-600">@bidtales_media</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">
                        Mon–Sat | 10 AM – 6 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Map Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative h-full min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
              <div className="relative z-10 h-full">
                <iframe
                  title="BidTales Location"
                  src="https://www.google.com/maps?q=Hisar,+Haryana,+India&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0 w-full h-full min-h-[500px]"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
