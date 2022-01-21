const express = require('express');
const path = require('path');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const SSR = require('../dist/index-server.js');

const server = (port) => {
    const app = express();

    app.use(express.static('dist'));

    app.get('/view', (req, res) => {
        res.status(200).send(genTemplate())
    })

    app.listen(port, () => {
        console.log('server is runing at:' + port);
    })
}

function genTemplate() {
    const ssrTemplate = ReactDOMServer.renderToString(SSR);
    const userInfo = fs.readFileSync(path.join(__dirname, 'user.json')).toString('base64');
    const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), { encoding: 'utf-8' });

    return template
        .replace('<!-- SSR_PLACEHODER -->', ssrTemplate)
        .replace('<!-- SSR_SERVER_DATA -->', `<meta name="USER_INFO" content="${userInfo}">`)
}

server(3000);