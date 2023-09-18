export const GRID_ROW = "GRID ROW" ;
export const MOBILE_FIRST_GRID = "FLEX_ GRID" ;
export const STACK_GRID = 'STACK GRID';
export const MOBILE_DESKTOP_GRID = 'MOBILE_ DESKTOP_ GRID';
/** 
 * CBP Themed Grid, used to align components on screen.
 * Divides row into 12 columns
 * Types:
 * - Row - Parent Grid type can be skipped
 * - Mobile First Flex Grid - Flex - single set of col-sm-*
 * - Stacking Grid - Stack - single set of col-md- grid classes
 * - Mobile & Desktop Grid - Mobile
- set small and med size (adding _col-xs-* _col-md-* to your col
*/

const Grid = ({children, span, span2, type, className, ...restProps3}) => { 
	//

	let classes ="row";
	if (type === MOBILE_FIRST_GRID) {
		classes = 'col-sm-' + span;
	} else if (type === STACK_GRID) {
		classes = 'col-md-* + span ;
	}else if (type === MOBILE_DESKTOP_GRID) {
		classes = 'col-xs' + span + 'col-md' + span2;
	}
	if (className) {
		classes += " " + className;
	}
	
	return (
		<div className={classes} {...restProps}>{children}</div>
	);
	}
Grid.defaultProps = {
	span: 12, 
	span2: 12
}

Grid.propTypes = {
type: PropTypes.oneOf([GRID_ROW, MOBILE_FIRST_GRID, STACK_GRID,MOBILE_DESKTOP_GRID]),
Span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 
span2: Proplypes.one0f([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};
export default Grid;