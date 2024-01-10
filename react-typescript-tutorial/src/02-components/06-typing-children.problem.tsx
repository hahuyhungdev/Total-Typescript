import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};
export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
