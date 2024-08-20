export interface MovementListVm {
    id: string;
    description: string;
    amount: number;
    balance: number;
    transaction: Date;
    realTransaction: Date;
    accountId: string;
}

export interface AccountVm {
    id: string;
    iban: string;
    balance: string;
}