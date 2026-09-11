/**
 * Dịch văn bản tiếng Đức sang tiếng Việt sử dụng Google Translate API miễn phí
 */
const translationCache = new Map<string, string>();

export async function translateGermanToVietnamese(text: string): Promise<string> {
  // Strip arrow symbols from German text before translating
  const cleanText = text.replace(/[↑↓↗↘←→▲▼]/g, '').trim();
  if (!cleanText) return '';

  if (translationCache.has(cleanText)) {
    return translationCache.get(cleanText)!;
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=vi&dt=t&q=${encodeURIComponent(cleanText)}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Translation request failed: ${res.statusText}`);
    }
    const data = await res.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      let translated = data[0]
        .map((item: unknown) => (Array.isArray(item) ? item[0] : ''))
        .join('');
      // Clean any arrows left in translation output
      translated = translated.replace(/[↑↓↗↘←→▲▼]/g, '').trim();
      translationCache.set(cleanText, translated);
      return translated;
    }
    return '';
  } catch (error) {
    console.error('Google Translate error:', error);
    return '';
  }
}
