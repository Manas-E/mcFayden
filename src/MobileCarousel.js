import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MobileCarousel({ imgURLS }) {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicator={false}
        showThumbs={false}
        interval={5000}
      >
        {imgURLS.map((e) => (
          <div>
            <img width={390} height={468} src={e.raw} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
