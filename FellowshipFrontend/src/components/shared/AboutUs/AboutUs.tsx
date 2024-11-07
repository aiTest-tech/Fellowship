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
  ];
  return (
    <>
      <div className="pt-7">
        <h1 className="text-[#ff9935] uppercase w-screen pb-8 font-extrabold text-3xl underline text-center mt-3">
          About Program
        </h1>
        <p className="text-center text-black dark:text-white mb-3 text-2xl font-extrabold">
          Sardar Patel Good Governance CM Fellowship Program
        </p>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4  min-w-[90%]">
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* left part */}
            <div className="md:flex-1 lg:max-w-[65%] max-w-[100%]">
              <p className="pb-6 dark:text-white">
                Gandhinagar 04 August 2024: During his interaction with 18
                promising fellows of the Sardar Patel Good Governance Chief
                Minister Fellowship Program, Chief Minister Shri Bhupendra Patel
                emphasized that this program offers a valuable opportunity for
                youth to apply their acquired knowledge and skills to improve
                social life and advance the welfare of the common man. He noted
                that this initiative will not only benefit the fellows but also
                support the government in shaping future policies and
                implementing programs, thereby positively affecting crores of
                people. Launched by the Chief Minister on October 31, the birth
                anniversary of Sardar Patel, last year, the Sardar Patel Good
                Governance Chief Minister Fellowship Program aims to channel the
                innovative ideas of bright young individuals into administrative
                systems. This initiative embodies the spirit of governance
                championed by Prime Minister Shri Narendra Modi, focusing on the
                welfare of the common man, the poor, and the underprivileged,
                and upholding the tradition of good governance. 18 fellows have
                been selected for this one-year program based on merit from the
                applications received. They have completed their initial
                training at SPIPA and work in various state government
                departments on public welfare projects, studies, data analysis,
                and innovation. The state government has partnered with the
                prominent management institute IIM-Ahmedabad to provide academic
                support and mentorship for the fellows. During their visit to
                the Chief Minister’s residence, the fellows sought guidance from
                Shri Bhupendra Patel and shared their experiences with him.
              </p>
              <p className="pb-6 dark:text-white">
                Chief Minister Shri Bhupendra Patel encouraged the fellows by
                highlighting Gujarat's exceptional environment for their
                fellowship work. He assured them that funding would not hamper
                the implementation of schemes or new initiatives and emphasized
                that innovative ideas and suggestions would receive mindful
                consideration from the government. The Chief Minister further
                noted that such ideas would benefit crores of citizens across
                the state. He suggested conducting review meetings with the
                fellows every three months to offer guidance and ensure their
                proposals are taken into account by the government.
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
