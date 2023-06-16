import { AuthProvider } from "./contexts/AuthProvider";
import RoutesPages from "./routes";

function App() {
  return (
    <AuthProvider>
      <RoutesPages/>
    </AuthProvider>
  )
}

export default App
