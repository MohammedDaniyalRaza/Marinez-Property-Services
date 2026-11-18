import { SITE_IMAGES } from './images';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  group: 'Property & Lawn Maintenance' | 'Seasonal & Holiday Services';
  shortDescription: string;
  fullDescription: string;
  priceLabel: string;
  image: string;
  imageAlt: string;
  included: string[];
  iconName:
    | 'Trees'
    | 'Droplets'
    | 'Leaf'
    | 'Scissors'
    | 'CloudRain'
    | 'Truck'
    | 'Trash2'
    | 'Wrench'
    | 'Sparkles'
    | 'Lightbulb'
    | 'Gift'
    | 'Zap'
    | 'TreePine';
}

export const MAINTENANCE_SERVICES: ServiceItem[] = [
  {
    id: 'lawn-care',
    number: '01',
    title: 'Lawn Care & Landscaping',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'Mowing, crisp edging, seasonal cleanups, mulch & bed design for year-round curb appeal.',
    fullDescription:
      'Consistent commercial-grade mowing, string trimming, concrete edging, and tailored landscape bed design built for Oklahoma turf and residential or commercial grounds.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.lawnCare,
    imageAlt: 'Freshly mowed residential lawn with crisp diagonal stripes and clean sidewalk edging',
    included: [
      'Commercial mowing with clean striping patterns',
      'Concrete sidewalk, driveway & curb edging',
      'String trimming around fences, trees & beds',
      'Seasonal flower bed refresh, mulch & landscape design',
      'Complete hardscape blow-off on every visit',
    ],
    iconName: 'Trees',
  },
  {
    id: 'pressure-washing',
    number: '02',
    title: 'Pressure Washing',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'Restore driveways, sidewalks, patios, wood decks, siding, and full home exteriors.',
    fullDescription:
      'High-flow surface cleaning and calibrated exterior washing that lifts years of Tulsa red dirt, black algae, tire marks, and mildew without etching concrete or damaging siding.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.pressureWashing,
    imageAlt: 'Marinez Property Services crew pressure washing a residential concrete driveway',
    included: [
      'Driveway, sidewalk & curb rotary surface cleaning',
      'Wood & composite deck restoration washing',
      'House siding, brick, stone & porch soft-wash',
      'Patio & pool-deck grime and algae removal',
      'Pre-treatment and post-wash rinse down',
    ],
    iconName: 'Droplets',
  },
  {
    id: 'leaf-cleanup',
    number: '03',
    title: 'Leaf Cleanup & Removal',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'Clear heavy fall oak & pecan leaf cover from turf, flower beds, and fence lines.',
    fullDescription:
      'Heavy autumn leaf piles suffocate turf and harbor fungus through winter. We blow out beds, clear entire yards, bag or haul away debris, and leave lawns breathing cleanly.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.leafCleanup,
    imageAlt: 'Oklahoma autumn lawn half cleared of golden oak leaves',
    included: [
      'Full-property leaf blowing from beds, corners & patios',
      'Turf clearing and final clean-pass mowing',
      'Bagging or full haul-away disposal options',
      'Spring & fall seasonal transition cleanups',
    ],
    iconName: 'Leaf',
  },
  {
    id: 'bush-tree-trimming',
    number: '04',
    title: 'Overgrown Bush & Tree Trimming',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'Trim, shape, remove overgrown shrubs and low limbs, and haul away every branch.',
    fullDescription:
      'Reclaim walkways, sightlines, and rooflines from overgrown hedges, storm-damaged limbs, and unruly shrubs—complete with full brush haul-away.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.treeTrimming,
    imageAlt: 'Neatly sculpted evergreen shrubs and trimmed ornamental trees in front yard',
    included: [
      'Precision hedge & ornamental shrub shaping',
      'Low canopy and roofline clearance pruning',
      'Dead or overgrown bush removal',
      'Full limb, brush & green-waste haul-away',
    ],
    iconName: 'Scissors',
  },
  {
    id: 'gutter-cleaning',
    number: '05',
    title: 'Gutter Cleaning',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'Remove packed leaves & shingle grit, keep water flowing, and prevent costly roof or foundation damage.',
    fullDescription:
      'Clogged gutters cause fascia rot, soffit leaks, and foundation pooling during Oklahoma storms. We clear gutters by hand, flush downspouts, and haul the mess away.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.gutterCleaning,
    imageAlt: 'Clean white aluminum gutters and downspouts on a residential brick home',
    included: [
      'Hand removal of leaves, twigs & roof sediment',
      'Downspout flushing to verify unobstructed drainage',
      'Gutter seam & hanger visual inspection',
      'Ground cleanup of all removed debris',
    ],
    iconName: 'CloudRain',
  },
  {
    id: 'junk-removal',
    number: '06',
    title: 'Junk & Debris Removal',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'Fast haul-away for old furniture, appliances, garage clutter, and storm or yard debris.',
    fullDescription:
      'Skip the dumpster rental. Our crew loads, hauls, and sweeps clean unwanted household items, broken appliances, renovation scraps, and piled yard debris.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.junkRemoval,
    imageAlt: 'Cleared and swept two-car garage and driveway after junk removal',
    included: [
      'Old furniture, mattresses & household clutter haul-away',
      'Broken appliance & garage cleanout loading',
      'Storm branch, fencing & yard debris removal',
      'Final broom sweep of garage, driveway or pad',
    ],
    iconName: 'Truck',
  },
  {
    id: 'trash-can-cleaning',
    number: '07',
    title: 'Trash Can Cleaning',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'High-pressure sanitize, deodorize, and eliminate odor-causing bacteria from curbside bins.',
    fullDescription:
      'Curbside trash and recycling carts collect grease, pests, and bacteria fast in Oklahoma heat. We blast, sanitize, and deodorize your cans right at the curb or driveway.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.trashCanCleaning,
    imageAlt: 'Clean wet sanitized residential trash and recycling bins on concrete driveway',
    included: [
      'Interior & exterior high-pressure wash',
      'Antibacterial sanitizing treatment',
      'Fresh clean deodorizing finish',
      'Ideal standalone visit or driveway-wash add-on',
    ],
    iconName: 'Trash2',
  },
  {
    id: 'small-repairs',
    number: '08',
    title: 'Small Repairs & General Property Maintenance',
    group: 'Property & Lawn Maintenance',
    shortDescription:
      'Fence board fixes, gate latches, exterior hardware, caulking, and dependable punch-list upkeep.',
    fullDescription:
      'Instead of waiting weeks on separate handymen for small exterior fixes, add fence repairs, gate adjustments, trim touch-ups, and general property upkeep right onto your Marinez service call.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.smallRepairs,
    imageAlt: 'Freshly repaired and stained cedar privacy fence and clean white porch trim',
    included: [
      'Fence picket replacement & gate hardware repair',
      'Exterior trim, mailbox post & minor carpentry fixes',
      'Rental turn-ready exterior punch-list maintenance',
      'Scheduled commercial property walkthrough upkeep',
    ],
    iconName: 'Wrench',
  },
];

export const HOLIDAY_SERVICES: ServiceItem[] = [
  {
    id: 'permanent-led-lighting',
    number: '09',
    title: 'Permanent LED Lighting Installation',
    group: 'Seasonal & Holiday Services',
    shortDescription:
      'Color-changing architectural roofline LEDs—app-controlled for holidays, game day, and everyday curb appeal.',
    fullDescription:
      'Low-profile, weather-sealed under-eave tracks color-matched to your trim. Change colors anytime from your phone—warm architectural accent lighting every evening, festive patterns on holidays, and team colors on game day.',
    priceLabel: 'From $6.50 / ft installed',
    image: SITE_IMAGES.permanentLed,
    imageAlt: 'Suburban home with sleek permanent under-eave LED lighting glowing emerald and gold',
    included: [
      'Custom roofline layout & trim-matched track',
      'Full commercial-grade LED installation',
      'Smartphone app control with unlimited color presets',
      'Low-maintenance, year-round architectural durability',
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'christmas-light-installation',
    number: '10',
    title: 'Custom Christmas Light Installation',
    group: 'Seasonal & Holiday Services',
    shortDescription:
      'Full-service residential & commercial holiday displays: custom design, install, maintenance, removal & storage.',
    fullDescription:
      'Skip tangled cords and icy ladders. We custom-fit commercial C9 roofline bulbs, ridge lines, wreaths, and tree wraps for Tulsa homes and storefronts—then remove and store everything neatly after the season.',
    priceLabel: 'Custom Quote',
    image: SITE_IMAGES.christmasLights,
    imageAlt: 'Brick home lit with crisp warm-white C9 Christmas lights, wreaths, and porch columns',
    included: [
      'Custom architectural fit for rooflines, peaks & ridges',
      'Commercial-grade LED bulbs & automatic dusk-to-dawn timers',
      'In-season service calls if a bulb or clip shifts',
      'Post-season takedown & organized storage included',
    ],
    iconName: 'Lightbulb',
  },
  {
    id: 'mailbox-wrapping-candy-cane',
    number: '11',
    title: 'Mailbox Wrapping & Candy Cane Lights',
    group: 'Seasonal & Holiday Services',
    shortDescription:
      'Lit evergreen mailbox wraps, crimson bows, and glowing candy cane pathway setups that light up the street.',
    fullDescription:
      'When streets have no street lights, wrapped mailboxes and candy cane borders transform the whole block. Available solo or bundled for maximum curb-to-porch holiday charm.',
    priceLabel: 'From $65 ($95 w/ Candy Canes)',
    image: SITE_IMAGES.mailboxWrap,
    imageAlt: 'Brick mailbox wrapped in lit evergreen garland with red bow and candy cane walkway lights',
    included: [
      'Mailbox wrapping starting from $65',
      'Mailbox wrap + candy cane setup from $95',
      'Weather-rated garland, lights & festive bow',
      'Clean outdoor cord routing and timer setup',
    ],
    iconName: 'Gift',
  },
  {
    id: 'lighted-poles-projectors',
    number: '12',
    title: 'Lighted Poles & Whole-House Projector Setups',
    group: 'Seasonal & Holiday Services',
    shortDescription:
      'Freestanding lighted yard poles and crisp whole-house projection displays set up and aimed to perfection.',
    fullDescription:
      'Add instant height, motion, and street-level glow to front yards, long driveways, and HOA entrances with staked lighted poles and calibrated whole-house holiday projectors.',
    priceLabel: 'Poles from $85 · Projectors from $49',
    image: SITE_IMAGES.christmasLights,
    imageAlt: 'Festive illuminated front yard and driveway walkway lighting',
    included: [
      'Lighted decorative yard & street poles from $85',
      'Whole-house holiday projector setups from $49',
      'Secure ground anchoring for Oklahoma winter wind',
      'Synchronized dusk-to-dawn timer configuration',
    ],
    iconName: 'Zap',
  },
  {
    id: 'christmas-tree-delivery',
    number: '13',
    title: 'Christmas Tree Delivery & Setup',
    group: 'Seasonal & Holiday Services',
    shortDescription:
      'Hassle-free indoor Christmas tree delivery, stand leveling, placement, and pre-lit readiness.',
    fullDescription:
      'Skip hauling needles and heavy boxes up the stairs. We deliver, stand, level, and set up your Christmas tree right where you want it so your family can go straight to decorating.',
    priceLabel: 'From $75',
    image: SITE_IMAGES.treeDelivery,
    imageAlt: 'Warm lit Christmas tree glowing inside a suburban living room front window',
    included: [
      'Careful delivery directly into your living room',
      'Secure stand mounting & vertical leveling',
      'Branch shaping & light strand test',
      'Clean floor sweep before we leave',
    ],
    iconName: 'TreePine',
  },
];

export const ALL_SERVICES: ServiceItem[] = [...MAINTENANCE_SERVICES, ...HOLIDAY_SERVICES];

export const SHOWCASE_TABS = [
  {
    id: 'lawn',
    label: 'Lawn & Landscaping',
    eyebrow: 'Year-Round Turf & Grounds',
    headline: 'Crisp stripes, edged concrete, and manicured beds every visit.',
    description:
      'From weekly residential mowing in Midtown and Broken Arrow to commercial grounds contracts, our commercial Scag and Echo fleet leaves zero clippings on your walks.',
    bullets: [
      'Weekly & bi-weekly mowing schedules',
      'Precision concrete & bed edging',
      'Shrub sculpting, mulch & bed refresh',
    ],
    image: SITE_IMAGES.lawnCare,
    imageAlt: 'Freshly striped green suburban front lawn',
    serviceParam: 'Lawn Care & Landscaping',
  },
  {
    id: 'pressure',
    label: 'Pressure Washing',
    eyebrow: 'Concrete, Decks & Siding',
    headline: 'Blast away Oklahoma red dirt, algae, and years of grime.',
    description:
      'Commercial rotary surface cleaners restore driveways evenly without zebra stripes, while calibrated wand washing revives cedar decks, brick porches, and rolling trash bins.',
    bullets: [
      'Driveways, sidewalks & patios',
      'Wood decks, fencing & home siding',
      'Sanitized & deodorized trash bins',
    ],
    image: SITE_IMAGES.deckWashing,
    imageAlt: 'Commercial pressure washer restoring weathered cedar deck boards',
    serviceParam: 'Pressure Washing',
  },
  {
    id: 'cleanup',
    label: 'Gutters & Cleanup',
    eyebrow: 'Drainage, Debris & Haul-Away',
    headline: 'Protect your roofline and clear your yard in one coordinated trip.',
    description:
      'Packed gutters, heavy oak leaves, overgrown hedges, and garage clutter disappear fast. One call handles the ladder work, trimming, loading, and haul-away.',
    bullets: [
      'Hand-cleared gutters & flushed downspouts',
      'Full fall leaf clearing & brush haul-away',
      'Furniture, appliance & junk removal',
    ],
    image: SITE_IMAGES.gutterCleaning,
    imageAlt: 'Sparkling clean residential gutters and downspouts',
    serviceParam: 'Gutter Cleaning',
  },
  {
    id: 'holiday',
    label: 'Holiday Lighting',
    eyebrow: 'Permanent LEDs & Seasonal Installs',
    headline: 'From $65 mailbox wraps to year-round app-controlled roofline LEDs.',
    description:
      'Make your street shine without climbing a single ladder. Book permanent architectural LED lighting or custom C9 Christmas lights, candy cane walkways, and tree delivery.',
    bullets: [
      'Permanent LEDs from $6.50/ft installed',
      'Mailbox wraps from $65 · + Candy Canes $95',
      'Custom holiday light install, removal & storage',
    ],
    image: SITE_IMAGES.christmasLights,
    imageAlt: 'Suburban brick home illuminated with warm C9 Christmas roofline lights',
    serviceParam: 'Custom Christmas Light Installation',
  },
];

export interface PricingRow {
  service: string;
  startingPrice: string;
  notes: string;
  category: 'Holiday & Lighting' | 'Property & Lawn';
}

export const PRICING_LIST: PricingRow[] = [
  {
    service: 'Projector Setups (Whole-House)',
    startingPrice: 'From $49',
    notes: 'Positioned, aimed, anchored, and set on an outdoor timer.',
    category: 'Holiday & Lighting',
  },
  {
    service: 'Mailbox Wrapping',
    startingPrice: 'From $65',
    notes: 'Evergreen garland, lights, and festive bow tailored to your mailbox.',
    category: 'Holiday & Lighting',
  },
  {
    service: 'Christmas Tree Delivery & Setup',
    startingPrice: 'From $75',
    notes: 'Delivered indoors, leveled in stand, shaped, and swept clean.',
    category: 'Holiday & Lighting',
  },
  {
    service: 'Lighted Poles',
    startingPrice: 'From $85',
    notes: 'Freestanding illuminated poles for yards, driveways & street borders.',
    category: 'Holiday & Lighting',
  },
  {
    service: 'Mailbox Wrap + Candy Cane Setup',
    startingPrice: 'From $95',
    notes: 'Complete street-front holiday bundle with glowing candy cane stakes.',
    category: 'Holiday & Lighting',
  },
  {
    service: 'Permanent LED Lighting',
    startingPrice: 'From $6.50 / ft',
    notes: 'Installed. Custom designs, trim-matched track, app-controlled year-round.',
    category: 'Holiday & Lighting',
  },
  {
    service: 'Custom Christmas Light Installation',
    startingPrice: 'Custom Quote',
    notes: 'Residential & commercial. Includes custom fit, install, removal & storage.',
    category: 'Holiday & Lighting',
  },
  {
    service: 'Lawn Care, Pressure Washing, Gutters & Cleanups',
    startingPrice: 'Custom Quote',
    notes: 'Free fast estimates based on square footage, linear feet, or load size.',
    category: 'Property & Lawn',
  },
];
