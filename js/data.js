/* ==========================================================================
   SHINE STEEL & KITCHENWARE - GLOBAL DATA STORE
   Verified Product Catalog, Wedding Packages, Services & Blog Guides
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: 'prod-1',
    name: 'Tri-Ply Stainless Steel Heavy Kadai (2.5L)',
    category: 'cookware',
    categoryName: 'Tri-Ply Cookware',
    price: 1850,
    oldPrice: 2200,
    rating: 4.9,
    reviews: 142,
    badge: 'Bestseller',
    grade: 'SS-304 Food Grade',
    image: 'https://images.pexels.com/photos/29684990/pexels-photo-29684990/free-photo-of-spicy-indian-curry-in-traditional-kadai.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '3-layer aluminum core encapsulated in surgical grade 304 stainless steel. Uniform heating, zero hot spots, induction & gas compatible. Riveted stay-cool handles.',
    specs: {
      capacity: '2.5 Litres',
      diameter: '24 cm',
      gauge: 'Heavy 18-Gauge Base',
      warranty: '10 Years Replacement'
    }
  },
  {
    id: 'prod-2',
    name: 'Copper-Bottom Handi Cookware Set (3 Pcs)',
    category: 'cookware',
    categoryName: 'Tri-Ply Cookware',
    price: 2450,
    oldPrice: 2990,
    rating: 4.8,
    reviews: 98,
    badge: 'Popular',
    grade: 'SS-304 + Pure Copper',
    image: 'https://images.pexels.com/photos/28726706/pexels-photo-28726706/free-photo-of-stack-of-stainless-steel-cooking-pots-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional slow-cooking handis featuring pure heavy copper bases for swift heat conduction and surgical stainless steel interiors.',
    specs: {
      capacity: '1L, 1.5L, 2.2L',
      diameter: '16cm, 18cm, 20cm',
      gauge: '16-Gauge Copper Clad',
      warranty: '5 Years Warranty'
    }
  },
  {
    id: 'prod-3',
    name: 'Royal Maharaja Feast Thali Set (6-Person / 36-Pc)',
    category: 'tableware',
    categoryName: 'Tableware & Thali Sets',
    price: 6499,
    oldPrice: 7800,
    rating: 5.0,
    reviews: 64,
    badge: 'Wedding Choice',
    grade: 'SS-304 Mirror Finish',
    image: 'https://images.pexels.com/photos/8818732/pexels-photo-8818732.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Exquisite 36-piece royal dining set featuring heavy laser-bordered thalis, brass-rimmed bowls (katories), drinking tumblers, dessert bowls, and spoons.',
    specs: {
      pieces: '36 Items (6 Thalis + Bowls)',
      finish: 'High Mirror Chrome Polish',
      gauge: 'Heavy 18-Gauge Plate',
      warranty: 'Lifetime Shine Guarantee'
    }
  },
  {
    id: 'prod-4',
    name: 'Air-Tight Stainless Steel Spice Masala Box (7 Containers)',
    category: 'storage',
    categoryName: 'Storage & Canisters',
    price: 890,
    oldPrice: 1150,
    rating: 4.9,
    reviews: 210,
    badge: 'Everyday Essential',
    grade: 'SS-304 Rust Free',
    image: 'https://images.pexels.com/photos/3297886/pexels-photo-3297886.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Keep your spices fresh and aroma intact. Transparent see-through lid with 7 individual deep spice cups and mini steel measuring spoon.',
    specs: {
      capacity: '7 x 150g Cups',
      diameter: '20 cm Outer Box',
      gauge: 'Food Grade Deep Draw',
      warranty: 'Lifetime Rust Free'
    }
  },
  {
    id: 'prod-5',
    name: '4-Tier Heavy Gauge Office & School Tiffin Set',
    category: 'storage',
    categoryName: 'Storage & Canisters',
    price: 740,
    oldPrice: 950,
    rating: 4.7,
    reviews: 87,
    badge: 'Eco Friendly',
    grade: 'SS-204 / 304 Tested',
    image: 'https://images.pexels.com/photos/4856953/pexels-photo-4856953.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Leak-resistant heavy latch tier tiffin carrier. Keeps warm home-cooked meals fresh without plastic leach. Durable folding stainless handle.',
    specs: {
      capacity: '4 x 400ml Tiers',
      height: '28 cm',
      gauge: 'Durable 20-Gauge',
      warranty: '3 Years Warranty'
    }
  },
  {
    id: 'prod-6',
    name: 'Surgical Steel Cutlery Set with Stand (24 Pcs)',
    category: 'cutlery',
    categoryName: 'Cutlery & Utensils',
    price: 1290,
    oldPrice: 1650,
    rating: 4.8,
    reviews: 115,
    badge: 'Hot Seller',
    grade: 'SS-304 Surgical Grade',
    image: 'https://images.pexels.com/photos/15660335/pexels-photo-15660335/free-photo-of-fork-and-spoon-and-knife.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Includes 6 dinner spoons, 6 dessert forks, 6 soup spoons, and 6 teaspoons organized on a revolving mirror-polished wire stand.',
    specs: {
      pieces: '24 Pieces + Wire Stand',
      finish: 'Mirror Platinum Polish',
      gauge: '2.5mm Thick Steel',
      warranty: 'Lifetime Bend-Resistant'
    }
  },
  {
    id: 'prod-7',
    name: 'Traditional Stainless Steel Filter Coffee Maker (400ml)',
    category: 'tableware',
    categoryName: 'Tableware & Thali Sets',
    price: 580,
    oldPrice: 750,
    rating: 4.9,
    reviews: 320,
    badge: 'Heritage',
    grade: 'SS-304 Food Grade',
    image: 'https://images.pexels.com/photos/8004547/pexels-photo-8004547.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Authentic South Indian drip brew coffee maker. Micro-perforated stainless pressing disc extracts rich decoction without residual grounds.',
    specs: {
      capacity: '400 ml (3-4 Cups)',
      height: '18 cm',
      gauge: 'Precision Food Grade',
      warranty: 'Lifetime Durability'
    }
  },
  {
    id: 'prod-8',
    name: 'Heavy Commercial Catering Deg / Biryani Handi (15L)',
    category: 'commercial',
    categoryName: 'Commercial & Bulk',
    price: 3890,
    oldPrice: 4600,
    rating: 4.9,
    reviews: 52,
    badge: 'Heavy Duty',
    grade: 'SS-304 16-Gauge',
    image: 'https://images.pexels.com/photos/6375553/pexels-photo-6375553.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Engineered for restaurants, hotels, and large-scale catering. Extra thick 16-gauge base withstands high commercial burner flame with reinforced handles.',
    specs: {
      capacity: '15 Litres',
      diameter: '36 cm',
      gauge: 'Industrial 16-Gauge',
      warranty: '7 Years Commercial'
    }
  },
  {
    id: 'prod-9',
    name: 'Pure Copper & Steel Dual-Layer Water Dispenser (5L)',
    category: 'tableware',
    categoryName: 'Tableware & Thali Sets',
    price: 2190,
    oldPrice: 2800,
    rating: 4.9,
    reviews: 143,
    badge: 'Health Choice',
    grade: 'Inner Copper + Outer SS',
    image: 'https://images.pexels.com/photos/36517900/pexels-photo-36517900/free-photo-of-camping-essentials-water-jug-and-fresh-fruit.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ayurvedic health benefits of pure copper interior combined with fingerprint-resistant polished stainless steel exterior and leakproof brass tap.',
    specs: {
      capacity: '5 Litres',
      tap: 'Solid Brass Chrome Plated',
      finish: 'Dual Metal Polished',
      warranty: '5 Years Tap Warranty'
    }
  },
  {
    id: 'prod-10',
    name: 'Tri-Ply Heavy Bottom Saucepan with Glass Lid (1.8L)',
    category: 'cookware',
    categoryName: 'Tri-Ply Cookware',
    price: 1390,
    oldPrice: 1750,
    rating: 4.8,
    reviews: 89,
    badge: 'Top Pick',
    grade: 'SS-304 Tri-Ply',
    image: 'https://images.pexels.com/photos/30981355/pexels-photo-30981355/free-photo-of-modern-kitchenware-setup-with-stainless-steel-pots.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ideal for tea, milk, gravies, and soups. Tempered glass lid with steam vent and ergonomic cool-touch cast stainless handle.',
    specs: {
      capacity: '1.8 Litres',
      diameter: '18 cm',
      gauge: 'Tri-Ply 2.5mm',
      warranty: '10 Years Replacement'
    }
  },
  {
    id: 'prod-11',
    name: 'Heavy Concave Roti Tawa / Chapati Pan (26cm)',
    category: 'cookware',
    categoryName: 'Tri-Ply Cookware',
    price: 1190,
    oldPrice: 1490,
    rating: 4.8,
    reviews: 112,
    badge: 'Essential',
    grade: 'Heavy Tri-Ply Steel',
    image: 'https://images.pexels.com/photos/4252147/pexels-photo-4252147.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Even heat distribution for soft, fluffy rotis, chapatis, and parathas without scorching. Non-toxic, free from PTFE and PFOA.',
    specs: {
      diameter: '26 cm',
      thickness: '3.0 mm Tri-Ply Base',
      gauge: 'Heavy Duty',
      warranty: '10 Years Warranty'
    }
  },
  {
    id: 'prod-12',
    name: 'Stainless Steel Deep Mixing & Whisking Bowls (Set of 4)',
    category: 'storage',
    categoryName: 'Storage & Canisters',
    price: 1050,
    oldPrice: 1390,
    rating: 4.7,
    reviews: 76,
    badge: 'Prep Tool',
    grade: 'SS-304 Matte/Mirror',
    image: 'https://images.pexels.com/photos/8434633/pexels-photo-8434633.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stackable nesting prep bowls with measurement etched markings inside. Flat stable silicone non-slip bases for effortless whipping.',
    specs: {
      capacity: '1L, 1.8L, 2.8L, 4L',
      finish: 'Dual Satin Interior',
      gauge: 'Durable 20-Gauge',
      warranty: 'Lifetime Rust Free'
    }
  },
  {
    id: 'prod-13',
    name: 'Multi-Tier Stainless Steel Idli Cooker with Whistle (16 Idlis)',
    category: 'cookware',
    categoryName: 'Tri-Ply Cookware',
    price: 1450,
    oldPrice: 1800,
    rating: 4.9,
    reviews: 164,
    badge: 'Heritage Classic',
    grade: 'SS-304 Food Grade',
    image: 'https://images.pexels.com/photos/35041643/pexels-photo-35041643/free-photo-of-stainless-steel-pressure-cooker-with-healthy-meal.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Heavy gauge 4-plate idli steamer equipped with whistle pressure release. Mirror finish stainless steel ensures soft, fluffy idlis with effortless demoulding.',
    specs: {
      capacity: '16 Idlis (4 Tiers)',
      plates: '4 Cavity per Plate',
      gauge: 'Heavy 18-Gauge Base',
      warranty: '5 Years Replacement'
    }
  },
  {
    id: 'prod-14',
    name: 'Tri-Ply Induction Chef Frypan with Cool-Touch Cast Handle (24cm)',
    category: 'cookware',
    categoryName: 'Tri-Ply Cookware',
    price: 1690,
    oldPrice: 2100,
    rating: 4.8,
    reviews: 82,
    badge: 'Chef Choice',
    grade: 'SS-304 Tri-Ply 2.5mm',
    image: 'https://images.pexels.com/photos/4509047/pexels-photo-4509047.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Even edge-to-edge heat conduction for searing, sautéing, and browning. Non-toxic cooking surface free from PTFE, PFOA, and synthetic chemical coatings.',
    specs: {
      diameter: '24 cm',
      thickness: '2.5 mm Tri-Ply',
      gauge: 'Heavy Encapsulated',
      warranty: '10 Years Warranty'
    }
  },
  {
    id: 'prod-15',
    name: 'Airtight Stainless Steel Ghee Pot with Drip-Free Spout (650ml)',
    category: 'storage',
    categoryName: 'Storage & Canisters',
    price: 490,
    oldPrice: 650,
    rating: 4.9,
    reviews: 215,
    badge: 'Kitchen Essential',
    grade: 'SS-304 Pure Steel',
    image: 'https://images.pexels.com/photos/9345667/pexels-photo-9345667.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional South Indian neiyurundai / ghee dispenser with snugly fitted lid slot and matching solid stainless steel serving spoon. Completely leak-resistant.',
    specs: {
      capacity: '650 ml',
      includes: 'Matching SS Spoon',
      gauge: 'Deep Drawn 20-Gauge',
      warranty: 'Lifetime Rust Free'
    }
  },
  
];

const WEDDING_SETS_DATA = [
  {
    id: 'ws-101',
    name: 'The Maharaja 101-Piece Royal Kalyana Trousseau',
    tag: 'Full Heirloom Dowry Set',
    pieces: 101,
    price: 28999,
    oldPrice: 34500,
    image: 'https://images.pexels.com/photos/28726706/pexels-photo-28726706/free-photo-of-stack-of-stainless-steel-cooking-pots-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: true,
    description: 'The ultimate wedding feast set for grand Indian weddings. Includes 12 heavy dinner thalis, 36 katories, 12 water tumblers, 12 spoons, 4 serving handis with brass finials, 2 water jugs, 1 rice feast basin, spice box, coffee set, and complimentary custom laser monogramming.',
    includes: [
      '12 Heavy 18-Gauge Dinner Thalis (32 cm)',
      '36 Dessert & Curry Katories (SS-304)',
      '12 Traditional Drinking Tumblers',
      '4 Tri-ply Serving Casseroles with Brass Knobs',
      '1 Grand Rice Feast Parat / Basin',
      '1 Handcrafted Red Velvet Wooden Storage Trunk'
    ]
  },
  {
    id: 'ws-51',
    name: 'The Swarna-Silver 51-Piece Bridal Starter Collection',
    tag: 'Most Loved Wedding Gift',
    pieces: 51,
    price: 15499,
    oldPrice: 18900,
    image: 'https://images.pexels.com/photos/8818732/pexels-photo-8818732.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: false,
    description: 'Thoughtfully curated for newlywed couples setting up their new dream kitchen. Contains 6 dinner thalis, 18 katories, 6 tumblers, 2 kadai/handi cookware, 1 spice dabba, 1 milk pot, 1 water pitcher, and 12 cutlery items with couple name engraving.',
    includes: [
      '6 Heavy Dinner Thalis with Laser Border',
      '18 Curry & Halwa Katories',
      '6 Beveled Tumblers & 1 Serving Pitcher (2L)',
      '1 Tri-Ply 2.5L Kadai + 1 Saucepan',
      '1 7-Cup Spice Dabba with Etched Lid',
      'Custom Wedding Laser Crest Engraving'
    ]
  },
  {
    id: 'ws-75',
    name: 'The Heritage Brass & Surgical Steel 75-Piece Fusion',
    tag: 'Royal Vintage Craft',
    pieces: 75,
    price: 22800,
    oldPrice: 26500,
    image: 'https://images.pexels.com/photos/4509047/pexels-photo-4509047.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: false,
    description: 'Antique brass rims and cast brass handles fused onto 100% surgical grade 304 stainless steel. Gives the timeless palace wedding aesthetic with modern zero-stain hygiene.',
    includes: [
      '8 Royal Brass-Rimmed Dinner Thalis',
      '24 Brass-Accented Curry Katories',
      '8 Brass Lota-Style Drinking Goblets',
      '3 Copper-Bottom Handis with Brass Handles',
      '1 Brass Mortar & Pestle Set',
      'Velvet-Lined Heirloom Storage Box'
    ]
  },
  {
    id: 'ws-41',
    name: 'The Modern Minimalist 41-Piece Urban Couple Set',
    tag: 'Contemporary Chic',
    pieces: 41,
    price: 11999,
    oldPrice: 14200,
    image: 'https://images.pexels.com/photos/30981355/pexels-photo-30981355/free-photo-of-modern-kitchenware-setup-with-stainless-steel-pots.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: false,
    description: 'Sleek matte-satin brushed finish cookware and dinnerware tailored for apartment living. Compact stackable design, dishwasher safe, and induction compatible.',
    includes: [
      '4 Satin-Finish Coupe Dinner Plates',
      '12 Nesting Bowls (Small & Medium)',
      '1 Tri-ply Frying Pan + 1 Saucepan',
      '4 Airtight Grain Canisters (1kg each)',
      '1 16-Piece Minimalist Cutlery Stand',
      'Eco-Friendly Wooden Gift Packaging'
    ]
  },
  {
    id: 'ws-32',
    name: 'The Everyday 32-Piece New Home Starter Set',
    tag: 'Compact Couple Collection',
    pieces: 32,
    price: 8999,
    oldPrice: 10900,
    image: 'https://images.pexels.com/photos/17223838/pexels-photo-17223838/free-photo-of-plate-with-food.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: false,
    description: 'A practical first-kitchen bundle for couples moving into a new home. Everyday cookware, coordinated plates, and pantry essentials keep the set compact without missing the pieces used most often.',
    includes: [
      '4 Stainless Steel Dinner Plates',
      '8 Everyday Curry & Dessert Bowls',
      '1 Tri-Ply Kadai and 1 Saucepan',
      '4 Drinking Tumblers',
      '1 Airtight Spice Box and 1 Serving Platter',
      '12 Everyday Cutlery Pieces',
      'Custom Gift Note and Safe Packaging'
    ]
  },
  {
    id: 'ws-81',
    name: 'The Grand Gathering 81-Piece Hosting Collection',
    tag: 'Family Feast Favorite',
    pieces: 81,
    price: 24999,
    oldPrice: 29800,
    image: 'https://images.pexels.com/photos/32048482/pexels-photo-32048482/free-photo-of-traditional-indian-kitchen-with-earthenware-and-utensils.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: false,
    description: 'A generous collection for families who love hosting festive meals. A coordinated mix of dining pieces, serving vessels, and cookware makes it easy to welcome guests for celebrations throughout the year.',
    includes: [
      '8 Mirror-Finish Dinner Thalis',
      '24 Curry & Dessert Bowls',
      '8 Drinking Tumblers and 8 Spoons',
      '2 Deep Serving Handis',
      '1 Tri-Ply Family Kadai',
      '8 Dessert Plates, 8 Forks, 6 Serving Spoons, and 8 Tea Cups',
      'Presentation Box with Optional Engraving'
    ]
  }
];

const SERVICES_DATA = [
  {
    id: 'srv-1',
    title: 'Laser Engraving & Personalization',
    category: 'Custom Craft',
    priceStarting: '₹15 / piece',
    turnaround: 'Same Day / 24 Hours',
    image: 'https://images.pexels.com/photos/14995515/pexels-photo-14995515/free-photo-of-photo-of-a-craftsman-at-work.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Precision fiber laser engraving of bride & groom names, wedding dates, family crests, corporate logos, or barcode serials without piercing or weakening the steel.',
    features: ['Permanent & Dishwasher Safe', 'Zero Rust or Oxidation', 'English, Hindi, Tamil & Regional Scripts', 'Free Preview Mockup']
  },
  {
    id: 'srv-2',
    title: 'High-Grade Buffing & Re-Polishing',
    category: 'Restoration',
    priceStarting: '₹40 / utensil',
    turnaround: '2 - 3 Business Days',
    image: 'https://images.pexels.com/photos/30557817/pexels-photo-30557817/free-photo-of-craftsman-polishing-metal-with-industrial-grinder.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Restore ancestral, vintage, or dull kitchen utensils to factory mirror finish using 5-stage mechanical cotton wheels and diamond paste polishing compound.',
    features: ['Scuff & Scratch Removal', 'Stain & Heat Tint Erasure', 'Mirror Chrome Level 8 Polish', 'Food-Safe Ultrasonic De-greasing']
  },
  {
    id: 'srv-3',
    title: 'Wedding Trousseau Velvet Trunk Packaging',
    category: 'Bridal Gifting',
    priceStarting: '₹1,200 / trunk',
    turnaround: '3 - 5 Days',
    image: 'https://images.pexels.com/photos/31307955/pexels-photo-31307955/free-photo-of-elegant-outdoor-wedding-decor-with-pink-blossoms.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Custom handcrafted royal wooden trunks upholstered in scarlet red or emerald green velvet with brass latch hardware to present bridal utensil collections.',
    features: ['Individual Silk Slot Dividers', 'Anti-Tarnish Fabric Lining', 'Custom Gold Stamped Monogram', 'Safe For Inter-City Transit']
  },
  {
    id: 'srv-4',
    title: 'Hotel & Commercial Kitchen Bulk Supply',
    category: 'Commercial Fitouts',
    priceStarting: 'Custom Bulk Quotation',
    turnaround: '5 - 10 Days',
    image: 'https://images.pexels.com/photos/6375553/pexels-photo-6375553.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Full-spectrum supply for restaurants, banquet halls, mess caterers, and canteens. Heavy 16-gauge pots, idli cookers, bain-maries, and steam chafers with GST invoice.',
    features: ['Wholesale Tiered Discounts', 'Commercial Heavy 16 & 14-Gauge', 'Custom Capacity Fabrication', 'On-Site Delivery & Setup']
  },
  {
    id: 'srv-5',
    title: 'Pressure Cooker & Utensil Maintenance Service',
    category: 'Repair & Safety',
    priceStarting: '₹80 / utensil',
    turnaround: 'While You Wait (30 mins)',
    image: 'https://images.pexels.com/photos/35041643/pexels-photo-35041643/free-photo-of-stainless-steel-pressure-cooker-with-healthy-meal.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Authentic replacement of bakelite handles, pressure cooker safety valves, certified food-grade silicone gaskets, and hydraulic bottom dent realignment.',
    features: ['Genuine ISI Brand Spares', 'Pressure Chamber Steam Testing', 'Heavy Rivet Reinforcement', 'Certified Safety Inspection']
  },
  {
    id: 'srv-6',
    title: 'Corporate & Festival Gifting Solutions',
    category: 'Corporate Orders',
    priceStarting: '₹250 / gift pack',
    turnaround: '4 - 7 Days',
    image: 'https://images.pexels.com/photos/15660335/pexels-photo-15660335/free-photo-of-fork-and-spoon-and-knife.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Curated stainless steel dinner sets, thermal lunch carriers, and copper water carafes branded with corporate logos for Diwali, New Year, and annual days.',
    features: ['Customized Branded Gift Boxes', 'Pan-India Multi-Address Shipping', 'Sample Inspection Dispatch', 'GST Tax Credits Compliant']
  }
];

const BLOG_DATA = [
  {
    id: 'blog-1',
    title: 'SS 304 vs SS 202: The Real Science of Food-Grade Steel',
    category: 'Steel Science',
    date: 'October 24, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Why 18/8 grade SS-304 contains 18% Chromium and 8% Nickel to prevent pitting rust against acidic tomato, tamarind, and curd in Indian cooking.',
    content: `
      <h3>Understanding Steel Grades in the Modern Kitchen</h3>
      <p>When shopping for stainless steel kitchenware, you will frequently notice stamps like "SS-304", "SS-202", or "Tri-Ply". But what do these numbers actually mean for your health and cooking performance?</p>
      <p>Grade 304 (also referred to internationally as 18/8 or 18/10 stainless steel) contains approximately 18% Chromium and 8% to 10% Nickel. Chromium binds with atmospheric oxygen to create an invisible, self-healing chromium oxide film on the surface. Nickel provides superior elasticity, allowing heavy deep-drawing without micro-fractures, and imparts the rich mirror luster.</p>
      <p>In contrast, Grade 202 substitutes costly nickel with manganese and nitrogen. While suitable for structural railings or decorative covers, 202 steel is susceptible to pitting corrosion when exposed long-term to acidic curries (rasam, sambar, tomato gravies). For cooking and hot food storage, SS-304 remains the indisputable gold standard.</p>
    `
  },
  {
    id: 'blog-2',
    title: 'How to Keep Mirror-Finish Utensils Sparkling for Decades',
    category: 'Maintenance',
    date: 'October 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Practical home remedies using tamarind pulp, baking soda, and warm vinegar to banish heat discoloration, hard water spots, and oil deposits.',
    content: `
      <h3>Secrets of Heirloom Utensil Maintenance</h3>
      <p>Ever wondered how your grandmother's wedding thalis still look like polished mirrors after 40 years? Mirror-finished stainless steel does not require harsh chemical detergents; in fact, chlorine bleach and abrasive steel wool scratch and strip the reflective surface.</p>
      <h4>1. Removing Rainbow Heat Tints</h4>
      <p>High flame can create a rainbow-colored haze (caused by oxidation of trace minerals). Simply spray white distilled vinegar with a splash of water, let it sit for two minutes, and wipe clean with a soft microfiber cloth.</p>
      <h4>2. Scorched Food in Kadais</h4>
      <p>Never scrape scorched rice or curry with sharp knives! Fill the pot with 2 inches of water, add 2 tablespoons of baking soda, and bring to a gentle boil for 10 minutes. The scorched layer lifts naturally without a scratch.</p>
    `
  },
  {
    id: 'blog-3',
    title: 'The Ultimate Wedding Utensils Checklist: 51 vs 101 Pieces',
    category: 'Wedding Guides',
    date: 'September 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Detailed breakdown of traditional wedding trousseau items required for South & North Indian ceremonies, family feasts, and pooja offerings.',
    content: `
      <h3>Selecting the Right Bridal Utensil Package</h3>
      <p>In Indian wedding heritage, gifting utensils (kalyana seervarisai or bartan daan) symbolizes prosperity, abundance, and providing the bride and groom with everything needed to nourish their family.</p>
      <p><strong>The 51-Piece Starter Set:</strong> Ideal for modern nuclear couples living in apartments. Focuses on daily utility: 6 dinner thalis, 18 katories, 6 tumblers, 1 kadai, 1 saucepan, 1 pressure cooker, 1 spice dabba, and everyday cutlery.</p>
      <p><strong>The 101-Piece Grand Heritage Set:</strong> Designed for joint families and those who host festival feasts. Adds commercial-grade rice basins (parats), water storage vessels (kudam), ghee dispensers, deep frying strainers, idli cookers, and sweet feast serving bowls.</p>
    `
  },
  {
    id: 'blog-4',
    title: 'Why Tri-Ply Cookware is Replacing Non-Stick Pans Worldwide',
    category: 'Healthy Cooking',
    date: 'September 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Say goodbye to flaking Teflon and chemical vapors. Learn why 3-layer steel provides non-stick performance when pre-heated to the Leidenfrost point.',
    content: `
      <h3>The Tri-Ply Revolution: Clean, Non-Toxic Heat</h3>
      <p>Non-stick coatings (PTFE, PFOA) have a limited shelf life: within 18 to 24 months, high heat and metal ladles cause micro-scratches that release synthetic particles into your food.</p>
      <p>Tri-ply cookware resolves this permanently. By sandwiching pure conductive aluminum between two layers of food-grade stainless steel, heat distributes instantaneously from the bottom up the curved sides. When you preheat a stainless steel pan until water droplets bead and glide across (the Leidenfrost effect), food will never stick!</p>
    `
  },
  {
    id: 'blog-5',
    title: 'How to Clean Scorched & Burnt Pots Without Ruining Mirror Polish',
    category: 'Maintenance',
    date: 'August 30, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Gentle, zero-scratch techniques using natural household ingredients to lift stubborn burned milk, tea stains, and baked grease without sandpaper scratches.',
    content: `
      <h3>Safe Restoration of Burned Stainless Steel Vessels</h3>
      <p>We have all experienced it: leaving a pot of milk or thick dal unattended on high flame. The bottom scorches black, and the immediate impulse is to grab harsh steel wool and scrape. Stop right there! Abrasive wire wool permanently scores grooves into surgical steel that attract future food sticking.</p>
      <h4>Method 1: The Boiling Baking Soda Bath</h4>
      <p>Add 2 tablespoons of baking soda and half an inch of water. Bring to a gentle boil for 10 minutes. The effervescent carbonation naturally loosens the charred matrix from the 304 steel base. Allow it to cool, then gently push away with a silicone or wooden spatula.</p>
      <h4>Method 2: Natural Citric Acid / Lemon Boil</h4>
      <p>Cut two lemons in quarters, add water to cover the burned area, and simmer for 15 minutes. The natural acid cuts through caramelized proteins and minerals without etching the steel alloy.</p>
    `
  },
  {
    id: 'blog-6',
    title: 'Induction vs Gas Cooking with Tri-Ply Steel: Efficiency & Temperature',
    category: 'Healthy Cooking',
    date: 'August 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Detailed thermodynamic comparison between magnetic induction cooktops and open gas burners when cooking with heavy 3-ply stainless steel cookware.',
    content: `
      <h3>The Thermodynamics of Tri-Ply Cookware</h3>
      <p>Modern households are increasingly adopting electromagnetic induction cooktops for their 85-90% thermal efficiency compared to traditional gas burners (which transfer only 40% of their heat to the pan).</p>
      <p>Tri-ply stainless steel cookware is specifically engineered for this duality. The exterior magnetic stainless steel (SS-430) couples with the induction coil to generate rapid magnetic eddy currents. These currents instantly heat the encapsulated pure aluminum core, which spreads heat uniformly across the cooking floor and up the curved walls of the kadai or handi.</p>
      <p>On gas, the thick aluminum sandwich eliminates the dangerous concentric ring hot-spots common in thin single-ply vessels, preserving essential vitamins and delicate spices from scorching.</p>
    `
  }
];
