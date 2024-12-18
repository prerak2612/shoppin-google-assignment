export default function Navbar() {
  return (
    <div className="h-14">
      <div className="flex text-[#E8EAED]  relative p-4">
        <div className="flex gap-4 absolute ">
          <a className="hover:underline cursor-pointer text-sm text-[#E8E8E8]">About</a>
          <a className="hover:underline cursor-pointer text-sm text-[#E8E8E8]"> Store</a>
        </div>
        <div className="flex gap-4 absolute right-0 mr-4">
          <a className="hover:underline cursor-pointer text-xs pt-2 text-[#FFFFFF]">Gmail</a>
          <a className="hover:underline cursor-pointer text-xs pt-2 text-[#FFFFFF]">Images</a>
          <div className="flex items-center justify-center rounded-full h-8 w-8 relative hover:bg-[#444746]">
            <img className="h-4 w-4  cursor-pointer" src="drawer-icon-removebg-preview.png"></img>
          </div>
          <div className="flex items-center justify-center rounded-full h-5 w-8 relative hover:bg-[#444746] pt-2">
            <div className="w-8 h-8 bg-[#F4511E] rounded-full flex items-center justify-center text-sm">
              P
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
