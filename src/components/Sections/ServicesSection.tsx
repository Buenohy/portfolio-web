'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@iconify/react';

interface ServiceCardData {
  id: string;
  iconHeader: string;
  title: string;
  description: string;
  badges: string[];
  iconFooter: string;
}

type ServicesSectionProps = {
  translations: {
    sectionTitle: string;
    mainHeading: React.ReactNode;
    subHeading: React.ReactNode;
    cards: ServiceCardData[];
  };
};

export default function ServicesSection({
  translations,
}: ServicesSectionProps) {
  return (
    <section className="flex flex-col gap-10 px-5 pb-30 lg:px-10" id="services">
      <div className="2xl:mx-150">
        <div className="lg:flex lg:self-start">
          <div>
            <h2 className="text-dark-black dark:text-white-pure my-1 text-xl font-bold uppercase sm:text-2xl lg:mb-4">
              {translations.sectionTitle}
            </h2>
            <h3 className="text-dark-black dark:text-white-pure mt-1 mb-10 text-xl sm:text-5xl">
              {translations.mainHeading}
            </h3>
            <p className="text-dark-black dark:text-white-pure my-4 text-left font-light">
              {translations.subHeading}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {translations.cards.map(
            ({ id, iconHeader, title, description, badges, iconFooter }) => (
              <li key={id} className="lg:flex lg:flex-col">
                <article className="lg:flex lg:flex-col">
                  <Card className="shadow-dark-black/30 dark:shadow-white-pure/30 flex flex-col rounded-xl bg-gradient-to-b from-[#0c1c251a]/200 via-white to-white shadow-xl sm:flex-row sm:items-center sm:justify-center sm:gap-5 lg:flex lg:flex-col lg:gap-7 dark:border-[#fbfbff1a] dark:bg-gradient-to-b dark:from-[#29292b] dark:via-[#0c1c251a] dark:to-[#0c1c251a]">
                    <CardContent className="flex flex-col items-center justify-center sm:flex sm:flex-row lg:flex-col">
                      <CardHeader className="text-dark-black dark:text-white-pure items-center justify-center p-6 text-center sm:min-w-1/3">
                        <span className="flex items-center justify-center">
                          <Icon icon={iconHeader} className="h-30 w-30" />
                        </span>
                      </CardHeader>

                      <div className="px-5 sm:min-w-1/3 sm:p-6">
                        <CardTitle className="text-dark-black dark:text-white-pure text-3xl">
                          {title}
                        </CardTitle>
                        <CardDescription className="text-dark-black dark:text-white-pure my-4 text-base font-light">
                          {description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {badges.map((badge, idx) => (
                            <Badge
                              key={idx}
                              className="text-white-pure bg-dark-black dark:text-dark-black dark:bg-white-pure py-1 text-xs uppercase"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <CardFooter className="text-dark-black dark:text-white-pure items-center justify-center p-6 text-center sm:min-w-1/3">
                        <span className="flex items-center justify-center">
                          <Icon icon={iconFooter} className="h-30 w-30" />
                        </span>
                      </CardFooter>
                    </CardContent>
                  </Card>
                </article>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
