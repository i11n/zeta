import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Intuitive, yet advanced',
    description: (
      <>
        The Zeta design system guidelines ensure that implementations are
        intuitive, yet highly configurable. z11 implements these guidelines,
        offering ease-of-use and quick development, yet provides advanced
        control as skills sets and functional needs grow.
      </>
    ),
  },
  {
    title: 'Smooth, clean base',
    description: (
      <>
        The Zeta design system guidelines ensure that there is consistency
        within a document or application, and that content is experienced by all
        audiences. z11 implements these guidelines, providing a no-fuss base on
        which to build.
      </>
    ),
  },
  {
    title: 'Component power',
    description: (
      <>
        The Zeta design system guidelines defines components and component
        features. z11 implements these guidelines to give great power to any
        skill of developer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
