import React from 'react';

export default function Image({ src, className, ...props }) {
  return <img src={src} className={className} alt='' />;
}
