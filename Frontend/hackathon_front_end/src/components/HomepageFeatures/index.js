import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/looking_at_web.svg').default,
    description: (
      <>
        Opulence & Opportunities was designed from the ground up to be accessible and
        easy to use.
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: require('@site/static/img/tinkering.svg').default,
    description: (
      <>
        Opulence & Opportunities lets you select how you learn about different career paths, 
        with various different approaches so you can <code>find what works best for you</code>.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/around_the_world.svg').default,
    description: (
      <>
        Powered my modern technologies, you can access this site anywhere in the world 
        whenever you want as long as you have an internet connection.
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
