# Google Form Integration with Prefilled Data

This guide shows you how to use your **custom UI** while sending data to Google Sheets via Google Forms.

## How It Works

1. User fills out your beautiful custom form on your website
2. On submit, they're redirected to Google Form with data **already prefilled**
3. User just clicks "Submit" on Google Form (one click!)
4. Data automatically saves to Google Sheets

**Result:** You keep your custom UI, and data goes to Google Sheets automatically! 🎉

---

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add 3 questions in this **exact order**:
   - **Question 1:** "Name" (Short answer)
   - **Question 2:** "Email" (Short answer, set validation to "Email")
   - **Question 3:** "Profession" (Short answer)

4. **Important:** Make sure questions are in this order (Name, Email, Profession)

---

## Step 2: Get Your Form URL

1. Click the **"Send"** button (top right)
2. Click the **link icon** (🔗)
3. **Copy the full URL** - it should look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform
   ```
   ⚠️ **Don't use the short `forms.gle` link** - we need the full URL!

---

## Step 3: Get Entry IDs (For Prefilling)

Entry IDs are unique identifiers for each form field. Here's how to get them:

### Method 1: View Source (Easiest)

1. Open your Google Form in a browser
2. Right-click → **"View Page Source"** (or press `Ctrl+U` / `Cmd+U`)
3. Press `Ctrl+F` / `Cmd+F` to search
4. Search for: `"entry.`
5. You'll see entries like:
   ```html
   name="entry.123456789"
   name="entry.987654321"
   name="entry.111222333"
   ```
6. Note down the three entry IDs in order:
   - First `entry.XXXXX` = Name field
   - Second `entry.XXXXX` = Email field
   - Third `entry.XXXXX` = Profession field

### Method 2: Inspect Element

1. Open your Google Form
2. Right-click on the **Name** field → **Inspect**
3. Look for `name="entry.XXXXX"` in the HTML
4. Repeat for Email and Profession fields

### Method 3: Test URL Method

1. Open your form URL
2. Add `?entry.0=TestName&entry.1=test@email.com&entry.2=TestProfession` to the URL
3. If the fields get prefilled, those are your entry IDs!
4. If not, try `entry.1`, `entry.2`, `entry.3` instead

---

## Step 4: Configure Your Site

### Option A: Using Environment Variables (Recommended)

1. Create/update `.env.local` in `apps/home/`:

```bash
# Your Google Form URL (full URL, not short link)
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXX/viewform

# Entry IDs as JSON (replace with your actual entry IDs)
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_IDS={"name":"entry.123456789","email":"entry.987654321","profession":"entry.111222333"}
```

2. Replace the values with your actual:
   - Form URL
   - Entry IDs from Step 3

### Option B: Update Config Directly

Edit `packages/config/siteConfig.ts`:

```typescript
waitlist: {
  // ... other config
  googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
  googleFormEntryIds: {
    name: "entry.123456789",
    email: "entry.987654321",
    profession: "entry.111222333"
  }
}
```

---

## Step 5: Link Form to Google Sheets

1. In your Google Form, click the **"Responses"** tab
2. Click the **Google Sheets icon** (📊) - "Link to Sheets"
3. Choose "Create a new spreadsheet" or select existing
4. All form submissions will automatically save here!

---

## Step 6: Test It!

1. Start your dev server:
   ```bash
   cd apps/home
   npm run dev
   ```

2. Fill out the waitlist form on your site
3. Click "Join Waitlist"
4. You should be redirected to Google Form with data **already filled in**
5. User just clicks "Submit"
6. Check your Google Sheet - data should appear!

---

## Example Entry IDs Format

Your entry IDs will look different, but here's the format:

```json
{
  "name": "entry.123456789",
  "email": "entry.987654321", 
  "profession": "entry.111222333"
}
```

**Important:** Entry IDs are unique to your form. You must get them from YOUR form, not copy from examples.

---

## Troubleshooting

### Issue: Data not prefilling
- ✅ Check you're using the **full form URL** (not `forms.gle` short link)
- ✅ Verify entry IDs match your form fields
- ✅ Make sure entry IDs are in correct order (Name, Email, Profession)

### Issue: Wrong data in wrong fields
- ✅ Check the order of entry IDs matches your form question order
- ✅ Verify which entry ID corresponds to which field

### Issue: Form not redirecting
- ✅ Check `NEXT_PUBLIC_GOOGLE_FORM_URL` is set correctly
- ✅ Make sure the URL starts with `https://docs.google.com/forms/d/e/`

### Issue: Data not appearing in Sheets
- ✅ Make sure you linked the form to a Google Sheet (Step 5)
- ✅ Check the "Responses" tab in Google Forms to see if submissions are coming through

---

## Benefits of This Approach

✅ **Keep your custom UI** - Beautiful form design stays on your site  
✅ **Zero backend code** - No API, no server, no database  
✅ **Automatic Google Sheets sync** - All data goes to Sheets automatically  
✅ **Free** - Google Forms and Sheets are free  
✅ **Easy to manage** - View all submissions in one spreadsheet  

---

## Alternative: If You Don't Want Redirect

If you prefer users to stay on your site (no redirect), you'll need to use:
- Google Apps Script (see `GOOGLE_SHEETS_SETUP.md`)
- Or a backend API that writes to Google Sheets

But the redirect method is the **simplest** and works great! Users just click "Submit" once on the prefilled Google Form.

