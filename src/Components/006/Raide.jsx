
import randColor from '../../Functions/randColor';
function Raide({letter, bgColor}) {
    
    return (
       <p className='eilej' style={{backgroundColor:bgColor, color:'#'+randColor()}}>{letter}</p>
    )

}

export default Raide;