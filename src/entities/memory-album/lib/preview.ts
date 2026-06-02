import type { MemoryAlbum } from "../model/types";

export const ALBUM_PREVIEW_COUNT = 4;

export const getPreviewMedia = (album: MemoryAlbum) =>
  album.media.slice(0, ALBUM_PREVIEW_COUNT);
