export default class Product {
  id: any;
  title: any;
  price: any;
  description: any;
  category: any;
  image: any;
  rating: any;
  constructor(id: any, title: any, price: any, description: any, category: any, image: any, rating: any) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
}
