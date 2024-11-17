import { LuDog } from "react-icons/lu";
const Header = ({ hName }) => {
  return (
    <div className="w-full m-0 p-0 fixed top-0 left-0 z-10 bg-black">
      <h1 className="text-4xl p-2 bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-red-800 flex flex-row lobster-regular">
        <LuDog className="colour-1 text-5xl" /> {hName}
      </h1>
    </div>
  );
};

export default Header;
