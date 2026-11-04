export type Language = 'vi' | 'en' | 'zh' | 'th';

export interface TranslationStrings {
  brandTitle: string;
  navEvents: string;
  navGunsmith: string;
  navWiki: string;
  navCodes: string;
  navChecker: string;
  navScript: string;
  navArsenal: string;
  heroKicker: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroBtnCodes: string;
  heroBtnChecker: string;
  heroBtnScript: string;
  heroOfficialWeb: string;
  statTotalCodes: string;
  statActiveCodes: string;
  statCheckedRatio: string;
  statConsoleVersion: string;
  statEstimatedClaims: string;
  
  // Checker Tool
  checkerKicker: string;
  checkerTitle: string;
  checkerTitleHighlight: string;
  checkerDesc: string;
  checkerPlaceholder: string;
  checkerBtnCheck: string;
  checkerClear: string;
  checkerResultFound: string;
  checkerResultNotFound: string;
  checkerStatusActive: string;
  checkerStatusLimited: string;
  checkerStatusExpired: string;
  checkerStatusTypo: string;
  checkerSuggested: string;
  checkerPlatform: string;
  checkerRewards: string;
  checkerExpiry: string;
  checkerCategory: string;
  
  // Code Center
  codeCenterKicker: string;
  codeCenterTitle: string;
  codeCenterTitleHighlight: string;
  codeCenterDesc: string;
  filterAll: string;
  filterActive: string;
  filterLimited: string;
  filterExpired: string;
  filterTypo: string;
  platformAll: string;
  platformPC: string;
  platformMobile: string;
  platformSteam: string;
  searchPlaceholder: string;
  copyAllActiveBtn: string;
  copyAllSuccess: string;
  copyCodeBtn: string;
  copiedCodeSuccess: string;
  testRedeemBtn: string;
  guideTitle: string;
  guideInGameTitle: string;
  guideInGameContent: string;
  guideWebTitle: string;
  guideWebContent: string;
  noCodesFound: string;
  noCodesHint: string;
  
  // Script Tool
  scriptKicker: string;
  scriptTitle: string;
  scriptTitleHighlight: string;
  scriptDesc: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  scriptConfigTitle: string;
  scriptDelayLabel: string;
  scriptAutoClose: string;
  scriptStopOnError: string;
  scriptCodeListTitle: string;
  scriptSelectAll: string;
  scriptDeselectAll: string;
  scriptSimulatorTitle: string;
  scriptRunSimBtn: string;
  scriptRunningSimBtn: string;
  scriptCopyBtn: string;
  scriptCopiedSuccess: string;
  scriptSecurityNote: string;
  
  // Modal & Footer
  testModalTitle: string;
  testModalDesc: string;
  testModalCharLabel: string;
  testModalServerLabel: string;
  testModalSubmit: string;
  testModalSubmitting: string;
  testModalSuccessTitle: string;
  testModalSuccessDesc: string;
  footerDisclaimer: string;
}

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  vi: {
    brandTitle: 'Delta Force HQ',
    navEvents: 'Sự Kiện HQ',
    navGunsmith: 'Độ Súng Gunsmith',
    navWiki: 'Wiki Tác Chiến',
    navCodes: 'Kho Code',
    navChecker: 'Kiểm Tra Code',
    navScript: 'Script Console F12',
    navArsenal: 'Quân Bị & Đặc Nhiệm',
    heroKicker: 'Delta Force Event HQ · Trụ Sở Tác Chiến Tiếng Việt · Cập Nhật Toàn Bộ Code',
    heroTitle: 'Trụ Sở Sự Kiện & Tra Cứu',
    heroTitleHighlight: 'Code Redeem Toàn Diện',
    heroDesc: 'Tổng hợp và đối soát toàn bộ hơn 200+ mã quà tặng Delta Force (Việt Nam, Quốc Tế, Garena, Giải Đấu Six Major). Tích hợp công cụ kiểm tra tình trạng mã hợp lệ/hết hạn/sai chính tả và script console tự động nhập code trên website chính thức.',
    heroBtnCodes: 'Xem Danh Sách Code',
    heroBtnChecker: 'Kiểm Tra Tình Trạng Code',
    heroBtnScript: 'Lấy Script Console F12',
    heroOfficialWeb: 'Web Chính Thức',
    statTotalCodes: 'Tổng Mã Thu Thập',
    statActiveCodes: 'Mã Đang Hoạt Động',
    statCheckedRatio: 'Đã Đối Soát & Phân Loại',
    statConsoleVersion: 'Script Console Tự Động',
    statEstimatedClaims: 'Lượt Nhận Ước Tính',

    checkerKicker: 'Hệ Thống Kiểm Tra Trực Tiếp · Phát Hiện Sai Lệch & Gợi Ý Mã Đúng',
    checkerTitle: 'Công Cụ Kiểm Tra & Tra Cứu',
    checkerTitleHighlight: 'Tình Trạng Code Tức Thì',
    checkerDesc: 'Dán một hoặc nhiều mã code vào đây để kiểm tra ngay: mã nào CÒN HẠN, mã nào HẾT HẠN, mã nào BỊ LỖI CHÍNH TẢ và mã nào KHÔNG TỒN TẠI trong cơ sở dữ liệu.',
    checkerPlaceholder: 'Nhập hoặc dán mã code vào đây (VD: DELTAFORCE2026, Top1BXHVN, DFExceptional305, RETURNING...)',
    checkerBtnCheck: 'Kiểm Tra Ngay',
    checkerClear: 'Xóa kết quả',
    checkerResultFound: 'Tìm thấy kết quả đối soát:',
    checkerResultNotFound: 'Không tìm thấy mã này trong hệ thống chính thức của Delta Force.',
    checkerStatusActive: 'Khả Dụng (Active)',
    checkerStatusLimited: 'Số Lượng Giới Hạn (Limited)',
    checkerStatusExpired: 'Đã Hết Hạn (Expired)',
    checkerStatusTypo: 'Mã Sai Chính Tả / Lỗi Sao Chép',
    checkerSuggested: 'Gợi ý mã gốc chính xác:',
    checkerPlatform: 'Nền tảng hỗ trợ:',
    checkerRewards: 'Phần thưởng dự kiến:',
    checkerExpiry: 'Thời hạn:',
    checkerCategory: 'Phân loại:',

    codeCenterKicker: 'Kho Mã Quà Tặng Đã Đối Soát · Cập Nhật Liên Tục',
    codeCenterTitle: 'Kho Code Redeem',
    codeCenterTitleHighlight: 'Delta Force Toàn Cầu & Việt Nam',
    codeCenterDesc: 'Toàn bộ danh sách code được phân loại rõ ràng: Đang hoạt động, Có hạn, Đã hết hạn, và các mã lỗi sao chép phổ biến.',
    filterAll: 'Tất Cả',
    filterActive: 'Còn Hạn',
    filterLimited: 'Giới Hạn',
    filterExpired: 'Hết Hạn',
    filterTypo: 'Mã Lỗi / Typo',
    platformAll: 'Mọi Nền Tảng',
    platformPC: 'Chỉ PC',
    platformMobile: 'Mobile',
    platformSteam: 'Steam',
    searchPlaceholder: 'Tìm kiếm mã code, tên gói quà, skin súng, vàng...',
    copyAllActiveBtn: 'Sao Chép Toàn Bộ Code Còn Hạn',
    copyAllSuccess: 'Đã Sao Chép Toàn Bộ Mã Còn Hạn!',
    copyCodeBtn: 'Sao Chép',
    copiedCodeSuccess: 'Đã Chép',
    testRedeemBtn: 'Thử Đổi Trên Web Này',
    guideTitle: 'Hướng Dẫn 2 Cách Nhập Code Nhận Thưởng',
    guideInGameTitle: 'Cách 1: Nhập Trực Tiếp Trong Game',
    guideInGameContent: '1. Vào game > Cài đặt (Bánh răng) > Tài khoản > Đổi Mã Quà Tặng.\n2. Dán mã code và xác nhận. Quà gửi thẳng vào Hòm Thư in-game.',
    guideWebTitle: 'Cách 2: Nhập Qua Website Chính Thức',
    guideWebContent: '1. Truy cập playdeltaforce.com và đăng nhập tài khoản.\n2. Dùng công cụ "Script Console F12" bên dưới để nhập tự động toàn bộ mã!',
    noCodesFound: 'Không tìm thấy mã nào phù hợp với bộ lọc',
    noCodesHint: 'Thử thay đổi từ khóa tìm kiếm hoặc chọn tab trạng thái khác.',

    scriptKicker: 'Công Cụ Tự Động Hóa F12 · An Toàn Tuyệt Đối · Giãn Dòng Chống Spam',
    scriptTitle: 'Script Console Tự Động Nhập Code',
    scriptTitleHighlight: 'Trên Web Chính Thức',
    scriptDesc: 'Đoạn mã JavaScript chạy trực tiếp trên Console trình duyệt (F12) của trang playdeltaforce.com, tự động điền và bấm nhận thưởng từng mã an toàn.',
    step1Title: 'Mở Web Chính Thức',
    step1Desc: 'Truy cập trang đổi quà playdeltaforce.com và đăng nhập tài khoản Delta Force.',
    step2Title: 'Bấm Phím F12',
    step2Desc: 'Nhấn F12 (hoặc Ctrl+Shift+J) trên bàn phím, chuyển sang tab Console.',
    step3Title: 'Dán Script & Enter',
    step3Desc: 'Bấm nút "Sao Chép Script" bên dưới, dán vào Console rồi bấm ENTER.',
    step4Title: 'Nhận Quà In-Game',
    step4Desc: 'Hệ thống tự động thực thi từng mã có khoảng giãn dòng an toàn. Kiểm tra hòm thư trong game.',
    scriptConfigTitle: 'Cấu Hình Tự Động Hóa',
    scriptDelayLabel: 'Khoảng nghỉ giữa mỗi mã:',
    scriptAutoClose: 'Tự động đóng popup thông báo kết quả sau mỗi lần nhập',
    scriptStopOnError: 'Dừng quy trình nếu gặp mã lỗi hoặc chặn tần suất',
    scriptCodeListTitle: 'Danh Sách Mã Sẽ Nhập',
    scriptSelectAll: 'Chọn hết',
    scriptDeselectAll: 'Bỏ chọn',
    scriptSimulatorTitle: 'Trình Giả Lập Kiểm Thử Script',
    scriptRunSimBtn: 'Chạy Thử Mô Phỏng',
    scriptRunningSimBtn: 'Đang chạy mô phỏng...',
    scriptCopyBtn: 'Sao Chép Script Để Dán Vào F12',
    scriptCopiedSuccess: 'Đã Sao Chép Script Thành Công!',
    scriptSecurityNote: 'Script chạy 100% Client-side trên trình duyệt của bạn, không gửi thông tin tài khoản ra ngoài, có độ trễ tự nhiên chống khoá tài khoản.',

    testModalTitle: 'Kích Hoạt Mã Quà Tặng Thử Nghiệm',
    testModalDesc: 'Nhập thông tin nhân vật để thử nghiệm cơ chế trả thưởng của hệ thống Delta Force.',
    testModalCharLabel: 'ID Nhân Vật hoặc Tên In-game:',
    testModalServerLabel: 'Máy Chủ / Khu Vực:',
    testModalSubmit: 'Xác Nhận Kích Hoạt',
    testModalSubmitting: 'Đang gửi tín hiệu máy chủ...',
    testModalSuccessTitle: 'Kích Hoạt Nhận Thưởng Thành Công!',
    testModalSuccessDesc: 'Vật phẩm đã được chuyển thành công vào Hòm Thư tài khoản.',
    footerDisclaimer: 'Tuyên bố miễn trừ trách nhiệm: Trang web tổng hợp thông tin cộng đồng phi lợi nhuận cho người chơi Delta Force. Toàn bộ bản quyền hình ảnh, thương hiệu thuộc về TiMi Studio Group & Level Infinite.',
  },
  en: {
    brandTitle: 'Delta Force HQ',
    navEvents: 'HQ Events',
    navGunsmith: 'Gunsmith Builder',
    navWiki: 'Official Wiki',
    navCodes: 'Redeem Codes',
    navChecker: 'Code Checker',
    navScript: 'F12 Console Script',
    navArsenal: 'Arsenal & Operators',
    heroKicker: 'Delta Force Event HQ · Global & Regional Operation Briefing · Full Code Catalog',
    heroTitle: 'Operation Events & Comprehensive',
    heroTitleHighlight: 'Redeem Code Directory',
    heroDesc: 'All-in-one directory with 200+ verified Delta Force promo codes (Global, Vietnam, Garena, Six Major tournament). Includes instant code status validator (active/expired/typos) and batch auto-redeem console script for the official website.',
    heroBtnCodes: 'Browse All Codes',
    heroBtnChecker: 'Check Code Status',
    heroBtnScript: 'Get Console F12 Script',
    heroOfficialWeb: 'Official Website',
    statTotalCodes: 'Total Codes Tracked',
    statActiveCodes: 'Active Working Codes',
    statCheckedRatio: 'Verified & Categorized',
    statConsoleVersion: 'Auto Console Script',
    statEstimatedClaims: 'Estimated Claims',

    checkerKicker: 'Live Verification Engine · Typo Detection & Accurate Suggestions',
    checkerTitle: 'Instant Code Verification &',
    checkerTitleHighlight: 'Status Checker Tool',
    checkerDesc: 'Paste one or multiple codes to immediately verify: which codes are ACTIVE, which are EXPIRED, which are COMMON TYPOS, and which do not exist.',
    checkerPlaceholder: 'Enter or paste code here (e.g. DELTAFORCE2026, Top1BXHVN, DFExceptional305, RETURNING...)',
    checkerBtnCheck: 'Verify Code Now',
    checkerClear: 'Clear Result',
    checkerResultFound: 'Verification result found:',
    checkerResultNotFound: 'This code was not found in the official Delta Force database.',
    checkerStatusActive: 'Active & Working',
    checkerStatusLimited: 'Limited Supply',
    checkerStatusExpired: 'Expired',
    checkerStatusTypo: 'Typo / Corrupted Code',
    checkerSuggested: 'Correct canonical code:',
    checkerPlatform: 'Supported Platforms:',
    checkerRewards: 'Rewards included:',
    checkerExpiry: 'Expiry Date:',
    checkerCategory: 'Category:',

    codeCenterKicker: 'Verified Gift Codes Database · Continuously Updated',
    codeCenterTitle: 'Delta Force Redeem Codes',
    codeCenterTitleHighlight: 'Global & Regional Database',
    codeCenterDesc: 'All codes categorized clearly: Active, Limited, Expired, and known copy typos.',
    filterAll: 'All Codes',
    filterActive: 'Active',
    filterLimited: 'Limited',
    filterExpired: 'Expired',
    filterTypo: 'Typos / Errors',
    platformAll: 'All Platforms',
    platformPC: 'PC Only',
    platformMobile: 'Mobile',
    platformSteam: 'Steam',
    searchPlaceholder: 'Search codes, rewards, weapon skins, gold...',
    copyAllActiveBtn: 'Copy All Active Codes',
    copyAllSuccess: 'Copied All Active Codes!',
    copyCodeBtn: 'Copy Code',
    copiedCodeSuccess: 'Copied!',
    testRedeemBtn: 'Simulate Redeem Here',
    guideTitle: '2 Ways to Redeem Promo Codes',
    guideInGameTitle: 'Method 1: In-Game Redemption',
    guideInGameContent: '1. Launch game > Settings (Gear icon) > Account > Redeem Gift Code.\n2. Paste code and submit. Rewards are sent straight to your in-game mailbox.',
    guideWebTitle: 'Method 2: Official Website Redemption',
    guideWebContent: '1. Visit playdeltaforce.com and login with your linked account.\n2. Use our "F12 Console Script" below to batch redeem everything automatically!',
    noCodesFound: 'No codes found matching current filter',
    noCodesHint: 'Try changing search keywords or selecting another status filter tab.',

    scriptKicker: 'F12 Automation Toolkit · Zero Add-ons Required · Rate-limit Protected',
    scriptTitle: 'Automated Browser Console Script',
    scriptTitleHighlight: 'For Official Website',
    scriptDesc: 'Lightweight JavaScript snippet that runs inside your browser Developer Console (F12) on playdeltaforce.com, automatically inputting and redeeming each code sequentially.',
    step1Title: 'Open Official Site',
    step1Desc: 'Navigate to playdeltaforce.com code redeem page and log in.',
    step2Title: 'Press F12 Key',
    step2Desc: 'Press F12 (or Ctrl+Shift+J / Cmd+Option+J) and switch to the Console tab.',
    step3Title: 'Paste Script & Enter',
    step3Desc: 'Click "Copy Script" below, paste into the Console prompt and press ENTER.',
    step4Title: 'Claim In-Game Loot',
    step4Desc: 'The script inputs codes with human-like delays. Check your in-game mailbox!',
    scriptConfigTitle: 'Automation Settings',
    scriptDelayLabel: 'Delay interval between codes:',
    scriptAutoClose: 'Automatically close confirmation modals after submission',
    scriptStopOnError: 'Halt process if error or anti-spam cooldown is detected',
    scriptCodeListTitle: 'Codes Queue for Execution',
    scriptSelectAll: 'Select All',
    scriptDeselectAll: 'Deselect All',
    scriptSimulatorTitle: 'Interactive Script Simulator',
    scriptRunSimBtn: 'Run Test Simulation',
    scriptRunningSimBtn: 'Simulation in progress...',
    scriptCopyBtn: 'Copy Script for Browser F12',
    scriptCopiedSuccess: 'Script Copied to Clipboard!',
    scriptSecurityNote: 'Script runs 100% client-side in your own browser. No password or session token is transmitted. Built-in rate limiting protects your account.',

    testModalTitle: 'Simulate Code Redemption',
    testModalDesc: 'Enter character information to test Delta Force redemption server response.',
    testModalCharLabel: 'Character Name or UID:',
    testModalServerLabel: 'Server / Region:',
    testModalSubmit: 'Confirm & Redeem',
    testModalSubmitting: 'Contacting server...',
    testModalSuccessTitle: 'Redemption Succeeded!',
    testModalSuccessDesc: 'Rewards have been successfully dispatched to your mailbox.',
    footerDisclaimer: 'Disclaimer: Unofficial community hub and utility for Delta Force players. All copyrights and trademarks belong to TiMi Studio Group & Level Infinite.',
  },
  zh: {
    brandTitle: '三角洲行动 Delta Force HQ',
    navEvents: '特战活动',
    navGunsmith: '枪械工坊改装',
    navWiki: '特战百科',
    navCodes: '兑换码仓库',
    navChecker: '代码状态查验',
    navScript: 'F12控制台脚本',
    navArsenal: '军备特战干员',
    heroKicker: '三角洲行动活动总部 · 全球及亚太区代码全收录',
    heroTitle: '特战行动活动与',
    heroTitleHighlight: '全量礼包兑换码中心',
    heroDesc: '汇集200+官方公测、电竞赛事及创作者兑换码。内置即时代码查验工具（识别有效/已过期/常见拼写错误）以及官方网页端F12一键自动批量兑换脚本。',
    heroBtnCodes: '浏览全量兑换码',
    heroBtnChecker: '查验代码状态',
    heroBtnScript: '获取F12控制台脚本',
    heroOfficialWeb: '访问官方网站',
    statTotalCodes: '累计收录代码',
    statActiveCodes: '当前有效代码',
    statCheckedRatio: '已完成校验与归类',
    statConsoleVersion: '控制台全自动脚本',
    statEstimatedClaims: '预估领取次数',

    checkerKicker: '实时验证核心 · 拼写纠错与正确代码智能推荐',
    checkerTitle: '兑换码真伪及状态',
    checkerTitleHighlight: '即时检测工具',
    checkerDesc: '粘贴任意代码即可即时检测：哪些代码【仍有效】、哪些【已过期】、哪些是【输入错误】以及哪些【不存在】。',
    checkerPlaceholder: '在此输入或粘贴兑换码（如 DELTAFORCE2026, Top1BXHVN, DFExceptional305, RETURNING...）',
    checkerBtnCheck: '立即检测',
    checkerClear: '清除结果',
    checkerResultFound: '查询结果如下：',
    checkerResultNotFound: '在官方数据库中未找到该代码，可能为无效码。',
    checkerStatusActive: '可领取 (有效)',
    checkerStatusLimited: '限量兑换 (限量)',
    checkerStatusExpired: '已过期 (失效)',
    checkerStatusTypo: '代码拼写错误 / 缺失片段',
    checkerSuggested: '正确的原始代码推荐：',
    checkerPlatform: '支持平台：',
    checkerRewards: '对应道具奖励：',
    checkerExpiry: '有效截止：',
    checkerCategory: '代码类别：',

    codeCenterKicker: '官方已核验代码库 · 持续动态追踪',
    codeCenterTitle: '三角洲行动',
    codeCenterTitleHighlight: '兑换码大全',
    codeCenterDesc: '清晰分类：有效中、限量抢兑、已失效，以及被广泛传播的错误代码。',
    filterAll: '全部',
    filterActive: '有效',
    filterLimited: '限量',
    filterExpired: '已过期',
    filterTypo: '错码/片段',
    platformAll: '所有平台',
    platformPC: '仅PC端',
    platformMobile: '移动端',
    platformSteam: 'Steam',
    searchPlaceholder: '搜索代码、道具名称、枪械涂装...',
    copyAllActiveBtn: '一键复制全部有效码',
    copyAllSuccess: '已成功复制所有有效代码！',
    copyCodeBtn: '复制',
    copiedCodeSuccess: '已复制',
    testRedeemBtn: '网页端模拟兑换',
    guideTitle: '兑换礼包代码的两种方式',
    guideInGameTitle: '方式一：游戏内直接兑换',
    guideInGameContent: '1. 进入游戏 > 设置（齿轮）> 账号 > 礼包码兑换。\n2. 粘贴代码确认即可，奖励自动发放至游戏邮箱。',
    guideWebTitle: '方式二：官方网站兑换',
    guideWebContent: '1. 登录 playdeltaforce.com 官网账号。\n2. 使用下方【F12控制台脚本】自动批量兑换！',
    noCodesFound: '未找到符合筛选条件的代码',
    noCodesHint: '请尝试更换搜索关键词或切换状态选项卡。',

    scriptKicker: 'F12控制台全自动工具 · 安全防护 · 防风控频率限制',
    scriptTitle: '官网自动批量兑换',
    scriptTitleHighlight: '控制台脚本',
    scriptDesc: '在 playdeltaforce.com 官方页面按 F12 粘贴运行，脚本自动顺序输入所有代码并点击兑换，全自动领完所有福利。',
    step1Title: '打开官网兑换页',
    step1Desc: '访问 playdeltaforce.com 兑换中心并登录游戏账号。',
    step2Title: '按 F12 键',
    step2Desc: '在键盘上按下 F12 键打开开发者工具，切换到 Console（控制台）标签页。',
    step3Title: '粘贴并回车',
    step3Desc: '点击下方“复制脚本”，粘贴到 Console 控制台输入框并按回车运行。',
    step4Title: '游戏邮箱查收',
    step4Desc: '脚本将带有拟人间隔自动运行。完成后进入游戏邮箱查收丰厚物资！',
    scriptConfigTitle: '自动化参数设置',
    scriptDelayLabel: '每次兑换间隔延迟：',
    scriptAutoClose: '兑换后自动关闭提示弹窗',
    scriptStopOnError: '遇到频繁或错误时自动暂停',
    scriptCodeListTitle: '本次运行的代码队列',
    scriptSelectAll: '全选',
    scriptDeselectAll: '取消全选',
    scriptSimulatorTitle: '脚本运行模拟测试器',
    scriptRunSimBtn: '启动模拟运行',
    scriptRunningSimBtn: '正在模拟运行...',
    scriptCopyBtn: '一键复制 F12 脚本',
    scriptCopiedSuccess: '脚本已复制至剪贴板！',
    scriptSecurityNote: '脚本百分之百在您的浏览器本地运行，不收集任何账号密码，内置智能延迟防封号。',

    testModalTitle: '模拟兑换测试',
    testModalDesc: '输入角色ID和服务器测试Delta Force系统发奖响应。',
    testModalCharLabel: '游戏角色ID或昵称：',
    testModalServerLabel: '所在区服：',
    testModalSubmit: '确认模拟兑换',
    testModalSubmitting: '正在与服务器通讯...',
    testModalSuccessTitle: '兑换成功！',
    testModalSuccessDesc: '物资道具已成功发送至角色游戏邮箱。',
    footerDisclaimer: '免责声明：本网站为第三方玩家社区工具，不代表官方立场。所有游戏名称、资源素材及版权归 TiMi Studio Group 与 Level Infinite 所有。',
  },
  th: {
    brandTitle: 'Delta Force HQ',
    navEvents: 'กิจกรรม HQ',
    navGunsmith: 'โมดิฟายปืน Gunsmith',
    navWiki: 'วิกิทางการ',
    navCodes: 'คลังโค้ดรีดีม',
    navChecker: 'ตรวจสอบโค้ด',
    navScript: 'สคริปต์ F12 Console',
    navArsenal: 'คลังอาวุธ & โอเปอเรเตอร์',
    heroKicker: 'Delta Force Event HQ · รวมโค้ดรีดีมทั้งหมดทั้งไทยและทั่วโลก',
    heroTitle: 'ศูนย์รวมกิจกรรมและ',
    heroTitleHighlight: 'รวมโค้ด Delta Force ทั้งหมด',
    heroDesc: 'รวบรวมโค้ดเกม Delta Force กว่า 200+ โค้ด (เซิร์ฟเวอร์ไทย, Garena, สากล และ Six Major) พร้อมระบบตรวจจับโค้ดที่ยังใช้ได้/หมดอายุ/พิมพ์ผิด และสคริปต์กรอกโค้ดอัตโนมัติบนหน้าเว็บทางการ',
    heroBtnCodes: 'ดูโค้ดทั้งหมด',
    heroBtnChecker: 'ตรวจสอบสถานะโค้ด',
    heroBtnScript: 'รับสคริปต์ F12 Console',
    heroOfficialWeb: 'เว็บไซต์ทางการ',
    statTotalCodes: 'โค้ดที่รวบรวม',
    statActiveCodes: 'โค้ดที่ยังใช้งานได้',
    statCheckedRatio: 'ตรวจสอบและจัดหมวดแล้ว',
    statConsoleVersion: 'สคริปต์อัตโนมัติ',
    statEstimatedClaims: 'ยอดเคลมโดยประมาณ',

    checkerKicker: 'ระบบตรวจสอบสถานะโค้ดทันที · ตรวจจับโค้ดพิมพ์ผิดพร้อมแนะโค้ดที่ถูกต้อง',
    checkerTitle: 'เครื่องมือตรวจสอบโค้ด',
    checkerTitleHighlight: 'แบบเรียลไทม์',
    checkerDesc: 'วางโค้ดที่ต้องการตรวจสอบเพื่อดูว่า: โค้ดไหน【ยังใช้ได้】, โค้ดไหน【หมดอายุแล้ว】, โค้ดไหน【พิมพ์ผิด】และโค้ดไหน【ไม่มีอยู่จริง】',
    checkerPlaceholder: 'พิมพ์หรือวางโค้ดที่นี่ (เช่น DELTAFORCE2026, Top1BXHVN, DFExceptional305, RETURNING...)',
    checkerBtnCheck: 'ตรวจสอบทันที',
    checkerClear: 'ล้างข้อมูล',
    checkerResultFound: 'ผลการตรวจสอบ:',
    checkerResultNotFound: 'ไม่พบโค้ดนี้ในฐานข้อมูลทางการของ Delta Force',
    checkerStatusActive: 'ใช้งานได้ (Active)',
    checkerStatusLimited: 'มีจำนวนจำกัด (Limited)',
    checkerStatusExpired: 'หมดอายุแล้ว (Expired)',
    checkerStatusTypo: 'โค้ดพิมพ์ผิด / ข้อความไม่สมบูรณ์',
    checkerSuggested: 'โค้ดที่ถูกต้องที่แนะนำ:',
    checkerPlatform: 'แพลตฟอร์มที่รองรับ:',
    checkerRewards: 'รางวัลที่ได้รับ:',
    checkerExpiry: 'วันหมดอายุ:',
    checkerCategory: 'หมวดหมู่:',

    codeCenterKicker: 'คลังโค้ดที่ได้รับการตรวจสอบแล้ว · อัปเดตสม่ำเสมอ',
    codeCenterTitle: 'คลังโค้ดรีดีม',
    codeCenterTitleHighlight: 'Delta Force Global & SEA',
    codeCenterDesc: 'แยกหมวดหมู่ชัดเจน: ใช้ได้, จำกัดจำนวน, หมดอายุ และโค้ดพิมพ์ผิด',
    filterAll: 'ทั้งหมด',
    filterActive: 'ใช้งานได้',
    filterLimited: 'จำกัดจำนวน',
    filterExpired: 'หมดอายุ',
    filterTypo: 'โค้ดผิด/ชำรุด',
    platformAll: 'ทุกแพลตฟอร์ม',
    platformPC: 'เฉพาะ PC',
    platformMobile: 'มือถือ',
    platformSteam: 'Steam',
    searchPlaceholder: 'ค้นหาโค้ด, รางวัล, สกินปืน, ทอง...',
    copyAllActiveBtn: 'คัดลอกโค้ดที่ยังใช้ได้ทั้งหมด',
    copyAllSuccess: 'คัดลอกโค้ดทั้งหมดเรียบร้อยแล้ว!',
    copyCodeBtn: 'คัดลอก',
    copiedCodeSuccess: 'คัดลอกแล้ว',
    testRedeemBtn: 'ทดลองรีดีมบนเว็บนี้',
    guideTitle: '2 วิธีในการกรอกโค้ดรับรางวัล',
    guideInGameTitle: 'วิธีที่ 1: กรอกในเกมโดยตรง',
    guideInGameContent: '1. เข้าเกม > การตั้งค่า (รูปฟันเฟือง) > บัญชี > แลกรับรหัสของขวัญ\n2. วางโค้ดและยืนยัน รางวัลจะถูกส่งเข้ากล่องจดหมายในเกม',
    guideWebTitle: 'วิธีที่ 2: กรอกผ่านเว็บไซต์ทางการ',
    guideWebContent: '1. เข้าสู่ระบบที่ playdeltaforce.com\n2. ใช้ "สคริปต์ F12 Console" ด้านล่างเพื่อรับของรางวัลทั้งหมดอัตโนมัติ!',
    noCodesFound: 'ไม่พบโค้ดที่ตรงกับตัวกรอง',
    noCodesHint: 'ลองเปลี่ยนคำค้นหาหรือเลือกแท็บสถานะอื่น',

    scriptKicker: 'เครื่องมือ F12 อัตโนมัติ · ปลอดภัย 100% · ป้องกัน Rate-Limit',
    scriptTitle: 'สคริปต์กรอกโค้ดอัตโนมัติ',
    scriptTitleHighlight: 'บนเว็บทางการ',
    scriptDesc: 'สคริปต์ JavaScript ทำงานผ่าน Console ของเบราว์เซอร์ (F12) บนเว็บ playdeltaforce.com กรอกโค้ดและกดรับให้อัตโนมัติทีละโค้ดอย่างปลอดภัย',
    step1Title: 'เปิดเว็บทางการ',
    step1Desc: 'ไปที่หน้าแลกโค้ด playdeltaforce.com แล้วล็อกอินบัญชีของคุณ',
    step2Title: 'กดปุ่ม F12',
    step2Desc: 'กด F12 บนคีย์บอร์ดแล้วเลือกแท็บ Console',
    step3Title: 'วางสคริปต์แล้วกด Enter',
    step3Desc: 'กดปุ่ม "คัดลอกสคริปต์" ด้านล่าง วางใน Console แล้วกด ENTER',
    step4Title: 'รับของรางวัลในเกม',
    step4Desc: 'ระบบจะกรอกโค้ดให้อัตโนมัติโดยมีช่วงหน่วงเวลาที่ปลอดภัย ตรวจสอบกล่องจดหมายในเกมได้เลย',
    scriptConfigTitle: 'ตั้งค่าการทำงานอัตโนมัติ',
    scriptDelayLabel: 'ระยะเวลาหน่วงระหว่างโค้ด:',
    scriptAutoClose: 'ปิดป๊อปอัปผลลัพธ์อัตโนมัติ',
    scriptStopOnError: 'หยุดทำงานหากพบข้อผิดพลาดหรือติด Cooldown',
    scriptCodeListTitle: 'รายการโค้ดที่จะกรอก',
    scriptSelectAll: 'เลือกทั้งหมด',
    scriptDeselectAll: 'ยกเลิกทั้งหมด',
    scriptSimulatorTitle: 'โปรแกรมจำลองการทำงานของสคริปต์',
    scriptRunSimBtn: 'เริ่มจำลองการทำงาน',
    scriptRunningSimBtn: 'กำลังจำลองการทำงาน...',
    scriptCopyBtn: 'คัดลอกสคริปต์สำหรับ F12',
    scriptCopiedSuccess: 'คัดลอกสคริปต์เรียบร้อยแล้ว!',
    scriptSecurityNote: 'สคริปต์ทำงานบนเบราว์เซอร์ของคุณ 100% ไม่ส่งข้อมูลบัญชีออกภายนอก มีระบบป้องกันการโดนแบน',

    testModalTitle: 'ทดลองแลกรับรางวัล',
    testModalDesc: 'กรอก ID ตัวละครและเซิร์ฟเวอร์เพื่อทดสอบการตอบสนองของระบบ',
    testModalCharLabel: 'ID หรือชื่อตัวละครในเกม:',
    testModalServerLabel: 'เซิร์ฟเวอร์ / ภูมิภาค:',
    testModalSubmit: 'ยืนยันการรับรางวัล',
    testModalSubmitting: 'กำลังส่งข้อมูลไปยังเซิร์ฟเวอร์...',
    testModalSuccessTitle: 'แลกรับรางวัลสำเร็จ!',
    testModalSuccessDesc: 'ส่งรางวัลเข้ากล่องจดหมายตัวละครเรียบร้อยแล้ว',
    footerDisclaimer: 'ข้อสงวนสิทธิ์: เว็บไซต์ชุมชนอิสระสำหรับผู้เล่น Delta Force ลิขสิทธิ์และเครื่องหมายการค้าทั้งหมดเป็นของ TiMi Studio Group และ Level Infinite',
  },
};
