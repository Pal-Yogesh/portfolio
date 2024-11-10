"use client";
import { useEffect } from "react";

// Component for Intelliticks chat widget
const Chat: React.FC = () => {
    useEffect(() => {
        // Intelliticks script
        (function (
            I: any,
            L: string,
            T: Document,
            i: string,
            c: string,
            k: string,
            s: object
        ) {
            if (I.iticks) return;
            I.iticks = { host: c, settings: s, clientId: k, cdn: L, queue: [] };
            const h = document.head || document.documentElement;
            const e = document.createElement('script');
            e.async = true;
            e.src = (L || c) + "/client/inject-v2.min.js";
            h.insertBefore(e, h.firstChild);
            I.iticks.call = function (a: any, b: any) {
                I.iticks.queue.push([a, b]);
            };
        })(
            window,
            "https://cdn-v1.intelliticks.com/prod/common",
            document,
            "script",
            "https://app.intelliticks.com",
            "wbYDz9MFJfdBySTyL_c",
            {}
        );
    }, []);

    return null;
};

export default Chat;
