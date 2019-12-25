resultObject = require('electron').remote.getGlobal('resultObject');
$(function () {
        $('#insert_noun').click(function () {
            // let $subPage = $('.sub_page');
            let $mainPage = $('.main_page');
            let $subPage = $('<div></div>', {
                class: "sub_page",
            });
            let $nounInput = $('<input />', {
                name: 'noun',
            });
            let $explainTestarea = $('<textarea></textarea>', {
                name: 'explain',
            });

            let $p1 = $('<p></p>').append($nounInput);
            let $p2 = $('<p></p>').append($explainTestarea);
            $subPage.append($p1);
            $subPage.append($p2);
            $subPage.append('==============================');
            $mainPage.append($subPage);
            // $p1.appendTo($subPage);
            // $p2.appendTo($subPage);
            // $subPage.appendTo($mainPage);
        });

        $("#submit").click(function () {
            console.log("haha");
            console.log(JSON.stringify($("form").parseForm()));
            resultObject.foreword = $("form").parseForm();
        });
    }
)


$.fn.parseForm = function () {
    var serializeObj = {};
    var array = this.serializeArray();
    var str = this.serialize();
    $(array).each(function () {
        if (serializeObj[this.name]) {
            if ($.isArray(serializeObj[this.name])) {
                serializeObj[this.name].push(this.value);
            } else {
                serializeObj[this.name] = [serializeObj[this.name], this.value];
            }
        } else {
            serializeObj[this.name] = this.value;
        }
    });
    return serializeObj;
};