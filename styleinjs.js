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

