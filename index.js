// Plain ol DOM
// let hello = document.createElement('h1');
// hello.textContent = "Hello There";

// jQuery version
// let jqHello = $('<h1>', {
//     text: "Oi! Hello"
// })

// React Version
// Please type this one!
let hello = React.createElement('h1', null, 'hello react!');
ReactDOM.render(hello, document.querySelector('[data-root]'));

