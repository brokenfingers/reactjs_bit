import randColor from "../../Functions/randColor";

function Kates() {
    return (
        <ul className="kates" style={{color: '#'+randColor()}}>
            <li>Rainius</li>
            <li>Pilkis</li>
            <li>Murkis</li>
        </ul>
    )
}

export default Kates;