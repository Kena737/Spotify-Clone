import { ChevronRight, ChevronLeft  } from "react-iconly"
const Navbar = () => {
  return (
    <div className='py-4 px-5 flex justify-between bg-black '>
      <div className="space-x-5 flex">
        <div className="bg-[#080808] rounded-full p-2 "><ChevronLeft set="bold" primaryColor="white"/></div>
        <div className="bg-[#080808] rounded-full p-2 "><ChevronRight set="bold" primaryColor="white"/></div>
      </div>
    </div>
  )
}

export default Navbar
