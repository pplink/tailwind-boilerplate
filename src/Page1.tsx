import React from "react";

function Page1() {
  return (
    <div>
      <div className="w-screen h-screen">
        <div className="flex flex-row">
          <div className="w-3/12 h-screen bg-gray-800">
            <div className="h-16 text-white p-4  shadow-lg">LIST</div>
            <ul className="text-white">
              <li className="p-4 border border-indigo-600 flex">꼼꼼한양</li>
              <li className="p-4">꼼꼼한양</li>
              <li className="p-4">꼼꼼한양</li>
              <li className="p-4">꼼꼼한양</li>
            </ul>
          </div>
          <div className="w-6/12 text-gray-400 space-x-1">canvas</div>
          <div className="relative w-3/12 h-screen bg-gray-800">
            <div className="h-16 text-white p-4  shadow-lg">CHAT</div>
            <div className="flex p-4 space-x-2">
              <div className="rounded-full text-white bg-indigo-600 w-14 h-14 ">
                <p className="my-4"></p>
              </div>
              <div>
                <p className="text-gray-200 text-xs my-1">꼼꼼한양</p>
                <p className="rounded-md p-2 w-40 bg-gray-900 text-gray-300">
                  안녕하세요
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex text-white p-4 border-t border-gray-900">
              <input
                className="border rounded-md border-indigo-600 w-9/12 bg-gray-900 p-1"
                type="text"
                placeholder="text.."
              />
              <div className="w-3/12 p-2 text-center">emoji</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
