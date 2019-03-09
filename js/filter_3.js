$(document).ready(function(){

$("select#s_Score_1").change(function(){
    $(this).find("option:selected").each(function(){
        var optionValue = $(this).attr("value");
        if(optionValue){
            $(".box_1").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else{
            $(".box_1").hide();
        }
    });
}).change();

});