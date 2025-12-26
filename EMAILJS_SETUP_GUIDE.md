# EmailJS Setup Guide for Warmpawz Contact Form

## Step 1: Create EmailJS Account
1. Go to https://dashboard.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Click "Email Services" in the left sidebar
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email account (vikrambellurv@gmail.com or contact@warmpawz.com)
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

### Navigate to Templates
1. Click "Email Templates" in the left sidebar
2. Click "Create New Template"

### Fill in the Template Editor (Based on your screenshot):

#### **Content Tab:**

**Subject Field:**
```
Contact Us: {{title}}
```
Or simply:
```
    New Contact Form Submission from Warmpawz
```

**Content Field (Message Body):**
```
A message by {{from_name}} has been received. Kindly respond at your earliest convenience.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
User Type: {{user_type}}

Message:
{{message}}
```

#### **Settings Tab (Right Side):**

**To Email:**
```
vikrambellurv@gmail.com
```
(This is where you'll receive the contact form submissions)

**From Name:**
```
{{from_name}}
```
(This will show the sender's name)

**From Email:**
- Check "Use Default Email Address" ✓
- Or enter: `noreply@warmpawz.com` (if you have a custom domain)

**Reply To:**
```
{{from_email}}
```
(This allows you to reply directly to the person who submitted the form)

**Bcc:** (Optional)
```
contact@warmpawz.com
```
(If you want to keep a copy at another email)

**Cc:** (Leave empty unless needed)

### Save the Template
1. Click "Save" button
2. Copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" in the left sidebar
2. Find "API Keys" section
3. Copy your **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)

## Step 5: Create .env File in Your Project

Create a file named `.env` in your project root (same level as package.json):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
```

Replace the values with your actual IDs from EmailJS dashboard.

## Step 6: Add .env to .gitignore

Make sure your `.gitignore` file includes:
```
.env
.env.local
```

## Step 7: Test the Form

1. Restart your development server: `npm run dev`
2. Open your website
3. Click "Contact Us" button
4. Fill in the form and submit
5. Check your email (vikrambellurv@gmail.com) for the message

## Template Variables Mapping

Here's how the form fields map to template variables:

| Form Field | Template Variable | Example |
|------------|------------------|---------|
| Full Name | `{{from_name}}` | "John Doe" |
| Email Address | `{{from_email}}` | "john@example.com" |
| Phone Number | `{{phone}}` | "+91 9876543210" |
| Choose User | `{{user_type}}` | "Pet Parent" |
| Query | `{{message}}` | "I need help with..." |

## Troubleshooting

### If emails aren't sending:
1. Check browser console for errors
2. Verify all three IDs are correct in `.env`
3. Make sure you restarted the dev server after creating `.env`
4. Check EmailJS dashboard for usage limits (free tier: 200 emails/month)
5. Verify your email service is connected and active

### If you see "YOUR_SERVICE_ID" error:
- You haven't created the `.env` file yet
- The `.env` file is in the wrong location
- You need to restart the development server

## Example Email You'll Receive

```
Subject: New Contact Form Submission from Warmpawz

A message by John Doe has been received. Kindly respond at your earliest convenience.

Name: John Doe
Email: john@example.com
Phone: +91 9876543210
User Type: Pet Parent

Message:
I'm interested in finding a veterinarian for my dog. Can you help me with this?
```

## Security Notes

- Never commit your `.env` file to Git
- Keep your Public Key secure (though it's meant to be public)
- EmailJS free tier has rate limits - upgrade if needed
- Consider adding reCAPTCHA for production to prevent spam

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
