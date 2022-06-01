import { AdExpect, AdField, AdModule, AdRegister } from "adcommon";
import { QinComboSet, QinMutants, QinStringSet, QinTool } from "qinpel-cps";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export class AdPeopleSubGroup extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, { registry: { base, name: "subgrupos_pessoas" } });
    this.addField(
      new AdField({
        key: true,
        name: "grupo",
        title: "Grupo",
        kind: QinMutants.STRING,
        options: {
          maxLength: 4,
        } as QinStringSet,
      })
    );
    this.addField(
      new AdField({
        key: true,
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
              title: "",
              value: "",
            },
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
    this.prepare();
  }
}
