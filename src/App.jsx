import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-grey-50 text-grey-900">
        <Navbar />
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/tasks" element={ <Tasks />} />
            <Route path="/tasks/:id" element={ <TaskDetail /> } />
          </Routes>
      </div>
    </Router>
  )
}

export default App;
