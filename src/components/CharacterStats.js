import React from 'react'

class CharacterStats extends React.Component {

    constructor(props) {
        super(props)

        this.state = {stats: this.props.statistics}
    }

    render() {
        const stats = this.state.stats;
        console.log(stats);
        return (
            <div className="ui grid">
                <div className="column eight wide">
                    <p>Agility: {stats.agility.effective}</p>
                    <p>Armor: {stats.armor.effective}</p>
                    <p>Attack Power: {stats.attack_power}</p>
                    <p>Health: {stats.health}</p>
                    <p>Intellect: {stats.intellect.effective}</p>
                </div>
                <div className="column eight wide">
                    <p>Lifesteal: {stats.lifesteal.rating}</p>
                    <p>Power: {stats.power}</p>
                    <p>Spell Power: {stats.spell_power}</p>
                    <p>Stamina: {stats.stamina.effective}</p>
                    <p>Strength: {stats.strength.effective}</p>
                </div>
            </div>
        );
    }
}

export default CharacterStats;