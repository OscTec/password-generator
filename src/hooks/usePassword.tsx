import { useEffect, useState, useTransition } from 'react';
import generatePassword from '../services/generatePassword';

interface UsePasswordProps {
    length: number;
    includeLowercase: boolean;
    includeUppercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
}

function usePassword({
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    length,
}: UsePasswordProps) {
    const [password, setPassword] = useState(() =>
        generatePassword({
            length: length,
            includeLowercase,
            includeUppercase,
            includeNumbers,
            includeSymbols,
        }),
    );
    const [history, setHistory] = useState<string[]>([]);
    const [, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            setHistory([password]);
        });
    }, [setHistory, password]);

    useEffect(() => {
        startTransition(() => {
            const newPassword = generatePassword({
                length: length,
                includeLowercase,
                includeUppercase,
                includeNumbers,
                includeSymbols,
            });
            setPassword(newPassword);
            setHistory((prev) => [newPassword, ...prev]);
        });
    }, [
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols,
    ]);

    const regeneratePassword = () => {
        const newPassword = generatePassword({
            length: length,
            includeLowercase,
            includeUppercase,
            includeNumbers,
            includeSymbols,
        });
        setPassword(newPassword);
        setHistory((prev) => [newPassword, ...prev]);
    };

    return {
        password,
        setPassword,
        regeneratePassword,
        history,
    };
}

export default usePassword;
