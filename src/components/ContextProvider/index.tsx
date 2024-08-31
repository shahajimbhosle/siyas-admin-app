import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavContextProvider } from "../../context/NavContext";
import { ThemeContextProvider } from "../../context/ThemeContext";

// Create a client
const queryClient = new QueryClient();

interface ContextProviderProps {
  children: any;
}

const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => (
  <ThemeContextProvider>
    <QueryClientProvider client={queryClient}>
      <NavContextProvider>{children}</NavContextProvider>
    </QueryClientProvider>
  </ThemeContextProvider>
);

export default ContextProvider;
