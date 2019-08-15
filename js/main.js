var game=[],gameOver=false,cpu=true;
$(".ngame").click(function(){
  $(".case").find("div").attr("class","");
game=[];
gameOver=false
$(".screen").text("")});
$(".rgame").click(function(){
  $(".screen").text("");     $(".case").find("div").attr("class","");
game=[];
gameOver=false;
  $("#p1score").text("0");
  $("#p2score").text("0");
  $("#p1turn")[0].checked=true;
                  });
$(".bot").click(function(){
  if(cpu==true){
    cpu=false;
    $(this).text("Computer");
    $(".p2").text("Player 2");
  }else{
    cpu=true;
    $(this).text("2 players");
     $(".p2").text("Computer");
    bot();
  }
  $(".ngame")[0].click();
});
$(document).on("click",".case",function(){
  if($("#p2turn")[0].checked==true && gameOver==false && game[$(".case").index($(this))]==undefined){
    game[$(".case").index($(this))]="o";
  $(this).find("div").addClass("circle");
    $("#p1turn")[0].checked=true;
  }else if(game[$(".case").index($(this))]==undefined && gameOver==false){
   game[$(".case").index($(this))]="x"; $(this).find("div").addClass("cross");
    $("#p2turn")[0].checked=true;
}
if(cpu==true && $("#p2turn")[0].checked==true){
  bot();
}
rules();
  
}
);
function rules(){
  if(gameOver==false){
    for(var i=0;i<=6;i+=3){
  if((game[i]=="o"&&game[i+1]=="o"&&game[i+2]=="o")){
      gameOver=true;
      return winner($(".p2").text());
      }else if((game[i]=="x"&&game[i+1]=="x"&&game[i+2]=="x")){
        gameOver=true;
      return winner("Player 1");
      }
  }
  for(var i=0;i<=2;i++){
  if((game[i]=="o"&&game[i+3]=="o"&&game[i+6]=="o")){
        gameOver=true;
        return winner($(".p2").text());
    } else if((game[i]=="x"&&game[i+3]=="x"&&game[i+6]=="x")){
             gameOver=true;
        return winner("Player 1");
              }
  }
  if((game[0]=="o"&&game[4]=="o"&&game[8]=="o")||(game[2]=="o"&&game[4]=="o"&&game[6]=="o")){
     gameOver=true;
     return winner($(".p2").text());
     }else if((game[0]=="x"&&game[4]=="x"&&game[8]=="x")||(game[2]=="x"&&game[4]=="x"&&game[6]=="x")){
       gameOver=true;
     return winner("Player 1");
     }
    }

  
  if(gameOver==false &&(game[0]!=undefined && game[1]!=undefined && game[2]!=undefined && game[3]!=undefined && game[4]!=undefined && game[5]!=undefined && game[6]!=undefined && game[7]!=undefined && game[8]!=undefined )){
    gameOver=true;
   $(".screen").text("it's a draw!");
  }
}
function winner(player){
    $(".screen").text(player+" Wins!!");
    if(player=="Player 1"){
      $("#p1score").text(Number($("#p1score").text())+1);
    }else{
       $("#p2score").text(Number($("#p2score").text())+1);
    }
}

function bot(){
   if($("#p2turn")[0].checked==true){
    setTimeout(function(){
    if((game[0]==undefined) &&(( game[1]=="o" && game[2]=="o")||(game[3]=="o"&&game[6]=="o")||(game[4]=="o"&&game[8]=="o"))){
         $(".case")[0].click();
        }else if((game[1]==undefined) &&(( game[0]=="o" && game[2]=="o")||(game[4]=="o"&&game[7]=="o"))){
          $(".case")[1].click();
        }else if((game[2]==undefined) &&(( game[0]=="o" && game[1]=="o")||(game[5]=="o"&&game[8]=="o")||(game[4]=="o"&&game[6]=="o"))){
          $(".case")[2].click();
        }else if((game[3]==undefined) &&(( game[4]=="o" && game[5]=="o")||(game[0]=="o"&&game[6]=="o"))){
                 $(".case")[3].click();
                 }else if((game[5]==undefined) &&(( game[4]=="o" && game[3]=="o")||(game[2]=="o"&&game[8]=="o"))){
                        $(".case")[5].click();  
                          }else if((game[7]==undefined) &&(( game[6]=="o" && game[8]=="o")||(game[1]=="o"&&game[4]=="o"))){
                $(".case")[7].click();   
                                   }else if((game[6]==undefined) &&(( game[0]=="o" && game[3]=="o")||(game[7]=="o"&&game[8]=="o")||(game[4]=="o"&&game[2]=="o"))){
       $(".case")[6].click();
   }else if((game[8]==undefined) &&(( game[2]=="o" && game[5]=="o")||(game[6]=="o"&&game[7]=="o")||(game[4]=="o"&&game[0]=="o"))){
       $(".case")[8].click();
   }else if((game[4]==undefined) &&(( game[0]=="o" && game[8]=="o")||(game[1]=="o"&&game[7]=="o")||(game[2]=="o"&&game[6]=="o")||(game[3]=="o"&&game[5]=="o"))){
            $(".case")[4].click();
            }
      else if((game[0]==undefined) &&(( game[1]=="x" && game[2]=="x")||(game[3]=="x"&&game[6]=="x")||(game[4]=="x"&&game[8]=="x"))){
         $(".case")[0].click();
        }else if((game[1]==undefined) &&(( game[0]=="x" && game[2]=="x")||(game[4]=="x"&&game[7]=="x"))){
          $(".case")[1].click();
        }else if((game[2]==undefined) &&(( game[0]=="x" && game[1]=="x")||(game[5]=="x"&&game[8]=="x")||(game[4]=="x"&&game[6]=="x"))){
          $(".case")[2].click();
        }else if((game[3]==undefined) &&(( game[4]=="x" && game[5]=="x")||(game[0]=="x"&&game[6]=="x"))){
                 $(".case")[3].click();
                 }else if((game[5]==undefined) &&(( game[4]=="x" && game[3]=="x")||(game[2]=="x"&&game[8]=="x"))){
                        $(".case")[5].click();  
                          }else if((game[7]==undefined) &&(( game[6]=="x" && game[8]=="x")||(game[1]=="x"&&game[4]=="x"))){
                $(".case")[7].click();   
                                   }else if((game[6]==undefined) &&(( game[0]=="x" && game[3]=="x")||(game[7]=="x"&&game[8]=="x")||(game[4]=="x"&&game[2]=="x"))){
       $(".case")[6].click();
   }else if((game[8]==undefined) &&(( game[2]=="x" && game[5]=="x")||(game[6]=="x"&&game[7]=="x")||(game[4]=="x"&&game[0]=="x"))){
       $(".case")[8].click();
   }else if((game[4]==undefined) &&(( game[0]=="x" && game[8]=="x")||(game[1]=="x"&&game[7]=="x")||(game[2]=="x"&&game[6]=="x")||(game[3]=="x"&&game[5]=="x"))){
            $(".case")[4].click();
            }else{
              $(".case")[Math.floor(Math.random()*9)].click();
            }
    },70);
}
}