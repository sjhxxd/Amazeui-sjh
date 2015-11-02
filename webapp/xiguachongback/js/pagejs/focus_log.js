/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
    [ "Airi Satou", "Internet Explorer 4.0", "Win 95+","sd"],
    [ "Angelica Ramos", "Internet Explorer 5.0", "Win 95+","sd"],
    [ "Ashton Cox", "Internet Explorer 5.0", "Win 95+","sd"],
    [ "Bradley Gree", "Internet Explorer 5.0", "Win 95+","sd"],
    [ "Brenden Wagner", "Internet Explorer 5.0", "Win 95+","sd"],
    [ "Brielle Williamson", "Internet Explorer 5.0", "Win 95+","sd"],
    [ "Bruno Nash", "Firefox 2", "Win 98+ / OSX.2+","sd"],
    [ "Caesar Vance", "Firefox 2", "Win 98+ / OSX.2+","sd"],
    [ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+","sd"],
    [ "Cara Stevens", "Safari 1.2", "OSX.3" ,"sd"],
    [ "Cedric Kelly", "Safari 1.2", "OSX.3" ,"sd"],
    [ "Colleen Hurst", "Safari 1.2", "OSX.3" ,"sd"],
    [ "Dai Rios", "Safari 1.2", "OSX.3" ,"sd"],
    [ "Donna Snider", "Safari 1.2", "OSX.3" ,"sd"],
    [ "Doris Wilder", "Safari 1.2", "OSX.3" ,"sd"]
];
$(document).ready(function(){
    $('#focus_logTable').DataTable({

        "aaData":dataSet,
        "pagingType":'full_numbers'

    });
});




