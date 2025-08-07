import AppRoutes from './AppRoutes'
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryclient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <AppRoutes />
      </QueryClientProvider>
    </>
  );
}

export default App
