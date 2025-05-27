function FindProxyForURL(url, host) {
  // Замените "ВАШ_ПРОКСИ_СЕРВЕР:ПОРТ" на ваш реальный прокси-сервер и порт
  var proxy = "146.247.121.111:6408";"

  // Условия для YouTube
  if (
    shExpMatch(host, "*.youtube.com") ||
    shExpMatch(host, "*.youtube-nocookie.com") || // Для встроенных видео без cookie
    shExpMatch(host, "*.ytimg.com") || // Для статических ресурсов YouTube
    shExpMatch(host, "*.googlevideo.com") // Для видеопотоков
  ) {
    return proxy;
  }

  // Условие для AI Studio (aistudio.google.com)
  if (shExpMatch(host, "aistudio.google.com")) {
    return proxy;
  }

  // Условия для ChatGPT
  if (
    shExpMatch(host, "chat.openai.com") ||
    shExpMatch(host, "*.openai.com") // Может потребоваться для API или других сервисов OpenAI
  ) {
    return proxy;
  }

  // Для всех остальных запросов - подключаться напрямую
  return "DIRECT";
}
