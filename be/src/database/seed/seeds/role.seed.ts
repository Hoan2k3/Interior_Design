export async function seedRoles(roleModel) {
  const roles = await roleModel.insertMany([
    { name: 'admin' },
    { name: 'customer' },
    { name: 'designer' },
    { name: 'contractor' },
  ]);

  const map = {};
  roles.forEach((r) => (map[r.name] = r._id));

  return map;
}
