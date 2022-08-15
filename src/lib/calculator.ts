export class MortgageCalculator {
  principal = 0;
  interest = 0;
  monthlyPayment = 0;
  totalPayment = 0;
  totalInterest = 0;
  years = 0;
  downpayment = 0;

  constructor(
    principal: number,
    interest: number,
    years: number,
    downpayment: number
  ) {
    this.downpayment = downpayment;
    this.principal = principal - downpayment;
    this.interest = interest;
    this.years = years * 12;
  }

  static getTermOptions() {
    return [
      {
        label: '5 Years',
        value: 5,
      },
      {
        label: '10 Years',
        value: 10,
      },
      {
        label: '15 Years',
        value: 15,
      },
      {
        label: '20 Years',
        value: 20,
      },
      {
        label: '25 Years',
        value: 25,
      },
      {
        label: '30 Years',
        value: 30,
      },
    ];
  }

  // create a method for calculating monthly payment
  calculateMonthlyPayment() {
    const { principal, interest, years } = this;

    const monthlyInterest = interest / 12 / 100;

    const monthlyPayment =
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -years));

    this.monthlyPayment = monthlyPayment;
    return monthlyPayment;
  }
}
