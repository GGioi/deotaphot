import { WikiMap, WikiGearItem, WikiGameMode, Operator } from '../types';

export const WIKI_MAPS: WikiMap[] = [
  {
    id: 'zero-dam',
    name: 'Zero Dam',
    nameVi: 'Đập Zero',
    environment: 'Công trình thủy điện khổng lồ bao quanh bởi đập nước bê tông, đường hầm tua-bin ngầm và các trạm biến áp cao thế.',
    threatLevel: 'Cao',
    extractionPoints: 6,
    bossName: 'Chỉ Huy Saeed (Saeed Al-Bakr)',
    bossLoot: 'Khóa Kho Báu Trung Tâm, Giáp Cấp 5 Hạng Nặng, Súng Tiểu Liên P90 Gold Spec',
    recommendedGearTier: 'Giáp & Mũ Cấp 3 trở lên',
    overview: 'Bản đồ đầu tiên và kinh điển nhất của chế độ Hazard Operations. Địa hình chia làm 3 tầng: mặt đập hở bắn tỉa, khu phức hợp văn phòng trung tâm và hệ thống cống ngầm dưới nước.',
    keyLocations: [
      { name: 'Khu Quản Trị Trung Tâm', lootTier: 'Cao', desc: 'Nơi tập trung nhiều hòm an toàn, tài liệu mật và máy chủ dữ liệu mã hóa.' },
      { name: 'Nhà Máy Tua-bin Số 2', lootTier: 'Cao', desc: 'Khu vực xuất hiện của Boss Saeed cùng đội cận vệ được trang bị giáp hạng nặng.' },
      { name: 'Trạm Biến Áp Phía Đông', lootTier: 'Trung Bình', desc: 'Nhiều linh kiện điện tử giá trị cao phục vụ nâng cấp căn cứ cá nhân.' },
      { name: 'Cửa Xả Lũ Thủy Điện', lootTier: 'Thấp', desc: 'Điểm trích xuất an toàn bí mật bằng xuồng cứu sinh cơ động.' }
    ]
  },
  {
    id: 'layali-grove',
    name: 'Layali Grove',
    nameVi: 'Rừng Layali',
    environment: 'Khu nghỉ dưỡng biệt thự sang trọng bỏ hoang nằm ẩn mình trong thung lũng rừng thông và hồ nước sương mù dày đặc.',
    threatLevel: 'Trung Bình',
    extractionPoints: 5,
    bossName: 'Thủ Lĩnh Phục Kích Gideon',
    bossLoot: 'Súng Bắn Tỉa M700 Tác Chiến Đêm, Ống Ngắm Nhiệt FLIR, Chìa Khóa Biệt Thự Tổng Thống',
    recommendedGearTier: 'Giáp Cấp 3, Kính Nhìn Đêm (NVG)',
    overview: 'Đặc trưng với tầm nhìn bị hạn chế bởi cây cối rậm rạp và sương mù. Các cuộc đọ súng thường diễn ra bất ngờ từ cự ly trung bình và phục kích trong các khách sạn bỏ hoang.',
    keyLocations: [
      { name: 'Khu Khách Sạn Nghỉ Dưỡng', lootTier: 'Cao', desc: 'Có 3 két sắt mật mã và phòng trưng bày tranh nghệ thuật giá trị cao.' },
      { name: 'Căn Cứ Trại Lính Phục Kích', lootTier: 'Trung Bình', desc: 'Kho đạn và hòm quân khí với nhiều phụ kiện súng cao cấp.' },
      { name: 'Bến Du Thuyền Hồ Layali', lootTier: 'Thấp', desc: 'Điểm trích xuất có điều kiện cần kích hoạt máy phát điện trước 90 giây.' }
    ]
  },
  {
    id: 'space-city',
    name: 'Space City',
    nameVi: 'Thành Phố Không Gian',
    environment: 'Trung tâm nghiên cứu hàng không vũ trụ hiện đại bậc nhất, bao gồm bệ phóng tên lửa đẩy, phòng thí nghiệm không trọng lực.',
    threatLevel: 'Cực Cao',
    extractionPoints: 4,
    bossName: 'Tổng Công Trình Sư Havoc (Director Vance)',
    bossLoot: 'Lõi Dữ Liệu Lượng Tử, Thẻ Quyền Lực Đỏ Cấp 6, Súng Trường Công Nghệ Cao Spear',
    recommendedGearTier: 'Giáp & Mũ Cấp 5 - 6 Tối Thượng',
    overview: 'Khu vực thử thách khắc nghiệt nhất game. Mọi góc hành lang đều có lính canh trang bị laser và súng tự động. Nơi diễn ra những cuộc chạm trán đẫm máu giữa các tổ đội tinh nhuệ nhất.',
    keyLocations: [
      { name: 'Bệ Phóng Tên Lửa V-01', lootTier: 'Cao', desc: 'Chiến trường trung tâm với các bục nâng cơ khí và hòm tiếp tế hàng không thả dù.' },
      { name: 'Phòng Thí Nghiệm Lõi Năng Lượng', lootTier: 'Cao', desc: 'Nơi cất giữ các tinh thể quý và bộ vi xử lý giá trị hàng triệu xu tác chiến.' },
      { name: 'Trạm Radar Không Gian', lootTier: 'Cao', desc: 'Cho phép quét toàn bộ vị trí người chơi khác trên bản đồ trong 30 giây.' }
    ]
  },
  {
    id: 'ahsarah-desert',
    name: 'Ahsarah Desert Frontier',
    nameVi: 'Vùng Sa Mạc Cấm Ahsarah',
    environment: 'Sa mạc cát cháy hoang vu xen kẽ những mỏ dầu đang bốc cháy và xác trực thăng vận tải bị bắn rơi.',
    threatLevel: 'Cao',
    extractionPoints: 5,
    bossName: 'Đại Úy Pháo Binh Demir',
    bossLoot: 'Khẩu Súng Máy PKM Vàng, Giáp Ngực Titan Chống Cháy Cấp 5',
    recommendedGearTier: 'Giáp Cấp 4 trở lên, Ống Ngắm Tầm Xa',
    overview: 'Tầm nhìn bao quát cực xa tạo điều kiện thuận lợi cho các tay súng bắn tỉa. Bão cát định kỳ có thể làm tê liệt thiết bị điện tử và giảm mạnh tầm quan sát.',
    keyLocations: [
      { name: 'Giàn Khoan Dầu Mỏ Ahsarah', lootTier: 'Cao', desc: 'Khu tổ hợp công nghiệp nhiều tầng với hòm đồ cơ khí quý hiếm.' },
      { name: 'Xác Phi Cơ Vận Tải Rơi', lootTier: 'Cao', desc: 'Hòm cứu trợ nhân đạo quân sự chứa nhiều vật tư y tế và đạn dược cao cấp.' }
    ]
  }
];

export const WIKI_OPERATORS_FULL: Operator[] = [
  {
    id: 'op-dwolf',
    name: 'Kai Silva',
    callsign: 'D-Wolf',
    role: 'Đột Kích (Assault)',
    faction: 'G.T.I. Task Force',
    image: '/src/assets/images/operator_dwolf_tactical_1793764682789.jpg',
    bio: 'Chiến binh đột kích kỳ cựu mang quốc tịch Brazil. Từng thuộc lực lượng tác chiến rừng nhiệt đới, nổi tiếng với khả năng di chuyển tốc độ cao và phản xạ cận chiến vô song.',
    specialAbility: 'Exoskeleton Overdrive: Kích hoạt hệ thống trợ lực cơ khí, tăng 40% tốc độ chạy nước rút và hồi phục thể lực tức thì sau mỗi mạng hạ gục.',
    tacticalGear: 'Lựu Đạn Khói Ba Tầng & Máy Phóng Lựu Bán Tự Động',
    passiveTrait: 'Thích Ứng Tác Chiến: Giảm 30% thời gian bị làm chậm bởi chấn động bom đạn.',
    difficulty: 'Dễ',
    recommendedWeapons: ['M4A1', 'K416', 'Vector']
  },
  {
    id: 'op-luna',
    name: 'Luna Kim',
    callsign: 'Luna',
    role: 'Trinh Sát (Recon)',
    faction: 'Haavk Special Recon',
    image: '/src/assets/images/operator_luna_sniper_1793764683336.jpg',
    bio: 'Nữ xạ thủ bắn tỉa thiên tài xuất thân từ lực lượng viễn chinh. Sở hữu kỹ năng thiện xạ cự ly xa và điều khiển các mũi tên cảm biến điện tử định vị kẻ thù qua tường.',
    specialAbility: 'Sensor Arrow: Bắn mũi tên điện tử phát xung siêu âm quét và đánh dấu toàn bộ vị trí kẻ thù trong bán kính 25m xuyên qua vật cản.',
    tacticalGear: 'Cung Săn Điện Tử & Đạn Tầm Nhiệt',
    passiveTrait: 'Đánh Dấu Săn Mồi: Đòn bắn trúng của Luna sẽ làm mục tiêu bị lộ diện trong 3 giây cho toàn đội.',
    difficulty: 'Trung Bình',
    recommendedWeapons: ['SV-98', 'AWM', 'SCAR-H']
  },
  {
    id: 'op-shepherd',
    name: 'Terry Musa',
    callsign: 'Shepherd',
    role: 'Chiến Thuật (Engineer)',
    faction: 'G.T.I. Engineering Unit',
    image: '/src/assets/images/hero_delta_force_hq_1793764681773.jpg',
    bio: 'Chuyên gia công binh và phòng thủ điểm chốt. Có khả năng triển khai các thiết bị sóng âm làm giảm hiệu quả bắn súng của địch và sửa chữa khí tài thiết giáp.',
    specialAbility: 'Sonic Disruption Trap: Triển khai máy phát sóng âm tần số cao gây choáng váng, làm chậm tốc độ bắn và làm mờ tầm nhìn đối phương.',
    tacticalGear: 'Mìn Định Hướng Claymore & Bộ Hàn Sửa Chữa Thiết Giáp',
    passiveTrait: 'Bậc Thầy Gia Cố: Tăng 20% lượng giáp bảo vệ khi ở gần công sự phòng thủ.',
    difficulty: 'Trung Bình',
    recommendedWeapons: ['AKM', 'PKM', 'M870']
  },
  {
    id: 'op-stinger',
    name: 'Roy Smee',
    callsign: 'Stinger',
    role: 'Hỗ Trợ (Support)',
    faction: 'Global Tactical Medical',
    image: '/src/assets/images/hero_delta_force_hq_1793764681773.jpg',
    bio: 'Bác sĩ quân y chiến trường với hệ thống Drone hồi máu tầm xa tự động. Đảm bảo sinh lực bền bỉ cho toàn đội hình trong các trận chiến kéo dài.',
    specialAbility: 'Therapeutic Drone: Thả Drone y tế bay theo đồng đội bị thương, tự động bơm máu và cầm máu vết thương trong khi vẫn tự do nổ súng.',
    tacticalGear: 'Súng Bắn Khói Nano Trị Liệu & Thuốc Hồi Sinh Nhanh',
    passiveTrait: 'Cứu Tinh Chiến Trường: Tốc độ cứu sống đồng đội bị ngã tăng gấp đôi.',
    difficulty: 'Dễ',
    recommendedWeapons: ['MP5', 'K416', 'P90']
  },
  {
    id: 'op-hackclaw',
    name: 'Mai Xiaowen',
    callsign: 'Hackclaw',
    role: 'Trinh Sát (Recon)',
    faction: 'G.T.I. Intelligence',
    image: '/src/assets/images/operator_luna_sniper_1793764683336.jpg',
    bio: 'Chuyên gia an ninh mạng và tình báo điện tử. Sử dụng thiết bị Signal Decryptor để lần theo dấu vết bước chân và hack vô hiệu hóa trang bị công nghệ đối phương.',
    specialAbility: 'Signal Tracker: Kích hoạt radar cầm tay quét dấu vết sóng tín hiệu của người chơi gần nhất trong bán kính 60 mét.',
    tacticalGear: 'Flash Drone Tự Hành & Lựu Đạn Gây Nhiễu EMP',
    passiveTrait: 'Bước Chân Bóng Ma: Giảm 50% tiếng bước chân khi đi bộ và ngồi.',
    difficulty: 'Khó',
    recommendedWeapons: ['Vector', 'M4A1', 'MP5']
  },
  {
    id: 'op-uluru',
    name: 'David F.',
    callsign: 'Uluru',
    role: 'Chiến Thuật (Engineer)',
    faction: 'Haavk Combat Pioneer',
    image: '/src/assets/images/operator_dwolf_tactical_1793764682789.jpg',
    bio: 'Cựu binh công binh hỏa lực hạng nặng. Trang bị súng phóng lựu nhiệt áp chuyên phá hủy chướng ngại vật và thanh trừng các căn phòng đóng kín.',
    specialAbility: 'Thermobaric Shell: Bắn đạn pháo nhiệt áp gây vụ nổ áp suất cực mạnh, hút sạch oxy và thiêu rụi mục tiêu sau chỗ nấp.',
    tacticalGear: 'Khối Nổ C4 Điều Khiển Từ Xa & Khiên Đạn Bán Thân',
    passiveTrait: 'Cơ Thể Thép: Giảm 25% sát thương nhận vào từ các vụ nổ và mảnh bom.',
    difficulty: 'Khó',
    recommendedWeapons: ['SCAR-H', 'PKM', 'M4A1']
  }
];

export const WIKI_GEAR_ITEMS: WikiGearItem[] = [
  {
    id: 'armor-t6-titan',
    category: 'Giáp Chống Đạn',
    tier: 6,
    name: 'Áo Giáp Chống Đạn Hạng Nặng Titan Cấp 6',
    durability: 120,
    material: 'Hợp Kim Titan Cường Lực',
    protectedAreas: 'Ngực, Bụng, Hai Bả Vai',
    desc: 'Trang bị phòng vệ tối thượng trong Delta Force. Chống đỡ hầu hết mọi loại đạn súng trường tiêu chuẩn, bảo toàn tính mạng trong hỏa lực dữ dội.'
  },
  {
    id: 'armor-t5-ceramic',
    category: 'Giáp Chống Đạn',
    tier: 5,
    name: 'Áo Giáp Tác Chiến Gốm Ceramic Cấp 5',
    durability: 95,
    material: 'Tấm Gốm Ceramic Ép Cao Áp',
    protectedAreas: 'Ngực và Bụng',
    desc: 'Lựa chọn phổ biến của các game thủ leo rank cao. Trọng lượng vừa phải, bảo vệ vững chắc trước đạn xuyên giáp AP.'
  },
  {
    id: 'armor-t4-aramid',
    category: 'Giáp Chống Đạn',
    tier: 4,
    name: 'Áo Giáp Cơ Động Sợi Aramid Cấp 4',
    durability: 80,
    material: 'Sợi Siêu Bền Aramid',
    protectedAreas: 'Ngực',
    desc: 'Cân bằng giữa độ cơ động và phòng hộ, phù hợp cho lối chơi chạy loot nhanh và đột kích CQB.'
  },
  {
    id: 'helm-t6-spartan',
    category: 'Mũ Cối',
    tier: 6,
    name: 'Mũ Cối Đặc Chủng Spartan Tích Hợp Kính Chống Đạn Cấp 6',
    durability: 85,
    material: 'Polymer Nano Kết Hợp Thủy Tinh Hữu Cơ',
    protectedAreas: 'Đầu, Mặt, Gáy',
    desc: 'Chặn đứng một phát bắn chí mạng vào đầu từ súng bắn tỉa hạng nặng. Giảm nhẹ góc nhìn ngoại vi.'
  },
  {
    id: 'backpack-t5-field',
    category: 'Balo',
    tier: 5,
    name: 'Balo Tác Chiến Viễn Chinh 45L (36 Ô Chứa Đồ)',
    capacity: '36 Ô (6x6 Grid) + 2 Khe Cắm Vũ Khí Phụ',
    desc: 'Sức chứa khổng lồ cho phép gom toàn bộ tài liệu giá trị cao, linh kiện vũ khí và trang bị hạ gục được từ đối thủ.'
  },
  {
    id: 'safebox-3x3',
    category: 'Hòm Đồ An Toàn',
    tier: 5,
    name: 'Hòm Đồ An Toàn Titan Bảo Mật Cao 3x3 (9 Ô)',
    capacity: '9 Ô Vật Phẩm Tuyệt Mật',
    desc: 'Mọi vật phẩm cất vào hòm này sẽ không bao giờ bị mất kể cả khi bạn bị hạ gục trong trận chiến.'
  },
  {
    id: 'med-surgery-kit',
    category: 'Y Tế & Phẫu Thuật',
    tier: 4,
    name: 'Bộ Phẫu Thuật Dã Chiến Khẩn Cấp CMS 15 Lần',
    healingPoints: 150,
    desc: 'Chữa trị dứt điểm tình trạng gãy xương, đứt mạch máu và khôi phục thanh HP của các chi bị bắn đen về trạng thái ban đầu.'
  }
];

export const WIKI_GAME_MODES: WikiGameMode[] = [
  {
    id: 'mode-hazard-ops',
    name: 'Chiến Dịch Sinh Tồn Hazard Operations',
    type: 'PvPvE Trích Xuất',
    playersCount: '3 Người / Đội (Tối đa 24 Người Chơi/Trận)',
    keyMechanics: [
      'Thâm nhập vào khu vực cấm, loot tài sản, tiêu diệt lính gác AI và người chơi khác.',
      'Săn lùng Boss khu vực để mở khóa chìa khóa phòng kho báu bảo mật.',
      'Trích xuất an toàn tại các điểm hẹn đúng giờ để bảo toàn toàn bộ tài sản mang về.',
      'Nếu bị tiêu diệt, toàn bộ trang bị trên người (ngoại trừ Hòm Đồ An Toàn) sẽ bị mất.'
    ],
    desc: 'Chế độ chơi sinh tồn trích xuất căng thẳng đỉnh cao. Quản lý kinh tế cá nhân, mua bán đồ tại Chợ Đen và nâng cấp căn cứ công nghệ.',
    tips: [
      'Luôn ưu tiên cất đồ quý giá (Chìa khóa, Vàng, Vi xử lý) vào Hòm Đồ An Toàn trước.',
      'Lắng nghe tiếng súng và tiếng bước chân để phán đoán vũ khí đối phương trước khi giao chiến.',
      'Quan sát tín hiệu khói xanh hoặc còi báo động tại điểm trích xuất để tránh bị phục kích camp điểm.'
    ]
  },
  {
    id: 'mode-havoc-warfare',
    name: 'Đại Chiến Hỏa Lực Havoc Warfare',
    type: 'PvP Chiến Tranh Quy Mô Lớn',
    playersCount: '32v32 (Tổng cộng 64 Người Chơi)',
    keyMechanics: [
      'Chiếm đóng các cứ điểm cờ A, B, C, D trên bản đồ chiến trường rộng lớn.',
      'Điều khiển các khí tài chiến tranh hiện đại: Xe bọc thép LAV, Xe tăng M1A2, Trực thăng vũ trang Black Hawk, Tàu đổ bộ.',
      'Phối hợp 4 phân nhánh đặc nhiệm: Đột Kích, Trinh Sát, Công Binh, Quân Y.',
      'Hồi sinh không giới hạn theo thời gian và điểm chiếm đóng.'
    ],
    desc: 'Trải nghiệm không khí chiến tranh tổng lực hoành tráng, tái hiện cảm giác chiến đấu đỉnh cao của dòng game Delta Force truyền thống.',
    tips: [
      'Công Binh cần luôn mang theo tên lửa phòng không Stinger hoặc RPG-7 để khắc chế xe tăng và trực thăng.',
      'Quân Y thả khói và triển khai Drone hồi máu ngay trên các tuyến hào trung tâm để giữ chân quân lực.'
    ]
  },
  {
    id: 'mode-black-hawk-down',
    name: 'Chiến Dịch Black Hawk Down (Mogadishu)',
    type: 'Co-op Chiến Dịch PvE',
    playersCount: '1 - 4 Người Chơi Hợp Tác',
    keyMechanics: [
      'Tái hiện chiến dịch lịch sử nổi tiếng tại Mogadishu với công nghệ đồ họa Unreal Engine 5 tân tiến.',
      'Nhiệm vụ giải cứu tổ lái trực thăng Black Hawk Super 64 và Super 61 bị bắn rơi.',
      'Chiến đấu trong từng góc phố chật hẹp trước làn sóng đối phương áp đảo.'
    ],
    desc: 'Chế độ cốt truyện điện ảnh huyền thoại, tri ân phiên bản Delta Force kinh điển năm 2003 với âm thanh và trải nghiệm chân thực đến từng chi tiết.',
    tips: [
      'Luôn di chuyển bọc lót theo cặp, tránh đi một mình ra giữa ngã tư trống.',
      'Tiết kiệm đạn dược và nhặt súng đối phương rơi khi hỏa lực cạn kiệt.'
    ]
  }
];
