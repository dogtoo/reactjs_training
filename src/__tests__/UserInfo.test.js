import { render } from '@testing-library/react';
import UserInfo from '../component/UserInfo';

const { getByText } = render(<UserInfo name="Dogtoo" age="38" gender="man" imgurl=""/>)

test('User data info', ()=>{
  getByText('Dogtoo');
  getByText('38');
  getByText('man');
})