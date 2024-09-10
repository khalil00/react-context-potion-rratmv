import React, { useContext } from 'react';
import PotionAddition from './PotionAddition';
import usePotions from '../../hooks/usePotions';
import PotionsList from './PotionsList';
import { UserContext } from '../../App';

const PotionManagement = () => {
  const [potions, addPotion, removePotion] = usePotions();
  const user = useContext(UserContext);
  return (
    <>
      <div className="row">
        {user.permissions.includes('canAdd') && (
          <PotionAddition onAdd={addPotion} />
        )}
      </div>
      <div className="row">
        <PotionsList potions={potions} removePotion={removePotion} />
      </div>
    </>
  );
};

export default PotionManagement;
