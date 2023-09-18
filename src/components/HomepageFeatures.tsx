/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  link: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Students",
    description: (
      <>
        If you want to increase your chances of being accepted into Delta Winter
        of Code we encourage you to read this guide! It is particularly helpful
        for a good project proposal and how students should interact with the
        organisations they are interested in.
      </>
    ),
    link: (
      <Link
        className="button button--secondary button--lg z-[100]"
        to="/docs/student-guides/guide"
      >
        Students Guide
      </Link>
    ),
  },
  {
    title: "Mentors",
    description: (
      <>
        Mentors are the most essential element of Delta Winter of Code, and they
        have a lot of cumulative expertise about how to mentor students
        successfully. It is not as simple as it appears, and this article offers
        helpful hints and best practices.
      </>
    ),
    link: (
      <Link
        className="button button--secondary button--lg "
        to="/docs/mentor-guides/guide"
      >
        Mentor Guide
      </Link>
    ),
  },
];

function Feature({ title, link, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center padding-horiz--md z-50">
        <h3>{title}</h3>
        <p>{description}</p>
        {link}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div className="container">
        <div className={`row ${styles.features}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
