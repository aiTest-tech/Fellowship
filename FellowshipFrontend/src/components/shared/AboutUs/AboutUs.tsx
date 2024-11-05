import { FaUsers } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

import { lazy } from "react";

const IconCard = lazy(() => import("../IconCard/IconCard"));
const AboutUs = () => {
  const cardsData = [
    {
      title: "Batches",
      icon: <FaNetworkWired className="text-black" />,
      description: "7",
    },
    {
      title: "Districts",
      icon: <IoLocationSharp className="text-black" />,
      description: "33",
    },
    {
      title: "CMGGAs",
      icon: <FaUsers className="text-black" />,
      description: "25",
    },
    {
      title: "Districts",
      icon: <IoLocationSharp className="text-black" />,
      description: "33",
    },
    {
      title: "CMGGAs",
      icon: <FaUsers className="text-black" />,
      description: "25",
    },
    {
      title: "CMGGAs",
      icon: <FaUsers className="text-black" />,
      description: "25",
    },
  ];
  return (
    <>
      <div className="pt-7">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 min-w-[90%]">
          <h1 className="text-[#ff9935] uppercase w-screen pb-8 font-extrabold text-3xl underline">
            About Us
          </h1>
          <p className="text-3xl font-extrabold pb-3 dark:text-white">
            What is Chief Minister’s Good Governance Associates Programme ?
          </p>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-3  min-w-[90%]">
          <div className="flex gap-3 lg:flex-row flex-col">
            {/* left part */}
            <div className="md:flex-1 lg:max-w-[65%] max-w-[100%]">
              <p className="pb-6 dark:text-white text-2xl">
                The CMGGA Programme is a strategic collaboration between the
                Government of Haryana and Ashoka University to improve
                governance in the state and driving a mass impact on ground.
                Running since 2016, the programme provides a platform to 25
                young individuals, to work closely with the Chief Minister's
                Office for bringing transparency, accountability and efficiency
                in public service delivery in the state. The CMGGAs are
                recruited through a competitive process with the selection ratio
                of -1:100. The associates are trained and oriented about
                government functioning and structure through a 15 day boot camp
                at Ashoka University and are then posted across 22 districts to
                work in tandem with the district administration for the duration
                of the programme.
              </p>
              <p className="pb-6 dark:text-white text-2xl">
                During the duration of the programme, CMGGAs ensure streamlined
                implementation of the state government’s flagship programmes in
                the field of education, women’s safety, health and sanitation,
                higher education and e-governance. CMGGAs drive convergence
                between various government stakeholders and departments within
                the administration to re-engineer processes and de-bottleneck
                implementation challenges. CMGGAs also work on an innovative
                pilot project for addressing an issue pertinent to their
                district. If a pilot project is found successful, it gets scaled
                up at the state level.
              </p>
              <p className="pb-6 dark:text-white text-2xl">
                The six batches of CMGGAs have been instrumental in driving
                stories of change in Haryana, resulting in palpable and visible
                impact on ground.
              </p>
            </div>
            {/* right part */}
            <div className="md:flex-1 lg:max-w-[45%] max-w-[100%]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardsData.map((card, index) => (
                  <IconCard
                    key={index}
                    title={card.title}
                    icon={card.icon}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
