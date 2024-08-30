import React from 'react';
import classes from './account-form.component.module.css';
import {
  AccountError,
  AccountVm,
  createEmptyAccountError,
  createEmptyAccountVm,
} from '../account.vm';
import { validateForm } from '../validations';

interface Props {
  onCreateAccount: (account: AccountVm) => void;
}

export const AccountFormComponent: React.FC<Props> = ({ onCreateAccount }) => {
  const [account, setAccountForm] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(account);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onCreateAccount(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountForm({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.wrapper}>
          <div>
            <label>Tipo de cuenta</label>
            <select name="type" onChange={handleFieldChange}>
              <option value="select">Seleccionar</option>
              <option value="shared">Compartida</option>
              <option value="save">Ahorro</option>
              <option value="month">Gastos mes</option>
            </select>
            <p className={classes.error}> {errors.type}</p>
          </div>

          <div>
            <label>Alias</label>
            <input name="name" onChange={handleFieldChange} />
            <p className={classes.error}> {errors.name}</p>
          </div>
        </div>
        <div>
          <button className={classes.button}>Guardar</button>
        </div>
      </form>
    </div>
  );
};
