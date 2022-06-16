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
import { registry as nation_regy } from "./ad-nation";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = {
  base,
  name: "estados",
};

export const register: AdRegBase = {
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

export class AdState extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(AdTools.newAdFieldString("pais", "País - Cód.", 4).putKey());
    this.addField(AdTools.newAdFieldString("nation.nome", "País - Nome", 60));
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
