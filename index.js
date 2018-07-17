// Plain ol DOM
// let hello = document.createElement('h1');
// hello.textContent = "Hello There";

// jQuery version
// let jqHello = $('<h1>', {
//     text: "Oi! Hello"
// })

// React Version
// Please type this one!

const h = React.createElement;

let kebabs = [
    'chicken hearts',
    'marinated mushrooms',
    'beef'
];

// let items = kebabs.map((k) => {
//     let vItem = h('li', null, k)
//     return vItem;
// });

// let hello = React.h('h1', null, 'Kebabs!');
// let item = React.h('li', null, 'chicken hearts');
// let item2 = React.h('li', null, 'marinated mushrooms');
// let list = React.h('ul', null, items);

let main = h('div', null, [
    h('h1', { className: 'header' }, 'Kebabs!'),
    h('ul', null, kebabs.map((k) => h('li', null, k))),
    h('img', { src: 'https://files.slack.com/files-pri/T0569RDC6-FBT1FCZMM/image.png', className: 'kebab-image' })
]);

// JSX
// let main2 = (<div>
//     <h1 className='header'>Kebabs!</h1>
//     <ul>
//         {kebabs.map((k) => h('li', null, k))}
//     </ul>
//     <img src='https://files.slack.com/files-pri/T0569RDC6-FBT1FCZMM/image.png' className='kebab-image' />
//     </div>)

ReactDOM.render(main, document.querySelector('[data-root]'));

