import { FaBars } from 'react-icons/fa6';
const Navbar = ({displayMenu}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 p-2 flex justify-between bg-white">
      <button onClick={displayMenu} className='ml-2 p-2 hover:bg-gray-200 rounded-full '>
        <FaBars size={24} />
      </button>
      <h1 className="mr-5 text-2xl p-1 font-extrabold text-orange-500">DoGoals</h1>
      <button className="m-2 ">
        x
      </button>
    </div>
  )
}

export default Navbar