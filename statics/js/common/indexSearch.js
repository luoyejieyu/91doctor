/* 首页搜索 */
/**
 * Created by hp on 2016/10/24.
 */
var token=token;
$('.top').on('click','img',function(){
    window.history.go(-1)
});
$('.nav dl').on('click',function(){
    var index=$(this).index();
    console.log(index)
});
/*===================医院首页js============*/

//  初始化页面时现先请求一次获得轮播图的路径和id
$.ajax({
    type:'get',
    url:hurl+'pat/bannerlists?'+Math.random(),
    data:token,
    dataType:'json',
    success:function(data){
        $.each(data.images,function(index,self){
            $('.banner img').eq(1+index).attr({'data-id':self.id,'url':self.url});
            $('.banner img').eq(0).attr({'data-id':data.images[2].id,'url':data.images[2].url});//获取图片的id属性
            $('.banner img').eq(4).attr({'data-id':data.images[0].id,'url':data.images[0].url});//获取图片的id属性
//                console.log($('.banner img').eq(4).attr('url'))
        });
    }
});

//    图片点击时跳转到活动详情
$('.bd img').on('click',function(){
    localStorage.setItem('id',$(this).attr('data-id'));
    console.log(localStorage.getItem('id'));
    window.location.href='activity.html';
});
$.ajax({
    type:'get',
    url:hurl+'pat/ads/hospitals?'+Math.random(),
    data:token,
    dataType:'json',
    success:function(data){
        localStorage.setItem('id',data.hospitals[0].id);
        console.log(data.hospitals[0].id)
    }
})