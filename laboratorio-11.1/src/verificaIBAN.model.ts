export interface codigoSucursal {
    banco: Banco;
    sucursal: string;
    digitoControl: string;
    cuenta: string;
}

export interface Banco {
    entidad: string;
    nombre: string;
}

export const codigosDeBanco: Banco[] = [
    { entidad: "2080", nombre: "Abanca Corporación Bancaria" },
    { entidad: "0061", nombre: "Banco March" },
    { entidad: "0188", nombre: "Banco Alcalá" },
    { entidad: "0182", nombre: "Banco Bilbao Vizcaya Argentaria" },
    { entidad: "0130", nombre: "Banco Caixa Geral" },
    { entidad: "0234", nombre: "Banco Caminos" },
    { entidad: "2105", nombre: "Banco Castilla-La Mancha" },
    { entidad: "0240", nombre: "Banco de Crédito Social Cooperativo" },
    { entidad: "0081", nombre: "Banco de Sabadell" },
    { entidad: "0487", nombre: " Banco Mare Nostrum" },
    { entidad: "0186", nombre: "Banco Mediolanum" },
    { entidad: "0238", nombre: "Banco Pastor" },
    { entidad: "0075", nombre: "Banco Popular Español" },
    { entidad: "0049", nombre: "Banco Santander" },
    { entidad: "3873", nombre: "Banco Santander Totta" },
    { entidad: "2038", nombre: "Bankia" },
    { entidad: "0128", nombre: "Bankinter" },
    { entidad: "0138", nombre: "Bankoa" },
    { entidad: "0152", nombre: "Barclays Bank PLC" },
    { entidad: "3842", nombre: "BNP Paribas Paris" },
    { entidad: "3025", nombre: "Caixa de Credit del Enginyers" },
    { entidad: "2100", nombre: "Caixabank" },
    { entidad: "2045", nombre: "Caja de Ahorros y Monte de Piedad de Ontinyent" },
    { entidad: "3035", nombre: "Caja Laboral Popular CC" },
    { entidad: "3081", nombre: "Caja Rural Castilla - La Mancha3058 Cajamar Caja Rural" },
    { entidad: "2000", nombre: "Cecabank" },
    { entidad: "1474", nombre: "Citibank Europe PLC" },
    { entidad: "3821", nombre: "Commerzbank AG" },
    { entidad: "3877", nombre: "Danske Bank A / S" },
    { entidad: "0019", nombre: "Deutsche Bank SAE" },
    { entidad: "0239", nombre: "EVO Banco" },
    { entidad: "2085", nombre: "Ibercaja Banco" },
    { entidad: "1465", nombre: "ING Bank NV" },
    { entidad: "2095", nombre: "Kutxabank" },
    { entidad: "2048", nombre: "Liberbank" },
    { entidad: "0131", nombre: "Novo Banco" },
    { entidad: "0073", nombre: "Open Bank" },
    { entidad: "0108", nombre: "Société Générale" },
    { entidad: "2103", nombre: "Unicaja Banco" },
]