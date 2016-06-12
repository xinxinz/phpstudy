$(document).ready(function(){

    var uuname=window.localStorage.getItem('name')
    if(uuname == null || uuname ==''){
        $("#loginBtn2").html('登录');
    }else{
        $("#loginBtn2").html(uuname);
        $("#exit").width($("#loginBtn2").width() + 40);
    }
    var isLogin = window.localStorage.getItem('status');
    if(isLogin == null || isLogin == 'no'){
        $('#f_header').hide();
        $("#tabs").hide();
    }else{
        $('#b_header').hide();
        $('#b_footer').hide();
    }

    $.ajax({
        type: "GET",
        url: "http://apis.baidu.com/heweather/weather/free",
        data: "city=beijing",
        headers: {'apikey': 'eb10833b2f9e6affb0460791a2ea3fcb'},
        dataType: "json",
        success: function (data) {
            if (typeof data['errNum'] === 'undefined') {
                var origin = data['HeWeather data service 3.0'][0];
                var result = popData(origin);
                $("#weather").text(result.city + " "+result.days[0].weather +" "+result.days[0].tmp )
            }
        }
    });

    $('#setting,#setting2').mouseover(function(){
        $('.group').show();
    });
    $('#setting,setting2').mouseout(function(){
        $('.group').hide();
    });
    $('.block').mousemove(function(){
        $('.group').show();
    });
    $('.block').mouseout(function(){
        $('.group').hide();
    });
    $('#more,#more2').mousemove(function(){
        $('.aside').show();
    });
    $('#more,#more2').mouseout(function(){
        $('.aside').hide();
    });
    $('.aside').mousemove(function(){
        $('.aside').show();
    });
    $('.aside').mouseout(function(){
        $('.aside').hide();
    });


    //导航栏切换
    $('.show-title').on("click","li",function(){
        var index = $(this).index();
        $('.show-title li').removeClass('show-active');
        $('.show-title li').eq(index).addClass("show-active");
        //$('#tab-'+index).siblings().hide();
        //$('#tab-'+index).show();

    });

    //点击频道设置出现/隐藏操作框
    $('.show-tool').click(function(){
        $('#subscribe').slideToggle("normal",focusChange());
    });

    //点击操作框其他位置隐藏操作框
    $('body').on("click",function(evt){
        var length = $(evt.target).parents('.show-con').length;
        if(length == 0){
            $('#subscribe').slideUp("normal",focusChange());
        }
    });

    //未订阅=>已订阅
    $('#noSub ul').on("click", "li", function(){
        var text = $(this).text().replace('+','');
        var source = $(this).offset();
        $('#isSub ul').append("<li><span>-</span>"+text+"</li>");
        var target = $('#isSub ul li:last').offset();
        var tli = $('#isSub ul li:last');
        var li = $(this);
        tli.hide();
        li.animate({
            left:target.left - source.left,
            top: target.top - source.top,
        },"slow","linear",function(){
            //setInterval(3000);
            $(this).hide();
            $(this).remove();
            tli.show();
        });
    });

    //已订阅=>未订阅
    $('#isSub ul').on("click", "li", function(){
        if($(this).index() != 0){
            var text = $(this).text().replace('-','');
            var source = $(this).offset();
            $('#noSub ul').append("<li><span>+</span>"+text+"</li>");
            var target = $('#noSub ul li:last').offset();
            var tli = $('#noSub ul li:last');
            var li = $(this);
            tli.hide();
            li.animate({
                left:target.left - source.left,
                top: target.top - source.top,
            },"slow","linear",function(){
                //setInterval(3000);
                $(this).hide();
                $(this).remove();
                tli.show();
            });
        }
    });

    //已订阅hover 左上角span变色
    $('#isSub ul').on("mouseover", "li", function(){
        $(this).children('span').css("background","#378aff");
    });

    //已订阅hover out 左上角span变回原来颜色
    $('#isSub ul').on("mouseout", "li", function(){
        $(this).children('span').css("background","#c3c3c3");
    });

    $('#weather').mouseover(function () {
        $.ajax({
            type: "GET",
            url: "http://apis.baidu.com/heweather/weather/free",
            data: "city=beijing",
            headers: {'apikey': 'eb10833b2f9e6affb0460791a2ea3fcb'},
            dataType: "json",
            success: function (data) {
                if (typeof data['errNum'] === 'undefined') {
                    var origin = data['HeWeather data service 3.0'][0];
                    var result = popData(origin);

                    var html = "";
                    for(var i = 0; i < result.days.length; i++){
                        var day = result.days[i];
                        html +='<li><span>'+ day.week +'</span><span class="weight">'+ day.tmp + '</span><span class="weight">'+ day.weather+'</span><span>'+ day.sc +'</span></li>';
                    }
                    $("#wshow .wshow-title span").text(result.days[0].date.split('-')[1] + '月' + result.days[0].date.split('-')[2]+ "日");
                    $("#wshow .wshow-con").html(html);
                    $("#wshow").show();
                } else {
//                        console.log('hehe');
                }
            }
        });
    });

    $("#weather").mouseleave(function () {
        $("#wshow").hide();
    })

    $("#loginSubmit").click(function(){
        if($("#username").val() != '' && $("#password").val() != ''){
            window.localStorage.setItem('name',$("#username").val());
            window.localStorage.setItem('status','yes');
            window.location.reload();
            //$("#loginBtn2").html(window.localStorage.getItem('name'));
        }else{
            alert("用户名和密码不能为空");
        }

    });
    $("#loginBtn2").mouseover(function(){
        $("#exit").show();
    });
    $("#loginBtn2").mouseleave(function(){
        $("#exit").hide();
    })
    $("#exit").mouseover(function(){
        $("#exit").show();
    });
    $("#exit").mouseleave(function(){
        $("#exit").hide();
    });
    $("#exit").click(function(){
        window.localStorage.setItem('status','no');
        window.localStorage.setItem('name','');
        window.location.reload();
    });
});

//处理天气服务器返回的数据，得到一个对象
function popData(origin) {
    var res = {};
    res['city'] = origin['basic']['city'];
    //  date-日期 week-周几 weather－天气 tmp－温度 dir－风向 sc－风力
    var days = [];
    for (var i = 0; i <= 4; i++) {
        days[i] = {
            'date': origin['daily_forecast'][i]['date'],
            'week': dateToWeek(origin['daily_forecast'][i]['date']),
            'tmp': origin['daily_forecast'][i]['tmp']['max'] + "~" + origin['daily_forecast'][i]['tmp']['min'] + "℃",
            'dir': origin['daily_forecast'][i]['wind']['dir'],
            'sc': origin['daily_forecast'][i]['wind']['sc'],
        }
        if (origin['daily_forecast'][i]['cond']['txt_d'] == origin['daily_forecast'][i]['cond']['txt_n']) {
            days[i]['weather'] = origin['daily_forecast'][i]['cond']['txt_d'];
        } else {
            days[i]['weather'] = origin['daily_forecast'][i]['cond']['txt_d'] + "转" + origin['daily_forecast'][i]['cond']['txt_n'];
        }
    }
    res['days'] = days;
    return res;
}

//输入一个日期字符串("2016-01-22")，返回星期几
function dateToWeek(date) {
    var arr = date.split('-');
    var year = parseInt(arr[0]);
    var month = parseInt(arr[1]) - 1;
    var day = parseInt(arr[2]);

    var d = new Date(year, month, day);
    var week = d.getDay();
    switch (week) {
        case 0:
            return "星期日";
        case 1:
            return "星期一";
        case 2:
            return "星期二";
        case 3:
            return "星期三";
        case 4:
            return "星期四";
        case 5:
            return "星期五";
        case 6:
            return "星期六";
    }
}

//导航和订阅操作 数据同步
function focusChange(){
    var origin = "我的关注", //记录操作前选中的导航，默认为<我的关注>
        flag = false; //判断是否有active的导航

    //记录操作前选中的导航
    $('.show-title li').each(function(){
        if($(this).hasClass("show-active")){
            origin = $(this).text();
        }
    });

    //清除导航中除<我的订阅>以外的所有导航
    $('.show-title li').eq(0).siblings().not('a').remove();

    //根据现有订阅重新设置导航
    for(var i = 1; i < $('#isSub ul li').length; i++){
        var text = $('#isSub ul li').eq(i).text().replace("-","");
        //现有订阅中包含操作前选中的导航
        if(text == origin){
            $('.show-title').append('<li class=\"show-item show-active\">'+ text +'</li>');
        }else{
            $('.show-title').append('<li class=\"show-item\">'+ text +'</li>');
        }
    }

    //现有订阅中不包含操作前的导航
    $('.show-title li').each(function(){
        if($(this).hasClass("show-active")){
            flag = true;
        }
    });

    //处理没有active的导航情况:导航数目>1用第一个，否则用默认<我的关注>
    if(!flag){
        if($('.show-title li').length > 1){
            $('.show-title li').eq(1).addClass("show-active");
        }else {
            $('.show-title li').eq(0).addClass("show-active");
        }
    }
}

