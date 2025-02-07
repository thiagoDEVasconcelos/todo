import './App.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([
    "Levar meu cachorrinho para passear."
  ]);

  const handleChange = (e) => {
    setTarefa(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (tarefa.trim() === "") return;
    const novaTarefa = tarefa.trim();
    setListaDeTarefas([...listaDeTarefas, novaTarefa]);
    setTarefa("");
  }


  return (
    <>
      <h1>A LISTA 📋</h1>
      <div>
        <form action="#" className='form'>
          <label htmlFor='list-item'>
            O que está planejando para hoje? <br />
          </label>
          <div className='item-list-form'>
            <input type="text" placeholder='JOGAR O LIXO FORA...' value={tarefa} className="input-text" name='list-item' onChange={handleChange} />
            <button type="button" onClick={handleSubmit}>Adicionar</button>
          </div>
        </form>
        <div className='list'>
          <ul>
            {listaDeTarefas.map((tarefa, index) => {
              return <div key={index} className='list-item'>
              <li key={index}>{tarefa}</li>
              <EditIcon sx={{cursor: "pointer"}}/>
              <DeleteIcon sx={{cursor: "pointer"}}/>
              </div>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
