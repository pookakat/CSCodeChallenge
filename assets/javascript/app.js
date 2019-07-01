var amount = 0;
var calculating = false;
var tipTotal = 0;
var instruction = ' ';
var ok = false;


$('document').ready(function(){
    $('#bill').prop("disabled", true);
});

$('body').keydown(function(e) {
    var key = e.which;
    if (key == 13) {
        if(!calculating){
            $('#bill').submit();
            var bill=$('#bill').val();
            bill = Math.round(bill * 100)/100; 
            bill = bill.toFixed(2);
            billTotal(bill);
        }
    }
    else{
        checkKey(key);
    }
});


$('.service').on('click', function(event){
    $('#welcome').html(' ');
    event.preventDefault;
    var type = $(this).attr('id');
    $('#service-indicator').fadeOut();
    $('.service').animate({'margin-left': '100'}, 'slow'); 
    $('#welcome').html(' ');
    if (type === 'ok'){
        tipTotal = okTip(amount);
    }
    else if(type === 'good'){
        tipTotal = goodTip(amount);
    }
    else{
        tipTotal = greatTip(amount);
    }
    lastBox(type, tipTotal);   
});


$('.number').on('click', function(event){
    var button = $(this).attr('id');
    if (button != "enter" && button != "clear"){
        $('#bill').val($('#bill').val() + button);
    }
    else if(button === 'clear'){
        $('#bill').val('');
    }
    else{
        var bill = parseFloat($('#bill').val());
        billTotal(bill);
    }
});

$('#end').on('click', function(event){
    $('#the-end').fadeOut();
    $('#welcome').html(' ');
    endOfApp();
});

$('#back').on('click', function(event){
    $('#back-to-the-beginning').hide();
    $('#welcome').html(' ');
    calculating = false;
    instruction = "What is the total of the next bill I can work on?" 
    var newInstruction = Array.from(instruction); 
    var ok = typeInstruction(newInstruction);
    if (ok = true){
        $('#calculator').show();
        ok = false;
    };
});


function checkKey(unicode){
    var button;
    if (unicode >= 48 && unicode <= 57) {
        button = String.fromCharCode(unicode);
    }
    else if(unicode >=  96 && unicode <= 105){
        unicode -= 48;
        button = String.fromCharCode(unicode);
    }
    else if (unicode === 110){
        button = '.';
    }
    if (button){
    $('#bill').val($('#bill').val() + button);
    };
};


function billTotal(bill){
    if (bill === '0.00' || !bill){
        calculating = false;
        instruction = "Your bill doesn't seem to be right. You put in $0. If that's the case, I can't help you with this bill. Try another?"
        var newInstruction = Array.from(instruction); 
        var ok = typeInstruction(newInstruction);
        if (ok = true){
            $('#calculator').show();
            ok = false;
        };    
    }
    else{
        bill = Math.round(bill * 100)/100; 
        bill = bill.toFixed(2);
        $('#bill').val('');
        amount = parseFloat(bill);
        changeScreen();
        return amount;
    }
};

function okTip(amount){
    console.log(amount, typeof amount);
    var tipTotal=amount * 0.15;
    var tipTotal = Math.round(tipTotal * 100)/100;
    var tipTotal = tipTotal.toFixed(2);
    return tipTotal;
};

function goodTip(amount){
    var tipTotal = amount * 0.2;
    var tipTotal = Math.round(tipTotal * 100)/100;
    var tipTotal = tipTotal.toFixed(2);
    return tipTotal;
};

function greatTip(amount){
    var tipTotal = amount * 0.25;
    var tipTotal = Math.round(tipTotal * 100)/100;
    var tipTotal = tipTotal.toFixed(2);
    return tipTotal;
};


function changeScreen(){
    calculating = true;
    $('#calculator').hide();
    changeWelcome();
};

function changeWelcome(){
    var instruction = `Your bill was $${amount}. I hope it was a nice meal. How was the service?`;
    var newInstruction = Array.from(instruction); 
    var ok = typeInstruction(newInstruction);
    if (ok = true){
        ok = false;
        service();
    };
};

function service(){
    $('#service-indicator').fadeIn();
    $('#service-indicator').css({'display': 'flex'});
    $('.service').animate({'margin-left': '0'}, 'slow');
};

function lastBox(type, tipTotal){
    if (type === 'fair'){
        instruction = `I see... Well, customary minimum tip is 15%, though your waitress usually gets taxed as if you will tip at least 12%, whether you do or not. You should leave $${tipTotal}, though I understand if you decide not to.`;
    }
    else if (type === 'good'){
        instruction = `Good! I'm glad you had a pleasant time! A good tip is considered to be about 20% You should leave $${tipTotal}`;
    }
    else{
        instruction = `Great! You'll have to let me know where that is! A great tip, by the way, is around 25%. You should definitely tip$ ${tipTotal}, but more is always appreciated!`;
    }
    var newInstruction = Array.from(instruction);
    var ok = typeInstruction(newInstruction);
    if (ok = true){
        theEnd();
        ok = false;
    };
};

function theEnd(){
    $('#the-end').fadeIn();
        $('#end').show();
};

function endOfApp(){
    $('#service-indicator').hide();
    amount = 0;
    $('#bill').val('');
    instruction = "Thank you for using my tipping app. I hope you have a lovely day!";
    var newInstruction = Array.from(instruction); 
    var ok = typeInstruction(newInstruction);
    if (ok = true){
        backToTheBeginning();
        ok = false;
    };
};

function backToTheBeginning(){
    $('#back-to-the-beginning').fadeIn();
        $('#back').show();
};

function typeInstruction(instruction){
    $('#welcome').html(' ');
    for (var i = 0; i<instruction.length; i++){
        $("#welcome").append(instruction[i]);
    };
    return true;
};

