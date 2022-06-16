import { AdExpect, AdModule, AdRegBase, AdRegister, AdRegistry, AdTools } from "adcommon";
import { QinTool } from "qinpel-cps";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = { base, name: "grupos_pessoas" };

export const register: AdRegBase = {
  registry,
};

export class AdPeopleGroup extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
