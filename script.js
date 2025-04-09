console.log("Welcome To Spotify");
//initialized the variables
let songIndex = 0;
let audioElement = new Audio('11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Main rang sharbaton ka", filePath:"songs/11.mp3", coverPath:"covers/1.jpg"},
    {songName:"Tum Prem Hon", filePath:"songs/22.mp3", coverPath:"covers/2.jpg"},
    {songName:"Desh Mere", filePath:"songs/33.mp3", coverPath:"covers/3.jpg"},
    {songName:"Tuje Sab He Pata Haina Ma", filePath:"songs/44.mp3", coverPath:"covers/4.jpg"},
    {songName:"Ve Kamleya", filePath:"songs/55.mp3", coverPath:"covers/5.jpg"},
    {songName:"Tera Fitoor", filePath:"songs/66.mp3", coverPath:"covers/6.jpg"},
    {songName:"Adha Tera Isuq", filePath:"songs/77.mp3", coverPath:"covers/7.jpg"},
    {songName:"Puspa Pushpa", filePath:"songs/88.mp3", coverPath:"covers/8.jpg"},
]

songItem.forEach((element, i)=>{
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;//fer far karel che nano s lakehl che//
    
})


//audioElement.play();

//handle play/paush click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    ///uapdet seeekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = '88.mp3';
        audioElement.src = '33.mp3'; 
        audioElement.src = '66.mp3';   //songs/88.mp3
        masterSongName.innerText = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 7){ 
        songIndex = 0;
    }
    else{

        songIndex += 1;
    }
    audioElement.src = 'Songs/${songIndex + 1 }.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){ 
        songIndex = 0;

    }
    else{

        songIndex += 1;
    }
    audioElement.src = 'Songs/${songIndex + 1 }.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

    
})