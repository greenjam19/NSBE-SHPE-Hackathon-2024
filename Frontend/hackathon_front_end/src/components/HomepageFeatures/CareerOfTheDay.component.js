import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MySvgIcon from '../../../static/img/looking_at_web.svg';
import Link from '@docusaurus/Link';

function Feature() {
    return (
        <div className={clsx('col col--4 text--center')}>
            <div className="">
                {/* <Svg className={styles.featureSvg} role="img" /> */}
                <MySvgIcon className={styles.featureSvg} />
            </div>
            <div className="padding-horiz--md">
                <Heading as="h3">{"title"}</Heading>
                <p>{"Click to learn more about a new career!"}</p>
            </div>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Find new Career
                </Link>
            </div>
        </div>
    );
}


export default function CareerOfTheDay() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row ">
                    <Feature />

                </div>
            </div>

        </section>
    );
}

