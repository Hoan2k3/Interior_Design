use("Interior");

// ================= ROLES =================
db.roles.insertMany([
  { name: "admin" },
  { name: "customer" },
  { name: "designer" },
  { name: "contractor" },
]);

const roles = db.roles.find().toArray();

// ================= USERS =================
db.users.insertMany([
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    roleId: roles.find((r) => r.name === "admin")._id,
    createdAt: new Date(),
  },
  {
    name: "Nguyen Van A",
    email: "customer@gmail.com",
    password: "123456",
    roleId: roles.find((r) => r.name === "customer")._id,
    phone: "0123456789",
    address: "HCM",
    createdAt: new Date(),
  },
  {
    name: "Designer B",
    email: "designer@gmail.com",
    password: "123456",
    roleId: roles.find((r) => r.name === "designer")._id,
    createdAt: new Date(),
  },
  {
    name: "Contractor C",
    email: "contractor@gmail.com",
    password: "123456",
    roleId: roles.find((r) => r.name === "contractor")._id,
    createdAt: new Date(),
  },
]);

const users = db.users.find().toArray();

const customer = users.find((u) => u.email === "customer@gmail.com");
const designer = users.find((u) => u.email === "designer@gmail.com");
const contractor = users.find((u) => u.email === "contractor@gmail.com");

// ================= CATEGORIES =================
db.categories.insertMany([{ name: "Living Room" }, { name: "Bedroom" }]);

const categories = db.categories.find().toArray();

// ================= PRODUCTS =================
db.products.insertMany([
  {
    name: "Sofa",
    price: 10000000,
    categoryId: categories[0]._id,
    stock: 10,
    createdAt: new Date(),
  },
  {
    name: "Bed",
    price: 8000000,
    categoryId: categories[1]._id,
    stock: 5,
    createdAt: new Date(),
  },
]);

const products = db.products.find().toArray();

// ================= DESIGNS =================
db.designs.insertMany([
  {
    name: "Modern Living Room",
    categoryId: categories[0]._id,
    designerId: designer._id,
    price: 2000000,
    createdAt: new Date(),
  },
]);

const designs = db.designs.find().toArray();

// ================= PROJECTS =================
db.projects.insertMany([
  {
    title: "Thiết kế phòng khách",
    description: "Phong cách hiện đại",
    userId: customer._id,
    designerId: designer._id,
    contractorId: contractor._id,
    categoryId: categories[0]._id,
    designId: designs[0]._id,
    budget: 20000000,
    status: "building",
    createdAt: new Date(),
  },
]);

const projects = db.projects.find().toArray();

// ================= PROJECT PAYMENTS =================
db.projectPayments.insertMany([
  {
    projectId: projects[0]._id,
    userId: customer._id,
    amount: 5000000,
    paymentType: "deposit",
    paymentMethod: "cash",
    paymentStatus: "paid",
    createdAt: new Date(),
  },
  {
    projectId: projects[0]._id,
    userId: customer._id,
    amount: 15000000,
    paymentType: "final",
    paymentMethod: "cash",
    paymentStatus: "unpaid",
    createdAt: new Date(),
  },
]);

// ================= ORDERS =================
db.orders.insertMany([
  {
    userId: customer._id,
    name: customer.name,
    phone: customer.phone,
    address: customer.address,

    trackingCode: "ORD3001",
    shippingStatus: "delivered",
    shippedAt: new Date(),
    deliveredAt: new Date(),

    totalPrice: 10000000,
    status: "completed",
    paymentMethod: "cash",
    paymentStatus: "paid",
    createdAt: new Date(),

    items: [
      {
        type: "product",
        itemId: products[0]._id,
        name: "Sofa",
        price: 10000000,
        quantity: 1,
      },
    ],
  },
]);

// ================= REVIEWS =================
db.reviews.insertMany([
  // ⭐ Review product
  {
    userId: customer._id,
    productId: products[0]._id,
    projectId: null,
    type: "product",
    rating: 5,
    comment: "Sofa rất đẹp!",
    createdAt: new Date(),
  },

  // ⭐ Review project (thi công)
  {
    userId: customer._id,
    productId: null,
    projectId: projects[0]._id,
    type: "project",
    rating: 4,
    comment: "Thi công tốt nhưng hơi chậm",
    createdAt: new Date(),
  },
]);

print("✅ Seed FINAL++ (FULL SYSTEM) thành công!");
