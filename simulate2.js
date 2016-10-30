$.each(GROUP_LIST, function(group_key, group_name) {
    $.each(character_list[group_key], function(key, chara) {
        $('#' + group_name + '_select').append($('<option>').html(chara.name).val(key));
    });
    $('#' + group_name + '_select').change(function() {
        if ($(this).val() == 'CharacterSheet') {
            $('#' + group_name + '_chara_input').show();
        } else {
            $('#' + group_name + '_chara_input').hide();
        }
    });
});
//slider
var slider = new Slider('input.slider', {});
$("input.slider").on("slide", function(slideEvt) {
    //$("#sliderVal").text(slideEvt.value);
    Log.showBattle(slideEvt.value);
});

function getChara(group_key) {
    var url = $('#' + GROUP_LIST[group_key] + '_chara_input').val();
    if (!isCharacterSheetUrl(url)) {
        alert('キャラ保管庫URLを正しく入力してください。');
        return;
    }
    $.ajax({
        type: "GET",
        url: "ajax.php?url="+encodeURIComponent(url),
        dataType: "text",
        async: true,
    }).done(function(res) {
        if (res == "error") return;
        var $html = $(res);

        var param_list = ["STR", "CON", "POW", "DEX", "APP", "SIZ", "INT", "EDU", "HP", "MP", "SAN", "IDEA", "LUCK", "KNOW"];
        var val = [];
        for (var i=1; i<=param_list.length; ++i) {
            val[param_list[i-1]] = $html.find("#NP" + i).val();
        }
        var new_san = $html.find("input[name=SAN_Left]").val();
        if (new_san) val['SAN'] = new_san;
        val['DB'] = $html.find("input[name=dmg_bonus]").val();
        val["AVOID"] = $html.find("#Table_battle_arts").find("tr").eq(1).find(".sumTD > input").val();
        // TODO:
        val["HEAL"] = 30;

        var attacks = [];
        $html.find("#Table_battle_arts").find("tr").each(function (i) {
            if (!$(this).find(".sumTD")[0]) return true;

            var skill = $(this).find("th").html();
            if ($(this).find("th").find("input")[0]) {
                skill = skill.replace(/(<([^>]+)>)/ig, $(this).find("th").find("input").val());
            }
            var init = $(this).find("td").eq(1).find("input").val();
            //var jobp = $(this).find("td").eq(2).find("input").val();
            //var hobp = $(this).find("td").eq(3).find("input").val();
            //var otherp = $(this).find("td").eq(5).find("input").val();
            var current = $(this).find(".sumTD").find("input").val();
            if (current == init) return true;

            var data = [];
            data['name'] = skill;
            data['val'] = current;
            if (current != init) {
                if (skill == 'マーシャルアーツ' || skill.indexOf('武道') != -1) {
                    var fight_list = ['キック', 'こぶし（パンチ）', '頭突き'];

                    // 元となる技能を探す
                    var fight_flag = false;
                    attacks.forEach(function(attack, index, a_list) {
                        if (fight_list.indexOf(attack.name) >= 0) {
                            fight_flag = true;
                        }
                    });
                    // なかったら追加
                    if (!fight_flag) {
                        attacks.push(clone(skill_list['キック']));
                    }
                    // 元技能に追加
                    attacks.forEach(function(attack, index, a_list) {
                        if (fight_list.indexOf(attack.name) >= 0) {
                            var martial = clone(martialArts);
                            martial.percent = current;
                            attack.effects.push(martial);
                        }
                    });
                } else if (isset(skill_list[skill])) {
                    var skill_data =  clone(skill_list[skill]);
                    skill_data.percent = current;
                    attacks.push(skill_data);
                }
            }
        });
        var chara_data = {
            name: $html.find('#pc_name').val(),
            hp: val["HP"],
            str: val["STR"],
            con: val["CON"],
            dex: val["DEX"],
            pow: val["POW"],
            san: val["SAN"],
            db: val["DB"],
            avoid: val["AVOID"],
            heal: val["HEAL"],
            isHuman: true,
            attackNum: 1,
            attacks: attacks,
        };
        GameManager.addChara(group_key, chara_data);
    });
}

// キャラを除去
function removeChara(group_key, id) {
    GameManager.removeChara(group_key, id);
}

function addChara(group_key) {
    var select_val = $('#' + GROUP_LIST[group_key] + '_select').val();
    if (select_val == 'CharacterSheet') {
        getChara(group_key);
    } else if (isset(character_list[group_key][select_val])) {
        var chara_data = clone(character_list[group_key][select_val]);
        GameManager.addChara(group_key, chara_data);
    }
}

function startBattle(num) {
    BATTLE_COUNT = num;
    if (!GameManager.init()) return;

    $('#battle_div').hide();

    checkedItems = {};
    $("#check-list-box li").each(function(idx, li) {
        checkedItems[$(li).data("value")] = $(li).hasClass("active");
    });
    CRIFUN = checkedItems["crifun_flag"];

    if (BATTLE_COUNT == 1) {
        result = GameManager.battle();
        if (result == PLAYER) {
            $('#player_result').html('<font color=red>勝利</font>');
            $('#enemy_result').html('<font color=blue>敗北</font>');
        } else {
            $('#player_result').html('<font color=blue>敗北</font>');
            $('#enemy_result').html('<font color=red>勝利</font>');
        }
        $('#battle_div').show();
    } else {
        $('#battle_btn_div').hide();
        $('#in_battle_div').show();

        win_cnt = {
            0:0, 1:0, 2:0
        };
        for (var battle_count = 0; battle_count < BATTLE_COUNT; ++battle_count) {
            result = GameManager.battle();
            win_cnt[result]++;
        }
        if (win_cnt[PLAYER] > win_cnt[ENEMY]) {
            $('#player_result').html('<font color=red>' + win_cnt[PLAYER] + '勝</font>');
            $('#enemy_result').html('<font color=blue>' + win_cnt[ENEMY] + '勝</font>');
        } else {
            $('#player_result').html('<font color=blue>' + win_cnt[PLAYER] + '勝</font>');
            $('#enemy_result').html('<font color=red>' + win_cnt[ENEMY] + '勝</font>');
        }
        $('#battle_btn_div').show();
        $('#in_battle_div').hide();
    }

}

UIManager.addChara = function(chara) {
    // リストに追加
    var chara_div = $('#chara_style').html();
    chara_div = chara_div.replace(/\{name\}/g, chara.name);
    chara_div = chara_div.replace(/\{type\}/g, GROUP_LIST[chara.group]);
    chara_div = chara_div.replace(/\{group\}/g, chara.group);
    chara_div = chara_div.replace(/\{id\}/g, chara.id);
    chara_div = chara_div.replace(/\{DEX\}/g, chara.dex);
    chara_div = chara_div.replace(/\{HP\}/g, chara.hp);
    chara_div = chara_div.replace(/\{DB\}/g, chara.db);
    chara_div = chara_div.replace(/\{AVOID\}/g, chara.avoid);

    // 攻撃一覧を追加
    var $chara_div = $(chara_div);
    chara.attacks.forEach(function(attack, index, a_list) {
        var name = attack.name;
        attack.effects.forEach(function(effect, index, e_list) {
            name += '<br>+' + effect.name + '(' + effect.percent + ')';
        });

        var $tr = $('<tr>');
        $tr.append($('<td>').html(name));
        $tr.append($('<td>').html(attack.percent));
        $tr.append($('<td>').html(attack.damage));
        $tr.append($('<td>').html(attack.db));
        $chara_div.find('.attack_table > tbody').append($tr);
    });

    // switch
    state = true;
    if (chara.ai == AI.HEAL) {
        state = false;
    }
    ai_switch = $chara_div.find(".bootstrapSwitch").not("[data-switch-no-init]").bootstrapSwitch({state: state});
    $chara_div.find(".bootstrapSwitch").on('switchChange.bootstrapSwitch', function(e, state) {
        if (state) {
            chara.ai = AI.ATTACK;
        } else {
            chara.ai = AI.HEAL;
        }
        console.log(chara);
    });

    $('#' + GROUP_LIST[chara.group] + '_list').append($chara_div);
}
UIManager.removeChara = function(group_key, id) {
    $('#panel_' + group_key + '_' + id).remove();
}

Log.battle = function(msg, options) {
    if (this.enable && BATTLE_COUNT == 1) {
        // optionがあれば
        if (options != undefined) {
            if (options.color != undefined) {
                msg = '<font color="' + options.color + '">' + msg + '</font>';
            }
            if (options.size != undefined) {
                msg = '<font size="' + options.size + '">' + msg + '</font>';
            }
        }
        if (isset(this.battleLog[GameManager.round])) {
            this.battleLog[GameManager.round].push(msg);
        } else {
            this.battleLog[GameManager.round] = [msg];
        }
        //$('#battle_log').append(msg + '<br>');
    }
}
Log.clearBattle = function() {
    $('#battle_log').empty();
    this.battleLog = {};
    this.statusTableList = {};
}
Log.showBattle = function(round, offset_flag) {
    if (this.enable && BATTLE_COUNT == 1) {
        if (offset_flag) {
            round += this.currentRound;
            if (round < 0) {
                round = 0;
            } else if (round > GameManager.round) {
                round = GameManager.round;
            }
        } else {
            this.currentRound = round;
        }
        this.currentRound = round;
        slider.setValue(round);
        $('#battle_log').html(Log.battleLog[round].join('<br>'));
        $('#' + GROUP_LIST[PLAYER] + '_table').html(Log.statusTableList[round][PLAYER].join(''));
        $('#' + GROUP_LIST[ENEMY] + '_table').html(Log.statusTableList[round][ENEMY].join(''));
        $("#round_text").html(round);

        if (round == 0) {
            $('.js_previous_btn').prop('disabled', true);
            $('.js_next_btn').prop('disabled', false);
        } else if(round == GameManager.round) {
            $('.js_previous_btn').prop('disabled', false);
            $('.js_next_btn').prop('disabled', true);
        } else {
            $('.js_previous_btn').prop('disabled', false);
            $('.js_next_btn').prop('disabled', false);
        }
    }
}
Log.finishBattle = function(){
    slider.setAttribute('max', GameManager.round);
    $("#max_round_text").html(GameManager.round);
}

Log.addStatusTable = function(chara) {
    if (this.enable && BATTLE_COUNT == 1) {
        var percent = Math.floor(chara.hp*100/chara.maxHP);
        var color = 'emerald';
        if (chara.state == STATE.DIE) {
            color = 'red';
        } else if (chara.state != STATE.NORMAL || chara.isInsane() || chara.catched_flag) {
            color = 'violet';
        } else if (percent <= 33) {
            color = 'yellow';
        }

        var chara_div =
            '<div class="bar-main-container ' + color + '">' +
                '<div style="padding: 5px;">' +
                    '<div class="bar-percentage">' + chara.hp + '/' + chara.maxHP + '</div>' +
                    '<div class="bar-container">' +
                        '<div class="bar" style="width:' + percent + '%;"></div>' +
                    '</div>' +
                '</div>' +
            '</div>';

        var state = STATE_NAME[chara.state];
        if (chara.isInsane()) {
            state = '発狂';
        } else if (chara.cathed_flag) {
            state = '被組みつき';
        }

        $tr = $('<tr>');
        $tr.append($('<td>').html(chara.name));
        $tr.append($('<td>').html(chara_div));
        $tr.append($('<td>').html($('<span>').addClass(color + ' label').html(state)));

        if (!isset(this.statusTableList[GameManager.round])) {
            this.statusTableList[GameManager.round] = {};
        }
        if (isset(this.statusTableList[GameManager.round][chara.group])) {
            this.statusTableList[GameManager.round][chara.group].push($tr.prop('outerHTML'));
        } else {
            this.statusTableList[GameManager.round][chara.group] = [$tr.prop('outerHTML')];
        }
    }
}
