function Vienas({skaicius, spalva, klase}) {
            
        if(skaicius + 1 < 9) {

        return <h2 className={klase} style={{color: spalva}}>{1+skaicius}</h2> 
        }
        return null;
    
}

export default Vienas;