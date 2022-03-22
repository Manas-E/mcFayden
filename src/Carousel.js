import axios from "axios";
import { useState, useEffect } from "react";
import MobileCarousel from "./MobileCarousel.js";

export default function Carousel() {
  const [isMobile, setMobile] = useState(false);
  const [imgURLS, setImgURLS] = useState([]);

  async function getImages() {
    const arr = [];

    const result = await axios.get(
      "https://api.unsplash.com/photos?page=1&client_id=fIv9i1dEOurkFrlwG0TTX6GzOIy1Czkpeun2la8yAEQ"
    );
    result.data.map((e) => {
      arr.push(e.urls);
    });
    setImgURLS([...arr]);
  }

  useEffect(() => {
    getImages();
    console.log(imgURLS);
  }, []);

  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= "600") setMobile(!isMobile);
  });

  return (
    <>
      {isMobile ? (
        <MobileCarousel imgURLS={imgURLS}></MobileCarousel>
      ) : (
        <div>
          <div>
            <img className="img" src={imgURLS[0]?.raw} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <img
              width="285"
              height="342"
              src={imgURLS[1]?.raw}
              loading="lazy"
            />
            <img
              width="285"
              height="342"
              src={imgURLS[2]?.raw}
              loading="lazy"
            />
          </div>

          {imgURLS.slice(3).map((e, idx) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "2rem",
                }}
              >
                <img className="img" src={e?.raw} loading="lazy" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
