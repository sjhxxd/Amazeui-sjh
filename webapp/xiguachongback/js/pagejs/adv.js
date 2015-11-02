/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "Airi Satou",         "广告管理",         "Airi Satou",          "Internet Explorer 4.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Angelica Ramos",     "Angelica Ramos",         "Angelica Ramos",       "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Ashton Cox",         "Ashton Cox",             "Ashton Cox",               "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Bradley Gree",       "Bradley Gree",           "Bradley Gree",             "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Brenden Wagner",     "Brenden Wagner",         "Brenden Wagner",          "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Brielle Williamson", "Brielle Williamson", "Brielle Williamson",           "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Bruno Nash",         "Bruno Nash",             "Bruno Nash",               "Firefox 2", "Win 98+ / OSX.2+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Caesar Vance",       "Caesar Vance",           "Caesar Vance",               "Firefox 2", "Win 98+ / OSX.2+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Gecko", "Firefox 3", "Gecko", "Firefox 3",  "Gecko", "Firefox 3",           "Win 2k+ / OSX.3+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Cara Stevens",       "Cara Stevens",           "Cara Stevens",              "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Cedric Kelly",       "Cedric Kelly",           "Cedric Kelly",              "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Colleen Hurst",      "Colleen Hurst",          "Colleen Hurst",               "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Dai Rios",           "Dai Rios",               "Dai Rios",                     "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Donna Snider",       "Donna Snider",           "Donna Snider",                  "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Doris Wilder",       "Doris Wilder",           "Doris Wilder",                    "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"]
];
$(document).ready(function(){
    //$("#advTable tbody tr").each(function () {
    //    var posX = $(this).find("td:first").position().left;
    //    var posY = $(this).find("td:first").position().top;
    //    var box="<input type='checkbox' name='checkEmp'>";
    //    //$("<span></span>").html(box).css({left:posX,top:posY}).appendTo($(this).find("td:first"));
    //    $(this).find("td:first").html(box);
    //});

    $('#advTable').DataTable({
        "aaData":dataSet,

        "aoColumns":[{
            sName:'ID',
            sTitle:'ID'
        },{
            sName:'tmpl',
            sTitle:'tmpl'
        },{
            sName:'adv_id',
            sTitle:'广告ID'
        },{
            sName:'code',
            sTitle:'代码'
        },{
            sName:'is_effect',
            sTitle:'是否生效'
        },{
            sName:'name',
            sTitle:'名称'
        },{
            sName:'rel_id',
            sTitle:'关系ID'
        },{
            sName:'rel_table',
            sTitle:'关系表'
        }],
        "pagingType":'full_numbers'
    });

});

td.innerHTML = "<input type='checkbox' />";