import { Column, Heading, Text } from "@once-ui-system/core";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Column className="section-card" gap="m">
      <div className="text-3xl">{icon}</div>
      <Heading as="h3" variant="heading-strong-l" margin="0">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Column>
  );
}
