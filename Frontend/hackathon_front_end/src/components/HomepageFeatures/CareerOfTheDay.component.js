import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MySvgIcon from '../../../static/img/undraw_searching.svg';
import Link from '@docusaurus/Link';


const career_page_links = [
    
    "Registered Nurse", "Graphic Designer", 
    "Human Resources Specialist", "Financial Analyst", 
    "Digital Marketing Specialist", "Project Manager", 
    "Technical Writer", "Teacher",
    "Financial Advisor", "Environmental Scientist",
    "Social Media Manager", "Physical Therapy Assistant", 
    "Healthcare Administrator", "Interior Designer", 
    "Legal Assistant-Paralegal", "Real Estate Agent", 
    "Fitness Trainer-Instructor", "HVAC Technician", 
    "Welder", "Construction Worker", 
]

function Feature() {
    return (
        <div className={clsx('col text--center')}>
            <div className="">
                <MySvgIcon className={styles.featureSvg} />
            </div>
            <div className="padding-horiz--md">
                
                <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--m"
                    to={ "/docs/Job Descriptions/" + career_page_links[Math.floor(Math.random() * (career_page_links.length -1))]}>
                    I'm Just Curious!
                </Link>
            </div>
                <p>{"Learn more about a career you may not have heard about! "} 
                <i>{"(click for a randomly selected career page)"}</i>
                </p>
            </div>
            
        </div>
    );
}


export default function CareerOfTheDay() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <section className={styles.features2}>
            <div className="container">
                <div className="row ">
                    <Feature />
                </div>
            </div>
        </section>
    );
}

