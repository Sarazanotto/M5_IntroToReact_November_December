import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { CommentsProvider } from "./context/CommentsContext";
import { InputSearchProvider } from "./context/inputSearchContext";
import { SelectedBookProvider } from "./context/SelectedBookContext";
import { LikedProvider } from "./context/LikedContext.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";
import { ModalProvider } from "./context/ModalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modeDark.css"
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LikedProvider>
        <CartContextProvider>
          <ModalProvider>
            <SelectedBookProvider>
              <InputSearchProvider>
                <CommentsProvider>
                  <App />
                </CommentsProvider>
              </InputSearchProvider>
            </SelectedBookProvider>
          </ModalProvider>
        </CartContextProvider>
      </LikedProvider>
    </ThemeProvider>
  </StrictMode>
);
