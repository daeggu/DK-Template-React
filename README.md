
# DK Template - Free Blog Template(React) 

**DK(β)** shows perfect **DK(β) Style** on any size screen through **reactive web** design.

![main View](https://user-images.githubusercontent.com/14367158/36070355-f3fff32a-0f3b-11e8-9537-ea22c2388683.png)

## Demo
If you want to try all of the features, download the source and run it as koa server.(Backend)

 - http://dk-blog-template.surge.sh/ (Client rendering only)
 - Responsive web tester : http://troy.labs.daum.net/
 
## Dependency
 
**Frontend**
 - immutable
 - ignore-loader --dev
 - react-router-dom, 
 - react-router-server, 
 - redux-devtools-extension
 - redux, react-redux, redux-actions, redux-pender

**Design**
 - sass-loader, node-sass
 - classnames
 - open-color
 - include-media
 - react-icons

**Backend**
 - koa, koa-static
 - dotenv
 - nodemon
 - serialize-javascript

 ## Check (code split & server side rendering)

 1. Install dependencies (Both frontend, backend)
```sh
frontend> yarn
backend> yarn
```
 2. build files
 ```sh
frontend> yarn build        - copy to backend/build/
frontend> yarn build:server - copy to backend/src/render/build/
```
 3. start server
 ```sh
backend> yarn start 
```
4. check it out
```sh
http://localhost:3001/
```