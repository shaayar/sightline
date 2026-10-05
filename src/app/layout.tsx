import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';

import classNames from 'classnames';
import { fonts, style, dataStyle } from '@/resources/once-ui.config';
import { Providers } from '@/components/Providers';
import { Column, Flex, ThemeInit } from '@once-ui-system/core';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <ThemeInit
          config={{
            theme: style.theme,
            brand: style.brand,
            accent: style.accent,
            neutral: style.neutral,
            solid: style.solid,
            'solid-style': style.solidStyle,
            border: style.border,
            surface: style.surface,
            transition: style.transition,
            scaling: style.scaling,
            'viz-style': dataStyle.variant,
          }}
        />
        <meta name="google-site-verification" content="6Z4wzQGE7Cw5Yw8NtFUiwqW0VH8mBFfgwMoFajKTuhM" />
      </head>
      <Providers>
        <Column as="body" background="page" cz-shortcut-listen="false" fillWidth margin="0" padding="0">
          {children}
        </Column>
      </Providers>
    </Flex>
  );
}
