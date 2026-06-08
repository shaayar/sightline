import { Column, Heading, Text, Button } from "@once-ui-system/core";

type PricingCardProps = {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  highlight?: boolean;
  buttonLabel: string;
  href: string;
};

export function PricingCard({ title, price, subtitle, features, highlight, buttonLabel, href }: PricingCardProps) {
  return (
    <Column className={`section-card ${highlight ? "border-sightline-blue/70 bg-slate-900/90" : "bg-slate-950/80"}`} gap="m">
      {highlight ? <div className="rounded-full bg-sightline-blue/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-sightline-blue">Most Popular</div> : null}
      <Heading as="h3" variant="heading-strong-l" margin="0">{title}</Heading>
      <Text variant="heading-default-m">{price}</Text>
      <Text className="text-faint">{subtitle}</Text>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {features.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <Button href={href} variant={highlight ? "primary" : "secondary"}>
        {buttonLabel}
      </Button>
    </Column>
  );
}
