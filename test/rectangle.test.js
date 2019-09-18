const assert = require('assert');
const Rectangle = require('../rectangle');

describe('Rectangle', ()=> {
    describe('CalculatePerimeter', ()=> {
        it('Should return 40 when a side is 10', () => {
            const height = 10;
            const width = 10;
            const expected = 40;
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
        it('Should return -4 when height and width are -1', () => {
            const height = -1;
            const width = -1;
            const expected = -4;
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
        it('Should return error when height is [] and width is a', () => {
            const height = [];
            const width = 'a';
            const expected = 'error';
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
        it('Should return error when height is a and width is {}', () => {
            const height = 'a';
            const width = {};
            const expected = 'error';
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
    })
    describe('constructor', () => {
       it('should return 20 when height is 5 and width is 5')
           const height = 5;
           const width = 5;
           const result = new Rectangle(height,width)
           const expectedHeight = 5
           const expectedWidth = 5
           assert.equal(result.height, expectedHeight);
           assert.equal(result.width, expectedWidth);
    })
})