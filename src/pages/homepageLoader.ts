export async function homepageLoader() {
    const response = await fetch ('https://country-search-seven-gilt.vercel.app/api/countries')

    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }

    return response.json();
}