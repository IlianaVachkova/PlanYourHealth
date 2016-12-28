export class FoodAdditive{
    Name: string;
    Rating: number;
    Category: string;
    Quantity: number;
    Ingredients: string[];
    Purpose: string;
    MadeBy: string;
    Image:string;
    
    constructor(name: string, 
    image: string, 
    rating: number,
	category: string,
	quantity:number,
    ingredients:string[],
	purpose:string,
	madeBy:string){
        this.Name = name;
        this.Image = image;
        this.Rating = rating;
        this.Category = category;
        this.Quantity = quantity;
        this.Ingredients = ingredients;
        this.Purpose = purpose;
        this.MadeBy = madeBy;
    }
}