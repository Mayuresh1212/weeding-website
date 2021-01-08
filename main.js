
$(document).ready(function(){

    guestFilter($(".filter-btn.active").attr("data-target"))

    $(".filter-btn").click(function(){
        guestFilter($(this).attr("data-target"))
    })
    function guestFilter(target){
        console.log(target)
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".guest-item").hide();
        $(".guest-item[data-category='"+target+"']").fadeIn();
    }
})