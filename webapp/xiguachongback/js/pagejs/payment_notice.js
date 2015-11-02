/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "Airi Satou",         "付款注意",         "Airi Satou",         "Airi Satou",         "Airi Satou",          "Internet Explorer 4.0", "Win 95+","Airi Satou", "Internet Explorer 4.0", "Win 95+"],
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
    $('#payment_noticeTable').DataTable({
        "aaData":dataSet,

        "aoColumns":[{
            sName:'ID',
            sTitle:'ID'
        },{
            sName:'notice_sn',
            sTitle:'notice_sn'

        },{
            sName:'create_time',
            sTitle:'创建时间'
        },{
            sName:'pay_time',
            sTitle:'支付时间'
        },{
            sName:'order_id',
            sTitle:'订单ID'
        },{
            sName:'is_paid',
            sTitle:'是否支付'
        },{
            sName:'user_id',
            sTitle:'用户ID'
        },{
            sName:'payment_id',
            sTitle:'支付ID'
        },{
            sName:'bank_id',
            sTitle:'银行ID'
        },{
            sName:'memo',
            sTitle:'备注'
        },{
            sName:'money',
            sTitle:'积分'
        },{
            sName:'outer_notice_sn',
            sTitle:'outer_notice_sn'
        },{
            sName:'deal_ID',
            sTitle:'项目ID'
        },{
            sName:'deal_item_ID',
            sTitle:'项目图片ID'
        },{
            sName:'deal_name',
            sTitle:'项目名称'
        }],
        "pagingType":'full_numbers'
    });
});
