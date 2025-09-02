import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, alt, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
      };
      return;
    }

    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);

    return () => {
      img.onload = null;
    };
  }, [src, width, height]);

  return (
    <img
      className={currentSrc === src ? className : `${className} blur-sm`}
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
export default ImageComponent;
