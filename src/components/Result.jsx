import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {  // { value } -> Destructuring, it is equivalent to { value } = props

    console.log("Renderización de Result", value);

    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )

}

// PropTypes declaration
Result.propTypes = {
    value: PropTypes.number.isRequired
}
Result.defaultProps = {
    value: 0
}

export default Result;
