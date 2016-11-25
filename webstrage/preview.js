//エンジニア	化学,機械修理,重機械操作,地質学,図書館,物理学,趣味
//医師	医学,応急手当,信用,心理学,精神分析,生物学,ラテン語,薬学,趣味

var val = 0; //技能値表示
//差分（現在技能ち-初期技能ち）の変数
var sabun = 0;
//EDU*20の降っていない状態の職業技能P 今は仮に300
var shoki_shoku_p = 300;
var shoki_syumi_p = 200;
var pro_skill_memo = [];


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

function douki() {
  //総趣味技能P
  document.getElementById("syumi_P").innerHTML = shoki_syumi_p;
}

function HTML_Load(_html,replace){
//Httpリクエスを作る
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",_html,true);
  xmlhttp.onreadystatechange = function(){
//とれた場合Idにそって入れ替え
  if(xmlhttp.readyState == 4 && xmlhttp.status==200){
            var data = xmlhttp.responseText;
           var elem = document.getElementById(replace);
           elem.innerHTML= data;
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
        var t_val=val+100;
        if(document.getElementById(t_val) != null){
          //職業技能の方の同一技能の方も減らす
          document.getElementById(t_val).innerHTML = value;
          //こちらはスライドが変更されていないのでプログラムで支持する
          var temp_slide = "slide" + t_val;
          document.getElementById(temp_slide).value = value;
        }


    }

    function changesValue(value, val) {
        //id valの要素は各技能のpの変更前のスライド値
        //value は各技能のpの変更後の表示値
        //sabunは変量を保存する変数
        //izenは変化前のスライド値を保存する変数
        sabun = document.getElementById(val).innerHTML - value;
        var izen = document.getElementById(val).innerHTML;

        //sは職業pのスライド値、tは職業pの表示値
        var s = document.getElementById("J_slide").value;
        var t = document.getElementById("job_P").innerHTML;

        var u = document.getElementById("S_slide").value;
        var v = document.getElementById("syumi_P").innerHTML;


        var t_val = val + 100;
        //職業技能にも、趣味技能にも含まれる場合で変化後の残り職業スライド値がふになる場合、スライドの最小値が0なので別処理
        if (Number(t) + Number(sabun) < 0　 && 　(val >= 100 || document.getElementById(t_val) != null)) {

            //趣味Pが十分に余っている場合そちらを減らす
            if (Number(v) + Number(sabun) > 0) {
                //各技能のスライドpを各技能の表示と一致させる、
                document.getElementById(val).innerHTML = value;
                //残り趣味pの表示値にsabunをたす
                document.getElementById("syumi_P").innerHTML = Number(v) + Number(sabun);
                //残り趣味pのスライド値にsabunをたす
                document.getElementById("S_slide").value = Number(u) + Number(sabun);
            } else {
                //趣味Pも職業Pも足りない場合

                //可能な限り割り振る処理
                //残り職業Pで割り振れるのが残っているとき
                if (document.getElementById("job_P").innerHTML > 0) {
                    //職業pの表示値を0に
                    document.getElementById("job_P").innerHTML = 0;
                    //職業pのスライド値を0に
                    document.getElementById("J_slide").value = 0;
                    //各技能pのスライド値にsabunを可能な限り振る
                    document.getElementById(val).innerHTML = Number(izen) + Number(s);
                    //各技能pの表示値もスライド値と同じ値に
                    value = Number(izen) + Number(s);
                    //表示値にスライド値をあわせる。
                    var temp = val
                    var temp_slide = "slide" + val;
                    document.getElementById(temp_slide).value = value;


                } else if (document.getElementById("syumi_P").innerHTML > 0) {
                    //残り職業Pで割り振れるpが残っていないが趣味Pが割り振れるとき
                    //趣味pの表示値を0に
                    document.getElementById("syumi_P").innerHTML = 0;
                    //趣味pのスライド値を0に
                    document.getElementById("S_slide").value = 0;
                    //各技能pのスライド値にsabunを可能な限り振る
                    document.getElementById(val).innerHTML = Number(izen) + Number(u);
                    //各技能pの表示値もスライド値と同じ値に
                    value = Number(izen) + Number(u);
                    //表示値にスライド値をあわせる。
                    var temp = val
                    var temp_slide = "slide" + val;
                    document.getElementById(temp_slide).value = value;

                }
                //共通処理
                //各技能pの表示値もスライド値と同じ値に
                value = Number(izen);
                //表示値にスライド値をあわせる。
                var temp = val
                var temp_slide = "slide" + val;
                document.getElementById(temp_slide).value = value;

            }

            //趣味技能にしかない技能のスライド値が0未満になる時
        } else if (Number(v) + Number(sabun) < 0) {
            //可能な限り割り振る処理
            //各技能のスライドpを各技能の表示と一致させる、
            document.getElementById(val).innerHTML = value;
            //残り趣味pの表示値にsabunをたす
            document.getElementById("job_P").innerHTML = Number(v) + Number(sabun);
            //残り趣味pのスライド値にsabunをたす
            document.getElementById("J_slide").value = Number(u) + Number(sabun);

            //各技能pの表示値もスライド値と同じ値に
            value = Number(izen);
            //表示値にスライド値をあわせる。
            var temp = val
            var temp_slide = "slide" + val;
            document.getElementById(temp_slide).value = value;

        } else {
            //変化後のスライド値が正の場合は問題ないのでそのまま

            //各技能のスライドpを各技能の表示と一致させる、

            document.getElementById(val).innerHTML = value;


            //もし、idが100以上なら職業技能
            if (val >= 100) {
                //残り職業pの表示値にsabunをたす
                document.getElementById("job_P").innerHTML = Number(t) + Number(sabun);
                //残り職業pのスライド値にsabunをたす
                document.getElementById("J_slide").value = Number(s) + Number(sabun);

                //趣味技能の方の同一技能の方も減らす
                val -= 100;
                document.getElementById(val).innerHTML = value;
                //こちらはスライドが変更されていないのでプログラムで支持する
                var temp_slide = "slide" + val;
                document.getElementById(temp_slide).value = value;

            } else {
                //趣味技能の方の同一技能の方も減らす
                val += 100;
                //職業技能に含まれている場合そちらを優先
                if (document.getElementById(val) != null) {
                    //残り職業pの表示値にsabunをたす
                    document.getElementById("job_P").innerHTML = Number(t) + Number(sabun);
                    //残り職業pのスライド値にsabunをたす
                    document.getElementById("J_slide").value = Number(s) + Number(sabun);
                    document.getElementById(val).innerHTML = value;
                    //こちらはスライドが変更されていないのでプログラムで支持する
                    var temp_slide = "slide" + val;
                    document.getElementById(temp_slide).value = value;
                } else {
                    //残り趣味pの表示値にsabunをたす
                    document.getElementById("syumi_P").innerHTML = Number(v) + Number(sabun);
                    //残り趣味pのスライド値にsabunをたす
                    document.getElementById("S_slide").value = Number(u) + Number(sabun);
                }

            }


            //現在の職業pのスライド値を表示
            console.log(document.getElementById("J_slide").value);
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
                //alert(key + "の初期値は" + hash[key] +"だよ");
                shoki = hash[key];
                break;
            }
            //一致しなかった場合次の要素を見るのでidx++
            idx++;
        }
        idx += 100;
        document.getElementById('free_var').innerHTML = ' <input type="range" name="num" id = "slide' + idx + '" min=' + shoki + ' max="100" step="1" value=' + shoki + ' onchange="changeproValue(this.value,' + idx + ')"> <span id="' +
            idx + '">' + shoki + '</span>' + '<br>';
    }
    //趣味技能のランを表示する

    function　hobby_show(){
      HTML_Load('preview.html','top');HTML_Load('./side.html','side');
      setTimeout("douki()",100);
    }

    //職業選択技能を出す
    function show(x) {

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
                str += s[i] + ' <input type="range" name="num" id = "slide' + idx + '" min=' + shoki + ' max="100" step="1" value=' + shoki + ' onchange="changeproValue(this.value,' + idx + ')"> <span id="' + idx + '">' + shoki +
                    '</span>' + '<br>';

            }

        }

        str += "<br>"

        str += "職業技能P" + ' <input type="range" disabled id = "J_slide" min="0" max="400" step="1" value=' + shoki_shoku_p + '> <span id="job_P">' + shoki_shoku_p + '</span>' + '<br>';
        document.getElementById("preview").innerHTML = str;

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
