import React from "react";
import logo from "./logo.svg";

function NavItem({
  isSelected,
  children,
}: {
  isSelected?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "text-sm p-4 rounded-lg flex items-center space-x-3",
        isSelected ? "bg-blue-100 text-blue-500" : "text-gray-500",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

const icon = (
  <div className="p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7339 4.57143C14.7339 7.09616 12.7322 9.14286 10.263 9.14286C7.79386 9.14286 5.79219 7.09616 5.79219 4.57143C5.79219 2.0467 7.79386 0 10.263 0C12.7322 0 14.7339 2.0467 14.7339 4.57143ZM13.2436 4.57143C13.2436 6.25458 11.9092 7.61905 10.263 7.61905C8.61692 7.61905 7.28248 6.25458 7.28248 4.57143C7.28248 2.88827 8.61692 1.52381 10.263 1.52381C11.9092 1.52381 13.2436 2.88827 13.2436 4.57143Z"
        fill="currentColor"
      />
      <path
        d="M5.19528 1.58462C5.59858 1.50092 5.85916 1.09876 5.7773 0.686379C5.69543 0.274001 5.30212 0.00756174 4.89881 0.0912701C2.85778 0.514897 1.32133 2.35876 1.32133 4.57127C1.32133 6.78377 2.85778 8.62764 4.89881 9.05126C5.30212 9.13497 5.69543 8.86853 5.7773 8.45615C5.85916 8.04377 5.59858 7.64162 5.19528 7.55791C3.83511 7.2756 2.81162 6.04479 2.81162 4.57127C2.81162 3.09774 3.83511 1.86693 5.19528 1.58462Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31223 11.1036C7.23088 10.3826 8.51126 9.90476 10.2631 9.90476C12.0149 9.90476 13.2953 10.3826 14.2139 11.1037C15.1257 11.8193 15.6217 12.7276 15.8908 13.4923C16.1275 14.1653 15.9616 14.8241 15.5646 15.291C15.1812 15.7419 14.6006 16 13.9888 16H6.53735C5.92549 16 5.34495 15.7419 4.96151 15.291C4.56447 14.8241 4.3986 14.1653 4.63538 13.4923C4.9044 12.7276 5.40044 11.8193 6.31223 11.1036ZM7.21966 12.3124C6.59215 12.8049 6.23812 13.4384 6.03769 14.0081C5.99587 14.1269 6.01888 14.2121 6.08613 14.2912C6.16698 14.3862 6.32615 14.4762 6.53735 14.4762H13.9888C14.2 14.4762 14.3591 14.3863 14.44 14.2912C14.5072 14.2121 14.5302 14.1269 14.4884 14.0081C14.288 13.4384 13.934 12.8049 13.3065 12.3124C12.6858 11.8253 11.7377 11.4286 10.2631 11.4286C8.7885 11.4286 7.84032 11.8253 7.21966 12.3124Z"
        fill="currentColor"
      />
      <path
        d="M1.5083 13.9252C1.66084 13.3247 1.92264 12.6932 2.3547 12.2213C2.76533 11.7727 3.36341 11.4286 4.3019 11.4286C4.71343 11.4286 5.04705 11.0875 5.04705 10.6667C5.04705 10.2459 4.71343 9.90476 4.3019 9.90476C2.94524 9.90476 1.9551 10.428 1.26671 11.1799C0.599744 11.9084 0.251715 12.8105 0.0658685 13.5422C-0.294184 14.9597 0.885045 16 2.06645 16H2.63963C3.05116 16 3.38477 15.6589 3.38477 15.2381C3.38477 14.8173 3.05116 14.4762 2.63963 14.4762H2.06645C1.85593 14.4762 1.68828 14.3877 1.59296 14.28C1.50663 14.1825 1.47229 14.067 1.5083 13.9252Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

function Homecopy() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-60 py-8 px-4 space-y-8 border-r">
        <img className="h-8 ml-4" src={logo} alt="Pagecall" />
        <div>
          <div className="text-xs text-gray-400 font-semibold p-4">
            Management
          </div>
          <NavItem isSelected>
            {icon}
            <span>Rooms</span>
          </NavItem>
          <NavItem>
            {icon}
            <span>Users</span>
          </NavItem>
        </div>
        <div>
          <div className="text-xs text-gray-400 font-semibold p-4">
            Workspace
          </div>
          <NavItem>
            {icon}
            <span>Dashboard</span>
          </NavItem>
          <NavItem>
            {icon}
            <span>Settings</span>
          </NavItem>
          <NavItem>
            {icon}
            <span>Room Templates</span>
          </NavItem>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="px-8 py-4 border-b flex text-sm items-center">
          <div>{"{ workspaceName }"}</div>
          <div className="ml-auto space-x-3">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>{"{ mailAddress }"}</span>
          </div>
        </div>
        <div className="flex-grow py-12 px-8 space-y-8">
          <div className="rounded-xl bg-gray-50 p-8 space-y-5">
            <div className="text-xs text-gray-400 uppercase font-semibold">
              Templates
            </div>
            <div className="flex space-x-5">
              <div className="shadow-md rounded-lg w-44">
                <div className="rounded-t-lg w-full h-28 bg-gray-800 flex items-center justify-center">
                  <span className="text-white">All-in-one</span>
                </div>
                <div className="rounded-b-lg bg-white p-3 text-base text-gray-700">
                  {"{TemplateName}"}
                </div>
              </div>
              <div className="shadow-md rounded-lg w-44 bg-white flex items-center justify-center">
                <div className="space-y-3 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-2xl">
                    +
                  </div>
                  <span className="text-gray-700 text-sm">
                    Create New Template
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex">
              <div className="text-xl font-semibold">Rooms</div>
              <div className="ml-auto">
                <input
                  placeholder="Search"
                  className="text-sm rounded-lg border py-3 px-4"
                />
              </div>
            </div>
            <table className="min-w-full">
              <thead className="bg-gray-50 text-left text-xs text-gray-500 rounded-lg">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Created at
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Live time
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-sm text-gray-700 text-left">
                  <td className="p-6">611168c1f305c10008c07e20</td>
                  <td className="p-6">Room name</td>
                  <td className="p-6">
                    <span className="bg-green-100 text-green-500 py-1 px-3 rounded-full text-xs">
                      Open
                    </span>
                  </td>
                  <td className="p-6">2021-08-10 02:41</td>
                  <td className="p-6">2 min 34 sec</td>
                  <td className="p-6">24</td>
                  <td className="p-6"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecopy;
