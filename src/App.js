 
import Home from './components/Home'
import NavBar from './components/Navbar'
import Upload from './components/Upload'
import Storage from './components/Storage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
            <div style={{backgroundColor: "#fefefe"}}> 
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/storage" element={<Storage />} />
                </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App