const header = (function() {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'To do List';

    header.append(h1);

    return header;
})();

const content = (function() {
    const main = document.createElement('main');
    const content = document.createElement('div');
    content.classList.add('content');
    main.append(content);
    return main;
})();

const pageLoad = function() {
    document.body.append(header, content);
}

export default pageLoad;