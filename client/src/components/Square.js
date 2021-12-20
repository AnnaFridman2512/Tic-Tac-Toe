
import './Square.css';


export default function Square({val, chooseSquare}) {//takes "" / O / X
  return (
    <div className="square" onClick={chooseSquare}>
        {val}
    </div>
  );
}


