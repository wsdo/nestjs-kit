#### nestjs 脚手架


#### 使用方式

```
yarn

npm run start:dev
```

#### 访问
http://localhost:3008


#### api

##### 注册
> POST: http://localhost:3008/api/auth/register

参数
```
{
  "email": "wsd312@163.com",
  "name": "stark",
  "password": "wsd123"
}
```

##### 登录
> POST: http://localhost:3008/api/auth/login

参数
```
{
  "email": "wsd312@163.com",
  "password": "wsd123"
}
```
返回
```
{
    "expiresIn": "3600",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTY2NTQ0MTI4LCJleHAiOjE1NjY1NDc3Mjh9.WULZw705ocEB2PYicyF4U_SJ4tqD61rd57d8sjUM6eI",
    "user": {
        "id": 3,
        "firstName": "stark",
        "lastName": "wang",
        "email": "wsd312@163.com",
        "password": "aed2521bfd53b1d64ece64d82e83630ef2ecd235df42636f6cdb6083867f95e5"
    }
}
```


##### 获取登录的用户信息
> url: http://localhost:3008/api/auth/me


>参数
> hader:
> Authorization : Bearer accessToken

```
{"id":1,"name":"stark","email":"wsd312@163.com","level":10}
```

#### 实现
* [x] jwt 权限
* [x] 用户注册，登录
* [x] mysql
* [x] 环境配置
* [] rbac 角色权限管理
* [ ] docker
