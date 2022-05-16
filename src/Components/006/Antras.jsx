function Antras({skaicius, spalva, klase}) {

    return skaicius + 2 < 9 ?  <h2 className={klase} style={{color: spalva}}>{2+skaicius}</h2> : null;
}

export default Antras;