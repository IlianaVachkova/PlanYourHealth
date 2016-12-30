export class FoodAdditive{
    _id:string;
    name: string;
    rating: number;
    category: string;
    quantity: number;
    ingredients: string[];
    purpose: string;
    madeBy: string;
    image:string;

    constructor(id:string, name: string, 
    image: string, 
    rating: number,
	category: string,
	quantity:number,
	purpose:string,
	madeBy:string,
    ingredients:string[]){
        this._id = id;
        this.name = name;
        this.image = image;
        this.rating = rating;
        this.category = category;
        this.quantity = quantity;
        this.ingredients = ingredients;
        this.purpose = purpose;
        this.madeBy = madeBy;
    }
}