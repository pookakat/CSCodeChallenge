$('#bill').keydown(function(e) {
    var key = e.which;
    if (key == 13) {
        $('#bill').submit();
        var bill=$('#bill').val(); 
        alert("Submitted! The total is " + bill);
        calcTip(bill);
        }
    });

    function calcTip(amount){
        okTip(amount);
        goodTip(amount);
        //greatTip(amount);
    };

    function okTip(amount){
        var tipTotal=amount * 0.15;
        alert("Customery minimum tip is 15%. Please leave " + tipTotal + " to satisfy that amount.");
    };

    function goodTip(amount){
        var tipTotal = amount * 0.2;
        alert("A good tip is usually 20%. Please leave " + tipTotal + " to satisfy that amount.");
    };