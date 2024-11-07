import React from "react";

const GovernmentWebsite = () => {
  return (
    <div className="flex justify-center items-center gap-[100px] bg-white">
      <div>
        <a href="https://www.vibrantgujarat.com/">
          <img
            src="https://cmogujarat.gov.in/sites/default/files/2023-12/vibrant_gujarat.jpg"
            alt=""
            className="w-[200px] h-[200px]"
          />
        </a>
        <p className="text-[15px]">Vibrant Gujarat 2024</p>
      </div>
      <div>
        <a href="https://rajbhavan.gujarat.gov.in/">
          <img
            src="https://cmogujarat.gov.in/sites/default/files/2022-07/raj-bhavan.jpg"
            alt=""
            className="w-[200px] h-[200px]"
          />
        </a>
        <p className="text-[15px]">Raj Bhavan Gujarat</p>
      </div>
      <div>
        <a href="https://www.pmindia.gov.in/en/">
          <img
            src="	https://cmogujarat.gov.in/sites/default/files/2023-12/Pm_India.png"
            alt=""
            className="w-[200px] h-[200px]"
          />
        </a>
        <p className="text-[15px]">PMO India</p>
      </div>
      <div>
        <a href="https://presidentofindia.nic.in/">
          <img
            src="	https://cmogujarat.gov.in/sites/default/files/2022-07/presidant.jpg"
            alt=""
            className="w-[200px] h-[200px]"
          />
        </a>
        <p className="text-[15px]">The President of India</p>
      </div>
      <div>
        <a href="https://www.india.gov.in/">
          <img
            src="https://cmogujarat.gov.in/sites/default/files/2023-12/india_gov.png"
            alt=""
            className="w-[200px] h-[200px]"
          />
        </a>
        <p className="text-[15px]">National Portal of India</p>
      </div>
    </div>
  );
};

export default GovernmentWebsite;
