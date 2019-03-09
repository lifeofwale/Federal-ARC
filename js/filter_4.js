$(document).ready(function(){
    $('#ourHolder_2 div.ware_s , #ourHolder_2 div.ware_d, #ourHolder_2 div.ware_c, #ourHolder_2 div.ware_t, #ourHolder_2 div.ware_r, #ourHolder_2 div.ware_i, #ourHolder_2  div.ware_m, #ourHolder_2 div.ware_g,#ourHolder_2 div.ware_o, #ourHolder_2 div.ware_v, #ourHolder_2 div.ware_a').hide();
      $('#filterOptions_2 li a').click(function(){
              var ourClass = $(this).attr('class');
              $('#filterOptions_2 li').removeClass('active');
              $(this).parent().addClass('active');

              if(ourClass=='ware_f') {
// show all our items
$('#ourHolder_2').children('div.ware_f').show();
$('#ourHolder_2').children('div.ware_s , div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
} 
else if (ourClass=='ware_s'){

$('#ourHolder_2').children('div.ware_s').show();
$('#ourHolder_2').children('div.ware_f , div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
}

else if (ourClass=='ware_d'){

$('#ourHolder_2').children('div.ware_d').show();
$('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
}
else if (ourClass=='ware_c'){

$('#ourHolder_2').children('div.ware_c').show();
$('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
}
else if (ourClass=='ware_t'){

$('#ourHolder_2').children('div.ware_t').show();
$('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
}
else if (ourClass=='ware_r'){

$('#ourHolder_2').children('div.ware_r').show();
$('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_t, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
}
else if (ourClass=='ware_i'){

$('#ourHolder_2').children('div.ware_i').show();
$('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_m, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
}
else if (ourClass=='ware_m'){

    $('#ourHolder_2').children('div.ware_m').show();
    $('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_g, div.ware_o, div.ware_v, div.ware_a').hide();
    }
    else if (ourClass=='ware_g'){

        $('#ourHolder_2').children('div.ware_g').show();
        $('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_o, div.ware_v, div.ware_a').hide();
        }
        else if (ourClass=='ware_o'){

            $('#ourHolder_2').children('div.ware_o').show();
            $('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_v, div.ware_a').hide();
            }
            else if (ourClass=='ware_v'){

                $('#ourHolder_2').children('div.ware_v').show();
                $('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_a').hide();
                }
                else if (ourClass=='ware_a'){

                    $('#ourHolder_2').children('div.ware_a').show();
                    $('#ourHolder_2').children('div.ware_f , div.ware_s, div.ware_d, div.ware_c, div.ware_t, div.ware_r, div.ware_i, div.ware_m, div.ware_g, div.ware_o, div.ware_v').hide();
                    }
return false;
      });
});
