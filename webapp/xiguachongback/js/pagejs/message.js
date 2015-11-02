/**
 * Created by vaio on 2015/10/22.
 */
/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ,"DF","GH","JK"],
    [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
    [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
    [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
    [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
    [ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"  ,"DF","GH","JK"],
    [ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A"  ,"DF","GH","JK"],
    [ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A"  ,"DF","GH","JK"],
    [ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+", 1.9, "A"  ,"DF","GH","JK"],
    [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
    [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
    [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
    [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
    [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ],
    [ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ,"DF","GH","JK" ]
];
$(document).ready(function(){
    $('#messageTable').DataTable({

        "aaData":dataSet ,
        "pagingType":'full_numbers',

        "bStateSave":true//状态保存，使用了翻页或者改变了每页显示数据数量，会保存在cookie中，下回访问时会显示上一次关闭页面时的内容。
    });
});