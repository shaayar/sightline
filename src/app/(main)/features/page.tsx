import {
  Badge,
  Button,
  Column,
  Heading,
  Row,
  Text,
} from "@once-ui-system/core";
import {FeaturesShowcase} from "../../../components/Showcase";

export default function FeaturesPage() {
  return (
    <Column
      fillWidth
      gap="xl"
      paddingY="128"
      horizontal="center"
    >
      <Column
        maxWidth="m"
        gap="24"
        horizontal="center"
        align="center"
      >
        <Badge>
          Features
        </Badge>

        <Heading
          as="h1"
          variant="display-strong-xl"
          align="center"
        >
          Everything you need
          <br />
          to inspect like a pro.
        </Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
        >
          Inspect spacing, typography, colors,
          layouts, and CSS cascade directly on the page.
          Built for developers, freelancers, and design QA teams.
        </Text>

        <Row
          gap="m"
          wrap
          horizontal="center"
        >
          <Button href="/pricing">
            Install Free on Chrome
          </Button>

          <Button
            href="/faq"
            variant="secondary"
          >
            Learn More
          </Button>
        </Row>
      </Column>

      <FeaturesShowcase />
    </Column>
  );
}