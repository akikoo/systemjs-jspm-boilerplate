'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'unexpected';
import System from 'systemjs';

import CardComponent from './CardComponent';

const shallowRenderer = TestUtils.createRenderer();

describe('CardComponent', () => {
  it('should render', () => {
    shallowRenderer.render(<CardComponent title="Title" />);
    expect(shallowRenderer.getRenderOutput(), 'to be defined');
  });
});