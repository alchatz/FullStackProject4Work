import { useState } from 'react'

export default function Items() {
    const [clicked, handleClick] = useState(0);
    const navPages = [
        { title: 'Topic', id: 1 },
        { title: 'Page', id: 2 },
        { title: 'Page', id: 3 },
        { title: 'Page', id: 4 },
      ];
    const listItems = navPages.map(item =>
        <li key={item.id}>
            {item.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
      );
}