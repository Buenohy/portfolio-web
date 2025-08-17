'use client';

import { Element } from 'react-scroll';

type PageWrapperProps = {
  home: React.ReactNode;
  portfolio: React.ReactNode;
  about: React.ReactNode;
  services: React.ReactNode;
  contact: React.ReactNode;
};

export default function PageWrapper({
  home,
  portfolio,
  about,
  services,
  contact,
}: PageWrapperProps) {
  return (
    <main className="scroll-smooth">
      <Element name="home">{home}</Element>

      <Element name="portfolio">{portfolio}</Element>

      <Element name="about">{about}</Element>

      <Element name="services">{services}</Element>

      <Element name="contact">{contact}</Element>
    </main>
  );
}
