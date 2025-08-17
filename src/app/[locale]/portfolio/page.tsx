import { ProjectsCarousel } from '@/components/ProjectsCarousel/ProjectsCarousel';
import ContactSection from '@/components/Sections/ContactSection';
import { getTranslations } from 'next-intl/server';
import { Project } from '@/types/project-types';

export default async function PortfolioPage() {
  const tPortfolio = await getTranslations('PortfolioPage');
  const tProjectsData = await getTranslations('ProjectDetailsPage');
  const tContact = await getTranslations('ContactSection');

  const projectsObject = tProjectsData.raw('projects');
  const projectsArray = Object.values(projectsObject) as Project[];

  const contactTranslations = {
    mainHeading: tContact('mainHeading'),
    description: tContact('description'),
    ctaButton: tContact('ctaButton'),
    emailAddress: tContact('emailAddress'),
  };

  return (
    <main>
      <section className="px-5 pt-45 pb-10 lg:px-10">
        <div className="text-center">
          <h1 className="my-1 text-6xl font-semibold dark:text-white">
            {tPortfolio('title')}
          </h1>
          <p className="my-5 text-center text-xl font-light text-black lg:text-left dark:text-white">
            {tPortfolio.rich('description', {
              br: () => <br />,
            })}
          </p>
        </div>
      </section>

      <ProjectsCarousel variant="portfolio" projects={projectsArray} />

      <ContactSection translations={contactTranslations} />
    </main>
  );
}
