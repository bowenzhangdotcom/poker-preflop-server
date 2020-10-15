const express = require('express');
const router = express.Router();
const {validateChartRequest, ChartRange} = require('../model/poker-preflop');
const {generalAuth, adminAuth} = require('../middleware/auth');
const {generateChartRange} = require('../HandDefinitions/chart');


router.get('/api/getChartRange', generalAuth, async (req, res) => {
    let resChartRange = await ChartRange.find({
        chartType: req.query.chartType,
        heroPosition: req.query.heroPosition,
        villianPosition: req.query.villianPosition
    });
    res.send(resChartRange);
});

router.put('/api/addChartRange', adminAuth, async (req, res) => {       
    const {error} = validateChartRequest(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    let chartGenerated = generateChartRange(
        req.body.chartName,
        req.body.raiseShortRange,
        req.body.callShortRange,
        req.body.foldShortRange, 
        req.body.splitRange
    );

    newChartRange = new ChartRange({
        chartName: req.body.chartName,
        chartType: req.body.chartType,
        heroPosition: req.body.heroPosition,
        villianPosition: req.body.villianPosition,
        chartRange: chartGenerated.getChart()
    });

    let chartRangeExist = await ChartRange.findOne({
        "chartType": req.body.chartType,
        "heroPosition": req.body.heroPosition,
        "villianPosition": req.body.villianPosition,
    });

    if (chartRangeExist) {
        chartRangeExist.overwrite(newChartRange);
        chartRangeExist = await chartRangeExist.save();
        res.send(chartRangeExist);
    } else {
        newChartRange = await newChartRange.save();
        res.send(newChartRange);
    };
});

router.delete('/api/deleteRange', adminAuth, async (req, res) => {
    let range = await ChartRange.deleteOne({
        chartName: req.body.chartName,
        chartType: req.body.chartType,
        heroPosition: req.body.heroPosition,
        villianPosition: req.body.villianPosition
    });
    if (range.n < 1) return res.status(400).send('The chartRange with the given parameters was not found');
    res.send(`${req.body.chartName} has been deleted`);
});


module.exports = router;