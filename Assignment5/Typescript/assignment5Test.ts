const ch = require('chai');
const expect = ch.expect;
const calculator = require('./assignment5.ts');
describe('Calculator', () => {
  describe('ODD_EVEN', () => {
    it('should tell whether a number is odd or even', () => {
        expect(calculator.evenodd(2)).to.equal(1)
      })
  })
  describe('Palindrome', () => {
     it('should tell whether string is palindrome or not', () => {
         expect(calculator.palindrome("racecar")).to.equal(1)
         })
   })
  describe('Total_Charges', () => {
     it('calculate total charges for taxi', () => {
         expect(calculator.totalcharges(12)).to.equal(216)
        })
   })

describe('Leap_Year', () => {
   it('should tell whether year is leap year or not', () => {
       expect(calculator.leapyear(1996)).to.equal(1)
    })
   it('should tell whether year is leap year or not', () => {
      expect(calculator.leapyear(2001)).to.equal(0)
      })
  })
  
  describe('Median_of_array', () => {
    it('should give median of array', () => {
        expect(calculator.medianofarray([1,5.5,4.5,2,7,7])).to.equal(5)
       })
  })
})