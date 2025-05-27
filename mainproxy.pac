function FindProxyForURL(url, host) {
  // Замените на ваш реальный прокси-сервер и порт
  var proxy = "PROXY 146.247.121.111:6408"; // или SOCKS5 ВАШ_ПРОКСИ_СЕРВЕР:ПОРТ

  // --- Правила только для YouTube ---
  if (
    shExpMatch(host, "youtube.com") ||        // Основной домен
    shExpMatch(host, "*.youtube.com") ||     // Все субдомены youtube.com
    shExpMatch(host, "www.youtube.com") ||   // Явно www.youtube.com
    shExpMatch(host, "m.youtube.com") ||      // Мобильная версия
    shExpMatch(host, "*.googlevideo.com") || // Ключевой домен для загрузки видео!
    shExpMatch(host, "googlevideo.com") ||   // На всякий случай
    shExpMatch(host, "*.ytimg.com") ||        // Статические ресурсы (превью и т.д.)
    shExpMatch(host, "ytimg.com") ||          // На всякий случай
    shExpMatch(host, "*.youtube-nocookie.com") // Для встроенных видео
  ) {
    return proxy;
  }

  // --- Для всего остального ---
  return "DIRECT";
}
