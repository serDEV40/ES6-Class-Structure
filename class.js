const prevBttn = document.querySelector(".prev");
const nextBttn = document.querySelector(".next");
const textBox = document.querySelector(".text");

class Music {
    constructor(yazar, sarki, ses_dosyasi, resim_dosyasi) {
        this.artist = yazar;
        this.song = sarki;
        this.song_file = ses_dosyasi;
        this.image = resim_dosyasi;
    }

    getName() {
        return (this.artist + "-" + this.song);
    }

};

let musicLIST = [
    new Music("M83", "Midight City", "./musics/", "./images/"),
    new Music("Jess Glyne & Clean Bandit", "Rather Be", "./musics/", "./images/"),
    new Music("Marcin Przybyłowicz", "Kaer Morhen", "./musics/", "./images/")
];

class MusicPlayer {
    constructor(musicLIST) {
        this.musicList = musicLIST;
        this.index = 0;
    };

    getMusic() {
        return this.musicList[this.index];
    }

    nextMusic() {
        if (this.index == this.musicList.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
    }

    prevMusic() {
        if (this.index <= 0) {
            this.index = this.musicList.length - 1;
        } else {
            this.index--;
        }
    }

};

const player = new MusicPlayer(musicLIST);

prevBttn.addEventListener("click", () => {
    prev();
});

const prev = () => {
    player.prevMusic();
    const music = player.getMusic();
    textBox.textContent = music.getName();
};

nextBttn.addEventListener("click", () => {
    next();
});

const next = () => {
    player.nextMusic();
    const music = player.getMusic();
    textBox.textContent = music.getName();
}