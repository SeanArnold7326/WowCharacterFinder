import React from 'react';
import {connect} from 'react-redux';

import '../css/App.css';

import CharacterInput from './CharacterInput';
import CharacterDetails from './CharacterDetails';

import CircularProgress from '@material-ui/core/CircularProgress';
import {Alert, AlertTitle} from '@material-ui/lab'

import {getToken} from '../actions/';


class App extends React.Component {

    render() {
        if(this.props.receivedToken) {
            if(this.props.receivedToken.status !== 200) {
                return (
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        There was an error receiving the authorization token. 
                    </Alert>
                );
            }else {
                return (
                    <div>
                        <div className="ui container" id="character-input-container">
                            <CharacterInput token={this.props.receivedToken.access_token}/>
                        </div>
                        <div className="ui container" style={{width: '80%'}}>
                            <CharacterDetails />
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <CircularProgress />
            );
        }
    }

    async componentDidMount() {
        const client_id = 'f6725f16f7744f389b431b4a2135660b';
        const secret_id = '4MlS2MDpuTFkZIRdxD3lSLyVY0Unklcj';

        this.props.getToken(client_id, secret_id);
    }
}

const mapStateToProps = (state) => {
    return { receivedToken: state.currentToken }
}

export default connect(mapStateToProps, {getToken})(App);
