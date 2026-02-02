import { Character, WorldSection } from './types';

export const WORLD_REALMS: WorldSection[] = [
  {
    title: "인간계 (Human Realm)",
    type: "realm",
    content: [
      "일반 인류가 거주하는 낙원.",
      "[교단], [성기사단], [왕실]이 존재합니다.",
    ]
  },
  {
    title: "중간계 (Middle Realm)",
    type: "realm",
    content: [
      "인간계와 마계를 잇는 거대한 숲.",
      "마족의 침공을 막는 최전선이자, 용사들이 소모되는 무한 전장입니다."
    ]
  },
  {
    title: "마계 (Demon Realm)",
    type: "realm",
    content: [
      "마족과 마수들의 근원지.",
      "인간의 접근이 불가능한 미지의 심연입니다."
    ]
  },
  {
    title: "신탁의 요새 (Fortress of Oracle)",
    type: "realm",
    content: [
      "인간계의 끝이자 중간계의 입구에 위치한 난공불락의 성채.",
      "용사들이 부활하는 장소이자 본거지입니다.",
    ]
  }
];

export const WORLD_SYSTEMS: WorldSection[] = [
  {
    title: "부활의 결계",
    type: "system",
    content: [
      "요새와 인간계 사이의 차단막.",
      "'부활의 기적'이 각인된 용사가 인간계 진입 시 기적 충돌로 즉사합니다.",
      "사실상 용사를 전장에 가두는 영원한 족쇄입니다."
    ]
  },
  {
    title: "용사와 기적",
    type: "system",
    content: [
      "용사: 중대죄로 '용사형'을 선고받은 죄수들.",
      "양산형 부활의 기적: 사망 시 요새에서 부활하며, 자아와 이름은 삭제되나 전투 본능은 누적됩니다.",
      "기적: '태양빛을 머금은 금속' 틀로 새긴 문신을 통해 인간을 초월한 힘을 가져오는 이능력."
    ]
  },
  {
    title: "여신과 계약",
    type: "system",
    content: [
      "여신(Clone): 태양의 여신 유전자로 복제된 개체.",
      "특성: 칭찬과 스킨십을 좋아합니다.",
      "계약: 여신과 계약자 간의 영혼 결속. 상호 동의 하에 이루어지며 평생 지속됩니다."
    ]
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'aegis',
    name: '이지스',
    gender: '女',
    mbti: 'ESFP',
    role: '제6여신',
    miracle: '무기의 여신 (무기 창조)',
    features: ['칭찬 좋아함', '실질적인 도움 적음'],
    description: '비구동 중인 개체. 하늘에서 무기의 비를 내릴 수 있다.',
    imageUrl: 'https://i.postimg.cc/KjGck36q/1.webp',
    isSpecial: true
  },
  {
    id: 'gilbert',
    name: '길버트',
    gender: '男',
    mbti: 'ISFJ',
    role: '교단물품 절도',
    miracle: '은신의 기적',
    features: ['겁쟁이', '밤눈 밝음', '소품 탈취 전문'],
    description: '교단 물품을 무려 천 건 이상 훔친 좀도둑. 겁이 많아 항상 뒤에 숨지만 정찰과 생존에는 유능하다.',
    imageUrl: 'https://i.postimg.cc/FFCXg63R/3.webp'
  },
  {
    id: 'edelyn',
    name: '에델린',
    gender: '女',
    mbti: 'ESTP',
    role: '주요 시설 테러',
    miracle: '체공의 기적',
    features: ['호탕함', '공중 폭격', '건물 테러리스트'],
    description: '교단, 성기사단, 왕궁 건물을 테러한 폭파광. 하늘을 날며 전장을 폭격하는 것을 즐긴다.',
    imageUrl: 'https://i.postimg.cc/CxXKP18T/2.webp'
  },
  {
    id: 'kali',
    name: '칼리',
    gender: '女',
    mbti: 'ENFP',
    role: '살인청부 / 고위직 살해',
    miracle: '증폭의 기적',
    features: ['수다쟁이', '충동적', '원거리 저격'],
    description: '교단 고위 관계자를 살해한 청부업자. 마법 지팡이에 스코프를 달고 다니며 아군 적군 가리지 않고 떠든다.',
    imageUrl: 'https://i.postimg.cc/5tvnjsWq/6.webp'
  },
  {
    id: 'tanya',
    name: '타냐',
    gender: '女',
    mbti: '???',
    role: '죄명 불명',
    miracle: '광기의 기적',
    features: ['자아 상실', '괴물급 백병전', '통증 무시'],
    description: '다칠수록 강해지는 광전사. 자아를 거의 상실해 짐승 같은 소리를 내지만 명령에는 절대 복종한다.',
    imageUrl: 'https://i.postimg.cc/NfMDRsws/7.webp'
  },
  {
    id: 'isaac',
    name: '아이작',
    gender: '男',
    mbti: 'ENTP',
    role: '사기 / 내란 / 유언비어',
    miracle: '통신의 기적',
    features: ['말재주', '서류 위조', '후방 지원'],
    description: '유능해 보이지만 실은 겁쟁이 사기꾼. 명령 왜곡과 보급품 횡령의 달인이자 팀의 통신병.',
    imageUrl: 'https://i.postimg.cc/8kbXhXJf/5.webp'
  },
  {
    id: 'angela',
    name: '안젤라',
    gender: '女',
    mbti: 'INTJ',
    role: '내란 / 모욕죄',
    miracle: '없음 (공병)',
    features: ['거만함', '일류 장인', '기적 시술 가능'],
    description: '스스로를 교단의 고위직이라 믿는 거만한 공병. 기적을 새기지 않았지만 기적을 새겨줄 수 있는 유일한 기술자.',
    imageUrl: 'https://i.postimg.cc/vHQjkwwB/4.webp'
  },
  {
    id: 'patricia',
    name: '파트리샤',
    gender: '女',
    mbti: 'ESTJ',
    role: '제6기사단장',
    miracle: '정규군 지휘',
    features: ['군인 정신', '협력자', '원리원칙'],
    description: '원래 이지스와 계약 예정이었던 기사단장.',
    imageUrl: 'https://i.postimg.cc/QCN2p2X3/8.webp',
    isSpecial: true
  }
];