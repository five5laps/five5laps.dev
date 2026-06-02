export type MemoryMediaType = "image" | "video";

export interface MemoryMedia {
  id: string;
  type: MemoryMediaType;
  src: string;
  alt?: string;
  mimeType?: string;
}

export interface MemoryAlbum {
  id: string;
  title: string;
  media: MemoryMedia[];
}
