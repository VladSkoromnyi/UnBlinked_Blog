import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Post } from './components/Post'
import { Posts } from './components/Posts'
import { Sidebar } from './components/Sidebar'
import './App.scss'
import { Header } from './components/Header'

function App() {

  return (
    <div className="App">
      <Layout>   
     
        <Routes>
          <Route 
            index
            path='/'
            element={
              <>
                <Header />
                <Home />              
              </>
            }
          />
          <Route
            path='posts/'
            element={
            <div className='App__content'>
              <Sidebar />
              <Posts />
            </div>
            }
          />
          <Route
            path='posts/:id'
            element={
              <div className='App__content'>
                <Sidebar />
                <Post />
              </div>
              }
          />
        </Routes>   
            
      </Layout>
    </div>
  );
}

export default App;
