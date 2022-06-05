import './App.css';
import { BrowserRouter, Link, Routes, Route, NavLink } from 'react-router-dom'
import Alabama from './Components/020/Alabama';
import Racoon from './Components/020/Racoon';
import Cuckoo from './Components/020/Cuckoo';
import Beardman from './Components/020/Beardman';
import NotFound from './Components/020/NotFound';
import rand from './Functions/rand';
import randColor from './Functions/randColor';
import FatCat from './Components/020/FatCat';


function App() {

    return (
       <BrowserRouter> 
        <div className="App">
            <header className="App-header">
              <div className='card'>
                  <p className='title'>Links</p>
                    <Link to='/'>Sweet home</Link>
                    <Link to='/racoon'>Racoon home</Link>
                    <h3>Racoon</h3>
                    {
                        [...Array(rand(2, 7))].map((_, i) => <NavLink style={({isActive})=>({color: isActive ? 'red' : ''})} to={'/racoon/'+(i+1)} key={i}>Racoon walet No: {i+1}</NavLink>)
                    }
                    <h3>Cuckoo</h3>
                    {
                        [...Array(rand(3, 7))].map((_, i) => <Link key={i} to={`/cuckoo/${i+1}/${randColor().slice(0)}`}>Cuckoo home</Link>) 
                    }
                    <Link to='/cuckoo'>Cuckoo home</Link>
                    <Link to='/fatcat'>FatCat</Link>
                    <Link to='/beardman'>Beardman home</Link>
              </div>
              <div className='card'>
                      <Routes>

                          <Route path='/' element={<Alabama></Alabama>}> </Route>
                          <Route path='/racoon/:can' element={<Racoon></Racoon>}> </Route>
                          <Route path='/cuckoo/:id/:color' element={<Cuckoo></Cuckoo>}></Route>
                          <Route path='/beardman' element={<Beardman></Beardman>}>
                              <Route path='green' element={<div className='circle' style={{backgroundColor:'green'}}></div>}></Route>
                              <Route path='pink' element={<div className='circle' style={{backgroundColor:'pink'}}></div>}></Route>
                          </Route>
                            <Route path='/fatcat' element={<FatCat></FatCat>}>
                                
                                <Route path='yellow' element={<div className='circle' style={{backgroundColor:'yellow'}}></div>}></Route>
                                <Route path='orange' element={<div className='circle' style={{backgroundColor:'orange'}}></div>}></Route>
                                <Route path='red' element={<div className='circle' style={{backgroundColor:'red'}}></div>}></Route>
                            </Route>

                          <Route path='/*' element={<NotFound></NotFound>}></Route>
                      </Routes>
              </div>
            </header>
        </div>
       
       </BrowserRouter>

    );
}

export default App;
