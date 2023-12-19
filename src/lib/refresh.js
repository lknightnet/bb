export async function fetchRefresh(url, options) {
    let res = await fetch(url, options);
    if (res.status === 401)
    {
        await fetch('http://localhost:8002/refresh',
            {
                credentials: "same-origin"
            });
        res = await fetch(url, options);
    }
    return res
}