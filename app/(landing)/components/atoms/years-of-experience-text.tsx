"use client";
import { FC, useMemo } from "react";
import TypographyHighlight from "../typography-highlight";

export const YearsOfExperienceText: FC = () => {
  const yearDiff = useMemo(() => getYearsFromYear(2017, new Date()), []);
  const text = getText(yearDiff);
  console.log({ yearDiff, text });

  return <TypographyHighlight>{text}</TypographyHighlight>;
};

function getText(yearDiff: number): string {
  if (yearDiff < 10) {
    return "almost a decade";
  }

  if (yearDiff < 12) {
    return "over a decade";
  }

  if (yearDiff < 15) {
    return "approaching 15 years";
  }

  if (yearDiff < 20) {
    return "nearly 2 decades";
  }

  return `over ${yearDiff} years`;
}

function getYearsFromYear(givenYear: number, targetDate: Date) {
  const targetYear = new Date(targetDate).getFullYear();
  return targetYear - givenYear;
}
