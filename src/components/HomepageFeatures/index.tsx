import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Simple Integration",
    Svg: require("@site/static/img/open-source.svg").default,
    description: (
      <>
        A modern TypeScript library for Firo's JSON-RPC interface. Install from
        npm and start making typed RPC calls in minutes.
      </>
    ),
  },
  {
    title: "Full Spark Support",
    Svg: require("@site/static/img/security-on.svg").default,
    description: (
      <>
        Complete coverage of Firo's privacy technology — Spark addresses,
        balances, mints, spends, and anonymity set methods all included.
      </>
    ),
  },
  {
    title: "Strongly Typed",
    Svg: require("@site/static/img/code-review.svg").default,
    description: (
      <>
        Every method returns a fully typed response. Built on Axios with
        Promise-based API and batch request support targeting Node 24.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): ReactNode {
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
