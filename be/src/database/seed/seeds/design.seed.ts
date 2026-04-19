export async function seedDesigns(designModel, categories, userMap) {
  return await designModel.insertMany([
    {
      name: 'Modern Living Room',
      description: 'Hiện đại',
      categoryId: categories[0]._id,
      designerId: userMap['designer@gmail.com']._id,
      images: ['design.jpg'],
    },
  ]);
}
