import Image from "next/image";

const brands = [
  { name: "Ceramika", slug: "ceramika_logo" },
  { name: "Aparici", slug: "aparici_logo" },
  { name: "Viccarbe", slug: "viccarbe_logo", customClass: "h-4" },
  { name: "Stone Depot by Impacto", slug: "stone_depot_logo" },
  { name: "Ascale by Tau", slug: "ascale_logo" },
  { name: "Cosentino", slug: "cosentino_logo" },
];

/**
 * Infinite auto-scrolling logo carousel of brand partners.
 * The track is duplicated once so the CSS keyframe (translateX 0 -> -50%)
 * loops seamlessly. Pauses on hover/focus for accessibility & legibility.
 */
export function BrandMarquee() {
  const track = [...brands, ...brands];

  return (
    <div
      className="w-full overflow-hidden border-y border-line bg-cream py-10"
      role="region"
      aria-label="Brand partners"
    >
      <div className="flex w-max animate-marquee items-center gap-16 px-8">
        {track.map((brand, i) => (
          <div
            key={`${brand.slug}-${i}`}
            className="flex h-10 shrink-0 items-center opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={`/logos/${brand.slug}.png`}
              alt={brand.name}
              width={160}
              height={55}
              className={`w-auto object-contain ${brand.customClass || "h-8"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
