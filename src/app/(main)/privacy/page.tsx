import { Column, Heading, Text } from "@once-ui-system/core";

export default function PrivacyPage() {
  return (
    <Column gap="l" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Heading as="h1" variant="display-strong-xl">
        Privacy Policy
      </Heading>
      <Text className="text-slate-300 max-w-3xl">
        Learn how Sightline handles data collection, storage, and user rights in a simple, developer-friendly format.
      </Text>
    </Column>
  );
}
