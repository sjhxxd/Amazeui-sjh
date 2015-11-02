/**
 * Created by vaio on 2015/10/22.
 */
//var dataSet=[
//    /* Reduced data set */
//    [ 1,"Airi Satou",         "权限类别",              "Internet Explorer 4.0", "Win 95+"],
//    [ 2,"Angelica Ramos",     "Angelica Ramos"  ,   "Internet Explorer 4.0", "Win 95+"],
//    [ 3,"Ashton Cox",         "Ashton Cox",               "Internet Explorer 4.0", "Win 95+"],
//    [ 4,"Bradley Gree",       "Bradley Gree",             "Internet Explorer 4.0", "Win 95+"],
//    [ 5,"Brenden Wagner",     "Brenden Wagner",   "Internet Explorer 4.0", "Win 95+"],
//    [ 6,"Brielle Williamson", "Brielle Williamson",          "Internet Explorer 4.0", "Win 95+"],
//    [ 7,"Bruno Nash",         "Bruno Nash",      "Internet Explorer 4.0", "Win 95+"],
//    [ 8,"Caesar Vance",       "Caesar Vance",            "Internet Explorer 4.0", "Win 95+"],
//    [ 9,"Gecko", "Firefox 3", "Gecko", "Firefox 3",    "Internet Explorer 4.0", "Win 95+"],
//    [ 10,"Cara Stevens",       "Cara Stevens",   "Internet Explorer 4.0", "Win 95+"],
//    [ 11,"Cedric Kelly",       "Cedric Kelly",             "Internet Explorer 4.0", "Win 95+"],
//    [ 12,"Colleen Hurst",      "Colleen Hurst",        "Internet Explorer 4.0", "Win 95+"],
//    [ 13,"Dai Rios",           "Dai Rios",           "Internet Explorer 4.0", "Win 95+"],
//    [ 14,"Donna Snider",       "Donna Snider",         "Internet Explorer 4.0", "Win 95+"],
//    [15, "Doris Wilder",       "Doris Wilder",   "Internet Explorer 4.0", "Win 95+"]
//];
$(document).ready(function(){
    $('#role_moduleTable').DataTable({
        //"aaData":dataSet,

        "aoColumns":[{
            sName:'ID',
            sTitle:'ID'
        },{
            sName:'module',
            sTitle:'组件'
        },{
            sName:'name',
            sTitle:'名称'
        },{
            sName:'is_effect',
            sTitle:'是否生效'
        },{
            sName:'is_delete',
            sTitle:'是否删除'
        },{
            sName:'null',
            sTitle:'添头'
        }],
        "pagingType":'full_numbers',
        "ajax":'text.txt'

    });
});
