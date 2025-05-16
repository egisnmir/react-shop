import { useEffect, useState } from 'react';

const ControlledForm = () => {
    const [loan, setLoan] = useState(2000);
    const [loanTerm, setLoanTerm] = useState(3);
    const [interest, setInterest] = useState(4);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const handleSetLoan = (val: number) => {
        if(val < 0)
            setLoan(0);
        else if(val <= 5000)
            setLoan(val);
        else
            setLoan(5000);
    }

    const handleSetTerm = (val: number) => {
        if(val < 1)
            setLoanTerm(1);
        else if(val <= 10)
            setLoanTerm(val);
        else
            setLoanTerm(10);
    }

    const handleSetInterest = (val: number) => {
        if(val < 1)
            setInterest(1)
        else if(val <= 100)
            setInterest(val)
        else
            setInterest(100)
    }

    const calculateMonthlyPayment = () => {
        const monthlyRate = interest / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        if (monthlyRate === 0) {
            return loan / numberOfPayments;
        }

        const monthlyPayment = loan *
            (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
        setMonthlyPayment(
            parseFloat(monthlyPayment.toFixed(2))
        );
    }

    useEffect(() => {
        calculateMonthlyPayment();
    }, [loan, loanTerm, interest]);

    return (
        <div style={{marginRight: '150px'}}>
            <h4>Controlled component</h4>
            <form>
                <label>Loan amount (max 5000):</label>
                <br />
                <input
                    onChange={(e) => handleSetLoan(Number(e.target.value))}
                    value={loan}
                    type="number"
                />
                <br />
                <br />

                <label>Loan term in years (max 10):</label>
                <br />
                <input
                    onChange={(e) => handleSetTerm(Number(e.target.value))}
                    value={loanTerm}
                    type="number"
                />
                <br />
                <br />

                <label>Interest rate (max 100):</label>
                <br />
                <input
                    onChange={(e) => handleSetInterest(Number(e.target.value))}
                    value={interest}
                    type="number"
                />
                <br />
                <br />

                <div>Monthly payment: {monthlyPayment}$</div>
            </form>
        </div>
    )
}

export default ControlledForm;
