// ---------------------------------------------------------------------------
// Single source of truth for the "Addax Tower office space" micro-site.
// Prices and facts come from www.aegiscoworking.ae.
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import privateImg from '../assets/addax-tower-private-office.webp'
import receptionImg from '../assets/addax-tower-business-centre-reception.webp'
import boardroomImg from '../assets/addax-tower-boardroom.webp'
import deskImg from '../assets/addax-tower-dedicated-desk.webp'
import coworkImg from '../assets/addax-tower-coworking-space.webp'
import meetingImg from '../assets/addax-tower-meeting-room.webp'
import smallImg from '../assets/addax-tower-small-office.webp'
import servicedImg from '../assets/addax-tower-serviced-office.webp'
import execImg from '../assets/addax-tower-executive-office.webp'

export const SITE_URL = 'https://addaxtower.online'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Addax Tower Office Space for Rent, ADGM | Aegis Coworking'
export const PAGE_DESCRIPTION =
  'Office space for rent in Addax Tower, Al Reem Island (ADGM): serviced private office from AED 4,500, desks from AED 1,000, ADGM-compliant lease. Book a tour.'
export const DATE_PUBLISHED = '2026-10-07'
export const DATE_MODIFIED = '2026-10-07'

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

export const images = { privateImg, receptionImg, boardroomImg, deskImg, coworkImg, meetingImg, smallImg, servicedImg, execImg }

// Hero coverflow slides
export const slides = [
  { img: 'privateImg', w: 1200, h: 900, title: 'Private office', note: 'from AED 4,500 / month', alt: 'Private office Addax Tower with Al Reem Island views at Aegis Coworking' },
  { img: 'receptionImg', w: 900, h: 675, title: 'Business centre', note: 'staffed reception, Level 38', alt: 'Business centre Addax Tower reception at Aegis Coworking, ADGM' },
  { img: 'coworkImg', w: 900, h: 675, title: 'Coworking space', note: 'flexi desk AED 1,000', alt: 'Coworking space Addax Tower with window desks, Al Reem Island' },
  { img: 'meetingImg', w: 900, h: 675, title: 'Meeting room', note: 'book by the hour', alt: 'Meeting room in Addax Tower business centre, ADGM' },
  { img: 'deskImg', w: 900, h: 675, title: 'Dedicated desk', note: 'AED 1,150 / month', alt: 'Dedicated desk in Addax Tower office space, Abu Dhabi' },
]

export const sections = [
  { id: 'spaces', label: 'Spaces & prices' },
  { id: 'tower', label: 'About Addax Tower' },
  { id: 'lease', label: 'ADGM-compliant lease' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
]

export const keywords = [
  'Addax Tower office space', 'Office space for rent in Addax Tower', 'Office for rent Addax Tower', 'Addax Tower office rent',
  'Serviced office Addax Tower', 'Furnished office Addax Tower', 'Private office Addax Tower', 'Business centre Addax Tower',
  'Coworking space Addax Tower', 'Office space Al Reem Island', 'Office for rent Al Reem Island', 'Serviced office Al Reem Island',
  'Office space in ADGM', 'Office for rent in ADGM', 'Office space for rent in ADGM', 'ADGM office rent', 'ADGM office for rent',
  'Serviced office ADGM', 'Private office ADGM', 'Furnished office ADGM', 'Business centre ADGM', 'Flexible office space ADGM',
  'Commercial office space ADGM', 'Affordable office space ADGM', 'ADGM office lease', 'ADGM business address', 'Office for ADGM licence',
  'Office rental Abu Dhabi', 'Office space Abu Dhabi', 'Office for rent Abu Dhabi', 'Serviced office Abu Dhabi',
  'Best coworking space in Abu Dhabi', 'ADGM', 'Best coworking in Abu Dhabi Global Market',
  'ADGM compliant lease agreement space provider', 'Space provider in Abu Dhabi Global Market', 'Aegis Coworking',
]

// Spaces explorer (monthly prices from aegiscoworking.ae; null = quote / hourly)
export const spaces = [
  {
    id: 'private', tab: 'Private office', title: 'Private office Addax Tower', img: 'servicedImg', w: 700, h: 700,
    monthly: 4500, from: true, size: 'Teams of 1–20+',
    text: 'A serviced, furnished office Addax Tower teams lock at night — Small (1–4), Medium (5–10) and Large (10–20+) layouts with skyline views.',
    perks: ['Furnished & lockable', 'Registered ADGM business address', '24/7 secure access', 'Internet, utilities, cleaning included'],
    link: `${MAIN_SITE}/private-office`,
  },
  {
    id: 'desk', tab: 'Dedicated desk', title: 'Dedicated desk', img: 'deskImg', w: 900, h: 675,
    monthly: 1150, size: '1 person',
    text: 'Your own permanent desk with a registered ADGM business address — the most affordable office for ADGM licence applications.',
    perks: ['Same desk every day', 'ADGM-compliant lease on AccessRP', '24/7 access', 'One-time AED 1,200 due diligence'],
    link: 'https://dedicateddeskadgm.online/',
  },
  {
    id: 'flexi', tab: 'Flexi desk', title: 'Flexi desk (coworking)', img: 'coworkImg', w: 900, h: 675,
    monthly: 1000, size: '1 person',
    text: 'Any open desk in the coworking space Addax Tower members share — ideal when you need a professional base but no licence address.',
    perks: ['Any open desk', 'WiFi, coffee, print & scan', 'Business lounge', 'Upgrade any time'],
    link: `${MAIN_SITE}/office-space`,
  },
  {
    id: 'virtual', tab: 'Virtual office', title: 'Virtual office', img: 'receptionImg', w: 900, h: 675,
    monthly: 292, from: true, size: 'Address only',
    text: 'An ADGM business address at Addax Tower with mail handling, for companies that need the address but not the desk.',
    perks: ['ADGM registered address', 'Mail handling & forwarding', 'Directory listing', 'Meeting room credits'],
    link: 'https://servicedofficeadgm.online/',
  },
  {
    id: 'meeting', tab: 'Meeting room', title: 'Meeting room & boardroom', img: 'boardroomImg', w: 1024, h: 683,
    monthly: null, size: 'By the hour',
    text: 'Book a meeting room or the boardroom by the hour to meet clients in ADGM — no office lease needed.',
    perks: ['Hourly booking', 'Screen & video calls', 'Coffee service', 'Reception welcomes guests'],
    link: `${MAIN_SITE}/meeting-room`,
  },
]

export const towerFacts = [
  { k: 'Jurisdiction', v: 'Abu Dhabi Global Market (ADGM)' },
  { k: 'Island', v: 'Al Reem Island, Abu Dhabi' },
  { k: 'Aegis floor', v: 'Level 38 · Office 3812' },
  { k: 'Access', v: '24/7 for office & desk members' },
]

export const leaseSteps = [
  { title: 'Tour Level 38', text: 'Visit Addax Tower Monday–Friday, 9 AM–6 PM, or take a WhatsApp video tour from anywhere.' },
  { title: 'Pick your space', text: 'Choose a private office, dedicated desk, flexi desk or virtual office for your licence.' },
  { title: 'KYC & due diligence', text: 'Quick compliance checks required by ADGM — handled by our team.' },
  { title: 'ADGM-compliant lease', text: 'We issue your lease agreement and register it on AccessRP for your ADGM licence.' },
  { title: 'Move in', text: 'Collect your access card. Your Addax Tower business address is live.' },
]

export const why = [
  { icon: 'pin', title: 'Inside ADGM', text: 'Addax Tower sits within the Abu Dhabi Global Market jurisdiction — a genuine ADGM business address.' },
  { icon: 'shield', title: 'ADGM-compliant leases', text: 'A space provider in Abu Dhabi Global Market with leases registered on AccessRP.' },
  { icon: 'tag', title: 'Honest pricing', text: 'No deposit, no setup or admin fees, free registration. ADGM fees are separate.' },
  { icon: 'chair', title: 'Fully serviced', text: 'Furniture, internet, utilities, cleaning and reception in one monthly rent.' },
  { icon: 'key', title: '24/7 access', text: 'Round-the-clock access for private office and dedicated desk members.' },
  { icon: 'sun', title: 'Level 38 views', text: 'Light-filled offices looking over Al Reem Island and the Abu Dhabi skyline.' },
]

export const testimonials = [
  { quote: 'Aegis coworking provide super professional services especially with the pricing, and the customer service, i needed the license and a space for one of my team member and they did all within a week time, my team member loved the space. I will highly suggest if any on is looking to get a license and a space in ADGM go for Aegis coworking.', name: 'Ubaid Zia', role: 'Startup Founder' },
  { quote: 'I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.', name: 'Naveeda Haseeb', role: 'Startup Founder' },
  { quote: 'Aegis Coworking is a convenient workspace in Abu Dhabi for startups and growing companies. The flexible workspace options, meeting room and hot desk helped us avoid the commitment of a traditional office.', name: 'Kasim Malikkandy', role: 'Consultant' },
  { quote: 'We were comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable.', name: 'John Paints', role: 'Software Analyst' },
  { quote: 'Very happy with the service from Aegis Coworking. We needed a professional business address in Abu Dhabi without committing to a large traditional office, and Aegis provided a practical solution. The team is responsive and professional.', name: 'Uzair Tahir', role: 'Tech Startup Founder' },
  { quote: 'For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.', name: 'Haseeb Awan', role: 'Entrepreneur' },
  { quote: 'Nice suitable area for coworking for Adam incorporation.', name: 'Ali Kutty Faizy', role: 'Entrepreneur' },
]

export const guides = [
  { slug: 'addax-tower-adgm-business-workspace', title: 'Addax Tower ADGM: Business Workspace on Al Reem Island', tag: 'Addax Tower' },
  { slug: 'is-al-reem-island-part-of-adgm', title: 'Is Al Reem Island Part of ADGM?', tag: 'Location' },
  { slug: 'affordable-coworking-al-reem-island-adgm', title: 'Affordable Coworking on Al Reem Island, ADGM', tag: 'Coworking' },
  { slug: 'private-office-rent-adgm-cost-what-to-expect-in-2026', title: 'Private Office Rent in ADGM: What to Expect in 2026', tag: 'Office rent' },
  { slug: 'accessrp-adgm-lease-registration', title: 'AccessRP: How ADGM Lease Registration Works', tag: 'Lease' },
  { slug: 'adgm-coworking-space-cost-2026', title: 'ADGM Coworking Space Cost in 2026', tag: 'Cost' },
  { slug: 'adgm-office-cost-calculator', title: 'ADGM Office Cost Calculator', tag: 'Cost' },
  { slug: 'adgm-vs-difc-workspace-cost', title: 'ADGM vs DIFC Workspace Cost Compared', tag: 'Compare' },
  { slug: 'which-adgm-workspace-fits-you', title: 'Which ADGM Workspace Fits You?', tag: 'Guide' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'How much is office space for rent in Addax Tower?',
    a: 'At Aegis Coworking on Level 38 of Addax Tower, a serviced private office starts from AED 4,500 per month, a dedicated desk is AED 1,150, a flexi desk AED 1,000 and a virtual office from AED 292 per month.',
    link: { text: 'Private office rent in ADGM: 2026 guide', url: `${MAIN_SITE}/blog/private-office-rent-adgm-cost-what-to-expect-in-2026` },
  },
  {
    q: 'Is Addax Tower in ADGM?',
    a: 'Yes. Addax Tower is on Al Reem Island, which is within the Abu Dhabi Global Market (ADGM) jurisdiction, so an office in Addax Tower gives you an ADGM business address.',
    link: { text: 'Is Al Reem Island part of ADGM?', url: `${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm` },
  },
  {
    q: 'Where exactly is Aegis Coworking in Addax Tower?',
    a: 'On the 38th floor of Addax Tower, Office 3812, Al Reem Island, RT3, Abu Dhabi.',
    link: { text: 'Addax Tower ADGM for businesses', url: `${MAIN_SITE}/blog/addax-tower-adgm-business-workspace` },
  },
  {
    q: 'Do you provide an ADGM-compliant lease agreement?',
    a: 'Yes. Aegis is an ADGM-compliant lease agreement space provider: private offices and dedicated desks come with a lease registered on AccessRP that you can use for your ADGM licence application and renewals.',
    link: { text: 'How AccessRP lease registration works', url: `${MAIN_SITE}/blog/accessrp-adgm-lease-registration` },
  },
  {
    q: 'Are the offices furnished and serviced?',
    a: 'Yes. Every private office is fully furnished with ergonomic desks and chairs and lockable storage, with high-speed internet, utilities, cleaning and reception included in the monthly rent.',
  },
  {
    q: 'How long is the lease?',
    a: 'Leases run from 12 to 36 months. You can upgrade to a larger office in Addax Tower as your team grows.',
  },
  {
    q: 'Are there deposits or setup fees?',
    a: 'No deposit, no admin fees and no setup fees, with free registration. A one-time AED 1,200 due-diligence fee applies to the dedicated desk, and ADGM government fees are separate.',
  },
  {
    q: 'Is there coworking space in Addax Tower?',
    a: 'Yes. The coworking space at Aegis on Level 38 offers flexi desks from AED 1,000 per month and day passes from AED 100, with WiFi, coffee and the business lounge.',
    link: { text: 'Affordable coworking on Al Reem Island', url: `${MAIN_SITE}/blog/affordable-coworking-al-reem-island-adgm` },
  },
  {
    q: 'Can I use the office for my ADGM licence?',
    a: 'Yes. Private offices and dedicated desks include a registered ADGM business address for your licence application. FSRA-regulated firms usually need a private office.',
  },
  {
    q: 'Do I get 24/7 access to Addax Tower?',
    a: 'Private office and dedicated desk members have secure 24/7 access, every day of the week.',
  },
  {
    q: 'Can I book a meeting room in Addax Tower without renting an office?',
    a: 'Yes. Meeting rooms and the boardroom can be booked by the hour for client meetings in ADGM.',
  },
  {
    q: 'How do I book a viewing?',
    a: 'Message us on WhatsApp or call +971 50 392 6316. Tours run Monday to Friday, 9 AM–6 PM, and we can send a video walkthrough if you are abroad.',
  },
]
