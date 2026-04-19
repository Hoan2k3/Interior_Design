export async function seedReviews(reviewModel, userMap, products) {
  return await reviewModel.insertMany([
    {
      userId: userMap['customer@gmail.com']._id,
      productId: products[0]._id,
      rating: 5,
      comment: 'Sofa rất đẹp!',
    },
  ]);
}
