import { WeatherEnum, VisibilityEnum } from "./enums";

export interface IDiaryEntry {
  id: number;
  date: string;
  weather: WeatherEnum;
  visibility: VisibilityEnum;
  comment: string;
}

export interface INoSensitiveDiaryEntry extends Omit<IDiaryEntry, "comment"> {}

export interface INewDiaryEntry extends Omit<IDiaryEntry, "id"> {}

interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number;
}

// export type NonSensitiveInfoDiaryEntry = Pick<IDiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
//type SpecialDiaryEntry2 = DiaryEntry & {
//  flightNumber: number
//}

export interface ISubs {
  nick: string;
  months: number;
  profile: string;
  description: string;
}
