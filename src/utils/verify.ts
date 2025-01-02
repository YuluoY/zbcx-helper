export function isTagSuggest(text: string): boolean {
    return text.endsWith('<');
}

export function isAttrSuggest(text: string): boolean {
    return /\s[a-zA-Z0-9-]*$/.test(text);
}

export function isAttrValSuggest(text: string): boolean {
    return /\s[a-zA-Z0-9-]*=["']?[^"']*$/.test(text);
}

export function isEventSuggest(text: string): boolean {
    return /\s@[a-zA-Z0-9-]*$/.test(text);
}

export function verifyUrl(str: string | undefined): str is string {
    if (!str) {
        return false;
    }
    try {
        new URL(str);
        return true;
    } catch {
        return false;
    }
} 