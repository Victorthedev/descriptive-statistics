class DescriptiveStatistics {
    constructor(data) {
        this.data = data;
    }


//Central Tendency
mean() {
    const sum = this.data.reduce ((acc, val) => acc + val, 0);
    return sum / this.data.length;
}

median() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
       return sortedData[middleIndex];
    }
}

mode() {
    const countMap = {};
    let maxFrequency = 0;
    let modes = [];

    for(let i = 0; i < this.data.length; i++) {
        const num = this.data[i];
        countMap[num] = (countMap[num] || 0) + 1;

        if (countMap[num] > maxFrequency) {
            maxFrequency = countMap[num];
            modes = [num];
        }

        else if (countMap[num] === maxFrequency) {
            modes.push(num);
        }
    }
        return modes;
}

    //Dispersion
    range() {
        const sortedData = this.data.sort ((a, b) => a - b);
        return sortedData [sortedData.length - 1] - sortedData[0];
    }

    variance() {
        const mean = this.mean();
        const sumSquaredDeviations = this.data.reduce(
            (acc, val) => acc + Math.pow(val - mean, 2), 0
        );

        return sumSquaredDeviations / this.data.length;
    }

    standardDeviation() {
        return Math.sqrt(this.variance());
    }

}

//Example
const data = [1,3,5,7,9,11,13,15,17,19];

const stats = new DescriptiveStatistics(data);

console.log('Mean:', stats.mean());
console.log('Median:', stats.median());
console.log('Mode:', stats.mode());
console.log('Range:', stats.range());
console.log('Variance:', stats.variance());
console.log('Standard Deviation:', stats.standardDeviation());