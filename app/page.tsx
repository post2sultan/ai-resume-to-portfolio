import Image from 'next/image';
import { Award, BarChart3, BriefcaseBusiness, CircleGauge, Download, ExternalLink, FlaskConical, GraduationCap, Mail, MessageCircle, ScanSearch, Settings2, ShieldCheck, ShoppingCart, Sparkles, Target, UsersRound, WalletCards } from 'lucide-react';
import { PersonalityExperience, RevealManager, ResultsShowcase, ScrollToTop, SiteHeader, type PersonalityProfile, type ResultStory } from './interactive';
import { absoluteUrl, profile } from '../content/profile';

const cvHref = profile.assets.resume;

const brands = [
  { name: 'McDonald’s', src: '/brands/mcdonalds.png', href: 'https://www.mcdonalds.com/sa/en-sa/riyadh/ourcompany.html' },
  { name: 'Samsung', src: '/brands/samsung.png', href: 'https://www.samsung.com/sa_en/about-us/company-info/' },
  { name: 'eXtra', src: '/brands/extra.png', href: 'https://www.extra.com/en-sa/aboutextra' },
  { name: 'Al-Futtaim', src: '/brands/alfuttaim.png', href: 'https://www.alfuttaim.com/en/about-us/' },
  { name: 'IBM', src: '/brands/ibm.png', href: 'https://www.ibm.com' },
  { name: 'Pennywise / Ogilvy', src: '/brands/pennywise.png', href: 'https://www.pennywisesolutions.com/about-us' },
  { name: 'by Batool', src: '/brands/bybatool.png', href: 'https://bybatool.co/about' },
];

const stories: ResultStory[] = [
  {
    company: 'McDonald’s Saudi Arabia', role: 'Director of Digital', headline: 'Made digital a measurable revenue engine.',
    challenge: 'Loyalty, CRM, acquisition, and redemption needed to operate as one commercial system.',
    approach: 'Led a SAR 12.65M agenda, including SAR 4M in acquisition, while launching Cash + Points and the GCC’s only Global MOP CRM Beta Program.',
    result: 'Digital, loyalty, and CRM generated 24% of company revenue; MyRewards reached 2M active users.',
    metrics: [{ value: '24%', label: 'Company revenue' }, { value: '2M', label: 'Active users' }, { value: '1.2×', label: 'Repeat purchase' }],
    charts: [{ title: 'Approach', src: '/results/mcdonalds-approach.webp', width: 828, height: 870 }, { title: 'Action', src: '/results/mcdonalds-action.webp', width: 912, height: 1128 }, { title: 'Impact', src: '/results/mcdonalds-impact.webp', width: 972, height: 730 }],
  },
  {
    company: 'Samsung Electronics Saudi Arabia', role: 'Head of Online', headline: 'Made online the channel trusted with the biggest launches.',
    challenge: 'Online had to become an accountable D2C and B2B channel, not a backup plan.',
    approach: 'Connected commercial, marketing, operations, supply chain, finance, and customer experience around one launch system.',
    result: 'Online delivered 45% of Galaxy S23 pre-orders, 25% of launch-week sales, and 15% YoY growth.',
    metrics: [{ value: '45%', label: 'S23 pre-orders' }, { value: '25%', label: 'Launch-week sales' }, { value: '15%', label: 'YoY online growth' }],
    charts: [{ title: 'Approach', src: '/results/samsung-approach.webp', width: 985, height: 642 }, { title: 'Action', src: '/results/samsung-action.webp', width: 912, height: 930 }, { title: 'Impact', src: '/results/samsung-impact.webp', width: 972, height: 730 }],
  },
  {
    company: 'eXtra', role: 'Head of eCommerce', headline: 'Built the decision system behind enterprise-scale commerce.',
    challenge: 'Leadership needed a faster view of category and channel performance as commerce scaled.',
    approach: 'Built live mobile dashboards with three-level category and channel drill-downs while expanding strategic categories.',
    result: 'Held SAR 800M in revenue responsibility and drove approximately 20% incremental revenue growth.',
    metrics: [{ value: 'SAR 800M', label: 'Revenue responsibility' }, { value: '≈27%', label: 'Company revenue' }, { value: '≈20%', label: 'Incremental growth' }],
    charts: [{ title: 'Approach', src: '/results/extra-approach.webp', width: 761, height: 788 }, { title: 'Action', src: '/results/extra-action.webp', width: 1104, height: 666 }, { title: 'Impact', src: '/results/extra-impact.webp', width: 1068, height: 771 }],
  },
  {
    company: 'Al-Futtaim Group', role: 'Manager, eCommerce', headline: 'Found where seven out of ten shoppers left — and closed the gap.',
    challenge: 'Cart abandonment stood at 70%, leaving substantial customer intent unrealised.',
    approach: 'Reworked merchandising, product content, and campaign calendars around conversion-critical moments.',
    result: 'Cart abandonment fell from 70% to 30%, while engagement increased by approximately 40%.',
    metrics: [{ value: '70→30%', label: 'Cart abandonment' }, { value: '≈40%', label: 'Engagement lift' }, { value: '1 QTR', label: 'First major shift' }],
    charts: [{ title: 'Approach', src: '/results/alfuttaim-approach.webp', width: 922, height: 850 }, { title: 'Action', src: '/results/alfuttaim-action.webp', width: 876, height: 706 }, { title: 'Impact', src: '/results/alfuttaim-impact.webp', width: 972, height: 730 }],
  },
];

const profiles: PersonalityProfile[] = [
  { title: 'Self', score: 'M: 58', axes: [['Collaborative', 'Independent', 50], ['Reserved', 'Sociable', 45], ['Driving', 'Steady', 39], ['Flexible', 'Precise', 66]] },
  { title: 'Self-Concept', score: 'M: 66', axes: [['Collaborative', 'Independent', 77], ['Reserved', 'Sociable', 43], ['Driving', 'Steady', 35], ['Flexible', 'Precise', 46]] },
  { title: 'Synthesis', score: 'M: 124', axes: [['Collaborative', 'Independent', 63], ['Reserved', 'Sociable', 44], ['Driving', 'Steady', 37], ['Flexible', 'Precise', 56], ['Subjective', 'Objective', 58]] },
];

const stack = [
  { title: 'Digital Strategy & Commerce', subtitle: 'Growth systems', Icon: ShoppingCart, core: 'Digital Strategy · Journey Mapping · App Acceleration · eCommerce GTM · Omnichannel Integration · Funnel Optimisation · Transformation · CX · Loyalty · Digital Product · P&L · Performance Marketing', outcomes: ['Strategy & roadmaps', 'Customer journeys', 'Omnichannel integration', 'Growth & performance', 'Commercial profitability'] },
  { title: 'MarTech, CRM & Growth', subtitle: 'Customer systems', Icon: UsersRound, core: 'Plexure · Braze · Kochava · Insider · WebEngage · MoEngage · Unifonic · CRM Strategy · Lifecycle Marketing · RFM Segmentation · Personalisation · Marketing Automation · CDP Deployment', outcomes: ['Customer engagement', 'Lifecycle automation', 'Segmentation', 'Data & CDP', 'Retention'] },
  { title: 'Data & Decision', subtitle: 'Intelligence systems', Icon: BarChart3, core: 'GA4 · Power BI · Excel · Funnel Analytics · Predictive Modelling · Commercial Analytics · Customer Analytics · KPI Frameworks · Dashboarding · Data-driven Decision Making', outcomes: ['Measurement', 'Business intelligence', 'Data modelling', 'Executive dashboards', 'Decision support'] },
  { title: 'Enterprise Tech & Commerce', subtitle: 'Experience systems', Icon: BriefcaseBusiness, core: 'SAP Commerce Cloud · IBM WebSphere · Adobe Experience Manager · Plexure · Framer · CMS · Enterprise Commerce · Digital Experience Platforms', outcomes: ['Enterprise commerce', 'Enterprise platforms', 'Digital experience', 'Content platforms', 'System integration'] },
  { title: 'Fintech & Payments', subtitle: 'Transaction systems', Icon: WalletCards, core: 'Checkout.com · Amazon Pay · Tabby · Tamara · Postpay · MPGS · CyberSource · Samsung Wallet · Digital Payments · Fraud Management · Payment Gateway Operations', outcomes: ['Payment processing', 'Fraud & risk', 'Wallets & BNPL', 'Gateway infrastructure', 'Secure transactions'] },
  { title: 'AI & Automation', subtitle: 'Intelligence systems', Icon: Sparkles, core: 'OpenAI · Perplexity AI · Replit · Napkin AI · Miro · n8n · Ollama · Open WebUI · Qdrant · Generative AI · Prompt Engineering · AI Agents · Workflow Design', outcomes: ['Generative AI', 'Automation', 'LLM infrastructure', 'Vector search', 'Productivity'] },
  { title: 'Product & Delivery', subtitle: 'Operating systems', Icon: Settings2, core: 'Jira · Confluence · Asana · Monday.com · Microsoft Loop · Planner · Agile · Scrum · Product Roadmapping · Program Management · UAT · RFP & Requirements', outcomes: ['Project management', 'Collaboration', 'Agile delivery', 'Roadmaps', 'Governance'] },
  { title: 'Technology & Infrastructure', subtitle: 'Technical systems', Icon: ShieldCheck, core: 'Docker · Docker Compose · WSL2 · Git · PostgreSQL · Redis · PowerShell · YAML · CLI · Environment Variables · Self-hosted Infrastructure', outcomes: ['Containers & DevOps', 'Databases', 'Scripting', 'Configuration', 'Self-hosting'] },
  { title: 'Web, Search & Content', subtitle: 'Experience systems', Icon: ScanSearch, core: 'Framer · CMS · SEO · GEO · Responsive Web Design · Localisation · LinkedIn · Instagram · TikTok · X · YouTube · Content Strategy · Digital Publishing', outcomes: ['Web & CMS', 'Discoverability', 'Social channels', 'Content strategy', 'Publishing'] },
  { title: 'Leadership & Governance', subtitle: 'People systems', Icon: Award, core: 'Vendor Management · Squad Structuring · Team Development · Coaching · Public Speaking · Remote Operations · Agency Management · Cross-functional Leadership · Executive Stakeholders', outcomes: ['Leadership', 'Talent development', 'Communication', 'Stakeholders', 'Accountability'] },
];

const priorityStack = [stack[0], stack[1], stack[2], stack[3], stack[5]];
const remainingStack = [stack[4], stack[6], stack[7], stack[8], stack[9]];

const experience = [
  { period: '2026 — now', role: 'Venture Architect', company: 'Independent', bullets: ['Build brand, platform, customer strategy and GTM as one system.', 'Advise leaders on profitable growth and digital ecosystems.', 'Convert ambiguity into commercial priorities and delivery paths.', 'Link customer value to operating models and unit economics.', 'Shape executive narratives that make transformation governable.'] },
  { period: '2024 — 2025', role: 'Director of Digital', company: 'McDonald’s Saudi Arabia', bullets: ['Owned digital P&L, loyalty, CRM, acquisition and lifecycle strategy.', 'Connected global programmes to Saudi commercial priorities.', 'Aligned marketing, technology, operations and supply chain.', 'Selected for the Global MOP CRM Beta Program.', 'Launched Cash + Points and a three-year CRM roadmap.'] },
  { period: '2020 — 2024', role: 'Head of Online', company: 'Samsung Electronics Saudi Arabia', bullets: ['Directed D2C and B2B eCommerce with full accountability.', 'Aligned inventory, fulfilment, payments, finance and service.', 'Built launch readiness around demand and supply signals.', 'Delivered double-digit growth while improving conversion and bounce.', 'Expanded bundles, partner campaigns and BNPL revenue streams.'] },
  { period: '2016 — 2020', role: 'Head of eCommerce', company: 'eXtra', bullets: ['Led trading, merchandising, categories, campaigns and P&L.', 'Built decision rhythms around sales, margin, traffic and stock.', 'Developed teams and trade calendars around commercial discipline.', 'Delivered record campaigns and nine-digit annual online turnover.', 'Launched categories that expanded reach and incremental revenue.'] },
  { period: '2014 — 2016', role: 'Manager, eCommerce', company: 'Al-Futtaim Group', bullets: ['Managed merchandising, content, campaigns and support workflows.', 'Strengthened omnichannel execution with buying and marketing.', 'Used journey and competitor insight to guide optimisation.', 'Reduced cart abandonment through targeted follow-up strategies.', 'Improved guided selling, tagging and conversion-focused content.'] },
  { period: '2010 — 2014', role: 'Digital & Social Practice', company: 'IBM · Pennywise / Ogilvy', bullets: ['Built capability in social intelligence, advocacy and reputation.', 'Supported enterprise and consumer brands across Europe and India.', 'Established the evidence-led practice behind later commerce leadership.', 'Expanded IBM PureSystems reach through listening and advocacy.', 'Helped run India’s first social-led CRM programme for Vodafone.'] },
];

const qualifications = [
  { title: 'Bachelor of Engineering', subtitle: 'Electronics & Communications', place: 'Osmania University · Hyderabad, India', Icon: GraduationCap, core: ['Communications engineering', 'Systems thinking', 'Technical problem solving'], outcomes: ['Analytical foundation', 'Technology fluency', 'Structured decisions'] },
  { title: 'AI Business Fellow', subtitle: 'AI Strategy · Business Transformation', place: 'Perplexity AI · San Francisco, USA', Icon: Sparkles, core: ['AI strategy', 'Business transformation', 'Applied generative AI'], outcomes: ['AI operating models', 'Faster insight', 'Responsible adoption'] },
  { title: 'Certified Scrum Master', subtitle: 'Agile Delivery · Coaching', place: 'Scrum Alliance · Colorado, USA', Icon: CircleGauge, core: ['Agile delivery', 'Team coaching', 'Impediment removal'], outcomes: ['Faster execution', 'Clear ownership', 'Continuous improvement'] },
  { title: 'Certified Data Management Professional', subtitle: 'Currently pursuing', place: 'DAMA International · Washington, USA', Icon: ShieldCheck, core: ['Data governance', 'Architecture', 'Security'], outcomes: ['Trusted data', 'Enterprise stewardship', 'Scalable decisions'] },
];

const hobbies = [
  { title: 'Formula 1', copy: 'Strategy, speed, and decisions made under pressure.', Icon: CircleGauge },
  { title: 'Snooker', copy: 'Patience, geometry, and the discipline of the next move.', Icon: Target },
  { title: 'Cooking', copy: 'Craft, experimentation, and bringing people together.', Icon: Sparkles },
  { title: 'Perfumery', copy: 'Composition, detail, and a distinct sensory signature.', Icon: FlaskConical },
];

function SectionIntro({ id, number, label, title, description, dark = false }: { id: string; number: string; label: string; title: string; description?: string; dark?: boolean }) {
  return <div className={`section-intro ${dark ? 'section-intro-dark' : ''}`} data-reveal><span className="section-number">{number}</span><div className="section-intro-copy"><p className="section-label">{label}</p><h2 id={id}>{title}</h2>{description && <p className="section-description">{description}</p>}</div></div>;
}

const jsonLd = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', '@id': `${profile.site.url}/#website`, url: absoluteUrl('/'), name: profile.site.name, inLanguage: profile.site.language },
    { '@type': 'ProfilePage', '@id': `${profile.site.url}/#profile`, url: absoluteUrl('/'), name: profile.site.title, isPartOf: { '@id': `${profile.site.url}/#website` }, mainEntity: { '@id': `${profile.site.url}/#person` } },
    { '@type': 'Person', '@id': `${profile.site.url}/#person`, name: profile.person.name, url: absoluteUrl('/'), image: absoluteUrl(profile.hero.desktopImage), jobTitle: profile.person.jobTitle, description: profile.person.profileDescription, address: { '@type': 'PostalAddress', addressLocality: profile.person.addressLocality, addressCountry: profile.person.addressCountry }, email: `mailto:${profile.person.email}`, sameAs: [profile.person.linkedin] },
  ],
};

export default function Home() {
  return <>
    <RevealManager /><SiteHeader profileUrl={profile.person.linkedin} personName={profile.person.name} logoSrc={profile.assets.headerLogo} ctaLabel={profile.callsToAction.primary} /><ScrollToTop />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero" id="top" aria-labelledby="hero-title">
        <picture className="hero-picture"><source media="(max-width: 767px)" srcSet={profile.hero.mobileImage} type="image/webp" /><source media="(max-width: 1099px)" srcSet={profile.hero.tabletImage} type="image/webp" /><img src={profile.hero.desktopImage} alt={profile.hero.imageAlt} width="1920" height="1072" fetchPriority="high" decoding="async" className="hero-image" /></picture>
        <div className="hero-overlay" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow">{profile.hero.eyebrow}</p>
          <h1 id="hero-title">{profile.hero.headline}</h1>
          <h2 className="hero-copy">{profile.hero.introduction}</h2>
          <div className="hero-actions"><a className="button button-primary" href="#contact">{profile.callsToAction.primary}</a><a className="button button-secondary button-secondary-dark" href={cvHref} download>{profile.callsToAction.resume}</a></div>
          <p className="hero-signature">{profile.person.shortName} <span>•</span> {profile.person.location}</p>
        </div>
      </section>

      <section className="proof-band" aria-label="Signals of scalable impact">
        <p className="proof-kicker">Signals of scalable impact</p>
        <div className="proof-grid">
          <article><strong>24%</strong><span>Company revenue generated through digital, loyalty &amp; CRM</span></article>
          <article><strong><span className="riyal" aria-label="Saudi riyal"><span className="riyal-mark" aria-hidden="true" /><span className="sr-only">&#x20C1;</span></span>800M</strong><span>Revenue managed at enterprise scale</span></article>
          <article><strong>70→30%</strong><span>Cart abandonment reduced through conversion discipline</span></article>
        </div>
      </section>

      <section className="brand-band" id="brands" aria-labelledby="brand-heading">
        <div className="brand-band-copy"><h2 id="brand-heading">Commercial operator. Customer-led builder.</h2><p>Across QSR, retail, electronics, technology, and venture building.</p></div>
        <div className="brand-marquee" aria-hidden="true"><div className="brand-track">{[0, 1].map((set) => <div className="brand-set" key={set}>{brands.map((brand) => <div className="brand-chip" key={`${set}-${brand.name}`}><Image src={brand.src} alt="" width={160} height={64} sizes="160px" loading="lazy" /></div>)}</div>)}</div></div>
      </section>

      <section className="results-section" id="impact" aria-labelledby="results-title">
        <SectionIntro id="results-title" number="01" label="Scaling What Matters" title="Four roles. Four growth systems rebuilt for greater commercial scale." description="Select a mandate to see how strategy, operating discipline, and measurable outcomes connected." />
        <ResultsShowcase stories={stories} />
      </section>

      <section className="personality-section" id="personality" aria-labelledby="personality-title">
        <SectionIntro id="personality-title" number="02" label="Personality Index" title="Precision at pace. The discipline behind scalable growth." description="The Controller — rigorous about customer economics, performance intelligence, and decisive commercial execution." />
        <div className="trait-grid" data-reveal><article><span>01</span><h3>Precision</h3><p>High standards and exacting follow-through protect the details that make scale sustainable.</p></article><article><span>02</span><h3>Proof</h3><p>Evidence-led judgment turns facts into decisions without theatre or unnecessary delay.</p></article><article><span>03</span><h3>Pace</h3><p>Efficient execution keeps quality, accountability, and operating control intact.</p></article></div>
        <blockquote data-reveal>“I turn insight into meaningful action through evidence-led judgment and uncompromising standards.”</blockquote>
        <details className="behavior-disclosure"><summary>View full behavioral profile <span aria-hidden="true">↓</span></summary><PersonalityExperience profiles={profiles} /></details>
      </section>

      <section className="stack-section" id="perspective" aria-labelledby="stack-title">
        <SectionIntro id="stack-title" number="03" label="Digital Commerce & Transformation Stack" title="The Scale Stack" description="The platforms, data systems, and operating tools behind customer value, commercial performance, and scalable execution." dark />
        <div className="stack-list" aria-label="Priority scale capabilities">{priorityStack.map((item, index) => { const Icon = item.Icon; return <details className="stack-item" key={item.title} name="scale-stack"><summary><span>{String(index + 1).padStart(2, '0')}</span><i><Icon aria-hidden="true" /></i><span><strong>{item.title}</strong><small>{item.subtitle}</small></span><b aria-hidden="true">+</b></summary><div className="stack-body"><div><p>Stack &amp; capabilities</p><span>{item.core}</span></div><div><p>What I drive</p><ul>{item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div></div></details>; })}</div>
        <div className="stack-progress" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <details className="stack-more"><summary>View all 10 <span aria-hidden="true">↓</span></summary><div className="stack-list">{remainingStack.map((item, index) => { const Icon = item.Icon; return <details className="stack-item" key={item.title} name="scale-stack-more"><summary><span>{String(index + 6).padStart(2, '0')}</span><i><Icon aria-hidden="true" /></i><span><strong>{item.title}</strong><small>{item.subtitle}</small></span><b aria-hidden="true">+</b></summary><div className="stack-body"><div><p>Stack &amp; capabilities</p><span>{item.core}</span></div><div><p>What I drive</p><ul>{item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div></div></details>; })}</div></details>
        <p className="stack-close">Technology accelerates. The operating model compounds.</p>
      </section>

      <section className="record-section" id="record" aria-labelledby="record-title">
        <SectionIntro id="record-title" number="04" label="Leadership Record" title="Operating advantage built from strategy through execution." description="A complete record of commercial ownership, transformation leadership, and the operating detail required to make growth hold." />
        <div className="career-list">{experience.map((item, index) => <article key={`${item.period}-${item.role}`} data-reveal><div className="career-meta"><span>{String(index + 1).padStart(2, '0')}</span><time>{item.period}</time></div><div className="career-role"><h3>{item.role}</h3><strong>{item.company}</strong></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
        <a className="text-link" href={profile.person.linkedin} target="_blank" rel="noreferrer">Complete leadership record on LinkedIn ↗</a>
      </section>

      <section className="qualifications-section" id="qualifications" aria-labelledby="qualifications-title">
        <SectionIntro id="qualifications-title" number="05" label="Qualifications" title="Foundations that keep scaling." />
        <div className="qualification-list">{qualifications.map((item, index) => { const Icon = item.Icon; return <details key={item.title} className="qualification-item" name="qualifications"><summary><span>{String(index + 1).padStart(2, '0')}</span><i><Icon aria-hidden="true" /></i><span><strong>{item.title}</strong><small>{item.subtitle}</small></span><b aria-hidden="true">+</b></summary><div className="qualification-body"><div><p>Core capabilities</p><ul>{item.core.map((value) => <li key={value}>{value}</li>)}</ul></div><div><p>Expertise &amp; outcomes</p><ul>{item.outcomes.map((value) => <li key={value}>{value}</li>)}</ul></div><small>{item.place}</small></div></details>; })}</div>
      </section>

      <section className="beyond-section" aria-labelledby="beyond-title">
        <SectionIntro id="beyond-title" number="06" label="Beyond Work" title="Timing, judgment, composition, and precision define the result." />
        <div className="personal-grid">
          <div className="off-clock" data-reveal><p>Off the clock</p><div>{hobbies.map(({ title, copy, Icon }, index) => <article key={title}><span>0{index + 1}</span><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div>
          <div className="languages" data-reveal><p>Languages</p><div>{[['English', 'Full professional', 96], ['Hindi', 'Professional working', 82], ['Urdu', 'Professional working', 84], ['Telugu', 'Limited working', 58], ['Arabic', 'Elementary', 34]].map(([language, label, level]) => <div className="language" key={String(language)}><div><span>{language}</span><small>{label}</small></div><b><i style={{ width: `${level}%` }} /></b></div>)}</div></div>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div className="footer-focus"><p className="section-label">Current focus</p><h2>{profile.currentFocus.title}</h2><p>{profile.currentFocus.copy}</p></div>
      <ol className="footer-principles">{profile.principles.map((principle, index) => <li key={principle}><span>{String(index + 1).padStart(2, '0')}</span>{principle}</li>)}</ol>
      <div className="footer-contact"><p>{profile.currentFocus.context}</p><h3>{profile.callsToAction.footerHeadline}</h3><div className="contact-actions"><a href={`mailto:${profile.person.email}`}><Mail aria-hidden="true" />Email</a><a href={profile.person.linkedin} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" />LinkedIn</a><a href={profile.person.whatsapp} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />WhatsApp</a><a className="contact-cv" href={cvHref} download><Download aria-hidden="true" />{profile.callsToAction.resume}</a></div></div>
      <div className="footer-bottom"><Image src={profile.assets.footerLogo} alt={profile.site.name} width={1751} height={817} /><div><a href={`mailto:${profile.person.email}`}>{profile.person.email}</a><span>{profile.person.location}</span></div><p>© {new Date().getFullYear()} {profile.person.name}</p></div>
    </footer>
    <div className="made-in-ksa">Proudly Made in KSA <span>by {profile.person.name}</span></div>
  </>;
}
