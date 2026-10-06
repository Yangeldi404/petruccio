// Controle de troca de abas do cardápio
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Desativa abas e painéis ativos
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));

    // Ativa a aba clicada e o painel correspondente
    tab.classList.add('active');
    const targetPanel = document.getElementById(tab.dataset.panel);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});
