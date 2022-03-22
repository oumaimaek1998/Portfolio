import { createContext } from "react";

const RefContext = createContext();

export const RefProvider = RefContext.Provider;
export const RefConsumer = RefContext.Consumer;

export default RefContext;
