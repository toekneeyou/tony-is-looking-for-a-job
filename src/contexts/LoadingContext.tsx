import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  createContext,
  useState,
  useMemo,
} from "react";
import { Section, sections } from "../constants/data";

type LoadingState = { [section in Section]: boolean };

const initialLoadingState: LoadingState = sections.reduce((p, c) => {
  if (c.label === "skills") {
    p.skills = false;
  } else {
    p[c.label] = true;
  }
  return p;
}, {} as LoadingState);

interface LoadingContextState {
  isLoading: boolean;
  loadingState: LoadingState;
  setLoadingState: Dispatch<SetStateAction<LoadingState>>;
}

const LoadingContext = createContext<LoadingContextState | null>(null);

interface LoadingContextProviderProps {
  children: ReactNode;
}
export default function LoadingContextProvider({
  children,
}: LoadingContextProviderProps) {
  const [loadingState, setLoadingState] = useState(initialLoadingState);

  const isLoading = useMemo(() => {
    const loadingStateValues = Object.values(loadingState);
    let value = false;
    for (let i = 0; i < loadingStateValues.length; i++) {
      if (loadingStateValues[i]) {
        value = true;
        break;
      }
    }
    return value;
  }, [loadingState]);

  return (
    <LoadingContext.Provider
      value={{ isLoading, loadingState, setLoadingState }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoadingContext = () => {
  const loadingState = useContext(LoadingContext);
  if (!loadingState) {
    throw new Error("useLoadingContext must be used within a Provider");
  }
  return loadingState;
};
