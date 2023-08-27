import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("e08538d7-0bf6-476c-8176-0f81e7bc68a9");
    }, []);

    return null;
}