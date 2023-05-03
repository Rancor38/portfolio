function ClipboardListItem({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`)
  };

  return (
    <button onClick={handleCopy}>
      {text}
    </button>
  );
}

export default ClipboardListItem;
