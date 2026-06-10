import { Column, Badge, Heading, Row, Text } from "@once-ui-system/core";
import { Background1 } from "./Background1";
import { Faq3 } from "./FAQ";
import { Plans3 } from "./Plans";
import { Testimonial4 } from "./Testimonials";

export const Pricing1 = () => {
  return (
    <Column as="section" fillWidth fitHeight horizontal="center" gap="xl">
      <Column
        fillWidth
        horizontal="center"
        paddingY="128"
        gap="24">

        <Badge> Pricing </Badge>

        <Heading
          variant="display-strong-xl"
          align="center"
        >
          Simple pricing.
          <br />
          No surprises.
        </Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
        >
          Start free. Upgrade only when you need unlimited guides, inspections, and CSS debugging.
        </Text>
      </Column>


      <Plans3 maxWidth="m" />
      
      <Faq3
        maxWidth="m"
        title="Frequently asked questions"
        description="Get to know more about our product"
        paddingBottom="64"
        categories={[
          {
            label: "Getting Started",
            value: "installation",
            content: [
              {
                title: "How do I install Sightline?",
                content:
                  "Install Sightline from the Chrome Web Store, pin the extension, and click the icon to start inspecting any webpage.",
              },
              {
                title: "Does Sightline work on localhost?",
                content:
                  "Yes. Sightline works on localhost, local development servers, staging environments, and production websites.",
              },
              {
                title: "Does it work on Chrome internal pages?",
                content:
                  "No. Chrome blocks extensions from running on browser-internal pages such as chrome:// pages and the Chrome Web Store.",
              },
            ],
          },

          {
            label: "Features",
            value: "features",
            content: [
              {
                title: "How do Guide Lines work?",
                content:
                  "Create horizontal and vertical guides at any position on the page. Guides persist between sessions and sync across tabs.",
              },
              {
                title: "What is the Box Model Inspector?",
                content:
                  "Hover any element to visualize margins, padding, borders, and content areas. Perfect for checking layouts and spacing.",
              },
              {
                title: "What is the CSS Cascade Debugger?",
                content:
                  "The Cascade Debugger shows every CSS rule affecting an element, including specificity, overridden properties, and the winning selector.",
              },
              {
                title: "Can I inspect typography and colors?",
                content:
                  "Yes. Sightline can display font information, sizing, weights, line-height values, and color information directly on the page.",
              },
            ],
          },

          {
            label: "Pricing",
            value: "pricing",
            content: [
              {
                title: "What's included in the Free plan?",
                content:
                  "Free includes up to 5 guide lines, Box Model Inspector access, localhost support, and basic website inspection tools.",
              },
              {
                title: "What's included in Pro?",
                content:
                  "Pro unlocks unlimited guides, unlimited inspections, CSS Cascade Debugger, Typography Inspector, Color Inspector, and Guide Presets.",
              },
              {
                title: "Can I try Pro before purchasing?",
                content:
                  "Yes. Every Pro subscription includes a 7-day free trial so you can evaluate the advanced inspection features.",
              },
              {
                title: "Do you offer a lifetime plan?",
                content:
                  "Yes. The Lifetime plan includes all Pro features with a one-time payment and future updates.",
              },
            ],
          },

          {
            label: "Privacy",
            value: "privacy",
            content: [
              {
                title: "Does Sightline collect browsing history?",
                content:
                  "No. Sightline runs locally in your browser and does not track the websites you visit.",
              },
              {
                title: "What data does Sightline store?",
                content:
                  "Guide positions, preferences, and settings are stored locally on your device using browser storage.",
              },
              {
                title: "Is my data shared with third parties?",
                content:
                  "No. Sightline does not sell or share your browsing activity or inspection data.",
              },
            ],
          },
        ]}
      />
    </Column>
  );
};

export default Pricing1;