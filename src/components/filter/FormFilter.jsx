export const Filter = ({ filterValue, updateFilter }) => {
  return (
    <input
      value={filterValue}
      type="text"
      name="filter"
      // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      onChange={evt => updateFilter(evt.target.value)}
    />
  );
};
