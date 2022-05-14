import './App.css'
import {useState} from 'react';

function App() {

    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(true)

    const [color, setColor] = useState('blue')
    const [numb, setNumber] = useState(1)
    
    const [sqaureArray, setAddSq] = useState([])
    
    const doShow = (arg) => {
        arg === 1 ? setShow(s => !s) :setShow1(s => !s)
    }

    // const setRedFnct = () => {
    //     setColor('red')
    // }

    // const setYellFnct = () => {
    //     setColor('yellow')
    // }

    const setColorfunct = color =>  setColor(color)
    // const addNumber = () => {
    //     setNumber(s => ++s)
        
    // }
    //  const subtrNumber = () => {
    //     setNumber(s => --s)
    // }

    const addSquare = () => {

            setAddSq(s => [...s, 1])
    }

    const makeCalc = operator => setNumber(s => eval(`${s}${operator}1`))
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hook {numb}</h1>
                    {show ? <div className="square" style={{backgroundColor:color}}>1</div> : null}
                    {show1 ? <div className="square" style={{backgroundColor:color}}>2</div> : null}
                <button onClick={() => doShow(1)}>show/hide 1</button>
                <button onClick={() => doShow(2)}>show/hide 2</button>

                <button onClick={() => setColorfunct('red')}>red</button>
                <button onClick={() => setColorfunct('yellow')}>red</button>
                <button onClick={() => setColorfunct('pink')}>red</button>
                
                <button onClick={() => makeCalc('+')}>add number</button>
                <button onClick={() => makeCalc('-')}>subtr number</button>
                
                <button onClick={addSquare}>add square</button>
                
                    <div className='square-wrapper'>
                        {
                         sqaureArray.map(itm => <div className="square" style={{backgroundColor:color}}>2</div>)
                        }

                    </div>
                

            </header>
        </div>
    )
}

export default App;