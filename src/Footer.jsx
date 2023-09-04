import React from "react";

function Footor() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer">
      <p className="footer-p">Copyright © 2023</p>
    </div>
  );
}

export default Footor;
