# jesusreigns.com

Official website for **Jesus Reigns Ministries (JRM)** — a caring church committed to win souls and make disciples. Founded 1986. Launching September 2026 for the 40th Anniversary.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Database | Firebase Firestore |
| Auth | Firebase Auth |
| Storage | Firebase Storage |
| Hosting | Firebase App Hosting |
| CMS | Sanity.io |
| Payments | PayMongo + Stripe |
| Email | Resend |

---

## Project Structure

```
jesusreigns-com/
├── app/                        # All 18 pages (Next.js App Router)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── new-here/page.tsx
│   ├── services/page.tsx
│   ├── live/page.tsx
│   ├── events/page.tsx
│   ├── sermons/page.tsx
│   ├── prayer-wall/page.tsx
│   ├── dng/page.tsx
│   ├── give/page.tsx
│   ├── testimony/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx
│   ├── resources/page.tsx
│   ├── members/page.tsx
│   ├── directory/page.tsx
│   ├── pastoral/page.tsx
│   ├── international/page.tsx
│   └── academy/page.tsx
├── components/                 # Shared UI components
│   ├── Nav.tsx                 # Fixed navigation with dropdowns
│   ├── Footer.tsx              # 5-column footer
│   ├── SermonCard.tsx          # Reusable sermon card
│   └── BlogCard.tsx            # Reusable blog card
├── lib/
│   ├── firebase.ts             # Firebase client initialization
│   └── sanity.ts               # Sanity client configuration
├── studio/                     # Sanity Studio (CMS for Manila team)
├── public/                     # Static assets
├── _REFERENCE_PROTOTYPE.html   # ⚠️ Design reference — DO NOT DELETE
├── CLAUDE.md                   # AI agent context file — read before coding
├── .env.local                  # Environment variables (not in git)
└── .env.local.example          # Template for environment variables
```

---

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn
- A Firebase project (Blaze plan required)
- A Sanity account (free plan is sufficient)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/jesusreigns-com.git
cd jesusreigns-com
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and fill in every value. See the section below for where to get each one.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## Environment Variables

Create `.env.local` with these values. **Never commit this file to git.**

```bash
# ─────────────────────────────────────────────
# FIREBASE
# Get these from: Firebase Console → Project Settings → General → Your apps
# ─────────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here

# ─────────────────────────────────────────────
# SANITY CMS
# Get these from: sanity.io/manage → your project → API
# ─────────────────────────────────────────────
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# ─────────────────────────────────────────────
# PAYMONGO (Philippine payments — GCash, Maya, Cards)
# Get these from: dashboard.paymongo.com → Developers → API Keys
# ─────────────────────────────────────────────
NEXT_PUBLIC_PAYMONGO_PUBLIC_KEY=pk_live_your_key_here
PAYMONGO_SECRET_KEY=sk_live_your_key_here

# ─────────────────────────────────────────────
# STRIPE (International giving — for diaspora members)
# Get these from: dashboard.stripe.com → Developers → API Keys
# ─────────────────────────────────────────────
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
STRIPE_SECRET_KEY=sk_live_your_key_here

# ─────────────────────────────────────────────
# RESEND (Transactional emails)
# Get these from: resend.com → API Keys
# ─────────────────────────────────────────────
RESEND_API_KEY=re_your_api_key_here
```

---

## Firebase Setup Guide

### Step 1 — Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click "Add project" → Name it `jesusreigns-com`
3. Upgrade to **Blaze plan** (required for Storage and App Hosting)
   — You won't be charged unless you exceed free quotas

### Step 2 — Enable Services

In Firebase Console, enable:
- **Firestore Database** → Create database → Start in production mode
- **Authentication** → Enable Email/Password sign-in
- **Storage** → Create default bucket
- **App Hosting** → Connect to your GitHub repository

### Step 3 — Create Firestore Collections

Create these collections (Firebase will auto-create them on first write, but you can create them manually to set up security rules):

```
prayer_requests
event_registrations
dng_enrollments
testimonies
contact_messages
give_submissions
```

### Step 4 — Firestore Security Rules

In Firebase Console → Firestore → Rules, paste this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Public can submit forms — no read access
    match /prayer_requests/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    match /event_registrations/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    match /dng_enrollments/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    match /testimonies/{doc} {
      allow create: if true;
      allow read: if resource.data.approved == true || request.auth != null;
      allow update, delete: if request.auth != null;
    }

    match /contact_messages/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    match /give_submissions/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

---

## Sanity CMS Setup Guide

### Step 1 — Create a Sanity Project

```bash
npx sanity@latest init
```

Choose "Use existing project" if one was already created.

### Step 2 — Run the Sanity Studio

```bash
cd studio
npm install
npm run dev
```

Studio opens at [http://localhost:3333](http://localhost:3333).

### Step 3 — Invite the Manila Content Team

In [sanity.io/manage](https://sanity.io/manage):
1. Select your project
2. Members → Invite members
3. Assign role: **Editor** (can add/edit content, cannot change schemas)

The free plan supports up to 20 members — sufficient for JRM's content team.

### Step 4 — Apply for Non-Profit Pricing

JRM may qualify for free Growth plan access.
Apply at: [sanity.io/non-profit](https://www.sanity.io/non-profit)

---

## Deployment — Firebase App Hosting

Firebase App Hosting is required (not classic Firebase Hosting) because this is a Next.js app with server-side rendering.

### Step 1 — Install Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### Step 2 — Initialize App Hosting

```bash
firebase init apphosting
```

Follow the prompts to connect your GitHub repository.

### Step 3 — Deploy

```bash
firebase deploy
```

Or push to your GitHub `main` branch — Firebase App Hosting auto-deploys on every push.

### Step 4 — Connect the Domain

In Firebase Console → App Hosting → Custom Domains:
1. Add `jesusreigns.com`
2. Add `www.jesusreigns.com`
3. Update your domain's DNS with the records Firebase provides
4. SSL certificate is provisioned automatically

---

## Content Management (For Manila Team)

The Manila content team manages the site content through Sanity Studio without needing to touch any code.

| What to Update | How |
|---|---|
| Add a new sermon | Sanity Studio → Sermons → New |
| Publish a blog post | Sanity Studio → Blog Posts → New |
| Add/edit an event | Sanity Studio → Events → New |
| Add a church to directory | Sanity Studio → Church Directory → New |
| Update service times | Contact the Dubai developer (code change) |
| Update leadership photos | Firebase Storage → upload image → Dubai developer updates code |

---

## Development Phases

### ✅ Phase 1 — Complete (February 2026)
All 18 pages built as UI shells. Navigation, design system, and all page layouts complete. Forms show success messages but are not yet connected to the database.

### 🔧 Phase 2 — Backend (Dubai Team)
- Connect all forms to Firebase Firestore
- Set up Firebase Auth for Members Portal
- Connect Sanity CMS to dynamic content sections (Sermons, Blog, Events)
- Replace YouTube/Facebook Live placeholder with real embed codes
- Replace Google Calendar placeholder with real embed code
- Connect PayMongo to Give page
- Upload all resource PDFs to Firebase Storage

### 📋 Phase 3 — Expansion (Post-launch)
- Individual pages for each international outreach (Dubai, HK, UK, AU, US)
- Full church directory data (85 churches + 55 missions)
- Academy and College dedicated subsites
- Members Portal with full dashboard
- Multi-language support (English + Filipino)

---

## Important Files

| File | Purpose |
|---|---|
| `CLAUDE.md` | Context file for Claude AI agents — read before every task |
| `_REFERENCE_PROTOTYPE.html` | Complete visual design reference — all pages |
| `.env.local.example` | Template for environment variables |
| `lib/firebase.ts` | Firebase client initialization |
| `lib/sanity.ts` | Sanity client configuration |
| `studio/` | Sanity Studio for Manila content team |

---

## Ministry Information

**Jesus Reigns Ministries**
811 J. Nakpil cor. P.H. Lim Sts., Malate, Manila 1004
Tel: (02) 4003819 / 254-7569
P.O. Box 1167, Manila 1099

Sunday Services: 8:00 AM · 10:30 AM · 1:00 PM
Live Stream: YouTube & Facebook — every Sunday at 8:00 AM
Social Media: @jrmcentral

CESA Rescue Hotline: **811**

---

## Cost Summary

| Service | Monthly Cost |
|---|---|
| Firebase (Blaze — pay per use) | ~$0–5 |
| Sanity (free plan) | $0 |
| PayMongo | 2.5% per giving transaction |
| Domain (already owned) | $0 |
| **Total** | **~$0–5/month** |

---

*Built for the 40th Anniversary of Jesus Reigns Ministries · Est. 1986 · jesusreigns.com*
