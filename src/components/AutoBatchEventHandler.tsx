import { useState } from "react";

export const AutoBatchEventHandler = () => {
  console.log("AutoBatchEventHandler");
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  const onClickUpdateButton = () => {
    console.log(state1);
    setState1((state1) => state1 + 1);
    console.log(state1);
    setState2((state2) => state2 + 1);
  };

  return (
    <div>
      <p>Automatic Batching確認用（イベントバンドラ）</p>
      <button onClick={onClickUpdateButton}>State更新！</button>
      <p>State1: {state1}</p>
      <p>State2: {state2}</p>
    </div>
  );
};
