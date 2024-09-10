import usePersistedState from './usePersistedState';

const usePotions = () => {
  const [potions, setPotions] = usePersistedState([], 'Potions');

  const addPotion = (potion) => {
    setPotions([...potions, potion]);
  };

  const removePotion = (potion) => {
    setPotions(potions.filter((p) => p.title !== potion.title));
  };

  return [potions, addPotion, removePotion];
};

export default usePotions;
