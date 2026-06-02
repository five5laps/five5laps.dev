import { useCallback, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { albums } from "@entities/memory-album";
import { AlbumCard } from "@features/memory-album";
import { lightboxPlugins, toLightboxSlides } from "@features/memory-lightbox";
import styles from "./MemoriesPage.module.css";

const MemoriesPage = () => {
  const [lightbox, setLightbox] = useState<{
    albumId: string;
    index: number;
  } | null>(null);

  const activeAlbum = albums.find((album) => album.id === lightbox?.albumId);
  const slides = activeAlbum ? toLightboxSlides(activeAlbum.media) : [];

  const openAlbum = useCallback((albumId: string, index: number) => {
    setLightbox({ albumId, index });
  }, []);

  return (
    <div className={styles.memories}>
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          onOpen={(index) => openAlbum(album.id, index)}
        />
      ))}

      <Lightbox
        open={lightbox !== null}
        close={() => setLightbox(null)}
        index={lightbox?.index ?? 0}
        slides={slides}
        plugins={lightboxPlugins}
      />
    </div>
  );
};

export default MemoriesPage;
