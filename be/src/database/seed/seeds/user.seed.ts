import * as bcrypt from 'bcrypt';

export async function seedUsers(userModel, roleMap, provinceMap, wardMap) {
  const password = await bcrypt.hash('123456', 10);

  const users = await userModel.insertMany([
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password,
      roleId: roleMap['admin'],
      phone: '0900000000',
      provinceId: provinceMap['Hà Nội'],
      wardId: wardMap['Phường Ba Đình'],
    },
    {
      name: 'Customer',
      email: 'customer@gmail.com',
      password,
      roleId: roleMap['customer'],
      phone: '0123456789',
      provinceId: provinceMap['TP.HCM'],
      wardId: wardMap['Phường Bến Nghé'],
    },
    {
      name: 'Designer',
      email: 'designer@gmail.com',
      password,
      roleId: roleMap['designer'],
      phone: '0988888888',
      provinceId: provinceMap['Đà Nẵng'],
      wardId: wardMap['Phường Hải Châu'],
    },
    {
      name: 'Contractor',
      email: 'contractor@gmail.com',
      password,
      roleId: roleMap['contractor'],
      phone: '0977777777',
      provinceId: provinceMap['TP.HCM'],
      wardId: wardMap['Phường Thảo Điền'],
    },
  ]);

  const map = {};
  users.forEach((u) => (map[u.email] = u));

  return map;
}
