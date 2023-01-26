import React from "react";
import pic from "../assets/images/profile.jpeg";
import "remixicon/fonts/remixicon.css";
function Main() {
  return (
    <>
      <div className="">
        {/* Header  Section*/}
        <div className="w-full h-56 mt-14">
          {/* Header First Row */}
          <div className="flex justify-end">
            <div className="flex flex-row items-center justify-between w-[55%]">
              <h3 className="text-4xl">I'm going...</h3>
              {/* Profile Info */}
              <div className="flex flex-row items-center space-x-2 mr-16 ">
                {/* Profile Image */}
                <div className="w-16 h-16">
                  <img src={pic} alt="" className="w-16 h-16 rounded-full " />
                </div>
                {/* Profile Name */}
                <div className="w-12 text-base">Albert Floresko</div>
                <i className="ri-arrow-down-s-line cursor-pointer"></i>
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div>
            <div className="flex items-center justify-center mx-auto mt-8">
              <form action="" className="space-y-4">
                <div className="space-x-6">
                  <input
                    type="text"
                    placeholder="Origin"
                    className="p-4 border border-orange-400 rounded-xl placeholder:text-orange-400 placeholder:font-light"
                  />

                  <i className="ri-arrow-left-right-line text-orange-400 text-2xl"></i>
                  <input
                    type="text"
                    placeholder="Destination"
                    className="p-4 border border-orange-400 rounded-xl placeholder:text-orange-400 placeholder:font-light"
                  />
                  <button
                    type="submit"
                    className="w-28 h-14 text-center bg-blue-600 rounded-xl text-white"
                  >
                    Search
                  </button>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="" className="font-light">
                    I want to stay in a hotel
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
