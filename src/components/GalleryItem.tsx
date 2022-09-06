import type { GalleryItemType } from "../types/GalleryItemType";

interface GalleryItemProps {
  item: GalleryItemType;
}

export const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <a className="relative group" href={`/${item.id}`}>
      <img
        className="group-hover:opacity-80 transition w-full"
        src={item.images.thumbnail}
        alt=""
      />
      <div className="absolute w-full bottom-0 p-8 pt-14 bg-hover-gradient">
        <h2 className="text-2xl leading-7 text-white font-bold">{item.name}</h2>
        <p className="text-xs text-7D7D7D mt-1.5">{item.artist.name}</p>
      </div>
    </a>
  );
};
