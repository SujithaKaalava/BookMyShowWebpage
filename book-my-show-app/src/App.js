
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//React

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing the pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movie/:id" element={<MoviePage/>}/>
      <Route path="/plays" element={<PlayPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
