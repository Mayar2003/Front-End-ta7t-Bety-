import { createContext } from "react";

export const ResponseStateContext = createContext({
  response: null,
  error: null,
  loading: false,
});
