// define a object for login page
var log = {
    stardt: "2020-4-11",
    enddt: "2020-5-11",
    updatedt: "2020-4-12",
    author: "Lin"
}
// got derived function by needs
log.submit = {
    check: function (v) {
        var _v = (v == "") ? true : false;
        return _v;
    },
    autohide: function (obj) {
        setTimeout(function () {
            obj.hide();
        }, 2000)
    }
}

// defined a function for checking if input is empty.
function checkvalue() {
    // get element, and saving in varible
    var $username = $("#username");
    var $password = $("#password");
    var $err1 = $("#err1");
    var $err2 = $("#err2");
    if (!log.submit.check($username.val()) && !log.submit.check($password.val())) {
        return true;
    } else {
        if ($username.val() == "") {
            // show tips
            $err1.show();
            // hide the info after 2 seconds.
            log.submit.autohide($err1);
            return false;
        } else {
            $err2.show();
            log.submit.autohide($err2);
            return false;
        }
    }
}
// define a business logic based on atcList page
var lst = {
    template: function (t, u, p1, p2) {
        var _html = "";
        _html += '<div class="item">';
        _html += '     <div class="title">';
        _html += '         <h3>' + t + '</h3>';
        _html += '     </div>';
        _html += '     <div class="content">';
        _html += '         <div class="cleft">';
        _html += '             <img src="' + u + '" alt="">';
        _html += '         </div>';
        _html += '         <div class="cright">';
        _html += '             <p class="ptop">';
        _html += '                 ' + p1 + '';
        _html += '             </p>';
        _html += '             <p class="pbottom">';
        _html += '                 ' + p2 + '';
        _html += '             </p>';
        _html += '         </div>';
        _html += '     </div>';
        _html += '</div>';
        return _html;
    }
}

var _HTML = lst.template("Python", "imgs/b.jpg", "本文探讨了Python语言在AI领域的优势与运用。", "初雪璐 学无止境 2018-5-13 34567已阅读 1000")
$(".lst").append(_HTML);

// based on my album
var album = {
    template: function (img, likesCount, text) {
        var _html = "";
        _html += '<div class="item">';
        _html += '  <div class="img">';
        _html += '    <img src="' + img + '" alt="">';
        _html += '    <div class="tip">喜欢 | ' + likesCount + '</div>';
        _html += '  </div>';
        _html += '  <div class="title">';
        _html += '    <h3>' + text + '</h3>';
        _html += '  </div>';
        _html += '</div>';
        return _html;
    }
}
// defined a arrey of ablum
var arrAblum = [
    {
        img: 'imgs/banner01.jpg',
        likesCount: 200,
        text: 'web页面开发时的重要性'
    }, {
        img: 'imgs/banner02.jpg',
        likesCount: 333,
        text: 'JavaScript开发时碰到的问题'
    }, {
        img: 'imgs/bi05.jpg',
        likesCount: 101,
        text: '前端面试问题汇总'
    }]

for (var i = 0; i < arrAblum.length; i++) {
    var _HTML = album.template(arrAblum[i].img, arrAblum[i].likesCount, arrAblum[i].text);
    $("#myAlbum").append(_HTML);
}