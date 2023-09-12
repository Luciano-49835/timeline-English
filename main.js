//Declaro elementos en el DOM

const nombre = document.getElementById('name');
const userName = document.getElementById('userName');
const textName = document.getElementById('textName');
const sendName = document.getElementById('sendName');
const mistery = document.getElementById('mistery');
const yes = document.getElementById('yes');
const image = document.getElementById('imagen');
const nav = document.getElementById('nav');
const info = document.getElementById('textoInfo');
const final = document.getElementById('final');
const sorpresa = document.getElementById('sorpresa');
const footer = document.getElementById('footer');

let imagen = () => {

    image.innerHTML = '<img src = "img/Flecha-abajo.jpg">';

};

let navegate = () => {

    nav.style.display = 'block';

};
 

userName.addEventListener('click', () => {

    sendName.style.display = 'block';
    textName.style.display = 'block';
    mistery.style.display = 'none';
    textName.focus();

});

sendName.addEventListener('click', () => {

    let dato = textName.value.trim();

    if(textName.value === ""){

        nombre.textContent = 'Please, write your name';

    } else {

        nombre.textContent = 'Good to see you, ' + dato + ". let's start with, shall we?";
        sendName.style.display = 'none';
        yes.style.display = 'block';
        userName.style.display = 'none';

    }
});

mistery.addEventListener('click', () => {

    nombre.textContent = "I'm glad to see you and welcome to my timeline. Let's begin, shall we?";
    yes.style.display = 'block';
    userName.style.display = 'none';
    mistery.style.display = 'none';

});

yes.addEventListener('click', () => {

    imagen();
    yes.style.display = 'none';
    navegate();

});

const naci = "I was born in Argentina, Buenos Aires the 23th August 2005. I have 2 sibling and I live in Parque Avellaneda. I used to play with my neighboorhood's friends in the street and also I used to play video games. I used to spend plenty of hours in my computer.";

const primary = "I did my whole primary education in Lujan Porteño's school. There I made lots of friends and met nice people and I went to Cordoba with them. Also I started doing some sports, for example, Taekwondo, tennis and Fustal, this is my favourite and I still practise it. Then I started to learn English in the Liceo Británico";

const highSchool = 'After the primary, I changed the school and I decided to go to a technical one, The Cornelio Saavedra in order to study electricity. At the beginning it was a little bit difficult due to the workshop, but then I got used to and it started to be better';

const pandemic = 'During the pandemic, I was very bored so I decided to learn something interesting, so I started to learn magic. First I learnt by Youtube, learning tricks and repeat them in order to learn them by heart. A few months ago my dad bought me a magic course where I keep learnt many famous tricks and then they allowed me to go to a magic school with Adrian Guerra. Definitely one of the best years';

const english = 'I have been learning english since 2017 and after 6 years of hard-working, the Liceo gave me the certification that I have finished the last year. The school prepared a little party and they gave me the certification there. Another big achivement for me because I have dedicated a lot of time to have the knowledge of english that I have today.'

const nowadays = "Nowadays I'm writting this website because my teacher asked something creative. I'm still learning web development with courses, Youtube's videos and so on. I keep learning english at the Liceo and I keep training futsal but nowadays I don't play in a club. I must admit that I love everything that I do.";

const future = "I'm a big fan of futsal, so one day I want to be a professional player, I'm going to try it 'till can no more. Maybe I'll go to the university in order to have a carrer but if I can't with that, I'm going to be a programmer because I realized that I love it.";

let dissapearNav = () => {

    nav.style.display = 'none';
    info.textContent = '';

};

final.addEventListener('click', () =>{

    sorpresa.style.display = 'block';

});

sorpresa.addEventListener('click', () => {

    dissapearNav();
    sorpresa.style.display = 'none';
    footer.style.display = 'block';

});

