import Image from "next/image";

export function PageHeader({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  if (image) {
    return (
      <section className="-mt-[50px] bg-white px-6 py-10 sm:px-10 sm:py-12 md:px-[100px]">
        <div className="relative isolate overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-15px_rgba(13,22,58,0.45)]">
          <div className="relative h-[370px] w-full sm:h-[410px] md:h-[450px]">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h1 className="font-display text-5xl leading-none text-white drop-shadow-md sm:text-6xl md:text-7xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-white/90 drop-shadow">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-caw-blue-light">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-bold text-caw-blue-dark sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-caw-gray">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
