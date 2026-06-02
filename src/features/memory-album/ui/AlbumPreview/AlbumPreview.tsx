import type { MemoryMedia } from "@entities/memory-album";
import videoIcon from "@images/icons/video.svg";
import styles from "./AlbumPreview.module.css";

interface IAlbumPreview {
  items: MemoryMedia[];
  onItemClick: (index: number) => void;
}

const AlbumPreview = ({ items, onItemClick }: IAlbumPreview) => {
  return (
    <div className={styles.preview}>
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className={styles.preview__item}
          onClick={(event) => {
            event.stopPropagation();
            onItemClick(index);
          }}
          aria-label={item.alt ?? `Open media ${index + 1}`}
        >
          {item.type === "video" ? (
            <div className={styles.preview__video}>
              <img src={videoIcon} alt="" className={styles.preview__videoIcon} />
            </div>
          ) : (
            <img src={item.src} alt={item.alt ?? ""} />
          )}
        </button>
      ))}
    </div>
  );
};

export default AlbumPreview;
