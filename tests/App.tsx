import React, { FC, useEffect } from "react";

import Greet from "./Greet";

interface Props {
  name: string;
}

const Foo: FC<any> = ({ name }: Props) => {
  onClick();

  let num = 123;
  const [count, setCount] = useState();

  useEffect(() => {
    const num = 456;
    count++;
  }, []);

  const onClick = () => {
    setCount({});
  };

  return (
    <>
      <Greet />
      <div onClick={onClick}>I'm {name}</div>
    </>
  );
};

export default App;

const App = () => <Foo name={123} />;
