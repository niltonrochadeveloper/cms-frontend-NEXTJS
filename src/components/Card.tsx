import React from "react";

interface Props {
  username: string;
}

export default function Home(props: Props) {

  return (
    <>
      <h1>Olá, {props.username}</h1>
    </>
  )
}
