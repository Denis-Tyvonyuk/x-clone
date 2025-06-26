"use client";

import { Video } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoTypes = {
  path: string;
  className?: string;
};

const Vide = ({ path, className }: VideoTypes) => {
  return (
    <Video
      urlEndpoint={urlEndpoint}
      src={path}
      className={className}
      transformation={[{ width: "1920", height: "1080", quality: 90 }]}
      controls
    />
  );
};

export default Vide;
