function FindProxyForURL(url, host) {
  // Замените "ВАШ_ПРОКСИ_СЕРВЕР:ПОРТ" на ваш реальный прокси-сервер и порт
  // и укажите правильный тип: PROXY для HTTP/HTTPS или SOCKS5 для SOCKS5 прокси.
  var proxy = "PROXY 146.247.121.111:6408";
  // Например:
  // var proxy = "PROXY 123.45.67.89:8080";
  // или
  // var proxy = "SOCKS5 123.45.67.89:1080";

  // --- Правила для YouTube ---
  if (
    shExpMatch(host, "youtube.com") ||
    shExpMatch(host, "*.youtube.com") ||
    shExpMatch(host, "www.youtube.com") ||
    shExpMatch(host, "m.youtube.com") ||
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "googlevideo.com") ||
    shExpMatch(host, "*.ytimg.com") ||
    shExpMatch(host, "ytimg.com") ||
    shExpMatch(host, "*.youtube-nocookie.com")
  ) {
    return proxy;
  }

  // --- Правило для AI Studio ---
  if (shExpMatch(host, "aistudio.google.com")) {
    return proxy;
  }

  // --- Правила для ChatGPT ---
  if (
    shExpMatch(host, "chat.openai.com") ||
    shExpMatch(host, "*.openai.com") // Для охвата возможных субдоменов OpenAI
  ) {
    return proxy;
  }

  // --- Правило для 2ip.ru ---
  if (
    shExpMatch(host, "2ip.ru") ||
    shExpMatch(host, "*.2ip.ru") // На случай, если используются субдомены
  ) {
    return proxy;
  }

  // --- Для всего остального ---
  return "DIRECT";
}
