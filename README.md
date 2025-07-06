# Git & GitHub Demo Repository

Welcome to our **Git, GitHub, and GitHub Actions tools setup**!
This repository is designed for **hands-on learning** of version control and CI/CD concepts.

---

## What You'll Learn

- Git fundamentals (`clone`, `commit`, `push`, `pull`)
- GitHub collaboration (`fork`, `pull requests`)
- Branching strategies
- GitHub Actions CI/CD pipelines

---

## Exercises

### Exercise 1: Fork and Clone

1. Fork this repository to your GitHub account.
2. Clone your fork to your local machine:

   ```bash
   git clone https://github.com/YOUR-STUDENT-USERNAME/git-demo-repo.git
   cd git-demo-repo
   ```

3. Add your name to the `contributors.txt` file.
4. Commit and push your changes.
5. Create a pull request back to the original repository.

---

### Exercise 2: Feature Development

1. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Add a new function to `src/utils.js`.
3. Write corresponding tests in `tests/utils.test.js`.
4. Commit and push your branch.
5. Open a pull request describing your feature.

---

### Exercise 3: CI/CD Pipeline

1. Observe the GitHub Actions workflow in `.github/workflows/ci.yml`.
2. Make changes to code and push them to see the CI/CD pipeline in action.
3. Watch automated testing and code quality checks execute.

---

## Project Structure

```
git-demo/
├── README.md
├── package.json
├── src/
│   ├── index.js
│   └── utils.js
├── tests/
│   └── utils.test.js
├── contributors.txt
└── .github/
    └── workflows/
        └── ci.yml
```

---

## Getting Started

### 1. Fork this repository

Click the **Fork** button at the top-right of this page.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/git-demo-repo.git
cd git-demo-repo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run tests

```bash
npm test
```

---

## Contributing

- Add your name to `contributors.txt`.
- Open a pull request with your changes.

---

## License

This project is intended **for educational purposes only**.

---

**Happy Learning!**
