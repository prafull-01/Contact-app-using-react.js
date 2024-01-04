import "./App.css";
import Add from "./component/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./component/Chat";
import Edit from "./component/Edit";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Chat />}/>
            <Route path="/chat" element={<Chat />}/>
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="/add" element={<Add/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
