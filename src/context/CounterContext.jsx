import { createContext } from "react";

const counterStateContext = createContext(null);
const counterDispatcherContext = createContext(null);

export default {counterDispatcherContext,counterStateContext};