import { ChevronRight, ChevronLeft, ChevronDown, User  } from "react-iconly"
const Navbar = () => {
  return (
    <div className='py-4 px-5 flex items-center justify-between bg-black'>
      <div className="space-x-5 flex">
        <div className="bg-[#131212] rounded-full p-2 "><ChevronLeft set="bold" primaryColor="white"/></div>
        <div className="bg-[#131212] rounded-full p-2 "><ChevronRight set="bold" primaryColor="white"/></div>
      </div>
      <div className="flex space-x-9">
          <button className="py-2 px-4 text-sm font-bold border border-gray-500 rounded-full">Upgrade</button>
        <div className="bg-[#131212] flex items-center rounded-full px-1">
          <div className="p-1 bg-zinc-500 rounded-full"><User set="light" primaryColor="white"/></div>
          <div className="text-sm font-bold pl-2">Kena</div>
          <div><ChevronDown set="bold" primaryColor="white"/></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
