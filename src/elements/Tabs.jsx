import React, { useState, useContext } from "react";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
import { MdFileUploadOff } from "react-icons/md";
import LoginSignup from "./SignUP";
import BlogPage from "./Blog";
import PostUpload from "./Upload";
import { loginContext } from "../contexts/context";
import Members from "./Members";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("home");
  const handleTabClick = (tab) => setActiveTab(tab);
  const value = useContext(loginContext);

  return (
    <>
      <nav>
        <div
          className="pt-5 mt-10 flex justify-between lg:justify-start lg:space-x-20 border-b border-red-800 bg-colour-1"
          role="tablist"
        >
          <button
            className={`py-0 px-5 text-xl ${
              activeTab === "home" ? "colour-3" : "colour-2"
            }`}
            onClick={() => handleTabClick("home")}
            role="tab"
            aria-selected={activeTab === "home"}
          >
            <IoMdHome className="sm:text-2xl md:text-2xl lg:text-4xl" />
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "profile" ? "colour-3" : "colour-2"
            }`}
            onClick={() => handleTabClick("profile")}
            role="tab"
            aria-selected={activeTab === "profile"}
          >
            {value.loggedIn ? (
              <CgProfile className="sm:text-2xl md:text-2xl lg:text-4xl" />
            ) : (
              <RiUserAddLine className="sm:text-2xl md:text-2xl lg:text-4xl" />
            )}
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "followers" ? "colour-3" : "colour-2"
            }`}
            onClick={() => handleTabClick("followers")}
            role="tab"
            aria-selected={activeTab === "followers"}
          >
            <FaUserFriends className="sm:text-2xl md:text-2xl lg:text-4xl" />
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "upload" ? "colour-3" : "colour-2"
            }`}
            onClick={() => handleTabClick("upload")}
            role="tab"
            aria-selected={activeTab === "upload"}
            // disabled={!value.loggedIn} // Disable button if not logged in
          >
            {value.loggedIn ? (
              <FiUpload className="sm:text-2xl md:text-2xl lg:text-4xl" />
            ) : (
              <MdFileUploadOff className="sm:text-2xl md:text-2xl lg:text-4xl" />
            )}
          </button>
        </div>
      </nav>
      <div className="mt-4 text-white">
        {activeTab === "home" && (
          <div role="tabpanel">
            <BlogPage />
          </div>
        )}
        {activeTab === "profile" && (
          <div role="tabpanel">
            <LoginSignup />
          </div>
        )}
        {activeTab === "followers" && (
          <div role="tabpanel">
            <Members />.
          </div>
        )}
        {activeTab === "upload" && (
          <div role="tabpanel">
            {value.loggedIn ? (
              <PostUpload />
            ) : (
              <div className="my-8 text-center text-xl md:border-r md:border-b md:border-red-900 p-16 rounded sm:w-full md:w-1/2 md:m-auto l:m-auto ">
                <h2 className="text-red-500">Log in or Sign up first!</h2>
                <button
                  className="h-8 w-32 border-2 m-4 rounded bg-green-200 p-1 text-sm text-green-800"
                  onClick={() => handleTabClick("profile")}
                >
                  Proceed
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
