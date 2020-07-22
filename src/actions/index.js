import Axios from 'axios';

export const selectCharacter = (realm, characterName, token) => {
    return async function(dispatch) {

        var error = {status: false, message: ''};

        var statistics, equipment, information, images = '';

        var character = {statistics: '', equipment: '', information: '', images: '', error: error};

        try {

            statistics = await Axios.get('https://us.api.blizzard.com/profile/wow/character/' + realm + '/' + characterName + '/statistics', {
                params: {
                    namespace: 'profile-us',
                    locale: 'en_US'
                },
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            information = await Axios.get('https://us.api.blizzard.com/profile/wow/character/' + realm + '/' + characterName, {
                params: {
                    namespace: 'profile-us',
                    locale: 'en_US'
                },
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            equipment = await Axios.get('https://us.api.blizzard.com/profile/wow/character/' + realm + '/' + characterName + '/equipment', {
                params: {
                    namespace: 'profile-us',
                    locale: 'en_US'
                },
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            images = await Axios.get('https://us.api.blizzard.com/profile/wow/character/' + realm + '/' + characterName + '/character-media', {
                params: {
                    namespace: 'profile-us',
                    locale: 'en_US'
                },
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

            character = {statistics: statistics.data, equipment: equipment.data, information: information.data, images: images.data, error: error}
            
        } catch (e){
            error = {status: true, message: e.message};
            character.error = error;
        }

        dispatch({ type: 'CHARACTER_SELECTED', payload: character});
    };
};

