export const ListView = ({ fruits }) => {
    const itemToshow = fruits.length !== 0 ? fruits : ['Nothing Found! ']
  return itemToshow.map((fruit, index) => {
    return (
      <div key={index}>
        <p>{fruit}</p>
      </div>
    );
  });
};
