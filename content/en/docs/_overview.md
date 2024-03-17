---
title: Overview
url: "docs/overview"
aliases:
  - "/docs"
---


## About me

> 🧑‍💻 I am an expat working in Singapore as a Go Backend and DevOps Engineer. Feel free to reach out if you find any mistakes or anything that needs to be changed, including spelling or grammar errors. Alternatively, you can create a pull request, open an issue, or [share your awesome ideas in this gist](https://gist.github.com/dumindu/153b6cf8a346d3a1aad51e17291d4dda). Good luck with learning cloud native Go!

[![learning-cloud-native-go/myapp](https://img.shields.io/github/stars/learning-cloud-native-go/myapp?style=for-the-badge&logo=go&logoColor=333333&label=learning-cloud-native-go/myapp&labelColor=f9f9f9&color=00ADD8)](https://github.com/learning-cloud-native-go/myapp)
[![learning-cloud-native-go.github.io](https://img.shields.io/github/stars/learning-cloud-native-go/learning-cloud-native-go.github.io?style=for-the-badge&logo=go&logoColor=333333&label=learning-cloud-native-go.github.io&labelColor=f9f9f9&color=00ADD8)](https://github.com/learning-cloud-native-go/learning-cloud-native-go.github.io)
[![learning-rust.github.io](https://img.shields.io/github/stars/learning-rust/learning-rust.github.io?style=for-the-badge&logo=rust&label=learning-rust.github.io&logoColor=333333&labelColor=f9f9f9&color=F46623)](https://learning-rust.github.io)

[![github.com](https://img.shields.io/badge/dumindu-866ee7?style=for-the-badge&logo=GitHub&logoColor=333333&labelColor=f9f9f9)](https://github.com/dumindu)
[![buymeacoffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-dumindu-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=333333&labelColor=f9f9f9)](https://www.buymeacoffee.com/dumindu)


## Cloud Native Applications

> ☁️ Clouds are **virtual resource pools** (storage, raw processing power, or cloud-based applications) that **users can access on-demand**. Cloud native is all about designing apps for cloud use. A cloud native application is a **collection of small, loosely coupled, independent services** (microservices), specifically **designed to deploy in its own container** across private, public, and hybrid clouds.

Cloud computing is a method of delivering technology resources, such as storage, servers, databases, networking, software, and intelligence over the internet (“the cloud”). Instead of owning, maintaining, and upgrading their physical data centers and servers, organizations can access these services on an as-needed basis and pay just for what they use.

Cloud native application development is a method of building apps specifically tailored for cloud computing environments. Instead of being designed to run on a single, in-house server, cloud native applications are designed to live on the cloud, taking advantage of the different cloud technologies. They are built using services and technologies that are fully managed and dynamically scalable through API calls. They enable developers to deliver faster and predictably, regardless of the scale, offering flexibility, robustness, rapid development and separate concerns.

Cloud native applications often leverage container technologies like Docker, and orchestration tools like Kubernetes, to manage and scale individual service components. A common architectural style for cloud native applications is the Microservices architecture, where the application is divided into a collection of loosely coupled services.

In conclusion, cloud computing and cloud native app development offer businesses more speed, flexibility, and scalability, which leads to cost efficiency, increased productivity, and technology reliability. They also foster innovation and faster time-to-market due to their flexibility and scalability.


## Cloud Native Development Approach

Cloud native development approach brings numerous benefits, but it also requires careful considerations in the following areas:

1. **Architecture**: In cloud native development, applications are often designed using microservices architecture. This involves developing an application as a suite of small services, each running its own process and communicating via lightweight mechanisms such as HTTP/REST with JSON or Protobuf.

2. **DevOps**: A robust DevOps culture is a fundamental part of cloud native app development. This includes continuous integration, delivery, and deployment, as well as monitoring and logging of the applications.

3. **Infrastructure as Code (IaC)**: In a cloud native approach, infrastructure is often defined and managed using machine-readable definition files rather than physical hardware configuration. This practice, known as Infrastructure as Code, can increase efficiency and reduce the chance of human error.

4. **Containers & Orchestration**: Containers are a key component of the cloud native approach, and they need to be effectively managed and orchestrated. Kubernetes has become the de facto standard for container orchestration.

5. **Resilience**: Cloud native applications need to be designed to handle failures gracefully. This could mean implementing practices like circuit breaking, load balancing, and retry logic.

6. **Scalability**: One of the key benefits of cloud native applications is their ability to scale according to demand. It is important to consider how the application will handle increased traffic.

7. **Security**: While a move to the cloud can enhance security, it can also introduce new complexities. Security needs to be considered at all stages of the application lifecycle, from development to deployment.

8. **Automated Testing**: Due to the distributed nature of cloud native apps, testing can become complex. Automated testing strategies, including unit, integration, and end-to-end tests, are crucial.

9. **Monitoring & Observability**: Understanding the state of your application is crucial. Incorporating monitoring, logging, and tracing capabilities into your application helps provide rich, actionable insights.

10. **Vendor Lock-in**: While using managed services can speed up development, it can also lead to vendor lock-in. Be aware of the trade-offs and consider multi-cloud strategies or the use of cloud-agnostic technologies.

By taking these areas into account, you will be better prepared to leverage the advantages of the cloud native development approach while avoiding potential pitfalls.


## About this series
This tutorial series is all about learning Cloud Native Application Development with Go. We'll build web apps fit for the cloud.

As the first step, we are going to discuss "How to build a Dockerized RESTful API application using Go". In the future discussions, we will discuss about [Kubernetes](https://kubernetes.io/) and how to deploy and monitor our application in cloud environments.
