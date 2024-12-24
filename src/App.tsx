import { QueryClientProvider } from "@tanstack/react-query";
import MainPage from "./pages/main";
import { queryClient } from "./api";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
