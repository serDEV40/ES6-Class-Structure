var bttnIncrement = document.getElementById("btnIncrement");
        var bttnMinus = document.getElementById("btnMinus");

        class Game {
            constructor(songName, artist, imgSrc, audioSrc) {
                this.songName = songName;
                this.artist = artist;
                this.imgSrc = imgSrc;
                this.audioSrc = audioSrc;
            }

            getName() {
                return (this.songName + " /// " + this.artist);
            }
        }
        class Index {
            constructor(musicList) {
                this.musicList = musicList;
                this.index = 0;
            }

            getxMusic() {
                console.log(this.musicList[this.index].getName());
            }

            nextMusic() {
                if (this.index < this.musicList.length - 1) {
                    this.index++;
                } else {
                    this.index = 0;
                }
            }

            prevMusic() {
                if (this.index != 0) {
                    this.index--;
                } else {
                    this.index = this.musicList.length - 1;
                }
            }
        }

        const musicList = [
            new Game("Boşver", "Nilüfer", "1.jpeg", "1.mp3"),
            new Game("Bu da Geçer mi Sevgilim", "Yalın", "2.jpeg", "2.mp3"),
            new Game("Aramızda Uçurumlar", "Suat Suna", "3.jpeg", "3.mp3")
        ];
        const myIndex = new Index(musicList);

        window.addEventListener("load", () => {
            myIndex.getxMusic();
        });

        bttnIncrement.addEventListener("click", () => {
            myIndex.nextMusic();
            myIndex.getxMusic();
        });

        bttnMinus.addEventListener("click", () => {
            myIndex.prevMusic();
            console.log(myIndex.getxMusic());
        });
