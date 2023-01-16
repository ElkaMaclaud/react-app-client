import React from "react";

export function withKey(key?: string) {
    return <E, T extends React.ComponentType<E>>(component: T) => (props: E, index: number) => React.createElement(
        JSON.stringify(component),
        { ... props, key: key ? JSON.stringify(props[key as keyof E]) : index },
        []
    );
}
