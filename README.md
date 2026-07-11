# 🚀 End-to-End CI/CD & GitOps Pipeline for Spring Boot Application

An end-to-end DevOps project demonstrating how to automate the complete software delivery lifecycle of a Java Spring Boot application using Jenkins, SonarQube, Docker, Kubernetes, and Argo CD on AWS EC2.

---

## 📌 Project Overview

This project implements a complete CI/CD and GitOps workflow that automatically:

- Builds a Spring Boot application
- Runs Maven build and unit tests
- Performs code quality analysis using SonarQube
- Builds and pushes Docker images
- Updates Kubernetes manifests automatically
- Commits deployment changes to GitHub
- Uses Argo CD to synchronize Kubernetes deployments automatically

---

# 🏗️ Architecture

![Architecture](architecture.png)

---

# 🔄 CI/CD Workflow

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ├── Checkout Source Code
    ├── Maven Build & Unit Tests
    ├── SonarQube Analysis
    ├── Docker Image Build
    ├── Push Image to Docker Hub
    ├── Update Kubernetes Manifest
    └── Commit Updated Manifest to GitHub
                     │
                     ▼
              Argo CD Auto Sync
                     │
                     ▼
              Kubernetes Cluster
                     │
                     ▼
              Spring Boot Application
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Java 17 | Backend Development |
| Spring Boot | Web Application |
| Maven | Build Tool |
| Git & GitHub | Source Control |
| Jenkins | Continuous Integration |
| SonarQube | Code Quality Analysis |
| Docker | Containerization |
| Docker Hub | Image Registry |
| Kubernetes (Kind) | Container Orchestration |
| Argo CD | GitOps Continuous Deployment |
| AWS EC2 | Cloud Infrastructure |

---

# ⚙️ Jenkins Pipeline Stages

- ✅ Checkout Source Code
- ✅ Validate Project
- ✅ Maven Build & Unit Test
- ✅ SonarQube Analysis
- ✅ Build Docker Image
- ✅ Push Docker Image
- ✅ Update Kubernetes Manifest
- ✅ Commit Manifest to GitHub
- ✅ Argo CD Auto Deployment

---

# 📂 Project Structure

```
java-maven-sonar-argocd-helm-k8s/
│
├── spring-boot-app/
│   ├── src/
│   ├── Dockerfile
│   ├── Jenkinsfile
│   └── pom.xml
│
├── spring-boot-app-manifests/
│   ├── deployment.yml
│   └── service.yml
│
├── Argo CD/
│   └── argocd-basic.yaml
│
└── README.md
```

---

# 🚀 Features

- End-to-End CI/CD Pipeline
- GitOps Deployment using Argo CD
- Automated Docker Image Versioning
- Static Code Analysis
- Auto Sync
- Self Heal
- Kubernetes Deployment
- AWS Deployment

---

# 📷 Project Screenshots

- Jenkins Pipeline
- SonarQube Analysis
- Argo CD Dashboard
- Kubernetes Pods
- Running Application

---

# 📈 Learning Outcomes

Through this project I gained hands-on experience with:

- CI/CD Pipeline Automation
- GitOps Workflow
- Jenkins Pipeline Development
- Docker Containerization
- Kubernetes Deployment
- Argo CD Synchronization
- AWS EC2 Infrastructure
- DevOps Best Practices

---

# 👨‍💻 Author

**Rishikant Kumar**

- GitHub: https://github.com/rishikant0
- LinkedIn: https:(https://www.linkedin.com/in/rishikant-kumar-aa7bb3314/)

---
