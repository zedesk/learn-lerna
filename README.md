# Monorepo with Lerna

We will start here fronm scratch

create a `package.json` file

the add Lerna as devDependencies.

```
yarn add -D -W lerna
```

As in the `package.json` we use yarn workspaces, when installing a
devDependency on the root you should addthe `-W` option.

Initialize lerna :

```
yarn lerna init
```

it will create a `lerna.json` file.

by default lerna will manage packages in a `packages` folder, where you can put the different sub projects.

## using conventional commits

```
yarn add -D -W commitizen
```

initialize conventional-commits

create a temporary .yarnrc file

```
--*.ignore-workspace-root-check true
```

```
yarn commitizen init cs-conventional-changelog -D -E
```

this could take a while

then you can delete the .yarnrc file
