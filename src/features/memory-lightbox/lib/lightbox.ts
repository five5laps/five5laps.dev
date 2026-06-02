import type { MemoryMedia } from "@entities/memory-album";
import type { Slide } from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

export const lightboxPlugins = [Video];

export const toLightboxSlides = (media: MemoryMedia[]): Slide[] =>
  media.map((item) => {
    if (item.type === "video") {
      return {
        type: "video",
        sources: [
          {
            src: item.src,
            type: item.mimeType ?? "video/mp4",
          },
        ],
      };
    }

    return {
      src: item.src,
      alt: item.alt,
    };
  });
