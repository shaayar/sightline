import { Column } from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";

import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
// import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingPreview } from "@/components/PricingPreview";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />

      <Hero />
      <ProblemSection />
      <FeatureShowcase />
      <PricingPreview />
      {/* 
      <ComparisonTable />
      */}
      <CTASection /> 
    </Column>
  );
}