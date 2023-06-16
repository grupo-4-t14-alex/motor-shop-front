import { AnnouncementProvider } from "./contexts/AnnouncementContext";
import { AuthProvider } from "./contexts/AuthProvider";
import { ProductProvider } from "./contexts/ProductsContext";
import RoutesPages from "./routes";

function App() {
  return (
    <ProductProvider>
      <AnnouncementProvider>
        <AuthProvider>
          <RoutesPages/>
        </AuthProvider>
      </AnnouncementProvider>
    </ProductProvider>
  )
}

export default App
