
import React, { useState } from "react";

const Test = (props) => {
  //   const { count } = props;

  //   console.log(count);

  const [count, setCount] = useState(0);

  //   const minus = () => {
  //     setCount(count - 1);
  //   };

  //   const plus = () => {
    // // const oldCount = count;
   // // const newCount = oldCount + 1;
  // //   setCount(newCount);
  //     setCount(count + 1);
  //   };

  console.log(count); 

  return (
    <div>
      <div className="count mt-5">
        <h1 className='ms-3 p-3 text-danger'>{count}</h1>
        <button onClick={() => setCount(count + 1)} className="ms-3 p-3 ">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="ms-3 p-3 ">
          -
        </button>
      </div>
    </div>
  );
};

export default Test;