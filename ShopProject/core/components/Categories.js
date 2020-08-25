import React from 'react';

function Categories({ categories, onClickItem }) {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) =>{
        setActiveItem(index);
    }
  return (
    <div className="categories">
      <ul>
        <li>Все</li>
        {categories.map((name, index) => (
          <li 
          className={activeItem === index? 'active' : ''}
          onClick={()=>onSelectItem(index)} key={`${name}_${index}`}>
              {name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
