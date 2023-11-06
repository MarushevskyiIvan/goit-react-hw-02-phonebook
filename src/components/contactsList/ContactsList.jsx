export const ContactsList = ({ contacts, onDelete }) => {
  return contacts.map(({ name, id, number }) => {
    return (
      <li key={id}>
        {name}:<p>{number}</p>
        <button onClick={() => onDelete(id)}>delete</button>
      </li>
    );
  });
};
