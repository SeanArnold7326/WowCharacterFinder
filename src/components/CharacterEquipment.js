import React from 'react'


class CharacterEquipment extends React.Component {

    constructor(props) {
        super(props)

        this.state = {equipment: this.props.equipment.equipped_items}
    }

    render() {
        console.log(this.state)
        return (
            <div></div>
        );
    }
}

export default CharacterEquipment