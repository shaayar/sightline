import {
  Badge,
  Column,
  Heading,
  Text,
} from "@once-ui-system/core";

export default function PrivacyPage() {
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
          Privacy Policy
        </Badge>

        <Heading
          as="h1"
          variant="display-strong-xl"
          align="center"
        >
          Privacy First.
          <br />
          By Design.
        </Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
        >
          Sightline is designed to work locally in your browser.
          We collect as little information as possible.
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
        gap="32"
        maxWidth="m"
      >
        <Column gap="12">
          <Heading variant="heading-strong-l">
            Overview
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline is a browser extension that helps developers
            inspect spacing, typography, colors, layouts, and CSS
            rules directly on webpages.
          </Text>

          <Text onBackground="neutral-medium">
            We believe privacy should be simple. Sightline operates
            locally in your browser and is designed to minimize
            data collection.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Information We Access
          </Heading>

          <Text onBackground="neutral-medium">
            To provide inspection and debugging features, Sightline
            may access webpage content currently visible in the
            active browser tab.
          </Text>

          <Text onBackground="neutral-medium">
            This may include HTML elements, CSS styles, typography
            information, colors, spacing values, and layout data.
          </Text>

          <Text onBackground="neutral-medium">
            This access is required for Guide Lines, Box Model
            Inspector, Typography Inspector, Color Inspector,
            and CSS Cascade Debugger functionality.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Information We Store
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline stores settings locally using browser storage.
          </Text>

          <Text onBackground="neutral-medium">
            Examples include guide positions, preferences,
            and extension configuration settings.
          </Text>

          <Text onBackground="neutral-medium">
            This data remains on your device and is not transmitted
            to external servers.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Information We Do Not Collect
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline does not collect personal information,
            browsing history, authentication credentials,
            financial information, personal communications,
            or health information.
          </Text>

          <Text onBackground="neutral-medium">
            We do not build user profiles and we do not sell
            user data.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Data Sharing
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline does not sell, rent, or share user data
            with third parties.
          </Text>

          <Text onBackground="neutral-medium">
            Webpage content, inspection results, and browser
            activity are not transmitted to our servers.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Payments
          </Heading>

          <Text onBackground="neutral-medium">
            If paid plans are offered, payments are processed
            through trusted third-party payment providers.
          </Text>

          <Text onBackground="neutral-medium">
            We do not receive or store your full payment card
            information.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Analytics
          </Heading>

          <Text onBackground="neutral-medium">
            Sightline does not track which websites you visit
            or which elements you inspect.
          </Text>

          <Text onBackground="neutral-medium">
            If optional analytics are introduced in the future,
            this policy will be updated accordingly.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Security
          </Heading>

          <Text onBackground="neutral-medium">
            We take reasonable measures to protect user data
            and minimize data collection wherever possible.
          </Text>

          <Text onBackground="neutral-medium">
            Because Sightline primarily operates locally,
            most extension data never leaves your device.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Changes To This Policy
          </Heading>

          <Text onBackground="neutral-medium">
            We may update this Privacy Policy from time to time.
            Any updates will be reflected by revising the
            "Last Updated" date on this page.
          </Text>
        </Column>

        <Column gap="12">
          <Heading variant="heading-strong-l">
            Contact
          </Heading>

          <Text onBackground="neutral-medium">
            Questions about privacy or data handling?
          </Text>

          <Text>
            support@sightline.dev
          </Text>
        </Column>
      </Column>
    </Column>
  );
}