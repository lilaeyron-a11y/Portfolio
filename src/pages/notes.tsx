import Layout from '@theme/Layout';

export default function Notes() {
  return (
    <Layout title="Notes">
      <main>
        <div className="container">
          <h1>Notes</h1>
          <p>
            Notes on technical writing, documentation, APIs, and
            documentation tools.
          </p>

          <h2>Technical Writing</h2>
          <p>
            Principles, techniques, and lessons learned from technical
            documentation.
          </p>

          <h2>API Documentation</h2>
          <p>
            Notes on APIs, developer documentation, and documentation
            workflows.
          </p>

          <h2>Documentation Tools</h2>
          <p>
            Notes on Markdown, Docusaurus, Git, and docs-as-code workflows.
          </p>
        </div>
      </main>
    </Layout>
  );
}