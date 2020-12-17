import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ type, text, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

// PropTypes declaration
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
Button.defaultProps = {
    type: ""
}

export default Button
