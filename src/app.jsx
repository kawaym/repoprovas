import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import AuthPage from "./pages/AuthPage";

import ResetStyle from "./styles/ResetStyle";

export default function App() {
  return (
    <>
      <ResetStyle />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage type="login" />} />
            <Route path="/signup" element={<AuthPage type="cadastro" />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
