export default async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log(`Copied: '${text}'`);
    alert('Copied to clipboard');
  } catch {
    console.error('Clipboard copy failed');
    alert('Copy failed. Press Tab or click on any element and retry');
  }
}