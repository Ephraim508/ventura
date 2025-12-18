import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPOList from "./pages/ipoList";
import IPODetails from "./pages/ipoDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IPOList />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
      </Routes>
    </Router>
  );
}

export default App;
