/**
 * Created by vaio on 2015/10/12.
 */
window.onload = function(){
    loginSucView("result");

    // ����ѡ��л�
    var tabs = $(".tab a");
    $(".tab > a").click(function(){
        changeTab(tabs, $(this));
    })

//   // �������ڽ���ѡ�
//   $(".left-nav a").click(function(){
//     // �رղ����
//     $("#leftside").offCanvas('close');
//     // ��ʾ�����ѡ�
//     var tab = $(this).children("span");
//     if(tab.html() == "�Ƽ���Ŀ"){     // �Ƽ���Ŀ
//       changeTab(tabs, $(".tab > a:contains('�Ƽ�')"));
//     }else if(tab.html() == "���а�"){     // ���а�
//       changeTab(tabs, $(".tab > a:contains('����')"));
//     }else if(tab.html() == "������Ŀ"){     // ������Ŀ
//       changeTab(tabs, $(".tab > a:contains('����')"));
//     }else if(tab.html() == "�����Ŀ"){     // �����Ŀ
//       changeTab(tabs, $(".tab > a:contains('���')"));
//     }
//   })

    setEleLocation();     // ��λ����Ԫ��λ��
}

// �������������ʱ
$(window).resize(function(){
    setEleLocation();
})

/**
 * ����Ԫ�ص���ʽ��js��hack
 */
function setEleLocation(){
    var poster = $(".tuijian > img:eq(0)");
    var videoDiv = $(".video");
    var video = $(".video video");
    var intro = $(".intro");
    var support = $(".tuijian a img");
    // ͳһ����������Ƶ��Ŀ�ߺ�λ��
    videoDiv.css("width", poster.width());
    videoDiv.css("height", poster.height());
    videoDiv.css("left", poster.css("marginLeft"));
    video.attr("width", "100%");
    video.attr("height", "100%");
    // ͳһ��������֧�ְ�ť��λ��
    support.css("top", poster.height());
    // ���������Ƽ�ģ�����ı�ÿ��ģ������Ӧ�Ĳ���Ԫ����ʽ
    $(".tuijian").each(function(index){
        var curPoster = $(this).find("img").eq(0);
        var curZhezhao = $(this).find("img").eq(1);
        var curPlay = $(this).find("img").eq(2);
        var curVideoDiv = $(this).find(".video");
        var picZhezhao = $(this).find("img").eq(4);
        var introTitle = $(this).find("span").eq(0);
        // ����ÿ�����Ű�ť��λ��
        curPlay.css("top", (curPoster.height() - curPlay.height()) / 2).css("display", "block");
        // ����ÿ��ͼƬ�ɰ��λ��
        picZhezhao.css("top", curPoster.height());
        // ����ÿ���ſ������λ��
        introTitle.css("top", curPoster.height()).css("display", "block");
        // ����ÿ���ſ����ݵ�λ��
        intro.css("top", parseInt(introTitle.css("top")) + introTitle.height() + parseInt(introTitle.css("marginTop"))).css("display", "block");
        // ����ÿ��֧�ְ�ť��λ��
        support.css("top", parseInt(intro.css("top")) + intro.height() + parseInt(intro.css("marginTop"))).css("display", "block");
        // ��Ƶ�����¼�
        curPlay.click(function(){
            // �����ز���Ҫ��Ԫ��
            curPoster.css("visibility", "hidden");
            curZhezhao.css("visibility", "hidden");
            curPlay.css("visibility", "hidden");
            // ����ʾ��Ƶ��
            curVideoDiv.css("display", "block");
        })
    })
}

/**
 * ѡ��л�
 * @param  {ElementList} tabs ����ѡ�
 * @param  {Element} currentTab ��ǰѡ�е�ѡ�
 */
function changeTab(tabs, currentTab){

    /***** �л�Tab���� *****/
    tabs.each(function(index){
        $(this).css("color", "#fff");
    })
    currentTab.css("color", "#1dbcd2");

    /***** �л�Tab���� *****/
    var tuijian = $(".tuijian");
    var paihang = $(".paihang");
    var zuixin = $(".zuixin");
    var success = $(".success");
    if(currentTab.html() == "�Ƽ�"){     // �Ƽ�Tab

        // ������������
        paihang.css("display","none");
        zuixin.css("display","none");
        success.css("display","none");

        // ���Tab��ǩ��ʾ��ǰ��Ӧ����
        (tuijian.css("display") == "none") ? tuijian.css("display","block") : null;
        if($(".tuijian").html() == "" || $(".tuijian").html() == null){
            tuijian.append(
                "<img src='images/index/shipin.png' class='am-img-responsive video'/>" +
                "<img src='images/index/shipinmengban@2x.png' class='am-img-responsive zhezhao'/>" +
                "<img src='images/index/shipin_btn.png' class='am-img-responsive play'/>" +
                "<img src='images/index/img1.png' class='am-img-responsive intro'/>" +
                "<span class='intro-title'>ĳĳĳ���ֻ�</span>" +
                "<div class='intro-line'></div>" +
                "<div class='intro-content'>" +
                "<img src='images/index/mubiao.png' class='am-img-responsive'/>" +
                "<span>Ŀ��1500</span>" +
                "<img src='images/index/yichou.png' class='am-img-responsive' style='margin-left:2rem;'/>" +
                "<span style='margin-right: 2rem;'>�ѳ�200</span>" +
                "<img src='images/index/shengyu.png' class='am-img-responsive'/>" +
                "<span>ʣ��8��</span></div>" +
                "<img src='images/index/support.png' class='am-img-responsive intro-support'/>"
            );
        }
        setEleLocation();
    }else if(currentTab.html() == "����"){     // ����Tab

        // �����������ݶ�����ɾ���ڵ�
        tuijian.css("display","none");
        zuixin.css("display","none");
        success.css("display","none");

        // ��ʾ��ǰ����
        (paihang.css("display") == "none") ? paihang.css("display","block") : null;
        if($(".paihang ul").html() == "" || $(".paihang ul").html() == null){
            paihang.css("display","block");
            $(".paihang ul").append(
                "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left'style='background: #202020;'>" +
                "<div class='am-u-sm-4 am-list-thumb'>" +
                "<img src='imgs/paihang/tupian@2x.png' class='am-img-responsive paihang-poster'/></div>" +
                "<div class='am-u-sm-8 am-list-main'>" +
                "<p class='paihang-title'>2015���ܽ�������Ѳ���ݳ���-�Ͼ�վ</p>" +
                "<img class='paihang-jiantou' src='imgs/paihang/xiayiji@2x.png'>" +
                "<div class='paihang-content'>" +
                "<span>Ŀ��1500</span>" +
                "<span>�ѳ�200</span>" +
                "<span>ʣ��8��</span></div>" +
                "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +
                "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +
                "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +
                "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +
                "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +
                "<a class='paihang-support' href='item.html'>����֧��</a>" +
                "</div></li>"
            );
            // Hackһ�¼�ͷ��λ��
            browserType("UCBrowser") ? $(".paihang-jiantou").css("top", "1.2rem") : null;
        }
    }else if(currentTab.html() == "����"){     // ����Tab

        // ������������
        tuijian.css("display","none");
        paihang.css("display","none");
        success.css("display","none");

        // ��ʾ��ǰ����
        (zuixin.css("display") == "none") ? zuixin.css("display","block") : null;
        if($(".zuixin .zuixin-list").html() == "" || $(".zuixin .zuixin-list").html() == null){
            $(".zuixin .zuixin-list").append(
                "<img class='am-img-responsive zuixin-poster' src='imgs/zuixin/tupian-1.png'>" +
                "<div class='zuixin-content'>" +
                "<span class='zuixin-title' style='font-size:1.8rem; margin-right:0rem; color:#ccc;'>Ѧ֮ǫ���ֻ�</span>" +
                "<span>2015-8-17</span><span>13:00</span><span>ʣ��12��</span><span>49�����</span>" +
                "<a class='zuixin-support' href='item.html'>����֧��</a></div>"
            );
        }
    }else if(currentTab.html() == "���"){     // ���Tab

        // ������������
        tuijian.css("display","none");
        paihang.css("display","none");
        zuixin.css("display","none");

        // ��ʾ��ǰ����
        (success.css("display") == "none") ? success.css("display","block") : null;
        if($(".success ul").html() == "" || $(".success ul").html() == null){
            $(".success ul").append(
                "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left' style='background:#202020;'>" +
                "<div class='am-u-sm-4 am-list-thumb'>" +
                "<img src='imgs/wancheng/tupian@2x.png' class='am-img-responsive success-poster'/></div>" +
                "<div class='am-u-sm-8 am-list-main'>" +
                "<p class='success-title'>Ѧ֮ǫ�ݳ���</p>" +
                "<div class='success-content'>" +
                "<span>Ŀ��: 1500</span><span>�ѳ�: 200</span>" +
                "<span>ʱ��: 6��</span><span>��ʱ: 4��</span></div>" +
                "<img class='success-icon' src='imgs/wancheng/chenggong.png'>" +
                "<span class='success-ok'>�����</span>" +
                "<img class='success-jiantou' src='imgs/wancheng/xiayiji@2x.png'></div></li>"
            );
            // Hackһ�¼�ͷ��λ��
            browserType("UCBrowser") ? $(".success-jiantou").css("top", "1.2rem") : null;
        }
    }
}

/**
 * ��½�ɹ�ʱ������DOM�ı��ұ�������
 * @param {string} name ��½�ɹ����صı��
 */
function loginSucView(name){
    var result = getQueryString(name);
    if(result != null && result != ""){
        if(result == "success"){
            $("#rightside .user-header").attr("src","imgs/index/touxiang@2x.png");
            $("#rightside .user-title").html("�ҽ�С����");
            // �ҵ�����
            var myInfo = $(".right-nav a:eq(0)");
            change(myInfo,"imgs/index/gerenziliao-@2x.png","�ҵ�����");
            myInfo.attr("href","myInfo.html");
            // �ҵ�Ǯ��
            var myWallet = $(".right-nav a:eq(1)");
            change(myWallet,"imgs/index/wodeqianbao-@2x.png","�ҵ�Ǯ��");
            myWallet.attr("href","myWallet.html");
            // �ҵ��ղ�
            var myLove = $(".right-nav a:eq(2)");
            change(myLove,"imgs/index/wodeshoucang-@2x.png","�ҵ��ղ�");
            myLove.attr("href","myLove.html");
            // ���롰�ҵĶ������ڵ�
            $(".right-nav li:eq(2)").after(
                "<li><a href='##'>" +
                "<img src='imgs/index/wodedingdan@2x.png'> " +
                "<span>�ҵĶ���</span>" +
                "</a></li>"
            );
            // ���롰�������񡱽ڵ�
            $(".right-nav li:eq(3)").after(
                "<li><a href='share.html'>" +
                "<img src='imgs/index/fenxiangyouli-@2x.png'> " +
                "<span>��������</span>" +
                "</a></li>"
            );
            // �˳���¼
            var logout = $(".right-nav a:eq(5)");
            change(logout,"imgs/index/tuichudenglu-@2x.png","�˳���¼");
            logout.attr("href","##");
        }else{
            // ��½ʧ��
        }
        function change(ele, src, str){
            ele.children("img").attr("src",src);
            ele.children("span").html(str);
        }
    }
}




