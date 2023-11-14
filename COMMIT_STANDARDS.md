# Commit Standards

## Branches

- **dev** -> **dont touch** this branch (at least for now), we would be using this branch to test the whole application before the application is moved to production branch
- **main** -> **dont touch** this branch, this is what is running in production.

#### Note: On no occasion should anyone push their contributions to the `dev` or `main` branches while we are still working on the project, we would only merge tested and verified contributions to those two branches

## Contributions

This project is open to contributions, but it is recommended to create an issue or reply in a comment to let us know what you are working on first, that way we don't overwrite each other.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/abuhanaan/uptick-capstone-FE`.

2. Open your terminal and checkout to the dev by running the following commands

- fetch all remote branches: `git fetch`
- switch to the dev branch: `git checkout dev`

3. Update the dev branch with pull origin `git pull origin dev`
4. While on the dev branch, create a new branch for the task you were assigned to, off the `dev` branch, eg : `git checkout -b homepage-header`
5. After making your changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull upstream dev`.
8. Push changes to your new branch, run `git push -u origin homepage-header`.
9. Create a pull request and ensure it points to the `dev` branch base/destination branch, **and not `main`**.
10. Ensure to describe your pull request.
11. > If your pull request is connected to a particular issue, do well to connect your PR with the issue by passing along the issue number in your PR desription.

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify backend, frontend or test files                                             |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := **chore** is used because the commit didn't make any changes to the backend, frontend or test folders in any way.
- `feat: Added plugin info endpoints` := **feat** is used here because the feature was non-existent before the commit.
