# Learning Cloud Native Go

This website is built using [Hugo](https://gohugo.io/) and [Docura](https://docura.github.io/).

## Local setup
- [Install the extended version of Hugo](https://gohugo.io/getting-started/installing/)
- Clone the repository and start Hugo server
    ```
    $ git clone --depth 1 https://github.com/learning-cloud-native-go/site.git
    $ cd site
    $ git submodule update --init --recursive
    $ git submodule update --remote
    $ hugo server
    ```