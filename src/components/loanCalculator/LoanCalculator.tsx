import React, { useState, useEffect } from 'react';
import './LoanCalculator.scss';

const LoanCalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(50000);
    const [interestRate, setInterestRate] = useState<number>(5);
    const [loanTerm, setLoanTerm] = useState<number>(20);
    const [monthlyPayment, setMonthlyPayment] = useState<string>('0.00');

    // Formatter to add spaces for thousands (e.g., 50 000)
    const formatNumber = (number: number): string => {
        return new Intl.NumberFormat('en-GB', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(number);
    };

    // Calculate loan whenever inputs change
    useEffect(() => {
        calculateLoan();
    }, [loanAmount, interestRate, loanTerm]);

    const calculateLoan = () => {
        const principal = parseFloat(loanAmount.toString());
        const interest = parseFloat((interestRate / 100 / 12).toString());
        const numberOfPayments = loanTerm * 12;

        if (principal && interest && numberOfPayments) {
            const payment = (principal * interest) / (1 - Math.pow((1 + interest), -numberOfPayments));
            setMonthlyPayment(formatNumber(payment));
        } else {
            setMonthlyPayment('0.00');
        }
    };

    return (
        <div className="calculator-container">
            <h2 className="title">Loan Calculator</h2>
            <form className="calculator-form">
                <div className="input-group">
                    <label>Loan Amount (€):</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="input-field"
                    />
                </div>

                <div className="input-group">
                    <label>Annual Interest Rate (%):</label>
                    <input
                        type="number"
                        value={interestRate}
                        step="0.01"
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="input-field"
                    />
                </div>

                <div className="input-group">
                    <label>Loan Term (Years):</label>
                    <input
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="input-field"
                    />
                </div>
            </form>
            <h3 className="result">
                Monthly Payment: <span className="payment">€{monthlyPayment}</span>
            </h3>
        </div>
    );
};

export default LoanCalculator;
