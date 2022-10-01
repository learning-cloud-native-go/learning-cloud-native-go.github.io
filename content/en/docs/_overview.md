---
title: Overview
url: "docs"
aliases:
- "/docs/overview"
---

Cloud Native Application Development is a one way of speeding up building web applications, using micro-services, containers and orchestration tools. First, let’s see what is a cloud and what cloud native means.

## What is Cloud Native?
There are many definitions for cloud and cloud native architecture. First let’s check the definitions given by [RedHat](https://www.redhat.com/) via their [Understanding cloud computing](https://www.redhat.com/en/topics/cloud) and [Understanding cloud-native applications](https://www.redhat.com/en/topics/cloud-native-apps) articles.

[📖](https://www.redhat.com/en/topics/cloud) Clouds are **pools of virtual resources** (such as raw processing power, storage, or cloud-based applications) orchestrated by management and automation software so they can be accessed by users on-demand through self-service portals supported by automatic scaling and dynamic resource allocation.

[📖](https://www.redhat.com/en/topics/cloud-native-apps) Cloud native applications are a **collection of small, independent and loosely coupled services** which are specifically designed to provide **a fast and consistent development and automated management experience** across private, public, and hybrid clouds.

I think, now you are quite clear about cloud and cloud native applications. The definition provided by [Cloud Native Computing Foundation](https://www.cncf.io/), explains that how Cloud native applications achieve a fast and consistent development.

[📖](https://www.cncf.io/) Cloud native computing uses an open source software stack to deploy applications as **microservices**, packaging each part into its own **container**, and dynamically **orchestrating** those containers **to optimize resource utilization**. Cloud native technologies enable software developers to build great products faster.

> 💯 Explaining the concepts behind cloud native architecture is beyond the purpose of this. So, for more details, I would like to highly recommend you to read the first chapter of [Cloud Native DevOps with Kubernetes](https://www.amazon.com/Cloud-Native-DevOps-Kubernetes-Applications/dp/1492040762) which is written by [John Arundel](https://twitter.com/bitfield) and [Justin Domingus](https://twitter.com/JustinDomingus). You can get this as a free e-book via [NGINX resources](https://www.nginx.com/resources/library/cloud-native-devops-with-kubernetes/).

## The First Step

This is the very beginning of this project. So, as the first step, we are going to discuss about **"How to build a Dockerized RESTful API application using Go"**. In the future discussions, we will discuss about [Kubernetes](https://kubernetes.io/) and how to deploy our application in a cloud environment.