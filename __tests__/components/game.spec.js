
jest.unmock('../../src/components/game/stars');


import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';
import Stars from '../../src/components/game/stars';


describe("The Game Component Tests",function(){
    it("set number of stars to be 5, should render 5 stars", function(){
          let numberOfStars = 5;
          let element  = ReactTestUtils.renderIntoDocument(
            <div>
              <Stars numberOfStars={numberOfStars} />
            </div>
          );

          let stars = ReactDOM.findDOMNode(element).children[0];

          let spans = stars.childNodes;

          expect(spans.length).toEqual(numberOfStars);
    });
});
