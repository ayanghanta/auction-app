import { createContext, useContext, useReducer } from "react";
const CurrentBidderContext = createContext();

const intialSate = {
  isLoading: false,
  currnetBidData: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "sattel":
      return { ...state, isLoading: false };
    case "updateCurrentBidder":
      return { ...state, currnetBidData: action.payload, isLoading: false };
  }
}

function CurrentBidderProvider({ children }) {
  const [{ isLoading, currnetBidData }, dispatch] = useReducer(
    reducer,
    intialSate
  );
  return (
    <CurrentBidderContext.Provider
      value={{ isLoading, currnetBidData, dispatch }}
    >
      {children}
    </CurrentBidderContext.Provider>
  );
}
function useCurrentBidder() {
  const context = useContext(CurrentBidderContext);
  if (context === undefined)
    throw new Error("Use currentbidder contect inside its provider");
  return context;
}

export { CurrentBidderProvider, useCurrentBidder };
