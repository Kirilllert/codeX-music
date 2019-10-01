    let inputExit = document.getElementById('inputexit');

    class Sound {

        constructor(context) {
            this.context = context;
        }

        setup() {
            this.oscillator = this.context.createOscillator();
            this.gainNode = this.context.createGain();

            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.context.destination);
            this.oscillator.type = 'sine';
        }

        play(value) {
            this.setup();

            this.oscillator.frequency.value = value;
            this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
            this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);

            this.oscillator.start(this.context.currentTime);
            this.stop(this.context.currentTime);
        }

        stop() {
            this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
            this.oscillator.stop(this.context.currentTime + 1);
        }

    }

    let context = new(window.AudioContext || window.webkitAudioContext)();


    document.addEventListener('click', cursor);
    const stick = document.querySelector('.stick');
    const glow1 = document.querySelector('.stick .glow-1');
    const glow2 = document.querySelector('.stick .glow-2');
    const notes = document.querySelectorAll('.note');

    notes.forEach((note) => {
        note.addEventListener('click', () => {
            playSound(note);
            showGlow();
            setTimeout(hideGlow, 300);
        })
        note.addEventListener('click', hideGlow);
    })

    function playSound(note) {
        let sound = new Sound(context);
        let value = note.dataset.frequency;
        sound.play(value);
        sound.stop();
    }

    function showGlow() {

    }

    function hideGlow() {

    }

    function cursor(e) {

    }

    notes.forEach((note) => {
        note.addEventListener('click', () => {
            inputExit.value = note.textContent
        })
        note.addEventListener('click', hideGlow);
    })