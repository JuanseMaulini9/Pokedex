import React from "react";

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  return (
    <div className="pagination">
      <button onClick={onLeftClick}>◀</button>
      <div>
        {page}/{totalPages}
      </div>
      <button onClick={onRightClick}>▶</button>
    </div>
  );
};
export default Pagination;
