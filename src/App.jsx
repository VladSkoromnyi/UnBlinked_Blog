import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Post } from './components/Post'
import { Posts } from './components/Posts'
import { Sidebar } from './components/Sidebar'
import './App.scss'
import { Header } from './components/Header'
import { PostsCategory } from './components/PostsCategory'
import { SearchBlock } from './components/SearchBlock'
import { EditList } from './components/Admin/EditList'
import { EditPage } from './components/Admin/EditPage'

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
            element={<Navigate to='list' replace/>}
          />
          <Route
            path='posts/list'
            element={
            <div className='App__content'>
              <Posts />
              <Sidebar />
            </div>
            }
          />
          <Route
            path='posts/category'
            element={
              <>
                <SearchBlock />
                <div className='App__content flex-reverse'>
                  <Sidebar />
                  <PostsCategory />
                </div>            
              </>
            }
          />
          <Route
            path='posts/category/:category'
            element={
            <>
              <SearchBlock />
              <div className='App__content flex-reverse'>
                <Sidebar />
                <PostsCategory />
              </div>            
            </>
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
            path='admin/posts/edit'
            element={<EditList />}
          />
          <Route 
            path='admin/posts/edit/:id'
            element={<EditPage />}
          />
        </Routes>   
            
      </Layout>
    </div>
  );
}

export default App;
