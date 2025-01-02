export interface I18nText {
    cn: string;
    en: string;
}

export namespace TagDoc {
    export interface Attribute {
        name: string;
        description: I18nText;
        type: string | string[];
        values?: string[];
        value?: string[];
        default?: string;
    }

    export interface Event {
        name: string;
        description: I18nText;
        parameters?: string;
        param?: I18nText;
        type?: string;
    }

    export interface Slot {
        name: string;
        description: I18nText;
        props?: string[];
        subtags?: string;
    }

    export interface ChildAttribute {
        name: string;
        description: I18nText;
        list: Attribute[];
    }

    export interface TagDocInstance {
        attributes?: Attribute[];
        events?: Event[];
        slots?: Slot[];
        childAttributes?: ChildAttribute[];
        url?: string;
        exposes?: any[];
    }

    export interface Directive {
        name: string;
        description: I18nText;
        list: Attribute[];
    }

    export interface Expose {
        name: string;
        description: I18nText;
        type: string;
        param?: I18nText;
    }
}

export interface ComponentDoc {
    name: string;
    description: string | I18nText;
    props: PropDoc[];
    events: EventDoc[];
    slots: SlotDoc[];
    url?: string;
    getDocumentation?(): string;
}

export interface PropDoc {
    name: string;
    type: string | string[];
    description: string | I18nText;
    default?: string;
    values?: string[];
}

export interface EventDoc {
    name: string;
    description: string | I18nText;
    parameters: string;
    type?: string;
}

export interface SlotDoc {
    name: string;
    description: string | I18nText;
    props?: string[];
}

export interface MethodDoc extends EventDoc {
    returns?: string;
} 