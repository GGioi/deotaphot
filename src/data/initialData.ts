import { RedeemCode, EventMission, Operator } from '../types';
import { ALL_REDEEM_CODES } from './allCodes';
import { WIKI_OPERATORS_FULL } from './wikiData';

export const INITIAL_REDEEM_CODES: RedeemCode[] = ALL_REDEEM_CODES;

export const INITIAL_EVENT_MISSIONS: EventMission[] = [
  {
    id: 'event-1',
    title: 'Chiến Dịch Ahsarah: Tác Chiến Vùng Cấm',
    category: 'Chiến Dịch',
    period: '01/11/2026 - 30/11/2026',
    status: 'ongoing',
    rewards: ['Skin Độc Quyền Vũ Khí Vàng', '3,000 Kim Cương', 'Danh Hiệu "Bóng Ma Sa Mạc"'],
    description: 'Thâm nhập vào khu vực phong tỏa Ahsarah, thu hồi các lõi dữ liệu bí mật và trích xuất an toàn khỏi hỏa lực phục kích của lực lượng Havoc.',
    badge: 'Ưu Tiên Cao'
  },
  {
    id: 'event-2',
    title: 'Huấn Luyện Tân Binh: Tôi Luyện Thép',
    category: 'Tập Huấn',
    period: '20/10/2026 - 25/11/2026',
    status: 'ongoing',
    rewards: ['5x Rương Quân Bị', 'Vé Mở Khóa Đặc Nhiệm Tuỳ Chọn', '100,000 Xu Tác Chiến'],
    description: 'Hoàn thành chuỗi 7 nhiệm vụ bắn súng cơ bản, phối hợp chiến thuật đồng đội và đặt bẫy công nghệ để nhận gói hỗ trợ khởi đầu.',
    badge: 'Dễ Tiếp Cận'
  },
  {
    id: 'event-3',
    title: 'Đột Kích Havoc: Chiếm Đóng Căn Cứ Hỏa Tiêu',
    category: 'Đặc Nhiệm',
    period: 'Thứ 6 - Chủ Nhật Hàng Tuần',
    status: 'ongoing',
    rewards: ['Rương Chiến Tích Hạng Tinh Anh', 'Mảnh Vũ Khí Huyền Thoại', 'Huy Chương Danh Dự'],
    description: 'Chế độ công thủ quy mô 32v32 với khí tài xe bọc thép, trực thăng tấn công và pháo phản lực tại bản đồ Đồi Hỏa Tiêu.',
    badge: 'Chế Độ Đội'
  },
  {
    id: 'event-4',
    title: 'Điểm Danh Quân Lực Tháng 11',
    category: 'Điểm Danh',
    period: '01/11/2026 - 30/11/2026',
    status: 'ongoing',
    rewards: ['Súng Bắn Tỉa M700 Tác Chiến Đêm', 'Vé Tiếp Tế Hàng Ngày', 'EXP Quân Hàm x2'],
    description: 'Đăng nhập vào game liên tục mỗi ngày tại sự kiện HQ để tích lũy huân chương và nhận trang bị tối thượng vào ngày thứ 21.',
    badge: 'Quà Hàng Ngày'
  }
];

export const INITIAL_OPERATORS: Operator[] = WIKI_OPERATORS_FULL;
