
$(document).ready(function(){
    $('#ourHolder div.N_central , #ourHolder div.N_East, #ourHolder div.N_West, #ourHolder div.S_East, #ourHolder div.south, #ourHolder  div.S_west').hide();
      $('#filterOptions li a').click(function(){
              var ourClass = $(this).attr('class');
              $('#filterOptions li').removeClass('active');
              $(this).parent().addClass('active');

              if(ourClass=='allZone') {
// show all our items
$('#ourHolder').children('div.allZone').show();
$('#ourHolder').children('div.N_central , div.N_East, div.N_West, div.S_East,  div.south, div.S_west').hide();
} 
else if (ourClass=='N_central'){

$('#ourHolder').children('div.N_central').show();
$('#ourHolder').children('div.allZone , div.N_East,  div.N_West,  div.S_East,  div.south,  div.S_west').hide();
}

else if (ourClass=='N_East'){

$('#ourHolder').children('div.N_East').show();
$('#ourHolder').children('div.allZone , div.N_central,  div.N_West,  div.S_East,  div.south,  div.S_west').hide();
}
else if (ourClass=='N_West'){

$('#ourHolder').children('div.N_West').show();
$('#ourHolder').children('div.allZone , div.N_central,  div.N_East,  div.S_East,  div.south,  div.S_west').hide();
}
else if (ourClass=='S_East'){

$('#ourHolder').children('div.S_East').show();
$('#ourHolder').children('div.allZone , div.N_central,  div.N_East, div.N_West,  div.south,  div.S_west').hide();
}
else if (ourClass=='south'){

$('#ourHolder').children('div.south').show();
$('#ourHolder').children('div.allZone , div.N_central,  div.N_East,  div.S_East,  div.S_East,  div.S_west').hide();
}
else if (ourClass=='S_west'){

$('#ourHolder').children('div.S_west').show();
$('#ourHolder').children('div.allZone , div.N_central,  div.N_East,  div.S_East,  div.S_East,  div.south').hide();
}
return false;
      });
});
