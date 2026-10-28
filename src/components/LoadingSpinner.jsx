export default function LoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#FFF8F0]">
      <div className="relative w-16 h-16 mb-4">
        <div className="w-16 h-16 rounded-full border-4 border-[#FFD6E0] border-t-[#FF4D8D] animate-spin" />
        <span className="absolute inset-0 flex items-center justify-center text-xl select-none">
          🍰
        </span>
      </div>
      <p
        className="text-[#1A1A2E] font-bold text-sm tracking-wide"
        style={{ fontFamily: 'Baloo 2, sans-serif' }}
      >
        Preparing treats...
      </p>
    </div>
  );
}

