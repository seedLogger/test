import React from "react";
import ProfileCard from "../components/ProfileCard";

const Developers = async () => {
  //   const file = await fs.readFile(
  //     process.cwd() + "/assets/9619740.json",
  //     "utf8"
  //   );
  //   const data = JSON.parse(file);

  //   const keys = Object.keys(data);
  //   console.log("Keys:", keys);

  return (
    <div className="p-3 flex items-center justify-center">
      <div className="w-4/5">
        <h1 className="text-primary">Developers</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {devDetails.map((developer) => (
              <ProfileCard
                key={developer.jsonId} // Remember to add a unique key when rendering arrays of components
                name={developer.name}
                userName={developer.userName}
                jsonId={developer.jsonId}
                image={developer.image}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const devDetails = [
  {
    name: "Carlos Van Rafael Planillo",
    userName: "userName1",
    jsonId: 1,
    image: "https://gitlab.com/uploads/-/system/user/avatar/9619740/avatar.png",
  },
  {
    name: "User2",
    userName: "userName2",
    jsonId: 2,
    image: "https://gitlab.com/uploads/-/system/user/avatar/9619740/avatar.png",
  },
  {
    name: "User3",
    userName: "userName3",
    jsonId: 3,
    image: "https://gitlab.com/uploads/-/system/user/avatar/9619740/avatar.png",
  },
];

export default Developers;
