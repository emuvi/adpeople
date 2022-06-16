import {
  AdExpect,
  AdFilter,
  AdModule,
  AdModules,
  AdRegBase,
  AdRegister,
  AdRegistry,
  AdTools,
} from "adcommon";
import { QinTool } from "qinpel-cps";
import { registry as people_group_regy } from "./ad-people-group";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = {
  base,
  name: "subgrupos_pessoas",
};

export const register: AdRegBase = {
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
    this.addField(AdTools.newAdFieldString("grupo", "Grupo - Cód.", 4).putKey());
    this.addField(AdTools.newAdFieldString("people_group.nome", "Grupo - Nome", 60));
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
