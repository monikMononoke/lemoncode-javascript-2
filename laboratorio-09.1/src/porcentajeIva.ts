export const porcentajeIva = (stringIva: string
): number => {
    switch (stringIva) {
        case "general":
            stringIva = "21";
            break;
        case "reducido":
            stringIva = "10";
            break;
        case "superreducidoA":
            stringIva = "5";
            break;
        case "superreducidoB":
            stringIva = "4";
            break;
        case "superreducidoC":
            stringIva = "0";
            break;
        case "sinIva":
            stringIva = "0";
            break;
    }

    const iva: number = parseInt(stringIva);

    return iva;
}

