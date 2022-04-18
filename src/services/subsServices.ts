import { ISubs } from "../types";
import subsData from "./subs.json";

const subs: ISubs[] = subsData as Array<ISubs>;

export const getSubs = () => subs;
