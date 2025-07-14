# EmailJS Setup Guide

This guide will help you set up EmailJS for both contact forms in your BidTales website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Templates

### Contact Form Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Contact Form"
4. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Company: {{company}}
Budget: {{budget}}
Phone: {{phone}}

Message:
{{message}}
```

5. Note down the **Template ID**

### Project Inquiry Template

1. Create another template named "Project Inquiry"
2. Use this template content:

```
Subject: New Project Inquiry: {{project_name}}

Project Details:
- Project Name: {{project_name}}
- Project Description: {{project_description}}
- Timeline: {{project_timeline}}

Client Information:
- Name: {{client_name}}
- Email: {{client_email}}
- Phone: {{client_phone}}
```

3. Note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  // Your EmailJS public key
  PUBLIC_KEY: "your_actual_public_key_here",

  // Your EmailJS service ID
  SERVICE_ID: "your_actual_service_id_here",

  // Template IDs for different forms
  TEMPLATES: {
    CONTACT_FORM: "your_contact_template_id_here",
    PROJECT_INQUIRY: "your_project_template_id_here",
  },

  // Email addresses for different types of inquiries
  EMAILS: {
    CONTACT: "info@bidtales.com",
    PROJECTS: "projects@bidtales.com",
  },
};
```

## Step 6: Test the Forms

1. Start your development server: `npm run dev`
2. Test both forms:
   - Contact form at `/contact`
   - Project inquiry form on the homepage
3. Check your email to confirm the forms are working

## Troubleshooting

- **"EmailJS not configured" warning**: Make sure you've updated all the placeholder values in the config file
- **"Failed to send message" error**: Check that your EmailJS credentials are correct and your email service is properly connected
- **Template variables not working**: Ensure the variable names in your EmailJS templates match the ones being sent from the forms

## Security Notes

- The public key is safe to expose in client-side code
- Never expose your private keys or service credentials
- EmailJS handles the email sending server-side, so your credentials are secure

## Free Tier Limits

- EmailJS free tier allows 200 emails per month
- Consider upgrading if you expect higher volume
