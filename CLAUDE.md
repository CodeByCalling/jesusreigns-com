# CLAUDE.md — JRM Website Project Context
# jesusreigns.com | Jesus Reigns Ministries

> This file is read by Claude (and Antigravity agents) at the start of every task.
> Always read this file before writing any code.

---

## Project Identity

| Field | Value |
|---|---|
| Project Name | jesusreigns.com |
| Organization | Jesus Reigns Ministries (JRM) |
| Founded | 1986 — 40th Anniversary: September 2026 |
| Main Campus | 811 J. Nakpil cor. P.H. Lim Sts., Malate, Manila 1004 |
| Phone | (02) 4003819 / 254-7569 |
| P.O. Box | 1167 Manila 1099 |
| Target Launch | September 2026 (40th Anniversary) |
| Domain | jesusreigns.com (already owned by JRM) |

---

## Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (headings) + DM Sans (body) via `next/font/google`

### Backend & Database
- **Database**: Firebase Firestore (NoSQL)
- **Authentication**: Firebase Auth
- **File Storage**: Firebase Storage
- **Hosting**: Firebase App Hosting (required for Next.js SSR support)
- **Project Plan**: Blaze (pay-as-you-go) — required for Storage and App Hosting

### Content Management
- **CMS**: Sanity.io (free plan — up to 20 seats)
- **Studio Location**: `/studio` folder in this repo
- **Who uses it**: JRM Manila content team (non-technical editors)
- **Content types**: Sermons, Blog Posts, Events, Church Directory

### Payments
- **Philippine giving**: PayMongo (GCash, Maya, credit/debit cards)
- **International giving**: Stripe (for diaspora givers overseas)
- **Transaction fee**: PayMongo ~2.5% per transaction

### Email
- **Service**: Resend (for form confirmation emails)
- **Use cases**: Prayer request acknowledgment, event registration confirmation, DNG enrollment confirmation, contact form auto-reply

---

## Design System

### Colors
```
Charcoal (dark backgrounds):   #1e1e1e
Charcoal 2 (slightly lighter): #252525
Charcoal 3 (card backgrounds): #2e2e2e
Amber (primary accent):        #D4A020
Amber Light (large headings):  #F0C84A
Amber Pale (tinted boxes):     #fdf6e3
Off-white (light backgrounds): #F7F5F0
Footer black:                  #0d0d0d
```

### Typography
```
Headings:  Playfair Display — weights 400, 700, 900 (normal + italic)
Body:      DM Sans — weights 300, 400, 500, 600
CSS vars:  --font-playfair, --font-dm-sans
Tailwind:  font-serif → Playfair Display
           font-sans  → DM Sans
```

### Tailwind Custom Tokens
```js
// tailwind.config.ts
colors: {
  charcoal: '#1e1e1e',
  charcoal2: '#252525',
  charcoal3: '#2e2e2e',
  amber: '#D4A020',
  amberLight: '#F0C84A',
  amberPale: '#fdf6e3',
  offwhite: '#F7F5F0',
}
```

### Design Reference
The complete visual design is in `_REFERENCE_PROTOTYPE.html` at the project root.
**Every page must match this prototype exactly** — layout, spacing, colors, components.

---

## All 18 Pages — Routes & Status

| # | Page | Route | Status |
|---|---|---|---|
| 1 | Homepage | `/` | ✅ Built |
| 2 | About JRM | `/about` | ✅ Built |
| 3 | I'm New Here | `/new-here` | ✅ Built |
| 4 | Services | `/services` | ✅ Built |
| 5 | Live Stream | `/live` | ✅ Built |
| 6 | Events & Calendar | `/events` | ✅ Built |
| 7 | Sermons | `/sermons` | ✅ Built |
| 8 | Prayer Wall | `/prayer-wall` | ✅ Built |
| 9 | DNG Program | `/dng` | ✅ Built |
| 10 | Give / Offering | `/give` | ✅ Built |
| 11 | Testimony Wall | `/testimony` | ✅ Built |
| 12 | Contact & Visit | `/contact` | ✅ Built |
| 13 | Blog & Devotionals | `/blog` | ✅ Built |
| 14 | Resources | `/resources` | ✅ Built |
| 15 | Members Portal | `/members` | ✅ Built (UI shell — auth pending) |
| 16 | Church Directory | `/directory` | ✅ Built |
| 17 | Pastoral Services | `/pastoral` | ✅ Built |
| 18 | International | `/international` | ✅ Built |
| 19 | Academy & College | `/academy` | ✅ Built |

---

## Phase 2 — Backend Connections (Dubai Team)

All forms are currently UI-only (useState success messages).
Phase 2 connects each form to Firebase Firestore.

### Firestore Collections to Create

```
prayer_requests
  - name: string
  - message: string
  - visibility: 'public' | 'private'
  - timestamp: Timestamp

event_registrations
  - fullName: string
  - email: string
  - phone: string
  - eventName: string
  - attendees: number
  - church: string
  - notes: string
  - timestamp: Timestamp

dng_enrollments
  - fullName: string
  - phone: string
  - email: string
  - stage: 'believer' | 'disciple' | 'leader'
  - schedule: string
  - timestamp: Timestamp

testimonies
  - name: string
  - location: string
  - story: string
  - permission: string
  - approved: boolean
  - timestamp: Timestamp

contact_messages
  - name: string
  - email: string
  - phone: string
  - subject: string
  - message: string
  - timestamp: Timestamp

give_submissions
  - fullName: string
  - email: string
  - amount: number
  - frequency: 'one-time' | 'weekly' | 'monthly'
  - category: string
  - timestamp: Timestamp
```

### Firebase Integration Pattern
Use this pattern consistently across all forms:

```typescript
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '@/lib/firebase'

const db = getFirestore(app)

const handleSubmit = async (data: FormData) => {
  await addDoc(collection(db, 'prayer_requests'), {
    ...data,
    timestamp: serverTimestamp()
  })
}
```

### Firebase Client Setup
Create `lib/firebase.ts`:

```typescript
import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig)
```

---

## Phase 2 — Pending Integrations (Placeholders in Code)

Search for `// TODO` comments in the codebase. Key ones:

| Location | TODO |
|---|---|
| `app/live/page.tsx` | Replace placeholder with YouTube/Facebook Live iframe |
| `app/events/page.tsx` | Replace Google Calendar placeholder with real embed code |
| `app/give/page.tsx` | Connect PayMongo checkout session |
| `app/members/page.tsx` | Replace simulated login with Firebase Auth |
| `app/resources/page.tsx` | Replace download button hrefs with real file URLs |
| `app/international/page.tsx` | Add real URLs for Dubai, HK, UK, AU, US outreach pages |
| `app/directory/page.tsx` | Populate full 85 church + 55 mission dataset |

---

## Sanity CMS — Content Team Setup

The `/studio` folder contains the Sanity Studio.
Manila content team logs in at `jesusreigns.com/studio`.

### Content Schemas
- `sermon` — title, date, speaker, youtubeUrl, series, duration
- `blogPost` — title, date, author, body, category, excerpt
- `event` — title, date, location, type, description, registrationOpen
- `churchDirectory` — name, pastor, address, region, type, isMission

### Who Manages What
| Person | Role | Access |
|---|---|---|
| Manila content team | Blog, Sermons, Events | Sanity Editor |
| Dubai developer | Code, Firebase, deployment | Sanity Developer |
| Ptr. Serge | Project oversight | Sanity Admin |

---

## Coding Rules for Agents

1. **Always match the prototype.** Check `_REFERENCE_PROTOTYPE.html` before building any page.
2. **Never install Supabase.** This project uses Firebase for all backend services.
3. **Never use localStorage or sessionStorage** in components — use React state (useState).
4. **All forms** must have a `// TODO Phase 2` comment on the submit handler if not yet connected to Firebase.
5. **Fonts are already configured** in `app/layout.tsx` via `next/font/google`. Do not add `@import` to CSS files.
6. **Nav and Footer** are in `app/layout.tsx`. Never add them inside individual page files.
7. **"use client"** must be added to any page that uses useState, useEffect, or browser APIs.
8. **Metadata** must be exported from every page file.
9. **TypeScript** — no `any` types. Define proper interfaces for all data structures.
10. **Mobile first** — all layouts must be responsive. Test at 375px (mobile) and 1440px (desktop).

---

## Key Contacts

| Role | Name | Location |
|---|---|---|
| Project Lead / Pastor | Ptr. Serge Santos | Vallejo, California |
| Senior Bishop | Bishop Vincent Javier | Manila |
| Co-Founder | Dr. Ligaya Javier | Manila |
| Developer Team | Dubai Volunteers | Dubai, UAE |

---

## Ministry Context (for content accuracy)

- **Vision**: A caring church committed to win souls and make disciples
- **Core Values**: WISDOM — Worship, Intercession, Service, Discipleship, One Heart, Mission
- **7-Point Agenda**: ECPD, DNG, CESA, International Mission, Prayer & Worship, Education, TRENDS
- **DNG**: Discipling the Next Generation — 3 stages: Believer → Disciple → Leader
- **CESA**: Community Emergency & Soul Care Assistance — Hotline: 811
- **JRCA**: Jesus Reigns Christian Academy (primary & secondary, Director: Dr. Ligaya Javier)
- **JRCC**: Jesus Reigns Christian College (tertiary, Director: Dr. Ligaya Javier)
- **Network**: 85 provincial churches + 55 ongoing missions (Philippines) + 6+ global regions
- **Social**: @jrmcentral on all platforms
- **Live Stream**: YouTube + Facebook, every Sunday 8:00 AM

---

*Last updated: February 2026 | Stack updated from Supabase → Firebase*
