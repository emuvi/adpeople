import { AdExpect, AdField, AdModule, AdRegister } from "adcommon";
import { QinMutants, QinStringSet } from "qinpel-cps";

export class AdNation extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect);
    this.addField(
      new AdField({
        name: "codigo",
        title: "Código",
        kind: QinMutants.STRING,
        options: {
          maxLength: 4,
        } as QinStringSet,
      })
    );
    this.addField(
      new AdField({
        name: "ativo",
        title: "Ativo",
        kind: QinMutants.BOOLEAN,
      })
    );
    this.addField(
      new AdField({
        name: "nome",
        title: "Nome",
        kind: QinMutants.STRING,
        options: {
          maxLength: 60,
        } as QinStringSet,
      })
    );
  }
}
