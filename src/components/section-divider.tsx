"use client";

export function SectionDivider() {
  return (
    <div className="py-3 flex items-center justify-center overflow-hidden">
      <div 
        className="w-full h-4 opacity-[0.12]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 6px,
            currentColor 6px,
            currentColor 7px
          )`,
        }}
      />
    </div>
  );
}
