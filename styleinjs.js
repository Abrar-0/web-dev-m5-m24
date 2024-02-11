const sec = document.querySelectorAll('section');
for(const section of sec){
    section.style.border = ' 2px solid blue';
    section.style.margin = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '10px';
    section.style.backgroundColor = "lightgray";
}

const place = document.getElementById('anime-con');
    place.style.backgroundColor = 'yellow';
    place.classList.add('text-center');

const ani = document.getElementsByClassName("fav-anime")
for(const anime of ani){
    anime.classList.add('large-text');
}

const pl = document.getElementById('anime-list');
const li = document.createElement('li');
li.innerText = 'Hanasaku Iroha';
pl.appendChild(li);

const mainc = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "Anime I will watch";

mainc.appendChild(section);
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Hal';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'One Piece';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Conan';
ul.appendChild(li3);

section.append(ul);

// set directly

const studio = document.createElement('section');
studio.innerHTML = `
    <h1>Favourite Studios</h1>
    <ul>
    <li>Shaft</li>
    <li>Kyoto Animation</li>
    <li>Sunrise</li>
    </ul>
`
mainc.appendChild(studio)
