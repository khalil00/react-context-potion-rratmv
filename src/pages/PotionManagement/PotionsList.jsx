import * as React from 'react';
import PotionLine from './PotionLine';

const PotionsList = ({ potions, removePotion }) => (
  <table className="table mt-4">
    <thead>
      <tr>
        <th>Title</th>
        <th style={{ width: 150 }}>Action</th>
      </tr>
    </thead>
    {potions.map((p) => (
      <PotionLine potion={p} remove={() => removePotion(p)} />
    ))}
  </table>
);

export default PotionsList;
