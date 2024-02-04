import { environment } from "../environments/environment";

export class InventoryService {
    baseUrl = environment.serverUrl + '/inventory';

    getData(user) {
        fetch(`${this.baseUrl}/getInventory`, {
            method: 'POST',
            headers: {
                'Conternt-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.log(error))
    }

    addData(user, ingredient) {
        fetch(`${this.baseUrl}/addInventory`, {
            method: 'POST',
            headers: {
                'Conternt-Type': 'application/json',
            },
            body: JSON.stringify({user: user, ingredient: ingredient}),
        })
        .then(response => console.log(response.status))
        .catch(error => console.log(error))
    }
    
}