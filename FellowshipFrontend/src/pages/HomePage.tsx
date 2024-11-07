import { lazy } from "react";
import GovernmentWebsite from "../components/shared/GovernmentWebsite/GovernmentWebsite";
const AboutUs = lazy(() => import("../components/shared/AboutUs/AboutUs"));
const Carousel = lazy(() => import("../components/shared/Carousel/Carousel"));
const Goals = lazy(() => import("../components/shared/Goals/Goals"));
const Blogs = lazy(() => import("../components/shared/Blogs/Blogs"));
const PhotoGallary = lazy(
  () => import("../components/shared/PhotoGallary/PhotoGallary")
);
const HomePage = () => {
  return (
    <>
      {/* <div className="carousel w-full bg-yellow-400">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://cmogujarat.gov.in/sites/default/files/2024-10/tata-aircraft-complex-inauguration.jpg"
            className="w-full md:h-3/4"
          />
          <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/4 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cmogujarat.gov.in/sites/default/files/2024-10/development-projects-amreli-pm.jpg"
            className="w-full md:h-3/4"
          />
          <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/4 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cmogujarat.gov.in/sites/default/files/2024-10/provide-relief-for-landowners.jpg"
            className="w-full md:h-3/4"
          />
          <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/4 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://cmogujarat.gov.in/sites/default/files/2024-10/17th-urban-mobility-india-conference.jpg"
            className="w-full md:h-3/4"
          />
          <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/4 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <div className="dark:bg-black">
        <Carousel />
      </div>
      <div className="dark:bg-black">
        <AboutUs />
      </div>
      <div className="dark:bg-black">
        <Goals />
      </div>
      <div className="dark:bg-black">
        <PhotoGallary />
      </div>
      <div className="dark:bg-black">
        <Blogs />
      </div>
    </>
  );
};

export default HomePage;
