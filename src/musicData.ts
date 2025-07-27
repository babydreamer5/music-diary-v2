
﻿// 음악 아이템 타입 정의
export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  emotions: string[];
  genre: string;
  description: string;
  intro_message: string;
  mood_tags: string[];
// API에서 동적으로 가져올 속성들 (선택적)
  thumbnail?: string;
  url?: string;
  preview_url?: string;
  album?: string;
  userId?: string;
  createdAt?: any;
}


// 5개 장르 정의 (옵션 1: 트렌드 중심)
export const MUSIC_GENRES = [
  { id: 'k-pop', name: 'K-Pop', emoji: '🎵' },
  { id: 'pop', name: '팝', emoji: '🎤' },
  { id: 'hip-hop', name: '힙합', emoji: '🎤' },
  { id: 'r&b', name: 'R&B', emoji: '🎶' },
  { id: 'electronic', name: '일렉트로닉', emoji: '🎛️' }
];


// 감정 기반 음악 데이터베이스 (총 120곡)
export const EMOTION_MUSIC_DATABASE: MusicItem[] = [
  // ===== K-POP (24곡) =====
  {
    id: 'huntrix_golden',
    title: 'Golden',
    artist: 'HUNTR/X, EJAE, AUDREY NUNA, REI AMI',
    emotions: ['긍정적', '자신감', '희망', '열정', '자유'],
    genre: 'k-pop',
    description: '묵직한 베이스와 미래지향적 신스, 글로벌 여성 보컬의 조화가 돋보이는 하이브리드 일렉트로닉 힙합 트랙',
    intro_message: '자신감이 필요할 때, 당신을 빛나게 해줄 강렬한 힙합 일렉트로닉 곡이에요!',
    mood_tags: ['powerful', 'confident', 'energetic'],
    url: 'https://open.spotify.com/track/1CPZ5BxNNd0n0nF4Orb9JS',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024dcb6c5df15cf74596ab25a4'
  },
  {
    id: 'huntrix_takedown',
    title: 'Takedown',
    artist: 'HUNTR/X',
    emotions: ['에너지', '결의', '승부욕', '강렬함', '도전'],
    genre: 'k-pop',
    description: '타격감 있는 드럼과 파워풀한 전자 사운드가 결의를 북돋는 에너지 넘치는 곡',
    intro_message: '한계를 깨고 도전하고 싶을 때, 이 곡과 함께 힘을 내보세요!',
    mood_tags: ['intense', 'motivational', 'powerful'],
    url: 'https://open.spotify.com/track/0MHStU0muAIEMbwdnebYu2',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024dcb6c5df15cf74596ab25a4'
  },
  {
    id: 'newjeans_get_up',
    title: 'Get Up',
    artist: 'NewJeans',
    emotions: ['상쾌함', '발랄', '희망', '긍정', '활기'],
    genre: 'k-pop',
    description: '신선함과 산뜻함이 어우러진 미니멀 팝, 뉴진스 특유의 청량 보컬과 간결한 비트가 인상적',
    intro_message: '기분 좋은 에너지가 필요할 때, NewJeans의 상큼함을 느껴보세요!',
    mood_tags: ['fresh', 'upbeat', 'youthful'],
    url: 'https://open.spotify.com/track/1wUnuiXMMvhudmzvcCtlZP',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020744690248ef3ba7b776ea7b'
  },
  {
    id: 'aespa_spicy',
    title: 'Spicy',
    artist: 'aespa',
    emotions: ['당당함', '쿨함', '열정', '에너지', '자신감'],
    genre: 'k-pop',
    description: '중독성 강한 EDM 베이스와 당당함이 느껴지는 파워풀 댄스 팝 트랙',
    intro_message: '쿨하고 당당한 매력을 뽐내고 싶을 때, 에스파의 Spicy로 무드를 올려보세요!',
    mood_tags: ['fierce', 'confident', 'bold'],
    url: 'https://open.spotify.com/track/1ULdASrNy5rurl1TZfFaMP',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0204878afb19613a94d37b29ce'
  },
  {
    id: 'bts_dynamite',
    title: 'Dynamite',
    artist: 'BTS',
    emotions: ['신남', '즐거움', '긍정', '에너지', '파티'],
    genre: 'k-pop',
    description: '밝고 경쾌한 디스코 팝 사운드와 중독적인 멜로디로 모두를 신나게 하는 글로벌 히트송',
    intro_message: '파티와 에너지가 필요할 때 완벽한 곡이에요!',
    mood_tags: ['upbeat', 'disco', 'energetic'],
    url: 'https://open.spotify.com/track/0v1x6rN6JHRapa03JElljE',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022f86d9710377e63bfbc82ba8'
  },
  {
    id: 'newjeans_hype_boy',
    title: 'Hype Boy',
    artist: 'NewJeans',
    emotions: ['행복', '설렘', '에너지', '청춘', '자유'],
    genre: 'k-pop',
    description: '청량하고 중독적인 멜로디의 걸그룹 히트곡',
    intro_message: '신나는 분위기를 느끼고 싶을 때 들어보세요!',
    mood_tags: ['upbeat', 'playful', 'catchy'],
    url: 'https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029d28fd01859073a3ae6ea209'
  },
  {
    id: 'ive_love_dive',
    title: 'LOVE DIVE',
    artist: 'IVE',
    emotions: ['자신감', '당당함', '설렘', '열정', '행복'],
    genre: 'k-pop',
    description: '도도하고 당찬 매력이 돋보이는 걸그룹 대표곡',
    intro_message: '자신감을 채우고 싶을 때 추천해요!',
    mood_tags: ['energetic', 'powerful', 'stylish'],
    url: 'https://open.spotify.com/track/0Q5VnK2DYzRyfqQRJuUtvi',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029016f58cc49e6473e1207093'
  },
  {
    id: 'le_sserafim_fearless',
    title: 'FEARLESS',
    artist: 'LE SSERAFIM',
    emotions: ['자신감', '열정', '에너지', '독립', '도전'],
    genre: 'k-pop',
    description: '직설적이고 당찬 가사, 중독적 비트의 곡',
    intro_message: '두려움 없이 나아가고 싶을 때 들어보세요.',
    mood_tags: ['powerful', 'bold', 'trendy'],
    url: 'https://open.spotify.com/track/296nXCOv97WJNRWzIBQnoj',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029030184114911536d5f77555'
  },
  {
    id: 'txt_sugar_rush_ride',
    title: 'Sugar Rush Ride',
    artist: 'TXT (투모로우바이투게더)',
    emotions: ['설렘', '행복', '에너지', '유혹', '몽환'],
    genre: 'k-pop',
    description: '청량하면서 몽환적인 사운드가 인상적인 곡',
    intro_message: '달콤한 에너지가 필요할 때 추천해요!',
    mood_tags: ['dreamy', 'catchy', 'playful'],
    url: 'https://open.spotify.com/track/0rhI6gvOeCKA502RdJAbfs',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023bb056e3160b85ee86c1194d'
  },
  {
    id: 'jungkook_seven',
    title: 'Seven (feat. Latto)',
    artist: 'Jung Kook',
    emotions: ['사랑', '설렘', '행복', '로맨스', '중독'],
    genre: 'k-pop',
    description: '세련된 팝 스타일과 부드러운 감미로움이 공존하는 곡',
    intro_message: '사랑하는 사람을 생각날 때 꼭 들어보세요!',
    mood_tags: ['romantic', 'catchy', 'smooth']
  },
  {
    id: 'ive_after_like',
    title: 'After LIKE',
    artist: 'IVE',
    emotions: ['당당함', '자신감', '행복', '에너지', '설렘'],
    genre: 'k-pop',
    description: '디스코 리듬과 강렬한 멜로디로 즐거움을 전하는 곡',
    intro_message: '축제 같은 분위기를 원할 때 들어보세요!',
    mood_tags: ['upbeat', 'groovy', 'joyful'],
    url: 'https://open.spotify.com/track/2gYj9lubBorOPIVWsTXugG',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0287f53da5fb4ab1171766b2d5'
  },
  {
    id: 'blackpink_how_you_like_that',
    title: 'How You Like That',
    artist: 'BLACKPINK',
    emotions: ['자신감', '강렬', '열정', '카리스마', '에너지'],
    genre: 'k-pop',
    description: '강렬한 비트와 파워풀한 퍼포먼스가 어우러진 곡',
    intro_message: '에너지가 필요할 때 가장 좋아요!',
    mood_tags: ['powerful', 'energetic', 'bold'],
    url: 'https://open.spotify.com/track/4SFknyjLcyTLJFPKD2m96o',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027dd8f95320e8ef08aa121dfe'
  },
  {
    id: 'newjeans_omg',
    title: 'OMG',
    artist: 'NewJeans',
    emotions: ['설렘', '행복', '유쾌', '청춘', '재미'],
    genre: 'k-pop',
    description: '귀여움과 중독성, 밝은 감성의 대표곡',
    intro_message: '기분전환이 필요할 때 추천합니다!',
    mood_tags: ['upbeat', 'cute', 'fresh'],
    url: 'https://open.spotify.com/track/65FftemJ1DbbZ45DUfHJXE',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d70036292d54f29e8b68ec01'
  },
  {
    id: 'aespa_next_level',
    title: 'Next Level',
    artist: 'aespa',
    emotions: ['강렬함', '긴장감', '짜릿함', '카리스마', '의지'],
    genre: 'k-pop',
    description: '독특한 구성과 강렬한 사운드가 독보적인 곡',
    intro_message: '색다르고 강렬한 음악을 원할 때 들어보세요!',
    mood_tags: ['edgy', 'powerful', 'trendy'],
    url: 'https://open.spotify.com/track/2zrhoHlFKxFTRF5aMyxMoQ',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027a393b04e8ced571618223e8'
  },
  {
    id: 'seventeen_hot',
    title: 'HOT',
    artist: 'SEVENTEEN',
    emotions: ['열정', '에너지', '자신감', '흥분', '유쾌'],
    genre: 'k-pop',
    description: '더운 여름과 잘 어울리는 파워풀한 에너지가 가득한 곡',
    intro_message: '완전 HOT한 에너지를 느끼고 싶을 때 추천!',
    mood_tags: ['energetic', 'powerful', 'intense'],
    url: 'https://open.spotify.com/track/6I2tqFhk8tq69iursYxuxd',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02decd839dd4fef3faf64c5fd5'
  },
  {
    id: 'itzy_wannabe',
    title: 'WANNABE',
    artist: 'ITZY',
    emotions: ['자유', '자신감', '열정', '에너지', '해방감'],
    genre: 'k-pop',
    description: '스스로를 있는 그대로 사랑하자는 메시지의 곡',
    intro_message: '내 스타일대로 자유롭게 하고 싶을 때 들어보세요!',
    mood_tags: ['empowering', 'energetic', 'youthful'],
    url: 'https://open.spotify.com/track/6sohnLuyLeUYSg1pW5SqHm',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fc620c06721e90a534cc5dab'
  },
  {
    id: 'enhypen_drunk_dazed',
    title: 'Drunk-Dazed',
    artist: 'ENHYPEN',
    emotions: ['흥분', '열정', '에너지', '몽환', '짜릿함'],
    genre: 'k-pop',
    description: '에너지 넘치는 사운드와 화려한 퍼포먼스의 곡',
    intro_message: '파티 분위기를 제대로 느끼고 싶을 때 추천!',
    mood_tags: ['energetic', 'dynamic', 'intense'],
    url: 'https://open.spotify.com/track/1wcr8DjnN59Awev8nnKpQ4',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02714e56679ab196354e2e443e'
  },
  {
    id: 'stray_kids_gods_menu',
    title: "God's Menu",
    artist: 'Stray Kids',
    emotions: ['강렬', '에너지', '파워', '자신감', '열정'],
    genre: 'k-pop',
    description: '혁신적이고 강렬한 사운드의 퍼포먼스 곡',
    intro_message: '강한 힘과 에너지를 느끼고 싶을 때 추천!',
    mood_tags: ['powerful', 'dynamic', 'bold'],
    url: 'https://open.spotify.com/track/4XPXrcpyNr30Km6aPiflJy',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fad8c4176e8df7173479f959'
  },
  {
    id: 'gi-dle_tomboy',
    title: 'TOMBOY',
    artist: '(여자)아이들',
    emotions: ['당당함', '자유', '반항', '자신감', '강렬함'],
    genre: 'k-pop',
    description: '자기주장 강한 가사와 로킹한 사운드의 곡',
    intro_message: '틀에 얽매이지 않고 자유롭게 즐겨보세요!',
    mood_tags: ['edgy', 'empowering', 'bold']
  },
  {
    id: 'nct_dream_glitch_mode',
    title: 'Glitch Mode',
    artist: 'NCT DREAM',
    emotions: ['흥분', '유쾌', '에너지', '활력', '젊음'],
    genre: 'k-pop',
    description: '트렌디하고 실험적인 사운드의 청춘 에너지 곡',
    intro_message: '새로운 스타일을 경험하고 싶을 때 들어보세요!',
    mood_tags: ['experimental', 'lively', 'youthful'],
    url: 'https://open.spotify.com/track/5b1PngLlxc7hj3fJXrE2Zm',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c013775f357bb9ad1eb9e1a7'
  },
  {
    id: 'fifty_fifty_cupid',
    title: 'Cupid',
    artist: 'FIFTY FIFTY',
    emotions: ['설렘', '사랑', '유쾌', '상큼', '기대'],
    genre: 'k-pop',
    description: '밝고 러블리한 감성의 글로벌 히트송',
    intro_message: '상큼한 하루를 원한다면 이 곡!',
    mood_tags: ['cute', 'light', 'catchy'],
    url: 'https://open.spotify.com/track/4TqmTBSWsZXMj3LouLEvXn',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0293a783eccc24a636fc8d3d46'
  },
  {
    id: 'le_sserafim_unforgiven',
    title: 'UNFORGIVEN',
    artist: 'LE SSERAFIM',
    emotions: ['강렬함', '당당함', '자유', '파워', '에너지'],
    genre: 'k-pop',
    description: '독특한 컨셉과 크로스오버 사운드가 인상적인 곡',
    intro_message: '새로운 도전을 응원하고 싶을 때 들어보세요!',
    mood_tags: ['edgy', 'empowering', 'bold'],
    url: 'https://open.spotify.com/track/51vRumtqbkNW9wrKfESwfu',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d71fd77b89d08bc1bda219c7'
  },
  {
    id: 'newjeans_attention',
    title: 'Attention',
    artist: 'NewJeans',
    emotions: ['관심', '설렘', '희망', '행복', '청춘'],
    genre: 'k-pop',
    description: '미니멀하고 트렌디한 흐름의 대표곡',
    intro_message: '주목받고 싶은 순간, 이 노래를 들어보세요!',
    mood_tags: ['catchy', 'trendy', 'chill'],
    url: 'https://open.spotify.com/track/2pIUpMhHL6L9Z5lnKxJJr9',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029d28fd01859073a3ae6ea209'
  },
  {
    id: 'bts_butter',
    title: 'Butter',
    artist: 'BTS',
    emotions: ['에너지', '자신감', '행복', '강렬함', '유쾌함'],
    genre: 'k-pop',
    description: '팝적인 사운드와 유쾌한 퍼포먼스의 곡',
    intro_message: '기분 좋은 에너지로 가득한 곡이에요!',
    mood_tags: ['upbeat', 'fresh', 'fun'],
    url: 'https://open.spotify.com/track/3VqeTFIvhxu3DIe4eZVzGq',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ed656680374294d5217193fa'
  },


  // ===== POP (24곡) =====
  {
    id: 'rose_apt',
    title: 'APT.',
    artist: 'ROSÉ & Bruno Mars',
    emotions: ['로맨틱', '따뜻함', '설렘', '편안함', '진심'],
    genre: 'pop',
    description: 'ROSÉ의 청아한 보컬과 Bruno Mars의 소울풀한 감성이 조화를 이루는 감미로운 팝 R&B 듀엣 곡',
    intro_message: '로맨틱하고 따뜻한 밤, 두 아티스트의 하모니에 마음을 맡겨보세요!',
    mood_tags: ['romantic', 'smooth', 'cozy'],
    url: 'https://open.spotify.com/track/5vNRhkKd0yEAg8suGBpjeY',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0236032cb4acd9df050bc2e197'
  },
  {
    id: 'olivia_rodrigo_good_4u',
    title: 'good 4 u',
    artist: 'Olivia Rodrigo',
    emotions: ['분노', '해방감', '자신감', '에너지', '슬픔'],
    genre: 'pop',
    description: '팝 펑크와 감정적 보컬이 어우러진 히트곡',
    intro_message: '스트레스를 풀고 싶을 때 들어보세요!',
    mood_tags: ['energetic', 'rebellious', 'catchy'],
    url: 'https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a91c10fe9472d9bd89802e5a'
  },
  {
    id: 'the_weeknd_blinding_lights',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    emotions: ['신남', '흥분', '그리움', '에너지', '노스탤지어'],
    genre: 'pop',
    description: '80년대 신스웨이브 스타일이 매력적인 곡',
    intro_message: '드라이브할 때 듣고 싶어지는 곡이에요.',
    mood_tags: ['upbeat', 'retro', 'catchy'],
    url: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028863bc11d2aa12b54f5aeb36'
  },
  {
    id: 'dua_lipa_dont_start_now',
    title: "Don't Start Now",
    artist: 'Dua Lipa',
    emotions: ['자신감', '독립', '신남', '에너지', '자유'],
    genre: 'pop',
    description: '펑키하고 세련된 신스 팝 비트, 독립적인 메시지',
    intro_message: '기분 전환하고 싶을 때 딱이에요.',
    mood_tags: ['groovy', 'stylish', 'powerful'],
    url: 'https://open.spotify.com/track/3PfIrDoz19wz7qK7tYeu62',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024bc66095f8a70bc4e6593f4f'
  },
  {
    id: 'ariana_grande_positions',
    title: 'positions',
    artist: 'Ariana Grande',
    emotions: ['사랑', '행복', '여유', '로맨스', '감사'],
    genre: 'pop',
    description: '부드러운 멜로디와 세련된 사운드가 어우러진 러브송',
    intro_message: '로맨틱한 기분이 필요할 때 들어보세요.',
    mood_tags: ['romantic', 'smooth', 'chill'],
    url: 'https://open.spotify.com/track/35mvY5S1H3J2QZyna3TFe0',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025ef878a782c987d38d82b605'
  },
  {
    id: 'billie_eilish_happier_than_ever',
    title: 'Happier Than Ever',
    artist: 'Billie Eilish',
    emotions: ['슬픔', '분노', '해방', '감정', '강렬함'],
    genre: 'pop',
    description: '잔잔함에서 격한 감정으로 폭발하는 독특한 곡',
    intro_message: '감정의 폭발을 경험하고 싶다면 추천!',
    mood_tags: ['emotional', 'powerful', 'dynamic'],
    url: 'https://open.spotify.com/track/1TCcxusPaORqo6lsbitAfn',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d0706a37ac0020f2bde373ca'
  },
  {
    id: 'charlie_puth_left_and_right',
    title: 'Left and Right (feat. Jung Kook of BTS)',
    artist: 'Charlie Puth',
    emotions: ['행복', '설렘', '중독', '여유', '경쾌함'],
    genre: 'pop',
    description: '세련되고 감각적인 사운드의 글로벌 콜라보',
    intro_message: '신나는 멜로디로 분위기를 업그레이드!',
    mood_tags: ['catchy', 'light', 'playful'],
    url: 'https://open.spotify.com/track/6QEv2OySmn8WAjTlHrTJBV',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f42e6a067b35a658b051cab0'
  },
  {
    id: 'taylor_swift_anti_hero',
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    emotions: ['고민', '내면', '성찰', '진솔함', '위로'],
    genre: 'pop',
    description: '자기 자신과의 싸움을 담은 진솔한 팝송',
    intro_message: '마음이 힘들다면 위로받아보세요.',
    mood_tags: ['reflective', 'emotional', 'melodic'],
    url: 'https://open.spotify.com/track/0V3wPSX9ygBnCm8psDIegu',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bb54dde68cd23e2a268ae0f5'
  },
  {
    id: 'harry_styles_as_it_was',
    title: 'As It Was',
    artist: 'Harry Styles',
    emotions: ['노스탤지어', '슬픔', '상실', '따뜻함', '희망'],
    genre: 'pop',
    description: '담담하면서도 따스한 감성을 담은 곡',
    intro_message: '이별과 성장의 이야기를 담았어요.',
    mood_tags: ['nostalgic', 'emotional', 'chill'],
    url: 'https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b46f74097655d7f353caab14'
  },
  {
    id: 'glass_animals_heat_waves',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    emotions: ['노스탤지어', '그리움', '몽환', '희망', '감정'],
    genre: 'pop',
    description: '몽환적인 분위기와 아름다운 멜로디가 돋보이는 곡',
    intro_message: '추억을 되새기고 싶을 때 들어보세요.',
    mood_tags: ['dreamy', 'emotional', 'chill'],
    url: 'https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02712701c5e263efc8726b1464'
  },
  {
    id: 'ed_sheeran_shivers',
    title: 'Shivers',
    artist: 'Ed Sheeran',
    emotions: ['설렘', '신남', '에너지', '로맨스', '행복'],
    genre: 'pop',
    description: '신나는 리듬과 로맨틱한 메시지의 곡',
    intro_message: '기분이 좋아지는 팝 추천!',
    mood_tags: ['upbeat', 'romantic', 'catchy'],
    url: 'https://open.spotify.com/track/6bQfNiqyCX7UaQSvVVGo4I',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02469407300636945a5eb2d9ed'
  },
  {
    id: 'sabrina_carpenter_espresso',
    title: 'Espresso',
    artist: 'Sabrina Carpenter',
    emotions: ['경쾌함', '당당함', '열정', '유쾌함', '신남'],
    genre: 'pop',
    description: '통통 튀는 리듬에 상큼함이 가득한 곡',
    intro_message: '산뜻하게 하루를 시작하고 싶을 때 좋아요!',
    mood_tags: ['playful', 'groovy', 'upbeat'],
    url: 'https://open.spotify.com/track/2qSkIjg1o9h3YT9RAgYN75',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02659cd4673230913b3918e0d5'
  },
  {
    id: 'miley_cyrus_flowers',
    title: 'Flowers',
    artist: 'Miley Cyrus',
    emotions: ['자립', '긍정', '치유', '희망', '행복'],
    genre: 'pop',
    description: '나 자신을 위로하는 따뜻한 셀프러브송',
    intro_message: '자존감을 높이고 싶을 때 추천!',
    mood_tags: ['empowering', 'uplifting', 'hopeful'],
    url: 'https://open.spotify.com/track/0yLdNVWF3Srea0uzk55zFn',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f429549123dbe8552764ba1d'
  },
  {
    id: 'dua_lipa_houdini',
    title: 'Houdini',
    artist: 'Dua Lipa',
    emotions: ['자신감', '유희', '에너지', '설렘', '쾌활함'],
    genre: 'pop',
    description: '신나는 디스코 리듬이 눈에 띄는 트렌디 팝',
    intro_message: '춤추고 싶은 날엔 이 노래가 딱!',
    mood_tags: ['upbeat', 'funky', 'dance'],
    url: 'https://open.spotify.com/track/4OMJGnvZfDvsePyCwRGO7X',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02001d5706fddc72561f6488af'
  },
  {
    id: 'olivia_rodrigo_vampire',
    title: 'vampire',
    artist: 'Olivia Rodrigo',
    emotions: ['분노', '상실', '강렬함', '에너지', '감정'],
    genre: 'pop',
    description: '감정적이고 드라마틱한 전개가 인상적인 곡',
    intro_message: '감정 폭발이 필요할 때 추천!',
    mood_tags: ['emotional', 'powerful', 'intense'],
    url: 'https://open.spotify.com/track/3k79jB4aGmMDUQzEwa46Rz',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021e5e75dc1d878a0007cb6525'
  },
  {
    id: 'charlie_puth_light_switch',
    title: 'Light Switch',
    artist: 'Charlie Puth',
    emotions: ['경쾌함', '유쾌', '에너지', '신남', '흥분'],
    genre: 'pop',
    description: '캐치한 멜로디와 톡톡 튀는 리듬감이 매력',
    intro_message: '밝고 기분 좋은 하루를 위해 들어보세요!',
    mood_tags: ['catchy', 'upbeat', 'fun'],
    url: 'https://open.spotify.com/track/1BSMpVGWs3v5BZKnAQziAc',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0275d950842ab17159f0bb9479'
  },
  {
    id: 'harry_styles_watermelon_sugar',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    emotions: ['행복', '달콤함', '열정', '유쾌', '설렘'],
    genre: 'pop',
    description: '통통튀는 멜로디와 상큼한 감성의 히트곡',
    intro_message: '기분 좋은 날, 상큼하게 듣기 좋아요!',
    mood_tags: ['sweet', 'upbeat', 'fresh'],
    url: 'https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0277fdcfda6535601aff081b6a'
  },
  {
    id: 'lizzo_juice',
    title: 'Juice',
    artist: 'Lizzo',
    emotions: ['자신감', '유쾌함', '에너지', '흥분', '행복'],
    genre: 'pop',
    description: '파워풀하고 유머러스한 펑키 팝',
    intro_message: '에너지가 필요한 순간에 추천!',
    mood_tags: ['upbeat', 'fun', 'empowering'],
    url: 'https://open.spotify.com/track/0k664IuFwVP557Gnx7RhIl',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0206af802e2ea241b6ba1ce0f2'
  },
  {
    id: 'ed_sheeran_bad_habits',
    title: 'Bad Habits',
    artist: 'Ed Sheeran',
    emotions: ['중독', '흥분', '에너지', '그루브', '활력'],
    genre: 'pop',
    description: '빠른 템포와 중독성 있는 후렴이 특징',
    intro_message: '밤에 듣기 좋은 에너지 넘치는 곡!',
    mood_tags: ['catchy', 'dance', 'energetic'],
    url: 'https://open.spotify.com/track/6PQ88X9TkUIAUIZJHW2upE',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024e03a288fd79707055759f9c'
  },
  {
    id: 'billie_eilish_therefore_i_am',
    title: 'Therefore I Am',
    artist: 'Billie Eilish',
    emotions: ['자신감', '자유', '시크함', '유쾌', '젊음'],
    genre: 'pop',
    description: '독특한 리듬과 쿨한 보컬이 돋보이는 곡',
    intro_message: '쿨하게 나만의 길을 가고 싶을 때 추천!',
    mood_tags: ['cool', 'upbeat', 'trendy'],
    url: 'https://open.spotify.com/track/5GdvtkN8j1cE00i8UhuIKB',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022a038d3bf875d23e4aeaa84e'
  },
  {
    id: 'sabrina_carpenter_nonsense',
    title: 'Nonsense',
    artist: 'Sabrina Carpenter',
    emotions: ['유쾌함', '설렘', '경쾌', '행복', '장난'],
    genre: 'pop',
    description: '솔직하고 톡톡튀는 팝 트랙',
    intro_message: '재미와 에너지가 동시에 필요하다면 추천!',
    mood_tags: ['playful', 'upbeat', 'fun'],
    url: 'https://open.spotify.com/track/6dgUya35uo964z7GZXM07g',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02700f7bf79c9f063ad0362bdf'
  },
  {
    id: 'the_kid_laroi_love_again',
    title: 'Love Again',
    artist: 'The Kid LAROI',
    emotions: ['설렘', '사랑', '그리움', '성장', '감정'],
    genre: 'pop',
    description: '청량감 넘치는 멜로디와 솔직한 가사',
    intro_message: '사랑의 시작을 다시 한 번 느끼고 싶을 때!',
    mood_tags: ['romantic', 'uplifting', 'fresh'],
    url: 'https://open.spotify.com/track/4sx6NRwL6Ol3V6m9exwGlQ',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a53643fc03785efb9926443d'
  },
  {
    id: 'lizzo_about_damn_time',
    title: 'About Damn Time',
    artist: 'Lizzo',
    emotions: ['신남', '자신감', '해방감', '행복', '에너지'],
    genre: 'pop',
    description: '펑키함과 밝은 에너지가 가득한 곡',
    intro_message: '기분전환이 필요하면 이 노래가 정답!',
    mood_tags: ['upbeat', 'empowering', 'fun'],
    url: 'https://open.spotify.com/track/1PckUlxKqWQs3RlWXVBLw3',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b817e721691aff3d67f26c04'
  },
  {
    id: 'justin_bieber_stay',
    title: 'Stay (with The Kid LAROI)',
    artist: 'Justin Bieber & The Kid LAROI',
    emotions: ['그리움', '에너지', '급함', '희망', '감정'],
    genre: 'pop',
    description: '빠른 템포와 독특한 감성으로 히트한 곡',
    intro_message: '에너지가 넘치는 노래를 듣고 싶다면 추천!',
    mood_tags: ['energetic', 'dynamic', 'catchy'],
    url: 'https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0241e31d6ea1d493dd77933ee5'
  },


  // ===== HIP-HOP (24곡) =====
  {
    id: 'jack_harlow_first_class',
    title: 'First Class',
    artist: 'Jack Harlow',
    emotions: ['자신감', '여유', '승리', '흥분', '긍정'],
    genre: 'hip-hop',
    description: '트렌디하고 여유로운 무드의 힙합 곡',
    intro_message: '자신감 넘치는 하루를 시작해봐요!',
    mood_tags: ['confident', 'smooth', 'catchy'],
    url: 'https://open.spotify.com/track/1rDQ4oMwGJI7B4tovsBOxc',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020fbbde391655703a7c8cdc79'
  },
  {
    id: 'lil_nas_x_industry_baby',
    title: 'INDUSTRY BABY',
    artist: 'Lil Nas X & Jack Harlow',
    emotions: ['자신감', '강렬함', '에너지', '해방', '승리'],
    genre: 'hip-hop',
    description: '혁신적인 비트와 강한 메시지의 힙합 곡',
    intro_message: '도전 정신이 필요할 때 이 곡을 들어보세요!',
    mood_tags: ['powerful', 'upbeat', 'bold'],
    url: 'https://open.spotify.com/track/4CGV3tVIiDSaC3ujlVszRp',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022d2cf5791870747cb35f7a49'
  },
  {
    id: 'post_malone_chemical',
    title: 'Chemical',
    artist: 'Post Malone',
    emotions: ['감정', '슬픔', '중독', '몽환', '성찰'],
    genre: 'hip-hop',
    description: '독특한 사운드와 감성적인 멜로디가 조화된 곡',
    intro_message: '감성에 젖고 싶을 때 추천!',
    mood_tags: ['emotional', 'melancholic', 'smooth'],
    url: 'https://open.spotify.com/track/5w40ZYhbBMAlHYNDaVJIUu',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f76f8deeba5370c98ad38f1c'
  },
  {
    id: 'megan_thee_stallion_body',
    title: 'Body',
    artist: 'Megan Thee Stallion',
    emotions: ['자신감', '섹시함', '강렬함', '유쾌함', '해방'],
    genre: 'hip-hop',
    description: '강한 비트와 에너지 있는 랩의 대표곡',
    intro_message: '자신감 충전이 필요하다면 들어보세요!',
    mood_tags: ['empowering', 'energetic', 'playful'],
    url: 'https://open.spotify.com/track/0A1hoCfMLkiAgvhWkkucJa',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02da256972582b455d46985ba9'
  },
  {
    id: 'travis_scott_highest_in_the_room',
    title: 'HIGHEST IN THE ROOM',
    artist: 'Travis Scott',
    emotions: ['몽환', '에너지', '불안', '자유', '청춘'],
    genre: 'hip-hop',
    description: '환상적 사운드와 독특한 분위기의 트랩 곡',
    intro_message: '새로운 감각을 느끼고 싶을 때 추천!',
    mood_tags: ['dreamy', 'trippy', 'intense'],
    url: 'https://open.spotify.com/track/3eekarcy7kvN4yt5ZFzltW',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e42b5fea4ac4c3d6328b622b'
  },
  {
    id: 'central_cee_sprinter',
    title: 'Sprinter',
    artist: 'Central Cee & Dave',
    emotions: ['파워', '자신감', '스트리트', '에너지', '직설'],
    genre: 'hip-hop',
    description: 'UK 힙합 특유의 직설적이고 날카로운 곡',
    intro_message: '트렌디한 스트리트 감성을 원한다면 좋아요.',
    mood_tags: ['street', 'bold', 'energetic'],
    url: 'https://open.spotify.com/track/2FDTHlrBguDzQkp7PVj16Q',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3a09a9ae3f1fa102c110e60'
  },
  {
    id: 'future_wait_for_u',
    title: 'WAIT FOR U (feat. Drake & Tems)',
    artist: 'Future',
    emotions: ['그리움', '로맨스', '평온', '내면', '쓸쓸함'],
    genre: 'hip-hop',
    description: '부드러운 멜로디와 감성 넘치는 트랩 곡',
    intro_message: '잔잔한 감성의 힙합을 원한다면 추천!',
    mood_tags: ['smooth', 'emotional', 'melodic'],
    url: 'https://open.spotify.com/track/59nOXPmaKlBfGMDeOVGrIK',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0286badd635b69aea887862214'
  },
  {
    id: 'latto_big_energy',
    title: 'Big Energy',
    artist: 'Latto',
    emotions: ['자신감', '에너지', '당당함', '유쾌함', '파워'],
    genre: 'hip-hop',
    description: '파워풀한 랩과 시원한 비트가 돋보이는 곡',
    intro_message: '대담하게 나아가고 싶을 때 필수!',
    mood_tags: ['upbeat', 'powerful', 'empowering'],
    url: 'https://open.spotify.com/track/6Zu3aw7FfjAF9WA0fA81Oq',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029c6ee9288ba1e9a08ab0b99e'
  },
  {
    id: 'j_hope_on_the_street',
    title: 'on the street (with J. Cole)',
    artist: 'j-hope',
    emotions: ['희망', '감동', '열정', '청춘', '에너지'],
    genre: 'hip-hop',
    description: '꿈과 도전을 응원하는 감동적인 글로벌 콜라보 곡',
    intro_message: '도전이 필요할 때 타오르는 에너지를 느껴보세요!',
    mood_tags: ['uplifting', 'hopeful', 'inspiring'],
    url: 'https://open.spotify.com/track/5wxYxygyHpbgv0EXZuqb9V',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025e8286ff63f7efce1881a02b'
  },
  {
    id: 'megan_thee_stallion_savage',
    title: 'Savage',
    artist: 'Megan Thee Stallion',
    emotions: ['조각', '자신감', '카리스마', '강렬함', '파워'],
    genre: 'hip-hop',
    description: '당당함이 가득한 글로벌 히트 랩곡',
    intro_message: '자존감 올리고 싶은 날 들어보세요!',
    mood_tags: ['empowering', 'bold', 'trendy'],
    url: 'https://open.spotify.com/track/55CHeLEfn5iJ0IIkgaa4si',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0220fbc17fcb9376bc76a1b510'
  },
  {
    id: 'central_cee_doja',
    title: 'Doja',
    artist: 'Central Cee',
    emotions: ['신남', '자신감', '트렌디', '스트리트', '경쾌'],
    genre: 'hip-hop',
    description: '짧고 인상적 후렴이 매력인 UK 힙합',
    intro_message: '핫한 곡이 필요하다면 지금 들어보세요!',
    mood_tags: ['catchy', 'street', 'upbeat'],
    url: 'https://open.spotify.com/track/3LtpKP5abr2qqjunvjlX5i',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023c7d945b6baf935e8a0ebdaa'
  },
  {
    id: 'bbno_edamame',
    title: 'edamame (feat. Rich Brian)',
    artist: 'bbno$',
    emotions: ['유쾌함', '에너지', '위트', '즐거움', '청춘'],
    genre: 'hip-hop',
    description: '위트있는 가사와 신나는 랩플로우',
    intro_message: '재미와 신남이 필요할 때 이 노래!',
    mood_tags: ['fun', 'upbeat', 'catchy'],
    url: 'https://open.spotify.com/track/1uMHCAyGmHqyygoNRuo7MV',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02545a202ab06885cf2c6621ca'
  },
  {
    id: 'juice_wrld_wishing_well',
    title: 'Wishing Well',
    artist: 'Juice WRLD',
    emotions: ['희망', '아픔', '성찰', '열정', '성장'],
    genre: 'hip-hop',
    description: '감정적 가사와 트랩 사운드, 진솔한 고백',
    intro_message: '마음에 남는 진심 어린 곡입니다.',
    mood_tags: ['emotional', 'melodic', 'reflective'],
    url: 'https://open.spotify.com/track/2U5WueTLIK5WJLD7mvDODv',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023e0698e4ae5ffb82a005aeeb'
  },
  {
    id: 'sik_k_rendezvous',
    title: 'Rendezvous',
    artist: 'Sik-K',
    emotions: ['로맨스', '설렘', '열정', '신남', '감정'],
    genre: 'hip-hop',
    description: '로맨틱하면서 에너지가 넘치는 힙합송',
    intro_message: '감미로운 랩 발라드힙합을 원한다면 추천!',
    mood_tags: ['romantic', 'trendy', 'upbeat'],
    url: 'https://open.spotify.com/track/4Z2mXXSzuCDEHZtFGmy0X5',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02487582fe2bec0ccabdca5c74'
  },
  {
    id: 'dpr_live_hula_hoops',
    title: 'Hula Hoops (feat. Beenzino, HWASA)',
    artist: 'DPR LIVE',
    emotions: ['유쾌함', '쿨', '신남', '트렌디', '자유'],
    genre: 'hip-hop',
    description: '여름에 어울리는 경쾌하고 트렌디한 곡',
    intro_message: '여름 파티 느낌 물씬나는 곡이에요!',
    mood_tags: ['trendy', 'funky', 'party'],
    url: 'https://open.spotify.com/track/5FsdBmqWWfS6S5X4NfmxSh',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02fd20d9671c8a3bdb6dd99e3c'
  },
  {
    id: 'yeat_talk',
    title: 'Talk',
    artist: 'Yeat',
    emotions: ['차분함', '여유', '쿨', '트렌디', '감정'],
    genre: 'hip-hop',
    description: '미니멀한 비트와 개성 랩이 돋보이는 곡',
    intro_message: '새로운 사운드를 경험하고 싶다면 추천!',
    mood_tags: ['trendy', 'chill', 'unique'],
    url: 'https://open.spotify.com/track/0ypjMI7vHiDP4sLB1C0Qna',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e97df2756c243d8f81cbb0f8'
  },
  {
    id: 'blackbear_hot_girl_bummer',
    title: 'hot girl bummer',
    artist: 'blackbear',
    emotions: ['반항', '쿨함', '해방', '자유', '감정'],
    genre: 'hip-hop',
    description: '자유롭게 털어내는 에너지가 담긴 트랙',
    intro_message: '쿨하게 기분전환 할 때 딱이에요!',
    mood_tags: ['cool', 'rebellious', 'trendy'],
    url: 'https://open.spotify.com/track/6jRq8gaZhMUyy5RclRPcAf',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e9b6f26ff354f4d70847f02d'
  },
  {
    id: 'post_malone_cooped_up',
    title: 'Cooped Up (with Roddy Ricch)',
    artist: 'Post Malone',
    emotions: ['고립', '자유', '해방', '쿨', '감정'],
    genre: 'hip-hop',
    description: '힙합과 팝의 경계를 넘나드는 신스적 사운드',
    intro_message: '일상 탈출이 필요하다면 이 곡 추천!',
    mood_tags: ['cool', 'trendy', 'chill'],
    url: 'https://open.spotify.com/track/0pIns4OlhPhu1yhL4kkniB',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eb2a7d3831db9e69bbf04559'
  },
  {
    id: 'lil_boi_on_air',
    title: 'On Air (Feat. MIRANI, Loco, SOLE)',
    artist: 'lIlBOI',
    emotions: ['청춘', '희망', '열정', '에너지', '긍정'],
    genre: 'hip-hop',
    description: '다양한 피처링과 밝은 에너지의 힙합 트랙',
    intro_message: '밝게 시작하는 하루에 추천하는 곡이에요!',
    mood_tags: ['uplifting', 'youthful', 'catchy'],
    url: 'https://open.spotify.com/track/3sNpAUnxxQWeP4gnSdJXg6',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024915a9a5d387da53943b043f'
  },
  {
    id: 'tyler_the_creator_earfquake',
    title: 'EARFQUAKE',
    artist: 'Tyler, The Creator',
    emotions: ['혼란', '애틋함', '유쾌함', '감정', '몽환'],
    genre: 'hip-hop',
    description: '개성 넘치는 사운드와 감정적 무드',
    intro_message: '특색 있는 힙합을 찾는다면 추천!',
    mood_tags: ['unique', 'melancholic', 'emotional'],
    url: 'https://open.spotify.com/track/5hVghJ4KaYES3BFUATCYn0',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027005885df706891a3c182a57'
  },
  {
    id: 'polo_g_rapstar',
    title: 'RAPSTAR',
    artist: 'Polo G',
    emotions: ['성찰', '고민', '자신감', '내면', '희망'],
    genre: 'hip-hop',
    description: '진솔한 가사와 차분하면서 세련된 랩',
    intro_message: '진솔한 감정을 느끼고 싶다면 꼭 들어보세요.',
    mood_tags: ['reflective', 'emotional', 'chill'],
    url: 'https://open.spotify.com/track/18vXApRmJSgQ6wG2ll9AOg',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a493e05c99d8ec5e8020ff2b'
  },


  // ===== R&B (24곡) =====
  {
    id: 'daniel_caesar_get_you',
    title: 'Get You (feat. Kali Uchis)',
    artist: 'Daniel Caesar',
    emotions: ['로맨스', '감성', '감사', '행복', '평온'],
    genre: 'r&b',
    description: '부드럽고 감미로운 로맨틱 R&B 곡',
    intro_message: '이불 속에서 듣기 좋은 사랑 노래입니다.',
    mood_tags: ['romantic', 'smooth', 'emotional'],
    url: 'https://open.spotify.com/track/7zFXmv6vqI4qOt4yGf3jYZ',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023138f891f3075c9c5d944037'
  },
  {
    id: 'giveon_heartbreak_anniversary',
    title: 'Heartbreak Anniversary',
    artist: 'Giveon',
    emotions: ['그리움', '슬픔', '추억', '감정', '외로움'],
    genre: 'r&b',
    description: '짐작가고 짙은 감성이 담긴 이별노래',
    intro_message: '이별의 감성을 느끼고 싶을 때 추천!',
    mood_tags: ['emotional', 'melancholic', 'soulful'],
    url: 'https://open.spotify.com/track/3FAJ6O0NOHQV8Mc5Ri6ENp',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023317fc12f8b9a9a0b8459766'
  },
  {
    id: 'sza_good_days',
    title: 'Good Days',
    artist: 'SZA',
    emotions: ['희망', '위로', '성찰', '편안함', '평온'],
    genre: 'r&b',
    description: '몽환적 사운드에 따뜻한 위로를 담은 곡',
    intro_message: '평온한 하루의 시작에 들으면 좋아요!',
    mood_tags: ['dreamy', 'uplifting', 'chill'],
    url: 'https://open.spotify.com/track/3YJJjQPAbDT7mGpX3WtQ9A',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023097b1375ab17ae5bf302a0a'
  },
  {
    id: 'brent_faiyaz_dead_man_walking',
    title: 'Dead Man Walking',
    artist: 'Brent Faiyaz',
    emotions: ['고독', '몽환', '슬픔', '성찰', '평온'],
    genre: 'r&b',
    description: '신비롭고 깊은 무드가 매력적인 R&B 곡',
    intro_message: '고요한 밤, 차분하게 듣기 좋아요.',
    mood_tags: ['moody', 'dreamy', 'chill'],
    url: 'https://open.spotify.com/track/2c2tlXfEmLgUNvxngIi1qL',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0269f63a842ea91ca7c522593a'
  },
  {
    id: 'pink_sweats_at_my_worst',
    title: 'At My Worst',
    artist: 'Pink Sweat$',
    emotions: ['사랑', '위로', '희망', '감동', '진심'],
    genre: 'r&b',
    description: '부드러운 멜로디와 따뜻함을 담은 러브송',
    intro_message: '따뜻한 사랑이 필요한 날 듣기 좋아요.',
    mood_tags: ['romantic', 'hopeful', 'uplifting'],
    url: 'https://open.spotify.com/track/0ri0Han4IRJhzvERHOZTMr',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0287bb1da05f3491eea3401de5'
  },
  {
    id: 'khalid_talk',
    title: 'Talk',
    artist: 'Khalid',
    emotions: ['설렘', '평온', '행복', '로맨스', '달콤함'],
    genre: 'r&b',
    description: '달콤한 멜로디가 돋보이는 청춘 러브송',
    intro_message: '설레는 감성이 가득한 노래에요.',
    mood_tags: ['sweet', 'chill', 'romantic'],
    url: 'https://open.spotify.com/track/6TqXcAFInzjp0bODyvrWEq',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b361ce46dbadbf8a11081b60'
  },
  {
    id: 'her_damaged',
    title: 'Damage',
    artist: 'H.E.R.',
    emotions: ['감성', '슬픔', '그리움', '애절', '위로'],
    genre: 'r&b',
    description: '감각적인 기타와 감정 깊은 보컬이 인상적',
    intro_message: '이별의 아픔을 위로받고 싶을 때 들어보세요.',
    mood_tags: ['emotional', 'smooth', 'soulful'],
    url: 'https://open.spotify.com/track/0KS2h61pHQ4WmOwruD7uxD',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029276b0040c00070f5811019e'
  },
  {
    id: 'kali_uchis_telepatia',
    title: 'telepatía',
    artist: 'Kali Uchis',
    emotions: ['몽환', '설렘', '고요함', '로맨스', '평온'],
    genre: 'r&b',
    description: '몽환적 사운드와 사랑스러운 라틴 무드의 곡',
    intro_message: '분위기 있는 밤 추천하는 곡이에요.',
    mood_tags: ['dreamy', 'romantic', 'chill'],
    url: 'https://open.spotify.com/track/6tDDoYIxWvMLTdKpjFkc1B',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02044a5466dac00f7b3c570b99'
  },
  {
    id: 'sza_snooze',
    title: 'Snooze',
    artist: 'SZA',
    emotions: ['사랑', '감성', '평온', '따뜻함', '행복'],
    genre: 'r&b',
    description: '따뜻하고 달콤한 감성을 담은 곡',
    intro_message: '사랑의 감정을 온전히 느끼고 싶을 때 추천!',
    mood_tags: ['romantic', 'smooth', 'uplifting']
  },
  {
    id: 'the_weeknd_save_your_tears',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    emotions: ['그리움', '회상', '슬픔', '노스탤지어', '희망'],
    genre: 'r&b',
    description: '레트로한 사운드와 감미로운 멜로디',
    intro_message: '추억을 떠올리고 싶을 때 들어보세요.',
    mood_tags: ['nostalgic', 'emotional', 'catchy']
  },
  {
    id: 'bibi_binu',
    title: 'BINU',
    artist: '비비 (BIBI)',
    emotions: ['몽환', '자유', '감정', '열정', '독특함'],
    genre: 'r&b',
    description: '몽환적 사운드와 개성 있는 보컬이 돋보이는 곡',
    intro_message: '독특하고 몽환적인 감성이 필요할 때 추천!',
    mood_tags: ['dreamy', 'trendy', 'unique']
  },
  {
    id: 'crush_rush_hour',
    title: 'Rush Hour (feat. j-hope of BTS)',
    artist: 'Crush',
    emotions: ['유쾌함', '설렘', '흥분', '청춘', '자유'],
    genre: 'r&b',
    description: '펑키한 리듬과 상쾌한 보컬의 콜라보 곡',
    intro_message: '신나게 달리고 싶은 기분에 제격!',
    mood_tags: ['funky', 'upbeat', 'playful']
  },
  {
    id: 'dean_limousine',
    title: 'limousine (feat. Heize)',
    artist: 'DEAN',
    emotions: ['밤', '그리움', '감성', '몽환', '애절'],
    genre: 'r&b',
    description: '새벽 감성과 은은한 그루브가 매력인 곡',
    intro_message: '새벽 감성 충전할 때 듣기 좋아요.',
    mood_tags: ['dreamy', 'melancholic', 'chill']
  },
  {
    id: 'chancellor_midnight',
    title: 'Midnight',
    artist: 'Chancellor',
    emotions: ['몽환', '여유', '감성', '평온', '느슨함'],
    genre: 'r&b',
    description: '잔잔하면서 풍성한 사운드가 인상적',
    intro_message: '늦은 밤의 고요함을 즐기고 싶다면 추천!',
    mood_tags: ['chill', 'smooth', 'dreamy']
  },
  {
    id: 'heize_things_are_going_well',
    title: 'Things are going well',
    artist: 'Heize',
    emotions: ['희망', '위로', '감동', '성장', '평온'],
    genre: 'r&b',
    description: '잔잔한 위로와 따스한 메시지가 담긴 곡',
    intro_message: '힘든 마음을 부드럽게 달래주는 곡!',
    mood_tags: ['uplifting', 'emotional', 'smooth']
  },
  {
    id: 'jeremy_zucker_comethru',
    title: 'comethru',
    artist: 'Jeremy Zucker',
    emotions: ['편안함', '여유', '행복', '감성', '힐링'],
    genre: 'r&b',
    description: '편안한 리듬과 감성 가득한 보컬',
    intro_message: '힐링이 필요할 땐 언제든 추천!',
    mood_tags: ['chill', 'smooth', 'uplifting']
  },
  {
    id: 'keshi_get_it',
    title: 'GET IT',
    artist: 'keshi',
    emotions: ['감정', '몽환', '희망', '성장', '자유'],
    genre: 'r&b',
    description: '몽환적인 기타와 세련된 보컬의 조화',
    intro_message: '자유로운 밤, 원하는 감성에 어울려요!',
    mood_tags: ['dreamy', 'trendy', 'uplifting']
  },
  {
    id: 'wheein_water_color',
    title: 'water color',
    artist: 'Whee In',
    emotions: ['당당함', '희망', '긍정', '감정', '평온'],
    genre: 'r&b',
    description: '밝은 메시지와 세련됨이 공존하는 곡',
    intro_message: '나만의 색을 그리고 싶을 때 필수!',
    mood_tags: ['empowering', 'uplifting', 'groovy']
  },
  {
    id: 'zion_t_no_make_up',
    title: 'No Make Up',
    artist: 'Zion.T',
    emotions: ['진솔함', '감성', '평온', '로맨스', '따뜻함'],
    genre: 'r&b',
    description: '따뜻한 감성과 부드러운 멜로디',
    intro_message: '진짜 나의 모습을 인정해 주고 싶을 때 들어보세요.',
    mood_tags: ['romantic', 'emotional', 'soft']
  },
  {
    id: 'ariana_grande_34_35',
    title: '34+35',
    artist: 'Ariana Grande',
    emotions: ['유쾌함', '경쾌함', '사랑', '섹시', '감정'],
    genre: 'r&b',
    description: '펑키와 팝이 결합된 매혹적인 R&B',
    intro_message: '재미와 사랑을 동시에 느낄 수 있는 곡!',
    mood_tags: ['playful', 'catchy', 'bold']
  },
  {
    id: 'samm_henshaw_grow',
    title: 'Grow',
    artist: 'Samm Henshaw',
    emotions: ['성장', '희망', '감동', '포근함', '에너지'],
    genre: 'r&b',
    description: '성장과 위로를 담은 따스한 메시지의 곡',
    intro_message: '마음이 자라는 느낌을 주는 곡이에요.',
    mood_tags: ['uplifting', 'hopeful', 'emotional']
  },
  {
    id: 'mac_ayres_slow_down',
    title: 'Slow Down',
    artist: 'Mac Ayres',
    emotions: ['평온', '여유', '행복', '감성', '위로'],
    genre: 'r&b',
    description: '잔잔하고 부드러운 분위기의 곡',
    intro_message: '일상에 여유를 주고 싶을 때 추천!',
    mood_tags: ['chill', 'relaxing', 'smooth']
  },
  {
    id: 'sunwoo_junga_hero',
    title: 'Hero',
    artist: '선우정아',
    emotions: ['위로', '희망', '감성', '평온', '성장'],
    genre: 'r&b',
    description: '잔잔한 멜로디와 따스한 목소리가 매력인 곡',
    intro_message: '마음을 위로하고 힘을 주는 노래!',
    mood_tags: ['emotional', 'uplifting', 'calm']
  },
  {
    id: 'minnie_drive',
    title: 'Drive',
    artist: 'MINNIE ((G)I-DLE)',
    emotions: ['여유', '자유', '평온', '설렘', '감성'],
    genre: 'r&b',
    description: '차분하게 드라이브하며 듣기 좋은 곡',
    intro_message: '드라이브와 함께하는 감성 추천!',
    mood_tags: ['chill', 'fresh', 'smooth']
  },


  // ===== ELECTRONIC (24곡) =====
  {
    id: 'calvin_harris_one_kiss',
    title: 'One Kiss',
    artist: 'Calvin Harris & Dua Lipa',
    emotions: ['들뜸', '에너지', '설렘', '행복', '흥분'],
    genre: 'electronic',
    description: '트렌디한 댄스 비트와 밝은 분위기의 곡',
    intro_message: '파티 분위기를 느끼고 싶을 때 강력 추천!',
    mood_tags: ['upbeat', 'dance', 'catchy']
  },
  {
    id: 'meduza_piece_of_your_heart',
    title: 'Piece Of Your Heart',
    artist: 'Meduza & Goodboys',
    emotions: ['신남', '에너지', '패기', '흥분', '유쾌함'],
    genre: 'electronic',
    description: '중독성 강한 드롭과 경쾌한 리듬의 EDM',
    intro_message: '클럽 분위기가 필요하다면 들어보세요!',
    mood_tags: ['energetic', 'catchy', 'party']
  },
  {
    id: 'regard_ride_it',
    title: 'Ride It',
    artist: 'Regard',
    emotions: ['몽환', '고요함', '신비로움', '유혹', '평온'],
    genre: 'electronic',
    description: '심플한 비트와 몽환적인 분위기가 특징',
    intro_message: '차분하면서도 트렌디한 EDM을 원할 때 추천!',
    mood_tags: ['chill', 'dreamy', 'smooth']
  },
  {
    id: 'surf_mesa_ilysm',
    title: 'ily (i love you baby)',
    artist: 'Surf Mesa & Emilee',
    emotions: ['설렘', '사랑', '행복', '여유', '감성'],
    genre: 'electronic',
    description: '상큼한 분위기의 밝고 산뜻한 EDM 리메이크',
    intro_message: '달콤한 기분을 느끼고 싶을 때 들어보세요!',
    mood_tags: ['sweet', 'upbeat', 'happy']
  },
  {
    id: 'kygo_stole_the_show',
    title: 'Stole The Show',
    artist: 'Kygo & Parson James',
    emotions: ['감동', '희망', '에너지', '행복', '성장'],
    genre: 'electronic',
    description: '트로피컬 하우스의 대표적인 희망찬 음악',
    intro_message: '기분 좋은 감동이 필요할 때 추천!',
    mood_tags: ['uplifting', 'dance', 'catchy']
  },
  {
    id: 'martin_garrix_high_on_life',
    title: 'High On Life (feat. Bonn)',
    artist: 'Martin Garrix',
    emotions: ['희망', '에너지', '감동', '행복', '설렘'],
    genre: 'electronic',
    description: '감동적인 멜로디와 파워풀한 에너지의 EDM',
    intro_message: '에너지 넘치게 하루를 시작하려면 이 곡!',
    mood_tags: ['uplifting', 'energetic', 'powerful']
  },
  {
    id: 'fisher_losing_it',
    title: 'Losing It',
    artist: 'FISHER',
    emotions: ['절정', '에너지', '신남', '흥분', '패기'],
    genre: 'electronic',
    description: '클럽에서 인기 높은 테크노 EDM',
    intro_message: '파티의 하이라이트에 꼭 어울리는 곡!',
    mood_tags: ['intense', 'party', 'energetic'],
    url: 'https://open.spotify.com/track/6ho0GyrWZN3mhi9zVRW7xi',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029367c1ee2eec0bf3a04b4868'
  },
  {
    id: 'avicii_the_nights',
    title: 'The Nights',
    artist: 'Avicii',
    emotions: ['노스탤지아', '설렘', '희망', '행복', '열정'],
    genre: 'electronic',
    description: '희망 메시지와 꿈을 담은 전설적 일렉트로닉 송',
    intro_message: '꿈과 용기가 필요할 때 들어봐요!',
    mood_tags: ['uplifting', 'hopeful', 'dance'],
    url: 'https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020ae4f4d42e4a09f3a29f64ad'
  },
  {
    id: 'alan_walker_faded',
    title: 'Faded',
    artist: 'Alan Walker',
    emotions: ['몽환', '그리움', '신비로움', '슬픔', '감정'],
    genre: 'electronic',
    description: '신비한 분위기와 중독성 넘치는 일렉트로닉',
    intro_message: '몽환적이고 감성적인 순간에 어울려요.',
    mood_tags: ['dreamy', 'emotional', 'trendy'],
    url: 'https://open.spotify.com/track/698ItKASDavgwZ3WjaWjtz',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a108e07c661f9fc54de9c43a'
  },
  {
    id: 'zedd_stay',
    title: 'Stay',
    artist: 'Zedd & Alessia Cara',
    emotions: ['희망', '그리움', '에너지', '설렘', '사랑'],
    genre: 'electronic',
    description: '신나는 드롭과 감성적인 멜로디가 조화된 EDM',
    intro_message: '잔잔함과 에너지를 모두 느낄 수 있어요!',
    mood_tags: ['catchy', 'dance', 'melodic'],
    url: 'https://open.spotify.com/track/6uBhi9gBXWjanegOb2Phh0',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b993cba8ff7d0a8e9ee18d46'
  },
  {
    id: 'illeniium_good_things_fall_apart',
    title: 'Good Things Fall Apart',
    artist: 'Illenium & Jon Bellion',
    emotions: ['슬픔', '위로', '희망', '에너지', '감성'],
    genre: 'electronic',
    description: '감성적인 가사와 파워풀한 사운드의 곡',
    intro_message: '슬플 때 위로받고 싶다면 추천!',
    mood_tags: ['emotional', 'uplifting', 'energetic'],
    url: 'https://open.spotify.com/track/3LxG9HkMMFP0MZuiw3O2rF',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02529c6fa82d23f65076c1579b'
  },
  {
    id: 'kygo_hot_stuff',
    title: 'Hot Stuff',
    artist: 'Kygo, Donna Summer',
    emotions: ['흥분', '노스탤지아', '에너지', '행복', '열정'],
    genre: 'electronic',
    description: '레트로 디스코와 현대 사운드의 만남',
    intro_message: '파티분위기로 금방 전환되는 음악이에요!',
    mood_tags: ['retro', 'upbeat', 'dance'],
    url: 'https://open.spotify.com/track/00ETaeHUQ6lops3oWU1Wrt',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028fc0ee2f829a7138af579c97'
  },
  {
    id: 'shouse_love_tonight',
    title: 'Love Tonight',
    artist: 'Shouse',
    emotions: ['희망', '연대', '에너지', '행복', '감동'],
    genre: 'electronic',
    description: '다같이 즐기기 좋은 전세계적 밈 EDM',
    intro_message: '모두 함께 신나고 싶을 때 강추!',
    mood_tags: ['uplifting', 'party', 'catchy'],
    url: 'https://open.spotify.com/track/1u73tmG4xQschbK8cXxSD9',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0281376e47003d45f6513b5657'
  },
  {
    id: 'lost_frequencies_where_are_you_now',
    title: 'Where Are You Now',
    artist: 'Lost Frequencies, Calum Scott',
    emotions: ['그리움', '열정', '에너지', '감성', '설렘'],
    genre: 'electronic',
    description: '감미로운 멜로디와 드롭이 인상적인 EDM',
    intro_message: '그리움이 남을 때 들어보는 곡!',
    mood_tags: ['catchy', 'dreamy', 'energetic'],
    url: 'https://open.spotify.com/track/2u6jeaKAJlMoF6TIXCtNA8',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029f0952c527b4a95e86760adc'
  },
  {
    id: 'joel_corry_head_and_heart',
    title: 'Head & Heart (feat. MNEK)',
    artist: 'Joel Corry',
    emotions: ['행복', '에너지', '처방', '설렘', '경쾌함'],
    genre: 'electronic',
    description: '밝은 여름 바이브의 글로벌 EDM',
    intro_message: '상큼한 무드가 필요할 때 추천!',
    mood_tags: ['upbeat', 'dance', 'fresh'],
    url: 'https://open.spotify.com/track/6cx06DFPPHchuUAcTxznu9',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0291e93c59bacfe819db9601eb'
  },
  {
    id: 'bts_my_universe',
    title: 'My Universe',
    artist: 'Coldplay x BTS',
    emotions: ['사랑', '희망', '감동', '열정', '에너지'],
    genre: 'electronic',
    description: '세계적 협업과 환상적 일렉트로닉 사운드',
    intro_message: '좌절감을 용기로 바꿔주는 특별한 곡!',
    mood_tags: ['uplifting', 'romantic', 'dreamy'],
    url: 'https://open.spotify.com/track/46HNZY1i7O6jwTA7Slo2PI',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ec10f247b100da1ce0d80b6d'
  },
  {
    id: 'alesso_words',
    title: 'Words (feat. Zara Larsson)',
    artist: 'Alesso',
    emotions: ['설렘', '자유', '경쾌함', '에너지', '유쾌함'],
    genre: 'electronic',
    description: '상큼한 여성 보컬과 EDM의 조화',
    intro_message: '기분전환용 상쾌한 곡이에요!',
    mood_tags: ['catchy', 'dance', 'energetic'],
    url: 'https://open.spotify.com/track/1bgKMxPQU7JIZEhNsM1vFs',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028f9c368d8d0f5792ffc5d38e'
  },
  {
    id: 'jvke_golden_hour',
    title: 'golden hour',
    artist: 'JVKE',
    emotions: ['로맨스', '설렘', '행복', '따뜻함', '감동'],
    genre: 'electronic',
    description: '따뜻한 노을 빛 감성의 일렉트로닉 팝',
    intro_message: '로맨틱한 순간에 어울리는 곡!',
    mood_tags: ['romantic', 'catchy', 'emotional'],
    url: 'https://open.spotify.com/track/4yNk9iz9WVJikRFle3XEvn',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020af4476af141051c728ee8b9'
  },
  {
    id: 'purple_disco_machine_fireworks',
    title: 'Fireworks',
    artist: 'Purple Disco Machine',
    emotions: ['행복', '열정', '에너지', '신남', '기대'],
    genre: 'electronic',
    description: '펑키와 뉴디스코 사운드가 어우러진 곡',
    intro_message: '불꽃처럼 설레는 에너지가 필요할 때!',
    mood_tags: ['funky', 'upbeat', 'dance'],
    url: 'https://open.spotify.com/track/413WXUEkGKgchpUSP6ee46',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02506d02a4cf28b308e608a25e'
  },
  {
    id: 'alan_walker_sweet_dreams',
    title: 'Sweet Dreams',
    artist: 'Alan Walker',
    emotions: ['몽환', '신비', '강렬함', '판타지', '에너지'],
    genre: 'electronic',
    description: '몽환적 사운드와 파워풀한 드롭의 EDM',
    intro_message: '특별한 밤, 판타지 세계에 빠지고 싶을 때!',
    mood_tags: ['dreamy', 'powerful', 'intense'],
    url: 'https://open.spotify.com/track/4uDhts78RdwIDjEqPrYVKp',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027327806c243a77cde4502d6a'
  },
  /* Removed kygo_best_of_me entry as no valid track information was found */
  {
    id: 'fred_again_delilah',
    title: 'Delilah (pull me out of this)',
    artist: 'Fred again..',
    emotions: ['심야', '몽환', '에너지', '애틋함', '감정'],
    genre: 'electronic',
    description: '몽환적이면서도 생동감 있는 트렌디 EDM',
    intro_message: '새벽 감성, 신나고 싶을 때 들어보세요!',
    mood_tags: ['dreamy', 'catchy', 'fresh'],
    url: 'https://open.spotify.com/track/0Ftrkz2waaHcjKb4qYvLmz',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029c856c6f2c6161af49446bf8'
  },
  {
    id: 'porter_robinson_get_your_wish',
    title: 'Get Your Wish',
    artist: 'Porter Robinson',
    emotions: ['희망', '꿈', '영감', '설렘', '에너지'],
    genre: 'electronic',
    description: '따뜻한 희망을 담은 아름다운 일렉트로닉',
    intro_message: '꿈을 꾸고 싶다면 꼭 들어보세요!',
    mood_tags: ['inspiring', 'uplifting', 'dreamy'],
    url: 'https://open.spotify.com/track/6aUfT9QOcTHhxLNrf1aVR8',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027d6ac8b4a84ad4b342050d87'
  },
  {
    id: 'sigala_melody',
    title: 'Melody',
    artist: 'Sigala',
    emotions: ['행복', '신남', '에너지', '경쾌함', '희망'],
    genre: 'electronic',
    description: '트렌디하고 밝은 분위기의 신나는 EDM',
    intro_message: '기분 좋은 하우스 사운드가 필요할 때 추천!',
    mood_tags: ['upbeat', 'dance', 'happy'],
    url: 'https://open.spotify.com/track/4J0ynASMkErhHjygUos2DS',
    thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029f0952c527b4a95e86760adc'
  },
  {
    id: 'sofie_tukker_summer_in_new_york',
    title: 'Summer In New York',
    artist: 'SOFI TUKKER',
    emotions: ['여유', '설렘', '행복', '분위기', '재미'],
    genre: 'electronic',
    description: '여름의 자유로움과 경쾌함이 담긴 곡',
    intro_message: '여름 기분을 만끽하고 싶다면 추천!',
    mood_tags: ['fun', 'chill', 'party'],
    url: 'https://open.spotify.com/track/5kyJ6sznnWACqHbw65p34Q',
    thumbnail: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02035ef25cd05ffba3078e7027'
  }
];


// 감정별 음악 검색 함수
export const searchMusicByEmotion = (mood: 'good' | 'normal' | 'bad', emotion: string): MusicItem[] => {
  const emotionLower = emotion.toLowerCase();
  
  // huntrix 우선 확률 (10%로 감소)
  const huntrixPriority = Math.random() < 0.1;
  if (huntrixPriority || emotionLower.includes('huntrix') || emotionLower.includes('게임') || emotionLower.includes('집중')) {
    const huntrixMusic = EMOTION_MUSIC_DATABASE.filter(music => 
      music.id.startsWith('huntrix_')
    );
    if (huntrixMusic.length > 0) {
      const shuffled = [...huntrixMusic].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    }
  }


  // 감정 키워드 매핑 (더 포괄적)
  const emotionKeywords: Record<string, string[]> = {
    // 긍정적 감정군
    '행복': ['긍정', '즐거움', '신남', '활기', '파티', '상쾌함', '발랄'],
    '기쁨': ['즐거움', '신남', '긍정', '활기', '상쾌함'],
    '설렘': ['설렘', '로맨틱', '따뜻함', '흥분'],
    '자신감': ['자신감', '당당함', '독립', '파워', '강인함'],
    '열정': ['열정', '에너지', '결의', '동기부여', '강렬함'],
    '희망': ['희망', '긍정', '자유'],
    '사랑': ['사랑', '로맨틱', '따뜻함', '진심'],
    
    // 차분한 감정군
    '평온': ['평온', '명상', '이완', '편안함'],
    '편안': ['편안함', '따뜻함', '힐링', '위로'],
    '여유': ['여유', '잔잔함', '몽환'],
    '집중': ['집중', '명상', '섬세함'],
    
    // 부정적 감정군
    '슬픔': ['슬픔', '그리움', '이별', '회상'],
    '우울': ['슬픔', '위로', '감성'],
    '외로움': ['그리움', '슬픔', '위로'],
    '스트레스': ['강렬함', '에너지', '파워'],
    '화남': ['강렬함', '파워', '도전'],
    
    // 특별한 감정군
    '그리움': ['그리움', '회상', '감성', '따스함'],
    '도전': ['도전', '결의', '승부욕', '강렬함'],
    '자유': ['자유', '해방', '가벼움']
  };


  // 입력된 감정과 매칭되는 키워드들 찾기
  let targetKeywords: string[] = [];
  
  for (const [emotionKey, keywords] of Object.entries(emotionKeywords)) {
    if (emotionLower.includes(emotionKey) || keywords.some(keyword => 
      emotionLower.includes(keyword.toLowerCase())
    )) {
      targetKeywords = [...targetKeywords, ...keywords];
      break;
    }
  }


  // 직접 감정 매칭이 안되면 기분에 따라 기본 키워드 설정
  if (targetKeywords.length === 0) {
    switch (mood) {
      case 'good':
        targetKeywords = ['긍정', '즐거움', '자신감', '희망'];
        break;
      case 'normal':
        targetKeywords = ['평온', '편안함', '여유'];
        break;
      case 'bad':
        targetKeywords = ['슬픔', '위로', '감성'];
        break;
    }
  }


  // 감정 태그가 일치하는 음악 찾기
  const matchingMusic = EMOTION_MUSIC_DATABASE.filter(music =>
    music.emotions.some(emotion => 
      targetKeywords.some(keyword => 
        emotion.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );


  // 랜덤 섞기 후 최대 3곡 반환
  const shuffled = [...matchingMusic].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};


// 개선된 사용자 선호도 기반 추천 함수
export const improvedSearchMusicByEmotion = (
  mood: 'good' | 'normal' | 'bad',
  emotion: string,
  userPreferences: string[] = [],
  conversationContext?: string
): MusicItem[] => {
  const emotionLower = emotion.toLowerCase();
  
  // 1. 사용자 선호 장르 필터링 (50% 가중치)
  let candidateMusic = EMOTION_MUSIC_DATABASE;
  
  if (userPreferences.length > 0) {
    const preferredMusic = candidateMusic.filter(music => 
      userPreferences.includes(music.genre)
    );
    
    // 선호 장르에서 충분한 곡을 찾으면 우선 사용
    if (preferredMusic.length >= 2) {
      candidateMusic = preferredMusic;
    } else {
      // 선호 장르 곡 + 다른 장르 곡 혼합
      const otherMusic = candidateMusic.filter(music => 
        !userPreferences.includes(music.genre)
      );
      candidateMusic = [...preferredMusic, ...otherMusic.slice(0, 5)];
    }
  }


  // 2. 감정 매칭
  const emotionKeywords: Record<string, string[]> = {
    '행복': ['긍정', '즐거움', '신남', '활기', '파티', '상쾌함', '발랄'],
    '자신감': ['자신감', '당당함', '독립', '파워', '강인함', '쿨함'],
    '평온': ['평온', '명상', '이완', '편안함', '힐링'],
    '슬픔': ['슬픔', '그리움', '이별', '회상', '위로'],
    '열정': ['열정', '에너지', '결의', '동기부여', '강렬함']
  };


  let targetKeywords: string[] = [];
  for (const [emotionKey, keywords] of Object.entries(emotionKeywords)) {
    if (emotionLower.includes(emotionKey) || keywords.some(keyword => 
      emotionLower.includes(keyword.toLowerCase())
    )) {
      targetKeywords = [...targetKeywords, ...keywords];
      break;
    }
  }


  // 기본 키워드 설정
  if (targetKeywords.length === 0) {
    switch (mood) {
      case 'good':
        targetKeywords = ['긍정', '즐거움', '자신감', '희망'];
        break;
      case 'normal':
        targetKeywords = ['평온', '편안함', '여유'];
        break;
      case 'bad':
        targetKeywords = ['슬픔', '위로', '감성'];
        break;
    }
  }


  // 3. 감정 태그 매칭
  const emotionMatchedMusic = candidateMusic.filter(music =>
    music.emotions.some(emotion => 
      targetKeywords.some(keyword => 
        emotion.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );


  // 4. 대화 맥락 고려 (선택적)
  if (conversationContext) {
    const contextKeywords = conversationContext.toLowerCase();
    if (contextKeywords.includes('운동') || contextKeywords.includes('헬스')) {
      const workoutMusic = emotionMatchedMusic.filter(music => 
        music.mood_tags.includes('energetic') || music.mood_tags.includes('powerful')
      );
      if (workoutMusic.length > 0) return workoutMusic.slice(0, 3);
    }
    
    if (contextKeywords.includes('공부') || contextKeywords.includes('집중')) {
      const studyMusic = emotionMatchedMusic.filter(music => 
        music.mood_tags.includes('chill') || music.genre === 'r&b'
      );
      if (studyMusic.length > 0) return studyMusic.slice(0, 3);
    }
  }


  // 5. HUNTRIX 특별 처리 (확률 10%로 감소)
  if (Math.random() < 0.1 || emotionLower.includes('huntrix') || emotionLower.includes('게임')) {
    const huntrixMusic = EMOTION_MUSIC_DATABASE.filter(music => 
      music.id.startsWith('huntrix_')
    );
    if (huntrixMusic.length > 0) {
      return huntrixMusic.slice(0, 2);
    }
  }


  // 6. 최종 결과 반환 (다양성 확보)
  const shuffled = [...emotionMatchedMusic].sort(() => 0.5 - Math.random());
  const result = shuffled.slice(0, 3);
  
  // 장르 다양성 확보
  const uniqueGenres = new Set();
  const diverseResult: MusicItem[] = [];
  
  for (const music of result) {
    if (!uniqueGenres.has(music.genre) || diverseResult.length < 2) {
      diverseResult.push(music);
      uniqueGenres.add(music.genre);
    }
  }
  
  return diverseResult.length > 0 ? diverseResult : result;
};


// 전체 음악 검색 (제목, 아티스트, 감정으로)
export const searchMusic = (query: string): MusicItem[] => {
  const searchTerm = query.toLowerCase();
  
  return EMOTION_MUSIC_DATABASE.filter(music =>
    music.title.toLowerCase().includes(searchTerm) ||
    music.artist.toLowerCase().includes(searchTerm) ||
    music.emotions.some(emotion => emotion.toLowerCase().includes(searchTerm))
  );
};


// 특정 감정의 모든 음악 가져오기
export const getMusicByEmotion = (emotion: string): MusicItem[] => {
  return EMOTION_MUSIC_DATABASE.filter(music =>
    music.emotions.some(tag => tag.toLowerCase().includes(emotion.toLowerCase()))
  );
};


// 아티스트별 음악 검색
export const getMusicByArtist = (artistName: string): MusicItem[] => {
  const searchArtist = artistName.toLowerCase();
  
  return EMOTION_MUSIC_DATABASE.filter(music =>
    music.artist.toLowerCase().includes(searchArtist)
  );
};


// 랜덤 음악 가져오기
export const getRandomMusic = (count: number = 3): MusicItem[] => {
  const shuffled = [...EMOTION_MUSIC_DATABASE].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};


// huntrix 음악만 가져오기
export const getHuntrixMusic = (): MusicItem[] => {
  return EMOTION_MUSIC_DATABASE.filter(music => music.id.startsWith('huntrix_'));
};


// 인기 음악 (각 장르별 대표곡)
export const getPopularMusic = (): MusicItem[] => {
  const genres = ['k-pop', 'pop', 'hip-hop', 'r&b', 'electronic'];
  const popular: MusicItem[] = [];
  
  genres.forEach(genre => {
    const genreMusic = EMOTION_MUSIC_DATABASE.filter(music => music.genre === genre);
    if (genreMusic.length > 0) {
      popular.push(genreMusic[0]); // 각 장르의 첫 번째 곡
    }
  });
  
  return popular;
};


// 모든 감정 태그 목록 가져오기
export const getAllEmotions = (): string[] => {
  const allEmotions = new Set<string>();
  
  EMOTION_MUSIC_DATABASE.forEach(music => {
    music.emotions.forEach(emotion => {
      allEmotions.add(emotion);
    });
  });
  
  return Array.from(allEmotions).sort();
};


// 장르별 통계
export const getGenreStats = () => {
  const genreCount: Record<string, number> = {};
  
  EMOTION_MUSIC_DATABASE.forEach(music => {
    if (music.genre) {
      genreCount[music.genre] = (genreCount[music.genre] || 0) + 1;
    }
  });
  
  return genreCount;
};


// 감정별 통계
export const getEmotionStats = () => {
  const emotionCount: Record<string, number> = {};
  
  EMOTION_MUSIC_DATABASE.forEach(music => {
    music.emotions.forEach(emotion => {
      emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
    });
  });
  
  return Object.entries(emotionCount)
    .sort(([,a], [,b]) => b - a) // 빈도순 정렬
    .slice(0, 10); // 상위 10개
};


export default EMOTION_MUSIC_DATABASE;