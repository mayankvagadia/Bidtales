export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "237ue0ZMuf8ZxXSio",
  SERVICE_ID: "service_fkx1skm",
  TEMPLATES: {
    CONTACT_FORM: "template_dp2kxmq",
    PROJECT_INQUIRY: "template_dp2kxmq",
  },
  EMAILS: {
    CONTACT: "mayankvagadia007@gmail.com",
    PROJECTS: "mayankvagadia007@gmail.com",
  },
};
export const initEmailJS = () => {
  const { PUBLIC_KEY } = EMAILJS_CONFIG;
  if (PUBLIC_KEY && PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    return true;
  }
  console.warn(
    "EmailJS not configured. Please update the EMAILJS_CONFIG in src/config/emailjs.ts"
  );
  return false;
};
