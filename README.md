## ⚡️ License Generator GitHub Action

[![sync2gitee](https://github.com/yi-Xu-0100/license-generator/workflows/sync2gitee/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3Async2gitee)
[![licenseGenerator](https://github.com/yi-Xu-0100/license-generator/workflows/licenseGenerator/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3AlicenseGenerator)
[![Github last commit](https://img.shields.io/github/last-commit/yi-Xu-0100/license-generator)](https://github.com/yi-Xu-0100/license-generator)
[![Github latest release](https://img.shields.io/github/v/release/yi-Xu-0100/license-generator)](https://github.com/yi-Xu-0100/license-generator/releases)
[![Github license](https://img.shields.io/github/license/yi-Xu-0100/license-generator)](./LICENSE)

A GitHub actions that use default template to generate license.

## 🎨 Table of Contents

- [⚡️ License Generator GitHub Action](#️-license-generator-github-action)
- [🎨 Table of Contents](#-table-of-contents)
- [✅ Support license table](#-support-license-table)
- [🚀 Configuration](#-configuration)
- [📝 Example usage for show license generated](#-example-usage-for-show-license-generated)
- [📝 Use dependabot to keep action up-to-date](#-use-dependabot-to-keep-action-up-to-date)
- [🔊 CHANGELOG](#-changelog)
- [📄 LICENSE](#-license)

## ✅ Support license table

| License                                                               |                            Configuration                            | Build                                                                                                                                                                                               |
| :-------------------------------------------------------------------- | :-----------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MIT](https://choosealicense.com/licenses/mit/)                       |          [path, year, author](./.github/workflows/MIT.yml)          | [![MIT](https://github.com/yi-Xu-0100/license-generator/workflows/MIT/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3AMIT)                                     |
| [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)         |     [path, year, author, work](./.github/workflows/CC0-1.0.yml)     | [![CC0-1.0](https://github.com/yi-Xu-0100/license-generator/workflows/CC0-1.0/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3ACC0-1.0)                         |
| [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)             |    [path, year, author, work](./.github/workflows/CC-BY-4.0.yml)    | [![CC-BY-4.0](https://github.com/yi-Xu-0100/license-generator/workflows/CC-BY-4.0/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3ACC-BY-4.0)                   |
| [CC-BY-NC-4.0](http://creativecommons.org/licenses/by-nc/4.0/)        |  [path, year, author, work](./.github/workflows/CC-BY-NC-4.0.yml)   | [![CC-BY-NC-4.0](https://github.com/yi-Xu-0100/license-generator/workflows/CC-BY-NC-4.0/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3ACC-BY-NC-4.0)          |
| [CC-BY-ND-4.0](http://creativecommons.org/licenses/by-nd/4.0/)        |  [path, year, author, work](./.github/workflows/CC-BY-ND-4.0.yml)   | [![CC-BY-ND-4.0](https://github.com/yi-Xu-0100/license-generator/workflows/CC-BY-ND-4.0/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3ACC-BY-ND-4.0)          |
| [CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/)        |  [path, year, author, work](./.github/workflows/CC-BY-SA-4.0.yml)   | [![CC-BY-SA-4.0](https://github.com/yi-Xu-0100/license-generator/workflows/CC-BY-SA-4.0/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3ACC-BY-SA-4.0)          |
| [CC-BY-NC-ND-4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/)  | [path, year, author, work](./.github/workflows/CC-BY-NC-ND-4.0.yml) | [![CC-BY-NC-ND-4.0](https://github.com/yi-Xu-0100/license-generator/workflows/CC-BY-NC-ND-4.0/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3ACC-BY-NC-ND-4.0) |
| [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) | [path, year, author, work](./.github/workflows/CC-BY-NC-SA-4.0.yml) | [![CC-BY-NC-SA-4.0](https://github.com/yi-Xu-0100/license-generator/workflows/CC-BY-NC-SA-4.0/badge.svg)](https://github.com/yi-Xu-0100/license-generator/actions?query=workflow%3ACC-BY-NC-SA-4.0) |

## 🚀 Configuration

```yaml
inputs:
  path:
    description: 'Set up the path of license.'
    required: false
    default: LICENSE
  type:
    description: 'Set up the type of license.'
    required: false
    default: MIT
  year:
    description: 'Set up the year when to since from of license.'
    required: false
    default: none
  author:
    description: 'Set up the author of license.'
    required: false
    default: ${{ github.actor }}
  work:
    description: 'Set up the work name of license.'
    required: false
    default: ${{ github.repository }}
```

## 📝 Example usage for show license generated

This file is build in `./github/workflows/licenseGenerator.yml` to keep license up-to-date every month.

```yaml
name: licenseGenerator
on:
  schedule:
    - cron: '1 1 1 * *'

jobs:
  run:
    name: Generate License
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2.3.3

      - name: Generate License
        uses: yi-Xu-0100/license-generator@v0.0.1
        with:
          path: LICENSE
          type: MIT
          year: 2020
          author: yi_Xu

      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v3.4.0
        with:
          commit-message: Update LICENSE
          branch: update-license-patch
          delete-branch: true
          title: '[action] Update LICENSE'
          body: |
            Update LICENSE

            - LICENSE generate with [license-generator][0]
            - Auto-generated by [create-pull-request][1]

            [0]: https://github.com/yi-Xu-0100/license-generator
            [1]: https://github.com/peter-evans/create-pull-request

          labels: |
            LICENSE
            automated pr
            GitHub action
```

## 📝 Use dependabot to keep action up-to-date

This file is build in `./github/dependabot.yml` to keep action up-to-date.

```yaml
version: 2
updates:
  # Maintain dependencies for GitHub Actions
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'daily'
```

## 🔊 CHANGELOG

- [CHANGELOG](./CHANGELOG.md)

## 📄 LICENSE

- [MIT](./LICENSE)
