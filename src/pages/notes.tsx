import Layout from '@theme/Layout';
import './portfolio-page.css';

export default function Notes() {
  return <Layout title="Notes"><main className="portfolioPage"><div className="portfolioPage__intro"><p className="portfolioPage__eyebrow">Notes</p><h1>Things I’m learning about clear technical communication.</h1><p className="portfolioPage__lead">Short observations on documentation, APIs, and the tools that support thoughtful content.</p></div><div className="portfolioPage__body"><section><p className="portfolioPage__eyebrow">Coming soon</p><h2>Writing notes</h2><p>This space will collect lessons from documentation projects, from structuring an API reference to building a docs site that is easier to use.</p></section></div></main></Layout>;
}
