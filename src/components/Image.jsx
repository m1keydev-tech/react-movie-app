import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, alt, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div>
      <img
        className={currentSrc === src ? className : `${className} blur-sm`}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};
export default ImageComponent;
