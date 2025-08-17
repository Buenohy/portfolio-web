import { Icon } from '@iconify/react';

interface StackItem {
  id: number;
  icon: string;
  name: string;
  alt: string;
}

type StacksSectionProps = {
  translations: {
    sectionTitle: string;
    stacks: StackItem[];
  };
};

export default function StacksSection({ translations }: StacksSectionProps) {
  return (
    <section className="my-10 flex flex-col gap-10 px-5 pb-20" id="stacks">
      <h2 className="dark:text-white-pure text-center text-base font-extralight text-black uppercase">
        {translations.sectionTitle}
      </h2>
      <div className="grid grid-cols-3 justify-items-center gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {translations.stacks.map(({ id, icon, name, alt }) => (
          <div
            key={id}
            className="group flex w-fit flex-col items-center gap-4 sm:gap-8"
          >
            <div className="stack-card">
              <div className="flex h-full w-full items-center justify-center">
                <Icon
                  icon={icon}
                  aria-label={alt}
                  className="h-10 w-10 sm:h-15 sm:w-15 xl:h-20 xl:w-20"
                />
              </div>
            </div>
            <span className="stack-text">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
