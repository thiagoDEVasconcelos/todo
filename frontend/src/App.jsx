import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './App.css'

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [edicaoIndex, setEdicaoIndex] = useState(null);

  const handleChange = (e) => {
    setTarefa(e.target.value);    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (tarefa.trim() === "") return;
    
    if (edicaoIndex !== null) {
      const novasTarefas = [...listaDeTarefas];
      novasTarefas[edicaoIndex] = tarefa.trim();
      setListaDeTarefas(novasTarefas);
      setTarefa("");
      setEdicaoIndex(null); 
    } else {
    const novaTarefa = tarefa.trim();
    setListaDeTarefas([...listaDeTarefas, novaTarefa]);
    setTarefa("");
    }
    
  }
  const handleEdit = (e, index)=> {
    setTarefa(listaDeTarefas[index])
    setEdicaoIndex(index);
  }
  const handleDelete = (e, index) => {
    e.preventDefault();
    const novasTarefas = [...listaDeTarefas];
    novasTarefas.splice(index, 1);
    setListaDeTarefas([...novasTarefas])
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
              <EditIcon sx={{cursor: "pointer"}} onClick={(e) => handleEdit(e, index)}/>
              <DeleteIcon sx={{cursor: "pointer"}} onClick={e => handleDelete(e, index)}/>
              </div>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
