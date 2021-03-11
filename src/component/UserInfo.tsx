import React from "react";

interface Props {
  name: String;
  age?: Number;
  gender: String;
  imgurl: String;
}

//function UserInfo({name, age, gender, imgurl}) {
const UserInfo: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <img src={props.imgurl} alt={props.name} />
      </div>
      <div>
        <span>Name:</span>
        <div>{props.name}</div>
      </div>
      <div>
        <span>Age:</span>
        <div>{props.age}</div>
      </div>
      <div>
        <span>Gender:</span>
        <div>{props.gender}</div>
      </div>
    </div>
  )
}

export default UserInfo;