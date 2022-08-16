
class GuessingGame {
    constructor() { }

    setRange(minRange, maxRange) {
        this.minRange = minRange
        this.maxRange = maxRange
    }

    guess() {
        return this.solutionCon = Math.round((this.minRange + this.maxRange) / 2)
    }

    lower() {
        return this.maxRange = this.solutionCon
    }

    greater() {
       return this.minRange = this.solutionCon
    }
}

module.exports = GuessingGame