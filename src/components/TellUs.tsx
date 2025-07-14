import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

interface TellUsProps {
  id?: string;
}

const TellUs: React.FC<TellUsProps> = ({ id = "tell-us" }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    projectTimeline: "",
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.projectName.trim()) {
      setError("Project name is required");
      return false;
    }
    if (!formData.projectDescription.trim()) {
      setError("Project description is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const templateParams = {
        project_name: formData.projectName,
        project_description: formData.projectDescription,
        project_timeline: formData.projectTimeline || "Not specified",
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone || "Not specified",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.PROJECT_INQUIRY,
        templateParams
      );

      setSuccess(
        "Your project inquiry has been sent successfully! We'll get back to you soon."
      );
      setFormData({
        projectName: "",
        projectDescription: "",
        projectTimeline: "",
        name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id={id} className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Tell Us About Your Project
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Ready to bring your vision to life? Share your project details with
            us and let's create something amazing together.
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                placeholder="Enter your project name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                placeholder="Describe your project requirements and goals..."
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Timeline
              </label>
              <input
                type="text"
                name="projectTimeline"
                value={formData.projectTimeline}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                placeholder="Expected timeline or deadline"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 md:px-6 md:py-3.5 rounded-md font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md text-sm">
            {success}
          </div>
        )}
      </div>
    </div>
  );
};

export default TellUs;

// Options -MultiViews
// RewriteEngine On
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule ^ index.html [QR,L]
