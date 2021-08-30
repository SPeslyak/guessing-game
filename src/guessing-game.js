class GuessingGame {
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        this.mm = Math.ceil((this.max + this.min) / 2);
        return this.mm;
    }
    lower() {
        this.max = this.mm;
    }
    greater() {
        this.min = this.mm;
    }
}

module.exports = GuessingGame;