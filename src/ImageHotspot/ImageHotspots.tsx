import type { FC, HTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

export type ImageHotspotProps = HTMLAttributes<HTMLDivElement> & {
  image: {
    src: string;
    alt?: string;
  };
  data: {
    content: ReactNode;
    x: number;
    y: number;
  }[];
  imageProps?: HTMLAttributes<HTMLImageElement>;
  hotspotProps?: HTMLAttributes<HTMLDivElement>;
};

const ImageHotspots: FC<ImageHotspotProps> = (props) => {
  const {
    data,
    image,
    className,
    style,
    hotspotProps,
    imageProps,
    ...rest
  } = props;

  return (
    <div
      style={{
        position: "relative",
        height: "fit-content",
        ...style
      }}
      {...rest}
      className={clsx("relative hotspots-container", className)}
    >
      <img
        {...imageProps}
        src={image.src}
        alt={image.alt || ""}
        className={clsx("w-full", imageProps?.className)}
      />
      <>
        {data.map(({ x, y, content }, i) => (
          <div
            {...hotspotProps}
            key={i}
            style={{
              top: y + "%",
              left: x + "%",
              ...hotspotProps?.style
            }}
            className={clsx("absolute", hotspotProps?.className)}
          >
            {content}
          </div>
        ))}
      </>
    </div>
  );
};

export default ImageHotspots;
