import { render } from '@testing-library/react';
import UserInfo from '../component/UserInfo';

let userdata = {
  name:'Dogtoo',
  age:"13",
  gender:'man',
  imgurl:''
}

const { getByText } = render(<UserInfo {...userdata}/>)

test('User data info', ()=>{
  getByText(userdata.name);
  getByText(userdata.age);
  getByText(userdata.gender);
})