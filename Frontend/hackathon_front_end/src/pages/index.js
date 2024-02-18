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
  "Registered Nurse", delay_between_options, "Graphic Designer", delay_between_options, 
  "Human Resources Specialist", delay_between_options, "Financial Analyst", delay_between_options, 
  "Digital Marketing Specialist", delay_between_options, "Project Manager", delay_between_options, 
  "Technical Writer", delay_between_options, "Teacher", delay_between_options,
  "Financial Advisor", delay_between_options, "Environmental Scientist", delay_between_options,
  "Social Media Manager", delay_between_options, "Physical Therapy Assistant", delay_between_options, 
  "Healthcare Administratort", delay_between_options, "Interior Designer", delay_between_options, 
  "Legal Assistant-Paralegal", delay_between_options, "Real Estate Agent", delay_between_options, 
  "Fitness Trainer-Instructor", delay_between_options, "HVAC Technician", delay_between_options, 
  "Welder", delay_between_options, "Construction Worker", delay_between_options, 
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
        <CareerOfTheDay />
      </main>
    </Layout>
  );
}
