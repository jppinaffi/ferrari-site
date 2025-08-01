import { useEffect, useRef, useState } from "react";

export default function TextDrop({ text }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h1
      className={`animated-text${visible ? " visible" : ""}`}
      ref={ref}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} style={{ marginRight: "0.25em" }}>
          {word.split("").map((char, i) => (
            <span
              key={i}
              style={{
                animationDelay: `${(wordIndex * 5 + i) * 0.03}s`,
                display: "inline-block",
                animationPlayState: visible ? "running" : "paused",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}


















/*export default function TextDrop({ text }) {
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
*/
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



