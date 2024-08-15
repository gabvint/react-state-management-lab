

const TeamMembers = (props) => {
    const { fighter } = props;

    <li>
        <p>{fighter.name}</p>
        <p>Price: {fighter.price}</p>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
    </li>
}

export default TeamMembers;