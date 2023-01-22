---
title: Building a Dockerized RESTful API application in Go
slug: building-a-dockerized-restful-api-application-in-go
---

## 👨‍🏫 In this section...

In this section, we build a Dockerized RESTful API application in Go for a simple bookshelf with the following steps:

- We'll start from the `net/http` package of the Go standard library, create a basic server app, and Dockerize it.
- Then, we'll add a database, create DB migration SQL files, and create the `migrate` app to run these migration files.
- Next, we'll add dynamic application configurations via environment variables.
- After that, we'll integrate Chi and add API routes and middleware.
- Then, we'll integrate Zerolog and implement request logs.
- Next, we'll integrate Gorm and add repository functions.
- Then, we'll complete our RESTful APIs.
- Later on, we'll integrate Validator v10 and add form validations.


## 📦 The codebase

The completed API application supports the following API endpoints.

| Name        | HTTP Method | Route              |
|-------------|-------------|--------------------|
| Health      | GET         | /livez             |
|             |             |                    |
| List Books  | GET         | /api/v1/books      |
| Create Book | POST        | /api/v1/books      |
| Read Book   | GET         | /api/v1/books/{id} |
| Update Book | PUT         | /api/v1/books/{id} |
| Delete Book | DELETE      | /api/v1/books/{id} |

The sourcecode of the completed project can be found in [learning-cloud-native-go/myapp](http://github.com/learning-cloud-native-go/myapp) GitHub repository.

OK, Let's get it started!