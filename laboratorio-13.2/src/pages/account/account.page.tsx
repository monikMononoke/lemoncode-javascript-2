import { AppLayout } from '@/layouts';
import React from 'react';
import classes from './account.page.module.css';
import { AccountFormComponent } from './components';
import { AccountVm } from './account.vm';
import { mapAccountFromVmToApi } from './account.mapper';
import { saveAccount } from './api/account.api';

export const AccountPage: React.FC = () => {
  const handleSubmit = (account: AccountVm) => {
    const createdAccount = mapAccountFromVmToApi(account);
    saveAccount(createdAccount).then((result) => {
      if (result) {
        alert('Cuenta creada con éxito');
      } else {
        alert('Error al crear la cuenta');
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>Cuenta Bancaria</h1>
        </div>

        <AccountFormComponent onCreateAccount={handleSubmit} />
      </div>
    </AppLayout>
  );
};
