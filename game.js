$(document).ready(function () {
  fight.init();
});


function Player1(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 1";
    this.life = 100;
    this.attack = function (player2) {
        var hits = Math.floor(Math.random()*20);
        console.log("hit");
        player2.damage(hits);
    };
    this.damage = function (hits) {
        if(this.life >= 0) {
            this.life = this.life - hits;
            console.log(this.name + " was hit!!");
        } else {
            console.log(this.name + " HAS DIED, YOU WIN!!!!!");
        };
    }
}

function Player2(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 2";
    this.life = 100;
    this.attack = function (player1) {
        var hits = Math.floor(Math.random()*20);
        console.log("hit");
        player1.damage(hits);
    }
    this.damage = function (hits) {
        if(this.life >= 0) {
            this.life = this.life - hits;
            console.log(this.name + " was hit!!");
        } else {
            console.log(this.name + " HAS DIED, YOU WIN!!!!!");
        };
    }
}


function score1 () {
    this.score = 5;
}

function score2 () {
    this.score = 5;
}








var fight = {
    init: function () {
        fight.initEvents();
    },
    initStyling: function (){

    },
    initEvents: function () {
/////Change player 1 name//////
        $("#player1").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play1').val();
            $("#ply1").text(value);
            console.log("hello");
            var traits = {
                name: $('#player1 input[name="name"]').val(),
            };
            fight.player1 = new Player1(traits);

        });
/////Change player 2 name///////
        $("#player2").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play2').val();
            $("#ply2").text(value);
            console.log("hello");
            var traits = {
                name: $('#player2 input[name="name"]').val(),
            };
            fight.player2 = new Player2(traits);
            $('.startFight').removeClass('hide');

        });

///////start game button/////
        $(".startFight").on('click', function (event) {
            event.preventDefault();
            fight.renderBoard();
            $('.startFight').addClass('hide');
        });

//////attack buttons/////
        $("#goku").on("click", "#cat", function (e) {
            e.preventDefault();
            fight.player1.attack(fight.player2);
            document.getElementById("pl2").value = fight.player2.life;

            if (0 >= fight.player2.life) {
            document.getElementById("www").text = fight.score1.score;

            } else {

            };
        });


        $("#frieza").on("click", "#dog", function (e) {
            e.preventDefault();
            fight.player2.attack(fight.player1);
            document.getElementById("pl1").value = fight.player1.life;
        });



    },
    renderBoard: function () {
        $("#goku").append("<button id='cat'>Attack</button>");
        $("#frieza").prepend("<button id='dog'>Attack</button>");

    }
};
