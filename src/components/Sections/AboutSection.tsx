import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { GoArrowUpRight } from 'react-icons/go';

type AboutSectionProps = {
  translations: {
    sectionTitle: string;
    mainHeading: string;
    paragraph1: React.ReactNode;
    paragraph2: React.ReactNode;
    paragraph3: React.ReactNode;
    contactButton: string;
    linkedinButton: string;
  };
};

export default function AboutSection({ translations }: AboutSectionProps) {
  return (
    <section className="px-5 lg:px-10" id="about">
      <div className="grid 2xl:mx-195">
        <div className="text-center">
          <h2 className="text-dark-black dark:text-white-pure text-xl md:text-2xl">
            {translations.sectionTitle}
          </h2>
          <h3 className="text-dark-black dark:text-white-pure text-4xl font-bold md:text-4xl">
            {translations.mainHeading}
          </h3>
        </div>
        <div className="my-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-center">
          <Image
            src="/images/foto-perfil.jpg"
            alt="Foto de perfil de Gabriel Bueno"
            width={484}
            height={484}
            className="mx-auto my-5 max-h-[464px] w-full max-w-[464px] rounded-2xl object-cover"
          />
          <div className="my-6 space-y-6">
            <p className="text-dark-black dark:text-white-pure text-center lg:text-left lg:leading-7">
              {translations.paragraph1}
            </p>
            <p className="text-dark-black dark:text-white-pure text-center lg:text-left lg:leading-7">
              {translations.paragraph2}
            </p>
            <p className="text-dark-black dark:text-white-pure text-center lg:text-left lg:leading-7">
              {translations.paragraph3}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-10 text-center lg:mx-auto lg:flex-row">
          <Link href="#contact" className="button-primary">
            <span>{translations.contactButton}</span>
          </Link>
          <a
            href="https://www.linkedin.com/in/gabriel-bueno-hygino"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary button-outline flex items-center justify-center gap-2"
          >
            <span>{translations.linkedinButton}</span>
            <GoArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
