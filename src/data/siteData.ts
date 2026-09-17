import { Testimonial, PortfolioItem, FAQItem, SituationItem } from '../types';

export const BRAND_INFO = {
  name: 'Eliancy Real Estate',
  legalName: 'LENC Real Estate Asset Management DBA Eliancy Real Estate',
  founder: 'Paulson Eliancy',
  title: 'Licensed Real Estate Agent & Active Investor',
  phone: '(516) 547-2466',
  phoneClean: '+15165472466',
  email: 'Eliancyrealestate@gmail.com',
  location: 'Babylon, NY',
  serviceAreas: [
    'Suffolk County, NY',
    'Nassau County, NY',
    'Long Island, NY',
    'Queens & NYC Metro',
    'Upstate & Greater NY'
  ],
  hours: 'Mon-Sat : 8:00 AM – 5:00 PM EST',
  social: {
    facebook: 'https://www.facebook.com/paulsoneliancy?mibextid=JRoKGi',
    instagram: 'https://www.instagram.com/dba_eliancyrealestate/profilecard/?igsh=anM5eXY4bTB5ZG95'
  },
  stats: [
    { value: '100+', label: 'NY Homeowners Consulted' },
    { value: '7-14', label: 'Days Average Cash Close' },
    { value: '$0', label: 'Fees, Commissions & Repairs' },
    { value: '15+', label: 'Years Combined NY Experience' }
  ]
};

export const FOUNDER_QUOTE = {
  text: "I started Eliancy Real Estate because I saw too many homeowners stuck — behind on payments, managing a property they didn't want, or simply out of options. As both a licensed agent and an active investor, I can offer more than one path forward. Whatever your situation, I'll give you a straight answer and a fair offer.",
  author: 'Paulson Eliancy',
  credentials: 'Licensed Real Estate Agent & Active Investor, Long Island NY'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rivera',
    name: 'M. Rivera',
    location: 'Suffolk County, NY',
    quote: "We were behind on payments and didn't know where to turn with the bank threatening auction. Paulson gave us a fair offer and closed fast — no judgment, just real help. He kept his word on every single detail.",
    situation: 'Behind on Mortgage / Avoided Foreclosure',
    rating: 5,
    avatar: '/images/profile-robert.webp'
  },
  {
    id: 'warren',
    name: 'Olivia Warren',
    location: 'Nassau County, NY',
    quote: "I inherited a property I couldn't manage from out of state. The house needed severe roof and water repairs. Paulson made the whole process simple and handled everything without me having to spend a dime or travel to Long Island.",
    situation: 'Inherited Property / Out of State Owner',
    rating: 5,
    avatar: '/images/profile-olivia.webp'
  },
  {
    id: 'stone',
    name: 'Michael Stone',
    location: 'Babylon, NY',
    quote: "We needed to sell quickly for a job relocation down south, and traditional realtors told us we'd need 2 months of prep and open houses. Paulson had us a solid cash offer within days. Easiest home sale we've ever done.",
    situation: 'Rapid Relocation / Zero Showings',
    rating: 5,
    avatar: '/images/profile-michael.webp'
  }
];

export const SITUATIONS: SituationItem[] = [
  {
    id: 'foreclosure',
    title: 'Facing Foreclosure',
    description: 'Falling behind on mortgage payments or received a lis pendens notice? We can intervene immediately, stop the clock, and protect your credit before auction.',
    iconName: 'AlertTriangle',
    badge: 'Urgent Help',
    solution: 'Fast cash payoff directly to your lender'
  },
  {
    id: 'inherited',
    title: 'Inherited or Probate',
    description: 'Inherited a house full of possessions or facing probate disputes? Sell as-is without sorting, cleaning, or taking on estate debts.',
    iconName: 'FileText',
    badge: 'Stress-Free',
    solution: 'Zero cleanout required — leave unwanted items'
  },
  {
    id: 'damaged',
    title: 'Vacant or Damaged Property',
    description: 'Property suffering from major roof leaks, foundation settling, mold, fire damage, or deferred maintenance that banks refuse to finance?',
    iconName: 'Home',
    badge: '100% As-Is',
    solution: 'We purchase fully as-is with private funds'
  },
  {
    id: 'relocating',
    title: 'Relocating or Job Transfer',
    description: 'Need to move quickly for work, military reassignment, or family reasons? Don’t get stuck paying two mortgages while waiting for a retail buyer.',
    iconName: 'Compass',
    badge: 'Guaranteed Date',
    solution: 'Pick the exact day you want to close and move'
  },
  {
    id: 'hardship',
    title: 'Financial Hardship & Tax Liens',
    description: 'Struggling with delinquent property taxes, liens, municipal violations, or sudden life changes? We provide relief and clean title resolution.',
    iconName: 'DollarSign',
    badge: 'Debt Relief',
    solution: 'Cash buyout clears existing property encumbrances'
  },
  {
    id: 'landlord',
    title: 'Tired Landlord / Problem Tenants',
    description: 'Tired of late rent, non-paying tenants, squatters, or NY eviction court delays? We buy tenant-occupied properties without eviction hassle.',
    iconName: 'Users',
    badge: 'Tenant In Place',
    solution: 'We take over leases and tenant management'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Suffolk Brick Residence',
    category: 'Bought & Rented',
    location: 'Suffolk County, NY',
    description: 'Acquired from a homeowner seeking an immediate cash exit. Completed modern structural reinforcement, energy efficiency retrofits, and preserved for rental portfolio.',
    image: '/images/WhatsApp-Image-2026-08-12-at-1.48.03-AM.jpeg',
    stats: 'Closed in 9 Days • $0 Seller Repairs'
  },
  {
    id: 'port-2',
    title: 'Long Island Suburban Revival',
    category: 'Renovated & Rented',
    location: 'Nassau County, NY',
    description: 'Single-family house facing heavy deferred maintenance. Fully revitalized siding, roof, interior open-concept kitchen, and landscape overhaul.',
    image: '/images/WhatsApp-Image-2026-08-12-at-1.48.03-AM-1.jpeg',
    stats: 'Full Gut Renovation • Added Long-term Value'
  },
  {
    id: 'port-3',
    title: 'Turnaround Brick Bungalow',
    category: 'Renovated & Rented',
    location: 'Babylon Area, NY',
    description: 'Inherited estate property that sat vacant for 3 years. Purchased directly from out-of-state heirs who avoided thousands in back taxes and cleanup costs.',
    image: '/images/WhatsApp-Image-2026-08-12-at-1.48.03-AM-2.jpeg',
    stats: 'Cleared Back Liens • 12-Day Close'
  },
  {
    id: 'port-4',
    title: 'Comprehensive Residential Overhaul',
    category: 'Direct Cash Purchase',
    location: 'Long Island, NY',
    description: 'High-visibility corner home with substantial water damage. Rebuilt from joists to finishing trims, demonstrating our investor capital capability.',
    image: '/images/WhatsApp-Image-2026-08-12-at-1.48.05-AM.jpeg',
    stats: 'Private Cash Purchase • No Contingencies'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How fast can I get a cash offer?',
    answer: 'Most homeowners receive an initial cash offer within 24 to 48 hours of reaching out — sometimes on the very same day! Once we have your property details and photos (or conduct a brief walkthrough), Paulson personally reviews local comps and presents a straightforward, transparent number. There is no waiting weeks for bank appraisals or mortgage underwriting.',
    category: 'Cash Offer'
  },
  {
    id: 'faq-2',
    question: 'Do I need to make repairs or clean before selling?',
    answer: 'Absolutely not. We buy homes 100% as-is. Whether your property has foundation issues, a leaking roof, termite damage, outdated plumbing, or is packed with unwanted clutter, you will not spend a single dollar or lift a finger. Take what personal belongings you want, and leave the rest for us to haul away.',
    category: 'As-Is Condition'
  },
  {
    id: 'faq-3',
    question: 'Is there any obligation or fee once I request an offer?',
    answer: 'None at all. Requesting a cash offer or consultation with Paulson is 100% free and comes with zero obligation to accept. You are in complete control. You can review our offer, consult your family or attorney, and decide whether it fits your personal goals. No pressure, ever.',
    category: 'Cash Offer'
  },
  {
    id: 'faq-4',
    question: 'What if my house is already in foreclosure or has a scheduled auction date?',
    answer: 'We work with New York homeowners at every stage of the foreclosure timeline, from 30-day default notices to active auction dates. Because Paulson buys with private funds rather than conventional bank mortgages, we can close rapidly — often fast enough to pay off the lender, stop the auction, and protect your remaining equity and credit score. Time is critical, so please contact us right away.',
    category: 'Foreclosure'
  },
  {
    id: 'faq-5',
    question: 'How does Paulson determine the cash offer price?',
    answer: 'Our valuation process is completely transparent: We take the After-Repair Market Value (ARV) of comparable renovated homes in your specific neighborhood, subtract the estimated cost of repairs, holding expenses, and our modest investor margin. Because we don’t charge you 6% realtor commissions or seller closing fees, you often pocket comparable net walkaway cash without the months of holding costs and stress.',
    category: 'Process & Fees'
  },
  {
    id: 'faq-6',
    question: 'Can you help me if I want to list my home on the traditional MLS instead?',
    answer: 'Yes! That is the unique advantage of working with Paulson Eliancy. Because Paulson is both an active investor and a licensed New York real estate agent, we are not limited to one cookie-cutter option. If your house is in good condition and your timeline allows for open houses, Paulson can list and market your property to retail buyers across the MLS for maximum market price.',
    category: 'Process & Fees'
  },
  {
    id: 'faq-7',
    question: 'Are there any hidden closing costs, commissions, or surprise fees?',
    answer: 'Zero. When you accept our direct cash offer, what we offer is what you walk away with at the closing table (minus any existing mortgage payoff or property tax liens you owe). We cover standard buyer closing costs, and you pay zero realtor commissions.',
    category: 'Process & Fees'
  },
  {
    id: 'faq-8',
    question: 'How does the closing process work in New York?',
    answer: 'Closing is handled through an established, licensed New York title company or real estate closing attorney to guarantee full legality, safety, and transparency. You choose the closing date that suits you best (whether 7 days from now or 60 days to give you time to pack). Funds are wired directly to your bank account or issued via certified check upon signing.',
    category: 'Process & Fees'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Realtor Commissions',
    cashOffer: '$0 (None)',
    traditional: '5% to 6% ($30,000+ on $500k home)'
  },
  {
    feature: 'Closing Costs Paid By',
    cashOffer: 'Paid by Eliancy Real Estate',
    traditional: '2% to 4% paid by Seller ($15,000+)'
  },
  {
    feature: 'Repairs & Cleaning Required',
    cashOffer: '$0 — Sold 100% As-Is',
    traditional: 'Costly repairs, repainting, staging ($10k - $40k)'
  },
  {
    feature: 'Appraisal & Financing Contingency',
    cashOffer: 'None — Guaranteed Cash Funds',
    traditional: 'Subject to bank appraisal & loan approval'
  },
  {
    feature: 'Public Showings & Open Houses',
    cashOffer: 'Zero — Private & Confidential',
    traditional: 'Dozens of strangers touring weekly'
  },
  {
    feature: 'Average Time to Close',
    cashOffer: '7 to 14 Days (or Your Timeline)',
    traditional: '60 to 120+ Days'
  },
  {
    feature: 'Risk of Buyer Backing Out',
    cashOffer: '0% — Direct Contract with Paulson',
    traditional: 'High (financing fallback, buyer remorse)'
  },
  {
    feature: 'Holding Costs (Mortgage, Taxes, Utilities)',
    cashOffer: '1 to 2 weeks only',
    traditional: '3 to 6 months of ongoing carrying costs'
  }
];
