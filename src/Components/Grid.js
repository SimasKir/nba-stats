import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';

const Grid = ({ children, fluid, className, ...props }) => {
    const classes = cx(fluid ? 'container-fluid' : 'container', className);

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
} 

Grid.propTypes = {
    children: PropTypes.node.isRequired,
    fluid: PropTypes.bool,
    className: PropTypes.string,
}

Grid.defaultProps = {
    fluid: false,
}

export default Grid;
