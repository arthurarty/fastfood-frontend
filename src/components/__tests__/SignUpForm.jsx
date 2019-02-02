import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUpForm from '../auth/SignUpForm';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    user: { email: 'art@your.com', password: 'password', username: 'username' },
    onSave: jest.fn(),
    onChange: jest.fn(),
    loading: jest.fn(),
  };
  const enzymeWrapper = shallow(<SignUpForm {...props} />);

  return { props, enzymeWrapper };
}

describe('signup form', () => {
  it('should render form', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('#signUpForm')).toBeDefined();
    expect(enzymeWrapper.find('TextInput')).toBeDefined();
  });
});
