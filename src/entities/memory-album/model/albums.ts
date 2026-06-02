import chupep from "@assets/memories/images/chupep.png";
import skebob from "@assets/memories/images/skebob.png";
import type { MemoryAlbum } from "./types";

/**
 * Add a new album: create an entry with unique `id`, `title`, and `media` array.
 *
 * Image example:
 *   import photo from "@images/memories/photo.png";
 *   { id: "photo-1", type: "image", src: photo, alt: "Description" }
 *
 * Video example:
 *   import clip from "@images/memories/clip.mp4";
 *   { id: "clip-1", type: "video", src: clip, mimeType: "video/mp4" }
 */
export const albums: MemoryAlbum[] = [
  {
    id: "chupep",
    title: "Чюпеп",
    media: [
      { id: "chupep-1", type: "image", src: chupep, alt: "Чюпеп" },
      { id: "chupep-3", type: "image", src: skebob, alt: "Скебоб" },
      { id: "chupep-4", type: "image", src: chupep, alt: "Чюпеп" },
      { id: "chupep-5", type: "image", src: skebob, alt: "Скебоб" },
    ],
  },
  {
    id: "skebob",
    title: "Скебоб",
    media: [
      { id: "skebob-1", type: "image", src: skebob, alt: "Скебоб" },
      { id: "skebob-2", type: "image", src: skebob, alt: "Скебоб" },
      { id: "skebob-3", type: "image", src: chupep, alt: "Чюпеп" },
      { id: "skebob-4", type: "image", src: skebob, alt: "Скебоб" },
    ],
  },
  {
    id: "mix",
    title: "Подборка",
    media: [
      { id: "mix-1", type: "image", src: chupep, alt: "Чюпеп" },
      { id: "mix-2", type: "image", src: skebob, alt: "Скебоб" },
      { id: "mix-3", type: "image", src: chupep, alt: "Чюпеп" },
      { id: "mix-4", type: "image", src: skebob, alt: "Скебоб" },
    ],
  },
];
