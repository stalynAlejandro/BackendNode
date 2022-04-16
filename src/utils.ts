import { INewDiaryEntry } from "./types";
import { WeatherEnum, VisibilityEnum } from "./enums";

// Checks
const isString = (checkString: any): boolean => {
  return typeof checkString === "string" || checkString instanceof String;
};

const isDate = (checkDate: any): boolean => {
  return Boolean(Date.parse(checkDate));
};

const isWeather = (checkWeather: any): boolean => {
  return Object.values(WeatherEnum).includes(checkWeather);
};

const isVisibility = (checkVisibility: any): boolean => {
  return Object.values(VisibilityEnum).includes(checkVisibility);
};

// Parsers
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }
  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): WeatherEnum => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather");
  }
  return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): VisibilityEnum => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missing weather");
  }
  return visibilityFromRequest;
};

// Converters
export const toNewDiaryEntry = (object: any): INewDiaryEntry => {
  const newEntry: INewDiaryEntry = {
    date: parseDate(object.date),
    comment: parseComment(object.comment),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};
