import { AdExpect, AdField, AdModule, AdRegister } from "adcommon";
import { QinComboSet, QinMutants, QinStringSet, QinTool } from "qinpel-cps";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export class AdRegion extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, { base, name: "regioes" }, expect);
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
        kind: QinMutants.COMBO,
        options: {
          items: [
            {
              title: "Sim",
              value: "S",
            },
            {
              title: "Não",
              value: "N",
            },
          ],
        } as QinComboSet,
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
