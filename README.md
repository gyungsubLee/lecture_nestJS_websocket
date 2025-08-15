### 환경변수 ( username, password 설정 필요 )

> MONGODB_URL에서도 실제 설정한 값으로 변경해야 합니다

```env
MODE=dev
MONGODB_URL="mongodb://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@localhost:27017/nest?authSource=admin"
MONGODB_USERNAME=
MONGODB_PASSWORD=
```

### 프로젝트 실행

```bash
nest rud start:dev
```
