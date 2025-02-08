import { useState } from 'react';

import Form from './components/Form';
import Lista from './components/Lista';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [edicaoIndex, setEdicaoIndex] = useState(null);

  const handleChange = (e) => {
    setTarefa(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa.trim() === '') return;

    if (edicaoIndex !== null) {
      const novasTarefas = [...listaDeTarefas];
      novasTarefas[edicaoIndex] = tarefa.trim();
      setListaDeTarefas(novasTarefas);
      setEdicaoIndex(null);
    } else {
      setListaDeTarefas([...listaDeTarefas, tarefa.trim()]);
    }
    setTarefa('');
  };

  const handleEdit = (index) => {
    setTarefa(listaDeTarefas[index]);
    setEdicaoIndex(index);
  };

  const handleDelete = (index) => {
    const novasTarefas = listaDeTarefas.filter((_, i) => i !== index);
    setListaDeTarefas(novasTarefas);
  };

  return (
    <>
      <h1>A LISTA 📋</h1>
      <Form tarefa={tarefa} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Lista listaDeTarefas={listaDeTarefas} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
}

export default App
