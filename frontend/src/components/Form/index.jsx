/* eslint-disable react/prop-types */
import "../../App.css";

const Form = ({ tarefa, handleChange, handleSubmit }) => {
  return (
    <form className='form'>
      <label htmlFor='list-item'>O que está planejando para hoje? <br /></label>
      <div className='item-list-form'>
        <input 
          type='text' 
          placeholder='JOGAR O LIXO FORA...' 
          value={tarefa} 
          className='input-text' 
          name='list-item' 
          onChange={handleChange} 
        />
        <button type='button' onClick={handleSubmit}>Adicionar</button>
      </div>
    </form>
  );
}

export default Form;