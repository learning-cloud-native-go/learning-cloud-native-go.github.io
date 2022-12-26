# Learning Cloud Native Go

This website is built using [Hugo](https://gohugo.io/) and [Docura](https://docura.github.io/).

## Local setup
- [Install the extended version of Hugo](https://gohugo.io/getting-started/installing/)
- Clone the repository and start Hugo server
    ```
    $ git clone --depth 1 https://github.com/learning-cloud-native-go/site.git
    $ cd site
    $ git submodule update --init --recursive
    $ hugo server
    ```

## Content
### Building a Dockerized RESTful API application in Go
* [Creating a new Go project](content/en/docs/v1.a1.creating-a-new-go-project.md)
* [Adding initial HTTP server](content/en/docs/v1.a2.adding-initial-http-server.md)
* [Adding initial Docker files](content/en/docs/v1.a3.adding-initial-docker-files.md)
* [Adding initial configurations](content/en/docs/v1.a4.adding-initial-configurations.md)
* [Adding Chi router](content/en/docs/v1.a5.adding-chi-router.md)
* [Adding Zerolog logger](content/en/docs/v1.a6.adding-zerolog-logger.md)
* [Adding DB docker file](content/en/docs/v1.a7.adding-db-docker-file.md)
* [Adding initial database migrations](content/en/docs/v1.a8.adding-initial-database-migrations.md)
* [Adding GORM](content/en/docs/v1.a9.adding-gorm.md)
* [Adding initial books API routes](content/en/docs/v1.a10.adding-initial-books-api-routes.md)
* [Implementing RESTful handlers](content/en/docs/v1.a11.implementing-restful-handlers.md)
* [Adding Validator.v9](content/en/docs/v1.a12.adding-validator-v9.md)
