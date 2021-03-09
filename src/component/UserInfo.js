import React from "react";

function UserInfo({name, age, gender, imgurl}) {
  return(
    <div>
      <div>
        <img src={imgurl} alt={name} />
      </div>
      <div>
        <span>Name:</span>
        <div>{name}</div>
      </div>
      <div>
        <span>Age:</span>
        <div>{age}</div>
      </div>
      <div>
        <span>Gender:</span>
        <div>{gender}</div>
      </div>
    </div>
  )
}

export default UserInfo;