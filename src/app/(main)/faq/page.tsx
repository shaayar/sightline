import {
  Accordion,
  Badge,
  Button,
  Column,
  Heading,
  Row,
  Text,
} from "@once-ui-system/core";

interface FaqProps {
  title: string;
  content: string;
}

export const faq: FaqProps[] = [
  {
    title: "What is Sightline?",
    content:
      "Sightline is a Chrome extension that helps developers and designers inspect spacing, typography, colors, layouts, and CSS rules directly on a webpage.",
  },
  {
    title: "Does Sightline work on localhost?",
    content:
      "Yes. Sightline works on localhost, local development servers, staging environments, and production websites.",
  },
  {
    title: "What are Guide Lines?",
    content:
      "Guide Lines let you place horizontal and vertical guides anywhere on a page. They persist across sessions and help recreate layouts with pixel-perfect accuracy.",
  },
  {
    title: "What is the Box Model Inspector?",
    content:
      "The Box Model Inspector visualizes margins, padding, borders, and content areas for any element, making spacing issues instantly visible.",
  },
  {
    title: "What is the CSS Cascade Debugger?",
    content:
      "The Cascade Debugger shows all CSS rules affecting an element, including specificity scores, overridden properties, and the winning selector.",
  },
  {
    title: "What's included in the Free plan?",
    content:
      "The Free plan includes up to 5 guide lines, Box Model Inspector access, localhost support, and basic website inspection features.",
  },
  {
    title: "What's included in Pro?",
    content:
      "Pro includes unlimited guides, unlimited inspections, CSS Cascade Debugger, Typography Inspector, Color Inspector, and Guide Presets.",
  },
  {
    title: "Do you offer a lifetime plan?",
    content:
      "Yes. The Lifetime plan includes everything in Pro with a one-time payment and future updates.",
  },
  {
    title: "Do you collect browsing data?",
    content:
      "No. Sightline does not track the websites you visit. Inspection data and preferences remain local to your browser.",
  },
  {
    title: "How do I get support?",
    content:
      "You can contact us through the support page or email support@sightline.dev for help, bug reports, billing questions, or feature requests.",
  },
];

export default function FAQPage() {
  return (
    <Column
      fillWidth
      gap="xl"
      paddingY="128"
      horizontal="center"
    >
      {/* Hero */}

      <Column
        maxWidth="m"
        gap="24"
        horizontal="center"
        align="center"
      >
        <Badge>
          FAQ
        </Badge>

        <Heading
          as="h1"
          variant="display-strong-xl"
          align="center"
        >
          Questions?
          <br />
          We've got answers.
        </Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
        >
          Everything you need to know about
          Sightline, pricing, features,
          privacy, and support.
        </Text>

        <Row
          gap="m"
          wrap
          horizontal="center"
        >
          <Button href="/pricing">
            View Pricing
          </Button>

          <Button
            href="/support"
            variant="secondary"
          >
            Contact Support
          </Button>
        </Row>
      </Column>

      {/* FAQ */}

      <Column
        fillWidth
        maxWidth="l"
        gap="8"
      >
        {faq.map((item, index) => (
          <Column
            key={index}
            fillWidth
            border
            radius="l"
            padding="4"
            background="overlay"
          >
            <Accordion
              title={
                <Text variant="body-default-s">
                  {item.title}
                </Text>
              }
            >
              <Text
                variant="body-default-s"
                onBackground="neutral-medium"
              >
                {item.content}
              </Text>
            </Accordion>
          </Column>
        ))}
      </Column>
    </Column>
  );
}