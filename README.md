# urlvalidator

> URL Validation Service

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Deloying

To deploy to Azure, run `npm run build` and upload zip to Azure. Then run the command `az webapp deployment source config-zip --resource-group urlValidator --name url-validator --src clouddrive/url-validator.zip`

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
