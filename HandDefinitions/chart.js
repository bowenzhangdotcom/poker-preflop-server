const {generateCompositeRange} = require('./range.js');

//Generates a blank range
// const generateBlankCardRange = function() {
//     return generateCompositeRange(["a2+","k2+","q2+","j2+","t2+","92+","82+","72+","62+","52+","42+","32+","22+"]);
// };

class RangeChart {
    constructor(name) {
        this.name = name;
        this.chart = {
            'AA': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'AKs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'AQs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'AJs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'ATs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A9s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A8s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A7s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A6s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A5s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A4s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A3s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A2s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'AKo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'KK': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'KQs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'KJs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'KTs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K9s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K8s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K7s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K6s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K5s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K4s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K3s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K2s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'AQo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'KQo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'QQ': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'QJs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'QTs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q9s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q8s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q7s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q6s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q5s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q4s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q3s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q2s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'AJo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'KJo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'QJo': {'Raise': 0, 'Call': 0, 'Fold': 0},                    
            'JJ': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'JTs': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J9s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J8s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J7s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J6s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J5s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J4s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J3s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J2s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'ATo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'KTo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'QTo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'JTo': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'TT': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T9s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T8s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T7s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T6s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T5s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T4s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T3s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T2s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A9o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K9o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q9o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J9o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T9o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '99': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '98s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '97s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '96s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '95s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '94s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '93s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '92s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A8o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K8o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q8o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J8o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T8o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '98o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '88': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '87s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '86s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '85s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '84s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '83s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '82s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A7o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K7o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q7o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J7o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T7o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '97o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '87o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '77': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '76s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '75s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '74s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '73s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '72s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A6o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K6o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q6o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J6o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T6o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '96o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '86o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '76o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '66': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '65s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '64s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '63s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '62s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A5o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K5o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q5o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J5o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T5o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '95o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '85o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '75o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '65o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '55': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '54s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '53s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '52s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A4o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K4o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q4o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J4o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T4o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '94o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '84o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '74o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '64o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '54o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '44': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '43s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '42s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A3o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K3o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q3o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J3o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T3o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '93o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '83o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '73o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '63o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '53o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '43o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '33': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '32s': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'A2o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'K2o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'Q2o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'J2o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            'T2o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '92o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '82o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '72o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '62o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '52o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '42o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '32o': {'Raise': 0, 'Call': 0, 'Fold': 0},
            '22': {'Raise': 0, 'Call': 0, 'Fold': 0}
        };
        this.raise = [];
        this.call = [];
        this.fold = [];
        this.split = [];
    };

    setRaise(cardRange) {
        if(cardRange === 'NA') return false;
        const handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = {'Raise': 1, 'Call': 0, 'Fold': 0};
        });
        this.raise = cardRange;
        return this.chart;
    };

    setFold(cardRange) {
        if(cardRange === 'NA') return false;
        const handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = {'Raise': 0, 'Call': 0, 'Fold': 1};
        });
        this.fold = cardRange;
        return this.chart;
    };

    setCall(cardRange) {
        if(cardRange === 'NA') return false;
        const handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = {'Raise': 0, 'Call': 1, 'Fold': 0};
        });
        this.call = cardRange;
        return this.chart;
    };

    setSplit(cardRange, raisePercent, callPercent, foldPercent) {
        if(cardRange === 'NA') return false;
        const handRange = generateCompositeRange(cardRange)
        handRange.forEach((e) => {
            this.chart[e] = {'Raise': raisePercent, 'Call': callPercent, 'Fold': foldPercent};
            this.split.push(e);
        });
        return this.chart;
    }

    getChart() {
        return this.chart
    }
};

const generateChartRange = (chartName, raiseShortRange, callShortRange, foldShortRange, splitRangeInput) => {
    let chartRange = new RangeChart(chartName);
    chartRange.setRaise(raiseShortRange);
    chartRange.setCall(callShortRange);
    chartRange.setFold(foldShortRange);
    const splitRange = JSON.parse(splitRangeInput);
    for (let cardRange in splitRange) {
        const raisePercent = splitRange[cardRange]['Raise'];
        const callPercent = splitRange[cardRange]['Call'];
        const foldPercent = splitRange[cardRange]['Fold'];
        try {
            chartRange.setSplit(cardRange, raisePercent, callPercent, foldPercent);
        } catch(error) {
            console.log(`Split Hand is not valid! ${error}`);
        }
    };
    return chartRange;
};

exports.RangeChart = RangeChart;
exports.generateChartRange = generateChartRange;