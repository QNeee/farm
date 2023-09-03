export const handleCopyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    copyToClipboardFallback(text);
  }
};

const copyToClipboardFallback = (text: string): void => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();

  if (document.queryCommandSupported('copy')) {
    document.execCommand('copy');
  }

  textarea.value = '';
  document.body.removeChild(textarea);
};
