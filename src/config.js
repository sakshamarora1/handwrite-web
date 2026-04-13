var API_URL;

if(process.env.REACT_APP_STAGE === 'production') {
    API_URL = 'https://handwrite-server.onrender.com'
}

else {
    API_URL = 'http://localhost:8000'
}

export const API = API_URL;