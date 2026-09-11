import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/work">
            View My Work
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const testBackend = async () => {
    const response = await fetch("http://localhost:3001/api/hello");
    const data = await response.json();

    console.log(data);
  };

  return (
    <Layout
      title="Finn — Technical Writer"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <button onClick={testBackend}>Test Backend</button>

        <div className="container">
          <h2>Projects</h2>

          {projects.map((project) => (
            <div key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </div>
          ))}
        </div>

        <div className="container">
          <section className={styles.section}>
            <h2>About My Work</h2>
            <p>
              I create clear, structured, and user-focused technical
              documentation that helps people understand products, APIs, and
              technical systems.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Selected Work</h2>

            <div className={styles.workGrid}>
              <div className={styles.workCard}>
                <h3>Product Documentation</h3>
                <p>
                  User manuals, quick installation guides, datasheets, and
                  product documentation.
                </p>
              </div>

              <div className={styles.workCard}>
                <h3>Developer Documentation</h3>
                <p>
                  API documentation, technical references, and documentation
                  for developers.
                </p>
              </div>

              <div className={styles.workCard}>
                <h3>Documentation Systems</h3>
                <p>
                  Knowledge bases, documentation websites, and modern
                  docs-as-code workflows.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}