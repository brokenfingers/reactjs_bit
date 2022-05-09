import rand from '../../Functions/rand'

function Meska() {
    return (
         <p style={
            {
                color: rand(0, 1) ? 'blue' : 'red'
            }
        }>Meška, kur tu?</p>
        )
}

export default Meska;