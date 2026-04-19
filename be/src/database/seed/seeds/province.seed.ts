export async function seedProvinces(provinceModel) {
  const provinces = await provinceModel.insertMany([
    { name: 'Hà Nội', code: '01' },
    { name: 'TP.HCM', code: '02' },
    { name: 'Đà Nẵng', code: '03' },
  ]);

  const map = {};
  provinces.forEach((p) => (map[p.name] = p._id));

  return map;
}
