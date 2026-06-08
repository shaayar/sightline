import { Column, Heading, Text } from "@once-ui-system/core";

export default function PricingPage() {
  return (
    <Column gap="l" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Heading as="h1" variant="display-strong-xl">
        Fair pricing, built for developers
      </Heading>
      <Text className="text-slate-300 max-w-3xl">
        Choose the plan that fits your workflow—Free, Pro, or Team with advanced collaboration features.
      </Text>
    </Column>
  );
}
