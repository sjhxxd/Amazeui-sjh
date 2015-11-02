/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "Airi Satou",         "权限管理",              "Internet Explorer 4.0", "Win 95+"],
    [ "Angelica Ramos",     "Angelica Ramos"  ,   "Internet Explorer 4.0", "Win 95+"],
    [ "Ashton Cox",         "Ashton Cox",               "Internet Explorer 4.0", "Win 95+"],
    [ "Bradley Gree",       "Bradley Gree",             "Internet Explorer 4.0", "Win 95+"],
    [ "Brenden Wagner",     "Brenden Wagner",   "Internet Explorer 4.0", "Win 95+"],
    [ "Brielle Williamson", "Brielle Williamson",          "Internet Explorer 4.0", "Win 95+"],
    [ "Bruno Nash",         "Bruno Nash",      "Internet Explorer 4.0", "Win 95+"],
    [ "Caesar Vance",       "Caesar Vance",            "Internet Explorer 4.0", "Win 95+"],
    [ "Gecko", "Firefox 3", "Gecko", "Firefox 3",    "Internet Explorer 4.0", "Win 95+"],
    [ "Cara Stevens",       "Cara Stevens",   "Internet Explorer 4.0", "Win 95+"],
    [ "Cedric Kelly",       "Cedric Kelly",             "Internet Explorer 4.0", "Win 95+"],
    [ "Colleen Hurst",      "Colleen Hurst",        "Internet Explorer 4.0", "Win 95+"],
    [ "Dai Rios",           "Dai Rios",           "Internet Explorer 4.0", "Win 95+"],
    [ "Donna Snider",       "Donna Snider",         "Internet Explorer 4.0", "Win 95+"],
    [ "Doris Wilder",       "Doris Wilder",   "Internet Explorer 4.0", "Win 95+"]
];
$(document).ready(function(){
    $('#roleTable').DataTable({
        "aaData":dataSet,

        "aoColumns":[{
            sName:'ID',
            sTitle:'ID'
        },{
            sName:'name',
            sTitle:'名称'
        },{
            sName:'is_effect',
            sTitle:'是否生效'
        },{
            sName:'is_delete',
            sTitle:'是否删除'
        }],
        "pagingType":'full_numbers'
    });
});
