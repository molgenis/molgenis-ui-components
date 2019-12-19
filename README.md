# Molgenis ui components

## Components

[ToastComponent](docs/ToastComponent.md)

## Console commands

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

When you want to run saucelabs locally please download the proxy client from: https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Version+4.5.0

Then run the deamon and keep it alive:

```
(nohup) sc -u username -k key &
```

In another or the same terminal you can execute the tests:

```
yarn test:e2e --env 'saucelabs.chrome'
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
