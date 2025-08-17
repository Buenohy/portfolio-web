import React from 'react';

type YinYangIconProps = React.ComponentProps<'svg'>;

const YinYangIcon = ({ className, ...props }: YinYangIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      {...props}
    >
      <path
        fill="#fafafa"
        d="M53.2 10.8c11.7 11.7 11.7 30.7 0 42.4c-5.9 5.9-15.4 5.9-21.2 0S26.1 37.9 32 32s5.9-15.4 0-21.2s-15.4-5.9-21.2 0C22.5-.9 41.5-.9 53.2 10.8"
        strokeWidth="1"
        stroke="#000"
      />
      <g fill="#131315" strokeWidth="1" stroke="#0c0000">
        <path d="M10.8 53.2C-.9 41.5-.9 22.5 10.8 10.8c5.9-5.9 15.4-5.9 21.2 0c5.9 5.9 5.9 15.4 0 21.2s-5.9 15.4 0 21.2s15.4 5.9 21.2 0c-11.7 11.7-30.7 11.7-42.4 0" />
        <circle cx="42.6" cy="42.6" r="5.6" />
      </g>
      <circle
        cx="21.4"
        cy="21.4"
        r="5.6"
        fill="#fafafa"
        strokeWidth="1"
        stroke="#000"
      />
    </svg>
  );
};

export default YinYangIcon;
