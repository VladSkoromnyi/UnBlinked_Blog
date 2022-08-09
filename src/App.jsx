import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Post } from './components/Post'
import { Posts } from './components/Posts'
import { Sidebar } from './components/Sidebar'
import './App.scss'

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
            path='posts/'
            element={
            <div className='App__content'>
              <Posts />
              <Sidebar />
            </div>
            }
          />
          <Route
            path='posts/:id'
            element={
              <div className='App__content'>
                <Post />
                <Sidebar />
              </div>
              }
          />
          <Route
            path='posts/:category'
            element={
              <>
                <Sidebar />
                <Posts />
              </>
            }
          />
          <Route
            path='post/:category/:id'
            element={<Post />}
          />
        </Routes>   
            
      </Layout>
    </div>
  );
}

export default App;
