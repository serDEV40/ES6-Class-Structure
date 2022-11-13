var bttnIncrement = document.getElementById("btnIncrement");
        var bttnMinus = document.getElementById("btnMinus");
        var span = document.getElementById('item');

        class Game {
            constructor(songName, artist, imgSrc, audioSrc) {
                this.songName = songName;
                this.artist = artist;
                this.imgSrc = imgSrc;
                this.audioSrc = audioSrc;
            }

            getName() {
                return (this.songName + " .//. " + this.artist + " ////" + this.imgSrc);
            }
        }
        class Index {
            constructor(musicList) {
                this.musicList = musicList;
                this.index = 0;
            }

            getxMusic() {
                var ac = this.musicList[this.index];
                return (ac.audioSrc + " /// " + ac.getName());
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
            span.innerText = myIndex.getxMusic();
        });

        bttnIncrement.addEventListener("click", () => {
            myIndex.nextMusic();
            var item = myIndex.getxMusic();
            console.log(item)
            span.innerText = item;
        });

        bttnMinus.addEventListener("click", () => {
            myIndex.prevMusic();
            var item = myIndex.getxMusic();
            span.innerText = item;
        });
