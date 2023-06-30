import { AnnouncementProvider } from "./contexts/AnnouncementContext";
import { AuthProvider } from "./contexts/AuthProvider";
import { CommentProvider } from "./contexts/CommentsContext";
import { ProductProvider } from "./contexts/ProductsContext";
import RoutesPages from "./routes";

function App() {
  return (
    <ProductProvider>
      <AnnouncementProvider>
        <AuthProvider>
          <CommentProvider>
            <RoutesPages/>
          </CommentProvider>
        </AuthProvider>
      </AnnouncementProvider>
    </ProductProvider>
  )
}

export default App
