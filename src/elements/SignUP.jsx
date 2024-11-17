import React, { useContext, useState, useRef } from "react";
import { RiUserAddLine, RiLoginBoxLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { memberContext, loginContext } from "../contexts/context";

function LoginSignup() {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Added state for managing login/signup toggle
  const [imagePreview, setImagePreview] = useState(null); // To store and display image preview

  // Context inputs
  const memberList = useContext(memberContext);
  const loginUpdate = useContext(loginContext);

  // Refs for form fields
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const locationRef = useRef("");
  const imageRef = useRef(null);

  // Handle Join Us (Sign up)
  const handleJoinUs = (e) => {
    e.preventDefault();
    if (!loginUpdate.loggedIn) {
      const newMember = {
        id: Date.now(), // Use Date.now() to generate a unique ID
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        location: locationRef.current.value,
        image: imagePreview, // Storing the selected image (data URL or file path)
      };

      // Add new member to the list
      memberList.setMemberFile((prevMemberFile) => [
        ...prevMemberFile,
        newMember,
      ]);

      // Clear form fields after successful sign up
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      locationRef.current.value = "";
      setImagePreview(null); // Clear image preview

      loginUpdate.setLoggedIn(true); // Set user as logged in after sign-up
    } else {
      alert("Please Join Us to Profile Login...");
    }
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Find user in memberList
    const isUser = memberList.memberFile.find(
      (member) => member.email === email && member.password === password
    );

    if (isUser) {
      loginUpdate.setLoggedIn(true);
    } else {
      alert("Incorrect email or password");
    }
  };

  // Handle image file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Store the image preview (data URL)
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };

  return (
    <div className="min-h-auto flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-8">
          <button
            className={`flex items-center justify-center py-2 px-4 ${
              isLogin
                ? "bg-gradient-to-r from-red-500 to-gray-700 text-white"
                : "text-gray-400"
            } rounded-md`}
            onClick={() => setIsLogin(true)} // Set to login view
          >
            <RiLoginBoxLine className="mr-2" /> Log In
          </button>
          <button
            className={`flex items-center justify-center py-2 px-4 ${
              !isLogin
                ? "bg-gradient-to-r from-red-500 to-gray-700 text-white"
                : "text-gray-400"
            } rounded-md`}
            onClick={() => setIsLogin(false)} // Set to join/signup view
          >
            <RiUserAddLine className="mr-2" /> Join Us
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-red-300"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef} // Connecting the input field with the ref
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-900 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-red-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef} // Connecting the input field with the ref
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-500 to-gray-700 hover:from-violet-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Log In
            </button>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handleJoinUs}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-red-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef} // Connecting the input field with the ref
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-red-500 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-red-300"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef} // Connecting the input field with the ref
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-red-500 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-red-300"
              >
                Password
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  ref={passwordRef} // Connecting the input field with the ref
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-red-500 bg-gray-800 text-white"
                />
                {show ? (
                  <FaEye
                    className="cursor-pointer text-red-300"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <FaEyeSlash
                    className="cursor-pointer text-red-300"
                    onClick={() => setShow(!show)}
                  />
                )}
              </div>
              <br />
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-red-300"
                >
                  Profile Image
                </label>
                <input
                  type="file"
                  id="image"
                  ref={imageRef} // Connecting the input field with the ref
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-red-500 bg-gray-800 text-white"
                  onChange={handleImageChange} // Handle image selection
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-4 w-32 h-32 object-cover rounded-full"
                  />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-500 to-gray-700 hover:from-violet-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
