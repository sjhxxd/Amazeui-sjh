/**
 * Created by vaio on 2015/10/22.
 */
var dataSet=[
    /* Reduced data set */
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
    $('#cateTable').DataTable({

        "aaData":dataSet ,
        "pagingType":'full_numbers',
        "bStateSave":true//状态保存，使用了翻页或者改变了每页显示数据数量，会保存在cookie中，下回访问时会显示上一次关闭页面时的内容。
    });
});
//   //tfoot独立搜索
$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#cateTable tfoot th').each( function () {
        var title = $('#cateTable thead th').eq( $(this).index() ).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    // DataTable
    var table = $('#cateTable').DataTable();

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );



$('#cateAdd').click(function(){
    $('#showpanel').css('display','none');
    $('#addpanel').css('display','block');
});