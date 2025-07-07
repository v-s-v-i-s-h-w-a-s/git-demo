# Introduction to GitHub and GitHub Actions

This README provides a foundational understanding of **GitHub**, **GitHub Actions**, and how they work together to enable **CI/CD automation**. It also compares **GitHub Actions** with **Jenkins**, a popular CI/CD alternative.

---

## What is GitHub?

**GitHub** is a web-based platform for **version control**, **code collaboration**, and **project management**, built around the **Git** version control system.

### Key Features of GitHub:

* Repositories to host code and track its history
* Branching and Pull Requests for collaboration
* Code reviews and discussions
* Releases, issues, and project boards
* Role-based access control and permissions
* Integration with CI/CD tools like **GitHub Actions**

---

## What is GitHub Actions?

**GitHub Actions** is GitHub’s built-in **CI/CD platform** that allows you to **automate workflows** like:

* Running unit tests when code is pushed
* Building applications
* Deploying code to production
* Performing security scans
* Sending notifications

---

## How GitHub Actions Work

GitHub Actions use **YAML-based workflow files** stored in `.github/workflows/`. These files define:

* **Triggers** (e.g., push, pull request)
* **Jobs** (e.g., linting, testing, build, deploy)
* **Steps** (e.g., install dependencies, run tests)
* **Runners** (the machines that execute workflows)

### Basic Building Blocks

| Term       | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `workflow` | Entire automation process                                         |
| `job`      | A group of steps that run in the same runner                      |
| `step`     | Individual tasks (e.g., `npm install`, `npm test`)                |
| `runner`   | Virtual machine (Ubuntu, Windows, macOS) where jobs execute       |
| `action`   | Reusable packaged functionality (e.g., checkout code, setup Node) |
| `artifact` | Files created during jobs (e.g., build output, test coverage)     |

---

### CI/CD Pipeline Example

```yaml
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build app
        run: npm run build
```

This workflow:

* Runs on every push to the `main` branch
* Installs dependencies
* Runs tests
* Builds the application

---
# CI/CD Pipeline: GitHub Actions vs Jenkins

A **side-by-side comparison** of how a basic CI/CD pipeline is written and executed in **GitHub Actions** and **Jenkins**.

## Scenario

We’ll create a simple CI/CD pipeline that:

1. Triggers on code push
2. Installs dependencies
3. Runs linting
4. Runs tests
5. Deploys (simulated or real)

---

## Project Setup

* **Language:** Python
* **Package Manager:** pip
* **Lint Tool:** flake8
* **Test Tool:** pytest
* **Deploy Step:** Print deployment command or simulate deploy

---

## CI/CD Pipeline Comparison (Code + Explanation)

| Step                     | GitHub Actions (Code)                                                               | Jenkins (Code)                                                                         | Explanation                                                                                      |                                         |
| ------------------------ | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| **Trigger**              | `yaml\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n` | `groovy\npipeline {\n  agent any\n  stages { ... }\n}\n`                               | GitHub uses `on:` to define triggers. Jenkins defines them via webhook or polling configuration. |                                         |
| **Checkout Code**        | `yaml\n- uses: actions/checkout@v4\n`                                               | `groovy\ncheckout scm\n`                                                               | Both pull code from the source control system.                                                   |                                         |
| **Set Up Python**        | `yaml\n- uses: actions/setup-python@v5\n  with:\n    python-version: '3.11'\n`      | `groovy\nsh 'pyenv install -s $PYTHON_VERSION'\nsh 'pyenv global $PYTHON_VERSION'\n`   | GitHub uses a reusable action. Jenkins installs manually using shell.                            |                                         |
| **Install Dependencies** | \`\`\`yaml\n- run:                                                                  | \n    python -m pip install --upgrade pip\n    pip install -r requirements.txt\n\`\`\` | `groovy\nsh 'python -m pip install --upgrade pip'\nsh 'pip install -r requirements.txt'\n`       | Both install Python packages using pip. |
| **Linting**              | `yaml\n- run: flake8 .\n`                                                           | `groovy\nsh 'flake8 .'\n`                                                              | Linting ensures code quality and formatting compliance.                                          |                                         |
| **Run Tests**            | `yaml\n- run: pytest\n`                                                             | `groovy\nsh 'pytest'\n`                                                                | Executes tests written in pytest.                                                                |                                         |
| **Deploy (Simulated)**   | `yaml\n- run: echo "Deploying..."\n  if: github.ref == 'refs/heads/main'\n`         | `groovy\nwhen { branch 'main' }\nsteps { echo 'Deploying application...' }\n`          | Simulates deployment for main branch. Conditional in both systems.                               |                                         |

---

## Comparison Summary

| Feature               | GitHub Actions                              | Jenkins                                     |
| --------------------- | ------------------------------------------- | ------------------------------------------- |
| **Hosted By**         | GitHub                                      | Self-hosted or via Jenkins server           |
| **Pipeline Format**   | YAML (`.yml`)                               | Groovy-like syntax (`Jenkinsfile`)          |
| **Trigger Mechanism** | `on: push`, `on: pull_request`              | `when { branch 'main' }`                    |
| **Environment Setup** | `uses: actions/setup-python`                | Manual with `pyenv` or OS-installed Python  |
| **Steps Declaration** | Under `jobs > steps`                        | Under `stages > stage > steps`              |
| **Secrets Handling**  | GitHub Secrets                              | Jenkins Credentials plugin                  |
| **Integration**       | Tightly integrated into GitHub repositories | Integrates with any SCM (Git, GitHub, etc.) |
| **UI Feedback**       | GitHub Actions UI in PRs and commits        | Jenkins UI (dashboard and job history)      |

---

## GitHub Actions vs Jenkins

| Feature / Aspect         | GitHub Actions                              | Jenkins                                       |
| ------------------------ | ------------------------------------------- | --------------------------------------------- |
| **Setup**            | Built-in to GitHub, no server needed        | Requires separate server installation         |
| **UI & Integration**  | Native GitHub UI                            | Web UI with many plugins                      |
| **Configuration**     | YAML file in the repository                 | Groovy or scripted in Jenkinsfiles            |
| **Triggering Events** | GitHub-native events (push, PR, etc.)       | SCM hooks or cron jobs                        |
| **Plugins / Actions** | Marketplace for reusable actions            | Massive plugin ecosystem                      |
| **Runners / Agents**  | GitHub-hosted or self-hosted runners        | Self-hosted agents required                   |
| **Ease of Use**       | Beginner-friendly, integrates out of box    | Requires setup, more flexible for enterprises |
| **Cost for CI/CD**    | Free tier available (2,000 mins/month)      | Free and open source (infrastructure needed)  |
| **Cloud Integration** | Seamless with GitHub, supports cloud deploy | Supports multiple cloud providers             |
| **Security Model**    | GitHub permissions + secrets                | Complex roles; sensitive to misconfiguration  |

---

## Summary

* **GitHub** helps developers collaborate on code.
* **GitHub Actions** automate workflows directly in your GitHub repo.
* Compared to **Jenkins**, GitHub Actions offer a cloud-native, beginner-friendly approach with deep GitHub integration, while Jenkins offers flexibility and enterprise-level extensibility with more setup.

---

## Additional Learning Resources

* [GitHub Docs](https://docs.github.com/en)
* [GitHub Actions Documentation](https://docs.github.com/en/actions)
* [Jenkins Documentation](https://www.jenkins.io/doc/)
* [CI/CD Concepts](https://www.redhat.com/en/topics/devops/what-is-ci-cd)

---

> Recommended for student labs, hackathons, and professional onboarding documentation.
