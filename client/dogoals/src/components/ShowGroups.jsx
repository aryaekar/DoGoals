import GroupCard from "./GroupCard";

const ShowGroups = ({ groups, refreshGroups }) => {
  const API_URL=process.env.SERVER_URL;
  
  const deleteGroup = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/groups/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) {
        console.log("Error in deleting data");
      }
      refreshGroups();
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {groups && groups.length > 0 ? (<div className="grid grid-cols-4 place-items-center gap-4">
        {
          groups.map((group) => (
            <GroupCard key={group._id} group={group} deleteGroup={deleteGroup} />
          ))
        }
      </div>) : (<div className="text-center text-red-500 ">No Groups Yet</div>)}
    </div>
  )
}

export default ShowGroups;