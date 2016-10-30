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
var mon = new Array();
//0=false 1=true
var sude_kaihi = new Array();
var kizetu = new Array();

var db = new Array();
var db_moji = new Array();

var kaihi = new Array();
var kick = new Array();
var punch = new Array();
var head = new Array();
var ma = new Array();

var human = new Array();
var dex = new Array();
var con = new Array();
var str = new Array();
var siz = new Array();
var attack_type = new Array();
var alpha = "";

var live = new Array();
var recovery = new Array();

var death = new Array();
var wounded = new Array();

var mons_sude_kaihi = new Array();


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function hoge() {
    var add_people = "";
    if (document.Form.nop.value == 1) {

    }
    if (document.Form.nop.value == 2) {
        //alert('2');
        add_people += '<br><h3>笳区爾邏｢閠・</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ2"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>謾ｻ謦・焔谿ｵ<select name="attack2"><option value="1">縺薙・縺�/繝代Φ繝�</option><option value="2"selected>繧ｭ繝・け</option><option value="3">鬆ｭ遯√″</option><option value="4">MA+縺薙・縺�</option><option value="5">MA+繧ｭ繝・け</option><option value="6">MA+鬆ｭ遯√″</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">縺薙・縺�<select name="punch2"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">繧ｭ繝・け<select name="kick2"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">鬆ｭ遯√″<select name="head2"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma2"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">蝗樣∩・・EXx2縺悟・譛滓橿閭ｽ蛟､・�<select name="kaihi2"><option value="1"selected>蛻晄悄蛟､</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">蠢懈･謇句ｽ薙・蛹ｻ蟄ｦ<select name="recovery1"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
    }
    if (document.Form.nop.value == 3) {
        add_people += '<br><h3>笳区爾邏｢閠・</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ2"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>謾ｻ謦・焔谿ｵ<select name="attack2"><option value="1">縺薙・縺�/繝代Φ繝�</option><option value="2"selected>繧ｭ繝・け</option><option value="3">鬆ｭ遯√″</option><option value="4">MA+縺薙・縺�</option><option value="5">MA+繧ｭ繝・け</option><option value="6">MA+鬆ｭ遯√″</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">縺薙・縺�<select name="punch2"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">繧ｭ繝・け<select name="kick2"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">鬆ｭ遯√″<select name="head2"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma2"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">蝗樣∩・・EXx2縺悟・譛滓橿閭ｽ蛟､・�<select name="kaihi2"><option value="1"selected>蛻晄悄蛟､</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">蠢懈･謇句ｽ薙・蛹ｻ蟄ｦ<select name="recovery1"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
        add_people += '<br><h3>笳区爾邏｢閠・</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ3"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>謾ｻ謦・焔谿ｵ<select name="attack3"><option value="1">縺薙・縺�/繝代Φ繝�</option><option value="2"selected>繧ｭ繝・け</option><option value="3">鬆ｭ遯√″</option><option value="4">MA+縺薙・縺�</option><option value="5">MA+繧ｭ繝・け</option><option value="6">MA+鬆ｭ遯√″</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">縺薙・縺�<select name="punch3"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">繧ｭ繝・け<select name="kick3"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">鬆ｭ遯√″<select name="head3"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma3"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">蝗樣∩・・EXx2縺悟・譛滓橿閭ｽ蛟､・�<select name="kaihi3"><option value="1"selected>蛻晄悄蛟､</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">蠢懈･謇句ｽ薙・蛹ｻ蟄ｦ<select name="recovery2"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
    }
    if (document.Form.nop.value == 4) {
        add_people += '<br><h3>笳区爾邏｢閠・</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ2"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX2"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>謾ｻ謦・焔谿ｵ<select name="attack2"><option value="1">縺薙・縺�/繝代Φ繝�</option><option value="2"selected>繧ｭ繝・け</option><option value="3">鬆ｭ遯√″</option><option value="4">MA+縺薙・縺�</option><option value="5">MA+繧ｭ繝・け</option><option value="6">MA+鬆ｭ遯√″</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">縺薙・縺�<select name="punch2"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">繧ｭ繝・け<select name="kick2"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">鬆ｭ遯√″<select name="head2"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma2"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">蝗樣∩・・EXx2縺悟・譛滓橿閭ｽ蛟､・�<select name="kaihi2"><option value="1"selected>蛻晄悄蛟､</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">蠢懈･謇句ｽ薙・蛹ｻ蟄ｦ<select name="recovery1"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
        add_people += '<br><h3>笳区爾邏｢閠・</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ3"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX3"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>謾ｻ謦・焔谿ｵ<select name="attack3"><option value="1">縺薙・縺�/繝代Φ繝�</option><option value="2"selected>繧ｭ繝・け</option><option value="3">鬆ｭ遯√″</option><option value="4">MA+縺薙・縺�</option><option value="5">MA+繧ｭ繝・け</option><option value="6">MA+鬆ｭ遯√″</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">縺薙・縺�<select name="punch3"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">繧ｭ繝・け<select name="kick3"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">鬆ｭ遯√″<select name="head3"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma3"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">蝗樣∩・・EXx2縺悟・譛滓橿閭ｽ蛟､・�<select name="kaihi3"><option value="1"selected>蛻晄悄蛟､</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">蠢懈･謇句ｽ薙・蛹ｻ蟄ｦ<select name="recovery2"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
        add_people += '<br><h3>笳区爾邏｢閠・</h3><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">STR<select name="STR4"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">CON<select name="CON4"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">SIZ<select name="SIZ4"><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">DEX<select name="DEX4"><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10"selected>10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div></div><br>謾ｻ謦・焔谿ｵ<select name="attack4"><option value="1">縺薙・縺�/繝代Φ繝�</option><option value="2"selected>繧ｭ繝・け</option><option value="3">鬆ｭ遯√″</option><option value="4">MA+縺薙・縺�</option><option value="5">MA+繧ｭ繝・け</option><option value="6">MA+鬆ｭ遯√″</option></select><br><br><div class="row"><div class="col-xs-3 col-md-3 col-sm-3">縺薙・縺�<select name="punch4"><option value="50"selected>50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">繧ｭ繝・け<select name="kick4"><option value="25"selected>25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">鬆ｭ遯√″<select name="head4"><option value="10"selected>10</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">MA<select name="ma4"><option value="1"selected>1</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div><br><div class="row"><div class="col-xs-6 col-md-6 col-sm-6">蝗樣∩・・EXx2縺悟・譛滓橿閭ｽ蛟､・�<select name="kaihi4"><option value="1"selected>蛻晄悄蛟､</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div><div class="col-xs-3 col-md-3 col-sm-3">蠢懈･謇句ｽ薙・蛹ｻ蟄ｦ<select name="recovery3"><option value="30"selected>30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70</option><option value="75">75</option><option value="80">80</option><option value="85">85</option><option value="90">90</option><option value="95">95</option><option value="99">99</option></select></div></div>'
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
    result += "<b>鬟溷ｱ埼ｬｼ" + u + "縺ｮ謾ｻ謦�!</b></br>";
    var doge = getRandomInt(1, 100);
    var yari = getRandomInt(1, 100);

    result += "<b>鬟溷ｱ埼ｬｼ" + u + "縺ｮ繧ｫ繧ｮ辷ｪ蛻､螳壹1d100<=(30)竊�" + yari + "</b></br>";

    if (yari <= 25) {
        result += "<b>遨｢繧後◆辷ｪ縺梧爾邏｢閠�" + alpha + "繧定･ｲ縺・ｼ�</b></br>";

        if (kizetu[t] == 1) {
            result += "<b>謗｢邏｢閠�" + alpha + "縺ｯ諢剰ｭ倥ｒ螟ｱ縺｣縺ｦ縺・ｋ...</b></br>";
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 10) + 1);
            result += "<b>謗｢邏｢閠・↓1d10+1+1d6竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
            return a - damage;
        }


        if (doge > kaihi[t] || sude_kaihi[t] == 1) {
            if (sude_kaihi[t] == 1) {
                result += "<b>蝗樣∩閾ｪ蜍募､ｱ謨�(蝗樣∩陦悟虚貂�)</b></br>";
            } else {
                result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + kaihi[t] + ")竊�" + doge + "</b></br>";
                sude_kaihi[t] = 1;
                result += "<b>謗｢邏｢閠�" + alpha + "蝗樣∩螟ｱ謨�</b></br>";
            }
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 4));
            result += "<b>謗｢邏｢閠�" + alpha + "縺ｫ1d6+1d4竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
            wounded[t]++;
            //  alert(a/2);
            if (damage >= a / 2 && damage < a) {
                var shock = getRandomInt(1, 100)
                result += "<b>繧ｷ繝ｧ繝・け繝ｭ繝ｼ繝ｫ蛻､螳� 1d100<=(" + con[t] * 5 + ")竊�" + shock + "</b></br>";
                if (shock > con[t] * 5) {
                    kizetu[t] = 1;
                    result += "<b>謗｢邏｢閠�" + alpha + "縺ｯ諢剰ｭ倥ｒ螟ｱ縺｣縺ｦ縺励∪縺｣縺�</b></br>";
                    //  a = 0;

                } else {
                    //  result += "<b>謗｢邏｢閠�"+alpha+"縺ｯ豌怜鴨縺ｧ閠舌∴縺�</b></br>";
                }
            }
            a -= (damage);
            return a;
        } else {
            result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + kaihi[t] + ")竊�" + doge + "</b></br>";
            result += "<b>謗｢邏｢閠�" + alpha + "蝗樣∩謌仙粥</b></br>";
            sude_kaihi[t] = 1;
            return a;
        }
    } else {
        result += "<b>繧ｫ繧ｮ辷ｪ縺ｯ遨ｺ繧偵″縺｣縺�...</b></br>";
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
    result += "<b>繝繝ｼ繝ｳ繝薙・繧ｹ繝�" + u + "縺ｮ謾ｻ謦�!</b></br>";
    var doge = getRandomInt(1, 100);
    var yari = getRandomInt(1, 100);

    result += "<b>繝繝ｼ繝ｳ繝薙・繧ｹ繝�" + u + "縺ｮ讒榊愛螳壹1d100<=(25)竊�" + yari + "</b></br>";

    if (yari <= 25) {
        result += "<b>讒阪′謗｢邏｢閠�" + alpha + "繧定･ｲ縺・ｼ�</b></br>";

        if (kizetu[t] == 1) {
            result += "<b>謗｢邏｢閠�" + alpha + "縺ｯ諢剰ｭ倥ｒ螟ｱ縺｣縺ｦ縺・ｋ...</b></br>";
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 10) + 1);
            result += "<b>謗｢邏｢閠�" + alpha + "縺ｫ1d10+1+1d6竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
            a -= damage;
            return a;
        }


        if (doge > kaihi[t] || sude_kaihi[t] == 1) {
            if (sude_kaihi[t] == 1) {
                result += "<b>蝗樣∩閾ｪ蜍募､ｱ謨�(蝗樣∩陦悟虚貂�)</b></br>";
            } else {
                result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + kaihi[t] + ")竊�" + doge + "</b></br>";
                sude_kaihi[t] = 1;
                result += "<b>謗｢邏｢閠�" + alpha + "蝗樣∩螟ｱ謨�</b></br>";
            }
            var damage = (getRandomInt(1, 6) + getRandomInt(1, 10) + 1);
            result += "<b>謗｢邏｢閠�" + alpha + "縺ｫ1d10+1+1d6竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
            wounded[t]++;
            //  alert(a/2);
            if (damage >= a / 2 && damage < a) {
                var shock = getRandomInt(1, 100)

                result += "<b>繧ｷ繝ｧ繝・け繝ｭ繝ｼ繝ｫ蛻､螳� 1d100<=(" + con[t] * 5 + ")竊�" + shock + "</b></br>";
                if (shock > con[t] * 5) {
                    kizetu[t] = 1;
                    result += "<b>謗｢邏｢閠�" + alpha + "縺ｯ諢剰ｭ倥ｒ螟ｱ縺｣縺ｦ縺励∪縺｣縺�</b></br>";
                    //a = 0;

                } else {
                    //result += "<b>謗｢邏｢閠�"+alpha+"縺ｯ豌怜鴨縺ｧ閠舌∴縺�</b></br>";
                }
            }
            a -= (damage);
            return a;
        } else {
            result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + kaihi[t] + ")竊�" + doge + "</b></br>";
            result += "<b>謗｢邏｢閠�" + alpha + "蝗樣∩謌仙粥</b></br>";
            sude_kaihi[t] = 1;
            return a;
        }
    } else {
        result += "<b>繝繝ｼ繝ｳ繝薙・繧ｹ繝医・讒阪・蠖薙◆繧峨↑縺�...</b></br>";
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
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ謾ｻ謦�!</b></br>";
    var doge = getRandomInt(1, 100);
    var punch_dice = getRandomInt(1, 100);
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ縺薙・縺�/繝代Φ繝∝愛螳壹1d100<=(" + punch[t] + ")竊�" + punch_dice + "</b></br>";
    if (punch_dice <= punch[t]) {
        result += "<b>谿ｴ繧翫°縺九ｋ・�</b></br>";
        //console.log(mons);
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26
        }

        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            mons_sude_kaihi[k] = 1;
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 3) + db[t];
        //alert(db);
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ 1d3" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;

    } else {
        result += "<b>蠖薙◆繧峨↑縺�...</b></br>";
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
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ謾ｻ謦�!</b></br>";
    var doge = getRandomInt(1, 100);
    var kick_dice = getRandomInt(1, 100);
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ繧ｭ繝・け蛻､螳壹1d100<=(" + kick[t] + ")竊�" + kick_dice + "</b></br>";
    if (kick_dice <= kick[t]) {
        result += "<b>諤昴＞蛻・ｊ雹ｴ鬟帙・縺呻ｼ�</b></br>";
        //console.log(mons);
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        //console.log("db" + db[0]);
        var damage = getRandomInt(1, 6) + Number(db[t]);
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ1d6" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;

    } else {
        result += "<b>遨ｺ謖ｯ繧�...</b></br>";
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
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ謾ｻ謦�!</b></br>";
    var doge = getRandomInt(1, 100);
    var zutuki_dice = getRandomInt(1, 100);
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ鬆ｭ遯√″蛻､螳壹1d100<=(" + head[t] + ")竊�" + zutuki_dice + "</b></br>";
    if (zutuki_dice <= head[t]) {
        result += "<b>遏ｳ鬆ｭ・�</b></br>";
        //console.log(mons);
        if (mons == 1) {縲
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {

            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        //  console.log("db" + db[0]);
        var damage = getRandomInt(1, 4) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ1d4" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;

    } else {
        result += "<b>遨ｺ謖ｯ繧�...</b></br>";
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
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ謾ｻ謦�!</b></br>";
    var doge = getRandomInt(1, 100);
    //var kobusi_dice = getRandomInt(1, 100);
    var ma_dice = getRandomInt(1, 100);
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ縺薙・縺�/繝代Φ繝∝愛螳� + MA蛻､螳� <br>cbr<=(" + punch[t] + "," + ma[t] + ")竊�" + ma_dice + "</b>";

    if (ma_dice <= ma[t] && ma_dice <= punch[t]) {
        result += "<b>[謌仙粥,謌仙粥]竊呈・蜉�</b></br>";
        result += "<b>MA縺ｮ荵励▲縺溘ヱ繝ｳ繝�!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            if (doge <= 20) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        var damage = 2 * getRandomInt(1, 3) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ2d3" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;


    } else if (ma_dice <= punch[t]) {
        result += "<b>[謌仙粥,螟ｱ謨余竊帝Κ蛻・噪謌仙粥</b></br>";
        result += "<b>繝代Φ繝�!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 3) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>"
        mons_name + "縺ｫ1d3" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;

    } else if (ma_dice <= ma[t]) {
        result += "<b>[螟ｱ謨�,謌仙粥]竊帝Κ蛻・噪謌仙粥</b></br>";
        result += "<b>MA縺ｮ縺ｿ謌仙粥縲繝繝｡繝ｼ繧ｸ繝ｭ繝ｼ繝ｫ縺ｪ縺�</b></br>";
        return a;
    } else {
        result += "<b>[螟ｱ謨�,螟ｱ謨余竊貞､ｱ謨�</b></br>";
        result += "<b>謾ｻ謦・・螟悶ｌ縺�...</b></br>";
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
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ謾ｻ謦�!</b></br>";
    var doge = getRandomInt(1, 100);
    //  var kick_dice = getRandomInt(1, 100);
    var ma_dice = getRandomInt(1, 100);
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ繧ｭ繝・け蛻､螳� + MA蛻､螳� <br>cbr<=(" + kick[t] + "," + ma[t] + ")竊�" + ma_dice + "</b>";


    if (ma_dice <= ma[t] && ma_dice <= kick[t]) {
        result += "<b>[謌仙粥,謌仙粥]竊呈・蜉�</b></br>";
        result += "<b>MA縺ｮ荵励▲縺溘く繝・け!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        var damage = 2 * getRandomInt(1, 6) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ2d6" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;


    } else if (ma_dice <= kick[t]) {
        result += "<b>[謌仙粥,螟ｱ謨余竊帝Κ蛻・噪謌仙粥</b></br>";
        result += "<b>繧ｭ繝・け!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 6) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ1d6" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;

    } else if (ma_dice <= ma[t]) {
        result += "<b>[螟ｱ謨�,謌仙粥]竊帝Κ蛻・噪謌仙粥</b></br>";
        result += "<b>MA縺ｮ縺ｿ謌仙粥縲繝繝｡繝ｼ繧ｸ繝ｭ繝ｼ繝ｫ縺ｪ縺�</b></br>";
        return a;
    } else {
        result += "<b>[螟ｱ謨�,螟ｱ謨余竊貞､ｱ謨�</b></br>";
        result += "<b>謾ｻ謦・・螟悶ｌ縺�...</b></br>";
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
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ謾ｻ謦�</b></br>";
    var doge = getRandomInt(1, 100);
    //  var zutuki_dice = getRandomInt(1, 100);
    var ma_dice = getRandomInt(1, 100);
    result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ鬆ｭ遯√″蛻､螳� + MA蛻､螳� <br>cbr<=(" + head[t] + "," + ma[t] + ")竊�" + ma_dice + "</b>";


    if (ma_dice <= ma[t] && ma_dice <= head[t]) {
        result += "<b>[謌仙粥,謌仙粥]竊呈・蜉�</b></br>";
        result += "<b>MA縺ｮ荵励▲縺滄ｭ遯√″!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(20)竊�" + doge + "</b></br>";
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        db_rand(t);
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        var damage = 2 * getRandomInt(1, 4) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ2d4" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;


    } else if (ma_dice <= head[t]) {
        result += "<b>[謌仙粥,螟ｱ謨余竊帝Κ蛻・噪謌仙粥</b></br>";
        result += "<b>鬆ｭ遯√″!</b></br>";
        if (mons == 1) {
            mons_kaihi = 20;
        }
        if (mons == 2) {
            mons_kaihi = 26;
        }
        if (mons_sude_kaihi[k] == 1) {
            result += "<b>" + mons_name + k + "縺ｯ譌｢縺ｫ蝗樣∩陦悟虚貂�</b></br>";
        } else {
            mons_sude_kaihi[k] = 1;
            result += "<b>" + mons_name + k + "縺ｮ蝗樣∩蛻､螳� 1d100<=(" + mons_kaihi + ")竊�" + doge + "</b></br>";
            if (doge <= mons_kaihi) {
                result += "<b>" + mons_name + k + "縺ｯ謾ｻ謦・ｒ驕ｿ縺代◆</b></br>";
                return a;
            }
        }
        result += "<b>" + mons_name + k + "縺ｫ蜻ｽ荳ｭ・�</b></br>";
        db_rand(t);
        var damage = getRandomInt(1, 4) + db[t];
        if (damage < 0) {
            damage = 0;
        }
        a -= damage;
        result += "<b>" + mons_name + k + "縺ｫ1d4" + db_moji[t] + "竊�" + damage + "縺ｮ繝繝｡繝ｼ繧ｸ</b></br>";
        return a;

    } else if (ma_dice <= ma[t]) {
        result += "<b>[螟ｱ謨�,謌仙粥]竊帝Κ蛻・噪謌仙粥</b></br>";
        result += "<b>MA縺ｮ縺ｿ謌仙粥縲繝繝｡繝ｼ繧ｸ繝ｭ繝ｼ繝ｫ縺ｪ縺�</b></br>";
        return a;
    } else {
        result += "<b>[螟ｱ謨�,螟ｱ謨余竊貞､ｱ謨�</b></br>";
        result += "<b>謾ｻ謦・・螟悶ｌ縺�...</b></br>";
        return a;
    }
}

function deletes() {
    document.getElementById("write").innerHTML = "";
    result = "";
    last_result = "";
    round_total = 0;
    battle_count = 0
    mwin = 0;
    hwin = 0;
    //document.getElementById("write").style.display = "none";
    document.getElementById("write2").innerHTML = "";
    //  document.getElementById("write2").style.display = "none";
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

    ///////////////謗｢邏｢閠・ｼ代・諠・ｱ///////////////////////////////
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


    ///////////////謗｢邏｢閠�2縺ｮ諠・ｱ///////////////////////////////
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
    ///////////////謗｢邏｢閠�3縺ｮ諠・ｱ///////////////////////////////
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
    ///////////////謗｢邏｢閠�4縺ｮ諠・ｱ///////////////////////////////
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



    ////////陦ｨ遉ｺ險ｭ螳�/////////////////////////////
    var set = document.Form.setting.value;



    mons = document.Form.monster.value;
    if (mons == 1) {
        mons_name = "繝繝ｼ繝ｳ繝薙・繧ｹ繝�";
    } else if (mons == 2) {
        mons_name = "鬟溷ｱ埼ｬｼ";
    }
    if (mons > 2) {
        alert("貅門ｙ荳ｭ... 縺ｾ縺螳溯｣・＆繧後※縺ｪ縺・ｈ(繝ｻﾏ�<)");
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
    for (var p = 0; p < xxx; p++) {

        if (mons == 1) {
            for (var i = 0; i < how_many; i++) mon[i] = 17;
        }
        if (mons == 2)
            for (var i = 0; i < how_many; i++) mon[i] = 13;
        if (mons == 3)
            for (var i = 0; i < how_many; i++) mon[i] = 17;

        ///謌ｦ髣倬幕蟋区凾縺ｮ謗｢邏｢閠・・閠蝉ｹ・鴨繧定ｨ育ｮ�
        human[0] = Math.floor((con[0] + siz[0] + 1) / 2);
        human[1] = Math.floor((con[1] + siz[1] + 1) / 2);
        human[2] = Math.floor((con[2] + siz[2] + 1) / 2);
        human[3] = Math.floor((con[3] + siz[3] + 1) / 2);


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
                    result += "<b>" + mons_name + i + "縺ｮ菴灘鴨 " + mon[i] + "</b></br>";
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

                    result += "<b>" + "謗｢邏｢閠�" + alpha + " </b><red>killed</red><br>"
                } else {
                    result += "<b>" + "謗｢邏｢閠�" + alpha + "縺ｮ菴灘鴨" + human[i]縲 + "</b><br>"
                }
            }
            var mons_speed = 0;
            if (mons == 1) {
                mons_speed = 10;
            }
            if (mons == 2) {
                mons_speed = 13;
            }

            /////////////////謌ｦ髣伜・逅�/////////////////////
            //dex=19縺九ｉ隕九※縺・￥

            //繝ｩ繧ｦ繝ｳ繝峨＃縺ｨ縺ｮ蜃ｦ逅�
            round++;

            for (var i = 19; i > 2; i--) {
                for (var j = 0; j < how_many_t; j++) {
                    var action_flag = 0;
                    if (i == dex[j] && kizetu[j] != 1 && human[j] > 0) {
                        //豌礼ｵｶ荳ｭ縺ｮ蜻ｳ譁ｹ縺後＞縺溘ｉ襍ｷ縺薙☆
                        for (var aed = 0; aed < how_many_t; aed++) {
                            if (kizetu[aed] && wounded[aed] > 0) {
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
                                result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ蝗槫ｾｩ蛻､螳� 1d100<=(" + recovery[j] + ")竊�" + recovery_dice + "</b></br>";
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
                                    result += "<b>謗｢邏｢閠�" + alpha + "縺ｯ諢剰ｭ倥ｒ蜿悶ｊ謌ｻ縺励◆</b></br>";
                                    result += "<b>謗｢邏｢閠�" + alpha + "縺ｫ1d3竊�" + recovery_point + "縺ｮ蝗槫ｾｩ</b></br>";
                                    human[aed] += recovery_point;
                                    kizetu[aed] = 0;
                                    live[aed] = 1;
                                } else {
                                    result += "<b>謇句ｽ灘､ｱ謨�</b></br>";
                                }

                                action_flag = 1;
                            }
                        }
                        if (action_flag) continue;
                        //谺｡縺ｫ轢墓ｭｻ縺ｮ蜻ｳ譁ｹ縺後＞縺溘ｉ蜆ｪ蜈医＠縺ｦ蝗槫ｾｩ
                        for (var num = 0; num < how_many_t; num++) {
                            if (human[num] <= 2 && !death[num] && live[num] == 0 && wounded[num] > 0) {
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
                                result += "<b>謗｢邏｢閠�" + alpha + "縺ｮ蝗槫ｾｩ蛻､螳� 1d100<=(" + recovery[j] + ")竊�" + recovery_dice + "</b></br>";
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
                                    result += "<b>謗｢邏｢閠�" + alpha + "縺ｯ豁ｻ縺ｮ豺ｵ縺九ｉ闊槭＞謌ｻ縺｣縺�</b></br>";
                                    result += "<b>謗｢邏｢閠�" + alpha + "縺ｫ1d3竊�" + recovery_point + "縺ｮ蝗槫ｾｩ</b></br>";
                                    human[num] += recovery_point;
                                    if (human[num] < 3) {
                                        kizetu[num] = 1;
                                    }
                                    live[num] = 1;
                                } else {
                                    result += "<b>謇句ｽ灘､ｱ謨�</b></br>";
                                }

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
                ///繝｢繝ｳ繧ｹ繧ｿ繝ｼ蛛ｴ縺ｮ謾ｻ謦�
                if (i == mons_speed) {
                    for (var u = 0; u < how_many; u++) {
                        if (mon[u] > 0) {
                            if (mons == 1) {
                                //荳九・逡ｪ蜿ｷ縺ｮ繧・▽縺九ｉ縺ｭ繧峨≧
                                // for (var k = 0; k < how_many_t; k++) {
                                //     if (human[k] > 0) {
                                //         human[k] = moon(human[k], k);
                                //         break;
                                //     }
                                // }
                                //繝ｩ繝ｳ繝繝縺ｫ繝√Ι繧､繧ｹ縺吶ｋ
                                //alert("live"+live.length);
                                var now_live = new Array();
                                now_live.length = 0;
                                for (var lily = 0; lily < how_many_t; lily++) {
                                    if (live[lily] == 1) {
                                        now_live.push(lily);
                                    }
                                }
                                // for (var hu = 0; hu < now_live.length - 1; hu++) {
                                //     console.log("now_live[" + hu + "] " + now_live[hu]);
                                // }
                                var r = getRandomInt(0, now_live.length - 1);
                                //result += "<b>謗｢邏｢閠�" + now_live[0]+now_live[1] + "</b></br>";

                                r = now_live[r];
                                human[r] = moon(human[r], r, u);
                            }
                            if (mons == 2) {
                                var now_live = new Array();
                                now_live.length = 0;
                                for (var lily = 0; lily < how_many_t; lily++) {
                                    if (live[lily] == 1) {
                                        now_live.push(lily);
                                    }
                                }
                                // for (var hu = 0; hu < now_live.length - 1; hu++) {
                                //     console.log("now_live[" + hu + "] " + now_live[hu]);
                                // }
                                var r = getRandomInt(0, now_live.length - 1);
                                //result += "<b>謗｢邏｢閠�" + now_live[0]+now_live[1] + "</b></br>";

                                r = now_live[r];

                                human[r] = goul(human[r], r, u);
                                //alert(r);
                                //break;


                                // for (var k = 0; k < how_many_t; k++) {
                                //     if (human[k] > 0) {
                                //         human[k] = goul(human[k], k);
                                //         break;
                                //     }
                                // }
                            }
                        }
                    }
                }
            }
            //豌礼ｵｶ蛻､螳�
            for (var i = 0; i < how_many_t; i++) {
                if (human[i] > 0 && human[i] <= 2) {
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
                    result += "<b>謗｢邏｢閠�" + alpha + "縺ｯ轢墓ｭｻ縺ｮ縺溘ａ陦悟虚荳崎・</b><br>";
                    kizetu[i] = 1;
                }
            }

            //繧ｪ繝ｼ繝舌・繧ｭ繝ｫ菫ｮ豁｣
            for (var i = 0; i < how_many_t; i++) {
                if (human[i] < 0) human[i] = 0;
            }

            ////豁ｻ莠｡蛻､螳�

            for (var i = 0; i < how_many_t; i++) {
                if (live[i] == 0) {
                    death[i] = 1;
                }
                if (human[i] <= 0) {
                    live[i] = 0;
                }

            }

            if (mon[how_many - 1] <= 0) {
                result += "<q>謗｢邏｢閠・・蜍晏茜・�</q></br>";
                //result += "<q>######################</q></br>";
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
                result += "<r>謗｢邏｢閠・・雋縺代※縺励∪縺｣縺�...</r></br>";
                mwin++;
                break;
            }

            // if (human[how_many_t - 1] <= 0 || kizetu[how_many_t - 1] == 1) {
            //     result += "<b>謗｢邏｢閠・・雋縺代※縺励∪縺｣縺�...</b></br>";
            //     mwin++;
            //     break;
            // }



            for (var i = 0; i < 4; i++) {
                sude_kaihi[i] = 0;
            }
            for (var i = 0; i < how_many; i++) {
                mons_sude_kaihi[i] = 0;
            }
            // for (var i = 0; i < how_many_t; i++) {
            //     console.log("human[" + i + "]" + human[i]);
            // }



        }

        round_total += round;
    }
    if (set == 2 || set == 3) {
        document.getElementById("write").innerHTML = result;
    }
    last_result = "";
    result = ""
    last_result += "<b>" + mons_name + "縺ｮ蜍晏茜謨ｰ" + mwin + "</b>";
    last_result += "<b> 謗｢邏｢閠・・蜍晏茜謨ｰ" + hwin + "</b></br>";
    last_result += "<b> 謗｢邏｢閠・・蜍晉紫" + Math.floor(hwin / (battle_count / 100) * 1000) / 1000 + "%</b></br>";
    last_result += "<b> 蟷ｳ蝮・ｵ碁℃R " + Math.floor(round_total / battle_count * 1000) / 1000 + "</b></br>";
    document.getElementById("write2").innerHTML = last_result;

}
