export const getWorldRank = async () => {
    const data = await fetch('https://restcountries.com/v3.1/all').then((response) =>
    response.json()
    );

    return data;
}

export const getCountryByCode = async (code) => {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((response) =>
    response.json()
    );

    return data[0];
}