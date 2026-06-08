import { Column, Heading, Text } from "@once-ui-system/core";

export default function TermsPage() {
  return (
    <Column gap="l" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Heading as="h1" variant="display-strong-xl">
        Terms of Service
      </Heading>
      <Text className="text-slate-300 max-w-3xl">
        Read the Sightline terms for service usage, billing, acceptable use, and refund policy.
      </Text>
    </Column>
  );
}
