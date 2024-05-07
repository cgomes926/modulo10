import React from 'react';
import { useNavigate } from 'react-router-dom';


function TelaInicial() {
  const navigate = useNavigate();
 
  const handleListarTarefasClick = () => {
    // Redireciona para a página de listarTarefa
    navigate('/listarTarefa');
  };

  return (
    <div>
      <h1>Bem vindo ao Gerenciamento de Tarefas</h1>
    <button onClick={handleListarTarefasClick}>
      Lista de Tarefas
    </button>
    </div>
  );
}

export default TelaInicial;
