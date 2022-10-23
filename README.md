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
* [Creating a new Go project](content/en/docs/a1.creating-a-new-go-project.md)
* [Adding initial HTTP server](content/en/docs/a2.adding-initial-http-server.md)
* [Adding initial Docker files](content/en/docs/a3.adding-initial-docker-files.md)
* [Adding initial configurations](content/en/docs/a4.adding-initial-configurations.md)
* [Adding Chi router](content/en/docs/a5.adding-chi-router.md)
* [Adding Zerolog logger](content/en/docs/a6.adding-zerolog-logger.md)
* [Adding DB docker file](content/en/docs/a7.adding-db-docker-file.md)
* [Adding initial database migrations](content/en/docs/a8.adding-initial-database-migrations.md)
* [Adding GORM](content/en/docs/a9.adding-gorm.md)
* [Adding initial books API routes](content/en/docs/a10.adding-initial-books-api-routes.md)
* [Implementing RESTful handlers](content/en/docs/a11.implementing-restful-handlers.md)
* [Adding Validator.v9](content/en/docs/a12.adding-validator-v9.md)
