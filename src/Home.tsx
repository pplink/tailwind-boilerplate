import React from "react";

function Home() {
  return (
    <body className="mx-auto">
      <header>
        <div className="bg-white shadow">
          <div
            className="flex items-center justify-end px-3 py-1.5"
            style={{ height: "56px" }}
          >
            <div className="flex space-x-8 items-center justify-end">
              <div className="rounded-md">
                <p className="text-base font-medium leading-normal text-gray-500">
                  hyein@pplink.net
                </p>
              </div>
              <div className="flex items-center justify-center shadow rounded-md">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  로그아웃
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center flex-col">
        <section className="flex-col">
          <p className="text-2xl font-extrabold leading-loose text-gray-900">
            미디어 설정
          </p>
          <p className="text-base font-medium leading-normal text-gray-500">
            장치가 제대로 세팅 되었는지 확인해 주세요.
          </p>
        </section>
        <div className="flex">
          <section>
            <div>
              <div
                className="inline-flex flex-col space-y-20 items-center justify-end pt-32 bg-gray-900 rounded-md"
                style={{ width: "480px", height: "320px" }}
              >
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500">
                  <span className="text-lg font-medium leading-none text-white">
                    TW
                  </span>
                </span>
                <div
                  className="flex flex-col items-center justify-center px-48 py-2"
                  style={{ width: "480px", height: "54px" }}
                >
                  <div className="inline-flex space-x-2 items-start justify-start">
                    <button
                      type="button"
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex-col space-y-1 items-start justify-start w-96">
              <label className="block text-sm font-medium text-gray-700">
                닉네임
              </label>
              <div className="mt-1">
                <input
                  type="input"
                  name="input"
                  id="input"
                  className="text-sm leading-tight text-gray-900 w-96 px-3 py-2 bg-white border rounded-md border-gray-300"
                  placeholder="똑똑한 하마"
                />
              </div>
            </div>
            <div className="flex-col space-y-1 items-start justify-start w-96">
              <label className="block text-sm font-medium text-gray-700">
                비디오 설정
              </label>
              <select
                name="videoset"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-mdinline-flex space-x-1 items-center justify-start w-96 px-3 py-2 bg-white shadow border rounded-md border-gray-300mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Facetime</option>
                <option selected>MAC book video</option>
                <option>기본형</option>
              </select>
            </div>
            <div className="flex-col space-y-1 items-start justify-start w-96">
              <label className="block text-sm font-medium text-gray-700">
                오디오 설정
              </label>
              <select
                name="audioset"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-mdinline-flex space-x-1 items-center justify-start w-96 px-3 py-2 bg-white shadow border rounded-md border-gray-300mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Facetime</option>
                <option selected>MAC book video</option>
                <option>기본형</option>
              </select>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}
export default Home;
