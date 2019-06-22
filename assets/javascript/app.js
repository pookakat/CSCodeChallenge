$('#bill').keydown(function(e) {
    var key = e.which;
    if (key == 13) {
    $('#bill').submit();
    var bill=$('#bill').val(); 
    alert("Submitted! The total is " + bill);
    }
    calcTip(bill);
    });