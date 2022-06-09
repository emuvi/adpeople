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
import { registry as people_group_regy } from "./ad-people-group";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

const registry: AdRegistry = {
  base,
  name: "subgrupos_pessoas",
};

const register: AdRegBase = {
  registry,
  joins: [
    {
      module: AdModules.PEOPLE_GROUP,
      registry: people_group_regy,
      alias: "people_group",
      filters: [
        new AdFilter({
          linked: { name: "grupo", with: "codigo" },
        }),
      ],
    },
  ],
};

export class AdPeopleSubGroup extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(
      new AdField({
        key: true,
        name: "grupo",
        title: "Grupo - Cód.",
        kind: QinMutants.STRING,
        options: {
          maxLength: 4,
        } as QinStringSet,
      })
    );
    this.addField(
      new AdField({
        key: true,
        name: "people_group.nome",
        title: "Grupo - Nome",
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
