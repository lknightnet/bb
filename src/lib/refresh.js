export async function fetchRefresh(url, options) {
    let res = await fetch(url, options);
    if (res.status === 401)
    {
        const response = await fetch('http://localhost:8000/auth/refresh',
            {
                credentials: "same-origin",
                headers:{
                    "Authorization": localStorage.getItem("token")
                },
            });
        localStorage.setItem("token", response.headers.get("Authorization"))
        res = await fetch(url, options);
    }
    return res
}