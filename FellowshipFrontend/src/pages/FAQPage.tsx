import { useState } from "react";

const faqs = [
  {
    question:
      "What is the Sardar Patel Chief Minister Fellowship Program by the Government of Gujarat?",
    answer: `To enhance governance in the state of Gujarat by introducing innovative and effective approaches into policy-making 
    and service delivery processes. To act as a catalyst for transformation within government departments, fostering a culture 
    of innovation, efficiency, and excellence.`,
  },
  {
    question: "Who launched the Chief Minister Fellowship Program?",
    answer: `The Program was Launched by Hon CM Shri Bhupendra Patel on 31st Oct 2023`,
  },
  {
    question: "What is the duration of the Chief Minister Fellowship, 2023?",
    answer: `Fellows will be engaged for a fixed period of 1 year, which may be extended by 1 year at a time, 
    however, their continuation in their respective positions beyond the first year would depend on a satisfactory 
    Annual Performance Review based on clearly defined Key Performance Indicators.`,
  },
  {
    question: "When can I apply for the Chief Minister Fellowship, 2023?",
    answer: `The application process for the Chief Minister Fellowship opens on December 2, 2023, with the last date for submission 
    being December 30, 2023.`,
  },
  {
    question:
      "How much is the application fee for the Chief Minister Fellowship, 2023?",
    answer: `The application fee for the Chief Minister Fellowship, is Rs. 500.`,
  },
  {
    question:
      "What is the Eligible Criteria (Educational Qualifications, Age and Experience) required for Fellowship?",
    answer: `
      - Successful completion of 10th and 12th grade with a minimum of 60%
      - Bachelor’s Degree with a minimum of 60%
      - Preference will be given to graduates from premier national institutes
      - Applicant’s age should not exceed 35 years as of the last date of application
      - Applicant’s age should not exceed 35 years as of the last date of application`,
  },
];

function FAQPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="bg-yellow-600 text-white py-4">
          <h1 className="text-center text-2xl font-bold">
            Sardar Patel Good Governance CM Fellowship Program
          </h1>
        </header>

        <div className="container mx-auto p-6">
          {/* <button
            className="mb-4 px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button> */}

          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-6">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 dark:border-gray-700 rounded-md"
                >
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
