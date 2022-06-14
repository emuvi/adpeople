import {
  AdExpect,
  AdField,
  AdFilter,
  AdModule,
  AdModules,
  AdRegBase,
  AdRegister,
  AdRegistry,
} from "adcommon";
import { QinComboSet, QinMutants, QinStringSet, QinTool } from "qinpel-cps";
import { registry as nation_regy } from "./ad-nation";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

const registry: AdRegistry = {
  base,
  name: "cidades",
};

const register: AdRegBase = {
  registry,
  joins: [
    {
      module: AdModules.NATION,
      registry: nation_regy,
      alias: "nation",
      filters: [
        new AdFilter({
          linked: { name: "pais", with: "codigo" },
        }),
      ],
    },
  ],
};

export class AdCity extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(
      new AdField({
        key: true,
        name: "codigo",
        title: "Código",
        kind: QinMutants.STRING,
        options: {
          maxLength: 6,
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
        key: true,
        name: "pais",
        title: "País - Cód.",
        kind: QinMutants.STRING,
        options: {
          maxLength: 4,
        } as QinStringSet,
      })
    );
    this.addField(
      new AdField({
        key: true,
        name: "nation.nome",
        title: "País - Nome",
        kind: QinMutants.STRING,
        options: {
          maxLength: 60,
        } as QinStringSet,
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
