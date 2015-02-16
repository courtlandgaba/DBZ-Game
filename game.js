$(document).ready(function () {
  fight.init();
//////////////////////////add two more constructors/////////////////
});
function goku(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 1";
    this.life = 100;
    this.score = 0;
    this.attack = function (frieza) {
        var hits = Math.floor(Math.random()*20);
        frieza.damage(hits);
    };
    this.damage = function (hits) {
        if(this.life >= 0) {
            this.life = this.life - hits;
        } else {
        };
    }
}
function frieza(spec) {
    var spec = spec || {};
    this.name = spec.name || "Player 2";
    this.life = 100;
    this.score = 0;
    this.attack = function (goku) {
        var hits = Math.floor(Math.random()*20);
        goku.damage(hits);
    }
    this.damage = function (hits) {
        if(this.life >= 0) {
            this.life = this.life - hits;
        } else {
        };
    }
}

// function map(image) {
//     this.profile = image;
// }
//
// map1 = new map;
// map2 = new map;
// map3 = new map;


var fight = {
    init: function () {
        fight.initEvents();
    },
    initStyling: function (){
    },
    initEvents: function () {
///change map/////
        // $("#map1").on('click', function(event){
        //     event.preventDefault();
        //     $(".wrapper").addClass('#map1');
        //     console.log("map1");
        //
        // });



/////Change player 1 name//////
        $("#goku").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play1').val();
            $("#ply1").text(value);
            var traits = {
                name: $('#goku input[name="name"]').val(),
            };
            fight.goku = new goku(traits);
            if (value === ('cheese')) {
                $("#bob").removeClass('hide');
            } else {
            };
        });
/////Change player 2 name///////
        $("#frieza").on('submit', function(event) {
            event.preventDefault();
            var value = $('#play2').val();
            $("#ply2").text(value);
            var traits = {
                name: $('#frieza input[name="name"]').val(),
            };
            fight.frieza = new frieza(traits);
            $('.startFight').removeClass('hide');
            if (value === ('cheese')) {
                $("#bob").removeClass('hide');
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
            fight.goku.life = 100;
            fight.frieza.life = 100;
            document.getElementById("pl1").value = fight.goku.life;
            document.getElementById("pl2").value = fight.frieza.life;
        });
//////attack buttons/////
        $("#goku").on("click", "#cat", function (e) {
            e.preventDefault();
            fight.goku.attack(fight.frieza);
            document.getElementById("pl2").value = fight.frieza.life;
            // $("#cat").addClass('hide');
            // $("#dog").removeClass('hide');
            if (0 >= fight.frieza.life) {
                $("#frieza").removeClass("frieza idle");
                $("#frieza").addClass("deadfrieza");
                $("#cat").addClass("hide");
                $("#dog").addClass("hide");
                $(".startFight").removeClass('hide');
                fight.goku.score++;
                document.getElementById("www").innerText = fight.goku.score;
            } else {
            }
        });
        $("#frieza").on("click", "#dog", function (e) {
            e.preventDefault();
            fight.frieza.attack(fight.goku);
            document.getElementById("pl1").value = fight.goku.life;
            // $("#dog").addClass('hide');
            // $("#cat").removeClass('hide');
            if (0 >= fight.goku.life) {
                $("#goku").removeClass("goku idle");
                $("#goku").addClass("deadgoku");
                $("#dog").addClass("hide");
                $("#cat").addClass("hide");
                $(".startFight").removeClass('hide');
                fight.frieza.score++;
                document.getElementById("mmm").innerText = fight.frieza.score;
            } else {
            }
        });
    },
    renderBoard: function () {
        $("#goku").prepend("<button id='cat'>Attack</button>");
        $("#frieza").prepend("<button id='dog'>Attack</button>");
    }
};
