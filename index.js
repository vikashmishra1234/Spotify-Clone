console.log("Welocome to Spotify")

let songIndex = 0;
let audioElement = new Audio('music/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgress')
let gif = document.getElementById('gif')
let Previous = document.getElementById('Previous')
let next = document.getElementById('next')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songname = document.getElementsByClassName('songName')
let Name = document.getElementById('name')





let songs = [
    { songName: 'goat', filePath: "music/1.mp3", coverPath: "cover/s1.png" },
    { songName: 'calaboose', filePath: "music/2.mp3", coverPath: "cover/s3.jpg" },
    { songName: 'Excuse', filePath: "music/3.mp3", coverPath: "cover/s2.jpg" },
    { songName: 'Dawood', filePath: "music/4.mp3", coverPath: "goatcover.jpg" },
    { songName: 'devil', filePath: "music/5.mp3", coverPath: "cover/sidhuback.jpg" },
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})


const makeallplays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')


    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeallplays();
        if (audioElement.paused || audioElement.currentTime <= 0) {
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')
            masterPlay.classList.add('fa-pause-circle')
            audioElement.src = `music/${songIndex}.mp3`
            Name.innerText = songs[songIndex - 1].songName

            audioElement.currentTime = 0;
            gif.style.opacity = 1
            audioElement.play()
        }
        else {

            gif.style.opacity = 0
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-circle-play')

            audioElement.pause()

        }

    })

})

masterPlay.addEventListener('click', () => {
    
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-pause-circle')

        let change=document.getElementById(`${songIndex}`)
        change.classList.remove('fa-circle-play')
        change.classList.add('fa-pause-circle')
        




    }
    else {
        audioElement.pause()
        gif.style.opacity = 0
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-circle-play')
        let change=document.getElementById(`${songIndex}`)
        change.classList.remove('fa-pause-circle')
        change.classList.add('fa-circle-play')
    }
})


masterPlay.addEventListener('click', () => {

})


audioElement.addEventListener('timeupdate', () => {
    let Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = Progress
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

next.addEventListener('click', () => {

    if (songIndex >= 5) {
        songIndex = 0;

    }
    else {
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex}.mp3`
    Name.innerText = songs[songIndex - 1].songName

    audioElement.currentTime = 0;
    gif.style.opacity = 1
    audioElement.play()
})
Previous.addEventListener('click', () => {

    if (songIndex <= 0) {
        songIndex = 0;

    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex}.mp3`
    Name.innerText = songs[songIndex - 1].songName

    audioElement.currentTime = 0;
    gif.style.opacity = 1
    audioElement.play()
})







































