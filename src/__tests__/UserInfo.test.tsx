import { render, fireEvent } from '@testing-library/react';
import UserInfo from '../component/UserInfo';
let editfn = jest.fn();
let userdata = {
  name: 'Dogtoo',
  age: 13,
  gender: 'man',
  imgurl: '',
  handleEdit: editfn
}
const { getByText } = render(<UserInfo {...userdata} />)

test('User data info', () => {
  getByText(userdata.name);
  getByText(userdata.age);
  getByText(userdata.gender);
})

test('edit button click', async () => {
  const { getByTestId } = render(<UserInfo {...userdata} />)
  const button = getByTestId('editbutton')
  await fireEvent.click(button)
  expect(editfn).toHaveBeenCalledTimes(1);
})