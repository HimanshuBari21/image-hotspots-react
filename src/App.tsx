import "./styles.css";
import ImageHotspots from "../src/ImageHotspot/ImageHotspots";

export default function App() {
  return (
    <div className="container">
      <ImageHotspots
        image={{ src: "https://picsum.photos/536/354" }}
        data={[
          { content: "Hiam", x: 10, y: 90 },
          { x: 20, y: 80, content: "sdsds" }
        ]}
        hotspotProps={{ className: "text-white" }}
      />
    </div>
  );
}
