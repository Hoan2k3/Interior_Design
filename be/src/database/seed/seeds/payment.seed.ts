export async function seedPayments(paymentModel, projects, userMap) {
  return await paymentModel.insertMany([
    {
      projectId: projects[0]._id,
      userId: userMap['customer@gmail.com']._id,
      amount: 5000000,
      paymentType: 'deposit',
      paymentMethod: 'cash',
      paymentStatus: 'paid',
    },
  ]);
}
