"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Button,
  Column,
  Logo,
  NavIcon,
  Row,
  SmartLink,
} from "@once-ui-system/core";

interface HeaderProps extends React.ComponentProps<typeof Row> { }

const navItems = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact Us",
    href: "/support",
  },
];

export const Header: React.FC<HeaderProps> = ({ ...flex }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Row
      as="header"
      fillWidth
      horizontal="between"
      vertical="center"
      paddingX="l"
      paddingY="s"
      background="page"
      position="sticky"
      top="0"
      zIndex={10}
      borderBottom="neutral-medium"
      {...flex}
    >
      {/* Logo */}
      <Row vertical="center">
        <Logo
          dark
          wordmark="/trademarks/wordmark-dark.svg"
          href="/"
          size="m"
        />
        <Logo
          light
          wordmark="/trademarks/wordmark-light.svg"
          href="/"
          size="m"
        />
      </Row>

      {/* Desktop Nav */}
      <Row
        gap="l"
        vertical="center"
        s={{ hide: true }}
      >
        {navItems.map((item) => (
          <SmartLink
            key={item.href}
            href={item.href}
            style={{
              opacity: pathname === item.href ? 1 : 0.75,
              color: pathname === item.href ? '#2656d7' : 'gray',
              padding: '0.25rem 0.5rem',

            }}
          >
            {item.label}
          </SmartLink>
        ))}
      </Row>

      {/* Desktop CTA */}
      <Row
        vertical="center"
        s={{ hide: true }}
      >
        <Button
          href="/pricing"
          size="m"
        >
          Install Free
        </Button>
      </Row>

      {/* Mobile Toggle */}
      <NavIcon
        hide
        s={{ hide: false }}
        isActive={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <Column
          position="absolute"
          top="56"
          left="0"
          fillWidth
          background="surface"
          border="surface"
          padding="m"
          gap="m"
          s={{ hide: false }}
        >
          {navItems.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
            >
              {item.label}
            </SmartLink>
          ))}

          <Button
            href="/pricing"
            fillWidth
          >
            Install Free
          </Button>
        </Column>
      )}
    </Row>
  );
};