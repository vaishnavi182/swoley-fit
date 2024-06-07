import React from "react";
import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["the", "Danger", "Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard exercise={exercise} i={i} key={i}></ExerciseCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
