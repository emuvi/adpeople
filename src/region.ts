import { AdModule } from "adcommon";
import { QinColumn, QinLabel } from "qinpel-cps";

export class AdRegion extends QinColumn {

    private module: AdModule;
    private label = new QinLabel("Região");

    public constructor(module: AdModule) {
        super();
        this.module = module;
        this.label.install(this);
    }

}