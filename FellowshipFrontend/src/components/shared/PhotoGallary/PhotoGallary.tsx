import React from "react";

const PhotoGallary = () => {
  return (
    <>
      <h1 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-orange-500 dark:text-orange-500 underline mt-8">
        Photo Gallary
      </h1>
      <div className="flex justify-center items-center gap-3 flex-wrap">
        <div>
          <img
            src="https://cmogujarat.gov.in/sites/default/files/styles/ima/public/2024-11/gujarat-cm-gau-goshti-bhavnagar-event.jpeg?itok=U0UZMxFu"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmogujarat.gov.in/sites/default/files/styles/ima/public/2024-11/gujarat-cm-new-year-panchdev-temple-visit.jpg?itok=vOCsLW1V"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmogujarat.gov.in/sites/default/files/styles/ima/public/2024-11/cm-diwali-celebration-pmay-beneficiaries-gandhinagar.jpg?itok=vFdjbPVS"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmogujarat.gov.in/sites/default/files/styles/ima/public/2024-11/run-for-unity-event-riverfront-ahmedabad.jpeg?itok=WUZOxZ-E"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmogujarat.gov.in/sites/default/files/styles/ima/public/2024-11/tata-aircraft-complex-inauguration.jpg?itok=iAOVJ6hN"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmogujarat.gov.in/sites/default/files/styles/ima/public/2024-11/gujarat-cm-urban-mobility-conference-expo.jpg?itok=1ySPJCDs"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PhotoGallary;
