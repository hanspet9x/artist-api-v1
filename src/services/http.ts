export const getApi = async (url: string) => {
    const response = await fetch(url, {
        cache: "force-cache"
    });

    const data = await response.json();
    return data;
}

export const postApi = async (url: string, payload: unknown) => {
    const response = await fetch(url, {
        body: JSON.stringify(payload),
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        mode: "cors"
    });
    const data = await response.json();
    console.log(url, data);
    return data;
}