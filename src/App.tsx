import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <div className="w-screen h-screen flex flex-col ">
            <div className="w-screen h-16 items-center ">
              <span className="flex">
                <div className="flex-1 items-center pl-1">
                  <img
                    src="https://static.coupangcdn.com/ea/cmg_paperboy/image/1632443274258/0819%28%EC%9B%94%29-C0-Left.jpg"
                    alt=""
                  ></img>
                </div>
                <div className="flex-1 items-center pr-1">
                  <img
                    src="https://static.coupangcdn.com/ra/cmg_paperboy/image/1632375116467/0926_C0.jpg"
                    alt=""
                  ></img>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 flex">
                  <button
                    type="button"
                    className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </span>
            </div>
            <div className="h-52">
              <div className="flex justify-between">
                <div className="h-8 list-none flex">
                  <li className="pt-2.5 pr-3">즐겨찾기</li>
                  <li className="pt-2.5 pr-3">입점신청</li>
                </div>
                <div className="h-8 list-none flex">
                  <li className="pt-2.5 pr-3">로그인</li>
                  <li className="pt-2.5 pr-3">회원가입</li>
                  <li className="pt-2.5 pr-3">고객센터</li>
                </div>
              </div>
              <div className="h-28 flex">
                <div className="w-28 h-28">카테고리</div>
                <div className="content-end">
                  <div className="h-14 flex-row">검색창</div>
                  <ul className="flex h-8">
                    <li className="pt-2.5 pr-3">
                      <a
                        href="https://www.coupang.com/np/campaigns/82"
                        className="rocket-delivery "
                        data-log-props='{ "id":"gnb_menu_item", "param":{"sectionId":"rocketdelivery"} }'
                        data-coulog='{"grp":"GNB","logType":"click","logCategory":"event","logLabel":"rocketdelivery"}'
                      >
                        로켓배송
                      </a>
                    </li>
                    <li className="pt-2.5 pr-3">회원가입</li>
                    <li className="pt-2.5 pr-3">고객센터</li>
                    <li className="pt-2.5 pr-3">로그인</li>
                    <li className="pt-2.5 pr-3">회원가입</li>
                    <li className="pt-2.5 pr-3">고객센터</li>
                    <li className="pt-2.5 pr-3">로그인</li>
                    <li className="pt-2.5 pr-3">회원가입</li>
                    <li className="pt-2.5 pr-3">고객센터</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-screen h-9">today</div>
            <div className="w-screen h-auto">
              main
              <div className="w-screen h-9">main-today</div>
              <div className="w-screen h-9">best-unit</div>
            </div>
            <div className="w-screen h-auto">
              footer
              <div className="w-screen h-12">navigation</div>
              <div className="w-screen h-24">layer2</div>
              <div className="w-screen h-20">certificate</div>
              <div className="w-screen h-20">info</div>
            </div>
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
