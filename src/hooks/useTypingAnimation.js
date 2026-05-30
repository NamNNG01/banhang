import { useEffect, useState } from "react";

function useTypingAnimation(phrases, speed = 72, pause = 1800) {
    const [text, setText] = useState("");
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) {
            const t = setTimeout(() => { setPaused(false); setDeleting(true); }, pause);
            return () => clearTimeout(t);
        }
        const phrase = phrases[phraseIdx];
        const t = setTimeout(() => {
            if (!deleting) {
                if (charIdx < phrase.length) {
                    setText(phrase.slice(0, charIdx + 1));
                    setCharIdx(c => c + 1);
                } else {
                    setPaused(true);
                }
            } else {
                if (charIdx > 0) {
                    setText(phrase.slice(0, charIdx - 1));
                    setCharIdx(c => c - 1);
                } else {
                    setDeleting(false);
                    setPhraseIdx(i => (i + 1) % phrases.length);
                }
            }
        }, deleting ? speed / 2 : speed);
        return () => clearTimeout(t);
    }, [charIdx, deleting, paused, phraseIdx, phrases, speed, pause]);

    return text;
}

export { useTypingAnimation };