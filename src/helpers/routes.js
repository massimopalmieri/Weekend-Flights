const serverUrl = '/api'

export const flightsApiUrl = id =>
    id ? `${serverUrl}/flights/${id}` : `${serverUrl}/index.php`
    // id ? `${serverUrl}/flights/${id}` : `${serverUrl}/flights`