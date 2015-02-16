$(document).ready(function () {
  fight.init();
//////////////////////////add two more constructors/////////////////
});
function Player1(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 1";
    this.life = 100;
    this.score = 0;
    this.attack = function (player2) {
        var hits = Math.floor(Math.random()*20);
        player2.damage(hits);
    };
    this.damage = function (hits) {
        if(this.life >= 0) {
            this.life = this.life - hits;
        } else {
        };
    }
}
function Player2(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 2";
    this.life = 100;
    this.score = 0;
    this.attack = function (player1) {
        var hits = Math.floor(Math.random()*20);
        player1.damage(hits);
    }
    this.damage = function (hits) {
        if(this.life >= 0) {
            this.life = this.life - hits;
        } else {
        };
    }
}

// function map(image) {
//     this.profile = image.profile || url"background.png";
// }



var fight = {
    init: function () {
        fight.initEvents();
    },
    initStyling: function (){
    },
    initEvents: function () {
//////change map/////////
        $('#map1').on('click', function(event){
            event.preventDefault();
            document.getElementById("wrapper").style.backgroundImage = "url('two.png')";
            console.log("asdf");
        });
        $('#map2').on('click', function(event){
            event.preventDefault();
            document.getElementById("wrapper").style.backgroundImage = "url('one.png')";
            console.log("asdf");
        });
        $('#map3').on('click', function(event){
            event.preventDefault();
            document.getElementById("wrapper").style.backgroundImage = "url('three.png')";
            console.log("asdf");
        });





/////Change player 1 name//////
        $("#player1").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play1').val();
            $("#ply1").text(value);
            var traits = {
                name: $('#player1 input[name="name"]').val(),
            };
            fight.player1 = new Player1(traits);
            if (value === ('cheese')) {
                $("#bob").removeClass('hide');
                document.getElementById("wrapper").style.backgroundImage = "url('pine.png')";

            } else {
            };
        });
/////Change player 2 name///////
        $("#player2").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play2').val();
            $("#ply2").text(value);
            var traits = {
                name: $('#player2 input[name="name"]').val(),
            };
            fight.player2 = new Player2(traits);
            $('.startFight').removeClass('hide');
            if (value === ('cheese')) {
                $("#bob").removeClass('hide');
                document.getElementById("wrapper").style.backgroundImage = "url('pine.png')";
            } else {
            }
        });
///////start game button/////
        $(".startFight").on('click', function (event) {
            event.preventDefault();
            fight.renderBoard();
            $('.startFight').addClass('hide');
            $("#frieza").addClass("frieza idle");
            $("#frieza").removeClass("deadfrieza");
            $("#goku").addClass("goku idle");
            $("#goku").removeClass("deadgoku");
            fight.player1.life = 100;
            fight.player2.life = 100;
            document.getElementById("pl1").value = fight.player1.life;
            document.getElementById("pl2").value = fight.player2.life;
        });
//////attack buttons/////
        $("#goku").on("click", "#cat", function (e) {
            e.preventDefault();
            fight.player1.attack(fight.player2);
            document.getElementById("pl2").value = fight.player2.life;
            // $("#cat").addClass('hide');
            // $("#dog").removeClass('hide');
            if (0 >= fight.player2.life) {
                $("#frieza").removeClass("frieza idle");
                $("#frieza").addClass("deadfrieza");
                $("#cat").addClass("hide");
                $("#dog").addClass("hide");
                $(".startFight").removeClass('hide');
                fight.player1.score++;
                document.getElementById("www").innerText = fight.player1.score;
            } else {
            }
        });
        $("#frieza").on("click", "#dog", function (e) {
            e.preventDefault();
            fight.player2.attack(fight.player1);
            document.getElementById("pl1").value = fight.player1.life;
            // $("#dog").addClass('hide');
            // $("#cat").removeClass('hide');
            if (0 >= fight.player1.life) {
                $("#goku").removeClass("goku idle");
                $("#goku").addClass("deadgoku");
                $("#dog").addClass("hide");
                $("#cat").addClass("hide");
                $(".startFight").removeClass('hide');
                fight.player2.score++;
                document.getElementById("mmm").innerText = fight.player2.score;
            } else {
            }
        });
    },
    renderBoard: function () {
        $("#goku").prepend("<button id='cat'>Attack</button>");
        $("#frieza").prepend("<button id='dog'>Attack</button>");
    }
};
