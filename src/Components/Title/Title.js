import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';

const MODES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'base', 'lead', 'small', 'micro', 'nano'];
const COMPONENT_CLASSES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Title = ({ text, tag, tagStyle, children, className }) => {

    const TitleTag = COMPONENT_CLASSES.includes(tag) ? tag : 'h1';
    const tagStyleClass = MODES.includes(tagStyle) ? tagStyle : '';
    const titleClass = cx('Text', tagStyleClass, className);

    return (
        <TitleTag className={titleClass}>{children || text}</TitleTag>
    )
} 

Title.propTypes = {
    text: PropTypes.node,
    tag: PropTypes.oneOf(COMPONENT_CLASSES),
    tagStyle: PropTypes.oneOf(MODES),
    children: PropTypes.node,
    className: PropTypes.string
}

Title.defaultProps = {
    tag: 'h1',
}

export default Title;