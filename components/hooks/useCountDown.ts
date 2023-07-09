import { useEffect, useState } from "react";

interface propsInterface {
  countDownAmount: number;
  onFinishCallback?: Function;
}

const useCountDown = (props: propsInterface) => {
  const { countDownAmount, onFinishCallback } = props;
  const [timeLeft, setTimeLeft] = useState<number>(countDownAmount);

  let timeoutId: any = null;
  useEffect(() => {
    if (timeLeft <= 0) {
      onFinishCallback && onFinishCallback();
      return clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      countDown();
    }, 1000);
    return ()=>{
      if(timeoutId){
        clearTimeout(timeoutId)
        timeoutId = null;
      }
    }
  }, [timeLeft]);

  const countDown = () => setTimeLeft((prevState) => prevState - 1);

  return {
    timeLeft,
  };
};

export { useCountDown };
