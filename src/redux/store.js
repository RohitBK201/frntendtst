import { legacy_createStore } from "redux";
import { tblreducer } from "./reducer";

export const store = legacy_createStore(tblreducer)