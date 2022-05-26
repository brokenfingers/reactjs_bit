function Hello ({color, afrika, handleAteColor}) {

return (
    <>
        <h3 style={{color}}>{afrika}</h3>
        <button onClick={() => handleAteColor('green')}>Set green</button>
    </>
    
)



}

export default Hello;