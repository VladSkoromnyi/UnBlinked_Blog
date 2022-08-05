import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Post } from './components/Post';
import { Posts } from './components/Posts';

function App() {
  return (
    <div className="App">

      <Logo />

      <div className="wrapper">
        <Navigation />
        
        <Routes>
          <Route 
            index
            path='/'
            element={<Home />}
          />

          <Route
            path='posts'
            element={<Posts />}
          />

          <Route
            path='posts/:id'
            element={<Post />}
          />
        </Routes>       
      </div>
      
      <Footer /> 
    </div>
  );
}

export default App;
