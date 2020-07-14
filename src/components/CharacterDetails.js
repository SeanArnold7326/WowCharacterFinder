import React from 'react'

import {connect} from 'react-redux'


const CharacterDetail = ({character}) => {
    if(!character) {
        return (
            <div>No chacrater</div>
        )
    }

    return (
        <div>
            we have chracyer
        </div>
    )
}

const mapStateToProps = (state) => {
    return {character: state.selectedCharacter}
};

export default connect(mapStateToProps)(CharacterDetail);