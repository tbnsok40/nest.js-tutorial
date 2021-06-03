
- module: 컨트롤러와 프로바이더 세팅, root module, 장고의 APP 같은 개념
- controller: 컨트롤러, 요청과 응답 담당, url 을 가져오고 함수를 매핑
- service: 서비스 레이어, 화면상에 보여주려는 로직 작성


- 컨트롤러에서 곧 바로 string을 리턴하면 원하는 값을 리턴할 수 있는데, service 가 왜 필요할 까?

Nest는 controller 와 service 를 구분짓고 싶어함
- controller 는 url을 가져오는 역할, service 는 함수를 정의하는 역할

그리고 결국 controller 든 service 든 app.module 에 들어가게 돼 있다. app.module 의 세팅하에 controller, service 역할 분담


### cli tip
- nest => 명령어 확인 가능
- nest generate controller => nest g co

### @Param()
- parameter 의 이름과 타입을 지정할 수 있다 -> 정하도록 강제한다.

search 함수가 get id 함수보다 아래에 있으면, 무슨 오류 발생(nest가 잘못 이해한다.)

@Query, @Param, @Body


- Single response Responsibility

nest g co -> movies : 디렉토리의 이름이 된다.

- parseInt(id) => +id; 이런식으로 해도 string 에서 number 로 바꿀 수 있다.

- 현재 db는 서버가 켜져있는 상태에서만 저장된다.(메모리 상의 db 인 것)

- deleteOne() 메서드, getOne() 메서드를 그대로 끌고 와버리네.

- pipe is like a middleware


> #### class Validator, class Transformer
- npm i class-validator class-transformer
  
- transform : true -> request 의 id(string) 을 자동으로 number type 으로 변환시켜준다.
- nest js 는 타입을 받아서 자동으로 변환시켜준다,. thanks to validation pipe, and thanks to framework.

> #### PartialType validation check
- npm i @nestjs/mapped-types
- PartialType needs basic data type in this case it is CreateMovieDto


- 유효성 검사를 따로 할 필요가 없다. 큰 장점임.

- AppModule 은 AppController 와 AppService 만 가져야 한다.
- 앱을 만들 때 모듈로 분리하는 것이 좋다, import 를 사용하여 필요한 모듈을 가져온다.
- app.module 내부에 import 된 수많은 모듈들이 하나의 모듈로 생성된다. by NestFactory.create(AppModule) in Main.ts

- provider 위치에 MovieService 를 넣어줘야 DI 도 할 수 있다.

- Nest.js 는 express 위에서 실행된다.
- express 를 fastify 로 대체할 수 있다. 2 times faster than express

- jest : JS 를 쉽게 테스트 하는 npm 패키지
- .spec : test 용 파일
- cov: coverage
- e2e: testing a whole system
- unittest: module test

- it: stands for individual test
- unit test 시, service.create()부분을 it()구문 아래로 넣어야한다.

- npm run test:cov, test coverage 를 시각적으로 확인할 수 있다.

- e2e: end to end test. movie 와 관련된 애플리케이션의 모든 부분을 테스트 할 때 필요


- 해당 부분을 e2e test 환경에서도 똑같이 설정해줘야한다. 
- 어플리케이션 환경과 테스트의 환경을 같게 만들어주기 위함. 
 ```typescript
    app.useGlobalPipes(
      new ValidationPipe({
          whitelist: true,
          forbidNonWhitelisted: true,
          transform: true,
        }
      )
    )
```