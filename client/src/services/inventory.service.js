import { environment } from "../environments/environment";


const baseUrl = environment.serverUrl + '/inventory';

export async function getData(userId) {
    console.log("get request sent");
    return fetch(`${baseUrl}/getInventory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "user": userId }),
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data.ingredients;
        })
        .catch(error => console.log(error))
}

export function addData(user, ingredient) {
    fetch(`${baseUrl}/addInventory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: user, ingredient: ingredient }),
    })
        .then(response => console.log(response.status))
        .catch(error => console.log(error))
}