/**
 * Created by vaio on 2015/10/21.
 */
var dataSet = [
    /* Reduced data set */
    ["管理员", "Internet Explorer 4.0", "Win 95+", 4, "X", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.0", "Win 95+", 5, "C", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.0", "Win 95+", 5, "C", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.0", "Win 95+", 5, "C", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.0", "Win 95+", 5, "C", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A", "DF", "GH", "JK"],
    ["Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A", "DF", "GH", "JK"],
    ["Gecko", "火狐 2", "Win 98+ / OSX.2+", 1.8, "A", "DF", "GH", "JK"],
    ["Gecko", "火狐 2", "Win 98+ / OSX.2+", 1.8, "A", "DF", "GH", "JK"],
    ["Gecko", "火狐 2", "Win 98+ / OSX.2+", 1.8, "A", "DF", "GH", "JK"],
    ["Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A", "DF", "GH", "JK"],
    ["Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A", "DF", "GH", "JK"],
    ["Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A", "DF", "GH", "JK"],
    ["Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A", "DF", "GH", "JK"],
    ["Webkit", "Safari 1.2", "OSX.3", 125.5, "A", "DF", "GH", "JK"],
    ["Webkit", "Safari 1.2", "OSX.3", 125.5, "A", "DF", "GH", "JK"],
    ["Webkit", "Safari 1.2", "OSX.3", 125.5, "A", "DF", "GH", "JK"],
    ["Webkit", "Safari 1.3", "OSX.3", 312.8, "A", "DF", "GH", "JK"],
    ["Webkit", "Safari 2.0", "OSX.4+", 419.3, "A", "DF", "GH", "JK"],
    ["Webkit", "Safari 2.0", "OSX.4+", 419.3, "A", "DF", "GH", "JK"],
    ["Webkit", "Safari 3.0", "OSX.4+", 522.1, "A", "DF", "GH", "JK"]
];
$(document).ready(function () {
    var table = $('#adminTable').DataTable({

        //"ajax": {
        //
        //},
        "aaData": dataSet,
        "aoColumnDefs": [ {
            "targets": [ 0 ],
              "aoData": null,
              //"sDefaultContent": "<input class='checkbox'>",
            "sClass": "checkbox"
            } ],
        "aoColumns": [

            //{"sTitle": "<input type='checkbox' class='All'/>"},
            {"sTitle": "管理员ID"},
            {"sTitle": "管理员用户名"},
            {"sTitle": "密码"},
            {"sTitle": "是否生效"},
            {"sTitle": "是否删除"},
            {"sTitle": "权限ID"},
            {"sTitle": "上次登录时间"},
            {"sTitle": "上次登录IP"}
        ],
        "bSort": false,
        "pagingType": 'full_numbers'
        //"bStateSave": true//状态保存，使用了翻页或者改变了每页显示数据数量，会保存在cookie中，下回访问时会显示上一次关闭页面时的内容。
    });
       $("tr td:first-child").html("<input type='checkbox' />");



    //$('#adminTable tbody').on( 'click', 'tr', function () {
    //    $(this).toggleClass('selected');
    //    $(this).attributes('am-active');
    //} );
    //
    //$('#adminDelete').click( function () {
    //    alert( table.rows('.selected').data().length +' row(s) selected' );
    //} );

});
//    var tag=null;
//    var rowcontent = null;
$('#adminAdd').click(function () {
    tag = "add";
    $('#showpanel').css('display', 'none');
    $('#addpanel').css('display', 'block');
});



//$('#adminEdit').click(function(){
//    //tag="edit";
//    //var jsonobject = eval('('+ rowcontent +')');
//    //$('#ID').val(jsonobject.ID);
//    //$('#adm_name').val(jsonobject.adm_Name);
//    //$('#adm_password').val(jsonobject.adm_Password);
//    //$('#is_effect').val(jsonobject.is_Effect);
//    //$('#is_delete').val(jsonobject.is_Delete);
//    //$('#role_id').val(jsonobject.role_ID);
//    //$('#login_time').val(jsonobject.login_Time);
//    //$('#login_ip').val(jsonobject.login_IP);
//
//    $('#showpanel').css('display','none');
//    $('#addpanel').css('display','block');
//    $('#changepanel').html("管理员编辑");
//    $('#doit').html("确定");
//});
//$('#adminTable').on('check.bs.table', function(e,row){
//    rowcontent = JSON.stringify(row);  //把json对象解析成string对象
//});
//
//
$('#cancel').click(function () {
    //$('#showpanel').css('display','block');
    //$('#addpanel').css('display','none');
    window.location.reload();
});

