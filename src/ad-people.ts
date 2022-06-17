import { AdExpect, AdModule, AdRegBase, AdRegister, AdRegistry, AdTools } from "adcommon";
import { QinTool } from "qinpel-cps";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = { base, name: "pessoas" };

export const register: AdRegBase = {
  registry,
};

export class AdPeople extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addTab("Principal");
    this.addField(AdTools.newAdFieldString("codigo", "Código", 8).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 80));
    this.addTab("Outros");
    this.addField(AdTools.newAdFieldString("fantasia", "Fantasia", 60));
    this.addField(AdTools.newAdFieldBoolean("potencial", "Potencial"));
    this.prepare();
  }
}
