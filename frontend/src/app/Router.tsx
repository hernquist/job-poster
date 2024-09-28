// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home  from '../pages/Home';
import About from '../pages/About';
import PostJob from '../pages/PostJob';

export function App() {

  return (
    <div>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/post-job" Component={PostJob} />
        </Routes>
    </div>
  );
}

export default App;
