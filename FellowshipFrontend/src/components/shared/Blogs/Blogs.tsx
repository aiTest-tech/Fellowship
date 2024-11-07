const Blogs = () => {
  return (
    <section className="py-10">
      <h2 className="mb-12 text-center font-sans text-3xl font-bold dark:text-orange-500 text-orange-500 underline">
        Blog
      </h2>
      <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
        <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="#">
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
                  />
                </svg>
                Awards
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                We came first in Awwwards ceremony 2021
              </h3>
              <p className="mb-4 text-base font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                tempore officiis. Lorem, ipsum dolor.
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Learn More
              </span>
            </div>
          </a>
        </article>
        <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="#">
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
                  />
                </svg>
                Awards
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                We came first in Awwwards ceremony 2021
              </h3>
              <p className="mb-4 text-base font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                tempore officiis. Lorem, ipsum dolor.
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Learn More
              </span>
            </div>
          </a>
        </article>
        <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="#">
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                <svg
                  className="mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
                  />
                </svg>
                Awards
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                We came first in Awwwards ceremony 2021
              </h3>
              <p className="mb-4 text-base font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                tempore officiis. Lorem, ipsum dolor.
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Learn More
              </span>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Blogs;
