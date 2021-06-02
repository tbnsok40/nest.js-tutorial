
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

- transform : true -> request의 id(string) 을 자동으로 number type 으로 변환시켜준다.
- nest js 는 타입을 받아서 자동으로 변환시켜준다,. thanks to validation pipe, and thanks to framework.

- imseonghu@imseonghuui-MacBookPro hi-nest % npm i @nestjs/mapped-types
- imseonghu@imseonghuui-MacBookPro hi-nest % npm i class-validator class-transformer

- // PartialType needs basit data type in this case it is CreateMovieDto

- 유효성 검사를 따로 할 필요가 없다. 큰 장점임.

