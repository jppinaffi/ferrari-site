export default function TextDrop({ text }) {
  return (
    <h1 className="animated-text">
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} style={{ marginRight: '0.25em' }}>
          {word.split('').map((char, i) => (
            <span
              key={i}
              style={{ animationDelay: `${(wordIndex * 5 + i) * 0.03}s`, display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}





/*
export default function TextDrop({ text }) {
  return (
    <h1 className="animated-text">
      {text.split('').map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.03}s`  }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
}
*/



