import React from 'react';

import Axios from 'axios';

import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab/';

import { DropdownList } from 'react-widgets/'

import "react-widgets/dist/css/react-widgets.css";

import {connect} from 'react-redux';
import {selectCharacter, getRealms} from '../actions';


class CharacterInput extends React.Component {

    state = { characterName: '', realm: '' };

    onFormSubmit = async (event) => {
        event.preventDefault();
        this.props.selectCharacter(this.state.realm, this.state.characterName.toLowerCase(), this.props.token);
    }


    render() {
        var alert = '';
        
        if(this.props.realms) {

            if (this.props.realms.status !== 200) {
                return (
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        There was an error receiving the list of realms. 
                    </Alert>
                );
            } else {
                return (
                    <div className="ui segment">
                        {alert}
                        <form className="ui form">
                            <div className = "field">
                                <label>Character Name</label>
                                <input type="text" value={this.props.characterName} onChange={(e) => this.setState({characterName: e.target.value})} placeholder="Enter Name"/>
                            </div>
                            <div className = "field">
                                <DropdownList 
                                    data={this.props.realms.realms} 
                                    textField='name' 
                                    valueField='slug' 
                                    caseSensitive={false} 
                                    minLength={1} 
                                    filter="startsWith"
                                    value={this.props.realm}
                                    onChange={(value) => this.setState({realm: value.slug})}
                                />
                            </div>
                            <Button variant="contained" coolor="Primary" type="submit" onClick={this.onFormSubmit}>Search</Button>
                        </form>
                    </div>
                )
            }
        }else {
            return (<div></div>)
        }
    }

    async componentDidMount() {
        this.props.getRealms(this.props.token)
    }
}

const mapStateToProps = (state) => {
    return { 
        selectedCharacter: state.selectedCharacter, 
        realms: state.allRealms  
    }
}

export default connect(mapStateToProps, {selectCharacter, getRealms})(CharacterInput);