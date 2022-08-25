import { Routes ,Route ,Link} from 'react-router-dom';
import { Layout ,Typography,Space} from 'antd';
import { Navbar,Homepage,Crytocurrencies,News,CryptoDetails } from './components'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path='/' element={<Homepage/>}/>
              <Route exact path='/cryptocurrencies' element={<Crytocurrencies/>}/>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}/>
              <Route exact path='/news' element={<News/>}/>
            </Routes>
          </div>
        </Layout>
      <div className="footer">
        <Typography.Title>
          Crypto <br/>
          All Rights reserved
        </Typography.Title>
        <Space>
          <Link to="/"></Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App
