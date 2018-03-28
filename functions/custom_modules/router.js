
module.exports = {
    init: init
}

function init (app) {
    app.get('/timestamp', (request, response) => {
        response.send(`${Date.now()}`);
    });

    app.get('/', (request, response) => {
        //response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        response.render('home/index', getHompageData());
    });
}











function getHompageData () {
    return {
        topMenu: [
            {name: "Home", linkToId: "_top"},            
            {name: "About"},
            {name: "Projects", linkToId: "project-section"},
            {name: "Skills"}
        ],


        listItems: [
            {
                name: "CXGF",
                desc: "Codotronix Game Framework - A simple framework for browser based games",
                tags: ["JavaScript", "CSS", "HTML", "Game", "CXGF"],
                img: "assets/img/cxgf/cxgf-1.png",
                webUrl: "http://codotronix.github.io/cxgf"
            },
            {
                name: "Beware of Boxes",
                desc: "Demo game created with my game framework CXGF",
                tags: ["HTML", "CSS", "JavaScript", "CXGF", "Game"],
                img: "assets/img/bob/bob-1.png",
                playUrl: "http://codotronix.github.io/bob"
            },
            {
                name: "Tankgular",
                desc: "A tank battle game where each tank is an AngularJS directive.",
                tags: ["AngularJS", "HTML", "CSS", "JavaScript", "Game"],
                img: "assets/img/tankgular/tankgular.png",
                playUrl: "http://codotronix.github.io/Tankgular/"
            },
            {
                name: "Asteroid Attack",
                desc: "Shoot down all the asteroids to save the day",
                tags: ["HTML", "CSS", "JavaScript", "jQuery", "Game"],
                img: "assets/img/astattack/astattack.png",
                playUrl: "http://codotronix.github.io/Asteroid-Attack/play.html"
            },
            {
                name: "Mini Puzzle  (Web)",
                desc: "A demo web version of the mobile Mini Puzzle game",
                tags: ["Cordova", "HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
                img: "assets/img/mini-puzzle/mini-puzzle-desktop.png",
                playUrl: "http://codotronix.github.io/mini-puzzle/puzzle.html"
            },
            {
                name: "Go Gol2, Go",
                desc: "Explore the adventures of Gol2 in this browser based game",
                tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
                img: "assets/img/go-gol2-go/go-gol2-go.png",
                playUrl: "http://codotronix.github.io/Dourio/Final/"
            },    
            {
                name: "Mini Puzzle",
                desc: "A mobile jigsaw puzzle game for Android and Windows Phone",
                tags: ["Cordova", "HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
                img: "assets/img/mini-puzzle/mini-puzzle.png",
                playStoreUrl: "https://play.google.com/store/apps/details?id=in.barick.cordova.minipuzzle",
                windowsStoreUrl: "https://www.microsoft.com/en-us/store/games/mini-puzzle/9nblggh6gv5r",
                amazonUrl: "http://www.amazon.com/dp/B017X1OE50/"
            },            
            {
                name: "Barick Tilefy",
                desc: "A plugin to create windoes metro style UI",
                tags: ["HTML", "CSS", "JavaScript", "jQuery", "hand.js", "web-plugin"],
                img: "assets/img/barick-tilefy/barick-tilefy.gif",
                githubUrl: "https://github.com/codotronix/barick-tilefy"
            },
            {
                name: "Bengali Recipes",
                desc: "A delight for all the Bengali food lovers",
                tags: ["AngularJS", "HTML", "CSS", "JavaScript", "website"],
                img: "assets/img/bengali-recipes/bengali-recipes.png",
                webUrl: "http://codotronix.github.io/bengali-recipes"
            }
        ]
    };
}

