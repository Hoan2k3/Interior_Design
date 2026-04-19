export async function seedOrders(orderModel, userMap) {
  return await orderModel.insertMany([
    {
      userId: userMap['customer@gmail.com']._id,
      trackingCode: 'ORD3001',
      totalPrice: 10000000,
      status: 'completed',
      paymentMethod: 'cash',
      paymentStatus: 'paid',
    },
  ]);
}
