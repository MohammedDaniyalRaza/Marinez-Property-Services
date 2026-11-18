export const BUSINESS = {
  name: 'Marinez Property Services',
  dba: 'Tulsa Property Services',
  tagline: 'Your Full-Service Property Solution!',
  subTagline: 'We Do Any & Everything for Your Home or Business',
  serviceArea: 'Tulsa, Oklahoma & Surrounding Communities',
  communities: [
    'Tulsa',
    'Broken Arrow',
    'Bixby',
    'Jenks',
    'Owasso',
    'Sand Springs',
    'Sapulpa',
    'Glenpool',
    'Catoosa',
    'Claremore',
  ],
  phones: [
    {
      label: 'Primary Dispatch',
      display: '918-240-7179',
      href: 'tel:9182407179',
      mode: 'Call or Text',
    },
    {
      label: 'Direct Line',
      display: '918-897-3464',
      href: 'tel:9188973464',
      mode: 'Call or Text',
    },
  ],
  email: 'marinezpropserv@gmail.com',
  emailHref: 'mailto:marinezpropserv@gmail.com',
  website: 'marinezpropertyservices.com',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61593085071180',
  facebookReelUrl: 'https://www.facebook.com/reel/1685513559893663/',
  facebookReelEmbedSrc:
    'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1685513559893663%2F&show_text=false&width=267&t=0',
  socialNote: 'Follow us on Facebook & Instagram',
  payments: ['Cash', 'Card', 'Mobile Pay'],
  billingNote: 'Invoices & commercial contracts available',
  badges: ['Veteran-Owned (SDVOSB)', 'Residential & Commercial', 'Free Quotes'],
} as const;

export const PARTNER = {
  label: 'Our Partner',
  name: 'Mail World Office',
  tagline: 'Your Local Mailing, Shipping & Business Service Center',
  services: [
    'Shipping & Packing (UPS, FedEx, USPS)',
    'Private Mailboxes',
    'Notary Services',
    'Printing & Copies',
    'U-Haul Rentals',
  ],
  address: '3171 S. 129th E. Ave., Suite A, Tulsa, OK 74134',
  landmark: 'Briarglenn Shopping Center, next to Daylight Donuts',
  phone: '918-814-2310',
  phoneHref: 'tel:9188142310',
} as const;

export const TPS_MEMBERSHIP = {
  title: 'Tulsa Property Services Membership',
  threshold: '$250+',
  headline: 'Spend $250+ and automatically unlock TPS Membership.',
  description:
    'Once your completed work reaches $250 or more, your property automatically enrolls into our Tulsa Property Services Membership program—no forms, no annual fees.',
  benefits: [
    'Automatic % discount off every future service job',
    'Referral rewards: earn service credits and special discounts for every neighbor you send our way',
    'Priority seasonal & storm-cleanup scheduling across Tulsa',
    'Exclusive holiday lighting & permanent LED member deals',
    'Member perks extend to anyone you directly refer',
  ],
} as const;

export interface Testimonial {
  id: string;
  author: string;
  neighborhood: string;
  service: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Marcus T.',
    neighborhood: 'Broken Arrow',
    service: 'Driveway Pressure Washing & Bin Sanitizing',
    quote:
      'Years of dark algae came right off our three-car concrete driveway in one afternoon, and they sanitized both rolling trash bins while they were here. Looked brand new before dinner.',
  },
  {
    id: 't2',
    author: 'Sarah K.',
    neighborhood: 'Midtown Tulsa',
    service: 'Lawn Care & Leaf Cleanup',
    quote:
      'Consistent stripes every week and crisp edging along the brick walkway. When oak leaves buried our yard in November, their crew cleared every bed without leaving a trace.',
  },
  {
    id: 't3',
    author: 'David R.',
    neighborhood: 'Jenks',
    service: 'Permanent LED Roofline Lighting',
    quote:
      'We booked the permanent roofline LEDs so we would never climb a ladder again. The aluminum track blends into the trim during the day and switching from game day colors to warm white takes two seconds.',
  },
  {
    id: 't4',
    author: 'Elena M.',
    neighborhood: 'Bixby',
    service: 'Mailbox Wrap & Holiday Lights',
    quote:
      'Our street had zero holiday curb appeal until Marinez wrapped our brick mailbox and lined the walk with candy cane stakes. Three neighbors asked for their number the same evening.',
  },
  {
    id: 't5',
    author: 'Travis B.',
    neighborhood: 'Owasso',
    service: 'Gutter Cleaning & Bush Trimming',
    quote:
      'One text got us a clear upfront quote for overgrown front hedges, full gutter cleanout, and hauling away old patio lumber. Straightforward crew that shows up when they say they will.',
  },
  {
    id: 't6',
    author: 'Linda W.',
    neighborhood: 'South Tulsa',
    service: 'Commercial Grounds & Trash Can Cleaning',
    quote:
      'As a property manager, having one dependable veteran-owned crew that handles lawn maintenance, pressure washing, and proper invoicing saves us hours every month.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What areas around Tulsa do you service?',
    answer:
      'We serve Tulsa, Oklahoma and all surrounding communities including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Glenpool, Catoosa, and Claremore for both residential homes and commercial properties.',
  },
  {
    id: 'faq-2',
    question: 'How does your free quote process work?',
    answer:
      'Call or text 918-240-7179 or 918-897-3464, email marinezpropserv@gmail.com, or submit the online quote request form. Tell us your address and what you need done—we provide clear, upfront pricing with zero obligation.',
  },
  {
    id: 'faq-3',
    question: 'How do I unlock the Tulsa Property Services (TPS) Membership?',
    answer:
      'Spending $250 or more on any service or combined visit automatically unlocks TPS Membership. You immediately receive an automatic percentage discount on every future job, priority scheduling, exclusive holiday deals, and referral credits when you recommend us to friends or neighbors.',
  },
  {
    id: 'faq-4',
    question: 'What payment methods do you accept, and do you provide invoices?',
    answer:
      'We accept cash, card, and mobile pay. For commercial accounts, property managers, HOAs, and recurring residential maintenance, we also provide formal itemized invoices and ongoing service contracts.',
  },
  {
    id: 'faq-5',
    question: 'What is included in Permanent LED Lighting starting at $6.50/ft?',
    answer:
      'Our permanent roofline LED systems start at $6.50 per linear foot installed. The package includes color-matched architectural mounting channels, weather-sealed commercial LEDs, custom design layout, full installation, and mobile app control so you can switch colors for holidays, game days, or warm everyday accent lighting year-round.',
  },
  {
    id: 'faq-6',
    question: 'When should I book Mailbox Wrapping and Candy Cane street lighting?',
    answer:
      'Neighborhood slots fill quickly each fall because whole streets often coordinate mailbox wraps and walkway candy cane setups together. Reaching out early in October or November locks in your preferred installation window before peak holiday week.',
  },
  {
    id: 'faq-7',
    question: 'Does Custom Christmas Light Installation include removal and storage?',
    answer:
      'Yes. Our custom residential and commercial holiday lighting packages are tailored to your property with full installation, maintenance throughout the season, scheduled post-holiday takedown, and neat storage options.',
  },
  {
    id: 'faq-8',
    question: 'Do you handle both residential homes and commercial properties?',
    answer:
      'Yes. We are a Service-Disabled Veteran-Owned Small Business (SDVOSB) equipped for single-family residential lawns, multi-property portfolios, storefronts, offices, and HOA common areas.',
  },
  {
    id: 'faq-9',
    question: 'Can I bundle multiple services like pressure washing, gutters, and lawn care in one visit?',
    answer:
      'Absolutely—that is our specialty. One call covers lawn mowing, bush trimming, gutter cleaning, concrete pressure washing, trash bin sanitizing, and junk removal in a coordinated schedule, which also helps you reach the $250+ TPS Membership tier faster.',
  },
  {
    id: 'faq-10',
    question: 'How quickly can you schedule a service after I approve the quote?',
    answer:
      'Most routine lawn, pressure washing, and cleanup jobs are scheduled within a few days depending on weather and seasonal volume. TPS Members receive priority scheduling during peak spring growth, fall leaf drop, and holiday lighting weeks.',
  },
];
