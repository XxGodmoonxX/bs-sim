var STR, CON, POW, DEX, APP, SIZ, INT, EDU, SAN, LUCK, IDEA, KNOW, HP, MP, SHO, SYU, DB, AVOID;

//エンジニア	化学,機械修理,重機械操作,地質学,図書館,物理学,趣味
//医師	医学,応急手当,信用,心理学,精神分析,生物学,ラテン語,薬学,趣味

var val = 0; //技能値表示
//差分（現在技能ち-初期技能ち）の変数
var sabun = 0;

//職業技能ポイントを振った技能を記録
var pro_skill_memo = [];
var pro_skill_id = [];
var pro_huri = [];
//趣味技能ポイントを振った技能を記録
var syumi_skill_memo = [];
var syumi_skill_id = [];
var syumi_huri = [];


// //毎秒、趣味技能と職業技能の同期処理
// function douki(){
//   var temp_idx=0;
//   var temp_idx_s;
//   for(var temp_idx=0;temp_idx<=58;temp_idx++){
//     var px=document.getElementById(temp_idx).innerHTML;
//     temp_idx_s=temp_idx+100;
//     var sx=document.getElementById(temp_idx_s).innerHTML;
//     if(px>sx){
//       document.getElementById(temp_idx).innerHTML=sx;
//     }else{
//       document.getElementById(temp_idx_s).innerHTML=px;
//     }
//   }
// }
// setInterval(douki, 1000);


function HTML_Load(_html, replace) {
    //Httpリクエスを作る
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", _html, true);
    xmlhttp.onreadystatechange = function() {
        //とれた場合Idにそって入れ替え
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            var elem = document.getElementById(replace);
            elem.innerHTML = data;
            return data;
        }
    }
    xmlhttp.send(null);
}

// ①Web Storageの実装確認
if (typeof localStorage === 'undefined') {
    window.alert("このブラウザはWeb Storage機能が実装されていません");
} else {
    //	window.alert("このブラウザはWeb Storage機能を実装しています");

    var storage = localStorage;

    // ③localStorageへの格納
    function setlocalStorage() {
        var key = document.getElementById("textkey").value;
        var value = document.getElementById("textdata").value;

        // 値の入力チェック
        if (key && value) {
            storage.setItem(key, value);
        }

        // 変数の初期化
        key = "";
        value = "";

        viewStorage();
    }

    // ③localStorageからのデータの取得と表示
    function job_skill_show() {

        // localStorageすべての情報の取得
        for (var i = 0; i < storage.length; i++) {
            var _key = storage.key(i);
            var value = storage.getItem(_key);
            var job_name = document.getElementById("job").value;
            console.log(_key);
            console.log(value);
            console.log(job_name);
            if (job_name === _key) {
                console.log("一致");
                show(value);
            }
        }
    }


    //
    function changeproValue(value, val) {
        //id valの要素は各技能のpの変更前のスライド値
        //value は各技能のpの変更後の表示値
        //sabunは変量を保存する変数
        //izenは変化前のスライド値を保存する変数
        sabun = document.getElementById(val).innerHTML - value;
        var izen = document.getElementById(val).innerHTML;

        //sは職業pのスライド値、tは職業pの表示値
        var s = document.getElementById("J_slide").value;
        var t = document.getElementById("job_P").innerHTML;

        if (Number(t) + Number(sabun) < 0) {
            //  alert('割り振れるポイントが超過しました')
            //職業pの表示値を0に
            document.getElementById("job_P").innerHTML = 0;
            //職業pのスライド値を0に
            document.getElementById("J_slide").value = 0;
            //各技能pのスライド値にsabunを可能な限り振る
            document.getElementById(val).innerHTML = Number(izen) + Number(s);
            //各技能pの表示値もスライド値と同じ値に
            value = Number(izen) + Number(s);
            //各技能pのスライド値と表示値が一致しないのでconsole.log
            var temp = val
            var temp_slide = "slide" + val;
            document.getElementById(temp_slide).value = value;
        } else {
            //変化後のスライド値が正の場合は問題ないのでそのまま

            //各技能のスライドpを各技能の表示と一致させる、
            document.getElementById(val).innerHTML = value;

            //職業pの表示値にsabunをたす
            document.getElementById("job_P").innerHTML = Number(t) + Number(sabun);
            //職業pのスライド値にsabunをたす
            document.getElementById("J_slide").value = Number(s) + Number(sabun);
            //現在の職業pのスライド値を表示
            console.log(document.getElementById("J_slide").value);
        }

        //趣味技能の方の同一技能の方も減らす
        val -= 100;
        document.getElementById(val).innerHTML = value;
        //こちらはスライドが変更されていないのでプログラムで支持する
        var temp_slide = "slide" + val;
        document.getElementById(temp_slide).value = value;


    }
    //実はこいつが真のchangesyumiVal
    function changeValue(value, val) {
        //id valの要素は各技能のpの変更前のスライド値
        //value は各技能のpの変更後の表示値
        //sabunは変量を保存する変数
        //izenは変化前のスライド値を保存する変数
        sabun = document.getElementById(val).innerHTML - value;
        var izen = document.getElementById(val).innerHTML;

        syumi_skill_id.push(val);

        var u = document.getElementById("S_slide").value;
        var v = document.getElementById("syumi_P").innerHTML;

        if (Number(v) + Number(sabun) < 0) {
            //  alert('割り振れるポイントが超過しました')
            //職業pの表示値を0に
            document.getElementById("syumi_P").innerHTML = 0;
            //職業pのスライド値を0に
            document.getElementById("S_slide").value = 0;
            //各技能pのスライド値にsabunを可能な限り振る
            document.getElementById(val).innerHTML = Number(izen) + Number(u);
            //各技能pの表示値もスライド値と同じ値に
            value = Number(izen) + Number(u);
            //各技能pのスライド値と表示値が一致しないのでconsole.log
            var temp = val
            var temp_slide = "slide" + val;
            document.getElementById(temp_slide).value = value;
        } else {
            //変化後のスライド値が正の場合は問題ないのでそのまま

            //各技能のスライドpを各技能の表示と一致させる、
            document.getElementById(val).innerHTML = value;

            //趣味pの表示値にsabunをたす
            document.getElementById("syumi_P").innerHTML = Number(v) + Number(sabun);
            //趣味pのスライド値にsabunをたす
            document.getElementById("S_slide").value = Number(u) + Number(sabun);

        }
        var t_val = val + 100;
        if (document.getElementById(t_val) != null) {
            //職業技能の方の同一技能の方も減らす
            document.getElementById(t_val).innerHTML = value;
            //こちらはスライドが変更されていないのでプログラムで支持する
            var temp_slide = "slide" + t_val;
            document.getElementById(temp_slide).value = value;
        }


    }


    //職業自由選択技能を出す
    function free_show() {
        //alert("yes");
        console.log("free_show yes");
        var xjob = document.getElementById("job_hobby").value;
        console.log(xjob);
        //職業選択技能に含まれていないかチェック
        for (var i = 0; i < pro_skill_memo.length; i++) {
            if (pro_skill_memo[i] == xjob) {
                alert("すでに職業技能にある技能です。");
                return;
            }
        }

        //変数idxはhash配列の何番目の技能かを保存する変数
        var idx = 0;
        for (key in hash) {
            if (key == xjob) {
                pro_skill_memo.push(xjob);
                //alert(key + "の初期値は" + hash[key] +"だよ");
                shoki = hash[key];
                break;
            }
            //一致しなかった場合次の要素を見るのでidx++
            idx++;
        }
        idx += 100;
        pro_skill_id.push(idx);
        document.getElementById('free_var').innerHTML = '<b><span id="' + idx + '">' + shoki + '</span></b>' + ' <input type="range" name="num" id = "slide' + idx + '" min=' + shoki + ' max="100" step="1" value=' + shoki + ' onchange="changeproValue(this.value,' + idx + ')">' + '<br>';
    }

    function _delete_element(id_name) {
        var dom_obj = document.getElementById(id_name);
        var dom_obj_parent = dom_obj.parentNode;
        dom_obj_parent.removeChild(dom_obj);
    }

    function syumirec() {
        if (document.getElementById("syumi_P").innerHTML > 0) {
            alert("まだ割り振れる趣味技能ポイントがのこっています。");
        } else {
            syumi_huri.length = 0;
            syumi_skill_id.length=0;
            syumi_skill_memo.length=0;
            for (var i = 0; i < 60; i++) {
                var x = document.getElementById(i).innerHTML;
                //yは趣味技能の初期値
                //  var y = hash2[syumi_skill_id[i]];
                //yは職業技能を降った時点でのそれぞれの技能値に hash2の初期値を更新すれば良い？　prorec()時にhash2の書き換え
                var y = Althash2[i];
                if (x > y) {
                    //  console.log(y);
                    syumi_huri.push(x - y);
                    syumi_skill_id.push(i);
                    syumi_skill_memo.push(hash3[i]);
                }
            }
            for (var i = 0; i < syumi_huri.length; i++) {
                console.log(syumi_huri[i]);
                console.log(syumi_skill_id[i]);
                console.log(syumi_skill_memo[i]);
            }
            for (var i = 0; i < 60; i++) {
                _delete_element('slide' + i);
            }
            //_delete_element('preview2');

            //出力ボタンを出す。
            var str = '<input type="button" class = "sample"value="出力" onclick="create_memo()">';
            document.getElementById("memo").innerHTML = str;
        }
    }

    //職業技能の入力情報を保存する
    function prorec() {
        if (document.getElementById("job_P").innerHTML > 0) {
            alert("まだ割り振れる職業技能ポイントがのこっています。");
        } else {
            //職業pを割り振った時点での各技能ｐを記録
            for (var i = 0; i < pro_skill_id.length; i++) {
                var x = document.getElementById(pro_skill_id[i]).innerHTML;
                var y = hash[pro_skill_memo[i]];
                pro_huri.push(x - y);
            }
            for (var i = 0; i < pro_huri.length; i++) {
                //console.log(pro_huri[i]);
                var x = Number(pro_skill_id[i]) - 100;
                Althash2[x] = pro_huri[i] + hash2[x];
            }



            //出力ボタンを出す。
            var str = '<input type="button" class= "sample" value="趣味技能入力完了" onclick="syumirec()">';
            document.getElementById("memo").innerHTML = str;
            document.getElementById("preview").innerHTML = "";

            _delete_element('hobby_show');
            _delete_element('show');

        }


    }
    //職業入力欄を出す
    function show_job() {
        var str = "";

        str += '<a></a><input type="text" placeholder= "職業名"id="job">';
        str += '<button id="show" class ="sample" onclick="job_skill_show()">技能表示</button>';

        _delete_element('dice');
        //  _delete_element('dice_message');


        document.getElementById("job_preview").innerHTML = str;

    }

    //職業選択技能を出す
    function show(x) {
        var shoki_syumi_p = INT * 10;

        pro_skill_id.length = 0;
        //EDU*20の降っていない状態の職業技能P 今は仮に300
        var shoki_shoku_p = Number(EDU) * 20;


        var cnt = 0;
        for (var i = 0; i < x.length - 1; i++) {
            if (x[i] == ",") cnt++;
        }
        var s = x.split(",");
        var str = '';

        for (var i = 0; i <= cnt; i++) {
            var shoki = 0;
            //初期値検索

            //s[i]が趣味の場合入力フォームで更新
            if (s[i] == "趣味") {
                str += '<input type="text" id = "job_hobby" value="" placeholder="職業選択技能" onChange="free_show()">' + '<div id="free_var"></div>';

            } else {
                //hash配列から初期値の取得
                //変数idxはhash配列の何番目の技能かを保存する変数
                var idx = 0;
                for (key in hash) {
                    if (key == s[i]) {
                        //職業自由選択技能とかぶらないか後で確認するため保存
                        pro_skill_memo.push(s[i]);
                        //alert(key + "の初期値は" + hash[key] +"だよ");
                        shoki = hash[key];
                        break;
                    }
                    //一致しなかった場合次の要素を見るのでidx++
                    idx++;
                }

                idx += 100;
                pro_skill_id.push(idx);
                str += '<b>' + s[i] + ' <span id="' + idx + '">' + shoki + '</span></b>' + '<input type="range" name="num" id = "slide' + idx + '" min=' + shoki + ' max="100" step="1" value=' + shoki + ' onchange="changeproValue(this.value,' + idx + ')"> ' + '<br>';

            }

        }

        str += "<br>"

        str += "<b>残り職業技能P" + ' <span id="job_P">' + shoki_shoku_p + '</span></b>' + '<input type="range" disabled id = "J_slide" min="0" max="400" step="1" value=' + shoki_shoku_p + '>' + '<br>';
        str += '<button id="hobby_show" class="sample"onclick="prorec()">職業技能入力完了</button>'
        document.getElementById("preview").innerHTML = str;


        //趣味技能を出す
        HTML_Load('genelate.html', 'top');
        HTML_Load('./side.html', 'side');

        str = "";



        str += "<b>残り趣味技能P" + ' <span id="syumi_P">' + shoki_syumi_p + '</span></b>' + '<input type="range" disabled id="S_slide" min="0" max="400" step="1" value=' + shoki_syumi_p + '>' + '<br>';
        str += "<b>回避</b>" + '<span id="0">' + DEX * 2 + '</span><br>' + '<input type="range" name="num" id="slide0" min="' + DEX * 2 + '" max = "100" step="1" value="' + DEX * 2 + '"onchange="changeValue(this.value,0)"><br>';
        str += "<b>母国語</b>" + '<span id="39">' + EDU * 5 + '</span><br>' + '<input type="range" name="num" id="slide39" min="' + EDU * 5 + '" max = "100" step="1" value="' + EDU * 5 + '"onchange="changeValue(this.value,39)"><br>';
        document.getElementById("preview2").innerHTML = str;

    }



    // ④localStorageから削除
    function removeStorage() {
        var key = document.getElementById("textkey").value;

        storage.removeItem(key);

        // 変数の初期化
        key = "";

        viewStorage();
    }

    // ⑤localStorageからすべて削除
    function removeallStorage() {
        if (window.confirm("今までの記録を全て削除します。よろしいですか？")) {
            storage.clear();
            viewStorage();
        }
    }

}

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

    hash2[0] = DEX * 2;
    Althash2[0] = DEX * 2;

    Althash2[39] = EDU * 5;
    hash2[39] = EDU * 5;


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



function create_memo() {

    var name = '名前';
    var sex = '';
    var job = document.getElementById("job").value;
    var age = '';

    if (STR + SIZ <= 12) {
        DB = '-1D6';
    } else if (STR + SIZ <= 16) {
        DB = '-1D4';
    } else if (STR + SIZ <= 24) {
        DB = 'なし';
    } else if (STR + SIZ <= 32) {
        DB = '+1D4';
    } else if (STR + SIZ <= 40) {
        DB = '+1D6';
    }


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
                var num = pro_skill_id[i] - 100;
                for (var k = 0; k < syumi_huri.length; k++) {
                    if (syumi_skill_id[k] == num) {
                        str += hash3[num] + ':' + document.getElementById(num).innerHTML + '%(' + hash2[num] + '+' + pro_huri[i] +'+'+ syumi_huri[k] + ') ';
                        syumi_huri[k] = 0;
                        pro_huri[i] = 0;
                    }
                }


                if (pro_huri[i] > 0) {
                    str += hash3[num] + ':' + document.getElementById(num).innerHTML + '%(' + hash2[num] + '+' + pro_huri[i] + ') ';
                }
                var cnt=i+1;
                if (cnt % 3 == 0) {
                    str += "<br>";
                }
            }
        } else if (j == 4) {
            str += "<br>[趣味技能]<br>";
            var chk = [];
            var cnt = 0;
            var t = 0;
            for (var i = 0; i < syumi_huri.length; i++) {
                if (syumi_huri[i] > 0) {
                    var num = syumi_skill_id[i];
                    str += hash3[num] + ':' + document.getElementById(num).innerHTML + '%(' + hash2[num] + '+' + syumi_huri[i] + ') ';
                }
                var cnt=i+1;
                if (cnt % 3 == 0) {
                    str += "<br>";
                }
            }
        }

    }
    str +="<br>";
    str += "------------------------------";

    $('#pallet').html(str);
    $('#pallet_div').show();
}
