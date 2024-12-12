import Image from 'next/image';
import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomImage: FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
    </div>
  );
};

export default CustomImage;
