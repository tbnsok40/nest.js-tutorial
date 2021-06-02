
- module: 컨트롤러와 프로바이더 세팅, root module, 장고의 APP 같은 개념
- controller: 컨트롤러, 요청과 응답 담당, url 을 가져오고 함수를 매핑
- service: 서비스 레이어, 화면상에 보여주려는 로직 작성


- 컨트롤러에서 곧 바로 string을 리턴하면 원하는 값을 리턴할 수 있는데, service 가 왜 필요할 까?

Nest는 controller 와 service 를 구분짓고 싶어함
- controller 는 url을 가져오는 역할, service 는 함수를 정의하는 역할

그리고 결국 controller 든 service 든 app.module 에 들어가게 돼 있다. app.module 의 세팅하에 controller, service 역할 분담


