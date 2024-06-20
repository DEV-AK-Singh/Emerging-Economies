import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="bg-gray-50 p-8 border-t-8 border-black">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:py-24 lg:flex lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Emerging <strong className="font-extrabold text-red-700">Economics</strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-sm">
              This website compares a few key economic and financial indicators
              for selected emerging economies, including India. These indicators
              document the countries' economic performance, financial markets,
              financial access, and human development trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
