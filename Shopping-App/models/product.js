class Product {
  constructor(
    id,
    ownerId,
    title,
    imageUrl,
    description,
    price
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}

export default Product;
