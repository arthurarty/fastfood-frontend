import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    name: 'name',
    label: 'name',
    placeHolder: 'name',
    onChange: jest.fn(),
    value: 'name',
  };
  const enzymeWrapper = shallow(<TextInput {...props} />);

  return { props, enzymeWrapper };
}

describe('signup form', () => {
  it('should render form', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('#wrapperClass')).toBeDefined();
    expect(enzymeWrapper.find('input')).toBeDefined();
  });
});
