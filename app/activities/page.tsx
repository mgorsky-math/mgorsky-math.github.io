import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities — Maximilian Gorsky",
  description:
    "Talks, research visits, workshops, and conferences by Maximilian Gorsky.",
};

const visits = [
  {
    date: "10–28 August 2026",
    name: "TU Berlin",
    detail: "Research visit · Host: Stephan Kreutzer",
    href: "https://www.tu.berlin/en/las/team/research-group-leader/kreutzer",
  },
  {
    date: "27 June–04 July 2026",
    name: "Georgia Tech",
    detail: "Research visit · Host: Rose McCarty",
    href: "https://mccarty.math.gatech.edu/",
  },
  {
    date: "17–18 November 2025",
    name: "TU Vienna",
    detail: "Research visit · Host: Jan Dreier",
    href: "https://www.ac.tuwien.ac.at/people/dreier/",
  },
  {
    date: "24 August–06 September 2025",
    name: "McGill University",
    detail: "Research visit · Host: Sergey Norin",
    href: "https://www.math.mcgill.ca/snorin/",
  },
  {
    date: "17 July–05 August 2025",
    name: "TU Berlin",
    detail: "Research visit · Host: Stephan Kreutzer",
    href: "https://www.tu.berlin/en/las/team/research-group-leader/kreutzer",
  },
  {
    date: "22 April–31 May 2024",
    name: "IBS-DIMAG",
    detail: "Research visit · Host: Sang-il Oum",
    href: "https://dimag.ibs.re.kr/",
  },
  {
    date: "04–10 March 2022",
    name: "LIRMM",
    detail: "Research visit · Host: Dimitrios Thilikos",
    href: "https://www.lirmm.fr/teams-en/algco-en/",
  },
];

const talks = [
  {
    date: "28 September 2026",
    venue: "GROW · Będlewo, Poland",
    title:
      "Controlling major apices in the polynomial Graph Minor Structure Theorem",
    href: "https://sites.google.com/impan.pl/grow2026/home-page",
  },
  {
    date: "24 June 2026",
    venue: "SIAM Conference on Discrete Mathematics · San Diego",
    title:
      "Controlling major apices in the polynomial Graph Minor Structure Theorem",
    invited: true,
    href: "https://www.siam.org/conferences-events/siam-conferences/dm26/",
  },
  {
    date: "06 May 2026",
    venue: "Discrete Math Seminar · Daejeon",
    title: "The Disjoint Paths Problem lies in the Oort cloud of algorithms",
    href: "https://dimag.ibs.re.kr/event/2026-05-06/",
  },
  {
    date: "13 January 2026",
    venue: "SODA · Vancouver",
    title: "Catching Rats in H-minor-free Graphs",
    href: "https://www.siam.org/conferences-events/siam-conferences/soda26/",
  },
  {
    date: "19 November 2025",
    venue: "LoGAlg · Vienna",
    title: "Catching Rats in H-minor-free Graphs",
    href: "https://www.ac.tuwien.ac.at/logalg2025/",
  },
  {
    date: "20 September 2025",
    venue: "KPPY100 · Gyeongju",
    title: "The Grid Theorem in H-minor-free graphs",
    invited: true,
    href: "https://kppy.siggers.work/kppy-100/",
  },
  {
    date: "19 August 2025",
    venue: "Koper–Leipzig Graph Theory Workshop · Koper",
    title: "Where to go next in Graph Minor Theory?",
    invited: true,
    href: "https://www.upr.si/en/about-the-university/news-and-announcements/up-famnit-and-up-iam-hosted-an-international-workshop-on-graph-theory-",
  },
  {
    date: "23 July 2025",
    venue: "Mittagsseminar · Berlin",
    title:
      "On a variant of the crossing number in the graph minor structure theorem",
    href: "https://www3.math.tu-berlin.de/diskremath/index.php?show=seminar",
  },
  {
    date: "22 May 2025",
    venue: "CanaDAM · Ottawa",
    title: "Polynomial bounds for the Graph Minor Structure Theorem",
    href: "https://canadam.ca/2025",
  },
  {
    date: "19 December 2024",
    venue: "32nd KIAS Combinatorics Workshop · Busan",
    title: "Polynomial bounds for the Graph Minor Structure Theorem",
    invited: true,
    href: "http://events.kias.re.kr/h/combinatorics/?pageNo=5772",
  },
  {
    date: "11 September 2024",
    venue: "GROW · Cottbus",
    title: "Polynomial bounds for the Graph Minor Structure Theorem",
    href: "https://www.grow2024.b-tu.de/",
  },
  {
    date: "25 June 2024",
    venue: "STOC · Vancouver",
    title: "Packing even directed circuits quarter-integrally",
    href: "https://acm-stoc.org/stoc2024/",
  },
  {
    date: "30 April 2024",
    venue: "Discrete Math Seminar · Daejeon",
    title: "Towards packing even dicycles half-integrally",
    href: "https://dimag.ibs.re.kr/events/category/seminar/dms/",
  },
  {
    date: "05 July 2022",
    venue: "ICGT · Montpellier",
    title: "Matching Theory and Barnette’s Conjecture",
    href: "https://www.lirmm.fr/icgt-2022/",
  },
  {
    date: "25 February 2022",
    venue: "Mittagsseminar · Berlin",
    title: "Matching Theory and Barnette’s Conjecture",
    href: "https://www3.math.tu-berlin.de/diskremath/index.php?show=seminar",
  },
  {
    date: "16 February 2022",
    venue: "CSL · Online",
    title:
      "Differential games, locality, and model checking for FO logic of graphs",
    href: "https://csl2022.uni-goettingen.de/",
  },
  {
    date: "09 September 2021",
    venue: "EUROCOMB · Online",
    title: "Strongly Pfaffian Graphs",
    href: "https://eurocomb2021.upc.edu/",
  },
  {
    date: "07 May 2021",
    venue: "Mittagsseminar · Online",
    title: "k-Outerplanarity and Poset Dimension",
    href: "https://www3.math.tu-berlin.de/diskremath/index.php?show=seminar",
  },
];

const workshops = [
  {
    date: "18–24 December 2026",
    name: "Second 2026 Barbados Graph Theory Workshop",
    place: "Holetown, Barbados",
  },
  {
    date: "27 September–01 October 2026",
    name: "GROW",
    place: "Będlewo, Poland",
    href: "https://sites.google.com/impan.pl/grow2026/home-page",
  },
  {
    date: "7–10 July 2026",
    name: "ICALP",
    place: "London, United Kingdom",
    href: "https://icalppodcspaa2026.cs.rhul.ac.uk/icalp/",
  },
  {
    date: "13–24 April 2026",
    name: "MATRIX: Global Structure and Geometry of Graphs",
    place: "Melbourne, Australia",
    href: "https://www.matrix-inst.org.au/events/global-structure-and-geometry-of-graphs/",
  },
  {
    date: "27–30 November 2025",
    name: "5th East Asia Workshop on Extremal and Structural Graph Theory",
    place: "Seoul, South Korea",
    href: "https://dimag.ibs.re.kr/event/2025-east-asia-graph-theory/",
  },
  {
    date: "14–17 December 2025",
    name: "FOCS",
    place: "Sydney, Australia",
    href: "https://focs.computer.org/2025/",
  },
  {
    date: "19–21 November 2025",
    name: "LoGAlg",
    place: "Vienna, Austria",
    href: "https://www.ac.tuwien.ac.at/logalg2025/",
  },
  {
    date: "26–31 October 2025",
    name: "Bertinoro Workshop on Algorithms and Graphs",
    place: "Bertinoro, Italy",
    href: "https://bwag25.bici.events/",
  },
  {
    date: "19–21 September 2025",
    name: "KPPY100",
    place: "Gyeongju, South Korea",
    href: "https://kppy.siggers.work/kppy-100/",
  },
  {
    date: "18–22 August 2025",
    name: "Koper–Leipzig Graph Theory Workshop",
    place: "Koper, Slovenia",
    href: "https://www.upr.si/en/about-the-university/news-and-announcements/up-famnit-and-up-iam-hosted-an-international-workshop-on-graph-theory-",
  },
  {
    date: "19–21 December 2024",
    name: "32nd KIAS Combinatorics Workshop",
    place: "Busan, South Korea",
    href: "http://events.kias.re.kr/h/combinatorics/?pageNo=5772",
  },
  {
    date: "09–12 September 2024",
    name: "GROW",
    place: "Cottbus, Germany",
    href: "https://www.grow2024.b-tu.de/",
  },
  {
    date: "27–31 March 2023",
    name: "SGCW on Chi-Boundedness",
    place: "Online",
    href: "https://sparse-graphs.mimuw.edu.pl/doku.php?id=sessions:2023sessions:2023session1",
  },
  {
    date: "19–22 September 2022",
    name: "GROW",
    place: "Koper, Slovenia",
    href: "https://conferences.famnit.upr.si/event/22/",
  },
  {
    date: "04–08 April 2022",
    name: "Sparse Graph Coalition Workshop on Digraphs",
    place: "Online",
    href: "https://sparse-graphs.mimuw.edu.pl/doku.php?id=sessions:2022sessions:2022session1",
  },
  {
    date: "09–13 September 2020",
    name: "Order & Geometry",
    place: "Wittenberg, Germany",
    href: "https://orderandgeometry2020.tcs.uj.edu.pl/",
  },
  {
    date: "24–27 September 2018",
    name: "GRASTA",
    place: "Berlin, Germany",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ActivitiesPage() {
  return (
    <div className="site concept-fieldnotes">
      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="/" aria-label="Maximilian Gorsky, home">
            <span className="brand-mark">MG</span>
            <span>
              <strong>Maximilian Gorsky</strong>
              <small>Structural Graph Theory</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="/#research">Research</a>
            <a href="/#publications">Publications</a>
            <a href="/activities" aria-current="page">
              Activities
            </a>
            <a href="/#contact">Contact</a>
          </nav>
        </header>

        <main>
          <header className="activities-hero">
            <a className="back-link" href="/">
              ← Back to profile
            </a>
            <p className="eyebrow">Academic activities</p>
            <h1>Talks, visits & workshops</h1>
          </header>

          <section className="activity-category">
            <div className="activity-category-heading">
              <span>01</span>
              <h2>Talks</h2>
            </div>
            <div className="full-activity-list">
              {talks.map((talk) => (
                <a href={talk.href} key={`${talk.date}-${talk.title}`}>
                  <time>{talk.date}</time>
                  <div>
                    <p className="activity-venue">
                      {talk.venue}
                      {talk.invited && <b>Invited</b>}
                    </p>
                    <h3>{talk.title}</h3>
                  </div>
                  <Arrow />
                </a>
              ))}
            </div>
          </section>

          <section className="activity-category">
            <div className="activity-category-heading">
              <span>02</span>
              <h2>Research visits</h2>
            </div>
            <div className="full-activity-list compact-activity-list">
              {visits.map((visit) => (
                <a href={visit.href} key={`${visit.date}-${visit.name}`}>
                  <time>{visit.date}</time>
                  <div>
                    <h3>{visit.name}</h3>
                    <p>{visit.detail}</p>
                  </div>
                  <Arrow />
                </a>
              ))}
            </div>
          </section>

          <section className="activity-category">
            <div className="activity-category-heading">
              <span>03</span>
              <h2>Workshops & conferences</h2>
            </div>
            <div className="full-activity-list compact-activity-list">
              {workshops.map((workshop) => {
                const content = (
                  <>
                    <time>{workshop.date}</time>
                    <div>
                      <h3>{workshop.name}</h3>
                      <p>{workshop.place}</p>
                    </div>
                    {workshop.href && <Arrow />}
                  </>
                );

                return workshop.href ? (
                  <a
                    href={workshop.href}
                    key={`${workshop.date}-${workshop.name}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={`${workshop.date}-${workshop.name}`}>{content}</div>
                );
              })}
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
