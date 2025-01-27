import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {

  const [artData, setArtData] = useState(null)

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art/")
    .then((res) => res.json())
    .then((data) => setArtData(data))
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artData && <ArtList artData={artData} />}
      </div>
    </section>
  );
}

export default ArtsSection;
