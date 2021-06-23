<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
> ## NestJs Tutorial

> ### 준비 사항 (클릭 시 링크 이동)

- [`insomnia`](https://insomnia.rest/pricing) 설치
- [`Postgresql`](https://www.postgresql.org/download/) 설치
- [`Postico`](https://eggerapps.at/postico/) 설치

<hr/>

- npm module
- `$ npm i -g @nestjs/cli`  

> ### 명령어 

`nest new [project_name] ` : generate new nest project

`nest g co contacts` |
`Modules`  모듈은 Nest 에서 가장 기본이 되는 구성요소, 하나의 어플리케이션은 여러 모듈의 조합으로 이뤄진다.

`nest g mo contacts` |
`Controllers`  HTTP Method 요청 혹은 특정 요청에 따라 알맞은 응답 (routing)

`nest g s contacts` |
`Service` 컨트롤러에서 받은 요청을 실제로 실행하는 구현부


`npm run start:dev`

> ## Module

- module: Controller, Provider 세팅, root module, 장고의 APP 개념으로 하나의 application 을 의미
- app.module 은 모든 modules 의 루트 모듈이 된다.

> ## Controller

`@Controller('movies')` : /movies 가 엔트리 포인트가 된다.
- controller: 요청과 응답 담당, url 을 가져오고 (Provider 의)함수를 매핑

> ## Service

- service: 서비스 레이어, 화면상에 보여지는 로직 작성


> ## NestJs DB connection

- `$ yarn add @nestjs/typeorm typeorm pg`

````json
// ormconfig.json 
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "test",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}
````

```javascript
// app.module
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TypeOrmModule.forRoot(), ContactsModule],
})
```
run server 후 db connection 확인
- PostgreSql, postico 설치 후 실행해야 한다.



- Entity 파일에 어노테이션 attatch
- @Entity, @PrimaryGeneratedColumn(), @Column
- `Entity` : 엔티티의 필드와 타입 지정 -> service 레이어에서 DB와 트랜잭션 발생할 때 사용된다.


````javascript
@Module({
  imports: [TypeOrmModule.forFeature([Entity이름])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
````


앱 서비스에서 생성자에 DB repository 주입: `@InjectRepository`

```javascript
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}
```
