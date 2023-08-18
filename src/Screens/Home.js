import React from "react";
import {
  Banner,
  Header,
  Features,
  HighQuality,
  Insights,
  Icongraphy,
  FAQs,
  Elevate,
  Footer,
  BigDiff,
  BigTest,
} from "../Containers";
import HeadingShrink from "../Containers/HeadingShrink";
import { BigDiffM , FeatureM, HQM, HeadingShrinkM , InsightM , IcongraphyM} from "../MobPages";

const Home = () => {
  const isMobile = window.screen.width < 600;
  return (
    <>
      <div>
        {isMobile ? (
          <>
            <Header />
            <Banner />
            <BigDiffM />
            <HeadingShrinkM />
            <FeatureM />
            <HQM />
            <InsightM />
            <IcongraphyM />
            <FAQs />
            <Elevate />
            <Footer />
          </>
        ) : (
          <>
            <Header />
            <Banner />
            <BigDiff />
            <HeadingShrink />
            <Features />
            <HighQuality />
            <Insights />

            <Icongraphy />

            <FAQs />
            <Elevate />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
