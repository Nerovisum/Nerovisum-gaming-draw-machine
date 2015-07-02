$(document).ready(function(){
    var machine1 = $("#machine1").slotMachine({
        active  : 0,
        delay   : 500
    });
    
    var machine2 = $("#machine2").slotMachine({
        active  : 1,
        delay   : 500
    });
    
    var machine3 = $("#machine3").slotMachine({
        active  : 2,
        delay   : 500
    });
    
    function onComplete(active){
    }

    $("#slotMachineButtonShuffle").click(function(){
        machine1.shuffle(5, onComplete);
        
        setTimeout(function(){
            machine2.shuffle(5, onComplete);
        }, 500);
        
        setTimeout(function(){
            machine3.shuffle(5, onComplete);
        }, 1000);
    });
    
});