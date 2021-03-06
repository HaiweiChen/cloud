/*移动端H5交互笔记*/
//==========================================
// 发送验证码
//==========================================
$('.dx-btn').click(function () {
  if ($(this).hasClass('gray')) {
    return false;
  }
  //定义倒计时时间为3秒
  $(this).text('90秒');
  //开始倒计时，并添加灰色class(灰色class定义了倒计时结束的按钮样式);
  $(this).addClass('gray');
  //每隔1000毫秒执行一次time方法
  t = setInterval('time()', 1000);
});
function time(){
  var btn = $('.dx-btn');
  // 截取按钮里的数字
  var sec =  btn.text().substring(0, btn.text().length - 1);
  //当剩余描述大于0的时候倒计时，小于0则清除倒计时并将按钮text变成重新发送；
  if (sec > 0) {
    sec--;
    btn.text(sec + '秒');
  } else {
    if (btn.text() != '重新发送') {
      btn.text('重新发送');
      clearInterval(t);
    }
      btn.removeClass('gray'); //移除灰色class
    }
}

//==========================================
// 弹窗屏幕禁止滚动
//------------------------------------------
$('.pop-btn').click(function(){
  $('.shadow').show();//弹窗图层显示
  //监听,并阻止touchmove事件,将阻止默认事件赋值给a
  body.addEventListener("touchmove", a = function (e) {
    e.preventDefault();
  }, false);
});
$('.cancel-btn').click(function(){
  $(".shadow").hide();//弹窗图层隐藏
  //移除监听事件
  document.removeEventListener("touchmove", a, false);
});
//==========================================
// 返回顶部
//------------------------------------------
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()!=0 & $(this).scrollTop() != 1){
      $('#top').fadeIn();
    }else{
      $('#top').fadeOut();
    }
  });
  $('#top').on('click',function(){
    $('html,body').animate({scrollTop:0},'1000');
  });
});
//==========================================
// 列表滚动
//------------------------------------------
//jQuery.textSlider.js
$(document).ready(function () {
  $(".right").textSlider({ line: 1, speed: 500, timer: 1000 });
});
//==========================================
// 数字滚动
//------------------------------------------
function number(str) {
  var list = $('.number li');
  var omm = $('#Allmm').val();
  if (omm.indexOf('.') != -1) {
    var omm1 = omm.split('.')[1];
    if (omm1.lenght == 1) {
      omm = omm + '0';
    }
  } else if (omm1.lenght == 0) {
    omm = omm + '.00';
  }
  var str = omm.replace('.', '');
  while (str.length < 11) {
    str = '0' + str;
  }
  $('.number li').each(function () {
    var index = list.index($(this));
    var num = str.charAt(index);
    var upHeight = '-' + 51 * num;
    list.eq(index).find('div').animate({ marginTop: upHeight }, '500');
  });
}
//==========================================
// 锁定bottom-list-wrapper区域以外cart-shadow的触摸事件
//------------------------------------------
$('.cart-shadow').bind('touchmove',function(e){
  var target = $(e.target);
  if(target.closest('.bottom-list-wrapper').lenght == 0){
    return false;
  }
});
//==========================================
// 加载时判断导航高光nav
//------------------------------------------
$(function () {
    var url = window.location.href.toLowerCase();
    var suburl = url;
    if (url.indexOf("?") > -1) {
        suburl = url.substring(0, url.indexOf("?"));
    }
    var spliturl = suburl.split('/');
    var topurl = spliturl[spliturl.length - 1];
    var list = $('.top-nav .nav-list')
    if (topurl == 'index.aspx') {
        list.eq(0).addClass('nav-click').siblings().removeClass('nav-click');
    }
});
//==========================================
// 持续获取图片高度直到获取到为止
//------------------------------------------
$(function () {
    hit = setInterval('listMargin()', 500);
});
function listMargin() {
    $('.pro-list').each(function () {
        var height = $(this).height();
        console.log($('.pro-img').height());
        $(this).find('.pro-left').css('margin-top', (height - 22) / 2);
        $(this).find('.pro-img').css('margin-top', (height - $('.pro-img').height()) / 2);
        $(this).find('.add-right').height(height);
        $(this).find('.add-right').css('line-height', height + 'px');
        if ($('.pro-img').height() > 0) {
            clearInterval(hit);
        }
    });
}
//==========================================
// 根据URL判断导航高光
//------------------------------------------
$(function () {
    var url = window.location.href.toLowerCase();//toLowerCase()：字符串中的字母转化为小写
    var suburl = url;
    if (url.indexOf("?") > -1) {
        suburl = url.substring(0, url.indexOf("?"));
    }
    var spliturl = suburl.split('/');
    var topurl = spliturl[spliturl.length - 1];
    var list = $('.top-nav .nav-list')
    if (topurl == 'index.aspx') {
        list.eq(0).addClass('nav-click').siblings().removeClass('nav-click');
    }
});
//==========================================
// 倒计时
//------------------------------------------
function getRTime() {
    EndTime = new Date('2016/09/20 00:00:00'); //截止时间
    NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);
    if (t > 0) {
        var a = h.toString().length;
        if (a == 1) {h = '0'+h}
        var b = m.toString().length;
        if (b == 1) { m = '0' + m }
        var c = s.toString().length;
        if (c == 1) { s = '0' + s }
        document.getElementById("t_h").innerHTML = h;
        document.getElementById("t_m").innerHTML = m;
        document.getElementById("t_s").innerHTML = s;
    } else {
        document.getElementById("t_h").innerHTML = '00';
        document.getElementById("t_m").innerHTML = '00';
        document.getElementById("t_s").innerHTML = '00';
        clearInterval(time);
    }
}
$(function () {
  time = setInterval('getRTime()', 1000);
});
//==========================================
// 根据url后缀t的数值定位nav高光
//------------------------------------------
$(function () {
    var url = window.location.href.toLowerCase();
    var suburl = url;
    var spliturl = suburl.split('/');
    var suburl = url.substring(spliturl.lenght);
    var list = $('.classify li');
    if (suburl.indexOf("?") > -1) {
        spliturl = suburl.split('?')[1];
        if (spliturl.indexOf('t') > -1) {
            newUrl = spliturl.split('t')[1];
            t = newUrl.substring(1, 2);
            if (t == '1') {
                list.eq(0).addClass('select-fenlei').siblings().removeClass('select-fenlei');
            } else if (t == '0') {
                list.eq(1).addClass('select-fenlei').siblings().removeClass('select-fenlei');
            } else if (t == '2') {
                list.eq(2).addClass('select-fenlei').siblings().removeClass('select-fenlei');
            }
        } else {
            return false;
            //list.eq(0).addClass('select-fenlei').siblings().removeClass('select-fenlei');
        }
    }
});
//==========================================
// json多级列表
//------------------------------------------
//严格来说json内不允许使用单引号，数组为空者可以用null代替，当字符串为空可以用空双引号
$(function () {
  selectChange($('#one'), data);
  NewSelect("one", "two", "three", "01", "0102", "");
})
var two = {};
var three = {};
var length = data.length;
$('#one').on('change', function () {
  var val = $(this).val();
  two = {};
  for (var x = 0; x < data.length; x++) {
    if (data[x].name == val) {
      two = data[x].class;
      if (two == null) {
        two = {};
      }
    }
  }
  selectChange($("#two"), two);
  $("#two").change();
});
$('#two').on('change', function () {
  var val = $(this).val();
  three = {};
  for (var x = 0; x < two.length; x++) {
    if (two[x].name == val) { //find child list from json,use field name  as index
      three = two[x].class;
      if (three == null) {
        three = {};
      }
    }
  }
  selectChange($("#three"), three);
    $("#three").change();
  });
function selectChange(select, datathis) {
  select[0].length = 0;
  if (data != null && datathis.length > 0) {
    select.show();
    var html = '';
    for (var i = 0; i < datathis.length; i++) {
      html += '<option value="'+ datathis[i].name +'">' + datathis[i].name + '</option>';
    }
    select.append(html);
  }else {
    select.hide();
    select[0].options.add(new Option("请选择", ""))
  }
}
function NewSelect() {
  var ones = $("#" + arguments[0]);
  var twos = $("#" + arguments[1]);
  var threes = $("#" + arguments[2]);
  if (arguments[3] != '') {
    ones.val(arguments[3]);
    ones.change();
    twos.val(arguments[4]);
    twos.change();
    threes.val(arguments[5]);
  }else {
    ones.change();
  }
}
//==========================================
// 动态加载（代码未整理）
//------------------------------------------
var url = window.location.href.split('?');
var strurl = "";
if (url.length > 1) {
    strurl = "?" + url[url.length - 1];
}var search = "";
var siteid = 0;
var deurl = "#";
var pIndex = $("#contentDV").attr("lang").split('★')[0] * 1 + 1;
var maxIndex = $("#contentDV").attr("lang").split('★')[1] * 1;
var ltlang = $("#title").attr("lang");
if (ltlang.split('★').length >= 2) {
    search = ltlang.split('★')[0];
    siteid = ltlang.split('★')[1];
    deurl = ltlang.split('★')[2];
}
$(document).ready(function () {
    var categoryID = "-4461";
    var goodsTypeID = "0";
    var pIndex = $("#contentDV").attr("lang").split('★')[0] * 1 + 1;
    ScrollRefresh("content", { range: 30, url: '/small/GoodsListJson/$guid/$openid/' + strurl, type: 'post', data: { t: '3', siteid: siteid, p: $("#contentDV").attr("lang").split('★')[0] * 1 + 1} }, function () {
        var pIndex = $("#contentDV").attr("lang").split('★')[0] * 1 + 1;
        if (!$('#home').is(':hidden')) {
            var json = ScrollRefresh.JSON;
            //console.log(json.Items.length);
            for (var i = 0; i < json.Items.length; i++) {
                if (json.Items[i].Title.length > 22) json.Items[i].Title = json.Items[i].Title.substring(0, 22);
                if (json.Items[i].Price > 0) {
                    var html = '';
                    html += '<li class="block_list">';
                    html += '<a href="/small/Detail/$guid/$openid?id=' + json.Items[i].ID + '">'
                    html += '<div class="img_box" style=" background:url(img/cp4.jpg) no-repeat center;"><img src="' + json.Items[i].Pic + '" /></div>'
                    html += '<div class="img_summary">' + json.Items[i].Title + '</div>'
                    html += '<div class="buy"><p>¥</p><span>' + json.Items[i].Price + '</span><span class="buy-button"></span></div>'
                    html += ' </a></li>'
                    $("#home .block_content").append(html);
                    $("#contentDV").attr("lang", pIndex + "★" + maxIndex);
                }
            }
        }
    });

});
//==========================================
// 阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。
//------------------------------------------
$('#div').click(function(e){
  e.stopPropagation();
});
// getJSON()
$.getJSON("/public/lesVote!del.action",{
"autoId":id,
 },function (data,textStatus){
  if(data.success == true){
    // 成功执行
  }else{
    // 失败执行
    $('#msg span').text(data.message);
    $('#msg').fadeIn(setTimeout("$('#msg').fadeOut()",500));
  }
});
