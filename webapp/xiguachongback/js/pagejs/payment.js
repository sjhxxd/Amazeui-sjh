/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "Airi Satou",         "付款管理",         "Airi Satou",         "Airi Satou",         "Airi Satou",          "Internet Explorer 4.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Angelica Ramos",     "Angelica Ramos",     "Angelica Ramos",     "Angelica Ramos",     "Angelica Ramos",       "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Ashton Cox",         "Ashton Cox",         "Ashton Cox",         "Ashton Cox",         "Ashton Cox",               "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Bradley Gree",       "Bradley Gree",       "Bradley Gree",       "Bradley Gree",       "Bradley Gree",             "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Brenden Wagner",     "Brenden Wagner",     "Brenden Wagner",     "Brenden Wagner",     "Brenden Wagner",          "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Brielle Williamson", "Brielle Williamson", "Brielle Williamson", "Brielle Williamson", "Brielle Williamson",           "Internet Explorer 5.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Bruno Nash",         "Bruno Nash",         "Bruno Nash",         "Bruno Nash",         "Bruno Nash",               "Firefox 2", "Win 98+ / OSX.2+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Caesar Vance",       "Caesar Vance",       "Caesar Vance",       "Caesar Vance",       "Caesar Vance",               "Firefox 2", "Win 98+ / OSX.2+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Gecko", "Firefox 3", "Gecko", "Firefox 3", "Gecko", "Firefox 3", "Gecko", "Firefox 3", "Gecko", "Firefox 3",           "Win 2k+ / OSX.3+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Cara Stevens",       "Cara Stevens",       "Cara Stevens",       "Cara Stevens",       "Cara Stevens",              "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Cedric Kelly",       "Cedric Kelly",       "Cedric Kelly",       "Cedric Kelly",       "Cedric Kelly",              "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Colleen Hurst",      "Colleen Hurst",      "Colleen Hurst",      "Colleen Hurst",      "Colleen Hurst",               "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Dai Rios",           "Dai Rios",           "Dai Rios",           "Dai Rios",           "Dai Rios",                     "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Donna Snider",       "Donna Snider",       "Donna Snider",       "Donna Snider",       "Donna Snider",                  "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Doris Wilder",       "Doris Wilder",       "Doris Wilder",       "Doris Wilder",       "Doris Wilder",                    "Safari 1.2", "OSX.3" ,"Airi Satou", "Internet Explorer 4.0", "Win 95+"]
];
$(document).ready(function(){
    $('#paymentTable').DataTable({
        "aaData":dataSet,

        "aoColumns":[{
            sName:'ID',
            sTitle:'ID'
        },{
            sName:'class_name',
            sTitle:'class_name'
        },{
            sName:'is_effect',
            sTitle:'是否生效'
        },{
            sName:'online_pay',
            sTitle:'在线支付'
        },{
            sName:'name',
            sTitle:'名称'
        },{
            sName:'description',
            sTitle:'描述'
        },{
            sName:'total_amount',
            sTitle:'总数'
        },{
            sName:'config',
            sTitle:'结构'
        },{
            sName:'logo',
            sTitle:'商标'
        },{
            sName:'sort',
            sTitle:'排序'
        }],
        "pagingType":'full_numbers'
    });
});
