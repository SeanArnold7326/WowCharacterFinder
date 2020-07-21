import React from 'react'


class CharacterEquipment extends React.Component {

    constructor(props) {
        super(props)

        this.state = {equipment: this.props.equipment.equipped_items}
    }

    componentWillReceiveProps(props) {
        this.setState({ equipment: props.equipments.equipped_items});
    }

    render() {

        const odds = [];
        const evens = [];

        this.state.equipment.map((item, index) => {
            if(index % 2 === 0){
                evens.push(<p key={item.item.id}><strong>{item.slot.name}:</strong> {item.name}</p>)
            } else{
                odds.push(<p key={item.item.id}><strong>{item.slot.name}:</strong> {item.name}</p>)
            }
            return null;
        });

     return (
            <div className="ui grid">
                <div className="column eight wide">
                    {evens}
                </div>
                <div className="column eight wide">
                    {odds}
                </div>
            </div>
        );
    }
}

export default CharacterEquipment