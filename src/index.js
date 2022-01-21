const React = require('react');
// const  ReactDom = require('react-dom');
// import React from 'react';

require('./index.css');

// function useDocument() {
//     const [doc, useDoc] = React.useState(null);

//     React.useEffect(() => {
//         useDoc(document);
//     }, []);

//     return doc;
// }


function Main() {
    let userInfo = {};
    // const currentDocument = useDocument();
    // if (currentDocument) {
    //     const userInfoBase64 = currentDocument.head.querySelector('meta[name=USER_INFO]').content;
    //     userInfo = JSON.parse(atob(userInfoBase64));
    // }

    // React.useEffect(() => {
    //     console.log('----rneder----')
    // }, [])

    return <div className="color">
        <h1>User: {userInfo.name}</h1>
        <h2>Age: {userInfo.age}</h2>
    </div>
}


// ReactDom.render(
//     <Main />,
//     document.getElementById('root')
// );

module.exports = <Main/>;

