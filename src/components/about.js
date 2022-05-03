import React, { useState } from 'react'


export default function About() {
  const [dark, setDarkStyle] = useState({
    color: 'black',
    backgroundColor: "white"
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (dark.color === "white") {
      setDarkStyle({
        color: 'black',
        backgroundColor: "white"
      });
      setbtnText("Enable Dark Mode");
    }
    else {
      setDarkStyle({
        color: 'white',
        backgroundColor: "black",
        border: "2px solid white"
      });
      setbtnText("Enable Light MOde");
    };
  }
  return (
    <div className='container flex p-5 justify-center bg-slate-400 pb-12'>
      <section className="shadow row w-3/5">
        <div className="tabs" style={dark}>
          <div className="border-b tab">
            <div className="border-l-2 border-transparent relative">
              <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
              <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                <span className="text-grey-darkest font-thin text-xl">
                  Massa vitae tortor condimentum lacinia quis vel eros donec
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                  {/* <!-- icon by feathericons.com --> */}
                  <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9">
                    </polyline>
                  </svg>
                </div>
              </header>
              <div className="tab-content">
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <ul className="pl-4">
                    <li className="pb-2">
                      consectetur adipiscing elit
                    </li>
                    <li className="pb-2">
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>
                    <li className="pb-2">
                      Viverra orci sagittis eu volutpat odio facilisis mauris
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b tab">
            <div className="border-l-2 border-transparent relative">
              <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
              <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck2">
                <span className="text-grey-darkest font-thin text-xl">
                  Massa vitae tortor condimentum lacinia quis vel eros donec
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                  {/* <!-- icon by feathericons.com --> */}
                  <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9">
                    </polyline>
                  </svg>
                </div>
              </header>
              <div className="tab-content">
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <ul className="pl-4">
                    <li className="pb-2">
                      consectetur adipiscing elit
                    </li>
                    <li className="pb-2">
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>
                    <li className="pb-2">
                      Viverra orci sagittis eu volutpat odio facilisis mauris
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b tab" >
            <div className="border-l-2 border-transparent relative">
              <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3" />
              <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck3">
                <span className="text-grey-darkest font-thin text-xl">
                  Massa vitae tortor condimentum lacinia quis vel eros donec
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                  {/* <!-- icon by feathericons.com --> */}
                  <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9">
                    </polyline>
                  </svg>
                </div>
              </header>
              <div className="tab-content">
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <ul className="pl-4">
                    <li className="pb-2">
                      consectetur adipiscing elit
                    </li>
                    <li className="pb-2">
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>
                    <li className="pb-2">
                      Viverra orci sagittis eu volutpat odio facilisis mauris
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='container p-5'>
            <button type="submit" onClick={toggleStyle}
              className="  mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
              <a href="#list">{btnText}</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
