(function ($) {
    'use strict';

    $(function () {
        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function () {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function () {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });
    });
})(jQuery);

//按钮loading状态
$('.btn-loading-example').click(function () {
    var $btn = $(this);
    $btn.button('loading');
    setTimeout(function () {
        $btn.button('reset');

    }, 5000);
});

//单按钮状态切换
$(function () {
    var $toggleButton = $('#doc-single-toggle');
    $toggleButton.on('click', function () {
        setButtonStatus();
    });
    function setButtonStatus() {
        var status = $toggleButton.hasClass('am-active') ? '未激活' : '激活'
        $('#doc-single-toggle-status').text(status);
    }
});
$(function () {
    $('#doc-form-file').on('change', function () {
        var fileNames = '';
        $.each(this.files, function () {
            fileNames += '<span class="am-badge">' + this.name + '</span> ';
        });
        $('#file-list').html(fileNames);

    });

});
$(function () {
    window.localStorage.clear();
});

$script = $('<script>', {
    src: 'http://cdn.amazeui.org/amazeui/1.0.1/js/amazeui.min.js',
    id: 'ui-jquery'
});
$script.appendTo($('body'));
$script.on('load', function () {
    console.log('JQ script loaded');
});

$('.am-alert').on('closed.alert.amui', function () {
    alert('警告窗口已经关闭');
});


// 获取选中的值
$(function () {
    var $radios = $('[name="options"]');
    $radios.on('change', function () {
        console.log('单选框当前选中的是：', $radios.filter(':checked').val());
    });
});


$('#collapse_nav').collapse({
    toggle: false
});

function Btn_click(){
    var strtxt=document.getElementById("txtcontent").value;
    var strDiv=document.getElementById("divshow");
    strDiv.style.display="block";
    strDiv.innerHTML="你输入的是:"+strtxt;
}

$(function(){
    var progress = $.AMUI.progress.set(0.5).inc(0.2);

    $('#np-s').on('click', function() {
        progress.start();
    });

    $('#np-d').on('click', function() {
        progress.done();
    });
});

$(function() {
    var $slider = $('#demo-slider-0');
    var counter = 0;
    var getSlide = function() {
        counter++;
        return '<li><img src="http://s.amazeui.org/media/i/demos/bing-' +
            (Math.floor(Math.random() * 4) + 1) + '.jpg" />' +
            '<div class="am-slider-desc">动态插入的 slide ' + counter + '</div></li>';
    };

    $('.js-demo-slider-btn').on('click', function() {
        var action = this.getAttribute('data-action');
        if (action === 'add') {
            $slider.flexslider('addSlide', getSlide());
        } else {
            var count = $slider.flexslider('count');
            count > 1 && $slider.flexslider('removeSlide', $slider.flexslider('count') - 1);
        }
    });

});

////判断终端类型
//var browser = {
//    versions: function () {
//        var u = window.navigator.userAgent;
//        return {
//            trident: u.indexOf('Trident') > -1, //IE内核
//            presto: u.indexOf('Presto') > -1, //opera内核
//            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
//            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
//            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
//            iPad: u.indexOf('iPad') > -1, //是否为iPad
//            webApp: u.indexOf('Safari') == -1,//是否为web应用程序，没有头部与底部
//            weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
//        };
//    }()
//}
//document.writeln(" 是否为移动终端: " + browser.versions.mobile);
//document.writeln(" ios终端: " + browser.versions.ios);
//document.writeln(" android终端: " + browser.versions.android);
//document.writeln(" 是否为iPhone: " + browser.versions.iPhone);
//document.writeln(" 是否iPad: " + browser.versions.iPad);
//document.writeln(navigator.userAgent);
