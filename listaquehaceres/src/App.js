import React from "react";
import { useState } from "react";

function App() {
  const [quehacerList, setQuehacerList] = useState("");
  const [list, setList] = useState([]);
 

  const agregarNuevoQuehacer = (e) => {
    e.preventDefault();
    let nuevoQuehacer = {
      quehacerList: quehacerList,
      status: false,
    };
    
    setList((listPrev) => [...listPrev, nuevoQuehacer]);
    setQuehacerList("");
  };

  const cambiarStatus = (nombreTarea) => { 
    let copyList = [...list]
    for(let i=0; i < copyList.length; i++){
      if(copyList[i].quehacerList === nombreTarea){
        if(copyList[i].status === false){
          copyList[i].status = true;
        }
        else {
          copyList[i].status = false;
        }
      }
    }
    setList((listPrev) => copyList);
  }
  
  const deleteTask = (deleteItem) => {
    //lert(deleteItem);
    let newList = list;
    newList.splice(deleteItem,1);
    setList([...newList]);
  }
  
  return (
    <div>
      <h1>Establecer Tarea</h1>

      <form onSubmit={agregarNuevoQuehacer}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Escribe tu tarea aqui"
          onChange={(e) => setQuehacerList(e.target.value)}
          value={quehacerList}
        ></textarea>
        <input type="submit" value="Añadir tarea" />
      </form>

      <h1>Lista de Tareas</h1>
      {list.map((registro, indice) => {

        return (
        
          <ul>
            
            <li>  {registro.status ?
            <del>{registro.quehacerList}</del>
           : <div>{registro.quehacerList}</div>
           }
                   
           <input type="checkbox" onClick={() => cambiarStatus(registro.quehacerList)} />
           <button onClick={() => deleteTask(registro.quehacerList)}>Eliminar</button>
    
            </li>
            
        </ul>
        );
        
      })}
        
    </div>
  );
}

export default App;
