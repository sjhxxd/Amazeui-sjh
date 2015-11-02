/**
 * Created by user on 2015/10/30.
 */

//草根众筹切换
var  tab1=$("#left-tab");
var  tab2=$("#right-tab");

var left_tab=$("#content-xiaoxing");
var right_tab=$("#content-faqi");
tab1.click(function(){
   left_tab.show();
    right_tab.hide();
});
tab2.click(function(){
   right_tab.show();
    left_tab.hide();
});

//瓜子娱乐切换
var tab3=$("#tab-left");
var tab4=$("#tab-middle");
var tab5=$("#tab-right");

var tab_left=$("#content-news");
var tab_middle=$("#content-panxi");
var tab_right=$("#content-yiren");
tab3.click(function(){
    tab_left.show();
    tab_middle.hide();
    tab_right.hide();
});
tab4.click(function(){
    tab_left.hide();
    tab_middle.show();
    tab_right.hide();
});
tab5.click(function(){
    tab_left.hide();
    tab_middle.hide();
    tab_right.show();
});

//左侧边栏进入tab
var maintab=$("#content");
var lefttab=$("#second-content");

var tab6_1=$(".left-nav a:eq(2)");
var tab7_1=$(".left-nav a:eq(3)");
var tab8_1=$(".left-nav a:eq(4)");
var left_tuijian=$(".left-nav a:eq(1)");
tab6_1.click(function(){
    lefttab.show();
    maintab.hide();
});
tab7_1.click(function(){
    lefttab.show();
    maintab.hide();
});
tab8_1.click(function(){
    lefttab.show();
    maintab.hide();
});
left_tuijian.click(function(){
    lefttab.hide();
    maintab.show();
});

//排行，最新，完成
var tab6=$("#second-content .tab a:eq(0)");
var tab7=$("#second-content .tab a:eq(1)");
var tab8=$("#second-content .tab a:eq(2)");
//推荐


var paihang_tab=$(".paihang");
var zuixin_tab=$(".zuixin");
var success_tab=$(".success");
tab6.click(function(){
    paihang_tab.show();
    zuixin_tab.hide();
    success_tab.hide();
});
tab7.click(function(){
    paihang_tab.hide();
    zuixin_tab.show();
    success_tab.hide();
});
tab8.click(function(){
    paihang_tab.hide();
    zuixin_tab.hide();
    success_tab.show();
});
tab9.click(function(){
    tuijan_tab.show();
    maintab.show();
    lefttab.hide();
});