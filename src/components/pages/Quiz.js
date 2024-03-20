import React from "react";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgessBar from "../ProgessBar";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgessBar />
      <MiniPlayer />
    </>
  );
}
