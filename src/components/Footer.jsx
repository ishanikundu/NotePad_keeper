import React from "react";

function Fotter() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>copyrightⓒ {date} </p>
    </footer>
  );
}
export default Fotter;
