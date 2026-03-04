/**
 * Lokally - Web service worker
 *
 * Este projeto é focado em Android/iOS.
 * O pacote original veio com Firebase Web (ammart-8885e) que causava conflito e tela branca.
 *
 * Por enquanto, mantemos um SW minimalista para não quebrar o build web.
 * Push no Web pode ser configurado depois (com config do Firebase Web App do projeto forward-chess-455110-f1).
 */

self.addEventListener("notificationclick", function (event) {
  try {
    event.notification && event.notification.close();
  } catch (e) {}
});