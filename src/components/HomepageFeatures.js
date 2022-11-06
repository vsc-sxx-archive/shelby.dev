import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Fast and Smooth',
    Svg: require('@site/static/img/undraw_fast_loading.svg').default,
    description: (
      <>
        ROM's by ShelbyProject is faster and smoother than other Android distributions.
      </>
    ),
  },
  {
    title: 'Open-Source',
    Svg: require('@site/static/img/undraw_design_components.svg').default,
    description: (
      <>
        We open the tree after we fix all the bugs.
      </>
    ),
  },
  {
    title: 'Privacy',
    Svg: require('@site/static/img/undraw_private_data.svg').default,
    description: (
      <>
        ShelbyProject never asks for your personal data.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
