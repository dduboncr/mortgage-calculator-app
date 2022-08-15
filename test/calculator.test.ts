import { MortgageCalculator } from '../src/lib/calculator';
describe('calculate mortgage monthly payment', () => {
  it('should calculate monthly payment', () => {
    const calculator = new MortgageCalculator(100000, 3.5, 30, 3000);
    expect(calculator.calculateMonthlyPayment()).toBe(435.5733471745588);
  });
});
