import HeroOrnaments from "@/components/page/home/hero/HeroOrnaments";

export default function PreloadTestPage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "400px",
        background: "#f9fafb",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <HeroOrnaments />
      </div>
      {/* Your content here, with position: relative or zIndex: 1 */}
    </div>
  );
}
