export async function seedProducts(productModel, categories) {
  return await productModel.insertMany([
    {
      name: 'Sofa',
      price: 10000000,
      categoryId: categories[0]._id,
      description: 'Sofa hiện đại',
      images: ['sofa1.jpg'],
      stock: 10,
      sold: 0,
      status: 'active',
    },
    {
      name: 'Bed',
      price: 8000000,
      categoryId: categories[1]._id,
      description: 'Giường ngủ',
      images: ['bed1.jpg'],
      stock: 5,
      sold: 0,
      status: 'active',
    },
  ]);
}
