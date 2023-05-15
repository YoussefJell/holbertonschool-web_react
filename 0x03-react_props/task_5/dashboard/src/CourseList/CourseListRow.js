import React from "react";
import PropTypes from "prop-types";

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  return (
    isHeader
    ? textSecondCell == null
    ? <th colSpan={2}>{textFirstCell}</th>
    : [<th colSpan={2}>{textFirstCell}</th>,
    <th colSpan={2}>{textSecondCell}</th>] :
    [<td>{textFirstCell}</td>,
    <td>{textSecondCell}</td>]
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default CourseListRow;
