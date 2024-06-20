import React from "react";
import faqs from "../../assets/faqs.json";

const FaqQuestion = ({title,paragraph,url}) => {
  return (
    <details
      className="group p-6 bg-black"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white ">
        <h2 className="font-medium text-red-500 text-sm sm:text-base">
          {title}
        </h2>

        <span className="relative size-5 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-50 text-sm sm:text-base">
        {paragraph}
        <a href={url} className="text-blue-500"> Indicator Source Link</a>
      </p>
    </details>
  );
};

export default function Faqs() {
  return (
    <div className="bg-white p-8" id="FAQs">
        <h1 className="text-red-600 mt-8 mb-16 text-center text-3xl font-extrabold sm:text-4xl">Frequently Asked Questions</h1>
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white max-w-screen-2xl mx-auto">
            {
              faqs.map((faq)=>{
                return <FaqQuestion title={faq.title} paragraph={faq.paragraph} url={faq.url}/>
              })
            }
        </div>
    </div>
  );
}
