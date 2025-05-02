import React from 'react';
import './style.css'

export default function SelectValue({ items, value, onChange }) {
    return (
        <select className="select" value={value} onChange={onChange}>
            {Object.entries(items.data).map(([key, item]) => (
                <option key={key} value={item.value}>
                    {key} {/*{item.value}*/}
                </option>
            ))}
        </select>
    );
}
