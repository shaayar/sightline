"use client";

import React from "react";
import {
  Background,
  Button,
  Column,
  Grid,
  Heading,
  Icon,
  Input,
  Row,
  Text,
  Textarea,
} from "@once-ui-system/core";

const contacts = [
  {
    title: "Email Support",
    description:
      "Questions, bug reports, billing issues, or feature requests.",
    icon: "email",
    link: {
      label: "support@sightline.dev",
      href: "mailto:support@sightline.dev",
    },
  },
  {
    title: "Documentation & FAQ",
    description:
      "Find answers, guides, troubleshooting help, and pricing details.",
    icon: "book",
    link: {
      label: "Browse FAQ",
      href: "/faq",
    },
  },
];

export const SupportPageContent = () => {
  return (
    <Column fillWidth gap="xl">
      {/* Hero */}
      <Column
        fillWidth
        horizontal="center"
        align="center"
        paddingY="128"
        gap="24"
      >
        <Heading
          as="h1"
          variant="display-strong-xl"
          align="center"
        >
          Need help with
          <br />
          Sightline?
        </Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
          style={{ maxWidth: "800px" }}
        >
          Questions, bug reports, feature requests,
          billing issues, or feedback.
          We're happy to help.
        </Text>

        <Row
          gap="m"
          horizontal="center"
          wrap
        >
          <Button href="/faq">
            Browse FAQ
          </Button>

          <Button
            href="mailto:support@sightline.dev"
            variant="secondary"
          >
            Email Support
          </Button>
        </Row>
      </Column>

      {/* Contact Section */}
      <Row fillWidth horizontal="center" paddingBottom="128">
        <Column fillWidth maxWidth="m">
          <Row
            fillWidth
            horizontal="center"
            borderTop="neutral-medium"
            borderX="neutral-medium"
            paddingX="l"
            paddingY="24"
            textVariant="body-default-s"
            onBackground="brand-weak"
          >
            Support
          </Row>

          <Row
            fillWidth
            horizontal="center"
            borderTop="neutral-medium"
            borderX="neutral-medium"
          >
            <Column
              maxWidth="xs"
              gap="16"
              paddingY="48"
              paddingX="24"
            >
              <Heading
                variant="display-strong-s"
                align="center"
              >
                Get in touch
              </Heading>

              <Text
                variant="body-default-xl"
                align="center"
                wrap="balance"
                onBackground="neutral-weak"
              >
                We'll get back to you as soon as possible.
              </Text>
            </Column>
          </Row>

          <Grid
            fillWidth
            borderTop="neutral-medium"
            borderLeft="neutral-medium"
            columns="2"
            s={{ columns: 1 }}
          >
            {contacts.map((contact, index) => (
              <Column
                key={index}
                fillWidth
                gap="8"
                padding="24"
                borderRight="neutral-medium"
                borderBottom="neutral-medium"
              >
                <Background
                  position="absolute"
                  left="0"
                  top="0"
                  mask={{
                    x: 75,
                    y: -50,
                    radius: 20,
                  }}
                  grid={{
                    display: true,
                    width: "8px",
                    height: "8px",
                    color: "neutral-border-medium",
                  }}
                />

                <Icon
                  name={contact.icon}
                  size="s"
                  padding="12"
                  radius="full"
                  background="brand-alpha-weak"
                  onBackground="brand-weak"
                />

                <Heading
                  marginTop="16"
                  marginLeft="12"
                  as="h3"
                  variant="heading-strong-l"
                >
                  {contact.title}
                </Heading>

                <Text
                  marginLeft="12"
                  marginBottom="16"
                  variant="body-default-s"
                  onBackground="neutral-medium"
                  wrap="balance"
                >
                  {contact.description}
                </Text>

                <Button
                  size="s"
                  variant="secondary"
                  href={contact.link.href}
                  data-border="rounded"
                >
                  {contact.link.label}
                </Button>
              </Column>
            ))}
          </Grid>

          <Row
            border="neutral-medium"
            m={{ direction: "column" }}
          >
            {/* Form */}
            <Column fillWidth>
              <Column
                fillWidth
                gap="16"
                paddingX="l"
                paddingY="xl"
              >
                <Column gap="s" marginBottom="32">
                  <Heading variant="display-strong-s">
                    Contact Support
                  </Heading>

                  <Text
                    variant="body-default-xl"
                    onBackground="neutral-medium"
                    wrap="balance"
                  >
                    Describe your issue, question,
                    or feature request and we'll
                    get back to you as soon as possible.
                  </Text>
                </Column>

                <Column gap="-1">
                  <Input
                    radius="top"
                    id="name"
                    label="Name"
                    type="text"
                  />

                  <Input
                    radius="none"
                    id="email"
                    label="Email"
                    type="email"
                  />

                  <Textarea
                    radius="bottom"
                    id="message"
                    label="Message"
                    lines="auto"
                    style={{
                      minHeight: "8rem",
                    }}
                  />
                </Column>

                <Button
                  id="support-submit"
                  arrowIcon
                >
                  Submit Request
                </Button>
              </Column>
            </Column>

            {/* Support Info Panel */}
            <Column
              fillWidth
              background="surface"
              borderLeft="neutral-medium"
            >
              <Column
                gap="24"
                padding="xl"
              >
                <Heading variant="heading-strong-l">
                  Response Times
                </Heading>

                <Column gap="12">
                  <Text>💳 Billing Issues</Text>
                  <Text onBackground="neutral-weak">
                    Within 24 hours
                  </Text>
                </Column>

                <Column gap="12">
                  <Text>🐛 Bug Reports</Text>
                  <Text onBackground="neutral-weak">
                    Within 48 hours
                  </Text>
                </Column>

                <Column gap="12">
                  <Text>💡 Feature Requests</Text>
                  <Text onBackground="neutral-weak">
                    Within 7 days
                  </Text>
                </Column>

                <Column gap="12">
                  <Text>✉️ Email</Text>
                  <Text onBackground="neutral-weak">
                    support@sightline.dev
                  </Text>
                </Column>
              </Column>
            </Column>


          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default SupportPageContent;