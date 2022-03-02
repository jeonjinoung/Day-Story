import React from "react";
import { Link } from "react-router-dom";

export { default as Item } from "../itemPage/Item";
export { default as Select } from "../selectPage/Select";

export const MainLayOut = () => {
  return (
    <>
      <Link to="/item">
        <button>item</button>
      </Link>
      <div>메인페이지입니다.</div>
    </>
  );
};

export default MainLayOut;
