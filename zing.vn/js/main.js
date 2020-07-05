const news = [];

let getListArticle = (parentAttribute) => ( document.querySelectorAll(parentAttribute)[0].children );

let getArticle = (elementArticle) =>{
    let title = '', src = '', href = '';
    let headerAct = elementArticle.getElementsByTagName('header')[0];
    let linkArticle = headerAct.getElementsByClassName('article-title')[0].children[0];
    let thumbArticle = elementArticle.getElementsByClassName('article-thumbnail')[0];

    src = thumbArticle.getElementsByTagName('img')[0].src;
    title = linkArticle.innerText;
    href = linkArticle.href;

    return {
        src,
        href,
        title
    };
}

function main(){
    let arrHorizalArticle = Array.from(getListArticle('div[data-content="newstrending"]'));
    let arrVerticalArticle = Array.from(getListArticle('ul[class="glide__slides"]'));
    let arrArticle =arrVerticalArticle.concat(arrHorizalArticle);

    arrArticle.forEach(article => {
        news.push(getArticle(article));
    });
    
    printArrNews(news);
}

function printArrNews(news) {
    console.log(news);
}

main();
