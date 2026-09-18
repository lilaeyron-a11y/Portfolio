import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Finn — Technical Writer"
      description="Finn is a technical writer creating clear, useful documentation."
    >
      <main>
        <section className={styles.hero}><div className={styles.eyebrow}>Technical writing · Documentation systems</div><h1>I make complex products easier to use.</h1><p className={styles.intro}>I create clear, structured documentation for people who need to understand technical products and APIs.</p><Link className={styles.textLink} to="/work">View selected work <span aria-hidden="true">↗</span></Link></section>
        <section className={styles.featured} aria-labelledby="featured-work"><div id="featured-work" className={styles.sectionLabel}>Selected work</div><div className={styles.projectList}>
          <article className={styles.project}><div><p className={styles.projectType}>API documentation · Docs as code</p><h2>AtlasCloud Asset Labels API</h2></div><p>Documentation for a simulated asset-management API, built through implementation review, API testing, OpenAPI refinement, and an editorial workflow.</p><Link to="/work" className={styles.projectLink}>View project <span aria-hidden="true">→</span></Link></article>
          <article className={styles.project}><div><p className={styles.projectType}>Product documentation</p><h2>Technical product guides</h2></div><p>Practical, task-focused content that helps users set up, understand, and work confidently with technical products.</p><Link to="/work" className={styles.projectLink}>Explore work <span aria-hidden="true">→</span></Link></article>
        </div></section>
        <section className={styles.statement}><p>Good documentation respects a reader’s time: it is accurate, intentional, and easy to navigate.</p><Link className={styles.textLink} to="/about">More about my approach <span aria-hidden="true">↗</span></Link></section>
      </main>
    </Layout>
  );
}
