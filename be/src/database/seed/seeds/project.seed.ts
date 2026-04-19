export async function seedProjects(projectModel, userMap, categories, designs) {
  return await projectModel.insertMany([
    {
      title: 'Thiết kế phòng khách',
      userId: userMap['customer@gmail.com']._id,
      status: 'pending',
    },
    {
      title: 'Thiết kế phòng ngủ',
      userId: userMap['customer@gmail.com']._id,
      designerId: userMap['designer@gmail.com']._id,
      contractorId: userMap['contractor@gmail.com']._id,
      categoryId: categories[1]._id,
      designId: designs[0]._id,
      status: 'building',
    },
  ]);
}
