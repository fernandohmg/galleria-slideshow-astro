import { DialogOverlay } from "@reach/dialog";
import { useState } from "react";
import data from "../data.json";
import type { GalleryItemType } from "../types/GalleryItemType";

interface DetailProps {
  item: GalleryItemType;
}

const getElement = (renderLink: boolean) => {
  return renderLink ? "a" : "div";
};

export default function Detail({ item }: DetailProps) {
  const { id } = item;
  const [showFullImage, setShowFullImage] = useState(false);

  const open = () => setShowFullImage(true);
  const close = () => setShowFullImage(false);

  const items = data as GalleryItemType[];

  const hasPrevious = items.some((e) => e.id === +id - 1);
  const hasNext = items.some((e) => e.id === +id + 1);
  const progress = (+id * 100) / items.length;

  const BackLink = getElement(hasPrevious);
  const NextLink = getElement(hasNext);

  return (
    <>
      <main className="flex-1 flex justify-center tablet:block">
        <article className="p-6 flex flex-col justify-center tablet:p-10 desktop:flex-row desktop:gap-8">
          <div className="relative tablet:flex tablet:w-full desktop:w-[55%]">
            <img src={item.images.hero.small} alt={`Picture of ${item.name}`} />
            <button
              className="absolute top-4 left-4 tablet:top-auto tablet:bottom-4 bg-black opacity-75 text-white text-[0.625rem] leading-none py-3.5 px-4 flex justify-center items-center gap-3.5 tracking-[0.134rem] uppercase
                        hover:bg-white/25"
              onClick={open}
            >
              <img src="/shared/icon-view-image.svg" alt="" />
              <span className="pt-[1px]">View image</span>
            </button>
            <div className="relative bg-white p-6 -translate-y-1/2 w-5/6 tablet:translate-y-0 tablet:w-fit tablet:absolute tablet:right-0 tablet:p-16 tablet:pt-0 desktop:w-2/5">
              <h1 className="text-black text-2xl leading-7 tablet:text-6xl tablet:w-min tablet:mb-6">
                {item.name}
              </h1>
              <p className="text-7D7D7D leading-5">{item.artist.name}</p>
              <img
                className="absolute top-full w-16 h-16 tablet:right-0"
                src={item.artist.image}
                alt={`${item.artist.name} portrait`}
              />
            </div>
          </div>
          <div className="tablet:max-w-md tablet:self-center mt-5 tablet:mt-20">
            <p
              data-year-value={item.year}
              className="text-sm leading-7 text-7D7D7D mb-16 before:content-[attr(data-year-value)] before:block before:text-end before:text-8xl before:leading-[6rem] before:text-F3F3F3 before:-m-6
                       tablet:before:text-start tablet:before:text-[12.5rem] tablet:before:leading-[9.375rem] tablet:max-w-md tablet:self-center tablet:before:-mb-20 tablet:before:-ml-32 tablet:before:font-bold
                       desktop:before:-mb-6 desktop:before:ml-0 desktop:max-w-sm"
            >
              {item.description}
            </p>
            <a
              href={item.source}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase underline text-7D7D7D hover:text-black text-xxs py-2"
            >
              Go to source
            </a>
          </div>
        </article>
      </main>
      <div
        style={{
          background: `linear-gradient(90deg, black 0%, black ${progress}%, #E5E5E5 ${progress}%)`,
        }}
        className="h-[1px]"
      >
        &nbsp;
      </div>
      <footer className="border-t border-E5E5E5 px-6 py-4 grid grid-rows-2 grid-cols-[1fr_auto] grid-flow-col gap-y-2 ">
        <p className="font-bold text-sm leading-4">{item.name}</p>
        <p className="text-[0.625rem] text-black/75 leading-3">
          {item.artist.name}
        </p>
        <div className="row-span-2 self-center justify-self-end flex">
          <BackLink
            className={`relative after:absolute after:-inset-2 ${
              hasPrevious ? "opacity-100 hover:opacity-50" : "opacity-10"
            }`}
            href={hasPrevious ? `/${+id - 1}` : ""}
            title="Back"
          >
            <img
              src="/shared/icon-back-button.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="sr-only">Back</span>
          </BackLink>
          <NextLink
            className={`ml-6 relative after:absolute after:-inset-2  ${
              hasNext ? "opacity-100 hover:opacity-50" : "opacity-10"
            }`}
            href={hasNext ? `/${+id + 1}` : ""}
            title="Next"
          >
            <img
              src="/shared/icon-next-button.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="sr-only">Next</span>
          </NextLink>
        </div>
      </footer>
      <DialogOverlay
        isOpen={showFullImage}
        onDismiss={close}
        className="w-full p-6 !bg-black/80 flex flex-col justify-center items-center gap-8"
      >
        <div className="relative">
          <img src={item.images.gallery} alt={`Image of ${item.name}`} />
          <button
            onClick={close}
            className="absolute -top-14 right-0 uppercase font-bold font-serif tracking-[0.188em] text-sm text-white self-end"
          >
            Close
          </button>
        </div>
      </DialogOverlay>
    </>
  );
}
