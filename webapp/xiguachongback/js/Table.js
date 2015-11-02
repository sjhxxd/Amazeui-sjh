/**
 * Created by vaio on 2015/10/20.
 */
$('#adminTable').bootstrapTable({
    columns:[{
        field:'state',
        checkbox:"true"
    },{
        field:'adm-name',
        title:'����Ա�û���',
        formatter:'nameFormatter',
        sortable:'true'
    },{
        field:'adm_password',
        title:'����',
        sortable:'true',
        sorter:'starsSorter'
    },{
        field:'is_effect',
        title:'�Ƿ���Ч',
        sortable:'true'
    },{
        field:'is_delete',
        title:'�Ƿ�ɾ��',
        sortable:'true'
    },{
        field:'role_id',
        title:'Ȩ��ID',
        sortable:'true'
    },{
        field:'login_time',
        title:'�ϴε�¼ʱ��',
        sortable:'true'
    },{
        field:'login_ip',
        title:'�ϴε�¼IP',
        sortable:'true'
    }],
    bPaginate:true,
    pageList:[10,20,50,100,500],
    pageSize:10,
    pageNumber:1,
    clickToSelect:true,
    smartDisplay:true,
    url:'admin.txt'

});
//全选/反选
var btn = document.getElementById("btn");
var test = document.getElementsByName("test");
btn.onclick = function(){
    for(var i=1; i<=test.length; i+=1){
        if(test[i-1].checked){
            test[i-1].checked = false;
        }else{
            test[i-1].checked = true;
        }
    }
};