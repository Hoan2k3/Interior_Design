export async function seedPromotions(promotionModel, products) {
  return await promotionModel.insertMany([
    {
      name: 'Sale Tết',
      discountPercent: 10,
      productIds: [products[0]._id],
      startDate: new Date(),
      endDate: new Date(Date.now() + 10 * 86400000),
      isActive: true,
    },
  ]);
}
