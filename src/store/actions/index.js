const url = 'http://localhost:8900';

export function articleNews() {
    const output = fetch(`${url}/articles?end=7`, { method: 'GET' })
        .then((data) => data.json())

    return {
        type: 'GET_ARTICLES',
        payload: output
    }
}