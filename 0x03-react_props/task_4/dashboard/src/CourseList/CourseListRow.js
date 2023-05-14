import React from "react";

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

export default CourseListRow;
