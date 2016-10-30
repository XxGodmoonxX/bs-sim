var result = "";
var last_result = "";
var round_total = 0;
var battle_count = 0;



var round = 1;

var mwin = 0;
var hwin = 0;
var mons = 0;
var mons_name = "";
var mons_kaihi = 0;
var mon = [];
//0=false 1=true
var sude_kaihi = [];
var kizetu = [];

var db = [];
var db_moji = [];

var kaihi = [];
var kick = [];
var punch = [];
var head = [];
var ma = [];

var human = [];
var dex = [];
var con = [];
var str = [];
var siz = [];
var attack_type = [];
var alpha = "";

var live = [];
var recovery = [];

var death = [];
var wounded = [];

var mons_sude_kaihi = [];

var cnt_death = 0;
var total_death = 0;
var total_win_death = 0;
var t_death = [];

var total_human = [];
for (var i = 0; i < 5; i++) {
    total_human[i] = 0;
    t_death[i] = 0;
}


historicalBarChart = [{
    key: "Cumulative Return",

    values: [{
            "label": "A",
            "value": hwin
        }, {
            "label": "B",
            "value": hwin
        }, {
            "label": "C",
            "value": hwin
        }, {
            "label": "D",
            "value": hwin
        },

    ]
}];

var width = 300;
var height = 300;
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



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ck_load(a) {
    document.Form.nop.selectedIndex = $.cookie("howmany_key" + a);
    hoge();

    var csave = "";

    csave = $.cookie("save_key" + a);
    if (csave === undefined) {
        alert("セーブデータがありません＞＜");
        return;
    }

    // alert(csave);

    var save_data = csave.split(",");
    //alert(save_data[0]);
    // for (var i = 0; i < 44; i++) {
    //     console.log(i + "=" + save_data[i]);
    // }
    document.Form.STR.selectedIndex = save_data[0];
    document.Form.CON.selectedIndex = save_data[1];
    document.Form.SIZ.selectedIndex = save_data[2];
    document.Form.DEX.selectedIndex = save_data[3];
    document.Form.attack.selectedIndex = save_data[4];
    document.Form.punch.selectedIndex = save_data[5];
    document.Form.kick.selectedIndex = save_data[6];
    document.Form.head.selectedIndex = save_data[7];
    document.Form.ma.selectedIndex = save_data[8];
    document.Form.kaihi.selectedIndex = save_data[9];
    document.Form.recovery.selectedIndex = save_data[10];

    if ($.cookie("howmany_key" + a) >= 1) {
        document.Form.STR2.selectedIndex = save_data[11];
        document.Form.CON2.selectedIndex = save_data[12];
        document.Form.SIZ2.selectedIndex = save_data[13];
        document.Form.DEX2.selectedIndex = save_data[14];
        document.Form.attack2.selectedIndex = save_data[15];
        document.Form.punch2.selectedIndex = save_data[16];
        document.Form.kick2.selectedIndex = save_data[17];
        document.Form.head2.selectedIndex = save_data[18];
        document.Form.ma2.selectedIndex = save_data[19];
        document.Form.kaihi2.selectedIndex = save_data[20];
        document.Form.recovery1.selectedIndex = save_data[21];
    }
    if ($.cookie("howmany_key" + a) >= 2) {
        document.Form.STR3.selectedIndex = save_data[22];
        document.Form.CON3.selectedIndex = save_data[23];
        document.Form.SIZ3.selectedIndex = save_data[24];
        document.Form.DEX3.selectedIndex = save_data[25];
        document.Form.attack3.selectedIndex = save_data[26];
        document.Form.punch3.selectedIndex = save_data[27];
        document.Form.kick3.selectedIndex = save_data[28];
        document.Form.head3.selectedIndex = save_data[29];
        document.Form.ma3.selectedIndex = save_data[30];
        document.Form.kaihi3.selectedIndex = save_data[31];
        document.Form.recovery2.selectedIndex = save_data[32];
    }
    if ($.cookie("howmany_key" + a) >= 3) {
        document.Form.STR4.selectedIndex = save_data[33];
        document.Form.CON4.selectedIndex = save_data[34];
        document.Form.SIZ4.selectedIndex = save_data[35];
        document.Form.DEX4.selectedIndex = save_data[36];
        document.Form.attack4.selectedIndex = save_data[37];
        document.Form.punch4.selectedIndex = save_data[38];
        document.Form.kick4.selectedIndex = save_data[39];
        document.Form.head4.selectedIndex = save_data[40];
        document.Form.ma4.selectedIndex = save_data[41];
        document.Form.kaihi4.selectedIndex = save_data[42];
        document.Form.recovery3.selectedIndex = save_data[43];
    }



}

function ck(a) {
    if ($.cookie("save_key" + a) !== undefined) {
        myRet = confirm("既にデータが有ります。上書きしてもよろしいですか？");
        if (myRet != true) {
            return;
        }
    }
    var c_howmany = document.Form.nop.selectedIndex;
    ///////////////探索者１の情報///////////////////////////////
    var c_str = Number(document.Form.STR.selectedIndex);
    var c_con = Number(document.Form.CON.selectedIndex);
    var c_siz = Number(document.Form.SIZ.selectedIndex);
    var c_dex = document.Form.DEX.selectedIndex;

    var c_attack_type = document.Form.attack.selectedIndex;

    var c_punch = document.Form.punch.selectedIndex;
    var c_kick = document.Form.kick.selectedIndex;
    var c_head = document.Form.head.selectedIndex;

    var c_ma = document.Form.ma.selectedIndex;

    var c_kaihi = document.Form.kaihi.selectedIndex;

    var c_recovery = document.Form.recovery.selectedIndex;


    ///////////////探索者2の情報///////////////////////////////
    if (document.Form.nop.value >= 2) {
        str[1] = Number(document.Form.STR2.selectedIndex);
        con[1] = Number(document.Form.CON2.selectedIndex);
        siz[1] = Number(document.Form.SIZ2.selectedIndex);
        dex[1] = document.Form.DEX2.selectedIndex;

        attack_type[1] = document.Form.attack2.selectedIndex;

        punch[1] = document.Form.punch2.selectedIndex;
        kick[1] = document.Form.kick2.selectedIndex;
        head[1] = document.Form.head2.selectedIndex;

        ma[1] = document.Form.ma2.selectedIndex;

        kaihi[1] = document.Form.kaihi2.selectedIndex;

        recovery[1] = document.Form.recovery1.selectedIndex;
    }
    ///////////////探索者3の情報///////////////////////////////
    if (document.Form.nop.value >= 3) {
        str[2] = Number(document.Form.STR3.selectedIndex);
        con[2] = Number(document.Form.CON3.selectedIndex);
        siz[2] = Number(document.Form.SIZ3.selectedIndex);
        dex[2] = document.Form.DEX3.selectedIndex;

        attack_type[2] = document.Form.attack3.selectedIndex;

        punch[2] = document.Form.punch3.selectedIndex;
        kick[2] = document.Form.kick3.selectedIndex;
        head[2] = document.Form.head3.selectedIndex;

        ma[2] = document.Form.ma3.selectedIndex;

        kaihi[2] = document.Form.kaihi3.selectedIndex;

        recovery[2] = document.Form.recovery2.selectedIndex;
    }
    ///////////////探索者4の情報///////////////////////////////
    if (document.Form.nop.value >= 4) {
        str[3] = Number(document.Form.STR4.selectedIndex);
        con[3] = Number(document.Form.CON4.selectedIndex);
        siz[3] = Number(document.Form.SIZ4.selectedIndex);
        dex[3] = document.Form.DEX4.selectedIndex;

        attack_type[3] = document.Form.attack4.selectedIndex;

        punch[3] = document.Form.punch4.selectedIndex;
        kick[3] = document.Form.kick4.selectedIndex;
        head[3] = document.Form.head4.selectedIndex;

        ma[3] = document.Form.ma4.selectedIndex;

        kaihi[3] = document.Form.kaihi4.selectedIndex;

        recovery[3] = document.Form.recovery3.selectedIndex;

    }
    $.cookie("howmany_key" + a, c_howmany, {
        expires: 7
    });
    alert("save");

    //初期化
    var c_save = "";

    if (c_howmany >= 0) {
        c_save += c_str + "," + c_con + "," + c_siz + "," + c_dex + "," + c_attack_type + "," + c_punch + "," + c_kick + "," + c_head + "," + c_ma + "," + c_kaihi + "," + c_recovery;

    }
    if (c_howmany >= 1) {
        c_save += "," + str[1] + "," + con[1] + "," + siz[1] + "," + dex[1] + "," + attack_type[1] + "," + punch[1] + "," + kick[1] + "," + head[1] + "," + ma[1] + "," + kaihi[1] + "," + recovery[1];

    }
    if (c_howmany >= 2) {

        c_save += "," + str[2] + "," + con[2] + "," + siz[2] + "," + dex[2] + "," + attack_type[2] + "," + punch[2] + "," + kick[2] + "," + head[2] + "," + ma[2] + "," + kaihi[2] + "," + recovery[2];


    }
    if (c_howmany >= 3) {
        c_save += "," + str[3] + "," + con[3] + "," + siz[3] + "," + dex[3] + "," + attack_type[3] + "," + punch[3] + "," + kick[3] + "," + head[3] + "," + ma[3] + "," + kaihi[3] + "," + recovery[3];
    }

    // alert(c_save);

    $.cookie("save_key" + a, c_save, {
        expires: 7
    });
}



function hoge() {
    var add_people = "";
    if (document.Form.nop.value == 1) {

    }
    if (document.Form.nop.value == 2) {
        //alert('2');
        add_people += '<br><h3>○探索者B</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ2"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>攻撃手段<select name="attack2"><option value="1">こぶし/パンチ</option><option value="2"selected>キック</option><option value="3">頭突き</option><option value="4">MA+こぶし</option><option value="5">MA+キック</option><option value="6">MA+頭突き</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">こぶし<select name="punch2"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">キック<select name="kick2"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">頭突き<select name="head2"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma2"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">回避（DEXx2が初期技能値）<select name="kaihi2"><option value="1"selected>初期値</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">応急手当・医学<select name="recovery1"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
    }
    if (document.Form.nop.value == 3) {
        add_people += '<br><h3>○探索者B</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ2"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>攻撃手段<select name="attack2"><option value="1">こぶし/パンチ</option><option value="2"selected>キック</option><option value="3">頭突き</option><option value="4">MA+こぶし</option><option value="5">MA+キック</option><option value="6">MA+頭突き</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">こぶし<select name="punch2"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">キック<select name="kick2"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">頭突き<select name="head2"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma2"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">回避（DEXx2が初期技能値）<select name="kaihi2"><option value="1"selected>初期値</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">応急手当・医学<select name="recovery1"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
        add_people += '<br><h3>○探索者C</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ3"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>攻撃手段<select name="attack3"><option value="1">こぶし/パンチ</option><option value="2"selected>キック</option><option value="3">頭突き</option><option value="4">MA+こぶし</option><option value="5">MA+キック</option><option value="6">MA+頭突き</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">こぶし<select name="punch3"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">キック<select name="kick3"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">頭突き<select name="head3"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma3"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">回避（DEXx2が初期技能値）<select name="kaihi3"><option value="1"selected>初期値</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">応急手当・医学<select name="recovery2"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
    }
    if (document.Form.nop.value == 4) {
        add_people += '<br><h3>○探索者B</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ2"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>攻撃手段<select name="attack2"><option value="1">こぶし/パンチ</option><option value="2"selected>キック</option><option value="3">頭突き</option><option value="4">MA+こぶし</option><option value="5">MA+キック</option><option value="6">MA+頭突き</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">こぶし<select name="punch2"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">キック<select name="kick2"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">頭突き<select name="head2"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma2"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">回避（DEXx2が初期技能値）<select name="kaihi2"><option value="1"selected>初期値</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">応急手当・医学<select name="recovery1"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
        add_people += '<br><h3>○探索者C</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ3"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>攻撃手段<select name="attack3"><option value="1">こぶし/パンチ</option><option value="2"selected>キック</option><option value="3">頭突き</option><option value="4">MA+こぶし</option><option value="5">MA+キック</option><option value="6">MA+頭突き</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">こぶし<select name="punch3"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">キック<select name="kick3"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">頭突き<select name="head3"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma3"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">回避（DEXx2が初期技能値）<select name="kaihi3"><option value="1"selected>初期値</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">応急手当・医学<select name="recovery2"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
        add_people += '<br><h3>○探索者D</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR4"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON4"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ4"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX4"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>攻撃手段<select name="attack4"><option value="1">こぶし/パンチ</option><option value="2"selected>キック</option><option value="3">頭突き</option><option value="4">MA+こぶし</option><option value="5">MA+キック</option><option value="6">MA+頭突き</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">こぶし<select name="punch4"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">キック<select name="kick4"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">頭突き<select name="head4"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma4"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">回避（DEXx2が初期技能値）<select name="kaihi4"><option value="1"selected>初期値</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">応急手当・医学<select name="recovery3"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
    }

    //console.log(add_people);

    document.getElementById("pluss").innerHTML = add_people;
}

function goul(a, t, u) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>食屍鬼" + u + "の攻撃!</b></br>";
    var doge = getRandomInt(1, 100);
    var yari = getRandomInt(1, 100);

    result += "<b>食屍鬼" + u + "のカギ爪判定　1d100<=(30)→" + yari + "</b>";

    if (yari <= 25) {
        result += "<b>→成功</b></br>";
        result += "<b>穢れた爪が探索者" + alpha + "を襲う！</b></br>";

        if (kizetu[t] == 1) {
            result += "<b>探索者" + alpha + "は意識を失っている...</b></br>";
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 10) + 1);
            result += "<b>探索者に1d10+1+1d6→" + damage + "のダメージ</b></br>";
            wounded[t]++;
            return a - damage;
        }


        if (doge > kaihi[t] || sude_kaihi[t] == 1) {
            if (sude_kaihi[t] == 1) {
                result += "<b>回避自動失敗(回避行動済)</b></br>";
            } else {
                result += "<b>探索者" + alpha + "の回避判定 1d100<=(" + kaihi[t] + ")→" + doge + "</b>";
                sude_kaihi[t] = 1;
                result += "<b>→失敗</b></br>";
            }
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 4));
            result += "<b>探索者" + alpha + "に1d6+1d4→" + damage + "のダメージ</b></br>";
            wounded[t]++;
            //  alert(a/2);
            if (damage >= a / 2 && damage < a) {
                var shock = getRandomInt(1, 100)
                result += "<b>ショックロール判定 1d100<=(" + con[t] * 5 + ")→" + shock + "</b>";
                if (shock > con[t] * 5) {
                    kizetu[t] = 1;
                    result += "<b>→失敗</b></br>";
                    result += "<b>探索者" + alpha + "は意識を失ってしまった</b></br>";
                    //  a = 0;

                } else {
                    result += "<b>→成功</b></br>";
                    //  result += "<b>探索者"+alpha+"は気力で耐えた</b></br>";
                }
            }
            a -= (damage);
            return a;
        } else {
            result += "<b>探索者" + alpha + "の回避判定 1d100<=(" + kaihi[t] + ")→" + doge + "</b>";
            result += "<b>→成功</b></br>";
            sude_kaihi[t] = 1;
            return a;
        }
    } else {
        result += "<b>→失敗</b></br>";
        result += "<b>カギ爪は空をきった...</b></br>";
        return a;
    }
}

function moon(a, t, u) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>ムーンビースト" + u + "の攻撃!</b></br>";
    var doge = getRandomInt(1, 100);
    var yari = getRandomInt(1, 100);

    result += "<b>ムーンビースト" + u + "の槍判定　1d100<=(25)→" + yari + "</b>";

    if (yari <= 25) {
        result += "<b>→成功</b></br>";
        result += "<b>槍が探索者" + alpha + "を襲う！</b></br>";

        if (kizetu[t] == 1) {
            result += "<b>探索者" + alpha + "は意識を失っている...</b></br>";
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 10) + 1);
            result += "<b>探索者" + alpha + "に1d10+1+1d6→" + damage + "のダメージ</b></br>";
            wounded[t]++;
            a -= damage;
            return a;
        }


        if (doge > kaihi[t] || sude_kaihi[t] == 1) {
            if (sude_kaihi[t] == 1) {
                result += "<b>回避自動失敗(回避行動済)</b></br>";
            } else {
                result += "<b>探索者" + alpha + "の回避判定 1d100<=(" + kaihi[t] + ")→" + doge + "</b>";
                sude_kaihi[t] = 1;
                result += "<b>→失敗</b></br>";
            }
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 10) + 1);
            result += "<b>探索者" + alpha + "に1d10+1+1d6→" + damage + "のダメージ</b></br>";
            wounded[t]++;
            //  alert(a/2);
            if (damage >= a / 2 && damage < a) {
                var shock = getRandomInt(1, 100)

                result += "<b>ショックロール判定 1d100<=(" + con[t] * 5 + ")→" + shock + "</b>";
                if (shock > con[t] * 5) {
                    kizetu[t] = 1;
                    result += "<b>→失敗</b></br>";
                    result += "<b>探索者" + alpha + "は意識を失ってしまった</b></br>";
                    //a = 0;

                } else {
                    result += "<b>→成功</b></br>";
                    //result += "<b>探索者"+alpha+"は気力で耐えた</b></br>";
                }
            }
            a -= (damage);
            return a;
        } else {
            result += "<b>探索者" + alpha + "の回避判定 1d100<=(" + kaihi[t] + ")→" + doge + "</b>";
            result += "<b>→成功</b></br>";
            sude_kaihi[t] = 1;
            return a;
        }
    } else {
        result += "<b>失敗</b></br>";

        result += "<b>ムーンビーストの槍は当たらない...</b></br>";
        return a;
    }
}


function naguru_tansaku(a, k, t) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>探索者" + alpha + "の攻撃!</b></br>";
    var doge = getRandomInt(1, 100);
    var punch_dice = getRandomInt(1, 100);
    result += "<b>探索者" + alpha + "のこぶし/パンチ判定　1d100<=(" + punch[t] + ")→" + punch_dice + "</b>";
    if (punch_dice <= punch[t]) {
        result += "<b>→成功</b></br>";
        //console.log(mons);
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26
        }

        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            mons_sude_kaihi[k] = 1;
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b></br>";
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }
        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 3) + db[t];
        //alert(db);
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に 1d3" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;

    } else {
        result += "<b>→失敗</b></br>";
        result += "<b>当たらない...</b></br>";
        return a;
    }
}


function keru_tansaku(a, k, t) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>探索者" + alpha + "の攻撃!</b></br>";
    var doge = getRandomInt(1, 100);
    var kick_dice = getRandomInt(1, 100);
    result += "<b>探索者" + alpha + "のキック判定　1d100<=(" + kick[t] + ")→" + kick_dice + "</b>";
    if (kick_dice <= kick[t]) {
        result += "<b>→成功</b></br>";
        result += "<b>思い切り蹴飛ばす！</b></br>";
        //console.log(mons);
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b></br>";
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }

        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        //console.log("db" + db[0]);
        var damage = getRandomInt(1, 6) + Number(db[t]);
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に1d6" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;

    } else {
        result += "<b>→失敗</b></br>";
        result += "<b>空振り...</b></br>";
        return a;
    }
}

function zutuki_tansaku(a, k, t) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>探索者" + alpha + "の攻撃!</b></br>";
    var doge = getRandomInt(1, 100);
    var zutuki_dice = getRandomInt(1, 100);
    result += "<b>探索者" + alpha + "の頭突き判定　1d100<=(" + head[t] + ")→" + zutuki_dice + "</b>";
    if (zutuki_dice <= head[t]) {
        result += "<b>→成功</b></br>";
        result += "<b>石頭！</b></br>";
        //console.log(mons);
        if (mons == 1) {　
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {

            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b></br>";
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }
        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        //  console.log("db" + db[0]);
        var damage = getRandomInt(1, 4) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に1d4" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;

    } else {
        result += "<b>→失敗</b></br>";
        result += "<b>空振り...</b></br>";
        return a;
    }
}

function ma_tansaku(a, k, t) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>探索者" + alpha + "の攻撃!</b></br>";
    var doge = getRandomInt(1, 100);
    //var kobusi_dice = getRandomInt(1, 100);
    var ma_dice = getRandomInt(1, 100);
    result += "<b>探索者" + alpha + "のこぶし/パンチ判定 + MA判定 <br>cbr<=(" + punch[t] + "," + ma[t] + ")→" + ma_dice + "</b>";

    if (ma_dice <= ma[t] && ma_dice <= punch[t]) {
        result += "<b>[成功,成功]→成功</b></br>";
        result += "<b>MAの乗ったパンチ!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            if (doge <= 20) {
                result += "<b>→成功</b></br>";
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }

        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        var damage = 2 * getRandomInt(1, 3) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に2d3" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;


    } else if (ma_dice <= punch[t]) {
        result += "<b>[成功,失敗]→部分的成功</b></br>";
        result += "<b>パンチ!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b><br>"
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }
        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 3) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + "に1d3" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;

    } else if (ma_dice <= ma[t]) {
        result += "<b>[失敗,成功]→部分的成功</b></br>";
        result += "<b>MAのみ成功　ダメージロールなし</b></br>";
        return a;
    } else {
        result += "<b>[失敗,失敗]→失敗</b></br>";
        result += "<b>攻撃は外れた...</b></br>";
        return a;
    }
}


function ma_tansaku2(a, k, t) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>探索者" + alpha + "の攻撃!</b></br>";
    var doge = getRandomInt(1, 100);
    //  var kick_dice = getRandomInt(1, 100);
    var ma_dice = getRandomInt(1, 100);
    result += "<b>探索者" + alpha + "のキック判定 + MA判定 <br>cbr<=(" + kick[t] + "," + ma[t] + ")→" + ma_dice + "</b>";


    if (ma_dice <= ma[t] && ma_dice <= kick[t]) {
        result += "<b>[成功,成功]→成功</b></br>";
        result += "<b>MAの乗ったキック!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b><br>"
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }
        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        var damage = 2 * getRandomInt(1, 6) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に2d6" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;


    } else if (ma_dice <= kick[t]) {
        result += "<b>[成功,失敗]→部分的成功</b></br>";
        result += "<b>キック!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b><br>"
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }

        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 6) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に1d6" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;

    } else if (ma_dice <= ma[t]) {
        result += "<b>[失敗,成功]→部分的成功</b></br>";
        result += "<b>MAのみ成功　ダメージロールなし</b></br>";
        return a;
    } else {
        result += "<b>[失敗,失敗]→失敗</b></br>";
        result += "<b>攻撃は外れた...</b></br>";
        return a;
    }
}

function ma_tansaku3(a, k, t) {
    if (t == 0) {
        alpha = 'A';
    }
    if (t == 1) {
        alpha = 'B';
    }
    if (t == 2) {
        alpha = 'C';
    }
    if (t == 3) {
        alpha = 'D';
    }
    result += "<b>探索者" + alpha + "の攻撃</b></br>";
    var doge = getRandomInt(1, 100);
    //  var zutuki_dice = getRandomInt(1, 100);
    var ma_dice = getRandomInt(1, 100);
    result += "<b>探索者" + alpha + "の頭突き判定 + MA判定 <br>cbr<=(" + head[t] + "," + ma[t] + ")→" + ma_dice + "</b>";


    if (ma_dice <= ma[t] && ma_dice <= head[t]) {
        result += "<b>[成功,成功]→成功</b></br>";
        result += "<b>MAの乗った頭突き!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(20)→" + doge + "</b>";
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b><br>"
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }
        db_rand(t);
        result += "<b>" + mons_name + k + "に命中！</b></br>";
        var damage = 2 * getRandomInt(1, 4) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に2d4" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;


    } else if (ma_dice <= head[t]) {
        result += "<b>[成功,失敗]→部分的成功</b></br>";
        result += "<b>頭突き!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "は既に回避行動済</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "の回避判定 1d100<=(" + mons_kaihi + ")→" + doge + "</b>";
            if (doge <= mons_kaihi) {
                result += "<b>→成功</b><br>"
                result += "<b>" + mons_name + k + "は攻撃を避けた</b></br>";
                return a;
            } else {
                result += "<b>→失敗</b></br>";
            }
        }
        result += "<b>" + mons_name + k + "に命中！</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 4) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "に1d4" + db_moji[t] + "→" + damage + "のダメージ</b></br>";
        return a;

    } else if (ma_dice <= ma[t]) {
        result += "<b>[失敗,成功]→部分的成功</b></br>";
        result += "<b>MAのみ成功　ダメージロールなし</b></br>";
        return a;
    } else {
        result += "<b>[失敗,失敗]→失敗</b></br>";
        result += "<b>攻撃は外れた...</b></br>";
        return a;
    }
}

function deletes() {
    document.getElementById("write").innerHTML = "";
    result = "";
    last_result = "";
    round_total = 0;
    battle_count = 0
    cnt_death = 0;

    total_death = 0;
    total_win_death = 0;
    for (var i = 0; i < 5; i++) {
        total_human[i] = 0;
        t_death[i] = 0;
    }
    mwin = 0;
    hwin = 0;
    document.getElementById("write2").innerHTML = "";
    var testdata = [{
            key: "Win",
            y: hwin
        }, {
            key: "Lose",
            y: mwin
        },

    ];

    historicalBarChart = [{
        key: "Cumulative Return",

        values: [{
                "label": "A",
                "value": hwin
            }, {
                "label": "B",
                "value": hwin
            }, {
                "label": "C",
                "value": hwin
            }, {
                "label": "D",
                "value": hwin
            },

        ]
    }];

    var width = 300;
    var height = 300;
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


    nv.addGraph(function() {
        var chart = nv.models.pie()
            .x(function(d) {
                return d.key;
            })
            .y(function(d) {
                return d.y;
            })
            .width(width)
            .height(height)
            .labelType(function(d, i, values) {
                return values.key + ':' + values.value;
            });

        d3.select("#test1")
            .datum([testdata])
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        // LISTEN TO CLICK EVENTS ON THE PIE CONTAINER
        // chart.dispatch.on('chartClick', function() {
        //   code...
        // });

        // LISTEN TO CLICK EVENTS ON THE SLICES OF THE PIE
        // chart.dispatch.on('elementClick', function() {
        //   code...
        // });

        // OTHER EVENTS DISPATCHED BY THE PIE INCLUDE: elementDblClick, elementMouseover, elementMouseout, elementMousemove, renderEnd
        // @see nv.models.pie
        return chart;
    });


}

function db_rand(t) {
    if (db_moji[t] == "-1d6") {
        db[t] = getRandomInt(-6, -1);
    }
    if (db_moji[t] == "-1d4") {
        db[t] = getRandomInt(-4, -1);
    }
    if (db_moji[t] == "") {
        db[t] = 0;
    }
    if (db_moji[t] == "+1d4") {
        db[t] = getRandomInt(1, 4);
    }
    if (db_moji[t] == "+1d6") {
        db[t] = getRandomInt(1, 6);
    }
}

function db_calc(t) {
    if (t == 0) {
        //alert("yes");
        if (str[0] + siz[0] <= 12) {
            //db[0] = getRandomInt(-6, -1);
            db_moji[0] = "-1d6";
        } else if (str[0] + siz[0] <= 16) {
            //db[0] = getRandomInt(-4, -1);
            db_moji[0] = "-1d4";
        } else if (str[0] + siz[0] <= 24) {
            db[0] = 0;
            db_moji[0] = "";
        } else if (str[0] + siz[0] <= 32) {
            //  db[0] = getRandomInt(1, 4);
            db_moji[0] = "+1d4";
        } else {
            //  db[0] = getRandomInt(1, 6);
            db_moji[0] = "+1d6";
        }
    }
    if (t == 1) {
        if (str[1] + siz[1] <= 12) {
            //  db[1] = getRandomInt(-6, -1);
            db_moji[1] = "-1d6";
        } else if (str[1] + siz[1] <= 16) {
            //  db[1] = getRandomInt(-4, -1);
            db_moji[1] = "-1d4";
        } else if (str[1] + siz[1] <= 24) {
            db[1] = 0;
            db_moji[1] = "";
        } else if (str[1] + siz[1] <= 32) {
            //  db[1] = getRandomInt(1, 4);
            db_moji[1] = "+1d4";
        } else {
            //  db[1] = getRandomInt(1, 6);
            db_moji[1] = "+1d6";
        }
    }
    if (t == 2) {
        if (str[2] + siz[2] <= 12) {
            //  db[2] = getRandomInt(-6, -1);
            db_moji[2] = "-1d6";
        } else if (str[2] + siz[2] <= 16) {
            //  db[2] = getRandomInt(-4, -1);
            db_moji[2] = "-1d4";
        } else if (str[2] + siz[2] <= 24) {
            db[2] = 0;
            db_moji[2] = "";
        } else if (str[2] + siz[2] <= 32) {
            //    db[2] = getRandomInt(1, 4);
            db_moji[2] = "+1d4";
        } else {
            //    db[2] = getRandomInt(1, 6);
            db_moji[2] = "+1d6";
        }
    }
    if (t == 3) {
        if (str[3] + siz[3] <= 12) {
            //    db[3] = getRandomInt(-6, -1);
            db_moji[3] = "-1d6";
        } else if (str[3] + siz[3] <= 16) {
            //    db[3] = getRandomInt(-4, -1);
            db_moji[3] = "-1d4";
        } else if (str[3] + siz[3] <= 24) {
            db[3] = 0;
            db_moji[3] = "";
        } else if (str[3] + siz[3] <= 32) {
            //      db[3] = getRandomInt(1, 4);
            db_moji[3] = "+1d4";
        } else {
            //      db[3] = getRandomInt(1, 6);
            db_moji[3] = "+1d6";
        }
    }

}

function buttle() {

    ///////////////探索者１の情報///////////////////////////////
    str[0] = Number(document.Form.STR.value);
    con[0] = Number(document.Form.CON.value);
    siz[0] = Number(document.Form.SIZ.value);
    dex[0] = document.Form.DEX.value;

    attack_type[0] = document.Form.attack.value;

    punch[0] = document.Form.punch.value;
    kick[0] = document.Form.kick.value;
    head[0] = document.Form.head.value;

    ma[0] = document.Form.ma.value;

    kaihi[0] = document.Form.kaihi.value;

    recovery[0] = document.Form.recovery.value;


    ///////////////探索者2の情報///////////////////////////////
    if (document.Form.nop.value >= 2) {
        str[1] = Number(document.Form.STR2.value);
        con[1] = Number(document.Form.CON2.value);
        siz[1] = Number(document.Form.SIZ2.value);
        dex[1] = document.Form.DEX2.value;

        attack_type[1] = document.Form.attack2.value;

        punch[1] = document.Form.punch2.value;
        kick[1] = document.Form.kick2.value;
        head[1] = document.Form.head2.value;

        ma[1] = document.Form.ma2.value;

        kaihi[1] = document.Form.kaihi2.value;

        recovery[1] = document.Form.recovery1.value;
    }
    ///////////////探索者3の情報///////////////////////////////
    if (document.Form.nop.value >= 3) {
        str[2] = Number(document.Form.STR3.value);
        con[2] = Number(document.Form.CON3.value);
        siz[2] = Number(document.Form.SIZ3.value);
        dex[2] = document.Form.DEX3.value;

        attack_type[2] = document.Form.attack3.value;

        punch[2] = document.Form.punch3.value;
        kick[2] = document.Form.kick3.value;
        head[2] = document.Form.head3.value;

        ma[2] = document.Form.ma3.value;

        kaihi[2] = document.Form.kaihi3.value;

        recovery[2] = document.Form.recovery2.value;
    }
    ///////////////探索者4の情報///////////////////////////////
    if (document.Form.nop.value >= 4) {
        str[3] = Number(document.Form.STR4.value);
        con[3] = Number(document.Form.CON4.value);
        siz[3] = Number(document.Form.SIZ4.value);
        dex[3] = document.Form.DEX4.value;

        attack_type[3] = document.Form.attack4.value;

        punch[3] = document.Form.punch4.value;
        kick[3] = document.Form.kick4.value;
        head[3] = document.Form.head4.value;

        ma[3] = document.Form.ma4.value;

        kaihi[3] = document.Form.kaihi4.value;

        recovery[3] = document.Form.recovery3.value;

    }



    ////////表示設定/////////////////////////////
    var set = document.Form.setting.value;



    mons = document.Form.monster.value;
    if (mons == 1) {
        mons_name = "ムーンビースト";
    } else if (mons == 2) {
        mons_name = "食屍鬼";
    }
    if (mons > 2) {
        alert("準備中... まだ実装されてないよ(・ω<)");
        return;
    }

    var how_many = document.Form.monsters.value;

    var how_many_t = document.Form.nop.value;



    for (var i = 0; i < how_many_t; i++) {
        live[i] = 1;
        death[i] = 0;
        kizetu[i] = 0;

        db_calc(i);
    }

    for (var t = 0; t < how_many_t; t++) {
        if (kaihi[t] == 1) kaihi[t] = Number(dex[t]) * 2;
    }

    var xxx = 1;
    if (document.Form.setting.value == 3) {
        xxx = 3;
    }
    if (document.Form.setting.value == 4) {
        xxx = 10;
    }
    if (document.Form.setting.value == 5) {
        xxx = 100;
    }
    if (document.Form.setting.value == 6) {
        xxx = 1000;
    }
    for (var p = 0; p < xxx; p++) {

        if (mons == 1) {
            for (var i = 0; i < how_many; i++) mon[i] = 17;
        }
        if (mons == 2)
            for (var i = 0; i < how_many; i++) mon[i] = 13;
        if (mons == 3)
            for (var i = 0; i < how_many; i++) mon[i] = 17;

        ///戦闘開始時の探索者の耐久力を計算
        human[0] = Math.floor((con[0] + siz[0] + 1) / 2);
        human[1] = Math.floor((con[1] + siz[1] + 1) / 2);
        human[2] = Math.floor((con[2] + siz[2] + 1) / 2);
        human[3] = Math.floor((con[3] + siz[3] + 1) / 2);

        cnt_death = 0;

        battle_count++;
        round = 1;
        for (var i = 0; i < how_many_t; i++) {
            sude_kaihi[i] = 0;
            kizetu[i] = 0;
            live[i] = 1;
            death[i] = 0;
            wounded[i] = 0;
        }
        for (var i = 0; i < how_many; i++) {
            mons_sude_kaihi[i] = 0;
        }

        while (1) {
            //  console.log(round);
            result += "<b>------R " + round + "-------</b></br>";
            for (var i = 0; i < how_many; i++) {
                if (mon[i] <= 0) {
                    result += "<b>" + mons_name + i + "</b> <red> killed </red></br>";
                } else {
                    result += "<b>" + mons_name + i + "の体力 " + mon[i] + "</b></br>";
                }
            }
            for (var i = 0; i < how_many_t; i++) {
                var alpha = "";
                if (i == 0) {
                    alpha = 'A';
                }
                if (i == 1) {
                    alpha = 'B';
                }
                if (i == 2) {
                    alpha = 'C';
                }
                if (i == 3) {
                    alpha = 'D';
                }
                if (human[i] <= 0) {

                    result += "<b>" + "探索者" + alpha + " </b><red>killed</red><br>"
                } else {
                    result += "<b>" + "探索者" + alpha + "の体力" + human[i]　 + "</b><br>"
                }
            }
            var mons_speed = 0;
            if (mons == 1) {
                mons_speed = 10;
            }
            if (mons == 2) {
                mons_speed = 13;
            }

            /////////////////戦闘処理/////////////////////
            //dex=19から見ていく

            //ラウンドごとの処理
            round++;



            for (var i = 19; i > 2; i--) {

                //行動できる人の中で最大の応医を選ぶ
                var can_action = [];
                for (var y = 0; y < how_many_t; y++) {
                    if (human[y] >2 && kizetu[y] != 1) {
                        can_action.push(y);
                    //    result += "<b>行どう可能探索者" + y+ "</b><br>";
                    }
                }
                var temp = -1;
                for (var y = 0; y < can_action.length; y++) {
                    if (temp < recovery[can_action[y]]) {
                        temp = recovery[can_action[y]];
                    }
                }
              //  result += "<b>---------" + temp+ "</b><br>";



                for (var j = 0; j < how_many_t; j++) {
                    var action_flag = 0;

                    //気絶判定
                    if (i==dex[j]&&human[j] > 0 && human[j] <= 2) {
                        kizetu[j] = 1;
                    }

                    if (i == dex[j] && kizetu[j] == 1) {
                        if (j == 0) {
                            alpha = 'A';
                        }
                        if (j == 1) {
                            alpha = 'B';
                        }
                        if (j == 2) {
                            alpha = 'C';
                        }
                        if (j == 3) {
                            alpha = 'D';
                        }
                        result += "<b>探索者" + alpha + "は瀕死のため行動不能</b><br>";
                        action_flag = 1;
                    }
                    ////死亡判定
                    if (i == dex[j]) {
                        if (j == 0) {
                            alpha = 'A';
                        }
                        if (j == 1) {
                            alpha = 'B';
                        }
                        if (j == 2) {
                            alpha = 'C';
                        }
                        if (j == 3) {
                            alpha = 'D';
                        }
                        if (live[j] == 0) {
                            death[j] = 1;
                        }
                        if (human[j] <= 0) {
                            live[j] = 0;
                        }

                    }
                    if (action_flag) continue;


                    if (i == dex[j] && kizetu[j] != 1 && human[j] > 0) {
                        //気絶中の味方がいたら起こす
                        for (var aed = 0; aed < how_many_t; aed++) {
                            if (kizetu[aed] && wounded[aed] > 0 && recovery[j] == temp) {
                                if (j == 0) {
                                    alpha = 'A';
                                }
                                if (j == 1) {
                                    alpha = 'B';
                                }
                                if (j == 2) {
                                    alpha = 'C';
                                }
                                if (j == 3) {
                                    alpha = 'D';
                                }
                                var recovery_point = getRandomInt(1, 3);
                                var recovery_dice = getRandomInt(1, 100);
                                result += "<b>探索者" + alpha + "の回復判定 1d100<=(" + recovery[j] + ")→" + recovery_dice + "</b>";
                                wounded[aed]--;
                                if (recovery[j] >= recovery_dice) {
                                    if (aed == 0) {
                                        alpha = 'A';
                                    }
                                    if (aed == 1) {
                                        alpha = 'B';
                                    }
                                    if (aed == 2) {
                                        alpha = 'C';
                                    }
                                    if (aed == 3) {
                                        alpha = 'D';
                                    }
                                    result += "<b>→成功</b><br>"
                                    result += "<b>探索者" + alpha + "は意識を取り戻した</b></br>";
                                    result += "<b>探索者" + alpha + "に1d3→" + recovery_point + "の回復</b></br>";
                                    human[aed] += recovery_point;
                                    kizetu[aed] = 0;
                                    live[aed] = 1;
                                } else {
                                    result += "<b>→失敗</b></br>";
                                }
                                break;
                                action_flag = 1;
                            }
                        }


                        if (action_flag) continue;
                        //次に瀕死の味方がいたら優先して回復
                        for (var num = 0; num < how_many_t; num++) {
                            if (human[num] <= 2 && !death[num] && live[num] == 0 && wounded[num] > 0 && recovery[j] == temp) {
                                if (j == 0) {
                                    alpha = 'A';
                                }
                                if (j == 1) {
                                    alpha = 'B';
                                }
                                if (j == 2) {
                                    alpha = 'C';
                                }
                                if (j == 3) {
                                    alpha = 'D';
                                }
                                var recovery_point = getRandomInt(1, 3);
                                var recovery_dice = getRandomInt(1, 100);
                                result += "<b>探索者" + alpha + "の回復判定 1d100<=(" + recovery[j] + ")→" + recovery_dice + "</b>";
                                wounded[num]--;
                                if (recovery[j] >= recovery_dice) {
                                    if (num == 0) {
                                        alpha = 'A';
                                    }
                                    if (num == 1) {
                                        alpha = 'B';
                                    }
                                    if (num == 2) {
                                        alpha = 'C';
                                    }
                                    if (num == 3) {
                                        alpha = 'D';
                                    }
                                    result += "<b>→成功</b><br>";
                                    result += "<b>探索者" + alpha + "は死の淵から舞い戻った</b></br>";
                                    result += "<b>探索者" + alpha + "に1d3→" + recovery_point + "の回復</b></br>";
                                    human[num] += recovery_point;
                                    if (human[num] < 3) {
                                        kizetu[num] = 1;
                                    }
                                    live[num] = 1;
                                } else {
                                    result += "<b>→失敗</b></br>";
                                }
                                break;
                                action_flag = 1;
                            }
                        }

                        if (action_flag) continue;
                        for (var k = 0; k < how_many; k++) {
                            if (mon[k] > 0) {
                                if (attack_type[j] == 1) {
                                    mon[k] = naguru_tansaku(mon[k], k, j);
                                }
                                if (attack_type[j] == 2) {
                                    mon[k] = keru_tansaku(mon[k], k, j);
                                }
                                if (attack_type[j] == 3) {
                                    mon[k] = zutuki_tansaku(mon[k], k, j);
                                }
                                if (attack_type[j] == 4) {
                                    mon[k] = ma_tansaku(mon[k], k, j);
                                }
                                if (attack_type[j] == 5) {
                                    mon[k] = ma_tansaku2(mon[k], k, j);
                                }
                                if (attack_type[j] == 6) {
                                    mon[k] = ma_tansaku3(mon[k], k, j);
                                }
                                break;
                            }
                        }
                    }
                }
                ///モンスター側の攻撃
                if (i == mons_speed) {
                    for (var u = 0; u < how_many; u++) {
                        var memo = -1;
                        if (mon[u] > 0) {
                            if (mons == 1) {
                                //ランダムにチョイスする
                                //alert("live"+live.length);
                                var now_live = [];
                                now_live.length = 0;
                                for (var lily = 0; lily < how_many_t; lily++) {
                                    if (live[lily] == 1) {
                                        now_live.push(lily);
                                    }
                                }
                                var r = getRandomInt(0, now_live.length - 1);

                                r = now_live[r];
                                human[r] = moon(human[r], r, u);
                                memo = r;

                            }
                            if (mons == 2) {
                                var now_live = [];
                                now_live.length = 0;
                                for (var lily = 0; lily < how_many_t; lily++) {
                                    if (live[lily] == 1) {
                                        now_live.push(lily);
                                    }
                                }
                                var r = getRandomInt(0, now_live.length - 1);

                                r = now_live[r];

                                human[r] = goul(human[r], r, u);
                                memo = r;
                            }


                            //オーバーキル修正
                            for (var ov = 0; ov < how_many_t; ov++) {
                                if (human[ov] < 0) human[ov] = 0;
                            }


                        }
                    }
                }
            }


            if (mon[how_many - 1] <= 0) {
                result += "<bl>探索者の勝利！</bl></br>";
                for (var o = 0; o < how_many_t; o++) {
                    total_human[o] += human[o] - 0;
                }
                for (var o = 0; o < how_many_t; o++) {
                    if (death[o])
                        total_win_death++;
                }
                hwin++;
                break;
            }

            var flag_human = 0;
            for (var i = 0; i < how_many_t; i++) {
                if (human[i] > 0) {
                    flag_human = 1;
                    break;
                }
            }
            if (flag_human == 0) {
                result += "<r>探索者は負けてしまった...</r></br>";
                for (var w = 0; w < how_many_t; w++) {
                    death[w] = 1;
                }
                mwin++;
                break;
            }
            for (var i = 0; i < 4; i++) {
                sude_kaihi[i] = 0;
            }
            for (var i = 0; i < how_many; i++) {
                mons_sude_kaihi[i] = 0;
            }


        }


        for (var w = 0; w < how_many_t; w++) {
            if (death[w] == 1) {
                cnt_death++;
                t_death[w]++;
            }
        }
        round_total += round;
        total_death += cnt_death;



    }
    //ログの有り無し
    if (set == 2 || set == 3) {
        document.getElementById("write").innerHTML = result;
    }


    last_result = "";
    result = ""
    last_result += "<b>" + mons_name + "の勝利数" + mwin + "</b>";
    last_result += "<b> 探索者の勝利数" + hwin + "</b></br>";
    last_result += "<b> 探索者の勝率" + Math.floor(hwin / (battle_count / 100) * 1000) / 1000 + "% </b></br>";
    last_result += "<b> 平均経過R " + Math.floor(round_total / battle_count * 1000) / 1000 + "</b></br>";
    last_result += "<b> 平均死亡者数 " + Math.floor(total_death / battle_count * 1000) / 1000 + "</b></br>";
    if (hwin > 0) {
        last_result += "<b> 勝利時平均死亡者数 " + Math.floor(total_win_death / hwin * 1000) / 1000 + "</b></br>";
        //  last_result += "<b>勝利時の平均残耐久力</b>"
        for (var o = 0; o < how_many_t; o++) {
            if (o == 0) {
                alpha = 'A';
            }
            if (o == 1) {
                alpha = 'B';
            }
            if (o == 2) {
                alpha = 'C';
            }
            if (o == 3) {
                alpha = 'D';
            }
            //    last_result += "<b>　探索者" + alpha + " " + Math.floor(total_human[o] / hwin * 1000) / 1000 + "</b>";
        }
    }
    last_result += "<br>";
    for (var o = 0; o < how_many_t; o++) {
        if (o == 0) {
            alpha = 'A';
        }
        if (o == 1) {
            alpha = 'B';
        }
        if (o == 2) {
            alpha = 'C';
        }
        if (o == 3) {
            alpha = 'D';
        }
        last_result += "<b>" + alpha + "のはじめの耐久力 " + Math.floor((con[o] + siz[o] + 1) / 2) + "　</b>";

    }
    last_result += "<br>";
    for (var o = 0; o < how_many_t; o++) {
        if (o == 0) {
            alpha = 'A';
        }
        if (o == 1) {
            alpha = 'B';
        }
        if (o == 2) {
            alpha = 'C';
        }
        if (o == 3) {
            alpha = 'D';
        }
        last_result += "<b>" + alpha + "の死亡確率 " + Math.floor((t_death[o] / battle_count) * 1000) / 10 + "% </b>";

    }
    last_result += "<br>";

    document.getElementById("write2").innerHTML = last_result;

    var testdata = [{
            key: "Win",
            y: hwin
        }, {
            key: "Lose",
            y: mwin
        },

    ];

    var width = 300;
    var height = 300;

    nv.addGraph(function() {
        var chart = nv.models.pie()
            .x(function(d) {
                return d.key;
            })
            .y(function(d) {
                return d.y;
            })
            .width(width)
            .height(height)
            .labelType(function(d, i, values) {
                return values.key + ':' + values.value;
            });

        d3.select("#test1")
            .datum([testdata])
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        // LISTEN TO CLICK EVENTS ON THE PIE CONTAINER
        // chart.dispatch.on('chartClick', function() {
        //   code...
        // });

        // LISTEN TO CLICK EVENTS ON THE SLICES OF THE PIE
        // chart.dispatch.on('elementClick', function() {
        //   code...
        // });

        // OTHER EVENTS DISPATCHED BY THE PIE INCLUDE: elementDblClick, elementMouseover, elementMouseout, elementMousemove, renderEnd
        // @see nv.models.pie
        return chart;
    });



    if (hwin > 0) {
        historicalBarChart = [{
            key: "Cumulative Return",

            values: [{
                    "label": "A",
                    "value": total_human[0] / hwin
                }, {
                    "label": "B",
                    "value": total_human[1] / hwin
                }, {
                    "label": "C",
                    "value": total_human[2] / hwin
                }, {
                    "label": "D",
                    "value": total_human[3] / hwin
                },

            ]
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
    }

}
