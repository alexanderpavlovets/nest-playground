# NestJS Playground

Init project by nest CLI:
```
npm i -g @nestjs/cli
nest new project-name
```


Start created project
```
npm run start:dev
```

Use CLI for generating new instances:
```
nest generate --help
nest generate controller controllerName
nest g co some-name
```

### dto - data transfer object
Suggested by Nest way to pass data. See "dto" folder in products

### Segregation
- controllers are controllers :) Handle the requests
- services - storage of logic 
- dto - data transfer object - interface for data within the app (req, res, db)
