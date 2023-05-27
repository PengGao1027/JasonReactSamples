import { create } from "zustand";

const myBearStore = (set) => {
  {
    tasks: [{ title: "TestTask", state: "PLANNED" }];
  }
};

export const useBearStore = create(myBearStore);
