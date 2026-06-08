import { Column, Heading, Text } from "@once-ui-system/core";
import { ContactForm } from "@/components/ContactForm";

export default function SupportPage() {
  return (
    <Column gap="l" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Heading as="h1" variant="display-strong-xl">
        Support & Contact
      </Heading>
      <Text className="text-slate-300 max-w-3xl">
        Have a question or need help? Send us a message and we’ll respond within 24-48 hours.
      </Text>
      <ContactForm />
    </Column>
  );
}
