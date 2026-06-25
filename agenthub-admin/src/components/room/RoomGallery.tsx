import Image from "next/image";

type RoomGalleryProps = {
  images: string[];
  title: string;
};

const RoomGallery = ({ images, title }: RoomGalleryProps) => {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {images.map((src, index) => (
        <Image
          key={`${src}-${index}`}
          src={src}
          alt={`${title} image ${index + 1}`}
          width={900}
          height={600}
          unoptimized
          className={`h-64 w-full rounded-2xl object-cover ${
            index === 0 ? "sm:col-span-2" : ""
          }`}
          priority={index === 0}
        />
      ))}
    </section>
  );
};

export default RoomGallery;
