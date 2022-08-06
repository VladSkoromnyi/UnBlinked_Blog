import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { Post } from './components/Post';
import { Posts } from './components/Posts';

function App() {
  return (
    <div className="App">
      <Layout>   
     
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
            
      </Layout>
    </div>
  );
}

export default App;
