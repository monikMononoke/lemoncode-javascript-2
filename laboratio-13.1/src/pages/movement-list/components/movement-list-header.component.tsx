import React from 'react';
import classes from './movement-list-header.component.module.css';

import { getAccountList } from '@/pages/account-list/api';
import { mapAccountListFromApiToVm } from '@/pages/account-list/account-list.mapper';
import { useParams } from 'react-router-dom';
import { AccountVm } from '../movement-list.vm';

export const MovementListHeaderComponent: React.FC = () => {
  const { id } = useParams();

  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  return (
    <div className={classes.headerContainer}>
      <div className={classes.header}>
        <h2>Saldos y últimos movimientos</h2>
        <div className={classes.divBalance}>
          <div className={classes.titleBalance}>SALDO DISPONIBLE</div>
          <div className={classes.currentBalance}>
            {accountList.map((account) => {
              if (account.id === id) {
                return `${account.balance} €`;
              } else {
                return '';
              }
            })}
          </div>
        </div>
      </div>
      <div className={classes.secondHeader}>
        <div style={{ fontWeight: 'bold' }}>Alias: Gastos mes</div>
        <div style={{ fontWeight: 'bold' }}>
          {' '}
          {accountList.map((account) => {
            if (account.id === id) {
              return `IBAN: ${account.iban}`;
            } else {
              return '';
            }
          })}{' '}
        </div>
      </div>
    </div>
  );
};
