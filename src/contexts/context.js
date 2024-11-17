import { React, createContext } from "react";
export const loginContext = createContext(false);
export const memberContext = createContext([]);
export const members = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    image: "https://via.placeholder.com/150",
    bio: "Passionate developer with expertise in React.js and Node.js.",
    email: "john.doe@example.com", // Added email
    password: "password123", // Added password
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    bio: "Creating user-friendly designs with a focus on accessibility.",
    email: "jane.smith@example.com", // Added email
    password: "password456", // Added password
  },
  {
    id: 3,
    name: "Samuel Green",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    bio: "Experienced in managing large-scale agile projects.",
    email: "samuel.green@example.com", // Added email
    password: "password789", // Added password
  },
  {
    id: 4,
    name: "John Doe",
    role: "Software Engineer",
    image: "https://via.placeholder.com/150",
    bio: "Passionate developer with expertise in React.js and Node.js.",
    email: "john.doe2@example.com", // Added email
    password: "password123", // Added password
  },
  {
    id: 5,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    bio: "Creating user-friendly designs with a focus on accessibility.",
    email: "jane.smith2@example.com", // Added email
    password: "password456", // Added password
  },
  {
    id: 6,
    name: "Samuel Green",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    bio: "Experienced in managing large-scale agile projects.",
    email: "samuel.green2@example.com", // Added email
    password: "password789", // Added password
  },
];
