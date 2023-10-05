import React from 'react'
import './CalculatorButton.css'

const CalculatorButton = (props) => {

    const isOperator = (value) => {

        return ['+', '-', '*', '/'].includes(value);
    }

    if (isOperator(props.children)) {

        return (
            <button className={'each-button operator'}
                onClick={() => props.handleClick(props.children)}>
                {props.children}
            </button>
        )
    }
    else {
        return (
            <button className={'each-button'}
                onClick={() => props.handleClick(props.children)}>
                {props.children}
            </button>
        )
    }
}

export default CalculatorButton