import { GetServerSidePropsResult } from 'next';
import React from 'react';
import { MortgageCalculator } from '../lib/calculator';

type TermOptions = ReturnType<typeof MortgageCalculator.getTermOptions>;

const Calculator = () => {
  const termsOptions = MortgageCalculator.getTermOptions();

  const [term, setTerm] = React.useState<number | undefined>(termsOptions[0].value);
  const [loanAmount, setLoanAmount] = React.useState<number | undefined>(
    undefined
  );
  const [interestRate, setInterestRate] = React.useState<number | undefined>(
    undefined
  );
  const [downPayment, setDownPayment] = React.useState<number | undefined>(
    undefined
  );
  const [monthlyPayment, setMonthlyPayment] = React.useState<
    number | undefined
  >(undefined);

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    console.log(term, loanAmount, interestRate, downPayment);
  }), [term, loanAmount, interestRate, downPayment];

  const calculateMortgage = async () => {
    try {

        console.log({
            term,
            loanAmount,
            interestRate,
            downPayment,
        })


        if(!term || !loanAmount || !interestRate || !downPayment) {
            setErrorMessage('Please fill out all fields.');
            return;
        }
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          term,
          loanAmount,
          interestRate,
          downPayment,
        }),
      });

      const result = await response.json();
      console.log({result});
      setMonthlyPayment(result.monthlyPayment);
    } catch (error:any) {
        console.log('error', error.message);
        setErrorMessage(error.message);
    }
  };

  const selectTermComponent = (
    <select
      name="term"
      id="term"
      onChange={(e: any) => {
        console.log('onChange', e.target.value);
        setTerm(parseInt(e.target.value, 10));
      }}
    >
      {termsOptions.map((term) => (
        <option key={term.label} value={term.value}>
          {term.label}
        </option>
      ))}
    </select>
  );

  return (
    <div>
      <div>
        {errorMessage && <div>{errorMessage}</div>}
      </div>

      <form>
        <div>
          <label>
            Pricipal Loan Amount :
            <input
              type="number"
              onChange={(e) => setLoanAmount(parseInt(e.target.value, 10))}
              name="name"
            />
          </label>
        </div>

        <div>
          <label>Mortgage Period (years) :{selectTermComponent}</label>
        </div>

        <div>
          <label>
            Annual Interest Rate :
            <input
              type="number"
              name="name"
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
          </label>
        </div>

        <div>
          <label>
            Downpayment :
            <input
              type="number"
              name="name"
              onChange={(e) => setDownPayment(parseInt(e.target.value, 10))}
            />
          </label>
        </div>

        <div>
          <label>
            Monthly Mortgage Payment :
            <input type="number" name="name" />
          </label>
        </div>

        <input type='buttom' onClick={() => calculateMortgage()} value="Calculate" />
      </form>
    </div>
  );
};

export default Calculator;
