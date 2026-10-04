import clip1 from '../../enteryclip1.mp4';
import clip2 from '../../enteryjustclip2.mp4';
import clip3 from '../../livingclip3.mp4';
import clip4 from '../../kitchenclip4.mp4';
import clip5 from '../../bedroomclip5.mp4';
import clip6 from '../../bathroomclip6.mp4';

import poster1 from '../assets/posters/clip1_poster.jpg';
import poster2 from '../assets/posters/clip2_poster.jpg';
import poster3 from '../assets/posters/clip3_poster.jpg';
import poster4 from '../assets/posters/clip4_poster.jpg';
import poster5 from '../assets/posters/clip5_poster.jpg';
import poster6 from '../assets/posters/clip6_poster.jpg';

export const CHAPTERS = [
  {
    id: 'arrival',
    number: '01',
    displayNumber: '01 / ARRIVAL',
    title: 'ARRIVAL',
    subtitle: 'THE MONUMENTAL APPROACH',
    layoutPosition: 'left',
    quote: 'A contemporary residence defined by monumental proportions, natural stone and carefully controlled light.',
    spaceName: 'ARRIVAL & PORTAL',
    cameraTelemetry: {
      elevation: '+1.60m',
      focalLength: '24mm',
      aperture: 'f/4.0',
      orientation: 'North-East 34°'
    },
    materials: [
      'Roman Travertine',
      'Architectural Bronze',
      'Structural Low-Iron Glass',
      'Honed Basalt'
    ],
    details: [
      'Contemporary architecture',
      'Travertine facade',
      'Floor-to-ceiling glazing',
      'Reflecting pool'
    ],
    // Chapter 1 seamlessly incorporates the exterior reflecting pool approach and the entrance glass portal threshold
    clips: [
      {
        src: clip1,
        poster: poster1,
        label: 'Exterior Approach & Pool',
        weight: 0.55
      },
      {
        src: clip2,
        poster: poster2,
        label: 'Entrance Portal & Threshold',
        weight: 0.45
      }
    ],
    hotspots: [
      {
        id: 'travertine-facade',
        label: 'Travertine Facade',
        category: 'Materiality',
        x: 23,
        y: 42,
        description: 'Monumental honed Roman travertine blocks with hairline recessed bronze joints, creating timeless monolithic presence.',
        provenance: 'Tivoli Quarry, Lazio, Italy'
      },
      {
        id: 'reflecting-pool',
        label: 'Reflecting Pool',
        category: 'Architectural Water',
        x: 48,
        y: 84,
        description: 'Zero-edge water mirror spanning the full frontage, amplifying twilight reflections and cooling ambient breezes.',
        provenance: 'Honed Zimbabwean Black Granite'
      },
      {
        id: 'glazing-envelope',
        label: 'Floor-to-Ceiling Glazing',
        category: 'Structural Envelope',
        x: 52,
        y: 35,
        description: 'Custom 6-meter motorized glass panes engineered with invisible frame profiles and solar-control coatings.',
        provenance: 'Saint-Gobain Diamant Low-Iron Glass'
      }
    ]
  },
  {
    id: 'living',
    number: '02',
    displayNumber: '02 / LIVING SPACE',
    title: 'LIVING SPACE',
    subtitle: 'THE DOUBLE-HEIGHT ATRIUM',
    layoutPosition: 'left',
    quote: 'A double-height living environment designed around natural materials, sculptural forms and uninterrupted views.',
    spaceName: 'MAIN LIVING PAVILION',
    cameraTelemetry: {
      elevation: '+1.85m',
      focalLength: '28mm',
      aperture: 'f/2.8',
      orientation: 'South-West 210°'
    },
    materials: [
      'Travertine',
      'Dark Walnut',
      'Natural Stone',
      'Brushed Champagne Bronze'
    ],
    details: [
      'Double-height volume',
      'Sculptural staircase',
      'Custom furniture',
      'Architectural lighting'
    ],
    clips: [
      {
        src: clip3,
        poster: poster3,
        label: 'Grand Living Space & Helical Stairs',
        weight: 1.0
      }
    ],
    hotspots: [
      {
        id: 'helical-staircase',
        label: 'Sculptural Staircase',
        category: 'Sculptural Form',
        x: 82,
        y: 52,
        description: 'Continuous helical staircase hand-carved from solid travertine blocks with an integrated bronze handrail channel.',
        provenance: 'Bespoke Aurelia Atelier Commission'
      },
      {
        id: 'walnut-cladding',
        label: 'Dark Walnut Paneling',
        category: 'Millwork',
        x: 27,
        y: 38,
        description: 'Floor-to-ceiling American black walnut paneling incorporating concealed acoustic baffles and secret doors.',
        provenance: 'Pennsylvania Architectural Hardwood'
      },
      {
        id: 'modular-lounge',
        label: 'Custom Furniture Suite',
        category: 'Interiors',
        x: 44,
        y: 72,
        description: 'Low-profile modular sofa configured for spatial conversation, upholstered in heavy natural linen and wool bouclé.',
        provenance: 'Custom Designed by Aurelia Studio'
      },
      {
        id: 'recessed-lighting',
        label: 'Architectural Lighting',
        category: 'Lighting Design',
        x: 48,
        y: 16,
        description: 'Concealed micro-linear LED channels casting calibrated 2700K warm wash across ceiling planes without visible source glare.',
        provenance: 'Flos Architectural Custom Spec'
      }
    ]
  },
  {
    id: 'kitchen',
    number: '03',
    displayNumber: '03 / CULINARY SPACE',
    title: 'CULINARY SPACE',
    subtitle: 'THE MONOLITHIC KITCHEN & DINING',
    layoutPosition: 'right',
    quote: 'A restrained composition of stone, timber and metal designed for both intimate dining and expansive entertaining.',
    spaceName: 'CULINARY & DINING SUITE',
    cameraTelemetry: {
      elevation: '+1.45m',
      focalLength: '35mm',
      aperture: 'f/2.8',
      orientation: 'West 270°'
    },
    materials: [
      'Natural Stone',
      'Walnut',
      'Brushed Metal',
      'Calacatta Paonazzo'
    ],
    details: [
      'Monolithic island',
      'Custom cabinetry',
      'Integrated lighting',
      'Bespoke dining environment'
    ],
    clips: [
      {
        src: clip4,
        poster: poster4,
        label: 'Kitchen Island & Dining Pavilion',
        weight: 1.0
      }
    ],
    hotspots: [
      {
        id: 'waterfall-island',
        label: 'Monolithic Island',
        category: 'Stone Craft',
        x: 48,
        y: 64,
        description: 'Single block Calacatta Paonazzo marble with mitered waterfall edges and flush undermount induction zones.',
        provenance: 'Carrara Marble Basin, Tuscany'
      },
      {
        id: 'custom-cabinetry',
        label: 'Custom Cabinetry',
        category: 'Millwork',
        x: 75,
        y: 35,
        description: 'Quarter-sawn walnut cabinet fronts with touch-latch mechanisms concealing sub-zero refrigeration and wine reserves.',
        provenance: 'Artisanal Joinery Workshop'
      },
      {
        id: 'ribbon-pendants',
        label: 'Bespoke Lighting',
        category: 'Sculptural Lighting',
        x: 42,
        y: 15,
        description: 'Sculpted bronze ribbon luminaires that anchor the dining volume with warm geometric reflections.',
        provenance: 'Limited Studio Series'
      },
      {
        id: 'dining-extension',
        label: 'Bespoke Dining Environment',
        category: 'Furniture Design',
        x: 24,
        y: 74,
        description: 'Cantilevered solid walnut dining table seamlessly joined to the stone island, seating eight guests in comfort.',
        provenance: 'Solid Walnut Timber Slab'
      }
    ]
  },
  {
    id: 'bedroom',
    number: '04',
    displayNumber: '04 / MASTER SUITE',
    title: 'MASTER SUITE',
    subtitle: 'THE PRIVATE SANCTUARY',
    layoutPosition: 'left',
    quote: 'A private retreat shaped by soft textures, warm materials and expansive views.',
    spaceName: 'MASTER BEDROOM SUITE',
    cameraTelemetry: {
      elevation: '+1.50m',
      focalLength: '32mm',
      aperture: 'f/2.4',
      orientation: 'South 180°'
    },
    materials: [
      'Walnut',
      'Textured Fabric',
      'Natural Stone',
      'Raw Silk & Wool'
    ],
    details: [
      'Custom millwork',
      'Floor-to-ceiling glazing',
      'Ambient lighting',
      'Private lounge'
    ],
    clips: [
      {
        src: clip5,
        poster: poster5,
        label: 'Master Suite & Skyline View',
        weight: 1.0
      }
    ],
    hotspots: [
      {
        id: 'custom-headboard',
        label: 'Custom Millwork Headboard',
        category: 'Millwork & Stone',
        x: 35,
        y: 40,
        description: 'Fluted American walnut wall backdrop integrated with bookmatched marble reveals and concealed bedside automation.',
        provenance: 'Aurelia Bespoke Suite Design'
      },
      {
        id: 'skyline-glazing',
        label: 'Floor-to-Ceiling Glazing',
        category: 'Envelope',
        x: 82,
        y: 45,
        description: 'Unobstructed full-height glazing framing distant horizon views with concealed motorized blackout linen drapes.',
        provenance: 'Acoustic Triple-Glazed System'
      },
      {
        id: 'chaise-lounge',
        label: 'Private Lounge Chaise',
        category: 'Interiors',
        x: 24,
        y: 78,
        description: 'Ergonomic daybed upholstered in textured charcoal woven fabric, positioned for quiet morning reflection.',
        provenance: 'Italian Upholstery Guild'
      },
      {
        id: 'suspended-pendants',
        label: 'Ambient Lighting',
        category: 'Lighting Design',
        x: 52,
        y: 42,
        description: 'Hand-blown organic glass teardrop pendants creating soft, non-intrusive bedside illumination.',
        provenance: 'Murano Hand-Blown Glass'
      }
    ]
  },
  {
    id: 'bathroom',
    number: '05',
    displayNumber: '05 / PRIVATE SPA',
    title: 'PRIVATE SPA',
    subtitle: 'THE WELLNESS RETREAT',
    layoutPosition: 'right',
    quote: 'A quiet architectural sanctuary where stone, water and light create a restrained sense of luxury.',
    spaceName: 'PRIMARY SPA & BATH',
    cameraTelemetry: {
      elevation: '+1.40m',
      focalLength: '24mm',
      aperture: 'f/3.2',
      orientation: 'North-West 315°'
    },
    materials: [
      'Travertine',
      'Marble',
      'Brushed Metal',
      'Matte Solid Surface'
    ],
    details: [
      'Sculptural bath',
      'Walk-in shower',
      'Floating vanity',
      'Indirect lighting'
    ],
    clips: [
      {
        src: clip6,
        poster: poster6,
        label: 'Primary Spa Bath & Floating Vanity',
        weight: 1.0
      }
    ],
    hotspots: [
      {
        id: 'freestanding-tub',
        label: 'Sculptural Bath',
        category: 'Sanitary Architecture',
        x: 38,
        y: 72,
        description: 'Seamless oval soaking tub crafted from cast mineral composite with floor-mounted brushed nickel tapware.',
        provenance: 'Custom Cast Mineral Resin'
      },
      {
        id: 'marble-cladding',
        label: 'Bookmatched Marble',
        category: 'Natural Stone',
        x: 22,
        y: 38,
        description: 'Precision bookmatched Arabescato marble slabs enveloping the walls with dramatic organic veining.',
        provenance: 'Apuan Alps, Italy'
      },
      {
        id: 'floating-vanity',
        label: 'Floating Vanity',
        category: 'Stone Millwork',
        x: 76,
        y: 68,
        description: 'Cantilevered monolithic travertine basin unit with dual integrated sinks and concealed perimeter drain channels.',
        provenance: 'Roman Silver Travertine'
      },
      {
        id: 'walkin-shower',
        label: 'Walk-in Shower',
        category: 'Hydrotherapy',
        x: 64,
        y: 45,
        description: 'Open wet-room shower zone with flush ceiling rain cascade and full-height frameless glass separation.',
        provenance: 'Dornbracht Architectural Fixtures'
      }
    ]
  },
  {
    id: 'terrace',
    number: '06',
    displayNumber: '06 / TERRACE',
    title: 'THE TERRACE',
    subtitle: 'THE ARCHITECTURAL CLIMAX',
    layoutPosition: 'left',
    quote: 'Architecture opens completely toward the surrounding landscape, creating a final transition between interior and exterior.',
    spaceName: 'EXTERIOR TERRACE & INFINITY VISTA',
    cameraTelemetry: {
      elevation: '+2.10m',
      focalLength: '21mm',
      aperture: 'f/5.6',
      orientation: 'North-East 45°'
    },
    materials: [
      'Travertine',
      'Structural Glass',
      'Reflecting Water',
      'Patinated Bronze'
    ],
    details: [
      'Infinity edge',
      'Panoramic glazing',
      'Outdoor lounge',
      'Landscape integration'
    ],
    clips: [
      {
        src: clip1,
        poster: poster1,
        label: 'Terrace & Illuminated Residence Reveal',
        weight: 1.0
      }
    ],
    hotspots: [
      {
        id: 'infinity-edge',
        label: 'Infinity Edge Pool',
        category: 'Water Architecture',
        x: 50,
        y: 78,
        description: 'Perimeter overflow pool creating an optical bridge between residence stone paving and the natural horizon.',
        provenance: 'Zero-Tolerance Precision Engineering'
      },
      {
        id: 'panoramic-facade',
        label: 'Panoramic Glazing',
        category: 'Facade Engineering',
        x: 52,
        y: 38,
        description: 'Dissolving glass walls that unite the double-height volume with the exterior terrace at dusk.',
        provenance: 'High-Performance Solar Glass'
      },
      {
        id: 'outdoor-lounge',
        label: 'Outdoor Living Pavilions',
        category: 'Landscape Architecture',
        x: 78,
        y: 54,
        description: 'Recessed conversation pits with integrated linear gas hearths and weather-resistant Belgian linen seating.',
        provenance: 'Aurelia Outdoor Series'
      },
      {
        id: 'landscape-integration',
        label: 'Landscape Integration',
        category: 'Contextual Design',
        x: 20,
        y: 65,
        description: 'Architectural grass borders and specimen olive trees illuminated with low-glare 2400K landscape accents.',
        provenance: 'Mediterranean Native Xeriscape'
      }
    ]
  }
];

export const STUDIO_DATA = {
  name: 'AURELIA RESIDENCE',
  tagline: 'PRIVATE INTERIOR ARCHITECTURE & RESIDENTIAL DESIGN',
  manifesto: 'Aurelia Residence exists at the intersection of monumental proportion and intimate materiality. We believe architecture should not impose upon human existence, but rather frame it with dignity, silence, and quiet permanence.',
  pillars: [
    {
      index: '01',
      title: 'INTERIOR ARCHITECTURE',
      description: 'Sculpting volumes from the inside out. We manipulate double-height voids, monolithic stairways, and architectural glass to establish effortless spatial cadence.'
    },
    {
      index: '02',
      title: 'CUSTOM RESIDENTIAL DESIGN',
      description: 'Each residence is an unrepeatable commission. We choreograph morning light, sightlines, and circulation to create sanctuaries of uncompromising beauty.'
    },
    {
      index: '03',
      title: 'MATERIAL DIRECTION',
      description: 'Direct procurement from generational Italian quarries, Nordic sustainable timber forests, and artisanal metal workshops with absolute provenance.'
    },
    {
      index: '04',
      title: 'LIGHTING & SPATIAL EXPERIENCE',
      description: 'Light is treated as physical mass. We sculpt solar trajectories by day and calibrate silent, glare-free indirect warmth by night.'
    }
  ],
  stats: [
    {
      value: '15+',
      label: 'Years of Design Experience',
      caption: 'Dedicated solely to ultra-prime private residential environments'
    },
    {
      value: '42',
      label: 'Residential Projects',
      caption: 'Bespoke commissions executed with obsessive spatial precision'
    },
    {
      value: '18',
      label: 'International Collaborations',
      caption: 'Master artisans, master stone sculptors, and engineering pioneers'
    },
    {
      value: '100%',
      label: 'Bespoke Craftsmanship',
      caption: 'Zero standard catalog fixtures; every element drawn from scratch'
    }
  ],
  services: [
    {
      number: '01',
      title: 'INTERIOR ARCHITECTURE',
      scope: 'Structural space planning, double-height volumes, stair geometry, door elevation schedules, acoustic ceilings, and integrated HVAC concealed design.'
    },
    {
      number: '02',
      title: 'RESIDENTIAL DESIGN',
      scope: 'Holistic interior schemes, spatial harmony, bespoke finishes, artwork curation, tactile fabric sourcing, and complete lifestyle masterplanning.'
    },
    {
      number: '03',
      title: 'MATERIAL & FINISH DIRECTION',
      scope: 'Direct quarry selection (travertine, Calacatta, onyx), timber species specification, hand-rubbed metal patinas, and mineral plaster testing.'
    },
    {
      number: '04',
      title: 'LIGHTING DESIGN',
      scope: 'Circadian architectural lighting schemes, hidden trough detailing, museum-grade art illumination, and custom decorative pendant development.'
    },
    {
      number: '05',
      title: 'BESPOKE FURNITURE',
      scope: 'One-of-a-kind stone dining monoliths, custom upholstered modular seating, architectural dressing suites, and collectible design commissions.'
    },
    {
      number: '06',
      title: 'SPATIAL EXPERIENCE',
      scope: 'Sensory acoustic modeling, climate-responsive transitions, water reflection integration, and landscape-to-interior dissolution.'
    }
  ],
  contact: {
    heading: "LET'S CREATE",
    subheading: 'YOUR NEXT SPACE.',
    description: 'For private residences, architectural interiors and bespoke environments.',
    email: 'hello@aureliaresidence.com',
    phone: '+00 000 000 000',
    locations: ['London', 'Dubai', 'Mumbai'],
    studios: [
      { city: 'London', address: '14 Berkeley Square, Mayfair, London W1J 6BQ' },
      { city: 'Dubai', address: 'Gate Village 08, DIFC, Dubai, UAE' },
      { city: 'Mumbai', address: 'Bandra Reclamation, Mumbai 400050' }
    ]
  }
};
