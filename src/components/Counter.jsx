import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { inc, dec, reset } from "../store/counter";

const Counter = function () {
  const dispatch = useDispatch();
  const buttonStyle = { margin: "2px", width: "50px" };
  const counter = useSelector((store) => store.counter.value);
  return (
    <>
      <div>Current count : {counter}</div>
      <div>
        <button style={buttonStyle} onClick={() => dispatch(inc())}>
          +
        </button>
        <button style={buttonStyle} onClick={() => dispatch(dec())}>
          -
        </button>
        <button style={buttonStyle} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Counter;
