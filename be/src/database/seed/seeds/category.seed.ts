export async function seedCategories(categoryModel) {
  return await categoryModel.insertMany([
    {
      name: 'Living Room',
      image: 'living-room.jpg',
      description: 'Nội thất phòng khách',
      status: 'active',
    },
    {
      name: 'Bedroom',
      image: 'bedroom.jpg',
      description: 'Nội thất phòng ngủ',
      status: 'active',
    },
  ]);
}
