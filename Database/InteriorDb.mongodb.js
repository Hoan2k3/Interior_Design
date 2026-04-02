use("Interior");

// ================= ROLES =================
db.roles.insertMany([
  { name: "admin" },
  { name: "designer" },
  { name: "user" },
]);

// ================= USERS =================
const roles = db.roles.find().toArray();

db.users.insertMany([
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    roleId: roles[0]._id,
    createdAt: new Date(),
  },
  {
    name: "Designer A",
    email: "designer@gmail.com",
    password: "123456",
    roleId: roles[1]._id,
    createdAt: new Date(),
  },
  {
    name: "User A",
    email: "user@gmail.com",
    password: "123456",
    roleId: roles[2]._id,
    avatar: "avatar.jpg",
    createdAt: new Date(),
  },
]);

// ================= CATEGORIES =================
db.categories.insertMany([
  { name: "Living Room", description: "Phòng khách" },
  { name: "Bedroom", description: "Phòng ngủ" },
]);

const categories = db.categories.find().toArray();

// ================= PRODUCTS =================
db.products.insertMany([
  {
    name: "Sofa",
    price: 10000000,
    categoryId: categories[0]._id,
    stock: 10,
    images: ["sofa.jpg"],
    createdAt: new Date(),
  },
  {
    name: "Bed",
    price: 8000000,
    categoryId: categories[1]._id,
    stock: 5,
    images: ["bed.jpg"],
    createdAt: new Date(),
  },
]);

const products = db.products.find().toArray();

// ================= PROJECTS =================
const users = db.users.find().toArray();

db.projects.insertMany([
  {
    title: "Thiết kế phòng khách",
    description: "Phong cách hiện đại",
    userId: users[2]._id,
    categoryId: categories[0]._id,
    budget: 20000000,
    status: "pending",
    createdAt: new Date(),
  },
]);

const projects = db.projects.find().toArray();

// ================= DESIGNS =================
db.designs.insertMany([
  {
    projectId: projects[0]._id,
    designerId: users[1]._id,
    title: "Design V1",
    images: ["design1.jpg"],
    description: "Bản thiết kế đầu tiên",
    createdAt: new Date(),
  },
]);

// ================= ORDERS (EMBED ITEMS) =================
db.orders.insertMany([
  {
    userId: users[2]._id,
    totalPrice: 18000000,
    status: "paid",
    address: "Ho Chi Minh City",
    createdAt: new Date(),
    items: [
      {
        productId: products[0]._id,
        name: "Sofa",
        price: 10000000,
        quantity: 1,
      },
      {
        productId: products[1]._id,
        name: "Bed",
        price: 8000000,
        quantity: 1,
      },
    ],
  },
]);

// ================= REVIEWS =================
db.reviews.insertMany([
  {
    productId: products[0]._id,
    userId: users[2]._id,
    rating: 5,
    comment: "Rất đẹp!",
    createdAt: new Date(),
    user: {
      name: users[2].name,
      avatar: users[2].avatar,
    },
  },
]);

print("✅ Seed dữ liệu thành công!");
