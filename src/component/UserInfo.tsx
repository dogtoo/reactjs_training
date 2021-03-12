import React from "react";

interface Props {
  name: string;
  age?: number;
  gender: string;
  imgurl: string;
  handleEdit?: ()=> void;
}

//function UserInfo({name, age, gender, imgurl}) {
const UserInfo: React.FC<Props> = (props) => {
  const HashChangeEvent = () => {    
    console.log("userinfo on click");
    props.handleEdit?.apply(null)
  }

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
      {
        props.handleEdit && (
          <div>
            <button onClick={()=>HashChangeEvent()}>Edit</button>
          </div>
        )
      }
    </div>
  )
}

export default UserInfo;