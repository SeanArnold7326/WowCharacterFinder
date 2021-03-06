import React from 'react'

import CharacterStats from './CharacterStats';
import CharacterEquipment from './CharacterEquipment';
import CharacterImage from './CharacterImage';

import { Alert, AlertTitle } from '@material-ui/lab';

import {connect} from 'react-redux'


const CharacterDetails = ({character}) => {
    if(!character) {
        return <span></span>
    }

    if(character.error.status === false) {
        return (
            <div className="ui segment grid">
                <div className="ui row" id="nameRow">
                    <div className="column wide">
                        <h2>{character.information.name}</h2>
                        <h3>{character.information.gender.name} {character.information.race.name} {character.information.character_class.name}</h3>
                    </div>
                </div>
                <div className="column eight wide" id="infoColumn">
                    <div className="ui row" style={{padding: '14px 0px'}}>
                        <div className = "ui segment characterSegment">
                            <h4>Statistics</h4>
                            <CharacterStats statistics={character.statistics}/>
                        </div>
                    </div>
                    <div className="ui row" style={{padding: '14px 0px'}}>
                        <div className = "ui segment characterSegment">
                            <h4>Equipment</h4>
                            <CharacterEquipment equipment={character.equipment} />
                        </div>
                    </div>
                </div>
                <div className="column eight wide">
                    <CharacterImage image={character.images}/>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{marginTop: '10px'}}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <span><strong>{character.error.message}</strong></span><br/>
                    <span>There was an error receiving data for the character. Please check the name and realm and try again.</span>
                </Alert>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {character: state.selectedCharacter}
}

export default connect(mapStateToProps)(CharacterDetails);