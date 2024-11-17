import React, { useState } from "react";
import { FaComment, FaShare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiSolidTree } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { data } from "./dataset";
const BlogPage = () => {
  // const [commments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("");
  const [like, setLike] = useState({});
  const handleLike = (id) => {
    setLike((prevLikes) => {
      const newLikes = { ...prevLikes, [id]: !prevLikes[id] };
      return newLikes;
    });
  };

  const [follows, setFollows] = useState({});
  const HandleFollow = (id) => {
    setFollows((prevFollows) => ({
      ...prevFollows,
      [id]: !prevFollows[id], // Toggle the follow status for this post
    }));
  };
  return (
    <div className="grid grid-cols-1 p-4">
      {data.map((element) => (
        <div key={element.id}>
          <div className=" w-full h-auto md:w-1/2 h-64 mx-auto text-green-700 rounded-sm overflow-hidden shadow-lg relative border-l-2 border-r-2 border-b-8 border-green-500 bg-gradient-to-b from-black to-green-800 shadow-lg custom-shadow">
            <div className=" flex flex-row">
              {element.imgLink === "#" ? (
                <CgProfile className="text-2xl m-2" />
              ) : (
                <img src={element.imgLink} />
              )}
              <p className="mt-2 font-bold text-green-100">{element.Name} </p>
              &nbsp;
              <p
                className="m-2 absolute right-0 text-blue-400"
                onClick={() => HandleFollow(element.id)}
              >
                {follows[element.id] ? "Following" : "Follow"}
              </p>
            </div>
            <br />
            <img src={element.eventPic} className="w-full" />
            <p className="text-white p-2">{element.desc}</p>
            <br />
            <hr />
            <div className="flex justify-evenly text-2xl text-white">
              <button className="mx-2 text-green-300 flex flex-row ">
                <BiSolidTree
                  className={`${
                    !like[element.id] ? "text-white" : "text-green-500"
                  }`}
                  onClick={() => handleLike(element.id)}
                />
              </button>

              <button className="mx-2">
                <FaComment />
              </button>
              <button className="mx-2">
                <FaShare />
              </button>
              <button className="mx-2">
                <CgDetailsMore />
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
