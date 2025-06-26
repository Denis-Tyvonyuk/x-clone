import ImageKit from "imagekit";

export const imagekit = new ImageKit({
  privateKey: process.env.PRIVATE_KEY!, // Never expose this on client side
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});
