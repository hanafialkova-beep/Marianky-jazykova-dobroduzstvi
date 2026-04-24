"use client";

interface Props {
  stars: number; // 0–3
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function StarRating({ stars, size = 'md', animated = false }: Props) {
  const sizes = { sm: 'text-base', md: 'text-2xl', lg: 'text-4xl' };
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map(n => (
        <span
          key={n}
          className={`${sizes[size]} transition-all duration-300 ${
            n <= stars
              ? animated ? 'animate-star-spin' : 'opacity-100'
              : 'opacity-25 grayscale'
          }`}
          style={animated && n <= stars ? { animationDelay: `${(n - 1) * 150}ms` } : undefined}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}
