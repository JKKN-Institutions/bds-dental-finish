📘 Product Requirements Document (PRD)
🧾 Project Title:
JKKN BDS – Bachelor of Dental Surgery Landing Page

1. 🎯 Project Overview
Objective:
Develop a high-conversion, SEO-optimized, mobile-first landing page for JKKN’s Bachelor of Dental Surgery (BDS) program using Next.js and Tailwind CSS.

Tech Stack:
Frontend Framework: Next.js (Pages or App Router)

Styling: Tailwind CSS

Deployment: Vercel or Netlify (optional but recommended)

SEO: Optimized with next/head

Target Audience:
NEET-qualified students

Parents exploring dental education options

Career advisors

2. 🧩 Feature Modules & Functional Requirements
A. Hero Section
H1: “BDS – Step Into the World of Dentistry with Clinical Confidence”

Subhead: Explains 5-year program with clinical training

Geo-based personalization: For Tamil Nadu IPs, show:

“Top-ranked Dental College in Tamil Nadu with on-campus hospital & 200+ chair dental clinic.”

CTAs:

Primary: Speak to a Dental Admission Advisor (link to form or section)

Secondary: Download BDS Career Starter Kit – PDF

Trust Badges: Render badges with icons and Tailwind cards

B. Program Highlights
Responsive grid layout (icons with short descriptions)

Items:

🦷 Pre-clinical Training from Year 1

🏥 200+ Chair Dental Hospital

🧪 Dental Simulation & CAD/CAM Labs

📚 Learn Oral Surgery, Endodontics, etc.

🎓 1-year Internship with real cases

👩‍⚕️ Career Options

C. Video Block
Embed a YouTube or MP4 hosted video

Tailwind component with thumbnail or inline player

Title: “Inside Our Dental Clinics – Student-Led Tour”

D. Curriculum & Eligibility
Accordion (Disclosure component): Use Tailwind-compatible collapsibles

Year-wise breakdown (Y1–Y5)

Eligibility Criteria:

10+2 with PCB

NEET qualified

CTAs:

Check NEET Eligibility (scroll to form or link)

Download Full Syllabus PDF

E. Career Opportunities
Table of roles and average salaries

Highlighted cards or stacked layout on mobile

Emerging Roles:
Show as badges or horizontal scroll list

F. Placements & Alumni Outcomes
Stats (92% PG/Placement, ₹5.2L Avg. Package)

Logos of companies (Apollo, Clove, Fortis)

Student stories

CTA: View Alumni Success Stories

G. Testimonials
Video (parent quote)

Student written quote

Rating stars (4.8/5 from 320+ reviews)

CTA: Watch Full Testimonials & Reel Interviews

H. Fees & Scholarships
Tailwind-styled responsive table

5-year fee breakdown

Scholarships section:

NEET Rank-Based Waiver

Women in Healthcare

Rural/First-Gen Support

CTA: EMI Planner & Scholarship Estimator

I. FAQs (SEO/Voice Optimized)
Voice search-style questions:

Is NEET mandatory for BDS?

What after BDS?

Can I open my own clinic?

Collapsible FAQ UI component

Use semantic <dl>, <summary>, or Tailwind Disclosure

J. Final CTA & Contact
Strong heading: “Talk to a Dental Admission Expert”

Contact details:

Phone

Email

Campus address

Buttons:

Book Admission Slot

Apply Now (limited NEET seats)

3. 🎨 UI/UX Design Guidelines
Color Palette (Tailwind Classes)
Element	Tailwind Class
Background	bg-white, bg-gray-50
Primary Text	text-gray-900
CTA Button	bg-indigo-600 hover:bg-indigo-700 text-white
Secondary Text	text-gray-600
Accent	bg-blue-100 text-blue-800
Footer	bg-gray-800 text-white

Typography
Headings: font-bold text-2xl sm:text-4xl

Paragraphs: text-base text-gray-700 leading-relaxed

Layout & Spacing
Container: max-w-7xl mx-auto px-4

Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

Mobile-first responsive design

4. ✅ Technical Requirements
Area	Requirement
Framework	Next.js (App Router or Pages)
Styling	Tailwind CSS
Responsiveness	Mobile-first, grid/flex layout
SEO	<Head> component for title/meta
Accessibility	Alt tags, keyboard nav, color contrast
Performance	Optimized images, lightweight components

5. 📦 Deliverables
File/Asset	Purpose
/pages/index.tsx or /app/page.tsx	Main landing page
/components/	Hero, Highlights, FAQ, CTA, etc.
/public/assets/	Icons, trust badges, logos
/styles/globals.css	Tailwind imports and base styles
tailwind.config.js	Customizations if needed
README.md	Deployment and local setup instructions

6. 📅 Timeline & Milestones
Task	Day
PRD Finalization	Day 0
Initial Layout & Routing	Day 1
Hero + Highlights	Day 2
Curriculum + Career + Video	Day 3
Placement + Testimonials + Fees	Day 4
FAQ + Contact + Final CTAs	Day 5
Testing & SEO Optimization	Day 6
Launch & Deploy	Day 7