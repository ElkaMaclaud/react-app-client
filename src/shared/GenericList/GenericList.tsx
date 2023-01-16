import React from 'react';

interface IItem {
    id: string;
    text: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string; 
}

interface IGenericListProps {
    list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({ As = 'div', text, onClick = noop, className, id, href}) => (
                <As 
                className={className}
                onClick={() => onClick(id)}
                key={id}
                href={href}
                >
                    {text}
                </As>
            ))}
        </>
    );
}

// interface IMyListProps {
//     list: IItem[];
// }

// export function MyList({ list }: IMyListProps) {
//     return (
//         <ul>
//             {list.map((item) => (
//                 <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//             ))}
//         </ul>
//     )
// }

// const jsxs = [
//     <li key={0}>Content One 0</li>,
//     <li key={1}>Content One 1</li>,
//     <li key={2}>Content One 2</li>,
//     <li key={3}>Content One 3</li>,
//     <li key={4}>Content One 4</li>
// ]
// interface IItem {
//     value: string;
//     id: string;
// }

// interface IMyListProps {
//     list: IItem[];
//     onClick: (id: string) => void;
// }

// export function MyList({ list, onClick }: IMyListProps) {
//     return (
//         <ul>
//             {list.map((item) => (
//                 <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
//             ))}
//         </ul>
//     )
// }
