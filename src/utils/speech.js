/**
 * Türkçe sesli okuma fonksiyonu.
 * @param {string} text - Okunacak metin
 */
export const speak = (text) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'tr-TR';
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
};
