import Layout from '@theme/Layout';
import './portfolio-page.css';

export default function About() {
  return <Layout title="About"><main className="portfolioPage"><div className="portfolioPage__intro"><p className="portfolioPage__eyebrow">About</p><h1>I write to make technical work feel less technical.</h1><p className="portfolioPage__lead">I’m Finn, a technical writer focused on clear, structured documentation that helps people understand products, APIs, and the systems behind them.</p></div><div className="portfolioPage__body"><section><h2>How I work</h2><p>I begin with the product: how it behaves, who needs it, and where someone may get stuck. Then I shape that understanding into content that is accurate, findable, and practical.</p></section><section><h2>What I work with</h2><p>Product documentation, developer documentation, API references, documentation websites, and docs-as-code workflows.</p></section><section><h2>Tools</h2><p>Markdown, Docusaurus, Git, OpenAPI, Postman, and documentation workflows that make content easier to maintain.</p></section></div></main></Layout>;
}
