import React from 'react'

class CharacterStats extends React.Component {

    constructor(props) {
        super(props)

        this.state = {stats: this.props.statistics}
    }

    render() {
        const stats = this.state.stats;
        return (
            <div className="ui grid">
                <div className="column eight wide">
                    <p><strong>Agility:</strong> {stats.agility.effective}</p>
                    <p><strong>Armor:</strong> {stats.armor.effective}</p>
                    <p><strong>Attack Power:</strong> {stats.attack_power}</p>
                    <p><strong>Health:</strong> {stats.health}</p>
                    <p><strong>Intellect:</strong> {stats.intellect.effective}</p>
                </div>
                <div className="column eight wide">
                    <p><strong>Lifesteal:</strong> {stats.lifesteal.rating}</p>
                    <p><strong>Power:</strong> {stats.power}</p>
                    <p><strong>Spell Power:</strong> {stats.spell_power}</p>
                    <p><strong>Stamina:</strong> {stats.stamina.effective}</p>
                    <p><strong>Strength:</strong> {stats.strength.effective}</p>
                </div>
            </div>
        );
    }
}

export default CharacterStats;