import data from "../data.json";
import type { GalleryItemType } from "../types/GalleryItemType";
import GalleryItem from "./GalleryItem";

const items = data as GalleryItemType[];

export default function Home() {
  return (
    <main>
      <ul className="p-6 space-y-6 tablet:space-y-10 tablet:gap-10 tablet:block tablet:p-10 tablet:columns-2 tablet:column desktop:columns-4">
        {items.map((item) => (
          <li key={item.id}>
            <GalleryItem item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
