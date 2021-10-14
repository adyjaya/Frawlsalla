var overlay = 1;
setInterval(function()
{
    document.getElementById('xyz' + overlay).checked = true;
        overlay++;
        
    if( overlay > 4 ){
        overlay = 1;
    }
}, 3000);