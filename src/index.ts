import { QinButton, QinColumn, QinLabel } from "qinpel-cps"

class AdPeople extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, AdPeople!");
    private qinFirst: QinButton = new QinButton(null, new QinLabel("First"));
    private qinSecond: QinButton = new QinButton(null, new QinLabel("Second"));
    private qinThird: QinButton = new QinButton(null, new QinLabel("Third"));

    public constructor() {
        super();
        this.qinHello.install(this);
        const options = this.qinpel().frame.getOptions();
        if (options.search) {
            this.qinFirst.install(this);
            this.qinFirst.addAction(_ => {
                this.qinpel().frame.sendWaiters("first");
            });
            this.qinSecond.install(this);
            this.qinSecond.addAction(_ => {
                this.qinpel().frame.sendWaiters(["first", "second"]);
            });
            this.qinThird.install(this);
            this.qinThird.addAction(_ => {
                this.qinpel().frame.sendWaiters({third: true});
            });
        }
    }

}

new AdPeople().putAsBody();