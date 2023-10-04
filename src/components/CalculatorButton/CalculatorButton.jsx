import React from 'react'
import './CalculatorButton.css'

const CalculatorButton = (props) => {

    const isOperator = (value) => {

        return ['+', '-', '*', '/'].includes(value);
    }

    return (
        <div className={`each-button ${isOperator(props.children) ? 'operator' : '' }`}
        onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

export default CalculatorButton