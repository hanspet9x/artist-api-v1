export const getApi = async (url: string, method?: "GET" | "DELETE") => {
    try {
        const response = await fetch(url, {
            cache: "force-cache",
            method: method ?? 'GET'
        });

        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error("Api failed.");
        }
    } catch (error) {
        throw error;
    }
}

export const postApi = async (url: string, payload: unknown, method?: "POST" | "PUT") => {
    try {
        const response = await fetch(url, {
            body: JSON.stringify(payload),
            method: method ?? 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: "cors"
        });
        if (response.status === 200 || response.status === 201) {
            return await response.json();
        } else {
            throw new Error("Api failed.");
        }
    } catch (error) {
        throw error;
    }
}
