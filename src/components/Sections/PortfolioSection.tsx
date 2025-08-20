import { Link } from '@/i18n/navigation';
import { GoArrowRight } from 'react-icons/go';
import { ProjectsCarousel } from '@/components/ProjectsCarousel/ProjectsCarousel';
import { Project } from '@/types/project-types';

type PortfolioSectionProps = {
  translations: {
    title: string;
    viewMoreButton: string;
    projects: Record<string, Project>;
    seeMoreButton: string;
  };
};

export default function PortfolioSection({
  translations,
}: PortfolioSectionProps) {
  const carouselProps = {
    projects: Object.values(translations.projects),
    seeMoreButtonText: translations.seeMoreButton,
  };

  return (
    <section className="pb-30" id="portfolio">
      <header className="pb-10">
        <h2 className="text-dark-black dark:text-white-pure my-1 text-center text-xl uppercase md:text-2xl lg:text-2xl">
          {translations.title}
        </h2>
      </header>

      <ProjectsCarousel {...carouselProps} />

      <div className="mt-35 flex items-center justify-center md:mt-10">
        <Link
          href="/portfolio"
          className="button-primary button-outline flex items-center justify-center gap-2"
        >
          <span>{translations.viewMoreButton}</span>
          <GoArrowRight />
        </Link>
      </div>
    </section>
  );
}
