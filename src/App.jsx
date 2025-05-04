import Input from "./page/Input"
import Archieve from "./page/Archieve"
import { Routes, Route } from "react-router-dom" // perlu import Route juga

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/archieve" element={<Archieve />} />
      </Routes>
    </>
  )
}