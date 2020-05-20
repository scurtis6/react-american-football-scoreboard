import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const quarterStop = () => {
    if(quarter === 4){
      return;
    }
    setQuarter(quarter + 1)
  }

  const [downs, setDowns] = useState(1);
  const downsStop = () => {
    if(downs === 4){
      return;
    }
    setDowns(downs + 1);
  }
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
  <div className="down__value">{downs}</div>
          <button className="quarter_downs" onClick= {downsStop}>Set Downs</button>
          <button className="reset_downs" onClick = {() => setDowns(1)}>Reset</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
          <button className="quarter_count" onClick= {quarterStop}>Set Quarter</button>
          <button className="reset_quarter" onClick = {() => setQuarter(1)}>Reset</button>
      </div>
    </div>
  );
};

export default BottomRow;
