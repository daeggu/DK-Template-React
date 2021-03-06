import React from 'react';
import { StaticRouter, matchPath } from 'react-router';
import Root from 'containers/Root';
import configure from 'store/configure';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import routes from './routes';
import transit from 'transit-immutable-js';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const render = async (ctx) => {
    //url : /posts?page=1  , path : /posts
    const { origin } = ctx;
    const store = configure();
    const promises = [];
    axios.defaults.baseURL = origin;
 
    let { url } = ctx;
    //한글 디코딩
    url = decodeURI(url);
    routes.forEach(
        route => {
            const match = matchPath(url, route);
            if(!match) return ;
            const { component } = route;
            const { preload } = component;
            if(!preload) return ;
            const { params } = match;
            const promise = preload(store.dispatch, params);
            promises.push(promise);
        }
    );

    try{
        await Promise.all(promises);
    }catch(e){
    }

    //NotFound (context={context})
    const context = {};

    const html = await ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url} context={context}>
                <Root />
            </StaticRouter>
        </Provider>
    );

    // isNotFound 값이 true 라면
    if(context.isNotFound) {
        ctx.status = 404; // HTTP 상태를 404로 설정해줍니다
    }
    
    //한번 렌더링 작업 완료된다음에 실행되어야함.. 
    //이작업이 생략되면 메모리 누수현상발생
    const helmet = Helmet.renderStatic();

    //Record의 경우 별도의 방법이 필요함.. 이렇게 전달할경우 정상동작을 위해선 Map으로
    const preloadedState = JSON.stringify(transit.toJSON(store.getState()))
                .replace(/</g, '\\u003c');

    return {
        html,
        preloadedState,
        helmet
    };
}

export default render;