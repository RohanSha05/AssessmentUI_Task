import '../Banner/Banner.css';

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item">
          <img
            src="https://i.ibb.co.com/gZsvDtN/workers-it-company-working-computer.jpg"
            className="banner-slide1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animated-text text-white">
            <h1 className="text-8xl font-bold">
              Welcome to AssessmentUI
            </h1>
            <p>Modern IT Solution for Everyone</p>
          </div>
        </div>
        <div id="slide2" className="carousel-item">
          <img
            src="https://i.ibb.co.com/7z44kWD/close-up-shot-device-data-center.jpg"
            className="banner-slide2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animated-text text-white">
            <h1 className="text-8xl font-bold">
              Welcome to AssessmentUI
            </h1>
            <p>Modern IT Solution for Everyone</p>
          </div>
        </div>
        <div id="slide3" className="carousel-item">
          <img
            src="https://i.ibb.co.com/wwMfRVc/group-young-business-people-working-office.jpg"
            className="banner-slide3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animated-text text-white">
            <h1 className="text-8xl font-bold">
              Welcome to AssessmentUI
            </h1>
            <p>Modern IT Solution for Everyone</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;