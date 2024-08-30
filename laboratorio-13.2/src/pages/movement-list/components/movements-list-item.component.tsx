import React from 'react';
import { MovementListVm } from '../movement-list.vm';
import classes from './movement-list-item.component.module.css';

interface Props {
  movement: MovementListVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movement } = props;
  const amountStyle = movement.amount < 0 ? classes.negative : classes.positive;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movement.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movement.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movement.description}</span>
      <span className={`${classes.dataCell} ${amountStyle}`}>
        {movement.amount}
      </span>
      <span className={classes.dataCell}>{movement.balance}</span>
    </div>
  );
};
