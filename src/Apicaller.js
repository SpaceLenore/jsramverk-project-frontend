const APIURL = "http://localhost:1337"

const get = async (url, includeHeaders) => {
    return await fetch(APIURL + url, {
        method: 'GET',
        headers: includeHeaders
    }).then((res) => {
        if (responseChecker(res.status)) {
            return res.data;
        } else {
            return { error: true };
        }
    })
        .catch(() => {
            return { error: true };
        });
};

const post = async (url, includeHeaders, includeBody) => {
    return await fetch(APIURL + url, {
        method: 'POST',
        headers: includeHeaders,
        body: includeBody
    })
        .then((res) => {
            if (responseChecker(res.status)) {
                return res.data;
            } else {
                return { error: true };
            }
        })
        .catch(() => {
            return { error: true };
        });
};

const responseChecker = (httpcode) => {
    if (httpcode > 199 && httpcode < 300) {
        return true;
    } else {
        return false;
    }
};

const req = (url, method, auth, body = {}) => {

    let headers = {
        "Content-Type": "application/json"
    };
    
    if (auth) {
        let key = window.localStorage.getItem('token');
        headers.Authorization = key;
    }
    
    if (method == 'GET') {
        return get(url, headers);
    } else if (method == 'POST') {
        return post(url, headers, body);
    }
};

export default {
    get,
    post,
    req
};