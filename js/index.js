      //Nota: Las funciones contienen variables únicas, que-
      //solo viven dentro de ellas.

      function aleatory(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min)
      }

      function eleccion(jugada){
        let resultado
        if(jugada == 1){
          resultado = "Piedra"
        } else if(jugada == 2){
          resultado = "Papel"
        } else if(jugada == 3){
          resultado = "Tijera"
        } else {
          resultado = "Erróneamente"
        }
        return resultado
      }


      let pc
      let jugador
      let triunfos = 0
      let derrotas = 0


      while (triunfos < 3 && derrotas < 3){
        pc = aleatory(1,3)
        jugador = prompt("Elije: 1 para piedra, 2 para papel o 3 para tijera")

        alert("jugador elige " + eleccion(jugador))
        alert("Pc elige " + eleccion(pc))
        
        if(pc == jugador){
          alert("Empate")
        } else if(jugador == 1 && pc == 3){
          alert("Ganaste")
          triunfos = triunfos + 1
        } else if(jugador == 2 && pc == 1){
          alert("Ganaste")
          triunfos = triunfos + 1
        } else if(jugador == 3 && pc == 2){
          alert("Ganaste")
          triunfos = triunfos + 1
        } else {
          alert("Perdiste")
          derrotas = derrotas + 1
        }
      }       
      alert("Ganaste " + triunfos + " veces, " + "perdiste " + derrotas + " veces." )
