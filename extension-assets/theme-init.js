// Runs before styles to avoid a theme flash; default theme is 'editorial'.
(function () {
  try {
    const saved = localStorage.getItem('papayar_theme') || 'editorial';
    const theme = getThemeDefinition(saved);
    document.documentElement.dataset.theme = theme.id;
    if (localStorage.getItem('papayar_reduce_motion') === 'true') document.documentElement.dataset.motion = 'reduced';
  } catch { document.documentElement.dataset.theme = 'editorial'; }
})();
