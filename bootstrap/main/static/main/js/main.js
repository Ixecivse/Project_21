<script>
document.addEventListener('DOMContentLoaded', function() {
  // Находим элементы
  const userPanel = document.querySelector('.user-panel');
  const dropdownTrigger = userPanel?.querySelector('.dropdown-trigger');
  const dropdownMenu = userPanel?.querySelector('.dropdown-menu');

  // Проверяем, что элементы существуют
  if (!userPanel || !dropdownTrigger || !dropdownMenu) return;

  // Обработчик клика на триггер
  dropdownTrigger.addEventListener('click', function(e) {
    e.stopPropagation();
    userPanel.classList.toggle('active');
  });

  // Обработчик клика по документу
  document.addEventListener('click', function(e) {
    // Закрываем меню только если клик был вне панели пользователя
    if (!userPanel.contains(e.target)) {
      userPanel.classList.remove('active');
    }
  });

  // Обработчик клика по пунктам меню
  dropdownMenu.addEventListener('click', function(e) {
    // Позволяем кликам по ссылкам работать нормально
    if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
      return;
    }
    e.stopPropagation();
  });
});
</script>