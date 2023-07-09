import React, { ForwardedRef, forwardRef, useState, useRef } from "react";
// import { getBoxShadow, Color, getColors, getSize } from "@/styles/globals";
export interface IVerificationCode {
  steps: number;
  onComplete: (data:string) => void;
}

export const VerificationCode: React.FC<IVerificationCode> = forwardRef((props, ref) => {
  const { steps = 20, onComplete } = props;

  const [state, setState] = useState<Array<string>>(new Array(steps).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  const currentStep = state.length - 1;

  const stepKeys = Array.from(new Array(steps).keys());


  const onErase = (e: any, index: number) => {
    if (e.keyCode === 8) {
      console.log(index , state)
      setState(state.map((i, idx) => (idx === index  ? "" : i)));
      inputsRef.current[index - 1] && inputsRef.current[index - 1].focus()
    }
  };

  const onWrite = (e: any, index: number) => {
    const { value } = e.target;
    const hasNext = !!inputsRef.current[index + 1]
    setState(state.map((i, idx) => (idx === index ? value : i)));


    if(hasNext) return inputsRef.current[index + 1].focus()

    onComplete(state.reduce((acc, cur) => acc.concat(cur), ""));
      

  };

  return (
    <div ref={ref as ForwardedRef<HTMLDivElement>}>
      <div className="flex">
        {stepKeys.map((step) => {
          return (
            <input
              ref={(el) => el && (inputsRef.current[step] = el)}
              className="flex-1 mx-1 text-center"
              style={{
                backgroundColor: "#8BCAC1",
                color: "white",
                width: ".3rem",
                fontSize: "2rem",
                borderRadius: "1rem",
              }}
              onChange={(e) => onWrite(e, step)}
              onKeyDown={(e) => onErase(e, step)}
              value={state[step]}
            />
          );
        })}
      </div>
    </div>
  );
});

VerificationCode.displayName = "Verification_code";
