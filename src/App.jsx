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
          >
            <Route
              path=':id'
              element={<Post />}
            />
            <Route
              path=':category'
              element={<Posts />}
            >
              <Route
                path=':id'
                element={<Post />}
              />
            </Route>
          </Route>


        </Routes>   
            
      </Layout>
    </div>
  );
}

export default App;
