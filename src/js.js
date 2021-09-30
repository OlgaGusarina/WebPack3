import img1 from './media/images/1.jpg';
import img2 from './media/images/2.jpg';
import img3 from './media/images/3.jpg';
import img4 from './media/images/4.gif';

import sound1 from './media/audio/1.mp3';
import sound2 from './media/audio/2.mp3';
import sound3 from './media/audio/3.mp3';

import movie1 from './media/video/1.mp4';
import movie2 from './media/video/2.mp4';

const block = document.getElementById('block');

const images = [img1, img2, img3, img4];
images.forEach((item, ind) => {
    const elem = document.createElement('img');
    elem.src = item;
    block[ind].prepend(elem);
});

const sounds = [sound1, sound2, sound3];
sounds.forEach((item, ind) => {
    const elem = document.createElement('audio');
    elem.setAttribute('controls', true);
    elem.src = item;
    block[ind + 4].prepend(elem);
});

const movies = [movie1, movie2];
movies.forEach((item, ind) => {
    const elem = document.createElement('video');
    elem.setAttribute('controls', true);
    elem.src = item;
    block[ind + 7].prepend(elem);
});