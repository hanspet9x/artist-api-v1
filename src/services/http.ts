export const getApi = async (url: string) => {
    const response = await fetch(url, {
        cache: "force-cache"
    });

    return await response.json();
}

export const postApi = async (url: string, payload: unknown) => {
    const response = await fetch(url, {
        body: JSON.stringify(payload),
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        mode: "cors"
    });
    return await response.json();
}