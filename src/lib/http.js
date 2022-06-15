import fetch from 'cross-fetch';

const baseUrl = 'http://localhost:3000'

async function send({ method, path, data, token }) {
    const opts = { method, headers: {} };

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Token ${token}`;
    }

    if (!path.startsWith('http')){
        path = `${baseUrl}${path}`
    }
    return fetch(path, opts)
        .then((r) => r.text())
        .then((json) => {
            try {
                return JSON.parse(json);
            } catch (err) {
                return json;
            }
        });
}

export function get(path, token) {
    return send({ method: 'GET', path, token });
}

export function del(path, token) {
    return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
    return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
    return send({ method: 'PUT', path, data, token });
}

export function respond(body) {
    if (body.errors) {
        return { status: 401, body };
    }

    const json = JSON.stringify(body.user);
    const value = Buffer.from(json).toString('base64');

    return {
        headers: {
            'set-cookie': `jwt=${value}; Path=/; HttpOnly`
        },
        body
    };
}