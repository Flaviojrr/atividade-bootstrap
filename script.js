const modalCurso = document.getElementById('modalCurso');

modalCurso.addEventListener('show.bs.modal', (evento) => {
  const botao = evento.relatedTarget;
  document.getElementById('modalCursoTitulo').textContent = botao.dataset.curso;
  document.getElementById('modalCursoHoras').textContent = botao.dataset.horas + 'h';
  document.getElementById('modalCursoNivel').textContent = botao.dataset.nivel;
});

document.getElementById('botaoInscrever').addEventListener('click', () => {
  bootstrap.Modal.getInstance(modalCurso).hide();
});

const form = document.getElementById('formContato');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  document.getElementById('nomeConfirmacao').textContent = form.nome.value;
  new bootstrap.Modal(document.getElementById('modalConfirmacao')).show();

  form.reset();
  form.classList.remove('was-validated');
});

document.querySelectorAll('#menuPrincipal .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menuPrincipal');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
