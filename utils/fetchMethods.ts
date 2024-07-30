const API_ENDPOINT = 'https://api.example.com'

export function clientFetchDemoData() {
    return useFetch('/assets/data/nextword.json', {lazy: true, server: false})
}
