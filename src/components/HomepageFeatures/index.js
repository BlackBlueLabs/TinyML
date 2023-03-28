import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Introduction into machine learning',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Machine learning is a field of computer science that gives computers the ability to learn without being explicitly programmed.
      </>
    ),
  },
  {
    title: 'Microcontrollers',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A microcontroller is a small computer on a single integrated circuit containing a processor core, memory, and programmable input/output peripherals.
      </>
    ),
  },
  {
    title: 'TinyML',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        TinyML is a subset of machine learning that is designed to run on resource-constrained devices. Devices that are considered resource-constrained include microcontrollers, mobile phones, and wearables.
        Our goal is to make TinyML accessible to everyone.
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
