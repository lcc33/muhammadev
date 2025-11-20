const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-transparent">
      <div
        role="status"
        aria-live="polite"
        className="relative flex items-center justify-center max-w-xl w-full text-center">
        {/* Responsive heading: scales from large on mobile to larger on desktop */}
        <div className="font-sans font-semibold text-white select-none">
          <div className="relative inline-flex items-center justify-center">
            {"Yokoso".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block opacity-0 animate-letterGlow"
                style={{
                  animationDelay: `${0.1 + index * 0.105}s`,
                }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none">
                  {letter}
                </span>
              </span>
            ))}
          </div>

          {/* Moving striped mask + colorful orbs overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              maskImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 6px, black 7px, black 8px)`,
              WebkitMaskImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 6px, black 7px, black 8px)`,
            }}
          >
            <div
              className="h-full w-full animate-scan"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 50%, #ffff00 0%, transparent 50%),
                  radial-gradient(circle at 45% 45%, #ff0000 0%, transparent 45%),
                  radial-gradient(circle at 55% 55%, #00ffff 0%, transparent 45%),
                  radial-gradient(circle at 45% 55%, #00ff00 0%, transparent 45%),
                  radial-gradient(circle at 55% 45%, #0000ff 0%, transparent 45%)
                `,
                backgroundSize: "200% 200%",
                maskImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)`,
                WebkitMaskImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)`,
                animation: "scan 2s infinite alternate, pulse 4s infinite",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
