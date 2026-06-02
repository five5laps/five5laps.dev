import { ContentBox } from "@shared/ui/content-box";
import type { MemoryAlbum } from "@entities/memory-album";
import { getPreviewMedia } from "@entities/memory-album";
import AlbumPreview from "../AlbumPreview/AlbumPreview";
import styles from "./AlbumCard.module.css";

interface IAlbumCard {
  album: MemoryAlbum;
  onOpen: (index: number) => void;
}

const AlbumCard = ({ album, onOpen }: IAlbumCard) => {
  const previewItems = getPreviewMedia(album);

  return (
    <div
      className={styles.card}
      onClick={() => onOpen(0)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(0);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open album ${album.title}`}
    >
      <ContentBox
        boxClass={styles.card__box}
        contentClass={styles.card__content}
        header={album.title}
        content={
          <AlbumPreview items={previewItems} onItemClick={onOpen} />
        }
      />
    </div>
  );
};

export default AlbumCard;
