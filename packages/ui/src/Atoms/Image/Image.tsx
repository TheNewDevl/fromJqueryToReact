import { CSSProperties } from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  style?: CSSProperties;
}

/**
 * Image component
 * ## Usage
 * ```jsx
 * <Image src={logo} alt="logo" />
 * ```
 * @param src - Image source
 * @param alt - Image alt
 * @param width - Image width
 * @param rest - Object that can contain any css property
 */

export const Image = ({ src, alt, width, style }: ImageProps) => {
  return <img style={{ width: width, ...style }} src={src} alt={alt} />;
};

/** Created by carlos on 13/01/2023 */
