import Link from "next/link";

const publications = [
  {
    year: "2026",
    title: "NILMbench: A Novel Benchmark for High-Frequency NILM Models",
    venue: "Energy, Elsevier",
    people: "S. Moghimian Hoosh, I. Kamyshev, J. Penuela, F. Mahmood, T. Al Ansari, H. Ouerdane",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S0360544226017858",
  },
  {
    year: "2026",
    title: "HiFAKES: High-Frequency Synthetic Appliance Signatures Generator for NILM",
    venue: "IEEE Access",
    people: "I. Kamyshev, S. Moghimian Hoosh, H. Ouerdane",
    href: "https://ieeexplore.ieee.org/document/11475440/",
  },
  {
    year: "2025",
    title: "COLD: Concurrent Loads Disaggregator for Non-Intrusive Load Monitoring",
    venue: "IEEE Kiel PowerTech",
    people: "I. Kamyshev, S. Moghimian Hoosh, D. Kriukov, E. Gryazina, H. Ouerdane",
    href: "https://ieeexplore.ieee.org/document/11180295/",
  },
  {
    year: "2025",
    title: "Toward Explainable NILM: Real-Time Event-Based NILM Framework for High-Frequency Data",
    venue: "IEEE Kiel PowerTech",
    people: "G. Gerasimov, I. Kamyshev, S. Moghimian Hoosh, E. Gryazina, H. Ouerdane",
    href: "https://ieeexplore.ieee.org/document/11180424/",
  },
  {
    year: "2025",
    title: "Fusion-ResNet: A Lightweight Multi-label NILM Model Using PCA-ICA Feature Fusion",
    venue: "arXiv",
    people: "S. Moghimian Hoosh, I. Kamyshev, H. Ouerdane",
    href: "https://arxiv.org/abs/2511.12139",
  },
  {
    year: "2025",
    title: "Enhancing Non-Intrusive Load Monitoring with Features Extracted by ICA",
    venue: "IEEE REEPE",
    people: "S. Moghimian Hoosh, I. Kamyshev, H. Ouerdane",
    href: "https://ieeexplore.ieee.org/abstract/document/10971068/",
  },
  {
    year: "2023",
    title: "Physics-Informed Appliance Signatures Generator for Energy Disaggregation",
    venue: "IEEE EI2, Hangzhou",
    people: "I. Kamyshev, S. Moghimian Hoosh, H. Ouerdane",
    href: "https://ieeexplore.ieee.org/document/10513031/",
  },
  {
    year: "2023",
    title: "Edframe: Open-Source Library for End-to-End Energy Disaggregation in Python",
    venue: "IEEE Belgrade PowerTech",
    people: "I. Kamyshev, V. Terzija, E. Gryazina",
    href: "https://ieeexplore.ieee.org/document/10202926/",
  },
];

const projects = [
  {
    name: "Edframe",
    desc: "Open-source Python library for end-to-end energy disaggregation experiments.",
    href: "https://github.com/arx7ti/edframe",
  },
  {
    name: "COLD NILM",
    desc: "Reproducible code and notebooks for concurrent-load disaggregation research.",
    href: "https://github.com/arx7ti/cold-nilm",
  },
  {
    name: "XAI NILM",
    desc: "Explainable, event-based NILM framework for high-frequency data.",
    href: "https://github.com/arx7ti/xai-nilm",
  },
  {
    name: "HiFAKES",
    desc: "Synthetic high-frequency appliance-signature generation for NILM diagnostics.",
    href: "https://github.com/arx7ti/hifakes",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const sections = [
  { path: "/", label: "Bio" },
  { path: "/research", label: "Research" },
  { path: "/mentoring", label: "Mentoring" },
  { path: "/apps", label: "My apps" },
  { path: "/blogs", label: "Blogs" },
] as const;

export function SiteChrome({
  currentPath,
  children,
}: {
  currentPath: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="masthead">
        <div>
          <p className="kicker">Personal website</p>
          <h1>Ilia Kamyshev</h1>
          <p className="dek">AI researcher · Entrepreneur · Director</p>
          <p className="core-message">
            I build intelligent systems for the physical world. I am passionate to turn difficult
            ideas into working systems.
          </p>
        </div>
        <aside className="portrait-card masthead-portrait" aria-label="Portrait of Ilia Kamyshev">
          <img src={`${basePath}/ilia-kamyshev.jpg`} alt="Ilia Kamyshev speaking at an event" />
        </aside>
      </header>

      <nav aria-label="Sections" className="tabs">
        {sections.map((section) => (
          <Link
            key={section.path}
            href={section.path}
            className={currentPath === section.path ? "tab-active" : undefined}
            aria-current={currentPath === section.path ? "page" : undefined}
          >
            {section.label}
          </Link>
        ))}
      </nav>

      {children}
      <ContactSection />
    </main>
  );
}

export function BioSection() {
  return (
    <section className="section-panel">
      <article>
        <h2>Biography</h2>
        <p>
          I&apos;m currently Director of{" "}
          <a href="https://iesllc.ge">Intelligent Energy Solutions LLC</a>, Georgia, where I lead
          the company&apos;s technical, operational, and research activities and oversee the
          development of energy disaggregation analytics.
        </p>
        <p>
          I have more than 6 years of experience in research engineering and applied machine
          learning, including 5 years focused on high-frequency energy disaggregation and more than
          2 years leading R&amp;D and company operations.
        </p>
        <p>
          I am also a founder of an energy disaggregation startup that secured $100K in pre-seed
          funding from an angel investor.
        </p>
        <p>
          I finished PhD studies in Engineering Systems and am awaiting the PhD defense in early
          2027. I also hold an MSc in Information Technology and graduated from the Skolkovo
          Institute of Science and Technology, founded in collaboration with MIT, where I worked
          with notable professors such as Henni Ouerdane and Vladimir Terzija. My work has
          resulted in 8 scientific publications, 1 granted patent, and a Best Paper Award at IEEE
          EI2. I have also participated in research and startup projects with combined funding of
          more than $1.5 million and have 5 years of mentoring experience with students,
          researchers, and early-stage technology teams.
        </p>
        <h2>Professional Skills</h2>
        <ul className="skill-list">
          <li>Machine learning, neural networks, and AI-assisted development</li>
          <li>Python, data analysis, scientific computing, and technical writing</li>
          <li>Linux, Git, Docker, SQL / NoSQL, and reproducible research workflows</li>
          <li>Signal processing and applied modeling for physical systems</li>
        </ul>
        <p className="connect-note">
          I&apos;m always open to meeting passionate researchers, young entrepreneurs, and
          investors who are interested in ambitious technology and practical innovation. Whether
          you have an idea, a research question, or see an opportunity to work together, feel free
          to reach out.
        </p>
      </article>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section className="section-panel">
      <h2>Research Interests</h2>
      <ul className="research-list">
        <li>Artificial intelligence for physical and energy systems</li>
        <li>Machine learning models that remain interpretable in real deployments</li>
        <li>Neural networks, signal processing, and representation learning for time-series data</li>
        <li>Open-set recognition and robust generalization under distribution shift</li>
        <li>Synthetic data generation for testing and improving model generalization</li>
        <li>Applied analytics systems that connect research prototypes with production software</li>
      </ul>

      <h2>Publications and Patent</h2>
      <ol className="pubs compact">
        {publications.map((paper) => (
          <li key={paper.title}>
            <time>{paper.year}</time>
            <div>
              <a href={paper.href}>{paper.title}</a>
              <small>{paper.venue}</small>
            </div>
          </li>
        ))}
        <li>
          <time>2023</time>
          <div>
            <strong>Patent: Method for Disaggregation of Cumulative Energy Consumption Signal</strong>
            <p>RU 2 804 048 C1. Inventors: I. Kamyshev, D. Kuznedelev, E. Gryazina, V. Terzija.</p>
          </div>
        </li>
      </ol>

      <h2>Software and Libraries</h2>
      <div className="project-list">
        {projects.map((project) => (
          <a className="project" href={project.href} key={project.name}>
            <strong>{project.name}</strong>
            <span>{project.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function MentoringSection() {
  return (
    <section className="section-panel">
      <div className="split">
        <article>
          <h2>Mentoring</h2>
          <p>
            I mentor MSc and PhD students, student startup teams, and early-stage founders. I also
            give seminars on entrepreneurship and innovation, with a practical focus on how to
            validate ideas, organize early execution, and run early-stage startups.
          </p>
        </article>
        <article>
          <h2>Awards and Grants</h2>
          <ul className="skill-list">
            <li>Best Paper Award at IEEE EI2 2023</li>
            <li>Grant participation through Skoltech and HBKU projects</li>
            <li>Triple Point Launch Competition participant</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export function AppsSection() {
  return (
    <section className="section-panel">
      <h2>My Apps</h2>
      <div className="app-list">
        <article className="app-card">
          <img
            src={`${basePath}/energy-monitoring-app.png`}
            alt="Mobile energy monitoring application interface"
          />
          <div>
            <h3>Energy monitoring application</h3>
            <p>
              A mobile energy analytics interface for tracking live household consumption,
              detecting active appliances, showing alerts, and helping users understand where
              electricity is being used in real time.
            </p>
          </div>
        </article>
        <article className="app-card">
          <img src={`${basePath}/hooshi-app.png`} alt="Hooshi speech-to-text application interface" />
          <div>
            <h3>Hooshi speech-to-text</h3>
            <p>
              Hooshi is a speech-to-text and dictation app focused on everyday voice capture,
              transcription usage tracking, and simple subscription management for regular users.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export function BlogsSection() {
  return (
    <section className="section-panel">
      <h2>Blogs</h2>
      <article className="blog-post">
        <div className="blog-post-header">
          <h3>
            <Link href="/blogs/building-a-sensor-for-remote-appliance-monitoring" className="title-link">
              Building a sensor for remote appliance monitoring
            </Link>
          </h3>
          <Link href="/blogs/building-a-sensor-for-remote-appliance-monitoring">Read article</Link>
        </div>
        <p>
          We&apos;re finally wrapping up development of our sensor for remotely monitoring electrical
          appliances. It&apos;s especially useful for anyone who regularly leaves home wondering: Did I
          switch off the iron?
        </p>
        <p>
          This post covers the path from the first prototype to a working product, including the
          technical, business, and execution challenges along the way.
        </p>
      </article>
    </section>
  );
}

export function SensorBlogPost() {
  return (
    <article className="blog-article">
      <p>
        We&apos;re finally wrapping up development of our sensor for remotely monitoring electrical
        appliances. It&apos;s especially useful for anyone who regularly leaves home wondering: Did I
        switch off the iron?
      </p>
      <p>
        In the video, we demonstrate the product working in real time. We may be among the first
        teams to record the entire experience in a single take, directly from the phone, without
        editing, screen replacements, or carefully timed transitions. What you see is exactly how
        it works.
      </p>
      <p>Below is the brief story of how we went from nothing to where we are today.</p>
      <p>
        To be honest, it has been a difficult journey, almost five years. My team and I built both
        the hardware and the AI-powered software from scratch. When we started, we didn&apos;t have
        deep expertise in most of the areas involved. What we did have was a general IT background,
        degrees in electrical engineering and linguistics, and a strong desire to turn an idea we
        all believed in into something real.
      </p>
      <p>
        Along the way, we had to learn machine learning and deep learning, microelectronics,
        Python, C/C++, and Rust. At the same time, we were also learning about business,
        management, and working with customers.
      </p>
      <p>Then things became even more interesting.</p>
      <p>
        There was very little useful documentation, the goals changed several times, and the number
        of tasks kept growing. We were dealing with completely different areas that all had to move
        forward in parallel: hardware, backend infrastructure, the dashboard, the mobile app,
        firmware for several microcontrollers, AI and data research, business operations, pilot
        projects, and contracts.
      </p>
      <p>
        And, naturally, all of these problems had a special talent for appearing at the same time,
        usually just before a deadline.
      </p>
      <p>
        At some point, it became clear that without discipline and proper task decomposition, we
        were going to drown. We had to learn how to prioritize quickly, track the state of every
        part of the project, and stop getting stuck in perfectionism.
      </p>
      <p>
        We didn&apos;t always succeed. But real customer deadlines are a very effective cure for the
        desire to &quot;improve it just a little more.&quot;
      </p>
      <p>And yes, all of this was happening while I was also writing my PhD thesis.</p>
      <p>In short, some parts of the journey were extremely difficult, but we made it.</p>
      <p>
        The product is built.{" "}
        <a href="https://www.youtube.com/watch?v=Ru9Mn3zYwWc">Watch the demonstration</a>.
      </p>
    </article>
  );
}

export function ContactSection() {
  return (
    <footer id="contact" className="contact-panel">
      <h2>Contact</h2>
      <address>
        <a href="mailto:ilia.kamyshev@gmail.com">ilia.kamyshev@gmail.com</a>
        <br />
        <a href="https://github.com/arx7ti">github.com/arx7ti</a>
        <br />
        <a href="https://github.com/bestofnilm">github.com/bestofnilm</a>
        <br />
        <a href="https://linkedin.com/in/ilia-kamyshev-76b223281">LinkedIn</a>
      </address>
    </footer>
  );
}
