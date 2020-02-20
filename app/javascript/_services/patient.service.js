import { BASE_URL } from '../_helpers/globalPaths'

import AuthHeader from '../_helpers/auth-header'

export const patientService = {
    getAll 
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: AuthHeader.simpleHeader()
    };

    return fetch(`${BASE_URL}patients.json`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}