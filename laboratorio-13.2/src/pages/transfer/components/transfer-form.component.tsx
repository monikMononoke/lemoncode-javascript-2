import React from 'react';
import {
  AccountVm,
  createEmptyTransferError,
  createEmptyTransferVm,
  TransferError,
  TransferVm,
} from '../transfer.vm';
import { validateForm } from '../validations';
import classes from './transfer-form.component.module.css';

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );

  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  React.useEffect(() => {
    setTransfer({
      ...transfer,
      accountId: defaultAccountId ?? '',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);

    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Seleccione cuenta origen</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={classes.large}
            >
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>

          <div>
            <label>Ingrese el IBAN de destino</label>
            <input
              name="iban"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>

          <div>
            <label>Beneficiario</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>

          <div>
            <label>Importe (EUR)</label>
            <input
              type="number"
              name="amount"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>

          <div>
            <label>Concepto</label>
            <input
              name="concept"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>

          <div>
            <label>Observaciones</label>
            <input
              name="notes"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>

        <div className={classes.formContainer}>
          <div>
            <p>
              Para que la transferencia se realice en otra fecha diferente a la
              hoy, por favor, indíque la fecha de ejecución:
            </p>
            <label>Fecha de ejecución</label>
            <input
              name="realDateTransfer"
              type="date"
              onChange={handleFieldChange}
              className={classes.date}
            />
            <p className={classes.error}>{errors.realDateTransfer}</p>
          </div>

          <div>
            <p>Escriba una dirección de email para dar aviso al beneficiario</p>
            <label>Email de beneficiario</label>
            <input
              name="email"
              onChange={handleFieldChange}
              className={classes.medium}
            />
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>

        <div className={classes.buttonContainer}>
          <button type="submit">REALIZAR LA TRANSFERENCIA</button>
        </div>
      </form>
    </div>
  );
};
