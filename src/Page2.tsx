import React from "react";

function Page2() {
  return (
    <div className="w-screen h-screen">
      {/* Header */}
      <div className="w-screen h-14 bg-gray-800 border-b border-gray-600 flex items-center contents-between">
        {/* HeaderLeft */}
        <div className="pl-4 flex flex-row items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            alt="fblogo"
          ></img>
          <div className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        {/* HeaderRight */}
        <div className="pr-4 flex flex-row items-center space-x-2">
          <div className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* LeftSidebar */}
      <div className="w-screen h-full flex flex-row bg-gray-900">
        <div className="w-80 p-2 flex flex-col">
          <div className="bg-gray-800 w-full h-14 flex flex-row items-center space-x-2 pl-2 rounded">
            <img
              className="w-9 h-9 rounded-full"
              src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/182846481_2894666680807252_2270321471653278535_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=Rp8rsskvYeMAX9ydnd6&_nc_ht=scontent-ssn1-1.xx&oh=bfa6c128a633e2149076418a4d40287f&oe=6174F9A8"
              alt="profileimage"
            ></img>
            <span className="text-sm text-white">김남훈</span>
          </div>
          <div className="w-full h-14 flex flex-row items-center space-x-2 pl-2 rounded">
            <img
              className="w-9 h-9 rounded-full"
              src="https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
              alt="friends"
            ></img>
            <span className="text-sm text-white">친구</span>
          </div>
        </div>
        {/* Contents */}
        <div className="w-auto flex-grow bg-blue-100">contents</div>
        {/* RightSidebar */}
        <div className="w-80 bg-green-100">rightarea</div>
      </div>
    </div>
  );
}

export default Page2;
