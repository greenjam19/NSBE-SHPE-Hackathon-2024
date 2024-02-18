import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CareerOfTheDay from '../components/HomepageFeatures/CareerOfTheDay.component';
import { TypeAnimation } from 'react-type-animation';
import logo from '../../static/img/d20-icon-13.jpg'

import Heading from '@theme/Heading';
import styles from './index.module.css';

const delay_between_options = 1000
const career_options_sequence = [
  "Developer", delay_between_options, "Writer", delay_between_options, 
  "Designer", delay_between_options, "Chemist", delay_between_options, 
  "Teacher", delay_between_options, "Astronaut", delay_between_options, "Fire Fighter",


]


const TypingAnimation = () => {
  return (
    <div>
      <h3 >I can become a</h3>
      <TypeAnimation
        sequence={career_options_sequence}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
    </div>
  );
};


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <Heading as="hero__subtitle" >
          <TypingAnimation/>
        </Heading>
        <img src={logo} alt="this is project logo" width="200" height="200" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Why use {siteConfig.title}?
          </Link>
        </div>
        
      </div>
    </header>
  );
}



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
