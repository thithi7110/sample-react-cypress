import React, { useState,useEffect } from 'react'

type AddNumParams = {
  num1?: number
  num2?: number
  onChange?: (e: string) => void
}
// function AddNum(num1: Number, num2: Number) {
export default function AddNum(props: AddNumParams) {

  //ステート保持
  const [num1, setNum1] = useState(props.num1);
  const [num2, setNum2] = useState(props.num2);
  const [num3, setNum3] = useState(0);

  const add = () => {
    setNum3((!!num1 ? num1 : 0) + (!!num2 ? num2 : 0));
  }
  

  const onChangeNum1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(Number(e.target.value));
    
    console.log("num1:"+num1);
    console.log("num2:"+num2);

  }
  const onChangeNum2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setNum2(Number(e.target.value));
    
    console.log("num1:"+num1);
    console.log("num2:"+num2);
  }

  //初回時
  useEffect(()=>{
    add();
  },[num1,num2])

  /*最初num1,num2のuseEffectでonChange書いていたら、
  num3の最後のchangeが捉えきれなかった。
  100+200でsetNum3でよぶとき、num3はまだ120であるので、
  その状態でonChangeで呼び出し元にnum3を渡しても120のままであった。
  num3が変わったらonChangeをよぶというのが意図するところである。
  */
  useEffect(()=>{
    if (!!props.onChange) {
      props.onChange(String(num3));
    }
  },[num3])

  return (
    <>
      <input data-cy="p1" value={num1} onChange={onChangeNum1}></input>
      <input data-cy="p2" value={num2} onChange={onChangeNum2}></input>
      <p data-cy="p3">{'計算結果：' + num1 + '+' + num2 + '=' + String(num3)}</p>
    </>
  );
}

