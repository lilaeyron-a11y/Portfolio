import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Work() {
  return (
    <Layout title="Work">
      <main>
        <div className="container">
          <h1>Work</h1>
          <p>A selection of technical writing and documentation projects.</p>

          <section className={styles.section}>
            <h2>Product Documentation</h2>
            <div className={styles.workCard}>
              <h3>Product Documentation</h3>
              <p>
                Product datasheets, quick installation guides, and user
                documentation developed for technical products.
              </p>
              <p>
                <strong>Focus:</strong> Information architecture, technical
                writing, document design, and publishing.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Developer Documentation</h2>

            <div className={styles.workCard}>
              <h3>Developer Documentation</h3>
              <p>
                API documentation, technical references, and documentation
                designed for developers.
              </p>
              <p>
                <strong>Focus:</strong> API structure, technical accuracy,
                developer experience, and information organization.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Documentation Systems</h2>
            <div className={styles.workCard}>
              <h3>Documentation Systems</h3>
              <p>
                Knowledge bases, documentation websites, and modern
                documentation workflows.
              </p>
              <p>
                <strong>Focus:</strong> Docusaurus, Markdown, Git, Docs-as-Code,
                information architecture, and documentation workflows.
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
