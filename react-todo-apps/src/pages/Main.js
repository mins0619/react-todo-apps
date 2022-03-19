import React from "react";
import { Link } from 'react-router-dom';


const Main = () => {
    return (
      <div>
        <h1>홈</h1>
        <p>투두리스트로</p>
        <Link to="/todo">투두</Link>
      </div>
    );
  };
  
  export default Main;