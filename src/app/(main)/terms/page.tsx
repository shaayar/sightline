import {
  Badge,
  Column,
  Heading,
  Text,
} from "@once-ui-system/core";

import Link from "next/link";

export default function TermsPage() {
  return (
    <Column
      fillWidth
      maxWidth="l"
      horizontal="center"
      gap="xl"
      paddingY="128"
    >
      {/* Hero */}

      <Column
        maxWidth="m"
        horizontal="center"
        align="center"
        gap="24"
      >
        <Badge>
          Terms of Service
        </Badge>

        <Heading
          as="h1"
          variant="display-strong-xl"
          align="center"
        >
          Terms Of Service
        </Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
        >
          Please read these terms carefully before using
          Sightline and any related services.
        </Text>

        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
        >
          Last Updated: June 2026
        </Text>
      </Column>

      {/* Content */}

      <Column
        fillWidth
        maxWidth="m"
        gap="32"
      >
        <Column gap="12">
          <Heading variant="heading-strong-l">
            Acceptance Of Terms
          </Heading>

          <Text onBackground="neutral-medium">
            By installing, accessing, or using Sightline,
            you agree to be bound by these Terms of Service.
            If you do not agree with these terms, do not use
            the extension.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Description Of Service
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline is a browser extension that provides
            visual inspection and debugging tools for web
            developers and designers.
          </Text>

          <Text onBackground="neutral-medium">
            Features may include guide lines, box model
            inspection, typography analysis, color inspection,
            and CSS cascade debugging.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Free And Pro Features
          </Heading>

          <Text onBackground="neutral-medium">
            Certain features may be available at no cost,
            while others may require a paid subscription
            or one-time purchase.
          </Text>

          <Text onBackground="neutral-medium">
            Feature availability, pricing, and limitations
            may change over time.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Payments And Refunds
          </Heading>

          <Text onBackground="neutral-medium">
            Paid plans may be offered through third-party
            payment providers.
          </Text>

          <Text onBackground="neutral-medium">
            Unless otherwise stated, purchases may be eligible
            for a refund within 14 days of the original purchase
            date.
          </Text>

          <Text onBackground="neutral-medium">
            Refund requests may be submitted by contacting
            support@sightline.dev.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Acceptable Use
          </Heading>

          <Text onBackground="neutral-medium">
            You agree not to use Sightline in any manner that
            violates applicable laws, regulations, or the rights
            of others.
          </Text>

          <Text onBackground="neutral-medium">
            You may not attempt to reverse engineer, abuse,
            disrupt, or interfere with the extension's normal
            operation.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Intellectual Property
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline, including its branding, design,
            documentation, and software, is protected by
            applicable intellectual property laws.
          </Text>

          <Text onBackground="neutral-medium">
            No ownership rights are transferred through
            use of the extension.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Limitation Of Liability
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline is provided on an "as is" and
            "as available" basis without warranties of
            any kind.
          </Text>

          <Text onBackground="neutral-medium">
            To the maximum extent permitted by law,
            we shall not be liable for any indirect,
            incidental, special, consequential, or
            punitive damages arising from the use
            of the extension.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Service Availability
          </Heading>

          <Text onBackground="neutral-medium">
            We may modify, suspend, or discontinue
            features or services at any time without
            prior notice.
          </Text>

          <Text onBackground="neutral-medium">
            We do not guarantee uninterrupted or
            error-free operation.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Governing Law
          </Heading>

          <Text onBackground="neutral-medium">
            These Terms of Service shall be governed
            by and interpreted in accordance with the
            laws applicable in the jurisdiction in which
            the service operator resides.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Changes To These Terms
          </Heading>

          <Text onBackground="neutral-medium">
            We may update these Terms of Service from
            time to time. Continued use of Sightline
            after changes become effective constitutes
            acceptance of the revised terms.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Contact
          </Heading>

          <Text onBackground="neutral-medium">
            Questions regarding these terms can be directed to:
          </Text>

          <Text>
            <Link href="mailto:shubhamdave171204@gmail.com">shubhamdave171204@gmail.com</Link>
          </Text>
        </Column>
      </Column>
    </Column>
  );
}