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
- [🚀 Configuration](#-configuration)
- [📝 Example](#-example)
  - [📝 Example usage for show license generated](#-example-usage-for-show-license-generated)
  - [📝 Use dependabot to keep action up-to-date](#-use-dependabot-to-keep-action-up-to-date)
- [🔊 CHANGELOG](#-changelog)
- [📄 LICENSE](#-license)

## 🚀 Configuration

```yaml
inputs:
  path:
    description: 'Set up a license path'
    required: false
    default: LICENSE
  type:
    description: 'Set up a license type'
    required: false
    default: MIT
  year:
    description: 'Set up a license year'
    required: false
    default: none
  author:
    description: 'Set up a license author'
    required: false
    default: ${{ github.actor }}
```

## 📝 Example

### 📝 Example usage for show license generated

```yaml
name: 'license-generator'
on:
  schedule:
    - cron: '1 1 2 * *'

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
          path: LICENSE.txt
          type: MIT
          year: 2020
          author: yi_Xu

      - name: show License
        run: |
          cat LICENSE.txt
```

### 📝 Use dependabot to keep action up-to-date

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
