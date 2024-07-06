// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavContextProvider } from "../../context/NavContext";

// Create a client
// const queryClient = new QueryClient();

interface ContextProviderProps {
  children: any;
}

const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => (
  // <QueryClientProvider client={queryClient}>
  <NavContextProvider>{children}</NavContextProvider>
  // </QueryClientProvider>
);

export default ContextProvider;
