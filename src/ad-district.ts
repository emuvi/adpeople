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
import { registry as city_regy } from "./ad-city";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

const registry: AdRegistry = {
  base,
  name: "bairros",
};

const register: AdRegBase = {
  registry,
  joins: [
    {
      module: AdModules.CITY,
      registry: city_regy,
      alias: "city",
      filters: [
        new AdFilter({
          linked: { name: "cidade", with: "codigo" },
        }),
      ],
    },
  ],
};

export class AdDistrict extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(
      new AdField({
        key: true,
        name: "cidade",
        title: "Cidade - Cód.",
        kind: QinMutants.STRING,
        options: {
          maxLength: 6,
        } as QinStringSet,
      })
    );
    this.addField(
      new AdField({
        key: true,
        name: "city.nome",
        title: "Cidade - Nome",
        kind: QinMutants.STRING,
        options: {
          maxLength: 60,
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
