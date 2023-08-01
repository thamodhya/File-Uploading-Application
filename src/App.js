 
import Home from './components/Home'
import NavBar from './components/Navbar'
import Send from './components/Send'
import Receive from './components/Receive'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
            <div style={{backgroundColor: "#fefefe"}}> 
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/send" element={<Send />} />
                    <Route path="/download" element={<Receive />} />
                </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App