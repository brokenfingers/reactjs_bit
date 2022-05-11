import RainbowColor from "./RainbowColor";

function Rainbow(props) {
    return (
            <div>
                {
                    props.colors.filter(a=> a.pos === 'top').map((itm, i) => <RainbowColor color={itm} key={i}></RainbowColor>)
                }
                <RainbowColor color={{color: 'black'}}></RainbowColor>
                {
                    props.colors.filter(a=> a.pos === 'bottom').map((itm, i) => <RainbowColor color={itm} key={i}></RainbowColor>)
                }
            </div>
        
    )
}

export default Rainbow;