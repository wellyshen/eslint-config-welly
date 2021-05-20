import React, { useEffect } from "react";
import { style } from "emotion";

interface Props {
  name: string;
}

const Foo = ({ name }: Props) => {
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
    <div css={style(false)} onClick={onClick}>
      I'm {name}
    </div>
  );
};

export default App;

const App = () => <Foo name={123} />;
