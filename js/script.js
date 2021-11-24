window.onload = function(){
    var l = 0
    var valores= []
    var blocoPontuation = document.getElementById("pontuacao");
    var number = 0;
    var tela = document.getElementById("tela");
    var areaDesenho = tela.getContext("2d");
    document.addEventListener("keydown", keyPush);
    var tempo = 140;
    var item1 = document.createElement("h2");
    item1.innerHTML = `Pontuação: `;
    blocoPontuation.appendChild(item1);
    var item2 = document.createElement("p");
    item2.innerHTML += `${number}`;
    blocoPontuation.appendChild(item2);
    var item3 = document.createElement("h2");
    item3.innerHTML = `Maior Pontuação:`
    historico.appendChild(item3)
    var item4 = document.createElement("p");
    item4.innerHTML += `${valores}`
    historico.appendChild(item4)

    setInterval(game, tempo);
    setTimeout(function (){

      blocoPontuation.style.display = "block"
    }, 1000);

 


    const passo = 1;
     var vx = vy = 0;
     var px = 10;
     var py = 15;
     var tp = 25;
     var qp = 25;
     var ax = ay = 15;

     var trail = [];
     tail = 5;

     function game(){
         px += vx;
         py += vy;
       
        
         if(px < 0){
            
             vy = 0
             vx = 0
             px = 10
             py = 15
    
             //  px = qp - 1;
            
         }
         if(px > qp - 1){
           
             vy = 0
             vx = 0
             px = 10
             py = 15
        
            //  px = 0;
         }
         if(py < 0){
            
            vy = 0
            vx = 0
            px = 10
            py = 15
            
            //  py = qp - 1;
         }
         if(py > qp -1){
            
            vy = 0
            vx = 0
            px = 10
            py = 15
           
            // py = 0;
         }

         areaDesenho.fillStyle = "black";
         areaDesenho.fillRect(0,0, tela.width, tela.height);

         areaDesenho.fillStyle = "red";
         areaDesenho.fillRect(ax*tp, ay*tp, tp, tp);

         areaDesenho.fillStyle = "springgreen";
         for(var i = 0; i < trail.length; i++){
             areaDesenho.fillRect(trail[i].x*tp,trail[i].y*tp, tp - 1, tp - 1);
             if(trail[i].x == px && trail[i].y == py){
                vx = vy = 0;
                tail = 5;
                tempo = 140;
                number = 0;
                item2.textContent = `0`
               
            
             }
             
         }

         trail.push({x: px, y: py});
         while(trail.length > tail){
             trail.shift();
         }
        

         if(ax == px && ay == py){
           
            l++
            valores.push(l)
             tail++;
             tempo--;
             number++;
             ax = Math.floor(Math.random()*qp);
             ay = Math.floor(Math.random()*qp);
             
            item2.textContent = `${number}`
           
         }
         
     }

     function keyPush(event){
        switch(event.keyCode){
            case 37: 
                vx = -passo;
                vy = 0;
                break;
            case 38:
                vx = 0;
                vy = -passo;
                break;
            case 39:
                vx = passo;
                vy = 0;
                break;
            case 40:
                vx = 0;
                vy = passo;
                break;
            default:

                break;
        } 
       
        }

}