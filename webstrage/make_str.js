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

    historicalBarChart = [{
        key: "Cumulative Return",
        values: [{
            "label": "STR",
            "value": STR
        }, {
            "label": "CON",
            "value": CON
        }, {
            "label": "POW",
            "value": POW
        }, {
            "label": "DEX",
            "value": DEX
        }, {
            "label": "APP",
            "value": APP
        }, {
            "label": "SIZ",
            "value": SIZ
        }, {
            "label": "INT",
            "value": INT
        }, {
            "label": "EDU",
            "value": EDU
        }]
    }];

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) {
                return d.label
            })
            .y(function(d) {
                return d.value
            })
            .staggerLabels(true)
            //.staggerLabels(historicalBarChart[0].values.length > 8)
            .showValues(true)
            .duration(250);

        d3.select('#chart1 svg')
            .datum(historicalBarChart)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });


    show_job();

}

function syumirec() {
    if (document.getElementById("syumi_P").innerHTML > 0) {
        alert("まだ割り振れる趣味技能ポイントがのこっています。");
    } else {
        syumi_huri.length = 0;
        for (var i = 0; i < syumi_skill_id.length; i++) {
            var x = document.getElementById(syumi_skill_id[i]).innerHTML;
            //yは趣味技能の初期値
            var y = hash2[syumi_skill_id[i]];
            //console.log(y);

            if (x > y) {
                //  console.log(y);
                syumi_huri.push(x - y);
                syumi_skill_memo.push(hash3[syumi_skill_id[i]]);
            }
        }
        for (var i = 0; i < syumi_huri.length; i++) {
            //console.log(syumi_huri[i]);
            console.log(syumi_skill_memo[i]);

        }
        _delete_element('preview2');
        for(var i=0;i<60;i++){
          _delete_element('slide'+i);
        }
        //出力ボタンを出す。
        var str = '<input type="button" value="出力" onclick="create_memo()">';
        document.getElementById("memo").innerHTML = str;
    }
}

function create_memo() {

    var name = 'tarou';
    var sex = '男';
    var job = document.getElementById("job").value;
    var age = '33';


    val["JOBP"] = EDU * 20;
    val["HOBP"] = INT * 10;
    AVOID = DEX * 2;
    LUCK = POW * 5;
    KNOW = INT * 5;

    var str = name + ' (' + sex + ') 職業：' + job + ' 年齢：' + age + '歳 PL:<br>';
    str += "STR:" + STR + "　　";
    str += "DEX:" + DEX + "　　";
    str += "INT:" + INT + "　　";
    str += "ｱｲﾃﾞｱ:" + IDEA + "<br>";
    str += "CON:" + CON + "　　";
    str += "APP:" + APP + "　　";
    str += "POW:" + POW + "　　";
    str += "幸 運:" + LUCK + "<br>";
    str += "SIZ:" + SIZ + "　　";
    str += "SAN:" + SAN + "　　";
    str += "EDU:" + EDU + "　　";
    str += "知識:" + KNOW + "<br>";
    str += "H P:" + HP + "　　";
    str += "M P:" + MP + "　　";
    str += "回避:" + AVOID + "　　";
    str += "ﾀﾞﾒｰｼﾞﾎﾞｰﾅｽ:" + DB + "<br>";
    str += "------------------------------<br>";

    str += "[技能]（職業技能点:" + EDU * 20 + " 個人技能点:" + INT * 10 + "）<br>";

    for (var j = 0; j < 5; j++) {

        if (j == 0) {
            str += "[職業技能]<br>";
            for (var i = 0; i < pro_huri.length; i++) {
                if (pro_huri[i] > 0) {
                    var num = pro_skill_id[i] - 100;
                    str += hash3[num] + ':' + document.getElementById(num).innerHTML + '%(' + hash2[num] + '+' + pro_huri[i] + ') ';
                }
                if (i != 0 && i % 3 == 0) {
                    str += "<br>";
                }
            }
        } else if (j == 4) {
            str += "<br>[趣味技能]<br>";
            var chk = [];
            var cnt=0;
            for (var i = 0; i < syumi_huri.length; i++) {
                if (syumi_huri[i] > 0) {
                    var num = syumi_skill_id[i];
                    var flag=true;
                    //既に出力したものであるかをチェック
                    for (var k = 0; k < chk.length; k++) {
                        if (chk[k] == num) flag=false;
                    }
                    if(flag==true){
                      str += hash3[num] + ':' + document.getElementById(num).innerHTML + '%(' + hash2[num] + '+' + syumi_huri[i] + ')　';
                      cnt++;
                    }
                    chk.push(num);

                }
                if (cnt != 0 && cnt % 3 == 0) {
                    str += "<br>";
                }
            }
        }
        // for(int i = 0;i<3;i++){
        //
        // }
    }
    str += "<br>";
    str += "------------------------------";

    $('#pallet').html(str);
    $('#pallet_div').show();
}
