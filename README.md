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

Great you can create then the first commit :

```
g add lerna.json package.json yarn.lock README.md .gitignore packages/.gitkeep
g cz
```

the `g cz` will ask you some question :

- the type of your commit, here chore
- the scope of the commit, that we leave blank
- a short description

## Create sub projects

Great as we have initialize lerna and conventional commits, we can now create our first subprojects.

### with lerna

```
yarn lerna create @test/greetings greetings
```

lerna will the create a sub package with a template

### A more flexible way

You can also create a package manually :

```
cd packages
take server
yarn init -y
```

## release

It's now time to publish our first release.

To do so, you should already push your project to a remte repository as Gitlab, GitHub...

This could be simply done with the command

```
yarn release
```

This script is register in the global`package.json` and do `lerna version --conventional-commits`

The command will create a CHANGELOG file into each packages.

## adding a package as dependency

to add in the package-a a dependency to package-b, you should use the following command

```
yarn lerna add package-b --scope=package-a
```

you can also use the yarn command, but you will need to provide the package-b version :

```sh
# yarn workspace package-a add package-b@^{version}
yarn workspace @test/server add @test/math@^0.0.0
```

or if in the @test/server package

```
yarn add @test/math@^0.0.0
```
