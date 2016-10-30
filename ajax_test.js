$(document).ready(function() {
    $('#getbtn').click(function() {
        var url = $('#url').val();
        //  alert(url);
        if (!isCharacterSheetUrl(url)) {
            alert('urlを正しく入力してください');
            return;
        }
        var detail_flag = $("#isDetail").prop("checked");
        //alert('y');
        $.ajax({
            type: "GET",
            url: "ajax.php?url=" + encodeURIComponent(url),
            dataType: "text",
        }).done(function(res) {
            if (res == "error") {
                alert('通信エラー');
                return;
            }
            if (detail_flag) {
                create_memo_detail(res);
            } else {
                create_memo(res);
            }
        }).fail(function(res) {
            console.log(xhr.status);
            alert('通信エラー2');
        });
    });
});

//resにはとってきたhtml全文が入っている。

var create_memo = function(res) {
    var name = $(res).find('#pc_name').val();
    var sex = $(res).find('#sex').val();
    var job = $(res).find('#shuzoku').val();
    var age = $(res).find('#age').val();

    var param_list = ["STR", "CON", "POW", "DEX", "APP", "SIZ", "INT", "EDU", "HP", "MP", "SAN", "IDEA", "LUCK", "KNOW"];
    var val = [];
    for (var i = 1; i <= param_list.length; ++i) {
        val[param_list[i - 1]] = $(res).find("#NP" + i).val();
    }
    var new_san = $(res).find("input[name=SAN_Left]").val();
    if (new_san) {
        val['SAN'] = new_san;
    }
    val['DB'] = $(res).find("input[name=dmg_bonus]").val();

    var list = ["battle", "find", "act", "commu", "know"];
    //"job_hobby_grow", "job_hobby", "job_grow", "job", "hobby_grow"
    var skill_list = {
        "job": [],
        "hobby": [],
        "grow": [],
        "job_hobby_grow":[],
        "job_hobby":[],
        "hobby_grow":[],
        "job_grow":[],
    };
    for (var i = 0; i < list.length; i++) {
        $(res).find("#Table_" + list[i] + "_arts").find("tr").each(function(i) {
            if ($(this).find(".sumTD")[0]) {
                var skill = $(this).find("th").html();
                if ($(this).find("th").find("input")[0]) {
                    //技能名をとってる。
                    skill = skill.replace(/(<([^>]+)>)/ig, $(this).find("th").find("input").val());
                }
                //初期技能値
                var init = $(this).find("td").eq(1).find("input").val();
                //職業技能値
                var jobp = $(this).find("td").eq(2).find("input").val();
                //趣味技能値
                var hobp = $(this).find("td").eq(3).find("input").val();
                //成長技能値
                var grop = $(this).find("td").eq(4).find("input").val();
                //技能値合計
                var current = $(this).find(".sumTD").find("input").val();
                if (jobp != 0 && hobp != 0 && grop != 0) {
                    var data = [];
                    data['name'] = skill;
                    var n = current;s
                    var s = n + "(" + init + "+" + jobp + "+" + hobp + "+" + grop + ")";
                    data['val'] = s;
                    console.log(s);
                    skill_list["job_hobby_grow"].push(data);
                } else if (jobp != 0 && hobp != 0) {
                    var data = [];
                    data['name'] = skill;
                    var n = current;
                    var s = n + "(" + init + "+" + jobp + "+" + hobp + ")";
                    data['val'] = s;
                    console.log(s);
                    skill_list["job_hobby"].push(data);
                } else if (jobp != 0 && grop != 0) {
                    var data = [];
                    data['name'] = skill;
                    var n = current;
                    var s = n + "(" + init + "+"
                    +jobp + "+" + grop + ")";
                    data['val'] = s;
                    skill_list["job_grow"].push(data);
                } else if (jobp != 0) {
                    var data = [];
                    data['name'] = skill;
                    var n = current;
                    var s = n + "(" + init + "+"
                    +jobp + ")";
                    data['val'] = s;
                    skill_list["job"].push(data);
                } else if (hobp != 0 && grop != 0) {
                    var data = [];
                    data['name'] = skill;
                    var n = current;
                    var s = n + "(" + init + "+" + hobp + "+" + grop + ")";
                    data['val'] = s;
                    skill_list["hobby_grow"].push(data);
                } else if (hobp != 0) {
                    var data = [];
                    data['name'] = skill;
                    var n = current;
                    var s = n + "(" + init + "+" + hobp + ")";
                    data['val'] = s;
                    skill_list["hobby"].push(data);
                } else if (grop != 0) {
                    var data = [];
                    data['name'] = skill;
                    var n = current;
                    var s = n + "(" + init + "+" + grop + ")";
                    data['val'] = s;
                    skill_list["hobby"].push(data);
                }
                str += skill + "：0" + current + "％<br>\n";
            }
        });
    }
    val["JOBP"] = $(res).find("input[name=TS_Maximum]").val();
    val["HOBP"] = $(res).find("input[name=TK_Maximum]").val();
    val["AVOID"] = $(res).find("#Table_battle_arts").find("tr").eq(1).find(".sumTD > input").val();

    var str = name + ' (' + sex + ') 職業：' + job + ' 年齢：' + age + '歳 PL:<br>';
    str += "STR:" + val["STR"] + "　　";
    str += "DEX:" + val["DEX"] + "　　";
    str += "INT:" + val["INT"] + "　　";
    str += "ｱｲﾃﾞｱ:" + val["IDEA"] + "<br>";
    str += "CON:" + val["CON"] + "　　";
    str += "APP:" + val["APP"] + "　　";
    str += "POW:" + val["POW"] + "　　";
    str += "幸 運:" + val["LUCK"] + "<br>";
    str += "SIZ:" + val["SIZ"] + "　　";
    str += "SAN:" + val["SAN"] + "　　";
    str += "EDU:" + val["EDU"] + "　　";
    str += "知識:" + val["KNOW"] + "<br>";
    str += "H P:" + val["HP"] + "　　";
    str += "M P:" + val["MP"] + "　　";
    str += "回避:" + val["AVOID"] + "　　";
    str += "ﾀﾞﾒｰｼﾞﾎﾞｰﾅｽ:" + val["DB"] + "<br>";
    str += "------------------------------<br>";

    str += "[技能]（職業技能点:" + val["JOBP"] + " 個人技能点:" + val["HOBP"] + "）<br>";

    var type_list = ["job_hobby_grow", "job_hobby", "job_grow", "job", "hobby_grow", "hobby", "grow"];
    for (var j = 0; j < type_list.length; ++j) {
        if (j == 0) {
            str += "[職業技能]<br>";
        } else if (j == 4) {
            str += "[趣味技能]<br>";
        } else if (j == 6) {
            str += "[その他技能]<br>";
        }
        var num = skill_list[type_list[j]].length;
        for (var i = 0; i < num; ++i) {
            str += skill_list[type_list[j]][i]["name"] + ":" + skill_list[type_list[j]][i]["val"] + "％";
            if (i % 3 == 2 || i == num - 1) {
                str += "<br>";
            } else {
                str += "　　";
            }
        }
    }

    str += "------------------------------";

    $('#pallet').html(str);
    $('#pallet_div').show();

    success('チャパレ作成完了');
}
