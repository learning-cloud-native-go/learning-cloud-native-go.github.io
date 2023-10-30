---
title: Building a Dockerized RESTful API application in Go
slug: building-a-dockerized-restful-api-application-in-go
---

## 👨‍🏫 In this series...

In this series, we build a Dockerized Go RESTful API for a bookshelf with these steps:

- Create a basic server using Go's `net/http` package and Dockerize it.
- Add the database, SQL migration files, and create the `migrate` app to run these migration files.
- Implement dynamic application configurations via environment variables.
- Integrate Chi, add initial API routes, and generate OpenAPI specifications.
- Integrate GORM, implement repository functions with tests, and invoke repository from the handlers.
- Enhance error handling and integrate Validator v10 for form validations.
- Implement error logs and request logs via Zerolog.


## 📦 The codebase

The completed API application supports the following API endpoints.

| Name        | HTTP Method | Route          |
|-------------|-------------|----------------|
| Health      | GET         | /livez         |
|             |             |                |
| List Books  | GET         | /v1/books      |
| Create Book | POST        | /v1/books      |
| Read Book   | GET         | /v1/books/{id} |
| Update Book | PUT         | /v1/books/{id} |
| Delete Book | DELETE      | /v1/books/{id} |

The sourcecode of the completed project can be found in [learning-cloud-native-go/myapp](http://github.com/learning-cloud-native-go/myapp) GitHub repository.

OK, Let's get it started!