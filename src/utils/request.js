const BASE_URL = 'http://127.0.0.1:8000';

async function request(url, options = {}) {
    try {
        const response = await fetch(`${BASE_URL}${url}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
}

export async function get(endpoint, params = {}) {
    const query = new URLSearchParams(params).toString();
    return await request(`${endpoint}?${query}`, {
        method: 'GET',
    });
}

export async function post(endpoint, body) {
    return await request(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
}

export async function put(endpoint, body) {
    return await request(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
}

export async function del(endpoint) {
    return await request(endpoint, {
        method: 'DELETE',
    });
}