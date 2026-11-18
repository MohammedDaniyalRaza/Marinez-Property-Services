export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'Pressure Washing' | 'Lawn & Landscaping' | 'Holiday Lighting' | 'Cleanup';
  location: string;
}

export const BRAND_ASSETS = {
  logoCrest: '/assets/aistudio/MARINEZ_Property_Services_Crest_a5624cd5.png',
  crewPressureWash:
    '/assets/aistudio/883374901_18095675456477946_982792607832651721_n_262fa25d.jpg',
  fleetEquipment:
    '/assets/aistudio/902585600_18096721049477946_8432666792362759034_n_fd2aaf1c.jpg',
  tulsaLawnViewOne:
    '/assets/aistudio/868381598_18094295354477946_8759205820346390649_n_f5958144.jpg',
  tulsaLawnViewTwo:
    '/assets/aistudio/869318691_18094295300477946_7058891697849175085_n_e797ddf3.jpg',
} as const;

export const SITE_IMAGES = {
  heroHome: '/src/assets/images/hero_tulsa_property_1795033448914.jpg',
  heroAbout: BRAND_ASSETS.fleetEquipment,
  heroServices: BRAND_ASSETS.crewPressureWash,
  heroHoliday: '/src/assets/images/holiday_christmas_home_1795033453914.jpg',
  heroPricing: '/src/assets/images/service_lawn_stripes_1795033448291.jpg',
  heroGallery: '/src/assets/images/holiday_permanent_led_1795033454469.jpg',
  heroFaq: '/src/assets/images/service_tree_trim_1795033451118.jpg',
  heroContact: '/src/assets/images/service_gutter_clean_1795033449973.jpg',

  // Individual service imagery
  lawnCare: '/src/assets/images/service_lawn_stripes_1795033448291.jpg',
  leafCleanup: '/src/assets/images/service_leaf_cleanup_1795033451087.jpg',
  treeTrimming: '/src/assets/images/service_tree_trim_1795033451118.jpg',
  pressureWashing: BRAND_ASSETS.crewPressureWash,
  deckWashing: '/src/assets/images/service_deck_wash_1795033449331.jpg',
  gutterCleaning: '/src/assets/images/service_gutter_clean_1795033449973.jpg',
  junkRemoval: '/src/assets/images/service_junk_removal_1795033451686.jpg',
  trashCanCleaning: '/src/assets/images/service_bin_sanitize_1795033452019.jpg',
  smallRepairs: '/src/assets/images/service_property_repairs_1795033455907.jpg',

  // Holiday & Permanent lighting imagery
  permanentLed: '/src/assets/images/holiday_permanent_led_1795033454469.jpg',
  christmasLights: '/src/assets/images/holiday_christmas_home_1795033453914.jpg',
  mailboxWrap: '/src/assets/images/holiday_mailbox_candy_1795033454309.jpg',
  treeDelivery: '/src/assets/images/holiday_tree_delivery_1795033455153.jpg',

  // Before / After Slider Pairs
  beforeDriveway: '/src/assets/images/before_dirty_driveway_1795033452537.jpg',
  afterDriveway: '/src/assets/images/after_clean_driveway_1795033452035.jpg',
  beforeLawn: BRAND_ASSETS.tulsaLawnViewOne,
  afterLawn: '/src/assets/images/service_lawn_stripes_1795033448291.jpg',
} as const;

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    src: BRAND_ASSETS.crewPressureWash,
    alt: 'Marinez Property Services and Tulsa Property Services crew pressure washing a residential driveway and sanitizing trash bin',
    title: 'Driveway Wash & Trash Bin Sanitization',
    category: 'Pressure Washing',
    location: 'Tulsa, OK',
  },
  {
    id: 'gal-2',
    src: BRAND_ASSETS.fleetEquipment,
    alt: 'Commercial Scag mowers, Echo and Stihl blowers ready for Tulsa lawn routes',
    title: 'Commercial Mower & Blower Fleet',
    category: 'Lawn & Landscaping',
    location: 'Tulsa Shop',
  },
  {
    id: 'gal-3',
    src: '/src/assets/images/hero_tulsa_property_1795033448914.jpg',
    alt: 'Tulsa brick and stone residence with freshly washed concrete driveway and striped front turf',
    title: 'Full Front Exterior Curb Appeal Refresh',
    category: 'Pressure Washing',
    location: 'South Tulsa',
  },
  {
    id: 'gal-4',
    src: '/src/assets/images/holiday_permanent_led_1795033454469.jpg',
    alt: 'Permanent LED roofline lighting glowing emerald green and warm gold on a Tulsa suburban home',
    title: 'App-Controlled Permanent LED Roofline',
    category: 'Holiday Lighting',
    location: 'Jenks, OK',
  },
  {
    id: 'gal-5',
    src: '/src/assets/images/holiday_christmas_home_1795033453914.jpg',
    alt: 'Brick residence outfitted with warm white C9 Christmas lights, garage wreaths, and lit columns',
    title: 'Custom C9 Roofline & Porch Wrap',
    category: 'Holiday Lighting',
    location: 'Broken Arrow',
  },
  {
    id: 'gal-6',
    src: '/src/assets/images/holiday_mailbox_candy_1795033454309.jpg',
    alt: 'Brick mailbox wrapped in lit evergreen garland with crimson bow and candy cane walkway lights',
    title: 'Mailbox Garland Wrap & Candy Cane Stakes',
    category: 'Holiday Lighting',
    location: 'Bixby, OK',
  },
  {
    id: 'gal-7',
    src: '/src/assets/images/service_lawn_stripes_1795033448291.jpg',
    alt: 'Freshly mowed lawn with diagonal stripes and clean sidewalk edging',
    title: 'Precision Diagonal Lawn Striping',
    category: 'Lawn & Landscaping',
    location: 'Owasso, OK',
  },
  {
    id: 'gal-8',
    src: '/src/assets/images/service_deck_wash_1795033449331.jpg',
    alt: 'Pressure washer restoring weathered cedar deck boards back to natural golden grain',
    title: 'Cedar Deck Restoration Wash',
    category: 'Pressure Washing',
    location: 'Midtown Tulsa',
  },
  {
    id: 'gal-9',
    src: '/src/assets/images/after_clean_driveway_1795033452035.jpg',
    alt: 'Spotless freshly surface-cleaned concrete driveway and sidewalk in front of brick garage',
    title: 'Concrete Surface Cleaning Result',
    category: 'Pressure Washing',
    location: 'Broken Arrow',
  },
  {
    id: 'gal-10',
    src: '/src/assets/images/service_bin_sanitize_1795033452019.jpg',
    alt: 'Sanitized and deodorized residential rolling trash and recycling cans on clean concrete',
    title: 'Sanitized & Deodorized Trash Cans',
    category: 'Cleanup',
    location: 'Tulsa, OK',
  },
  {
    id: 'gal-11',
    src: '/src/assets/images/service_leaf_cleanup_1795033451087.jpg',
    alt: 'Half-cleared Oklahoma autumn yard showing dramatic leaf cleanup transformation',
    title: 'Fall Leaf Clearing & Yard Haul',
    category: 'Cleanup',
    location: 'Midtown Tulsa',
  },
  {
    id: 'gal-12',
    src: '/src/assets/images/service_gutter_clean_1795033449973.jpg',
    alt: 'Cleared seamless white aluminum gutters and downspout on residential brick exterior',
    title: 'Gutter & Downspout Flow Clearing',
    category: 'Cleanup',
    location: 'Sapulpa, OK',
  },
  {
    id: 'gal-13',
    src: '/src/assets/images/service_tree_trim_1795033451118.jpg',
    alt: 'Neatly pruned shrubs, sculpted ornamental evergreens, and crisp mulch beds',
    title: 'Shrub Sculpting & Canopy Trimming',
    category: 'Lawn & Landscaping',
    location: 'Bixby, OK',
  },
  {
    id: 'gal-14',
    src: '/src/assets/images/service_junk_removal_1795033451686.jpg',
    alt: 'Completely cleared and swept two-car garage and driveway apron',
    title: 'Garage Cleanout & Junk Haul-Away',
    category: 'Cleanup',
    location: 'Sand Springs',
  },
  {
    id: 'gal-15',
    src: '/src/assets/images/holiday_tree_delivery_1795033455153.jpg',
    alt: 'Glowing Christmas tree delivered and installed inside a suburban living room window',
    title: 'Christmas Tree Delivery & Setup',
    category: 'Holiday Lighting',
    location: 'Tulsa, OK',
  },
  {
    id: 'gal-16',
    src: BRAND_ASSETS.tulsaLawnViewTwo,
    alt: 'Residential Tulsa brick home lawn after trimming and edging',
    title: 'Residential Yard Maintenance Route',
    category: 'Lawn & Landscaping',
    location: 'Tulsa, OK',
  },
];
