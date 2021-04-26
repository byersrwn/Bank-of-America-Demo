
// async function post2(endpoint, data) {
//     console.log(endpoint + " endpoint");
//     console.log(data.folderID + " folderID in post 2");
//     console.log(data);
//     const response = await fetch(endpoint, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//         console.log("Returning json from post2");
//         return response.json();
// }

async function post(endpoint, data) {
    console.log(endpoint);
    console.log("API");
    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded'
            },
        // mode: 'no-cors'
        });
        console.log("Returning json");
        return response.json();

}
export default post;
// export default post;