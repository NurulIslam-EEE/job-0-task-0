import { IoMoonOutline } from "react-icons/io5";
function Navigation() {
  return (
    <div className="rounded-full backdrop-blur-[19px] w-[95%] xl:w-[1384px] mx-auto py-4 px-10">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src="/logo-home.png" alt="" />
        </div>
        <div className="xl:flex hidden">
          <p className="font-[16px] text-[#224192] mr-8 border-b-2 border-[#224192] cursor-pointer">
            Home
          </p>
          <p className="font-[16px] text-[#224192] mr-8 cursor-pointer">
            Services
          </p>
          <p className="font-[16px] text-[#224192] mr-8 cursor-pointer">
            Solutions
          </p>
          <p className="font-[16px] text-[#224192] mr-8 cursor-pointer">FAQ</p>
          <p className="font-[16px] text-[#224192] mr-8 cursor-pointer">
            About
          </p>
          <p className="font-[16px] text-[#224192] mr-8 cursor-pointer">Blog</p>
        </div>
        <div className="buttons flex ">
          <button className="w-[56px] h-[40px] rounded-full bg-[#F2F2F2] flex justify-center items-center mr-4">
            <IoMoonOutline />
          </button>
          <button className="bg-[#171717] text-white py-2 px-4 rounded-full">
            talk with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
