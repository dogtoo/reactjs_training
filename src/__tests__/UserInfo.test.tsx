import { render, fireEvent } from '@testing-library/react';
import UserInfo from '../component/UserInfo';

let userdata = {
  name: 'Dogtoo',
  age: "13",
  gender: 'man',
  imgurl: '',
  handleEdit: () => {
    console.log('enter')
  }
}

let editfn = jest.fn();

const { getByText, getByTestId } = render(<UserInfo {...userdata} />)

test('User data info', () => {
  getByText(userdata.name);
  getByText(userdata.age);
  getByText(userdata.gender);
})

test('edit button click', async () => {
  const button = getByTestId('editbutton')
  await fireEvent.click(button)
  expect(button).toHaveTextContent('Button Clicked')
})