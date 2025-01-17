import GroupCard from "./GroupCard";

const ShowGroups = ({groups, refreshGroups }) => {
  const deleteGroup = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/groups/${id}`, {
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
      {
        groups.map((group) => (
          <GroupCard key={group._id} group={group} deleteGroup={deleteGroup}/>
        ))
      }
    </div>
  )
}

export default ShowGroups;