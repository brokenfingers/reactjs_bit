import { useState } from "react";

function List() {
    const [display, setDisplay] = useState(false)
    const sizes = ['XS', 'S', 'XM', 'M', 'L', 'XL', 'XXL']

    const toggleShow = () => setDisplay(i => !i)
    return (
        <>
        
        {
            sizes.filter(i => i[0]==="M").map((itm, i) => i%2 ? <div style={{backgroundColor:  'yellow' }} key={i}><i>{itm}</i></div> : 
            <div style={{backgroundColor:  'red' }} key={i}><u>{itm}</u></div>)
        }
         {
            sizes.sort((a, b)=> b.length - a.length).map((itm, i) => i%2 ? <div style={{backgroundColor:  'yellow' }} key={i}><i>{itm}</i></div> : 
            <div style={{backgroundColor:  'red' }} key={i}><u>{itm}</u></div>)
        }
         {
            sizes.filter(itm => display).map((itm, i) => i%2 ? <div style={{backgroundColor:  'yellow' }} key={i}><i>{itm}</i></div> : 
            <div style={{backgroundColor:  'red' }} key={i}><u>{itm}</u></div>)
        }
        <button onClick={toggleShow}>show/ hide</button>
        </>
        
    )
}

export default List;