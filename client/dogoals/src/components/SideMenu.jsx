import { FaBars } from 'react-icons/fa6';
const SideMenu = ({groups ,displayMenu}) => {
  return (
    <div className="fixed inset-0 flex">
        <div className="absolute inset-0 bg-black opacity-50" onClick={displayMenu}></div>
        <div className="relative p-2 bg-white w-1/6 z-10">
            <button onClick={displayMenu} className="ml-2 p-2 hover:bg-gray-200 rounded-full">
                <FaBars size={24}/>
            </button>
            <div className="mt-20">
                <div className="h-9 text-lg cursor-default">Groups</div>
                <div className="h-8 p-1 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer">All</div>
                {
                    groups.map((group) => (
                        <div className="h-8 p-1 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer" id={group._id} key={group._id}>{group.groupname}</div>
                    ))
                }
            </div>
        </div>
    </div>

  )
}

export default SideMenu