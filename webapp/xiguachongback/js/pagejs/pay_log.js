/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "项目支付", "Internet Explorer 4.0", "Win 95+"],
    [ "Airi Satou", "Internet Explorer 4.0", "Win 95+"],
    [ "Angelica Ramos", "Internet Explorer 5.0", "Win 95+"],
    [ "Ashton Cox", "Internet Explorer 5.0", "Win 95+"],
    [ "Bradley Gree", "Internet Explorer 5.0", "Win 95+"],
    [ "Brenden Wagner", "Internet Explorer 5.0", "Win 95+"],
    [ "Brielle Williamson", "Internet Explorer 5.0", "Win 95+"],
    [ "Bruno Nash", "Firefox 2", "Win 98+ / OSX.2+"],
    [ "Caesar Vance", "Firefox 2", "Win 98+ / OSX.2+"],
    [ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+"],
    [ "Cara Stevens", "Safari 1.2", "OSX.3" ],
    [ "Cedric Kelly", "Safari 1.2", "OSX.3" ],
    [ "Colleen Hurst", "Safari 1.2", "OSX.3" ],
    [ "Dai Rios", "Safari 1.2", "OSX.3" ],
    [ "Donna Snider", "Safari 1.2", "OSX.3" ],
    [ "Doris Wilder", "Safari 1.2", "OSX.3" ]
];
$(document).ready(function(){
    $('#pay_logTable').DataTable({

        "aaData":dataSet,
        "pagingType":'full_numbers'

    });
});