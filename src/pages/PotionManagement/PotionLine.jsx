import React, { useContext } from 'react';
import { UserContext } from '../../App';

const PotionLine = ({ potion, remove }) => {
  const executePotion = () => {
    alert(`Executing ${potion.title}`);
  };

  const user = useContext(UserContext);

  return (
    <tr key={potion.title}>
      <td>{potion.title}</td>
      <td>
        {user.permissions.includes('canExecute') && (
          <button className="btn btn-link" onClick={executePotion}>
            <i className="fa-solid fa-magic-wand-sparkles" />
          </button>
        )}
        {user.permissions.includes('canRemove') && (
          <button className="btn btn-link" onClick={remove}>
            <i className="fa-solid fa-trash" />
          </button>
        )}
      </td>
    </tr>
  );
};

export default PotionLine;
