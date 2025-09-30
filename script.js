function getArticle(article, url) {
    fetch(`./!/articles/${article}`)
    .then(res => {
        if (!res.ok) throw new Error(res.status);
        return res.text();
    })
    .then(data => {
        document.querySelector("article").innerHTML = data;
        window.location.href = `./#/${url}`
    })
    .catch(err => {
        console.log(err);
        getArticle("index.html","");
    });
};
switch(window.location.hash) {
    case "": getArticle("index.html",""); break;
    case "#/": getArticle("index.html",""); break;
    case "#/members": getArticle("members.html","members"); break;
    default: getArticle("index.html",""); break;
};