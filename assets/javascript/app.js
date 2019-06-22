$('#bill').keydown(function(e) {
    var key = e.which;
    if (key == 13) {
        $('#bill').submit();
        var bill=$('#bill').val();
        bill = Math.round(bill * 100)/100; 
        bill = bill.toFixed(2);
        alert("Submitted! The total is " + bill);
        calcTip(parseFloat(bill));
        }
    });

    function calcTip(amount){
        okTip(amount);
        goodTip(amount);
        greatTip(amount);
    };

    function okTip(amount){
        var tipTotal=amount * 0.15;
        var tipTotal = Math.round(tipTotal * 100)/100;
        var tipTotal = tipTotal.toFixed(2);
        alert("Customery minimum tip is 15%. Please leave " + tipTotal + " to satisfy that amount.");
    };

    function goodTip(amount){
        var tipTotal = amount * 0.2;
        var tipTotal = Math.round(tipTotal * 100)/100;
        var tipTotal = tipTotal.toFixed(2);
        alert("A good tip is usually 20%. Please leave " + tipTotal + " to satisfy that amount.");
    };

    function greatTip(amount){
        var tipTotal = amount * 0.25;
        var tipTotal = Math.round(tipTotal * 100)/100;
        var tipTotal = tipTotal.toFixed(2);
        alert("A great tip is usually 25% or more. Please leave at least " + tipTotal + " to satisfy that amount.");
    };