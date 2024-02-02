import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowDeatilsPage from "./pages/ShowDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="showdetails/:showId" element={<ShowDeatilsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
