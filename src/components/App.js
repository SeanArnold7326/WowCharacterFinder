import React from 'react';

import CharacterInput from './CharacterInput';

import '../css/App.css';
import CharacterDetails from './CharacterDetails';


class App extends React.Component {

    render() {
        return (
            <div>
                <div className="ui container" id="character-input-container">
                    <CharacterInput />
                </div>
                <div className="ui container" style={{width: '80%'}}>
                    <CharacterDetails />
                </div>
            </div>
        );
    }
}

export default App;
