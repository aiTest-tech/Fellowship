import { FaHandPointRight } from "react-icons/fa";
import GovernmentWebsite from "../GovernmentWebsite/GovernmentWebsite";
const Goals = () => {
  return (
    <div className="pt-7">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 min-w-[90%]">
        <h1 className="text-[#ff9935] uppercase w-screen pb-8 font-extrabold text-3xl underline text-center">
          Goal
        </h1>
        <p className="text-xl font-extrabold pb-3 dark:text-white">
          The Gujarat Good Governance Associates Fellowship aims to
        </p>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 min-w-[90%] gap-3">
        <div className="flex flex-col justify-center ml-3">
          <div className="flex  items-start gap-3">
            <div>
              <span>
                <FaHandPointRight className="dark:text-orange-500 text-black" />
              </span>
            </div>
            <div>
              <p className="dark:text-white">
                Foster a new generation of leaders who are committed to public
                service and governance reform.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center ml-3">
          <div className="flex  items-start gap-3">
            <div>
              <span>
                <FaHandPointRight className="dark:text-orange-500" />
              </span>
            </div>
            <div>
              <p className="dark:text-white">
                Improve governance by enhancing transparency, accountability,
                and the effective use of resources in delivering public
                services.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center ml-3">
          <div className="flex  items-start gap-3">
            <div>
              <span>
                <FaHandPointRight className="dark:text-orange-500" />
              </span>
            </div>
            <div>
              <p className="dark:text-white">
                Facilitate the successful implementation of the state’s key
                development programs, ensuring that they are reaching the last
                mile.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center ml-3">
          <div className="flex  items-start gap-3">
            <div>
              <span>
                <FaHandPointRight className="dark:text-orange-500" />
              </span>
            </div>
            <div>
              <p className="dark:text-white">
                Innovate solutions to local challenges by implementing
                evidence-based, scalable pilot projects.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center ml-3">
          <div className="flex  items-start gap-3">
            <div>
              <span>
                <FaHandPointRight className="dark:text-orange-500" />
              </span>
            </div>
            <div>
              <p className="dark:text-white">
                Strengthen the convergence between government departments,
                ensuring coordinated and holistic policy implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 min-w-[90%]"></div>
      <section className="bg-white dark:bg-black mt-7">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-orange-500 dark:text-orange-500 underline">
            Important Website
          </h2>
          <GovernmentWebsite />
        </div>
      </section>
    </div>
  );
};

export default Goals;
