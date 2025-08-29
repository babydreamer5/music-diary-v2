# 🎵 EPLAY - Emotion-based Music Recommendation App

감정 분석 기반 개인화 음악 추천 웹 애플리케이션

[![TypeScript](https://img.shields.io/badge/TypeScript-98.2%25-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.x-orange)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com/)

📖 프로젝트 소개

EPLAY는 사용자의 감정 상태를 AI로 분석하여 맞춤형 음악을 추천하는 웹 애플리케이션입니다. 
OpenAI GPT-4 API를 활용한 감정 분석과 RAG 시스템을 통해 개인화된 음악 경험을 제공합니다.

✨ 주요 기능

- 🧠 AI 감정 분석: GPT-4 API를 활용한 텍스트 기반 감정 분석
- 🎶 개인화 추천: RAG 시스템 기반 맞춤형 플레이리스트 생성
- 🔗 멀티플랫폼: Spotify, YouTube API 연동
- 📱 반응형 디자인: 모든 디바이스에서 최적화된 사용자 경험
- 🔥 실시간 동기화: Firebase를 통한 실시간 데이터 처리

🛠️ 기술 스택

Frontend
- React 18.2.0 - 사용자 인터페이스
- TypeScript 4.9.0 - 타입 안전성
- Tailwind CSS- 스타일링

Backend & Database
- Firebase - 실시간 데이터베이스 & 인증
- Vercel - 배포 플랫폼

AI & APIs
- OpenAI GPT-4 API - 감정 분석
- Spotify Web API - 음악 데이터
- YouTube Data API - 음악 영상

🚀 시작하기

필수 조건
- Node.js 16.0.0 이상
- npm 또는 yarn

설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/babydreamer5/music-diary-v2.git
cd music-diary-v2
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env` 파일을 생성하고 다음 변수들을 설정하세요:
```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
REACT_APP_FIREBASE_CONFIG=your_firebase_config
```

4. 개발 서버 실행
```bash
npm start
```

5. 빌드
```bash
npm run build
```

📁 프로젝트 구조

```
music-diary-v2/
├── public/                 # 정적 파일
├── src/
│   ├── components/         # React 컴포넌트
│   ├── hooks/             # 커스텀 훅
│   ├── services/          # API 서비스
│   ├── types/             # TypeScript 타입 정의
│   ├── utils/             # 유틸리티 함수
│   └── App.tsx            # 메인 앱 컴포넌트
├── package.json
└── README.md
```

🎯 핵심 기능 상세

 1. 감정 분석 시스템
- 사용자 입력 텍스트를 GPT-4로 분석
- 기쁨, 슬픔, 분노, 평온 등 다양한 감정 분류
- 감정 강도 및 변화 패턴 추적

2. 개인화 추천 엔진
- RAG(Retrieval-Augmented Generation) 시스템 활용
- 사용자 히스토리 기반 학습
- 감정별 최적화된 음악 큐레이션

3. 멀티플랫폼 연동
- Spotify: 트랙 정보, 플레이리스트 생성
- YouTube: 뮤직비디오, 대체 음원 제공
- 크로스 플랫폼 동기화

📊 개발 통계

- 언어 구성: TypeScript (98.2%), CSS (1.1%)
- 총 커밋: 14개
- 개발 기간: 2025년 5월 ~ 8월 (4개월)

🏆 프로젝트 성과

기술적 성취
- ✅ TypeScript 기반 타입 안전한 코드 작성
- ✅ 복잡한 API 통합 (OpenAI + Spotify + YouTube)
- ✅ 실시간 데이터 처리 및 동기화
- ✅ 반응형 웹 디자인 구현

학습 성과
- 🎓 AI API 활용 실무 경험
- 🎓 React + TypeScript 풀스택 개발
- 🎓 Firebase 실시간 데이터베이스 활용
- 🎓 현대적 웹 개발 워크플로우 습득

🔮 향후 계획

- [ ] 음성 입력을 통한 감정 분석 추가
- [ ] 머신러닝 모델을 통한 추천 정확도 향상
- [ ] 소셜 기능 (플레이리스트 공유, 친구 추천)
- [ ] 모바일 앱 버전 개발
- [ ] 의료 분야 적용 (환자 감정 모니터링)

프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

👨‍⚕️ 개발자 소개

산부인과 전문의 & AI 개발자
- 🏥 20년 임상 경험
- 📚 의학박사 (한양대학교)
- 🤖 AI 마스터 과정 수료 (패스트캠퍼스)
- 📝 의료 AI 논문 발표 (Obstetrics & Gynecology Science, JKMA)



*"의료진의 관점에서 AI 기술을 활용하여 사람들의 감정과 음악을 연결하는 새로운 경험을 만들어가고 있습니다."*

