import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types/project-types';

interface ProjectCardProps {
  project: Project;
  href: string;
}

export function ProjectCard({ project, href }: ProjectCardProps) {
  const { src, alt, title, tag, badges } = project;

  return (
    <div className="flex flex-col">
      <Card className="bg-main text-white-pure h-fit w-full rounded-lg border border-[#fbfbff1a] p-0">
        <CardContent className="aspect-square h-fit w-full p-0">
          <Link href={href}>
            <Image
              src={src}
              alt={alt}
              width={370}
              height={370}
              className="h-full w-full cursor-pointer rounded-lg object-cover"
            />
          </Link>
        </CardContent>
      </Card>
      <CardFooter className="mt-5 flex h-fit flex-col items-start px-0">
        <h2 className="text-dark-black dark:text-white-pure mb-2 text-xl font-bold">
          {title}
        </h2>
        <h3 className="text-tag-white dark:text-tag-dark py-1 text-sm uppercase">
          {tag}
        </h3>
        <div className="my-5 flex flex-wrap gap-2">
          {badges.map((badge, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="text-dark-black dark:text-white-pure border-main bg-transparent px-2 py-1 text-xs font-semibold uppercase"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </div>
  );
}
