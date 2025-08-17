import React, { ElementType } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

interface SocialIconItem {
  id: number;
  icon: ElementType;
  link: string;
  label: string;
}

const socialLinks: SocialIconItem[] = [
  {
    id: 1,
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/gabriel-bueno-hygino',
    label: 'Follow me on Linkedin',
  },
  {
    id: 2,
    icon: FaGithub,
    link: 'https://github.com/Buenohy',
    label: 'Follow me on Github',
  },
];

interface IconsSocialMediaContainerProps {
  containerClassName?: string;
  iconBaseClassName?: string;
}

export default function IconsSocialMedia({
  containerClassName = '',
  iconBaseClassName = '',
}: IconsSocialMediaContainerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-5 ${containerClassName}`}
    >
      {socialLinks.map(({ icon: IconComponent, link, label }, idx) => (
        <a
          key={idx}
          href={link}
          target="_blanck"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <IconComponent
            className={`${iconBaseClassName} text-dark-black h-10 w-10 transform cursor-pointer p-2 text-sm transition-transform duration-500 ease-in-out hover:scale-125 focus:scale-125 active:scale-125`}
          />
        </a>
      ))}
    </div>
  );
}
