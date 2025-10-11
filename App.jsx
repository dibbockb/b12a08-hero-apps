import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/app/:id" element={<Appinfo />} />
      <Route path="/allapps" element={<All />} />
    </Routes>
  );
}

export default App;
