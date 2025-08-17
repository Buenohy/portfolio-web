'use client';

import { useLocale } from 'next-intl';
import { FaFileDownload } from 'react-icons/fa';

type DownloadCVButtonProps = {
  text: string;
};

export default function DownloadCVButton({ text }: DownloadCVButtonProps) {
  const locale = useLocale();

  const cvPath =
    locale === 'pt'
      ? '/gabriel-bueno-curriculo-pt.pdf'
      : '/gabriel-bueno-resume-en.pdf';

  const downloadFilename =
    locale === 'pt'
      ? 'Curriculo-Gabriel-Bueno.pdf'
      : 'Resume-Gabriel-Bueno.pdf';

  return (
    <a
      href={cvPath}
      download={downloadFilename}
      rel="noopener noreferrer"
      className="button-primary mx-auto mt-10 flex w-fit items-center justify-center gap-2"
    >
      {text}
      <FaFileDownload />
    </a>
  );
}
