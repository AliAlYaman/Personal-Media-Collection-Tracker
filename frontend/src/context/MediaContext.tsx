import { createContext, useContext, useState, type ReactNode } from "react";

export type MediaItem = {
  id: number;
  type: "movie" | "music" | "game";
  title: string;
  creator: string;
  releaseDate: string;
};

type MediaContextType = {
  media: MediaItem[];
  addMedia: (item: MediaItem) => void;
  editMedia: (item: MediaItem) => void;
  deleteMedia: (id: number) => void;
};

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [media, setMedia] = useState<MediaItem[]>([]);

  const addMedia = (item: MediaItem) => setMedia([...media, item]);

  const editMedia = (updated: MediaItem) =>
    setMedia(media.map(item => (item.id === updated.id ? updated : item)));

  const deleteMedia = (id: number) =>
    setMedia(media.filter(item => item.id !== id));

  return (
    <MediaContext.Provider value={{ media, addMedia, editMedia, deleteMedia }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) throw new Error("useMedia must be used within a MediaProvider");
  return context;
};