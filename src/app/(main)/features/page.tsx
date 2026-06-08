import { Column, Heading, Text, Button } from "@once-ui-system/core";

export default function FeaturesPage() {
  return (
    <Column gap="l" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Heading as="h1" variant="display-strong-xl">
        Everything you need to inspect like a pro
      </Heading>
      <Text className="text-slate-300 max-w-3xl">
        Sightline brings guide lines, box model overlays, and CSS cascade debugging together in one Chrome extension for developers and designers.
      </Text>
      <Button href="/pricing">See pricing</Button>
    </Column>
  );
}
