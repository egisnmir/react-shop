import React, { useRef } from 'react';

const UncontrolledForm = () => {
    const loanRef = useRef<HTMLInputElement>(null);
    const loanTermRef = useRef<HTMLInputElement>(null);
    const interestRef = useRef<HTMLInputElement>(null);
    const monthlyPaymentRef = useRef<HTMLParagraphElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const loan = Number(loanRef.current?.value);
      const loanTerm = Number(loanTermRef.current?.value);
      const interest = Number(interestRef.current?.value);

      validateInputs(loan, loanTerm, interest);

      calculateMonthlyPayment();
    }

    const validateInputs = (loan: number, loanTerm: number, interest: number) => {
      if(loan) {
        if(loan < 0)
        loan = 0;
      else if(loan <= 5000)
        loan = loan;
      else
        loan = 5000;
  
      loanRef.current!.value = String(loan);
      }

      if(loanTerm) {
        if(loanTerm < 1)
          loanTerm = 1;
        else if(loanTerm <= 10)
          loanTerm = loanTerm;
        else
          loanTerm = 10;
    
          loanTermRef.current!.value = String(loanTerm);
      }

      if(interest) {
        if(interest < 1)
          interest = 1;
        else if(interest <= 100)
          interest = interest;
        else
          interest = 100;
    
          interestRef.current!.value = String(interest);
      }
    }

    const calculateMonthlyPayment = () => {
      const monthlyRate = Number(interestRef.current?.value) / 100 / 12;
      const numberOfPayments = Number(loanTermRef.current?.value) * 12;

      if (monthlyRate === 0) {
          return Number(loanRef.current?.value) / numberOfPayments;
      }

      const monthlyPayment = Number(loanRef.current?.value) *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        
      monthlyPaymentRef.current!.textContent = String(parseFloat(monthlyPayment.toFixed(2))) + '$';
    }

    return (
        <div>
            <h4>Uncontrolled component</h4>
            <form onSubmit={handleSubmit}>
                <label>Loan amount (max 5000):</label>
                <br />
                <input
                    ref={loanRef}
                    type="number"
                    defaultValue={2000}
                />
                <br />
                <br />

                <label>Loan term in years (max 10):</label>
                <br />
                <input
                    ref={loanTermRef}
                    type="number"
                    defaultValue={3}
                />
                <br />
                <br />

                <label>Interest rate (max 100):</label>
                <br />
                <input
                    ref={interestRef}
                    type="number"
                    defaultValue={4}
                />
                <br />
                <br />

                <button type="submit">Calculate</button>

                <p ref={monthlyPaymentRef} />
            </form>
        </div>
    )
}

export default UncontrolledForm;
