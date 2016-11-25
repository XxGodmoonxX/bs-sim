var STR, CON, POW, DEX, APP, SIZ, INT, EDU, SAN, LUK, IDEA, KNOW, HP, MP, SHO, SYU, DB;

function dice_roll() {
    //3~18
    STR = Math.floor(Math.random() * 15) + 3;
    CON = Math.floor(Math.random() * 15) + 3;
    POW = Math.floor(Math.random() * 15) + 3;
    DEX = Math.floor(Math.random() * 15) + 3;
    APP = Math.floor(Math.random() * 15) + 3;
    SIZ = Math.floor(Math.random() * 10) + 8;
    INT = Math.floor(Math.random() * 10) + 8;
    EDU = Math.floor(Math.random() * 15) + 6;

    SAN = POW * 5;
    LUK = POW * 5;
    IDEA = INT * 5;
    HP = Math.floor((CON + SIZ + 1) / 2);
    MP = POW;
    SYO = EDU * 20;
    SYU = INT * 10;

    //dbはあと

    historicalBarChart = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "STR" ,
                    "value" : STR
                } ,
                {
                    "label" : "CON" ,
                    "value" : CON
                } ,
                {
                    "label" : "POW" ,
                    "value" : POW
                } ,
                {
                    "label" : "DEX" ,
                    "value" : DEX
                } ,
                {
                    "label" : "APP" ,
                    "value" : APP
                } ,
                {
                    "label" : "SIZ" ,
                    "value" : SIZ
                } ,
                {
                    "label" : "INT" ,
                    "value" : INT
                } ,
                {
                    "label" : "EDU" ,
                    "value" : EDU
                }
            ]
        }
    ];

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .staggerLabels(true)
            //.staggerLabels(historicalBarChart[0].values.length > 8)
            .showValues(true)
            .duration(250)
            ;

        d3.select('#chart1 svg')
            .datum(historicalBarChart)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });

}
