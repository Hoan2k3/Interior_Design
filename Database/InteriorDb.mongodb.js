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

    phone: "0900000000", // ⭐ thêm
    address: "Hà Nội", // ⭐ thêm

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

    phone: "0988888888", // ⭐ thêm
    address: "Đà Nẵng", // ⭐ thêm

    createdAt: new Date(),
  },
  {
    name: "Contractor C",
    email: "contractor@gmail.com",
    password: "123456",
    roleId: roles.find((r) => r.name === "contractor")._id,

    phone: "0977777777", // ⭐ thêm
    address: "Cần Thơ", // ⭐ thêm

    createdAt: new Date(),
  },
]);

const users = db.users.find().toArray();

const customer = users.find((u) => u.email === "customer@gmail.com");
const designer = users.find((u) => u.email === "designer@gmail.com");
const contractor = users.find((u) => u.email === "contractor@gmail.com");

// ================= CATEGORIES =================
db.categories.insertMany([
  {
    name: "Living Room",
    image: "living-room.jpg",
    description: "Nội thất phòng khách",
    status: "active", // ⭐ thêm
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
    slug: "sofa-da-cao-cap",
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
    slug: "giuong-go-cao-cap",
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

    // ⭐ chỉ lưu link, không lưu file nặng
    images: ["https://cdn.com/design1.jpg", "https://cdn.com/design2.jpg"],

    price: 2000000,

    createdAt: new Date(),
  },
]);

const designs = db.designs.find().toArray();

db.projects.insertMany([
  // 🟢 Project mới tạo
  {
    title: "Thiết kế phòng khách",
    description: "Phong cách hiện đại",

    userId: customer._id,

    designerId: null,
    contractorId: null,
    categoryId: null,
    designId: null,

    area: 20,
    budget: 20000000,

    status: "pending",

    createdAt: new Date(),
  },

  // 🔵 Project đang thi công
  {
    title: "Thiết kế phòng ngủ",
    description: "Phong cách tối giản",

    userId: customer._id,

    designerId: designer._id,
    contractorId: contractor._id,
    categoryId: categories[1]._id,
    designId: designs[0]._id,

    area: 15,
    budget: 15000000,

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
    userId: customer._id, // ⭐ chỉ dùng userId

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
  {
    userId: customer._id,
    productId: products[0]._id,
    projectId: null,
    type: "product",
    rating: 5,
    comment: "Sofa rất đẹp!",
    createdAt: new Date(),
  },
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

print("✅ Seed UPDATED theo yêu cầu thành công!");
