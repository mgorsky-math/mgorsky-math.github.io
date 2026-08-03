const publications = [
  {
    year: "2026",
    status: "FOCS 2026",
    title: "Optimal Bounds for the k-Disjoint Paths Problem",
    authors:
      "Dario Cavallaro, Maximilian Gorsky, Stephan Kreutzer, Dimitrios Thilikos & Sebastian Wiederrecht",
    href: "https://arxiv.org/abs/2605.14902",
  },
  {
    year: "2026",
    status: "ICALP 2026",
    title: "Quickly Excluding an Annotated Planar Graph",
    authors:
      "Maximilian Gorsky, Evangelos Protopapas & Sebastian Wiederrecht",
    href: "https://arxiv.org/abs/2602.06516",
  },
  {
    year: "2026",
    status: "ICALP 2026",
    title: "The Price of Homogeneity Is Polynomial",
    authors:
      "Maximilian Gorsky, Michał Seweryn & Sebastian Wiederrecht",
    href: "https://arxiv.org/abs/2602.01882",
  },
  {
    year: "2026",
    status: "ICALP 2026",
    title:
      "Odd-Cycle-Packing-treewidth: On the Maximum Independent Set Problem in Odd-Minor-Free Graph Classes",
    authors:
      "Mujin Choi, Maximilian Gorsky, Gunwoo Kim, Caleb McFarland & Sebastian Wiederrecht",
    href: "https://arxiv.org/abs/2511.10019",
  },
  {
    year: "2026",
    status: "Discrete & Computational Geometry",
    title: "Triangulated Spheres with Holes in Triangulated Surfaces",
    authors:
      "Katie Clinch, Sean Dewar, Niloufar Fuladi, Maximilian Gorsky, Tony Huynh, Eleftherios Kastis, Atsuhiro Nakamoto, Anthony Nixon & Brigitte Servatius",
    href: "https://doi.org/10.1007/s00454-026-00836-8",
  },
  {
    year: "2026",
    status: "SODA 2026",
    title: "Catching Rats in H-minor-free Graphs",
    authors:
      "Maximilian Gorsky, Giannos Stamoulis, Dimitrios Thilikos & Sebastian Wiederrecht",
    href: "https://arxiv.org/abs/2506.22857",
  },
  {
    year: "2025",
    status: "FOCS 2025",
    title: "Polynomial Bounds for the Graph Minor Structure Theorem",
    authors:
      "Maximilian Gorsky, Michał Seweryn & Sebastian Wiederrecht",
    href: "https://arxiv.org/abs/2504.02532",
  },
  {
    year: "2025",
    status: "Discrete Applied Mathematics",
    title:
      "Computing the Forcing Spectrum of Outerplanar Graphs in Polynomial Time",
    authors: "Maximilian Gorsky & Fabian Kreßin",
    href: "https://doi.org/10.1016/j.dam.2025.06.063",
  },
  {
    year: "2025",
    status: "Discrete Mathematics",
    title: "A Note on the 2-Factor Hamiltonicity Conjecture",
    authors:
      "Maximilian Gorsky, Theresa Johanni & Sebastian Wiederrecht",
    href: "https://doi.org/10.1016/j.disc.2025.114442",
  },
  {
    year: "2024",
    status: "STOC 2024",
    title: "Packing Even Directed Circuits Quarter-Integrally",
    authors:
      "Maximilian Gorsky, Ken-ichi Kawarabayashi, Stephan Kreutzer & Sebastian Wiederrecht",
    href: "https://doi.org/10.1145/3618260.3649682",
  },
  {
    year: "2023",
    status: "Discrete Mathematics",
    title: "Matching Theory and Barnette’s Conjecture",
    authors:
      "Maximilian Gorsky, Raphael Steiner & Sebastian Wiederrecht",
    href: "https://doi.org/10.1016/j.disc.2022.113249",
  },
  {
    year: "2022",
    status: "CSL 2022",
    title:
      "Differential Games, Locality, and Model Checking for FO Logic of Graphs",
    authors: "Jakub Gajarský, Maximilian Gorsky & Stephan Kreutzer",
    href: "https://doi.org/10.4230/LIPIcs.CSL.2022.22",
  },
  {
    year: "2021",
    status: "EuroComb 2021",
    title: "Strongly Pfaffian Graphs",
    authors: "Maximilian Gorsky, Raphael Steiner & Sebastian Wiederrecht",
    href: "https://doi.org/10.1007/978-3-030-83823-2_42",
  },
];

const preprints = [
  {
    title:
      "An Erdős–Pósa Theorem for Cycles and Faces of Distinct Lengths",
    detail:
      "with J. Pascal Gollin, Meike Hatzel, Kevin Hendrey, Tony Huynh, Caleb McFarland, Marek Sokołowski, Sebastian Wiederrecht, and Paul Wollan",
    href: "https://arxiv.org/abs/2607.06869",
  },
  {
    title:
      "The Erdős–Pósa Property for Prime-Length Cycles Fails (and Beyond)",
    detail: "with Kevin Hendrey and Tony Huynh",
    href: "https://arxiv.org/abs/2605.04938",
  },
  {
    title: "On Non-Planar, Cycle-Conformal Graphs",
    detail: "with Clemens Kuske",
    href: "https://arxiv.org/abs/2602.07331",
  },
  {
    title: "Posets with k-outerplanar Cover Graphs Have Bounded Dimension",
    detail: "with Michał Seweryn",
    href: "https://arxiv.org/abs/2103.15920",
  },
];

const coauthors: Array<{ name: string; href?: string; papers?: number }> = [
  { name: "Dario Cavallaro" },
  { name: "Mujin Choi", href: "https://dimag.ibs.re.kr/home/mujin/" },
  {
    name: "Katie Clinch",
    href: "https://smp.uq.edu.au/profile/17423/katie-clinch",
  },
  { name: "Sean Dewar", href: "https://www.seandewar.com/" },
  { name: "Niloufar Fuladi", href: "https://niloufarfuladi.github.io/" },
  {
    name: "Jakub Gajarský",
    href: "https://sites.google.com/view/jakubgajarsky/",
  },
  { name: "J. Pascal Gollin", href: "https://pascal-gollin.github.io/" },
  { name: "Meike Hatzel", href: "https://meikehatzel.com/" },
  {
    name: "Kevin Hendrey",
    href: "https://sites.google.com/view/kevinhendrey",
    papers: 2,
  },
  {
    name: "Tony Huynh",
    href: "https://sites.google.com/site/matroidintersection/",
    papers: 3,
  },
  { name: "Theresa Johanni" },
  {
    name: "Eleftherios Kastis",
    href: "https://www.lancaster.ac.uk/maths/people/lefteris-kastis",
  },
  {
    name: "Ken-ichi Kawarabayashi",
    href: "https://research.nii.ac.jp/~k_keniti/",
  },
  { name: "Gunwoo Kim", href: "https://k-gunwoo.github.io/" },
  { name: "Fabian Kreßin" },
  {
    name: "Stephan Kreutzer",
    href: "https://www.tu.berlin/en/las/team/research-group-leader/kreutzer",
    papers: 3,
  },
  { name: "Clemens Kuske" },
  {
    name: "Caleb McFarland",
    href: "https://sites.google.com/view/caleb-mcfarland/",
    papers: 2,
  },
  { name: "Atsuhiro Nakamoto", href: "https://researchmap.jp/nakamoto" },
  {
    name: "Anthony Nixon",
    href: "https://www.lancaster.ac.uk/maths/people/anthony-nixon",
  },
  { name: "Evangelos Protopapas", href: "https://vagprot.github.io/" },
  { name: "Brigitte Servatius", href: "https://users.wpi.edu/~bservat/" },
  {
    name: "Michał Seweryn",
    href: "https://tcs.uj.edu.pl/seweryn",
    papers: 3,
  },
  { name: "Marek Sokołowski", href: "https://mnbvmar.github.io/" },
  {
    name: "Giannos Stamoulis",
    href: "https://www.irif.fr/~stamoulis/",
  },
  {
    name: "Raphael Steiner",
    href: "https://sites.google.com/view/raphael-mario-steiner/",
    papers: 2,
  },
  {
    name: "Dimitrios Thilikos",
    href: "https://www.lirmm.fr/~thilikosto/",
    papers: 2,
  },
  {
    name: "Sebastian Wiederrecht",
    href: "https://www.wiederrecht.com/",
    papers: 11,
  },
  {
    name: "Paul Wollan",
    href: "http://www.dsi.uniroma1.it/~wollan",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div className="site concept-fieldnotes">
      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Maximilian Gorsky, home">
            <span className="brand-mark">MG</span>
            <span>
              <strong>Maximilian Gorsky</strong>
              <small>Structural Graph Theory</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="/activities">Activities</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="hero-descriptors">
                <p className="eyebrow">
                  Senior Researcher · IBS-DIMAG · Daejeon
                </p>
                <p className="eyebrow">Computer Scientist · Mathematician</p>
              </div>
              <h1 id="hero-title">
                Research on the
                <em> structure of graphs.</em>
              </h1>
              <p className="hero-intro">
                I am a senior researcher in{" "}
                <a href="https://dimag.ibs.re.kr/">
                  Sang-il Oum’s DIMAG group
                </a>{" "}
                at the Institute for Basic Science in Daejeon, South Korea.
                Before this, I completed my PhD with{" "}
                <a href="https://www.tu.berlin/en/las/team/research-group-leader/kreutzer">
                  Stephan Kreutzer
                </a>{" "}
                at TU Berlin.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#publications">
                  View publications <Arrow />
                </a>
                <a className="text-action" href="mailto:m.gorsky@pm.me">
                  m.gorsky@pm.me
                </a>
              </div>
            </div>
            <figure className="hero-portrait">
              <div
                className="portrait-frame"
                tabIndex={0}
                aria-label="Hover or focus to reveal an alternate portrait"
              >
                <img
                  className="portrait-base"
                  src="/images/website-photo.avif"
                  alt="Maximilian Gorsky giving a mathematics talk"
                />
                <img
                  className="portrait-hover"
                  src="/images/meeme.jpg"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <figcaption>Photo by Sang-il Oum</figcaption>
            </figure>
            <p className="hero-index" aria-hidden="true">
              01 / PROFILE
            </p>
          </section>

          <section className="research-section" id="research">
            <div className="section-heading">
              <p className="eyebrow">Research focus</p>
              <h2>Structure as a route to algorithms.</h2>
            </div>
            <div className="research-grid">
              <article>
                <div className="research-card-heading">
                  <span>01</span>
                  <h3>Structural Graph Theory</h3>
                </div>
                <p>
                  Graph Minor Structure Theory in (un)directed graphs, with a
                  view toward solving hard algorithmic problems.
                </p>
              </article>
              <article>
                <div className="research-card-heading">
                  <span>02</span>
                  <h3>Matching Theory</h3>
                </div>
                <p>
                  Structural matching theory of bipartite graphs, forcing
                  numbers, and connections to Hamiltonicity.
                </p>
              </article>
              <article>
                <div className="research-card-heading">
                  <span>03</span>
                  <h3>Parameterized Algorithms</h3>
                </div>
                <p>
                  The interaction between model checking, graph structure, and
                  parameterized complexity.
                </p>
              </article>
            </div>
            <div className="credentials-row">
              <div>
                <strong>2026</strong>
                <span>Adjunct Professor · KAIST</span>
              </div>
              <div>
                <strong>2025</strong>
                <span>IBS Researcher of the Year</span>
              </div>
              <div>
                <strong>2024</strong>
                <span>PhD · TU Berlin · summa cum laude</span>
              </div>
            </div>
          </section>

          <figure className="panorama-band">
            <div className="panorama-image">
              <img
                src="/images/research-panorama.jpg"
                alt="A panoramic whiteboard filled with colourful graph-theory diagrams, equations, and research notes"
              />
            </div>
            <figcaption>
              <span>Graph theory, in progress.</span>
              <small>
                <strong>Photo by Sebastian Wiederrecht</strong>
                <span>
                  Drawings by Dario Cavallaro, Maximilian Gorsky, and Sebastian
                  Wiederrecht
                </span>
              </small>
            </figcaption>
          </figure>

          <section className="publications-section" id="publications">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Publications</h2>
              </div>
            </div>
            <div className="publication-list">
              {publications.map((publication) => (
                <a
                  className="publication"
                  href={publication.href}
                  key={publication.title}
                >
                  <span className="pub-year">{publication.year}</span>
                  <span className="pub-main">
                    <strong>{publication.title}</strong>
                    <small>{publication.authors}</small>
                  </span>
                  <span className="pub-status">{publication.status}</span>
                  <Arrow />
                </a>
              ))}
            </div>

            <div className="preprints">
              <div className="preprints-heading">
                <p className="eyebrow">In progress</p>
                <h3>Preprints & manuscripts</h3>
              </div>
              <div className="preprint-list">
                {preprints.map((preprint) => (
                  <a href={preprint.href} key={preprint.title}>
                    <strong>{preprint.title}</strong>
                    <span>{preprint.detail}</span>
                    <Arrow />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="coauthors-section" id="coauthors">
            <div className="section-heading">
              <p className="eyebrow">Collaborations</p>
              <h2>Co-authors</h2>
            </div>
            <p className="coauthor-list">
              {coauthors.map((coauthor) => (
                <span className="coauthor-entry" key={coauthor.name}>
                  {coauthor.href ? (
                    <a href={coauthor.href}>{coauthor.name}</a>
                  ) : (
                    coauthor.name
                  )}
                  {coauthor.papers && (
                    <small aria-label={`${coauthor.papers} papers`}>
                      {" "}
                      (x{coauthor.papers})
                    </small>
                  )}
                </span>
              ))}
            </p>
          </section>

          <section className="contact-section" id="contact">
            <p className="eyebrow">Contact</p>
            <div className="contact-grid">
              <a href="mailto:m.gorsky@pm.me">
                <span>Email</span>
                <strong>m.gorsky@pm.me</strong>
                <Arrow />
              </a>
              <a
                className="affiliation-card"
                href="https://map.naver.com/p/search/Institute%20for%20basic%20science/place/21052209?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607271521%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3DInstitute%20for%20basic%20science"
                aria-label="View the Institute for Basic Science in Daejeon on Naver Map"
              >
                <span>Affiliation</span>
                <strong>IBS Discrete Mathematics Group</strong>
                <p>55 Expo-ro, Yuseong-gu, Daejeon 34126, South Korea</p>
                <small>View on Naver Map</small>
                <Arrow />
              </a>
            </div>
          </section>
        </main>

        <footer>
          <p>© 2026 Maximilian Gorsky</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </div>
  );
}
