"use client";

import { Image } from "@imagekit/next";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Imag = ({ path, w, h, alt, className, tr }: ImageType) => {
  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={path}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      alt={alt}
      className={className}
    />
  );
};

export default Imag;
