use("Interior");

// ================= ROLES =================
db.roles.insertMany([
  { name: "admin" },
  { name: "customer" },
  { name: "designer" },
  { name: "contractor" },
]);

const roles = db.roles.find().toArray();

// ================= PROVINCES =================
db.provinces.insertMany([
  { name: "Hà Nội", code: "01", createdAt: new Date() },
  { name: "TP.HCM", code: "02", createdAt: new Date() },
  { name: "Đà Nẵng", code: "03", createdAt: new Date() },
]);

const provinces = db.provinces.find().toArray();

const provinceMap = {};
provinces.forEach((p) => (provinceMap[p.name] = p._id));

// ================= WARDS =================
db.wards.insertMany([
  { name: "Phường Ba Đình", code: "00001", provinceId: provinceMap["Hà Nội"] },
  {
    name: "Phường Hoàn Kiếm",
    code: "00002",
    provinceId: provinceMap["Hà Nội"],
  },
  { name: "Phường Cầu Giấy", code: "00003", provinceId: provinceMap["Hà Nội"] },

  { name: "Phường Bến Nghé", code: "00004", provinceId: provinceMap["TP.HCM"] },
  {
    name: "Phường Thảo Điền",
    code: "00005",
    provinceId: provinceMap["TP.HCM"],
  },

  {
    name: "Phường Hải Châu",
    code: "00006",
    provinceId: provinceMap["Đà Nẵng"],
  },
]);

// ================= USERS =================
db.users.insertMany([
  {
    name: "Admin",
    email: "[admin@gmail.com](mailto:admin@gmail.com)",
    password: "123456",
    roleId: roles.find((r) => r.name === "admin")._id,
    phone: "0900000000",
    provinceId: provinceMap["Hà Nội"],
    wardId: db.wards.findOne({ name: "Phường Ba Đình" })._id,
    createdAt: new Date(),
  },
  {
    name: "Nguyen Van A",
    email: "[customer@gmail.com](mailto:customer@gmail.com)",
    password: "123456",
    roleId: roles.find((r) => r.name === "customer")._id,
    phone: "0123456789",
    provinceId: provinceMap["TP.HCM"],
    wardId: db.wards.findOne({ name: "Phường Bến Nghé" })._id,
    createdAt: new Date(),
  },
  {
    name: "Designer B",
    email: "[designer@gmail.com](mailto:designer@gmail.com)",
    password: "123456",
    roleId: roles.find((r) => r.name === "designer")._id,
    phone: "0988888888",
    provinceId: provinceMap["Đà Nẵng"],
    wardId: db.wards.findOne({ name: "Phường Hải Châu" })._id,
    createdAt: new Date(),
  },
  {
    name: "Contractor C",
    email: "[contractor@gmail.com](mailto:contractor@gmail.com)",
    password: "123456",
    roleId: roles.find((r) => r.name === "contractor")._id,
    phone: "0977777777",
    provinceId: provinceMap["TP.HCM"],
    wardId: db.wards.findOne({ name: "Phường Thảo Điền" })._id,
    createdAt: new Date(),
  },
]);

const users = db.users.find().toArray();
const customer = users.find(
  (u) => u.email === "[customer@gmail.com](mailto:customer@gmail.com)",
);
const designer = users.find(
  (u) => u.email === "[designer@gmail.com](mailto:designer@gmail.com)",
);
const contractor = users.find(
  (u) => u.email === "[contractor@gmail.com](mailto:contractor@gmail.com)",
);

// ================= CATEGORIES =================
db.categories.insertMany([
  {
    name: "Living Room",
    image: "living-room.jpg",
    description: "Nội thất phòng khách",
    status: "active",
    createdAt: new Date(),
  },
  {
    name: "Bedroom",
    image: "bedroom.jpg",
    description: "Nội thất phòng ngủ",
    status: "active",
    createdAt: new Date(),
  },
]);

const categories = db.categories.find().toArray();

// ================= PRODUCTS =================
db.products.insertMany([
  {
    name: "Sofa",
    price: 10000000,
    categoryId: categories[0]._id,
    description: "Sofa hiện đại, bọc da cao cấp",
    images: ["sofa1.jpg", "sofa2.jpg"],
    stock: 10,
    sold: 0,
    status: "active",
    createdAt: new Date(),
  },
  {
    name: "Bed",
    price: 8000000,
    categoryId: categories[1]._id,
    description: "Giường ngủ gỗ tự nhiên",
    images: ["bed1.jpg"],
    stock: 5,
    sold: 0,
    status: "active",
    createdAt: new Date(),
  },
]);

const products = db.products.find().toArray();

// ================= PROMOTIONS =================
db.promotions.insertMany([
  {
    name: "Sale Tết",
    description: "Giảm giá đầu năm",
    discountPercent: 10,
    productIds: [products[0]._id],
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 10)),
    isActive: true,
    createdAt: new Date(),
  },
]);

// ================= DESIGNS =================
db.designs.insertMany([
  {
    name: "Modern Living Room",
    description: "Phong cách hiện đại, tối giản",
    categoryId: categories[0]._id,
    designerId: designer._id,
    images: ["https://cdn.com/design1.jpg"],
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
    status: "pending",
    createdAt: new Date(),
  },
  {
    title: "Thiết kế phòng ngủ",
    description: "Phong cách tối giản",
    userId: customer._id,
    designerId: designer._id,
    contractorId: contractor._id,
    categoryId: categories[1]._id,
    designId: designs[0]._id,
    status: "building",
    createdAt: new Date(),
  },
]);

const projects = db.projects.find().toArray();

// ================= PAYMENTS =================
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
]);

// ================= ORDERS =================
db.orders.insertMany([
  {
    userId: customer._id,
    trackingCode: "ORD3001",
    totalPrice: 10000000,
    status: "completed",
    paymentMethod: "cash",
    paymentStatus: "paid",
    createdAt: new Date(),
  },
]);

// ================= REVIEWS =================
db.reviews.insertMany([
  {
    userId: customer._id,
    productId: products[0]._id,
    rating: 5,
    comment: "Sofa rất đẹp!",
    createdAt: new Date(),
  },
]);

print("✅ FULL SEED WITH PROVINCE + WARD DONE!");
