import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Copy,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Triangle,
} from "lucide-react";
import portrait from "../me.jpeg";
import cvFile from "../my_cv.pdf";

const CONTAINER = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10";
const Motion = motion;

const DATA = {
  name: "Dingling Yao",
  title: "Machine Learning Researcher",
  tagline: "AI for Science · Representation Learning · Climate & Physics",
  thesis:
    "I study how machine learning models represent and reason about physical systems, with a focus on scientific alignment, causality, and interpretable foundation models.",
  affiliation:
    "ELLIS PhD researcher at ISTA and MPI-IS, working across representation learning, scientific AI, and physically grounded machine learning.",
  credentials: ["PhD @ ISTA", "Google PhD Fellow", "Bunny Sitter"],
  interests: [
    "Scientific AI",
    "Representation Learning",
    "Causal Structure",
    "Climate & Physics Modeling",
  ],
  metrics: [
    { label: "Selected papers", value: "9" },
    { label: "Invited talks", value: "5" },
    { label: "Workshops led", value: "2" },
    { label: "Research areas", value: "4" },
  ],
  projects: [
    {
      title: "When can a Representation Answer Scientific Questions?",
      contribution:
        "Introduces T-MEX to test whether learned representations support causal and scientifically meaningful downstream questions.",
      venue: "NeurIPS 2025",
      status: "Conference paper",
      accent: "from-amber-100 via-orange-50 to-white",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2505.17708" },
        { label: "Code", href: "https://github.com/shimenghuang/a-measurement-perspective-of-crl" },
      ],
    },
    {
      title: "Invariance Drives Identifiable Representations",
      contribution:
        "Shows how invariance principles unify causal representation learning and improve identifiability for downstream scientific tasks.",
      venue: "ICLR 2025",
      status: "Conference paper",
      accent: "from-emerald-100 via-teal-50 to-white",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2409.02772" },
        { label: "Code", href: "https://arxiv.org/abs/2409.02772" },
      ],
    },
    {
      title: "CRL Meets Dynamical Systems",
      contribution:
        "Connects causal representation learning with dynamical systems to recover physical variables in structured scientific data.",
      venue: "NeurIPS 2024",
      status: "Conference paper",
      accent: "from-sky-100 via-cyan-50 to-white",
      links: [
        { label: "Paper", href: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/83eb339ed42297658fa24b5cec939285-Abstract-Conference.html" },
        { label: "Code", href: "https://github.com/CausalLearningAI/crl-dynamical-systems" },
      ],
    },
  ],
  publications: [
    {
      year: "2025",
      title: "Unifying Causal Representation Learning with the Invariance Principle",
      authors: [
        "Dingling Yao",
        "Dario Rancati",
        "Riccardo Cadei",
        "Marco Fumero",
        "Francesco Locatello",
      ],
      meta: "ICLR 2025",
      links: [
        { label: "Paper", href: "https://proceedings.iclr.cc/paper_files/paper/2025/hash/85381f4549b5ddf1d48e2e287d7d3d15-Abstract-Conference.html" },
        { label: "arXiv", href: "https://arxiv.org/abs/2409.02772" },
      ],
    },
    {
      year: "2025",
      title: "Scalable Mechanistic Neural Networks",
      authors: [
        "Jiale Chen",
        "Dingling Yao",
        "Adeel Pervez",
        "Dan Alistarh",
        "Francesco Locatello",
      ],
      meta: "ICLR 2025",
      links: [
        { label: "Paper", href: "https://iclr.cc/virtual/2025/poster/29818" },
      ],
    },
    {
      year: "2024",
      title: "Multi-view causal representation learning with partial observability",
      authors: [
        "Dingling Yao",
        "Danru Xu",
        "Sébastien Lachapelle",
        "Sara Magliacane",
        "Perouz Taslakian",
        "Georg Martius",
        "Julius von Kügelgen",
        "Francesco Locatello",
      ],
      meta: "ICLR 2025 Spotlight",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2311.04056" },
        { label: "Code", href: "https://github.com/CausalLearningAI/multiview-crl" },
      ],
    },
    {
      year: "2025",
      title: "Propagating Model Uncertainty through Filtering-based Probabilistic Numerical ODE Solvers",
      authors: ["Dingling Yao", "Filip Tronarp", "Nathanael Bosch"],
      meta: "ProbNum 2025 Oral",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2503.04684" },
      ],
    },
    {
      year: "2024",
      title: "A Sparsity Principle for Partially Observable Causal Representation Learning",
      authors: [
        "Danru Xu",
        "Dingling Yao",
        "Sébastien Lachapelle",
        "Perouz Taslakian",
        "Julius von Kügelgen",
        "Francesco Locatello",
        "Sara Magliacane",
      ],
      meta: "ICML 2024",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2403.08335" },
      ],
    },
    {
      year: "2024",
      title: "Marrying Causal Representation Learning with Dynamical Systems for Science",
      authors: ["Dingling Yao", "Caroline Muller", "Francesco Locatello"],
      meta: "NeurIPS 2024",
      links: [
        { label: "Paper", href: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/83eb339ed42297658fa24b5cec939285-Abstract-Conference.html" },
        { label: "arXiv", href: "https://arxiv.org/abs/2405.13888" },
      ],
    },
    {
      year: "2021",
      title: "Active Learning in Gaussian Process State Space Model",
      authors: [
        "Hon Sum Alec Yu",
        "Dingling Yao",
        "Christoph Zimmer",
        "Marc Toussaint",
        "Duy Nguyen-Tuong",
      ],
      meta: "ECML PKDD 2021",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2108.00819" },
        { label: "Springer", href: "https://link.springer.com/chapter/10.1007/978-3-030-86523-8_21" },
      ],
    },
  ],
  datasets: [
    {
      title: "Scientific evaluation toolkits",
      description:
        "Benchmarks and analysis tooling for testing whether representations preserve actionable scientific structure.",
      href: "#",
    },
    {
      title: "Open-source research code",
      description:
        "Reusable implementations for causality-aware representation learning, latent forecasting, and model diagnostics.",
      href: "https://github.com/ddcoan",
    },
  ],
  talks: [
    {
      date: "December 2023",
      title: "NeurIPS 2023 Workshop on Causal Representation Learning",
      meta: "Contributed talk · New Orleans, US",
      href: "https://crl-workshop.github.io/",
    },
    {
      date: "February 2024",
      title: "Bellairs Workshop on Causality 2024",
      meta: "Invited talk · Barbados",
      href: "https://bclworkshop.github.io/",
    },
    {
      date: "March 2024",
      title: "SIAM Conference on Uncertainty Quantification",
      meta: "Invited talk · Trieste, Italy",
      href: "https://www.siam.org/conferences/cm/conference/uq24",
    },
    {
      date: "March 2025",
      title: "ELLIS Tea Talk at ISTA",
      meta: "Research talk · Austria",
      href: "https://ist.ac.at/",
    },
    {
      date: "June 2025",
      title: "Key Laboratory of AI Safety, Chinese Academy of Sciences",
      meta: "Invited online talk · China",
      href: "https://weichen-cas.github.io/",
    },
  ],
  services: [
    {
      period: "2025",
      role: "Lead Organizer",
      title: "CauScien Workshop at NeurIPS 2025",
      href: "https://sites.google.com/view/causcien/about",
    },
    {
      period: "Ongoing",
      role: "Co-Organizer",
      title: "UniReps Speaker Series",
      href: "https://unireps.org/speaker-series/",
    },
    {
      period: "Ongoing",
      role: "Reviewer",
      title: "NeurIPS, ICML, ICLR, TMLR, and related venues",
    },
  ],
  notes: [
    {
      title: "Scientific alignment",
      body: "Representations should behave like scientific instruments: stable, interpretable, and testable against physical structure.",
    },
    {
      title: "Method as medium",
      body: "Latent-space forecasting is useful when it makes the governing structure of a system more legible rather than more opaque.",
    },
    {
      title: "Research communication",
      body: "Papers, code, and datasets should form a coherent narrative so collaborators can understand not just results, but the research lens behind them.",
    },
  ],
  email: "dingling.yao@ista.ac.at",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/ddcoan", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dingling-yao/",
      icon: Linkedin,
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=vOJUvb0AAAAJ&hl=en",
      icon: BookOpen,
    },
    { label: "CV", href: cvFile, icon: FileText },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>
      ) : null}
    </div>
  );
}

function Nav() {
  const items = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Publications", "#publications"],
    ["Talks", "#talks"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(248,246,242,0.82)] backdrop-blur-xl">
      <div className={`${CONTAINER} flex items-center justify-between py-4`}>
        <a
          href="#top"
          className="group text-sm font-semibold uppercase tracking-[0.24em] text-stone-900"
        >
          <span className="inline-flex items-center gap-2">
            <Triangle className="h-3.5 w-3.5 fill-current stroke-none transition-transform duration-300 group-hover:-rotate-12" />
            {DATA.name}
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
          {items.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-stone-950">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-10 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.55),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(253,230,138,0.42),_transparent_30%),linear-gradient(180deg,_#f8f6f2_0%,_#f6f2ea_100%)]" />
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]`}>
        <Motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <Motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-[0.34em] text-stone-500"
          >
            {DATA.title}
          </Motion.p>
          <Motion.h1
            variants={fadeUp}
            className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl"
          >
            Researching how machine learning becomes useful for science.
          </Motion.h1>
          <Motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-stone-700"
          >
            {DATA.tagline}
          </Motion.p>
          <Motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-7 text-stone-600"
          >
            {DATA.thesis}
          </Motion.p>
          <Motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {DATA.credentials.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </Motion.div>
          <Motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Explore research
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
            >
              Get in touch
            </a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-200/70 via-amber-100/50 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_80px_rgba(64,47,20,0.14)] backdrop-blur">
              <img
                src={portrait}
                alt={`${DATA.name} portrait`}
                className="h-[24rem] w-[20rem] rounded-[1.4rem] object-cover sm:h-[28rem] sm:w-[23rem]"
              />
            </div>
          </div>
        </Motion.div>
      </div>

      <div className={`${CONTAINER} mt-10`}>
        <div className="grid gap-3 rounded-[2rem] border border-stone-200 bg-white/75 p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {DATA.metrics.map((item) => (
            <div key={item.label} className="rounded-[1.25rem] bg-stone-50 px-5 py-5">
              <div className="text-3xl font-semibold tracking-tight text-stone-950">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-stone-600">{item.label}</div>
            </div>
          ))}
        </div>
        <a
          href="#about"
          className="mt-6 inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-800"
        >
          Scroll for more
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="About"
          title="Research at the intersection of machine learning and science."
          description={DATA.affiliation}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
          >
            <p className="text-lg leading-8 text-stone-700">
              My work focuses on representations that are not only predictive, but
              scientifically legible. I care about whether a model can support
              explanation, intervention, and trustworthy reasoning in real physical systems.
            </p>
            <p className="mt-5 text-base leading-7 text-stone-600">
              Across papers, datasets, and talks, the goal is consistent: make machine
              learning more useful for scientific discovery by aligning model structure
              with the variables and mechanisms researchers actually care about.
            </p>
          </Motion.div>

          <Motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-stone-100 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
              Research interests
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {DATA.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

function ResearchCard({ project }) {
  return (
    <Motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-[0_24px_60px_rgba(68,53,24,0.12)]"
    >
      <div className={`h-44 bg-gradient-to-br ${project.accent} p-6`}>
        <div className="flex h-full items-end justify-between rounded-[1.4rem] border border-white/60 bg-white/45 p-5 backdrop-blur-sm">
          <div className="max-w-[13rem] text-sm font-medium text-stone-700">
            {project.status}
          </div>
          <div className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-600">
            {project.venue}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-stone-950">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-stone-600">
          {project.contribution}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
            >
              {link.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </Motion.article>
  );
}

function Research() {
  return (
    <section id="research" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Research"
          title="Selected research projects."
          description="Recent work on representation learning, scientific alignment, and physically grounded machine learning."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {DATA.projects.map((project) => (
            <ResearchCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Publications() {
  const publicationsByYear = DATA.publications.reduce((groups, publication) => {
    const bucket = groups[publication.year] || [];
    bucket.push(publication);
    groups[publication.year] = bucket;
    return groups;
  }, {});

  const years = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="publications" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Publications"
          title="Publications."
          description="Conference papers and research publications across causal representation learning, scientific machine learning, and probabilistic numerics."
        />
        <div className="mt-10 space-y-10">
          {years.map((year) => (
            <div key={year}>
              <div className="mb-4 flex items-center gap-4">
                <h3 className="text-2xl font-semibold tracking-tight text-stone-950">
                  {year}
                </h3>
                <div className="h-px flex-1 bg-stone-200" />
              </div>
              <div className="space-y-4">
                {publicationsByYear[year].map((publication) => (
                  <Motion.div
                    key={publication.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="rounded-[1.6rem] border border-stone-200 bg-white px-6 py-5 shadow-sm sm:flex sm:items-center sm:justify-between"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-stone-950">
                        {publication.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {publication.authors.map((author, index) => (
                          <span key={author}>
                            {index > 0 ? ", " : ""}
                            <span
                              className={
                                author === DATA.name
                                  ? "font-semibold text-stone-950"
                                  : undefined
                              }
                            >
                              {author}
                            </span>
                          </span>
                        ))}
                      </p>
                      <p className="mt-1 text-sm text-stone-500">{publication.meta}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 sm:mt-0 sm:justify-end">
                      {publication.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Datasets & Open Source"
          title="Datasets, code, and research tooling."
          description="Open artifacts that make the work easier to inspect, reproduce, and build on."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {DATA.datasets.map((item) => (
            <Motion.a
              key={item.title}
              href={item.href}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-7 shadow-sm transition hover:border-stone-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 flex-none text-stone-400" />
              </div>
            </Motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Talks() {
  return (
    <section id="talks" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Talks"
          title="Invited and contributed presentations."
          description="Selected talks and workshop presentations across causality, uncertainty, and scientific AI."
        />
        <div className="relative mt-10 pl-6 sm:pl-8">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-stone-200" />
          <div className="space-y-6">
            {DATA.talks.map((talk) => (
              <Motion.a
                key={`${talk.date}-${talk.title}`}
                href={talk.href}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="relative block rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:border-stone-300"
              >
                <span className="absolute -left-[2.05rem] top-8 h-3 w-3 rounded-full border-4 border-[#f8f6f2] bg-stone-900" />
                <p className="text-sm font-medium text-stone-500">{talk.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-stone-950">
                  {talk.title}
                </h3>
                <p className="mt-2 text-base text-stone-600">{talk.meta}</p>
              </Motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Academic Service"
          title="Organizing and community-building."
          description="Workshop organizing, speaker series coordination, and reviewing across the ML research community."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DATA.services.map((item) => {
            const content = (
              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {item.period} · {item.role}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-stone-950">
                  {item.title}
                </h3>
              </div>
            );

            if (!item.href) {
              return (
                <Motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                >
                  {content}
                </Motion.div>
              );
            }

            return (
              <Motion.a
                key={item.title}
                href={item.href}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="block"
              >
                {content}
              </Motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Notes"
          title="A short statement of method."
          description="A few principles that shape how I think about representation learning for scientific use."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DATA.notes.map((note) => (
            <Motion.article
              key={note.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                {note.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-stone-700">{note.body}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(DATA.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-stone-100 shadow-[0_30px_80px_rgba(34,26,10,0.18)] sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s talk about scientific machine learning.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-300">
              For collaborations, talks, workshop ideas, or research conversations, email is the fastest path.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${DATA.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200"
            >
              <Mail className="h-4 w-4" />
              {DATA.email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-white/35 hover:bg-white/5"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied" : "Copy email"}
            </button>
            {DATA.socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-white/35 hover:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pb-10 pt-4 text-center text-sm text-stone-500">
      © {new Date().getFullYear()} {DATA.name}
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.body.classList.add("bg-[#f8f6f2]", "text-stone-950");
    return () => {
      document.body.classList.remove("bg-[#f8f6f2]", "text-stone-950");
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f6f2] selection:bg-stone-900 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Talks />
        <Services />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
