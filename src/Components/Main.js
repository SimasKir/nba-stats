import React from "react";
import PropTypes from 'prop-types';
// import cx from 'classnames';

const Main = ({ children, className, ...props }) => {

    return (
        <main className={className} {...props}>
        Greetings
            {children}
        </main>
    )
} 

Main.propTypes = {
    children: PropTypes.node.isRequired,
    fluid: PropTypes.bool,
    className: PropTypes.string,
}

export default Main;