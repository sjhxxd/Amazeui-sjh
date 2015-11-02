/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "<input type='checkbox' class='klass'>","Airi Satou", "项目支持", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Angelica Ramos", "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Ashton Cox", "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Bradley Gree", "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Brenden Wagner", "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Brielle Williamson", "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Bruno Nash", "Firefox 2", "Win 98+ / OSX.2+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Caesar Vance", "Firefox 2", "Win 98+ / OSX.2+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Gecko", "Firefox 3", "Win 2k+ / OSX.3+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Cara Stevens", "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Cedric Kelly", "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Colleen Hurst", "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Dai Rios", "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Donna Snider", "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "<input type='checkbox' class='klass'>","Doris Wilder", "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"]
];
$(document).ready(function(){
    $('#suppport_logTable').DataTable({
        "aaData":dataSet,

        "aoColumns":[{
            "sName":'ID',
            "sTitle":"<input type='checkbox' class='mainId'>"
        },{
            "sName":'ID',
            "sTitle":'ID'
        },{
            "sName":'deal_id',
            "sTitle":'项目ID'
        },{
            "sName":'user_id',
            "sTitle":'用户ID'
        },{
            "sName":'create_time',
            "sTitle":'创建时间'
        },{
            "sName":'price',
            "sTitle":'价格'
        },{
            "sName":'deal_item_id',
            "sTitle":'项目图片ID'
        }],
        "pagingType":'full_numbers',
         sortable:false
    });
});
//$(document).ready(function() {
//    var table = $('#suppport_logTable').DataTable();
//
//    $('#suppport_logTable tbody').on('click', 'tr', function () {
//        var data = table.row( this ).data();
//        alert( 'You clicked on '+data[1]+'\'s row' );
//    } );
//} );
$(function (mainId,klass){
    $("." + klass).each(function(){
        if($("." + mainId).attr("checked")== "checked"){
            $(this).attr("checked", "checked");
        }
        else{
            $(this).removeAttr("checked");
        }
    });
});