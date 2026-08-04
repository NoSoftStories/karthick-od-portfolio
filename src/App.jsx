import React from 'react';
import {
  ArrowRight,
  BarChart3,
  Braces,
  Building2,
  CheckCircle2,
  CircuitBoard,
  DatabaseZap,
  DraftingCompass,
  ExternalLink,
  FileSpreadsheet,
  Github,
  Layers3,
  LineChart,
  Linkedin,
  Mail,
  Play,
  ShieldCheck,
  Sigma,
  TerminalSquare,
} from 'lucide-react';

const projectVideoAssets = import.meta.glob('./assets/videos/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const projectImageAssets = import.meta.glob('./assets/images/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const fallbackVideo = '/videos/placeholder-engineering-loop.mp4';
const navigation = ['About', 'Skills', 'Projects', 'Contact'];

const structuralHighlights = [
  {
    icon: Building2,
    title: 'Project Types',
    items: ['Stadiums', 'Residential buildings', 'Infrastructure', 'Metro stations', 'Culverts', 'Retaining walls'],
  },
  {
    icon: DraftingCompass,
    title: 'Design Scope',
    items: ['Concrete columns', 'Concrete beams', 'Composite beams', 'Steel columns', 'PT slabs and girders', 'Foundations'],
  },
  {
    icon: ShieldCheck,
    title: 'Codes + Checks',
    items: ['ACI', 'AISC', 'Eurocode', 'AASHTO', 'AREMA', 'IS codes'],
  },
  {
    icon: CircuitBoard,
    title: 'Analysis Tools',
    items: ['ETABS', 'SAP2000', 'SAFE', 'MIDAS', 'SOFiSTiK', 'STAAD Pro', 'ADAPT PT', 'AdSec'],
  },
  {
    icon: Braces,
    title: 'Programming Languages',
    items: ['Python', 'C#', 'VBA', 'DAX'],
  },
];

function structuralExperienceYears() {
  const startDate = new Date(2022, 2, 1);
  const today = new Date();
  const monthDelta =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    today.getMonth() -
    startDate.getMonth();
  const years = Math.max(monthDelta / 12, 0);

  return `${Math.floor(years * 10) / 10}+`;
}

const experienceYears = structuralExperienceYears();

const projectCategories = [
  {
    name: 'Engineering Software',
    summary: 'Standalone calculation and validation tools for structural design workflows.',
    projects: [
      {
        icon: Sigma,
        title: 'Section Validation',
        impact: 'Validated RC and PT section behavior against commercial design tools with traceable comparison outputs.',
        problem: 'Section checks were slow to repeat and difficult to audit when geometry, reinforcement, and software assumptions changed.',
        built: 'Created a section validation workflow for geometry input, property checks, ULS/SLS comparisons, and Excel-based result review.',
        tech: ['Python', 'concreteproperties', 'NumPy', 'Matplotlib', 'Excel'],
        proof: 'Compared regular, irregular, reinforced, and PT sections against AdSec and Structural Bridge Design outputs.',
        video: '/videos/section-validation-demo.mp4',
        image: '/images/section-validation.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-teal-300/28 to-cyan-400/6',
      },
      {
        icon: LineChart,
        title: 'Post Tensioned Girder Viewer',
        impact: 'Built a visual review tool for post-tensioned girder geometry, tendon profiles, and design output interpretation.',
        problem: 'PT girder review required jumping between drawings, calculation sheets, and model outputs, making profile checks slow and hard to communicate.',
        built: 'Developed a viewer-style workflow to inspect girder sections, tendon layout, profile zones, key design stations, and comparison outputs.',
        tech: ['Python', 'Plotly', 'Pandas', 'Excel', 'PT Design'],
        proof: 'Checked displayed profiles, section references, and station data against source drawings and calculation outputs.',
        video: '/videos/post-tensioned-girder-viewer-demo.mp4',
        image: '/images/post-tensioned-girder-viewer.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-blue-300/28 to-teal-400/6',
      },
    ],
  },
  {
    name: 'Engineering Automation',
    summary: 'Automation workflows that reduce manual effort in applied loading, reporting, and design intelligence.',
    projects: [
      {
        icon: Layers3,
        title: 'Wind Force Applicator - From RWDI Wind Loads',
        impact: 'Converted RWDI wind load data into a structured application workflow for model-ready loading.',
        problem: 'Applying wind tunnel loads manually introduced repetition, checking overhead, and risk of mapping errors.',
        built: 'Developed an automation workflow to process RWDI load tables, organize floor/zone forces, and prepare model application data.',
        tech: ['Python', 'Excel', 'Pandas', 'ETABS Workflow', 'Wind Loads'],
        proof: 'Checked applied force totals, directional cases, and source-table traceability against RWDI input data.',
        video: '/videos/wind-force-applicator-rwdi-demo.mp4',
        image: '/images/wind-force-applicator-rwdi.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-amber-300/24 to-teal-400/6',
      },
      {
        icon: BarChart3,
        title: 'PowerBI Dashboards',
        impact: 'Turned engineering spreadsheets into dashboard views for progress, exceptions, and design decisions.',
        problem: 'Key design signals were buried in Excel workbooks, making review status and exception tracking hard to scan.',
        built: 'Created dashboard-ready data models, KPI views, exception tables, and reporting layers for engineering teams.',
        tech: ['Power BI', 'Excel', 'Power Query', 'DAX', 'Data Modeling'],
        proof: 'Validated dashboard measures against source workbooks and organized outputs around traceable calculation references.',
        video: '/videos/powerbi-dashboards-demo.mp4',
        image: '/images/powerbi-dashboards.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-sky-300/24 to-amber-300/6',
      },
    ],
  },
  {
    name: 'CSI ETABS Toolkit',
    summary: 'Utilities that extract, modify, and quantify ETABS model information for engineering review.',
    projects: [
      {
        icon: DatabaseZap,
        title: 'Connection Force Extractor',
        impact: 'Extracted connection design forces from ETABS outputs into organized review tables.',
        problem: 'Connection force review required repetitive output navigation and manual consolidation across load combinations.',
        built: 'Created an extraction workflow for member forces, governing combinations, and exportable connection design summaries.',
        tech: ['ETABS API', 'Python', 'Excel', 'Pandas', 'CSI Outputs'],
        proof: 'Cross-checked extracted governing values against ETABS tables and sampled member force outputs.',
        video: '/videos/etabs-connection-force-extractor-demo.mp4',
        image: '/images/etabs-connection-force-extractor.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-teal-300/26 to-blue-400/6',
      },
      {
        icon: FileSpreadsheet,
        title: 'Quantity Calculator',
        impact: 'Calculated model quantities from ETABS data for faster estimating and design comparison.',
        problem: 'Material quantity takeoffs were dependent on manual table exports and repeated spreadsheet cleanup.',
        built: 'Built a quantity extraction and calculation workflow for structural elements, material groups, and summary outputs.',
        tech: ['ETABS API', 'Python', 'Excel', 'Quantity Takeoff', 'Pandas'],
        proof: 'Validated totals against ETABS table exports and spot-checked element-level quantities.',
        video: '/videos/etabs-quantity-calculator-demo.mp4',
        image: '/images/etabs-quantity-calculator.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-blue-300/24 to-teal-400/6',
      },
      {
        icon: CircuitBoard,
        title: 'Torsion Modifiers',
        impact: 'Applied torsion modifier updates consistently across ETABS model elements.',
        problem: 'Modifier assignment across large models was repetitive and prone to inconsistent element selection.',
        built: 'Developed a utility to identify target elements, apply torsion modifiers, and document the updated model scope.',
        tech: ['ETABS API', 'Python', 'Model Automation', 'QA Logs'],
        proof: 'Verified modifier values through exported property tables and before/after model checks.',
        video: '/videos/etabs-torsion-modifiers-demo.mp4',
        image: '/images/etabs-torsion-modifiers.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-amber-300/22 to-blue-400/6',
      },
      {
        icon: ShieldCheck,
        title: 'Wall Cracking Modifier',
        impact: 'Automated wall cracking modifier assignments with model-check evidence.',
        problem: 'Wall stiffness modifier updates needed controlled assignment, traceability, and easy review after model changes.',
        built: 'Created a workflow to classify walls, assign cracking modifiers, export audit data, and support review cycles.',
        tech: ['ETABS API', 'Python', 'Excel', 'Wall Design', 'Validation'],
        proof: 'Checked assignments against wall groups, exported property modifiers, and model review tables.',
        video: '/videos/etabs-wall-cracking-modifier-demo.mp4',
        image: '/images/etabs-wall-cracking-modifier.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-teal-300/24 to-amber-300/6',
      },
    ],
  },
  {
    name: 'CSI SAFE Toolkit',
    summary: 'SAFE-focused tools for slab design exploration and option comparison.',
    projects: [
      {
        icon: DraftingCompass,
        title: 'Slab Optioneering',
        impact: 'Compared slab design options to support faster structural decision-making in SAFE workflows.',
        problem: 'Slab alternatives were difficult to compare quickly when thickness, reinforcement, and design constraints changed.',
        built: 'Built an optioneering workflow to organize slab alternatives, compare design outputs, and present tradeoffs clearly.',
        tech: ['SAFE Workflow', 'Python', 'Excel', 'Optimization', 'Design Review'],
        proof: 'Validated option summaries against SAFE outputs and checked governing design parameters across alternatives.',
        video: '/videos/safe-slab-optioneering-demo.mp4',
        image: '/images/safe-slab-optioneering.png',
        github: 'https://github.com/NoSoftStories',
        demo: '#',
        details: '#',
        accent: 'from-sky-300/24 to-teal-400/6',
      },
    ],
  },
];

const metrics = [
  [experienceYears, 'years structural engineering'],
  ['US + EU', 'code-based design work'],
  ['AEC', 'software builder mindset'],
];

function assetName(path) {
  return path.split('/').pop();
}

function resolveAsset(path, assets) {
  const name = assetName(path);
  const match = Object.entries(assets).find(([key]) => key.endsWith(`/${name}`));
  return match?.[1] ?? '';
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite-950/72 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-white">
          <span className="grid size-9 place-items-center rounded-md border border-teal-300/35 bg-teal-300/10 text-teal-200">
            <Building2 size={18} />
          </span>
          <span className="hidden sm:inline">Karthick O D</span>
          <span className="sm:hidden">KOD</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/7 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="mailto:karthickodcivil@gmail.com"
          className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3.5 py-2 text-sm font-medium text-white transition hover:border-teal-300/45 hover:bg-teal-300/10"
        >
          <Mail size={16} />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-teal-200">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-300">{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-16">
      <div className="grid-field absolute inset-0 opacity-55" />
      <div className="absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-teal-200/30 to-transparent" />
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="animate-fade-up">
          <div className="mb-5 flex w-full items-center justify-start gap-2 overflow-hidden whitespace-nowrap rounded-md border border-teal-300/24 bg-teal-300/8 px-3 py-1.5 text-[11px] text-teal-100 sm:mb-6 sm:justify-center sm:text-sm">
            <span className="size-1.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.9)]" />
            <span className="md:hidden">Structural Engineer + AEC Software Developer</span>
            <span className="hidden md:inline">
              Structural Engineer + Computational Engineering Developer + AEC Software Builder
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-normal text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]">
            Engineering tools with the precision of design software and the clarity of SaaS.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            I'm Karthick O D, a structural engineer and AEC software developer specialising in
            computational design, engineering automation, and digital workflows. I combine
            structural engineering expertise with software development to create practical tools
            that simplify complex processes, improve design efficiency, and help engineering teams
            work more effectively.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 text-sm font-semibold text-graphite-950 transition hover:bg-teal-200"
            >
              View Project Work
              <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/12"
            >
              Contact Karthick
            </a>
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-lg p-3 shadow-panel animate-[fadeUp_900ms_ease_120ms_both] sm:p-4">
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
            <div className="h-px w-1/3 animate-scan bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
          </div>
          <div className="rounded-md border border-white/10 bg-graphite-950/82 p-4">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  Structural Snapshot
                </p>
                <p className="mt-1 text-sm text-white">Design, analysis, automation</p>
              </div>
              <button
                type="button"
                aria-label="Preview engineering workflow"
                className="grid size-10 place-items-center rounded-md bg-teal-300 text-graphite-950 transition hover:bg-teal-200"
              >
                <Play size={17} fill="currentColor" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-3">
                {['Stadium design', 'Bridge analysis', 'PT systems', 'AEC automation'].map((label, index) => (
                  <div key={label} className="rounded-md border border-white/8 bg-white/[0.035] p-3">
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                      <span>{label}</span>
                      <span className="font-mono text-teal-200">{['ACI', 'MIDAS', 'ADAPT', 'API'][index]}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-300 to-blue-300"
                        style={{ width: `${[82, 76, 70, 88][index]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-md border border-white/8 bg-[#070a0f] p-4 sm:min-h-72 sm:p-5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <svg viewBox="0 0 320 260" className="relative h-full w-full" aria-hidden="true">
                  <path
                    d="M42 216 C94 56 186 28 278 58"
                    fill="none"
                    stroke="rgba(45,212,191,0.95)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M42 216 C105 120 202 93 278 58"
                    fill="none"
                    stroke="rgba(96,165,250,0.75)"
                    strokeWidth="2"
                    strokeDasharray="7 8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M68 194 L108 142 L146 114 L190 91 L236 70"
                    fill="none"
                    stroke="rgba(251,191,36,0.88)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {[
                    [68, 194],
                    [108, 142],
                    [146, 114],
                    [190, 91],
                    [236, 70],
                  ].map(([cx, cy]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#fbbf24" />
                  ))}
                  <line x1="38" y1="222" x2="288" y2="222" stroke="rgba(255,255,255,0.22)" />
                  <line x1="38" y1="222" x2="38" y2="38" stroke="rgba(255,255,255,0.22)" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/9 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading
        eyebrow="About Karthick"
        title="Structural engineer focused on computational workflows for real AEC problems."
      >
        Karthick O D combines structural design experience with practical software delivery,
        building tools that reduce manual engineering effort, improve validation, and make model
        outputs easier to review.
      </SectionHeading>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="technical-card rounded-lg p-6 sm:p-8">
          <p className="text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            I have {experienceYears} years of structural engineering experience and a strong focus
            on computational delivery. My work connects design-code understanding, analysis-model
            outputs, API automation, desktop tools, and dashboards into workflows that engineers
            can use on real projects.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['Structural design delivery', 'Computational validation', 'AEC product thinking'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md bg-white/[0.04] p-3 text-sm text-slate-200">
                <CheckCircle2 size={17} className="shrink-0 text-teal-200" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="technical-card rounded-lg p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">How I Work</p>
          <div className="mt-6 space-y-5">
            {[
              ['Translate', 'Convert design-code and software behavior into reproducible computational workflows.'],
              ['Validate', 'Benchmark outputs against commercial tools, Excel checks, and engineering expectations.'],
              ['Productize', 'Shape scripts, dashboards, and interfaces into tools that are readable, reusable, and recruiter-demo ready.'],
            ].map(([title, copy]) => (
              <div key={title} className="border-l border-teal-300/35 pl-4">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-white/8 bg-white/[0.025] py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Structural engineering and AEC software capability map."
        >
          A consolidated view of the project types, design scope, codes, tools, and programming
          languages behind my engineering software work.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {structuralHighlights.map(({ icon: Icon, title, items }) => (
            <article key={title} className="technical-card rounded-lg p-5 sm:p-6">
              <div className="mb-5 grid size-11 place-items-center rounded-md bg-teal-300/10 text-teal-200">
                <Icon size={21} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[
            ['Computational Development', 'Python/C# desktop tools, CSI API, MIDAS API, SOFiSTiK API workflows, parametric model generation, and result extraction.'],
            ['Data + Validation Systems', 'Excel pipelines, Power BI dashboards, BOQ/cost views, and audit-ready calculation evidence.'],
            ['AEC Software Building', 'Engineering workflow UX for designers, modelers, and project delivery teams.'],
          ].map(([title, copy]) => (
            <article key={title} className="technical-card rounded-lg p-6">
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMedia({ project }) {
  const directVideoSrc = resolveAsset(project.video, projectVideoAssets);
  const fallbackVideoSrc = resolveAsset(fallbackVideo, projectVideoAssets);
  const videoSrc = directVideoSrc || fallbackVideoSrc;
  const imageSrc = resolveAsset(project.image, projectImageAssets);
  const expectedVideoName = assetName(project.video);

  return (
    <div className="relative h-44 overflow-hidden rounded-md border border-white/10 bg-[#070a0f] sm:h-56">
      {videoSrc ? (
        <video
          className="h-full w-full object-cover opacity-72 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          poster={imageSrc || undefined}
        />
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
      ) : (
        <div className="placeholder-loop relative grid h-full place-items-center overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:30px_30px]">
          <div className="relative z-10 max-w-[86%] rounded-md border border-teal-300/20 bg-black/35 px-4 py-3 text-center backdrop-blur-md">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-100">
              Placeholder loop
            </p>
            <p className="mt-2 break-words font-mono text-[11px] leading-5 text-slate-300">
              Upload: src/assets/videos/{expectedVideoName}
            </p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/28 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/48 via-transparent to-blue-950/24" />
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Project work in structural automation, validation, and AEC software."
      >
        These are real engineering tools and workflows I built across structural design,
        computational implementation, validation evidence, and usable technical interfaces.
      </SectionHeading>
      <div className="space-y-12">
        {projectCategories.map((category) => (
          <div key={category.name}>
            <div className="mb-5 flex flex-col gap-2 border-l border-teal-300/35 pl-4">
              <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">{category.summary}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {category.projects.map((project) => {
                const Icon = project.icon;

                return (
                  <article key={project.title} className="technical-card group relative overflow-hidden rounded-lg p-3 sm:p-5">
                    <div className={`absolute inset-x-0 top-0 h-44 bg-gradient-to-b ${project.accent} opacity-80`} />
                    <div className="relative">
                      <ProjectMedia project={project} />
                      <div className="mt-6 flex items-start gap-4">
                        <div className="grid size-12 shrink-0 place-items-center rounded-md border border-white/12 bg-white/8 text-teal-100">
                          <Icon size={23} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                          <p className="mt-2 text-sm font-medium leading-6 text-teal-100">{project.impact}</p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Problem</p>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{project.problem}</p>
                        </div>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">What I Built</p>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{project.built}</p>
                        </div>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Validation / Proof</p>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{project.proof}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <span key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-2 opacity-100 transition duration-300 sm:flex-row sm:opacity-0 sm:translate-y-2 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                        <a
                          href={project.details}
                          className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-300 px-4 py-2.5 text-sm font-semibold text-graphite-950 transition hover:bg-teal-200"
                        >
                          <ExternalLink size={16} />
                          View Details
                        </a>
                        <a
                          href={project.github}
                          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/12"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/12"
                        >
                          <Play size={16} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell pb-12 pt-16">
      <div className="glass-panel overflow-hidden rounded-lg p-7 shadow-glow sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-teal-200">Contact</p>
            <h2 className="max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
              Hire Karthick to build structural engineering tools that are accurate, auditable, and usable.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Open to roles and projects involving structural engineering automation, AEC software,
              computational design tools, validation systems, technical dashboards, and Python-led
              engineering workflows.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:karthickodcivil@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 text-sm font-semibold text-graphite-950 transition hover:bg-teal-200"
            >
              <Mail size={17} />
              Email Karthick
            </a>
            <a
              href="https://www.linkedin.com/in/karthickod/"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a
              href="https://github.com/NoSoftStories"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-shell flex flex-col gap-4 border-t border-white/8 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <span>(c) 2026 Karthick O D. Structural Engineer + Computational Engineering Developer.</span>
      <span className="flex items-center gap-2">
        <TerminalSquare size={15} />
        AEC software portfolio built with React, Vite, and TailwindCSS
      </span>
    </footer>
  );
}

function Analytics() {
  React.useEffect(() => {
    const goatCounterCode = import.meta.env.VITE_GOATCOUNTER_CODE;

    if (!goatCounterCode || document.querySelector('[data-portfolio-analytics="goatcounter"]')) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    script.dataset.goatcounter = `https://${goatCounterCode}.goatcounter.com/count`;
    script.dataset.portfolioAnalytics = 'goatcounter';

    document.head.appendChild(script);
  }, []);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
