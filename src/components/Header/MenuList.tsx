import React from "react";

interface menuListProps {
  menuOptions: { id: string; title: string }[];
}

export function MenuList(props:menuListProps) {
    return (
      <ul>
        {props.menuOptions.map((option) => (
          <li key={option.id}>
            <a href="https://duckduckgo.com">{option.title}</a>
          </li>
        ))}
      </ul>
    );
}