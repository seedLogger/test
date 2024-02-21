import React from "react";
import { json } from "stream/consumers";

// Define the type for props
interface Props {
  name: string;
  userName: string;
  jsonId: number;
  image: string;
}

const ProfileCard = ({ name, userName, jsonId, image }: Props) => {
  return (
    <tr>
      <td>
        <a href={`developers/${userName}`} className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-14 rounded2">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <h2 className="font-bold">{name}</h2>
          </div>
        </a>
      </td>
      <td>
        <div className="font-bold">{userName}</div>
      </td>
      <td>
        <span className="badge badge-success">{jsonId}</span>
      </td>
    </tr>
  );
};

export default ProfileCard;
