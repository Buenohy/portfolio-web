import IconsSocialMedia from '@/components/IconsSocialMedia/IconsSocialMedia';
import { Link } from '@/i18n/navigation';
import { GoArrowUpRight } from 'react-icons/go';
import YinYangIcon from '@/components/YinYangIcon/YinYangIcon';

type ContactSectionProps = {
  translations: {
    mainHeading: string;
    subHeading: string;
    description: string;
    ctaButton: string;
    emailAddress: string;
  };
};

export default function ContactSection({ translations }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-main px-5 lg:px-10">
      <div className="flex flex-col items-center justify-center py-15 text-center md:mx-18 lg:mx-45 2xl:mx-237 2xl:py-64">
        <span className="animate-[spin_5000ms_linear_infinite] py-10">
          <YinYangIcon
            className="h-25 w-25 md:h-50 md:w-50"
            aria-label="Icon Yin Yang"
          />
        </span>
        <h2 className="text-dark-black py-1 text-4xl font-semibold sm:text-6xl">
          {translations.mainHeading}
        </h2>
        <h2 className="text-dark-black py-1 text-4xl font-semibold sm:text-6xl">
          {translations.subHeading}
        </h2>
        <p className="text-dark-black mt-5 mb-10 text-xl font-normal">
          {translations.description}
        </p>
        <div className="flex items-center justify-center gap-2">
          <Link
            href={`mailto:${translations.emailAddress}`}
            className="button-primary bg-white-pure dark:bg-dark-black flex items-center justify-center gap-2"
          >
            <span> {translations.ctaButton}</span>
            <GoArrowUpRight />
          </Link>
        </div>
        <div className="my-10">
          <IconsSocialMedia />
        </div>
      </div>
    </section>
  );
}
