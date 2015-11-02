/**
 * Created by vaio on 2015/10/21.
 */
$(document).ready(function(){
    $('#userTable').DataTable({

        "aaData": [
            /* Reduced data set */
            [ "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ,"DF","GH","JK"],
            [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
            [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
            [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
            [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
            [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
            [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
            [ "Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A"  ,"DF","GH","JK"],
            [ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A"  ,"DF","GH","JK"],
            [ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A"  ,"DF","GH","JK"],
            [ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A"  ,"DF","GH","JK"],
            [ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A"  ,"DF","GH","JK"],
            [ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+", 1.9, "A"  ,"DF","GH","JK"],
            [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
            [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
            [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
            [ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ,"DF","GH","JK" ],
            [ "Webkit", "Safari 3.0", "OSX.4+", 522.1, "A"  ,"DF","GH","JK"]
        ],
        "aoColumns": [
            { "sTitle": "用户ID" },
            { "sTitle": "用户名" },
            { "sTitle": "密码" },
            { "sTitle": "是否生效" },
            { "sTitle": "是否删除" },
            { "sTitle": "权限ID" },
            { "sTitle": "上次登录时间" },
            { "sTitle": "上次登录IP" }
        ],
        "pagingType":'full_numbers',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
        //"bStateSave":true//状态保存，使用了翻页或者改变了每页显示数据数量，会保存在cookie中，下回访问时会显示上一次关闭页面时的内容。



    });
});

$('#userAdd').click(function(){

    $('#showpanel').css('display','none');
    $('#addpanel').css('display','block');
});



$('#cancel').click(function(){
    $('#showpanel').css('display','block');
    $('#addpanel').css('display','none');
});

$("title").html("用户管理");