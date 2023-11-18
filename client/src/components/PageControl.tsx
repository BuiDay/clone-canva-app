import { useState } from "react";

const PageControl = () => {
  const [rangeValue, setRangeValue] = useState<string>("100")
  return (
    <div className="h-[5vh] w-full border border-t-1 bg-white fixed">
      <div className="w-full h-full flex justify-between items-center px-5">
        <div className="">Page 1/1</div>
        <div className="flex items-center gap-4">
          <input type="range" max={150} min={0} defaultValue={100} onChange={(e) => setRangeValue(e.target.value)} />
          <label htmlFor="" style={{ width: "100px" }}>{rangeValue} %</label>
        </div>
      </div>

    </div>
  );
};

export default PageControl;
