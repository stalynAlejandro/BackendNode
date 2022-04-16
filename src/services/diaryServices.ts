import { IDiaryEntry, INewDiaryEntry, INoSensitiveDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: IDiaryEntry[] = diaryData as Array<IDiaryEntry>;

export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo = (): INoSensitiveDiaryEntry[] => {
  return diaries.map((diary: IDiaryEntry) => {
    return {
      id: diary.id,
      date: diary.date,
      weather: diary.weather,
      visibility: diary.visibility,
    };
  });
};

export const findById = (id: number): IDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

export const addDiary = (newEntry: INewDiaryEntry): IDiaryEntry => {
  const newDiaryEntry: IDiaryEntry = {
    id: Math.max(...diaries.map((entry) => entry.id)) + 1,
    ...newEntry,
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};
