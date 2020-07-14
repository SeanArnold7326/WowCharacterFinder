import Axios from 'axios';

export const selectCharacter = (realm, characterName, token) => {
    return async function(dispatch) {
        const statistics = await Axios.get('https://us.api.blizzard.com/profile/wow/character/' + realm + '/' + characterName + '/statistics', {
            params: {
                namespace: 'profile-us',
                locale: 'en_US'
            },
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        const equipment = await Axios.get('https://us.api.blizzard.com/profile/wow/character/' + realm + '/' + characterName + '/equipment', {
            params: {
                namespace: 'profile-us',
                locale: 'en_US'
            },
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        const character = {statistics: statistics.data, equipment: equipment.data}

        dispatch({ type: 'CHARACTER_SELECTED', payload: character});
    };
};

