import React from 'react'

import CharacterStats from '../components/CharacterStats';
import CharacterEquipment from '../components/CharacterEquipment';

import {connect} from 'react-redux'


const CharacterDetails = ({character}) => {
    if(!character) {
        return <span></span>
    }

    console.log(character.statistics);

    return (
        <div className="ui segment grid">
            <div className="ui row">
                <div className="column eight wide">
                   <h3>Character Info</h3>
                   <div className = "ui segment">
                       {/* <CharacterStats statistics={character.statistics} /> */}
                   </div>
                </div>
                <div className="column eight wide">
                    <h3>Character Equipment</h3>
                    <div className = "ui segment">
                       <CharacterEquipment equipment={character.equipment} />
                   </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {character: state.selectedCharacter}
}

export default connect(mapStateToProps)(CharacterDetails);