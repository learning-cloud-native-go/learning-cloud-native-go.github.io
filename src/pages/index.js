/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

const repos = [
  {
    title: <>Website</>,
    url: 'https://github.com/learning-cloud-native-go/website',
    imageUrl: 'img/website.svg',
    description: (
      <>This is the repository for the website.</>
    ),
    gitHubStarUrl: 'https://ghbtns.com/github-btn.html?user=learning-cloud-native-go&repo=website&type=star&count=true',
    gitHubForkUrl: 'https://ghbtns.com/github-btn.html?user=learning-cloud-native-go&repo=website&type=fork&count=true',
  },
  {
    title: <>Code</>,
    url: 'https://github.com/learning-cloud-native-go/myapp',
    imageUrl: 'img/code.svg',
    description: (
      <>This is the repository for the "myapp" code.</>
    ),
    gitHubStarUrl: 'https://ghbtns.com/github-btn.html?user=learning-cloud-native-go&repo=myapp&type=star&count=true',
    gitHubForkUrl: 'https://ghbtns.com/github-btn.html?user=learning-cloud-native-go&repo=myapp&type=fork&count=true',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={withBaseUrl('docs/index')}>
              Get Started  →
            </Link>
          </div>
        </div>
      </header>
      <main>
        {repos && repos.length && (
          <section className={styles.repos}>
            <div className="container">
              <div className="row">
                {repos.map(({title, url, description, imageUrl, gitHubStarUrl, gitHubForkUrl}, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--6 text--center', styles.repo)}>
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.repoTypeImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <a href={url}><h3>{title}</h3></a>
                    <p>{description}</p>
                    <div>
                      <iframe src={gitHubStarUrl} frameBorder="0" scrolling="0" width="90px" height="20px"></iframe>
                      <iframe src={gitHubForkUrl} frameBorder="0" scrolling="0" width="90px" height="20px"></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
