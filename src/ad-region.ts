import { AdExpect, AdField, AdRegister } from "adcommon";
import { QinMutants, QinStringOptions } from "qinpel-cps";

export class AdRegion extends AdRegister {

    public constructor(expect: AdExpect) {
        super(expect, "regioes");
        this.addView("Código", new AdField({
            name: "codigo",
            kind: QinMutants.STRING,
            options: {
                maxLength: 4
            } as QinStringOptions
        }));
        this.addView("Ativo", new AdField({
            name: "ativo",
            kind: QinMutants.BOOLEAN
        }));
        this.addView("Nome", new AdField({
            name: "nome",
            kind: QinMutants.STRING,
            options: {
                maxLength: 60
            } as QinStringOptions
        }));
    }

}