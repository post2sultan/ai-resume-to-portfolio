/**
 * Identity, contact, assets, and SEO used throughout the site.
 *
 * Most users should not edit this by hand. Fill in resume/RESUME.md and ask
 * an LLM coding assistant to personalize the project using CUSTOMIZE_WITH_AI.md.
 */
export const profile = {
  site: {
    url: 'https://sultanofscale.com',
    name: 'Sultan of Scale',
    title: 'Sultan Salahuddin | Commercial Strategy & Digital Transformation GCC',
    description: 'Riyadh-based executive leading commercial strategy, digital commerce, customer growth, and enterprise transformation across Saudi Arabia and the GCC.',
    keywords: ['commercial strategy', 'digital transformation', 'digital commerce', 'eCommerce leadership', 'customer growth', 'enterprise transformation', 'Saudi Arabia', 'Riyadh', 'GCC'],
    locale: 'en_US',
    language: 'en',
    themeColor: '#1D2D44',
    ogImage: '/og.png',
  },
  person: {
    name: 'Sultan Salahuddin',
    shortName: 'Sultan Salahuddin',
    jobTitle: 'Commercial Strategy, Digital Commerce and Enterprise Transformation Leader',
    location: 'Riyadh, Saudi Arabia',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
    email: 'salahuddin@sultanofscale.com',
    linkedin: 'https://www.linkedin.com/in/sultan4824',
    whatsapp: 'https://wa.me/966509898765',
    profileDescription: 'Riyadh-based executive leading commercial strategy, digital ecosystems, customer growth, and enterprise transformation across Saudi Arabia and the GCC.',
  },
  hero: {
    eyebrow: 'Commercial Strategy · Digital Ecosystems · Operational Scale',
    headline: 'Building high-margin growth systems where customer value meets operational scale.',
    introduction: 'I lead enterprise transformation and commercial strategy across the GCC, connecting board-level ambition directly to unit economics and execution.',
    imageAlt: 'Sultan Salahuddin in a Riyadh office overlooking the city skyline and Kingdom Centre',
    desktopImage: '/hero-office-desktop.webp',
    tabletImage: '/hero-office-tablet.webp',
    mobileImage: '/hero-office-mobile-crop.webp',
  },
  assets: {
    headerLogo: '/logo-symbol-header.webp',
    icon: '/logo-symbol.png',
    footerLogo: '/logo-final-white.png',
    resume: '/Sultan%20Salahuddin%20-%20C-Level%20Digital%20Commerce%20CV.docx',
  },
  callsToAction: {
    primary: 'Start a conversation',
    resume: 'Download CV',
    footerHeadline: 'Let’s build what holds.',
  },
  currentFocus: {
    title: 'Building what scales.',
    copy: 'I build ventures and advise leaders on the systems behind profitable growth. I am also open to senior in-house mandates where customer value, commercial performance, and enterprise transformation must move as one.',
    context: 'For executive leadership, digital & eCommerce transformation, and venture conversations',
  },
  principles: [
    'Build customer value before channel volume.',
    'Commercial systems before operational complexity.',
    'Use data and AI to improve judgment, not replace it.',
  ],
} as const;

export const absoluteUrl = (path = '/') => new URL(path, profile.site.url).toString();
