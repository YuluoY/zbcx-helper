export interface ComponentDoc {
    name: string;
    description: string;
    props: PropDoc[];
    events: EventDoc[];
    slots?: SlotDoc[];
}

export interface PropDoc {
    name: string;
    type: string;
    description: string;
    default?: string;
    required?: boolean;
    values?: string[];
}

export interface EventDoc {
    name: string;
    description: string;
    params?: string[];
}

export interface SlotDoc {
    name: string;
    description: string;
    props?: string[];
} 