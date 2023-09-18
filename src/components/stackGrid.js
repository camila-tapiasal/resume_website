import React from "react";
import Grid, {STACK_GRID} from './Grid';
import PropTypes from 'prop-types';

const StackGrid = (props) => {
	return <Grid type={STACK_GRID} {...props} />
}

StackGrid.defaultProps = {
	span: 12,
}

StackGrid.propTypes = {
	span: PropTypes.number.isRequired
}

export default StackGrid;