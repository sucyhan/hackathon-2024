export interface Ingredient {
    name: string;
    type: string;
    expirationDate: Date;
}

export interface InventoryData {
    user: string;
    ingredients: Ingredient[];
}  