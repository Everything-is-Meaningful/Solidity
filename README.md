# React for Beginners

## Git Commit Message Style Guide

Udacity의 Git Commit Message Style Guide 기반으로 작성합니다.

> Udacity(유다시티): 우리나라의 패스트캠퍼스와 같은 미국의 온라인 강의를 제공하는 영리 교육 기관

```
<type>: <subject>

<body> (optional)

<footer> (optional)
```

다음과 같이 작성해 주세요.

```
feat: 화면 레이아웃 구성 (O)
feat: 화면 레이아웃 구성. (X) // 마침표는 생략해 주세요.
feat: 화면 레이아웃을 구성했다. (X) // 제목은 명령조로 작성해 주세요.
feat: 화면 레이아웃을 구성하려고 하는데 내용이 많아서 우선 1차 커밋하고 나중에 2차 커밋 예정 (X) // 50자 이내로 작성해 주세요.
```

설명이 필요하다면 본문에 작성해 주세요.

```
feat: 화면 레이아웃 구성

- Intro
- Dashboard
```

* feat - A new feature
* fix - A bug fix
* docs - Documentation only changes
* style - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* refactor - A code change that neither fixes a bug nor adds a feature
* perf - A code change that improves performance
* test - Adding missing tests or correcting exisiting tests
* build - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* ci - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* chore - Other changes that don’t modify src of test files
* revert - Reverts a previous commit
