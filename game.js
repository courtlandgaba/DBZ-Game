$(document).ready(function () {
  fight.init();
});


function Player1(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 1";
    this.life = 100;
    this.attack = function (player2) {
        var hits = Math.floor(Math.random()*10);
        console.log("hit");
        player2.damage(hits);
    }
}

function Player2(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 2";
    this.life = 100;
    this.attack = function (player1) {
        var hits = Math.floor(Math.random()*10);
        console.log("hit");
        player1.damage(hits);
    }
}

var fight = {
    init: function () {
        fight.initEvents();
        fight.initStyling();
    },
    initStyling: function (){

    },
    initEvents: function () {
/////Change player 1 name//////
        $("#player1").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play1').val();
            $("#ply1").text(value);
        });
/////Change player 2 name///////
        $("#player2").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play2').val();
            $("#ply2").text(value);
        });



    },
    renderBoard: function () {

    }
};
