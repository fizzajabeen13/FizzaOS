"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

type Screenshot = string | {
  title: string;
  image: string;
};

function getImageData(item: Screenshot) {
  if (typeof item === "string") {
    const fileName = item.split("/").pop()?.split(".")[0] || "Screenshot";
    const title = fileName
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      title,
      image: item,
    };
  }

  return item;
}

export default function ProjectGallery({
  screenshots,
  projectName,
}: {
  screenshots: readonly Screenshot[];
  projectName: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = screenshots.map(getImageData);

  if (!images.length) {
    return null;
  }

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:col-span-2">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Project Gallery
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Screenshots
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            Click any image to view full size
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <button
              key={item.image}
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 text-left transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${projectName} ${item.title}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/45 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
                    View Full Size <Maximize2 size={15} />
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-800 p-4">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Screenshot {index + 1} of {images.length}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage && activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-300 transition hover:text-white"
          >
            <X size={20} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-300 transition hover:text-white md:block"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-6xl">
            <div className="relative h-[75vh] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-slate-400">
              <p>
                {activeImage.title} — {activeIndex + 1} / {images.length}
              </p>

              <div className="flex gap-2 md:hidden">
                <button
                  onClick={prevImage}
                  className="rounded-full border border-slate-700 px-4 py-2"
                >
                  Prev
                </button>

                <button
                  onClick={nextImage}
                  className="rounded-full border border-slate-700 px-4 py-2"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-300 transition hover:text-white md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}