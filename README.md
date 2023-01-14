# Hyperdrive NFT Marketplace

Hyperdrive is an open source, Creator-focused, Layer 2 centric NFT marketplace built and maintained by the community that uses it. It is a project consisting of a Rush monorepo, NextJS micro-frontends, and a shared component library.

<table><tr><td>
<a href="https://rushstack.io/"><img src="https://rushstack.io/images/rushstack.svg" width="300px" /></a>
<p align="center"><a href="https://rushstack.io/">https://rushstack.io/</a></p>
</td></tr></table>

[![Zulip chat room](https://img.shields.io/badge/zulip-join_chat-brightgreen.svg)](https://rushstack.zulipchat.com/) &nbsp; [![Build Status](https://github.com/microsoft/rushstack/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/microsoft/rushstack/actions/workflows/ci.yml?query=branch%3Amain) &nbsp;

The home for various projects maintained by the Rush Stack community, whose mission is to develop reusable tooling
for large scale TypeScript monorepos.

## Getting Started As A Developer

Before continuing further, check out Rush's Prerequisites and Caveats in their [documentation](https://rushjs.io/pages/developer/new_developer/)

Install Rush CLI with `npm install -g @microsoft/rush`

Install all dependencies with `rush install` from repository root directory

## Common Commands

Generally speaking, you should not need to run these commands often, because adding npm packages should generally be a process that is carefully considered and done sparingly. But if you need to add a package, please try to make that its own separate commit with its own separate Pull Request. However in the beginning of this project we plan to try a lot of stuff out and it might be needed to add a package and implement it in the same Pull Request.

### rush update

Remember to run rush update whenever a _package.json_ file has changed. In other words:

- After pulling new changes from git (e.g. git pull)
- After manually editing any project's package.json file in any way
- After editing any common/config files that affect versions (e.g. pnpmfile.js, common-versions.json, etc.)

The rush update operation may change some files under _common/config_. If so, you should commit those changes to Git and include them in your PR. When in doubt, run rush update -- if everything is already up to date, it won't take any time!

What rush update does:

1. Rush checks/applies various policies that sometimes update files under common/config.
2. Rush compares all of your project package.json files against the repository's common shrinkwrap file to see if it's valid.
3. If it's outdated, the package manager updates the shrinkwrap file.
4. Either way, the package manager installs all dependencies into the common/temp/node_modules folder.
5. Finally, Rush constructs a local node_modules folder for each project, by making symlinks into common/temp/node_modules. (This is the same operation as rush link.)

### rush rebuild

Once you've pulled the latest changes, it's time to compile everything. `rush rebuild` does a full, clean build of every project in the repository.

If your toolchain supports incremental builds, you can also use `rush build` to build only the projects that have changed.

## Documentation Links

- [What is Rush Stack?](https://rushstack.io/) - learn about the mission behind these projects
- [API reference](https://api.rushstack.io/) - browse API documentation for NPM packages
- [Zulip chat room](https://rushstack.zulipchat.com/) - chat with the Rush Stack developers
- [Rush](https://rushjs.io/) - a build orchestrator for large scale TypeScript monorepos
- [API Extractor](https://api-extractor.com/) - create .d.ts rollups and track your TypeScript API signatures
- [API Documenter](https://api-extractor.com/pages/setup/generating_docs/) - use TSDoc comments to publish an API documentation website

## Related Repos

These GitHub repositories provide supplementary resources for Rush Stack:

- [rushstack-samples](https://github.com/microsoft/rushstack-samples) - a monoprepo with sample projects that
  illustrate various project setups, including how to use Heft with other popular JavaScript frameworks
- [rush-example](https://github.com/microsoft/rush-example) - a minimal Rush repo that demonstrates the fundamentals
  of Rush without relying on any other Rush Stack tooling
- [rushstack-legacy](https://github.com/microsoft/rushstack-legacy) - older projects that are still maintained
  but no longer actively developed
