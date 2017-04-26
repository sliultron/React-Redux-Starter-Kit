jest.unmock("../../src/components/game/stars");



import TestUtils from 'react-dom/test-utils';
import React from 'react';
import Stars from "../../src/components/game/stars";

describe("The Game Component Tests",function(){
    it("should render 5 stars", function(){
        

         let stars = TestUtils.renderIntoDocument(
             <Stars numberOfStars={5} />
         );
         
         let spans =  TestUtils.findRenderedDOMComponentWithTag(stars, "span");

         expect(spans.length).toEqual(5);
    });
});