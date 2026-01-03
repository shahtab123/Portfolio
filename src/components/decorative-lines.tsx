"use client";

export function DecorativeLines() {
  return (
    <div className="fixed inset-0 pointer-events-none hidden lg:flex justify-center z-[60]">
      <div className="w-full max-w-3xl relative">
        {/* Left vertical line - goes all the way up, positioned further out */}
        <div className="absolute -left-8 top-0 bottom-0 w-[2px] bg-border/50" />
        
        {/* Right vertical line - goes all the way up, positioned further out */}
        <div className="absolute -right-8 top-0 bottom-0 w-[2px] bg-border/50" />
      </div>
    </div>
  );
}
