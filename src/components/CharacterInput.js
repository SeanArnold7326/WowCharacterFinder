import React from 'react';

import Axios from 'axios';

import Button from '@material-ui/core/Button'

import { Combobox } from 'react-widgets/'

import "react-widgets/dist/css/react-widgets.css";

import {connect} from 'react-redux';
import {selectCharacter} from '../actions';


class CharacterInput extends React.Component {

    state = { characterName: '', realm: '' };

    onFormSubmit = async (event) => {
        event.preventDefault();
        const client_id = 'f6725f16f7744f389b431b4a2135660b';
        const secret_id = '4MlS2MDpuTFkZIRdxD3lSLyVY0Unklcj';


        const token = await Axios.get('https://us.battle.net/oauth/token', {
            auth: {
                username: client_id,
                password: secret_id
            },
            params: {
                grant_type: 'client_credentials'
            }
        })

        this.props.selectCharacter(this.state.realm, this.state.characterName.toLowerCase(), token.data.access_token);
    }


    render() {
        let openDropdown = false;
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className = "field">
                        <label>Character Name</label>
                        <input type="text" value={this.state.characterName} onChange={(e) => this.setState({characterName: e.target.value})} placeholder="Enter Name"/>
                    </div>
                    <div className = "field">
                        <Combobox 
                            data={this.state.realms} 
                            textField='name' 
                            valueField='slug' 
                            caseSensitive={false} 
                            minLength={1} 
                            filter="startsWith"
                            value={this.state.realm}
                            onChange={(value) => this.setState({realm: value.slug})}
                        />
                    </div>
                    <Button variant="contained" coolor="Primary" type="submit" onClick={this.onFormSubmit}>Search</Button>
                </form>
            </div>
        )
    }

    async componentDidMount() {
        const client_id = 'f6725f16f7744f389b431b4a2135660b';
        const secret_id = '4MlS2MDpuTFkZIRdxD3lSLyVY0Unklcj';

        const token = await Axios.get('https://us.battle.net/oauth/token', {
            auth: {
                username: client_id,
                password: secret_id
            },
            params: {
                grant_type: 'client_credentials'
            }
        })

        const response = await Axios.get('https://us.api.blizzard.com/data/wow/realm/index', {
            params: {
                namespace: 'dynamic-us',
                locale: 'en_US'
            },
            headers: {
                Authorization: 'Bearer ' + token.data.access_token
            }
        });

        this.setState({realms: response.data.realms});
    }
}

const mapStateToProps = (state) => {
    return { selectedCharacter: state.selectedCharacter}
}

export default connect(mapStateToProps, {selectCharacter})(CharacterInput);