export async function seedWards(wardModel, provinceMap) {
  await wardModel.insertMany([
    {
      name: 'Phường Ba Đình',
      code: '00001',
      provinceId: provinceMap['Hà Nội'],
    },
    {
      name: 'Phường Hoàn Kiếm',
      code: '00002',
      provinceId: provinceMap['Hà Nội'],
    },
    {
      name: 'Phường Cầu Giấy',
      code: '00003',
      provinceId: provinceMap['Hà Nội'],
    },

    {
      name: 'Phường Bến Nghé',
      code: '00004',
      provinceId: provinceMap['TP.HCM'],
    },
    {
      name: 'Phường Thảo Điền',
      code: '00005',
      provinceId: provinceMap['TP.HCM'],
    },

    {
      name: 'Phường Hải Châu',
      code: '00006',
      provinceId: provinceMap['Đà Nẵng'],
    },
  ]);

  const wards = await wardModel.find();
  const map = {};
  wards.forEach((w) => (map[w.name] = w._id));

  return map;
}
