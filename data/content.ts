import { Project, Service, ProcessStage, StudioPrinciple } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'inveins',
    title: 'Inveins',
    category: 'Ecommerce & Brand Flagship',
    year: '2025–2026',
    clientProblem:
      'An independent clothing brand producing heavyweight organic cotton garments needed an architectural digital storefront that matched their minimalist aesthetic without falling into generic template conventions.',
    solution:
      'Built a custom storefront emphasizing tactile typography, rapid catalog navigation, clear size exploration, and a streamlined mobile checkout flow.',
    liveUrl: 'https://inveins.in',
    isExternal: true,
    deliverables: ['Storefront Design', 'Catalog Architecture', 'Mobile Checkout Optimization', 'Performance Tuning'],
    theme: 'light',
  },
  {
    id: 'mpgi-sports',
    title: 'MPGI Sports Fest (APEX)',
    category: 'Sports Management & Live Portal',
    year: '2026',
    clientProblem:
      'A collegiate athletics fest hosting 12 concurrent tournaments required a reliable system to handle live score dissemination, match schedules, athlete verification, and automated registration fees.',
    solution:
      'Engineered a real-time event portal with live match telemetry, fixture generation, category-based team registration, and direct Razorpay payment processing.',
    liveUrl: 'https://mpgisports.in',
    isExternal: true,
    deliverables: ['Tournament Web Portal', 'Razorpay Gateway Integration', 'Live Match Telemetry', 'Schedule Engine'],
    theme: 'dark',
  },
  {
    id: 'crawlforge',
    title: 'CrawlForge',
    category: 'Custom Software & Lead Extraction',
    year: '2025',
    clientProblem:
      'B2B development and sales teams waste dozens of hours each week manually collecting and parsing company details from disparate web directories without structured exports.',
    solution:
      'Developed a focused scraping and data extraction tool with configurable selectors, concurrency limits, and clean CSV/JSON output formats designed for developer workflows.',
    isExternal: false,
    deliverables: ['Custom Web Application', 'Scraping Pipeline', 'Export Formats', 'Usage Dashboard'],
    theme: 'light',
  },
  {
    id: 'ai-interview',
    title: 'Interview Prep Platform',
    category: 'Web Application & Product Interface',
    year: '2025',
    clientProblem:
      'Software candidates preparing for technical interviews lack a distraction-free environment to simulate realistic timed interview scenarios with structured feedback.',
    solution:
      'Created a focused interview practice interface featuring timed prompt scenarios, structured answer recording, and rubric-driven evaluations.',
    isExternal: false,
    deliverables: ['Product UI/UX', 'Interview Workspace', 'Audio & Text Evaluation Interface'],
    theme: 'light',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'websites',
    number: '01',
    title: 'Websites & Digital Experiences',
    summary:
      'We design and build clean, responsive websites that articulate what your business does, establish immediate trust, and guide visitors to the next step without friction.',
    scope: [
      'Brand websites & studio portals',
      'Editorial typography & layout systems',
      'Responsive design across every breakpoint',
      'Semantic structure & Core Web Vitals profiling',
    ],
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'Ecommerce Development',
    summary:
      'We engineer online storefronts centered on practical customer journeys: rapid product discovery, thoughtful product details, and reliable checkout integrations.',
    scope: [
      'Custom storefront implementation',
      'Category browsing & filter architecture',
      'Payment gateway setup (Razorpay, Stripe)',
      'Cart, checkout, and inventory workflows',
    ],
  },
  {
    id: 'software',
    number: '03',
    title: 'Custom Web Applications & SaaS',
    summary:
      'We build functional software for founders and operating businesses: customer-facing applications, internal operations tools, and minimum viable products.',
    scope: [
      'Application interface design (UI/UX)',
      'Frontend architecture in Next.js & React',
      'Database integration & API connections',
      'Role-based access & authentication systems',
    ],
  },
  {
    id: 'improvements',
    number: '04',
    title: 'Product Refinement & Integrations',
    summary:
      'For existing platforms that have grown unwieldy: we clean up messy interfaces, resolve performance bottlenecks, and integrate necessary third-party services.',
    scope: [
      'Usability audits & interface refactoring',
      'API connections & webhook pipelines',
      'Performance profiling & code cleanup',
      'Accessibility remediation (WCAG standards)',
    ],
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Understand',
    description:
      'We begin by clarifying what you are actually trying to solve: who the audience is, what constraints exist, what technical requirements matter, and what success looks like.',
    deliverables: 'Scope definition, technical considerations, and prioritized project goals.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'Before writing code or finalizing designs, we agree on the site structure, content hierarchy, core user journeys, and technical approach to avoid scope creep.',
    deliverables: 'Information architecture, wireframes, and project roadmap.',
  },
  {
    step: '03',
    title: 'Design & Build',
    description:
      'We develop visual systems and build functioning code in deliberate, transparent iterations. You see real progress on staging environments rather than abstract promises.',
    deliverables: 'Component library, verified responsive screens, and production code.',
  },
  {
    step: '04',
    title: 'Test & Hand Over',
    description:
      'We audit responsive behavior, test critical user flows, verify accessibility standards, connect production domains, and document everything needed for clean maintenance.',
    deliverables: 'Production deployment, handover documentation, and deployment assets.',
  },
];

export const PRINCIPLES: StudioPrinciple[] = [
  {
    number: '01',
    title: 'Design and engineering considered together',
    explanation:
      'We do not throw static mockups over a fence to disconnected developers. Every layout is conceived with its responsive implementation, performance budget, and edge cases in mind.',
  },
  {
    number: '02',
    title: 'Clarity over decorative noise',
    explanation:
      'We believe the best websites make their point immediately. We avoid floating glass blobs, random 3D shapes, and decorative gimmicks that distract visitors from understanding your business.',
  },
  {
    number: '03',
    title: 'Direct, honest collaboration',
    explanation:
      'You speak directly with the people designing and coding your project. No account manager layers, no telephone game, and no inflated promises we cannot deliver.',
  },
  {
    number: '04',
    title: 'Maintainable, standard codebases',
    explanation:
      'We write structured TypeScript, clean Tailwind, and standard semantic HTML. When your team needs to update the project months from now, the codebase remains approachable and coherent.',
  },
];
