# FillGenie Marketing Website - Comprehensive Development Plan

## Executive Summary

A marketing website for FillGenie - an intelligent Chrome extension that automatically fills web forms using users' existing documents and data. The site targets individual professionals and business teams struggling with repetitive form-filling tasks.

**Tech Stack**: React + TypeScript + Tailwind CSS + Vercel  
**Authentication**: Shared with existing FillGenie dashboard (FastAPI backend)  
**Primary Goal**: Drive Chrome extension downloads and user signups

---

## Brand Identity

### Color Palette
```css
:root {
  /* Primary Colors */
  --warm-sand: #FBF4E6;        /* Background, light sections */
  --sunlit-amber: #D98C4A;     /* Primary CTA, accents */
  --lavender-mist: #B7A5D8;    /* Secondary accents, highlights */
  --teal-softwave: #6BA4A6;    /* Trust elements, icons */
  
  /* Text Colors */
  --text-main: #4E3620;        /* Headings, primary text */
  --text-muted: #7A6144;       /* Secondary text, descriptions */
  
  /* Utility Colors */
  --white: #FFFFFF;
  --success: #6BA4A6;
  --error: #D98C4A;
}
```

### Design Aesthetic
- **Natural, organic feel** with soft edges and warm tones
- **Professional yet approachable** - blend of business credibility with human touch
- **Clean, spacious layouts** - lots of whitespace
- **Modern sans-serif typography** (Inter, Plus Jakarta Sans, or similar)
- **Subtle texture overlays** on backgrounds for depth

### Tone of Voice
- Clear, not clever
- Confident, not technical
- Practical, not futuristic
- Human-centered outcomes over technology features
- No AI jargon - focus on solving real problems

---

## Site Architecture

### Page Structure
```
/                          # Home (Marketing landing page)
├── /pricing               # Pricing tiers and plans
├── /how-it-works          # Detailed product explanation
├── /for-individuals       # Use cases for solo users
├── /for-teams             # Use cases for businesses
├── /security              # Security and privacy details
├── /contact               # Contact form for enterprise
├── /login                 # Existing auth (redirect to dashboard)
├── /signup                # New user registration
├── /dashboard             # Existing dashboard (post-auth)
└── /legal
    ├── /terms             # Terms of Service
    ├── /privacy           # Privacy Policy
    └── /security-practices # Security documentation
```

---

## Page-by-Page Specifications

## 1. HOME PAGE (`/`)

### Section 1: Hero - Above the Fold
**Goal**: Visitor understands FillGenie in under 5 seconds.

**Layout**:
- Full viewport height
- Background: Gradient from warm-sand to soft white
- Subtle organic texture overlay

**Content**:
```
HEADLINE (Large, bold, text-main):
"Stop re-entering the same information across forms"

SUBHEADLINE (Medium, text-muted):
"FillGenie uses your documents to complete forms accurately in seconds.
For professionals and teams buried in admin work."

PRIMARY CTA (Single button, sunlit-amber):
→ "Try the Chrome Extension" (links to Chrome Web Store)

SECONDARY TEXT (Small, below CTA):
"Free to start • Works on any website • No credit card required"
```

**Visual Element**:
- Right side: Animated hero illustration or video
- Show browser window with form being auto-filled
- Highlight fields populating with smooth animations
- Confidence scores appearing
- ~15-20 second loop

**Trust Indicators** (subtle, bottom of hero):
- "🔒 Your data stays private"
- "⚡ Works in 3 seconds"
- "✓ 99% accuracy"

---

### Section 2: Visual Proof - Product Demo
**Goal**: Show the product working, don't just describe it.

**Layout**:
- Full-width section with teal-softwave background
- Centered video/GIF player

**Content**:
```
SUBHEADING:
"See FillGenie in action"

VIDEO/GIF:
- 30-60 second demo showing:
  1. User opens form (expense report, job application, etc.)
  2. Clicks FillGenie extension
  3. Enters simple context: "Fill my Python training expense from May 17th"
  4. Watch fields populate automatically
  5. Confidence colors shown (green/yellow)
  6. User reviews and submits

CAPTION BELOW:
"From blank form to filled in 10 seconds"
```

**Fallback**: If no video yet, use interactive screenshot carousel with annotations.

---

### Section 3: Problem Statement
**Goal**: Make visitor feel understood - name the pain clearly.

**Layout**:
- Warm-sand background
- 3-column grid on desktop, stack on mobile
- Icons with pain points

**Content**:
```
HEADING:
"Forms shouldn't feel like data entry"

THREE PAIN POINTS:

1. 🔄 "Re-entering the same information is exhausting"
   "Job applications, expense reports, onboarding forms—
   you've typed your information a hundred times."

2. ⏰ "Admin work slows down real work"
   "Teams waste hours on forms that could be automated.
   Time better spent on high-value tasks."

3. ⚠️ "Manual entry creates errors"
   "Typos, wrong dates, missing fields—
   mistakes that lead to delays and rework."
```

---

### Section 4: How It Works (Simple 3-Step)
**Goal**: Explain the magic without jargon.

**Layout**:
- White background
- Horizontal flow with numbered steps
- Icons or simple illustrations

**Content**:
```
HEADING:
"Three steps to never copy-paste again"

STEP 1: 📤 Upload your documents
"Add PDFs, receipts, resumes, or forms you've filled before.
FillGenie learns from your data."

STEP 2: 🌐 Open any form
"Works on any website—HR portals, job sites, government forms,
expense systems. No integrations needed."

STEP 3: ✨ FillGenie fills it for you
"Click the extension, describe what you need, and watch it populate.
Review, edit if needed, and submit."

CTA: "Get Started Free" (sunlit-amber button)
```

**Technical Note**: Avoid mentioning RAG, embeddings, agents, vector search, etc.

---

### Section 5: Use Cases by Audience
**Goal**: Speak to both individuals and teams without confusion.

**Layout**:
- Two-column layout (tabs or side-by-side)
- Lavender-mist and teal-softwave accent colors

**Content**:

#### LEFT: For Individuals
```
HEADING: "For busy professionals"

USE CASES:
✓ Job applications across multiple sites
✓ Government and school forms
✓ Expense reports and reimbursements  
✓ Repeated account signups
✓ Visa and travel paperwork
✓ Freelance invoices and contracts

TESTIMONIAL SLOT:
[Space for future user quote]
"Saves me 3+ hours every week on admin tasks"
— Sarah M., Operations Manager

CTA: "Try Free Extension"
```

#### RIGHT: For Teams & Companies
```
HEADING: "For teams drowning in forms"

USE CASES:
✓ Employee onboarding workflows
✓ HR documentation and benefits
✓ Finance and expense approvals
✓ Compliance and audit forms
✓ Vendor paperwork and contracts
✓ Internal request systems

VALUE PROPS:
• Reduce onboarding time by 70%
• Eliminate data entry errors
• Free up team capacity
• Works with existing tools

CTA: "Schedule a Demo" (enterprise contact)
```

---

### Section 6: Why FillGenie is Different
**Goal**: Build trust and show differentiation without technical jargon.

**Layout**:
- Full-width section, warm-sand background
- Grid of 4-6 differentiators with icons

**Content**:
```
HEADING:
"Form filling that fits your workflow"

DIFFERENTIATORS:

1. 🔌 "Works everywhere"
   No integrations, no API setup, no software installs.
   Works on any website with forms.

2. 📁 "Uses your existing data"
   Upload documents you already have—FillGenie understands
   context and pulls the right information.

3. 🎯 "Smart, not just fast"
   Matches fields intelligently. Shows confidence scores
   so you know what to review.

4. 🔒 "You stay in control"
   Review every field before submitting. FillGenie suggests,
   you approve.

5. 🚀 "No complex setup"
   Install the extension, upload a few docs, start saving time.
   No training required.

6. 🤝 "Built for humans"
   Reduces cognitive load and errors. Lets you focus on
   decisions, not data entry.

OPTIONAL AI MENTION (subtle):
"Powered by AI that understands context—but you're always in charge."
```

---

### Section 7: Trust & Safety
**Goal**: Address privacy concerns, especially for enterprise buyers.

**Layout**:
- White or light lavender-mist background
- Clean, reassuring design
- Icons for each trust element

**Content**:
```
HEADING:
"Your data, your control"

TRUST ELEMENTS:

🔐 "Privacy by design"
Your documents are encrypted and stored securely.
We never share or sell your data.

🏢 "Isolated storage"
Each user gets their own secure space. Your information
never mixes with others.

👤 "You choose what to share"
Control exactly which documents FillGenie can access.
Delete your data anytime.

🛡️ "Enterprise-grade security"
Built with the same standards used by financial institutions.
[Link to detailed security page]

CERTIFICATIONS (when available):
[Placeholder badges for: SOC 2, GDPR Compliant, etc.]

CTA: "Read our Security Practices →" (link to /legal/security-practices)
```

---

### Section 8: Social Proof (Early Stage)
**Goal**: Build credibility even without extensive testimonials.

**Layout**:
- Warm-sand background
- Honest, transparent messaging

**Content**:
```
HEADING:
"Trusted by professionals who value their time"

EARLY STAGE MESSAGING:
"Currently piloting with HR teams, finance professionals,
and operations managers at forward-thinking companies."

[SPACE FOR]:
- Beta user testimonials (when available)
- Company logos (when available)
- Usage stats: "X forms filled" "Y hours saved"

FOUNDER CREDIBILITY (if applicable):
"Built by [Founder Name], former [relevant experience]
who understands the pain of repetitive admin work."

VIDEO TESTIMONIAL SLOT:
[Reserve space for future user video testimonials]

CTA: "Join Early Users" (email signup for updates)
```

---

### Section 9: Pricing
**Goal**: Show pricing transparently without hiding information.

**Layout**:
- White background
- 3-card layout: Free, Premium, Enterprise
- Toggle: "For Individuals" / "For Teams"

**Content**:

#### Individual Pricing
```
╔══════════════════╗  ╔══════════════════╗  ╔══════════════════╗
║   FREE TIER      ║  ║   PREMIUM        ║  ║   ENTERPRISE     ║
╠══════════════════╣  ╠══════════════════╣  ╠══════════════════╣
║ $0/month         ║  ║ $XX/month        ║  ║ Custom Pricing   ║
║                  ║  ║                  ║  ║                  ║
║ • 50 forms/month ║  ║ • Unlimited forms║  ║ • Custom limits  ║
║ • 10 documents   ║  ║ • 100+ documents ║  ║ • Team management║
║ • Basic support  ║  ║ • Priority AI    ║  ║ • SSO & security ║
║ • All websites   ║  ║ • All features   ║  ║ • Dedicated support║
║                  ║  ║ • Advanced RAG   ║  ║ • SLA guarantees ║
║                  ║  ║                  ║  ║ • Custom training║
║                  ║  ║                  ║  ║                  ║
║ [Get Started] ─→ ║  ║ [Start Trial] ─→ ║  ║ [Contact Sales]─→║
╚══════════════════╝  ╚══════════════════╝  ╚══════════════════╝

"No credit card required for free tier"
"Premium includes 14-day free trial"
```

**Team Pricing Note**:
"For teams of 10+, contact us for volume pricing and custom onboarding."

---

### Section 10: Final CTA
**Goal**: One last push to convert.

**Layout**:
- Full-width, gradient background (warm-sand → lavender-mist)
- Centered, bold messaging

**Content**:
```
HEADLINE:
"Ready to stop wasting time on forms?"

SUBHEADLINE:
"Join professionals who've automated their busywork."

PRIMARY CTA:
→ "Install Chrome Extension" (large, sunlit-amber button)

SECONDARY CTA (text link):
"Schedule a demo for your team →"

TRUST REMINDER:
"🔒 Free to start • ⚡ Works in seconds • ✓ Cancel anytime"
```

---

### Footer
**Layout**:
- Dark warm-sand background (#E8DCC8)
- 4-column grid on desktop

**Content**:
```
COLUMN 1: About FillGenie
"Automatically fill forms using your existing data.
Stop copy-pasting. Start saving time."

[Logo]

COLUMN 2: Product
• How It Works
• For Individuals
• For Teams
• Pricing
• Security

COLUMN 3: Company
• About Us
• Contact Sales
• Careers (if applicable)
• Blog (future)

COLUMN 4: Legal & Contact
• Terms of Service
• Privacy Policy
• Security Practices
• Email: hello@fillgenie.com
• LinkedIn: [link]

BOTTOM BAR:
"© 2025 FillGenie. All rights reserved."
```

---

## 2. PRICING PAGE (`/pricing`)

**Goal**: Detailed pricing breakdown with comparison table.

**Layout**:
- Hero section explaining value proposition
- Interactive pricing cards (monthly/annually toggle)
- Detailed feature comparison table
- FAQ section

**Content Structure**:
```
HERO:
"Plans that scale with your needs"
"From individual professionals to enterprise teams"

PRICING CARDS: (Same as homepage, more detailed)

COMPARISON TABLE:
Feature breakdown across all tiers showing:
- Form filling limits
- Document storage
- Advanced features
- Support levels
- Security features
- Integration options (future)

FAQ:
"What happens when I reach my limit?"
"Can I upgrade or downgrade anytime?"
"Do you offer refunds?"
"What payment methods do you accept?"
"Is there a team discount?"

CTA: "Start Free Trial"
```

---

## 3. HOW IT WORKS PAGE (`/how-it-works`)

**Goal**: Deep dive into product functionality without technical jargon.

**Sections**:

1. **Hero**: "See exactly how FillGenie saves you hours"

2. **Step-by-Step Walkthrough**:
   - Detailed breakdown of user journey
   - Screenshots at each step
   - Annotations showing key features

3. **Behind the Scenes (Simple)**:
   - "FillGenie understands your documents"
   - "Smart matching finds the right information"
   - "Confidence scores show what to review"
   - NO technical terms like RAG, vectors, embeddings

4. **Common Scenarios**:
   - Video demos for different use cases
   - Job application example
   - Expense report example
   - HR onboarding example

5. **FAQs**:
   - "Does it work on every website?"
   - "What if a field is wrong?"
   - "How accurate is it?"
   - "Can I train it on my data?"

6. **CTA**: "Try It Yourself"

---

## 4. FOR INDIVIDUALS PAGE (`/for-individuals`)

**Goal**: Speak directly to solo users with specific use cases.

**Structure**:

**Hero**:
```
"Your personal assistant for form filling"
"Stop retyping the same information across websites"
```

**Use Case Showcases** (6 detailed sections):

1. **Job Applications**
   - Problem: Applying to multiple jobs means filling similar forms repeatedly
   - Solution: Upload resume once, FillGenie fills all applications
   - Visual: Side-by-side before/after

2. **Expense Reports**
   - Problem: Monthly expense submissions take 30+ minutes
   - Solution: Upload receipt, FillGenie populates corporate expense form
   - Visual: Receipt → Filled form

3. **Government & School Forms**
   - Problem: Complex forms with repetitive personal information
   - Solution: One-click population from stored documents
   - Visual: Immigration form example

4. **Account Signups**
   - Problem: Creating accounts on multiple platforms
   - Solution: Consistent information across all signups
   - Visual: Multiple signup forms filled

5. **Freelance Workflows**
   - Problem: Client contracts, invoices, project forms
   - Solution: Templates filled from your business data
   - Visual: Invoice generation

6. **Personal Admin**
   - Problem: Insurance forms, medical records, subscriptions
   - Solution: Centralized data source for all forms
   - Visual: Medical form example

**Pricing CTA**: "Start Free - No Credit Card Required"

**Testimonials Section**: Space for individual user quotes

---

## 5. FOR TEAMS PAGE (`/for-teams`)

**Goal**: Address enterprise needs and show business value.

**Structure**:

**Hero**:
```
"Eliminate data entry busywork for your entire team"
"Free up hundreds of hours every month"
```

**Value Proposition**:
- ROI Calculator: "How much time could your team save?"
  - Input: Number of employees, forms per week
  - Output: Hours saved, cost savings

**Team Use Cases**:

1. **HR & People Operations**
   - Employee onboarding: Reduce 3-hour process to 20 minutes
   - Benefits enrollment
   - Performance reviews
   - Exit documentation

2. **Finance & Accounting**
   - Expense approvals
   - Vendor forms
   - Budget requests
   - Audit documentation

3. **Operations**
   - Internal request systems
   - Project intake forms
   - Resource allocation
   - Compliance documentation

4. **Compliance & Legal**
   - Regulatory filings
   - Contract management
   - Policy acknowledgments
   - Audit trails

**Enterprise Features**:
- Team management dashboard
- Shared document libraries
- Approval workflows
- Usage analytics
- SSO integration (future)
- Custom data retention policies

**Security for Enterprise**:
- SOC 2 compliance (in progress)
- Data isolation
- Audit logs
- Role-based access control

**Case Study Section**: Space for future customer stories

**CTA**: 
- Primary: "Schedule a Demo"
- Secondary: "Request Custom Pricing"

---

## 6. SECURITY PAGE (`/security`)

**Goal**: Detailed security information to address enterprise concerns.

**Structure**:

**Hero**:
```
"Security and privacy you can trust"
"Built with enterprise-grade protection from day one"
```

**Security Measures** (organized sections):

1. **Data Encryption**
   - At rest: AES-256
   - In transit: TLS 1.3
   - End-to-end for sensitive fields

2. **Access Control**
   - User authentication via JWT
   - Role-based permissions
   - Multi-factor authentication (planned)

3. **Data Isolation**
   - Separate S3 bucket prefixes per user
   - Dedicated Pinecone namespaces
   - PostgreSQL schema isolation

4. **Infrastructure Security**
   - AWS cloud infrastructure
   - Regular security audits
   - Automated vulnerability scanning
   - DDoS protection

5. **Data Privacy**
   - No data sharing or selling
   - User-controlled data retention
   - Right to deletion (GDPR compliant)
   - Transparent data usage

6. **Compliance** (planned/in progress):
   - SOC 2 Type II
   - GDPR compliant
   - CCPA compliant
   - HIPAA ready (for healthcare)

**Incident Response**:
- 24/7 monitoring
- Incident response plan
- Transparent breach notification

**Certifications Timeline**:
- Visual roadmap of completed and planned certifications

**Download**: Security whitepaper (PDF)

**CTA**: "Questions about security? Contact our team"

---

## 7. CONTACT PAGE (`/contact`)

**Goal**: Enterprise sales and general inquiries.

**Layout**: Two-column

**Left Side: Contact Form**:
```
Name *
Email *
Company
Team Size: [Dropdown: 1-10, 11-50, 51-200, 200+]
Inquiry Type: [Dropdown: Demo Request, Enterprise Sales, General Question, Partnership]
Message *

[Submit Button]
```

**Right Side: Contact Info**:
```
📧 Email: hello@fillgenie.com
💼 Sales: sales@fillgenie.com
🛟 Support: support@fillgenie.com

🕐 Response Time:
Sales inquiries: Within 24 hours
Support: Within 48 hours

💬 Prefer to schedule directly?
[Calendly embed or link]
```

**FAQ Section**: Common presales questions

---

## 8. LEGAL PAGES

### `/legal/terms` - Terms of Service

**Outline**:
```
1. Acceptance of Terms
2. Description of Service
3. User Accounts and Registration
4. User Obligations
   - Responsible use
   - Data accuracy
   - Prohibited activities
5. Intellectual Property
6. Data Usage and Privacy (link to Privacy Policy)
7. Free and Paid Services
   - Free tier limitations
   - Premium features
   - Payment terms
   - Cancellation policy
8. Disclaimer of Warranties
9. Limitation of Liability
10. Termination
11. Changes to Terms
12. Governing Law
13. Contact Information

Last Updated: [Date]
```

### `/legal/privacy` - Privacy Policy

**Outline**:
```
1. Information We Collect
   - Account information
   - Uploaded documents
   - Usage data
   - Form field data (temporary)
   
2. How We Use Your Information
   - To provide the service
   - To improve AI models
   - To communicate with you
   - Analytics (anonymized)
   
3. Data Storage and Security
   - AWS infrastructure
   - Encryption standards
   - Data retention periods
   - User data isolation
   
4. Data Sharing and Disclosure
   - We do not sell your data
   - Third-party services (AWS, Pinecone, OpenAI)
   - Legal requirements
   
5. Your Rights
   - Access your data
   - Delete your data
   - Export your data
   - Opt-out of communications
   
6. Cookies and Tracking
   - Essential cookies
   - Analytics cookies (opt-out available)
   
7. Children's Privacy (COPPA)
   - Service not intended for under 13
   
8. International Users
   - GDPR compliance
   - Data transfer mechanisms
   
9. Changes to Privacy Policy
10. Contact Us

Last Updated: [Date]
```

### `/legal/security-practices` - Security Documentation

**Outline**:
```
1. Security Overview
   - Commitment to security
   - Regular audits
   
2. Technical Security Measures
   - Encryption standards
   - Authentication mechanisms
   - Access controls
   
3. Operational Security
   - Employee training
   - Background checks
   - NDA requirements
   
4. Application Security
   - Secure coding practices
   - Dependency management
   - Vulnerability scanning
   
5. Infrastructure Security
   - AWS security features
   - Network isolation
   - Monitoring and logging
   
6. Data Protection
   - User data isolation
   - Backup procedures
   - Disaster recovery
   
7. Incident Response
   - Detection and monitoring
   - Response procedures
   - Notification policy
   
8. Compliance and Certifications
   - Current compliance (GDPR)
   - Planned certifications (SOC 2)
   - Third-party audits
   
9. Responsible Disclosure
   - How to report vulnerabilities
   - Bug bounty program (future)
   
10. Security Contact
    - security@fillgenie.com

Last Updated: [Date]
```

---

## Authentication & User Flow

### Shared Authentication System

**Technical Integration**:
- Use existing FastAPI backend (`http://localhost:8000/api/v1/auth`)
- JWT-based authentication
- Same PostgreSQL database as dashboard
- Shared session management

**Login Flow** (`/login`):
1. User enters email and password
2. Frontend sends POST to `/api/v1/auth/login`
3. Receives JWT token
4. Stores token in localStorage
5. Redirects to `/dashboard` or return URL

**Signup Flow** (`/signup`):
```
FORM FIELDS:
- Full Name *
- Email Address *
- Password * (with strength indicator)
- Confirm Password *
- [ ] I agree to Terms of Service and Privacy Policy

BUTTON: "Create Free Account"

FLOW:
1. Validate input
2. POST to `/api/v1/auth/register`
3. Auto-login with returned token
4. Redirect to onboarding flow:
   a) Welcome message
   b) Prompt to install Chrome extension
   c) Prompt to upload first document
   d) Quick tutorial
```

**Password Requirements**:
- Minimum 8 characters
- At least one uppercase letter
- At least one number
- At least one special character

**Account Dashboard Integration**:
- After login, users see existing dashboard
- Seamless navigation between marketing site and dashboard
- Persistent header with account menu

---

## Technical Specifications

### Frontend Stack

**Core Technologies**:
- **React 18+** with TypeScript
- **Vite** for build tooling (fast dev server)
- **Tailwind CSS** for styling
- **React Router v6** for navigation
- **Framer Motion** for animations
- **React Hook Form** for forms
- **Zod** for validation
- **Axios** for API calls

**Key Libraries**:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.0",
    "axios": "^1.6.0",
    "@headlessui/react": "^1.7.0",
    "@heroicons/react": "^2.1.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  }
}
```

### Project Structure

```
fillgenie-website/
├── public/
│   ├── videos/              # Product demo videos
│   ├── images/              # Screenshots, illustrations
│   └── fonts/               # Custom fonts if needed
├── src/
│   ├── assets/              # SVG icons, logos
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx   # Main navigation
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── home/            # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ProductDemo.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── UseCases.tsx
│   │   │   ├── Differentiators.tsx
│   │   │   ├── TrustSafety.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── PricingPreview.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── pricing/         # Pricing page components
│   │   │   ├── PricingCards.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   └── PricingFAQ.tsx
│   │   ├── auth/            # Auth components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Pricing.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ForIndividuals.tsx
│   │   ├── ForTeams.tsx
│   │   ├── Security.tsx
│   │   ├── Contact.tsx
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── legal/
│   │       ├── Terms.tsx
│   │       ├── Privacy.tsx
│   │       └── SecurityPractices.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx  # Shared auth state
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useScrollAnimation.ts
│   │   └── useMediaQuery.ts
│   ├── services/
│   │   └── api.ts           # API client
│   ├── utils/
│   │   ├── validation.ts
│   │   └── constants.ts
│   ├── styles/
│   │   └── globals.css      # Global styles, Tailwind config
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Tailwind Configuration

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-sand': '#FBF4E6',
        'sunlit-amber': '#D98C4A',
        'lavender-mist': '#B7A5D8',
        'teal-softwave': '#6BA4A6',
        'text-main': '#4E3620',
        'text-muted': '#7A6144',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
```

### API Integration

**Base URL Configuration**:
```typescript
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

**Environment Variables**:
```bash
# .env.production
VITE_API_URL=https://api.fillgenie.com/api/v1
VITE_CHROME_STORE_URL=https://chrome.google.com/webstore/detail/fillgenie/...
VITE_DASHBOARD_URL=https://dashboard.fillgenie.com

# .env.development
VITE_API_URL=http://localhost:8000/api/v1
VITE_CHROME_STORE_URL=#
VITE_DASHBOARD_URL=http://localhost:5173
```

---

## Responsive Design Requirements

### Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile Considerations
- Hero section: Stack vertically, full-screen CTA
- Navigation: Hamburger menu
- Pricing cards: Swipeable carousel
- Feature grids: Single column
- Videos: Responsive embeds, smaller on mobile
- Forms: Full-width inputs, larger touch targets
- Footer: Accordion-style columns

### Performance Targets
- Lighthouse score: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

---

## Animation & Interaction Guidelines

### Scroll Animations
- **Fade in on scroll**: Sections appear as user scrolls
- **Counter animations**: Pricing numbers, stats count up
- **Progress indicators**: Show scroll depth
- Use `Framer Motion` with `IntersectionObserver`

### Micro-interactions
- **Button hover states**: Slight scale up, color shift
- **Card hover**: Subtle lift with shadow
- **Input focus**: Border highlight, smooth transition
- **CTA pulse**: Gentle attention-grabbing animation

### Video/Demo Controls
- Autoplay on viewport entry (muted)
- Play/pause controls
- Fullscreen option
- Captions available

### Loading States
- Skeleton screens for content
- Smooth transitions between states
- Progress indicators for form submissions

---

## SEO & Meta Requirements

### Meta Tags (per page)
```html
<!-- Home Page Example -->
<title>FillGenie - Automatically Fill Forms with AI</title>
<meta name="description" content="Stop re-entering the same information across forms. FillGenie uses your documents to complete forms accurately in seconds. For professionals and teams." />
<meta name="keywords" content="form filling, automation, AI forms, data entry, expense reports, job applications" />

<!-- Open Graph -->
<meta property="og:title" content="FillGenie - Stop Wasting Time on Forms" />
<meta property="og:description" content="Automatically fill any web form using your existing documents. Save hours on repetitive admin work." />
<meta property="og:image" content="https://fillgenie.com/og-image.jpg" />
<meta property="og:url" content="https://fillgenie.com" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="FillGenie - Automatically Fill Forms with AI" />
<meta name="twitter:description" content="Stop copy-pasting. FillGenie fills forms for you in seconds." />
<meta name="twitter:image" content="https://fillgenie.com/twitter-card.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://fillgenie.com" />
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FillGenie",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Chrome",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "TBD"
  }
}
```

### Sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://fillgenie.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://fillgenie.com/pricing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... all pages ... -->
</urlset>
```

### robots.txt
```
User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /api/

Sitemap: https://fillgenie.com/sitemap.xml
```

---

## Vercel Deployment Configuration

### Project Settings
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.fillgenie.com/api/:path*"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Environment Variables in Vercel
- `VITE_API_URL`: Production API URL
- `VITE_CHROME_STORE_URL`: Chrome Web Store link
- `VITE_DASHBOARD_URL`: Dashboard URL

### Custom Domain Setup
- Primary: `fillgenie.com`
- Subdomains:
  - `www.fillgenie.com` (redirect to primary)
  - `dashboard.fillgenie.com` (existing dashboard)
  - `api.fillgenie.com` (backend API)

### Performance Optimizations
- Enable Vercel Analytics
- Configure image optimization
- Set up caching headers
- Enable gzip/brotli compression

---

## Content Requirements

### Copywriting Principles
1. **Clear, not clever**: Avoid puns and wordplay
2. **Outcome-focused**: Lead with benefits, not features
3. **Scannable**: Use bullets, short paragraphs, whitespace
4. **Human tone**: Conversational but professional
5. **Action-oriented**: Every section ends with next step
6. **Avoid jargon**: No AI buzzwords unless necessary

### Visual Assets Needed

**Hero Section**:
- [ ] Animated product demo video (30-60s)
- [ ] Hero illustration or screenshot
- [ ] FillGenie logo (SVG, multiple sizes)

**Product Screenshots**:
- [ ] Chrome extension popup (filled)
- [ ] Browser with form being filled
- [ ] Confidence color visualization
- [ ] Dashboard document upload
- [ ] Multiple form types (job app, expense, HR)

**Icons & Illustrations**:
- [ ] Feature icons (24x24, 48x48 SVG)
- [ ] Step-by-step flow diagrams
- [ ] Use case illustrations
- [ ] Trust badges (lock, checkmark, etc.)
- [ ] Company logos (when available)

**Videos**:
- [ ] Full product walkthrough (2-3 min)
- [ ] Quick demos per use case (15-30s each)
- [ ] Testimonial videos (when available)

**Diagrams**:
- [ ] How it works flow chart
- [ ] Data security architecture (simplified)
- [ ] Integration diagram

### Placeholder Content
- Use real product screenshots where available
- Use placeholder.com or unsplash.com for temporary images
- Lorem ipsum ONLY for layout testing, never in production
- Clearly mark beta/coming soon features

---

## Analytics & Tracking

### Google Analytics 4
```typescript
// Track key events
gtag('event', 'cta_click', {
  'cta_location': 'hero',
  'cta_text': 'Try Chrome Extension'
});

gtag('event', 'signup_start', {
  'signup_method': 'email'
});

gtag('event', 'page_view', {
  'page_title': document.title,
  'page_location': window.location.href
});
```

### Key Metrics to Track
- **Conversion Funnel**:
  1. Landing page visit
  2. Scroll depth (25%, 50%, 75%, 100%)
  3. CTA clicks
  4. Chrome extension clicks
  5. Signup started
  6. Signup completed
  7. First document uploaded

- **Engagement Metrics**:
  - Time on page
  - Video play rate
  - Video completion rate
  - Pricing page visits
  - Contact form submissions

- **Traffic Sources**:
  - Organic search
  - Paid ads (future)
  - Social media
  - Direct
  - Referral

### Hotjar / Microsoft Clarity
- Heatmaps for homepage and pricing
- Session recordings (anonymized)
- Conversion funnels
- User feedback surveys

---

## Accessibility (WCAG 2.1 AA)

### Requirements
- [ ] Semantic HTML throughout
- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Alt text for all images
- [ ] Aria labels for interactive elements
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Sufficient color contrast (4.5:1 text, 3:1 UI)
- [ ] Responsive text sizing (rem units)
- [ ] Skip to main content link
- [ ] Form labels properly associated
- [ ] Error messages descriptive and visible

### Testing
- [ ] Use axe DevTools
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Keyboard-only navigation test
- [ ] Color blindness simulation
- [ ] Mobile accessibility audit

---

## Testing Requirements

### Unit Tests
- Component rendering
- Form validation logic
- API client functions
- Utility functions

### Integration Tests
- Auth flow (login/signup)
- Form submissions
- API integration
- Navigation flows

### E2E Tests (Playwright)
```typescript
// Example critical path test
test('user can sign up and access dashboard', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Try Chrome Extension');
  await page.click('text=Sign Up');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'SecurePass123!');
  await page.click('button:has-text("Create Account")');
  await expect(page).toHaveURL('/dashboard');
});
```

### Manual Testing Checklist
- [ ] All CTAs link correctly
- [ ] Forms validate properly
- [ ] Videos load and play
- [ ] Responsive design on all devices
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Auth flows work correctly
- [ ] Navigation works on all pages
- [ ] Footer links work
- [ ] Email links open mail client
- [ ] External links open in new tab

---

## Launch Checklist

### Pre-Launch (1 week before)
- [ ] All copy finalized and proofread
- [ ] All images optimized (WebP format)
- [ ] Videos encoded and compressed
- [ ] SEO meta tags on all pages
- [ ] Analytics configured and tested
- [ ] Forms tested (spam protection)
- [ ] SSL certificate configured
- [ ] Domain DNS configured
- [ ] Custom 404 page created
- [ ] Legal pages reviewed by lawyer (if possible)

### Launch Day
- [ ] Final build and deploy to Vercel
- [ ] Verify all environment variables
- [ ] Test auth flow in production
- [ ] Check API endpoints responding
- [ ] Test Chrome extension link
- [ ] Verify analytics tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Enable Vercel Analytics
- [ ] Monitor error logs
- [ ] Send launch announcement

### Post-Launch (first week)
- [ ] Monitor analytics daily
- [ ] Check for broken links
- [ ] Review user feedback
- [ ] Monitor server performance
- [ ] Fix any critical bugs
- [ ] A/B test CTAs (if needed)
- [ ] Collect early user testimonials

---

## Future Enhancements (Phase 2)

### Content
- [ ] Blog section for SEO
- [ ] Customer success stories
- [ ] Video testimonials
- [ ] Help center / docs
- [ ] Webinars and demos
- [ ] Comparison pages (vs. competitors)
- [ ] ROI calculator improvements
- [ ] Industry-specific landing pages

### Features
- [ ] Live chat support
- [ ] In-app onboarding tour
- [ ] Referral program
- [ ] Affiliate program
- [ ] Partner integrations showcase
- [ ] Community forum
- [ ] API documentation page
- [ ] Developer portal
- [ ] Status page

### Technical
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA)
- [ ] Enhanced analytics dashboard
- [ ] A/B testing framework
- [ ] Advanced SEO optimizations
- [ ] Performance monitoring (Sentry)
- [ ] Feature flags system

---

## Content Calendar & Maintenance

### Regular Updates
- **Monthly**: Review analytics, update testimonials, refresh screenshots
- **Quarterly**: Update pricing (if changed), add new use cases, refresh copy
- **Annually**: Legal page review, security audit results, roadmap updates

### Blog Topics (for future)
- How to automate job applications
- Reducing admin burden in HR departments
- Data privacy in form automation
- Case studies and success stories
- Product updates and feature releases
- Tips for efficient form management

---

## Key Success Metrics

### Primary KPIs (Track Weekly)
1. **Website Traffic**: Unique visitors, page views
2. **Conversion Rate**: Visitors → Signups
3. **Chrome Extension Installs**: Clicks to store
4. **User Activation**: Signups → Document uploaded
5. **Engagement**: Time on site, pages per session
6. **Bounce Rate**: Target < 50%
7. **Demo Requests**: For enterprise leads

### Secondary Metrics
- Email list growth
- Social media traffic
- Organic search rankings
- Video completion rates
- Form submission rates
- Mobile vs. desktop traffic

### Target Goals (First 3 Months)
- 10,000 unique visitors
- 500 signups
- 100 active users (uploaded documents)
- 10 enterprise demo requests
- 50+ Chrome extension installs

---

## Questions for Developer Agent

When handoff to development agent, ensure they understand:

1. **Color Scheme**: Must use exact natural color palette provided
2. **Tone**: Balance of professional + approachable (not too corporate, not too casual)
3. **No AI Jargon**: Avoid terms like RAG, embeddings, vectors in user-facing copy
4. **Shared Auth**: Must integrate with existing FastAPI backend
5. **Chrome Store Link**: Placeholder for now, will be updated post-launch
6. **Responsive First**: Mobile experience is critical
7. **Performance**: Lighthouse score targets must be met
8. **Accessibility**: WCAG 2.1 AA compliance required
9. **SEO**: All meta tags and structured data properly implemented
10. **Analytics**: Google Analytics 4 and event tracking configured

---

## Budget Considerations (Optional)

### Domain & Hosting
- Domain: ~$15/year (fillgenie.com)
- Vercel Pro: $20/month (for team features)
- SSL: Included with Vercel

### Third-Party Services
- Analytics: Google Analytics (free)
- Heatmaps: Hotjar free tier or Microsoft Clarity (free)
- Forms: Native HTML (no cost)
- Email: SendGrid free tier (2000/month)

### Optional Tools
- Figma for design handoff
- Font licenses (if custom fonts needed)
- Stock photos/videos (if needed)
- Video hosting (Vimeo or YouTube - free tier)

---

## Contact for Development Team

**Technical Questions**:
- Backend API: Existing FastAPI endpoints
- Auth system: JWT-based, already implemented
- Database: PostgreSQL (shared with dashboard)

**Design Questions**:
- Color palette: See brand identity section
- Fonts: Recommend Inter or Plus Jakarta Sans
- Icons: Heroicons or Lucide React

**Content Questions**:
- Copy approval: Review with product owner
- Legal pages: Basic outlines provided, legal review recommended
- Testimonials: Placeholder sections for future content

---

## Appendix: Color Usage Guide

### Primary Colors

**Warm Sand (#FBF4E6)**
- Use for: Page backgrounds, light sections, card backgrounds
- Avoid: Text (low contrast), buttons

**Sunlit Amber (#D98C4A)**
- Use for: Primary CTAs, important links, hover states, accents
- Avoid: Large background areas, body text

**Lavender Mist (#B7A5D8)**
- Use for: Secondary accents, badges, highlights, illustrations
- Avoid: Primary CTAs (less visible), large text blocks

**Teal Softwave (#6BA4A6)**
- Use for: Trust indicators, success states, icons, secondary CTAs
- Avoid: Warning/error states, primary headings

### Text Colors

**Text Main (#4E3620)**
- Use for: Headings, important text, primary content
- Pairs with: All background colors

**Text Muted (#7A6144)**
- Use for: Secondary text, descriptions, captions, metadata
- Pairs with: Warm sand backgrounds

### Combinations That Work

✅ **Hero Section**: Warm sand background + Text main headlines + Sunlit amber CTA  
✅ **Trust Section**: White background + Teal softwave icons + Text main copy  
✅ **Pricing Cards**: White cards + Lavender mist accents + Sunlit amber CTAs  
✅ **Footer**: Dark warm sand background + Text muted copy + Teal softwave links

---

## Final Notes

This plan is designed to be **comprehensive and actionable**. Every section includes:
- Clear goals and outcomes
- Specific content recommendations
- Technical implementation details
- Design guidelines
- Success metrics

The website should feel:
- **Natural and warm** (not cold corporate)
- **Trustworthy and professional** (not amateur)
- **Clear and direct** (not vague or buzzword-heavy)
- **Human-centered** (not technology-first)

**Most Important**: This website sells **relief from tedious work**, not AI technology. Every piece of copy should answer: "How does this make my life easier?"

---

**Document Version**: 1.0  
**Last Updated**: December 14, 2025  
**Owner**: FillGenie Product Team  
**Status**: Ready for Development

---

## Quick Start for Developer Agent

1. **Set up React + Vite + TypeScript project**
2. **Install Tailwind CSS with custom config** (colors provided)
3. **Create route structure** (React Router)
4. **Build reusable component library** (Button, Card, Section, Input)
5. **Implement authentication** (integrate with existing API)
6. **Build homepage sections** (start with hero, work down)
7. **Add remaining pages** (pricing, how it works, etc.)
8. **Implement responsive design** (mobile-first)
9. **Add animations** (Framer Motion)
10. **Configure SEO** (meta tags, sitemap)
11. **Set up analytics** (Google Analytics 4)
12. **Deploy to Vercel** (connect to GitHub)
13. **Test thoroughly** (all devices, browsers)
14. **Launch** 🚀

Good luck building an amazing marketing site for FillGenie! 🧞‍♂️
