import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import ThemedImage from '@theme/ThemedImage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageAdopters from '../components/HomepageAdopters';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBackground)}>
      <div className="container">
        <ThemedImage 
        className={styles.heroLogo}
        alt="Docusaurus themed image"
        sources={{
          light: require('@site/static/img/fluid-stacked-color.png').default,
          dark: require('@site/static/img/fluid-stacked-white.png').default,
        }}>
        </ThemedImage>
        <p className={styles.heroSubtitle}><Translate>{siteConfig.tagline}</Translate></p>
        <div className={styles.buttons}>
          <div className="margin-horiz--sm">
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/fluid-cloudnative/fluid">
              Github
            </Link>
          </div>
          <div className="margin-horiz--sm">
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/fluid-cloudnative/fluid/releases">
              <Translate>Download</Translate>
            </Link>
          </div>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/">
              <Translate>Getting Started</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Power Data Accessing on Kubernetes`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <hr color='#eaecef'></hr> */}
        <HomepageAdopters />
        <div className={clsx('hero', styles.hero)}>
        <div className="container text--center">
          <h3 className="hero__subtitle">
            <Translate>Fluid is a</Translate> <a href="https://cncf.io/">CNCF (Cloud Native Computing Foundation)</a> <Translate>Sandbox project</Translate>
          </h3>
          <div className={clsx('cncf-logo', styles.cncfLogo)} />
        </div>
      </div>
      </main>
    </Layout>
  );
}
