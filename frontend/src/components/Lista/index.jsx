/* eslint-disable react/prop-types */
import "../../App.css";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Lista = ({ listaDeTarefas, handleEdit, handleDelete }) => {
    return (
        <div className='list'>
            <ul>
                {listaDeTarefas.map((tarefa, index) => (
                    <div key={index} className='list-item'>
                        <span>
                            <li>{tarefa}</li>
                        </span>
                        <span>
                            <EditIcon sx={{ cursor: 'pointer' }} onClick={() => handleEdit(index)} />
                            <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(index)} />
                        </span>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Lista;   