'use strict'

var gProjs = [
    {
        id: "numbers",
        name: "Numbers",
        title: "Touch the numbers",
        desc: "a simple game of clicking on the numbers on the board in order",
        url: 'https://amit-r328.github.io/touch-the-numbers/',
        publishedAt: Date.now(),
        labels:["Matrixes","Mouse events"],
        img: 'img/projects/touch_nums.png'
    },
    {
        id: "pic",
        name: "Who in the pic",
        title: "Who in the picture",
        desc: "a simple game of figuring out the right attraction in the photo.",
        url: 'https://amit-r328.github.io/Who-in-the-Picture/',
        publishedAt: Date.now(),
        labels:["Objects","Mouse events"],
        img: 'img/projects/Whats_in_pic.png'
    },
    {
        id: "ball",
        name: "ball",
        title: "Ball board",
        desc: "a simple game of eating the balls on the board all while avoiding the candy",
        url: 'https://amit-r328.github.io/ball-board/',
        publishedAt: Date.now(),
        labels:["Matrixes","keyboard events"],
        img: 'img/projects/ball.png'
    },
    {
        id: "pacman",
        name: "pacman",
        title: "Pacman",
        desc: "Pacman",
        url: 'https://amit-r328.github.io/Pacman/',
        publishedAt: Date.now(),
        labels:["Matrixes","keyboard events"],
        img: 'img/projects/pacman.png'
    },
    {
        id: "minesweeper",
        name: "minesweeper",
        title: "Minesweeper",
        desc: "Minesweeper",
        url: 'https://amit-r328.github.io/minesweeper/',
        publishedAt: Date.now(),
        labels:["Matrixes","mouse events"],
        img: 'img/projects/minesweeper.png'
    },
    {
        id: "book",
        name: "Book",
        title: "Book-shop",
        desc: "a simple system for managing a book shop",
        url: 'https://amit-r328.github.io/Book-shop/',
        publishedAt: Date.now(),
        labels:["MVC","CRUDL"],
        img: 'img/projects/book.png'
    }
];

function getProjects(){
    return gProjs
}

function findProject(projectId){
    const project = gProjs.find(proj => proj.id === projectId)
    return project
}