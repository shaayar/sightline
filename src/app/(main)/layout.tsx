import classNames from 'classnames';

import { baseURL, meta } from '@/resources/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Meta, Schema, Column, Flex, Mask, MatrixFx } from '@once-ui-system/core';

export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  });
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Column fillWidth margin="0" padding="0">
        <Column fillWidth maxHeight="100dvh" aspectRatio="1" horizontal="center" position="absolute" top="0" left="0">
          <Mask maxWidth="m" x={50} y={0} radius={50}>
            <MatrixFx
              size={1.5}
              spacing={5}
              fps={24}
              colors={['brand-solid-strong']}
              flicker
            />
          </Mask>
        </Column>
        <Header />
        <main className={classNames('relative', 'z-10')}>
          <Column fillWidth horizontal="center" paddingX="l">
            <Column fillWidth maxWidth="xl">
              {children}
            </Column>
          </Column>
        </main>
        <Footer />
      </Column>
    </>
  );
}
