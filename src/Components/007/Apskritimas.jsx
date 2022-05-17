function Apskritimas({l, visible, widt}) {

    if(visible) {
       return <div className='apskritimas' style={{left: l, bottom: '88%', borderWidth: widt}}></div> 
    }
    return null;
}

export default Apskritimas;