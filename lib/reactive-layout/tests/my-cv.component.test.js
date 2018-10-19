import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './../my-cv.component';


it('renders without crashing', () => {
  mount(<App />)
});
