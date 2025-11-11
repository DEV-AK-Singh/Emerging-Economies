import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-black">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-left">
              <h1 className="text-2xl text-red-600 sm:text-3xl font-extrabold">
                At a Glance: India and Other Emerging Economies 📈
              </h1>

              <p className="mt-1.5 text-xl text-white">
                Misra Centre for Financial Market and Economy
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <a
                href="#FAQs"
                className="inline-flex items-center justify-center gap-1.5 rounded-none text-red-600 bg-white px-5 py-3"
                type="button"
              >
                <span className="pe-2 font-bold text-black text-lg"> View FAQ </span>

                <svg
                  fill="#ffffff"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24.00 24.00"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  stroke-width="0.696"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect
                      x="0"
                      y="0"
                      width="24.00"
                      height="24.00"
                      rx="12"
                      fill="#000000"
                      strokewidth="0"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Zm0-2a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,20ZM8,8.994a3.907,3.907,0,0,1,2.319-3.645,4.061,4.061,0,0,1,3.889.316,4,4,0,0,1,.294,6.456,3.972,3.972,0,0,0-1.411,2.114,1,1,0,0,1-1.944-.47,5.908,5.908,0,0,1,2.1-3.2,2,2,0,0,0-.146-3.23,2.06,2.06,0,0,0-2.006-.14,1.937,1.937,0,0,0-1.1,1.8A1,1,0,0,1,8,9Z"></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://github.com/DEV-AK-Singh/Emerging-Economies"
                target="_blank"
                className="inline-flex items-center justify-center gap-1.5 rounded-none border-red-600 border text-white px-5 py-3"
                type="button"
              >
                <span className="pe-2 font-bold text-red-600 text-lg"> GitHub </span>

                <svg width="24px" height="24px" viewBox="0 0 20.00 20.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ff0000" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="0" y="0" width="20.00" height="20.00" rx="10" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.12"></g><g id="SVGRepo_iconCarrier"> <title>github [#ff0000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ff0000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ff0000]"> </path> </g> </g> </g> </g></svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
