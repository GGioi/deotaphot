export type CodeStatus = 'active' | 'limited' | 'expired' | 'invalid_typo';

export interface RedeemCode {
  id: string;
  code: string;
  normalizedCode: string;
  title: string;
  rewards: string[];
  status: CodeStatus;
  platform: 'Tất cả' | 'PC' | 'Mobile' | 'Steam';
  expiryDate: string;
  dateAdded: string;
  verified: boolean;
  category: 'global' | 'vietnam' | 'tournament' | 'garena_cbt' | 'creator' | 'past_event' | 'typo_error';
  usageNotes?: string;
  suggestedCorrection?: string;
  timesClaimed?: number;
}

export interface EventMission {
  id: string;
  title: string;
  category: 'Chiến Dịch' | 'Đặc Nhiệm' | 'Tập Huấn' | 'Điểm Danh';
  period: string;
  status: 'ongoing' | 'upcoming' | 'completed';
  rewards: string[];
  description: string;
  featuredImg?: string;
  badge: string;
}

export interface Operator {
  id: string;
  name: string;
  callsign: string;
  role: 'Đột Kích (Assault)' | 'Trinh Sát (Recon)' | 'Chiến Thuật (Engineer)' | 'Hỗ Trợ (Support)';
  faction: string;
  image: string;
  bio: string;
  specialAbility: string;
  tacticalGear: string;
  passiveTrait: string;
  difficulty: 'Dễ' | 'Trung Bình' | 'Khó';
  recommendedWeapons: string[];
}

// Gunsmith Builder Types
export interface WeaponAttachment {
  id: string;
  slot: 'muzzle' | 'barrel' | 'underbarrel' | 'optic' | 'stock' | 'magazine' | 'tactical' | 'ammo';
  name: string;
  nameVi: string;
  desc: string;
  statsModifier: {
    damage?: number;
    rpm?: number;
    recoilControl?: number;
    ergonomics?: number;
    effectiveRange?: number;
    soundSuppression?: boolean;
    magCapacity?: number;
  };
}

export interface GunsmithWeapon {
  id: string;
  name: string;
  category: 'Assault Rifle' | 'SMG' | 'Marksman Rifle' | 'Sniper Rifle' | 'LMG';
  caliber: string;
  baseStats: {
    damage: number;
    rpm: number;
    recoilControl: number;
    ergonomics: number;
    effectiveRange: number;
    magCapacity: number;
  };
  image?: string;
  desc: string;
  defaultPresetCode: string;
}

export interface GunsmithBuild {
  weaponId: string;
  attachments: {
    muzzle?: string;
    barrel?: string;
    underbarrel?: string;
    optic?: string;
    stock?: string;
    magazine?: string;
    tactical?: string;
    ammo?: string;
  };
  name: string;
  author: string;
}

// Official Wiki Types
export interface WikiMap {
  id: string;
  name: string;
  nameVi: string;
  environment: string;
  threatLevel: 'Thấp' | 'Trung Bình' | 'Cao' | 'Cực Cao';
  extractionPoints: number;
  bossName: string;
  bossLoot: string;
  recommendedGearTier: string;
  overview: string;
  keyLocations: { name: string; lootTier: 'Cao' | 'Trung Bình' | 'Thấp'; desc: string }[];
}

export interface WikiGearItem {
  id: string;
  category: 'Giáp Chống Đạn' | 'Mũ Cối' | 'Balo' | 'Y Tế & Phẫu Thuật' | 'Hòm Đồ An Toàn';
  tier: number;
  name: string;
  durability?: number;
  material?: string;
  protectedAreas?: string;
  capacity?: string;
  healingPoints?: number;
  desc: string;
}

export interface WikiGameMode {
  id: string;
  name: string;
  type: 'PvPvE Trích Xuất' | 'PvP Chiến Tranh Quy Mô Lớn' | 'Co-op Chiến Dịch PvE';
  playersCount: string;
  keyMechanics: string[];
  desc: string;
  tips: string[];
}
