(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModules = exports.AdScope = exports.AdOptions = void 0;
var AdOptions;
(function (AdOptions) {
    AdOptions["MODULE"] = "module";
    AdOptions["SCOPES"] = "scopes";
    AdOptions["FILTERS"] = "filters";
})(AdOptions = exports.AdOptions || (exports.AdOptions = {}));
var AdScope;
(function (AdScope) {
    AdScope["ALL"] = "all";
    AdScope["SEARCH"] = "search";
    AdScope["INSERT"] = "insert";
    AdScope["EDIT"] = "edit";
    AdScope["DELETE"] = "delete";
})(AdScope = exports.AdScope || (exports.AdScope = {}));
var AdModules;
(function (AdModules) {
    AdModules["BUSINESS"] = "business";
    AdModules["REGION"] = "region";
    AdModules["NATION"] = "nation";
    AdModules["STATE"] = "state";
    AdModules["CITY"] = "city";
    AdModules["DISTRICT"] = "district";
    AdModules["PEOPLE"] = "people";
    AdModules["PEOPLE_GROUP"] = "people_group";
    AdModules["PEOPLE_SUBGROUP"] = "people_subgroup";
})(AdModules = exports.AdModules || (exports.AdModules = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdExpect = void 0;
class AdExpect {
    constructor(options) {
        this._scopes = options.scopes;
        this._filters = options.filters;
        this._waiters = options.waiters;
    }
    get scopes() {
        return this._scopes;
    }
    get filters() {
        return this._filters;
    }
    get waiters() {
        return this._waiters;
    }
}
exports.AdExpect = AdExpect;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdField = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdField {
    constructor(newer) {
        this._title = newer.title;
        this._name = newer.name;
        this._kind = newer.kind;
        this._options = newer.options;
        this._key = newer.key ? true : false;
    }
    newEdit() {
        return qinpel_cps_1.QinMutantsArm.newEdit(this._kind, this._options);
    }
    get title() {
        return this._title;
    }
    get name() {
        return this._name;
    }
    get kind() {
        return this._kind;
    }
    get options() {
        return this._options;
    }
    get key() {
        return this._key;
    }
}
exports.AdField = AdField;

},{"qinpel-cps":15}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdFilterUnion = exports.AdFilterMode = exports.AdFilterItem = exports.AdFilters = void 0;
class AdFilters {
    constructor(items) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
}
exports.AdFilters = AdFilters;
class AdFilterItem {
    constructor(name, mode, value, union) {
        this._name = name;
        this._mode = mode;
        this._value = value;
        this._union = union;
    }
    get name() {
        return this._name;
    }
    get mode() {
        return this._mode;
    }
    get value() {
        return this._value;
    }
    get union() {
        return this._union;
    }
}
exports.AdFilterItem = AdFilterItem;
var AdFilterMode;
(function (AdFilterMode) {
    AdFilterMode["EQUALS"] = "equals";
    AdFilterMode["DIFFERENT"] = "different";
    AdFilterMode["BIGGER"] = "bigger";
    AdFilterMode["LESSER"] = "lesser";
    AdFilterMode["BIGGER_OR_EQUALS"] = "bigger_or_equals";
    AdFilterMode["LESSER_OR_EQUALS"] = "lesser_or_equals";
})(AdFilterMode = exports.AdFilterMode || (exports.AdFilterMode = {}));
var AdFilterUnion;
(function (AdFilterUnion) {
    AdFilterUnion["OR"] = "or";
    AdFilterUnion["AND"] = "and";
})(AdFilterUnion = exports.AdFilterUnion || (exports.AdFilterUnion = {}));

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModel = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdModel {
    constructor(table) {
        this._table = table;
        this._fields = [];
    }
    addField(field) {
        this._fields.push(field);
    }
    insert(values) {
        qinpel_cps_1.QinTools.qinpel();
    }
    search(filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
    update(values, filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
    delete(filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
}
exports.AdModel = AdModel;

},{"qinpel-cps":15}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBar = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const qinpel_res_1 = require("qinpel-res");
class AdRegBar extends qinpel_cps_1.QinLine {
    constructor(register) {
        super();
        this._test = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceAdd, qinpel_res_1.QinGrandeur.MEDIUM);
        this._reg = register;
        this._test.install(this);
        this._test.style.putAsMarginBottom(30);
    }
}
exports.AdRegBar = AdRegBar;

},{"qinpel-cps":15,"qinpel-res":38}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBody = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegBody extends qinpel_cps_1.QinPanel {
    constructor(register) {
        super();
        this._tabs = null;
        this._column = null;
        this._line = null;
        this._reg = register;
    }
    addTab(title) {
        if (this._tabs == null) {
            this._tabs = new qinpel_cps_1.QinTabs();
            this._tabs.install(this);
        }
        this._column = new qinpel_cps_1.QinColumn();
        this._tabs.addTab({ title, viewer: this._column });
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addLine() {
        if (this._column == null) {
            this._column = new qinpel_cps_1.QinColumn();
            this._column.install(this);
        }
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addView(field) {
        this._reg.model.addField(field);
        if (this._line == null) {
            this.addLine();
        }
        const editor = qinpel_cps_1.QinMutantsArm.newEdit(field.kind, field.options);
        if (field.title) {
            const viewer = new qinpel_cps_1.QinField(field.title, editor);
            viewer.install(this._line);
        }
        else {
            editor.install(this._line);
        }
    }
}
exports.AdRegBody = AdRegBody;

},{"qinpel-cps":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegTable = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegTable extends qinpel_cps_1.QinPanel {
    constructor(register) {
        super();
        this._reg = register;
    }
}
exports.AdRegTable = AdRegTable;

},{"qinpel-cps":15}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegister = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_model_1 = require("./ad-model");
const ad_reg_bar_1 = require("./ad-reg-bar");
const ad_reg_body_1 = require("./ad-reg-body");
const ad_reg_table_1 = require("./ad-reg-table");
class AdRegister extends qinpel_cps_1.QinColumn {
    constructor(expect, table) {
        super();
        this._bar = new ad_reg_bar_1.AdRegBar(this);
        this._body = new ad_reg_body_1.AdRegBody(this);
        this._table = new ad_reg_table_1.AdRegTable(this);
        this._expect = expect;
        this._model = new ad_model_1.AdModel(table);
        this._bar.install(this);
        this._body.install(this);
        this._table.install(this);
    }
    get expect() {
        return this._expect;
    }
    get model() {
        return this._model;
    }
    addTab(title) {
        this._body.addTab(title);
    }
    addLine() {
        this._body.addLine();
    }
    addView(field) {
        this._body.addView(field);
    }
}
exports.AdRegister = AdRegister;

},{"./ad-model":5,"./ad-reg-bar":6,"./ad-reg-body":7,"./ad-reg-table":8,"qinpel-cps":15}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = void 0;
const ad_consts_1 = require("./ad-consts");
function newAdOption(module, scopes, filters) {
    var result = {};
    result[ad_consts_1.AdOptions.MODULE] = module;
    result[ad_consts_1.AdOptions.SCOPES] = scopes;
    result[ad_consts_1.AdOptions.FILTERS] = filters;
    return result;
}
exports.AdTools = {
    newAdOption
};

},{"./ad-consts":1}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBody = exports.AdModel = exports.AdRegTable = exports.AdExpect = exports.AdRegister = exports.AdRegBar = exports.AdTools = exports.AdField = exports.AdFilterUnion = exports.AdFilterMode = exports.AdFilterItem = exports.AdFilters = exports.AdModules = exports.AdScope = exports.AdOptions = void 0;
var ad_consts_1 = require("./ad-consts");
Object.defineProperty(exports, "AdOptions", { enumerable: true, get: function () { return ad_consts_1.AdOptions; } });
var ad_consts_2 = require("./ad-consts");
Object.defineProperty(exports, "AdScope", { enumerable: true, get: function () { return ad_consts_2.AdScope; } });
var ad_consts_3 = require("./ad-consts");
Object.defineProperty(exports, "AdModules", { enumerable: true, get: function () { return ad_consts_3.AdModules; } });
var ad_filters_1 = require("./ad-filters");
Object.defineProperty(exports, "AdFilters", { enumerable: true, get: function () { return ad_filters_1.AdFilters; } });
var ad_filters_2 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterItem", { enumerable: true, get: function () { return ad_filters_2.AdFilterItem; } });
var ad_filters_3 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterMode", { enumerable: true, get: function () { return ad_filters_3.AdFilterMode; } });
var ad_filters_4 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterUnion", { enumerable: true, get: function () { return ad_filters_4.AdFilterUnion; } });
var ad_field_1 = require("./ad-field");
Object.defineProperty(exports, "AdField", { enumerable: true, get: function () { return ad_field_1.AdField; } });
var ad_tools_1 = require("./ad-tools");
Object.defineProperty(exports, "AdTools", { enumerable: true, get: function () { return ad_tools_1.AdTools; } });
var ad_reg_bar_1 = require("./ad-reg-bar");
Object.defineProperty(exports, "AdRegBar", { enumerable: true, get: function () { return ad_reg_bar_1.AdRegBar; } });
var ad_register_1 = require("./ad-register");
Object.defineProperty(exports, "AdRegister", { enumerable: true, get: function () { return ad_register_1.AdRegister; } });
var ad_expect_1 = require("./ad-expect");
Object.defineProperty(exports, "AdExpect", { enumerable: true, get: function () { return ad_expect_1.AdExpect; } });
var ad_reg_table_1 = require("./ad-reg-table");
Object.defineProperty(exports, "AdRegTable", { enumerable: true, get: function () { return ad_reg_table_1.AdRegTable; } });
var ad_model_1 = require("./ad-model");
Object.defineProperty(exports, "AdModel", { enumerable: true, get: function () { return ad_model_1.AdModel; } });
var ad_reg_body_1 = require("./ad-reg-body");
Object.defineProperty(exports, "AdRegBody", { enumerable: true, get: function () { return ad_reg_body_1.AdRegBody; } });

},{"./ad-consts":1,"./ad-expect":2,"./ad-field":3,"./ad-filters":4,"./ad-model":5,"./ad-reg-bar":6,"./ad-reg-body":7,"./ad-reg-table":8,"./ad-register":9,"./ad-tools":10}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdNation = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
class AdNation extends adcommon_1.AdRegister {
    constructor(expect) {
        super(expect, "paises");
        this.addView(new adcommon_1.AdField({
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addView(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.BOOLEAN,
        }));
        this.addView(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
    }
}
exports.AdNation = AdNation;

},{"adcommon":11,"qinpel-cps":15}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegion = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
class AdRegion extends adcommon_1.AdRegister {
    constructor(expect) {
        super(expect, "regioes");
        this.addView(new adcommon_1.AdField({
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addView(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.BOOLEAN,
        }));
        this.addView(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
    }
}
exports.AdRegion = AdRegion;

},{"adcommon":11,"qinpel-cps":15}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
const qinpel_res_1 = require("qinpel-res");
const ad_nation_1 = require("./ad-nation");
const ad_region_1 = require("./ad-region");
class Menu extends qinpel_cps_1.QinColumn {
    constructor() {
        super();
        this.qinRegion = new qinpel_cps_1.QinButton({ label: new qinpel_cps_1.QinLabel("Região") });
        this.qinNation = new qinpel_cps_1.QinButton({ label: new qinpel_cps_1.QinLabel("País") });
        this.qinRegion.install(this);
        this.qinRegion.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.qinpel.manager.newFrame("Região", "adpeople", adcommon_1.AdTools.newAdOption(adcommon_1.AdModules.REGION, [adcommon_1.AdScope.ALL]));
                this.qinpel.frame.close();
            }
        });
        this.qinNation.install(this);
        this.qinNation.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.qinpel.manager.newFrame("País", "adpeople", adcommon_1.AdTools.newAdOption(adcommon_1.AdModules.NATION, [adcommon_1.AdScope.ALL]));
                this.qinpel.frame.close();
            }
        });
    }
}
function startUp() {
    const module = qinpel_cps_1.QinTools.qinpel().frame.getOption(adcommon_1.AdOptions.MODULE);
    const scopes = qinpel_cps_1.QinTools.qinpel().frame.getOption(adcommon_1.AdOptions.SCOPES);
    const filters = qinpel_cps_1.QinTools.qinpel().frame.getOption(adcommon_1.AdOptions.FILTERS);
    switch (module) {
        case adcommon_1.AdModules.REGION:
            return new ad_region_1.AdRegion(new adcommon_1.AdExpect({
                scopes,
                filters,
                waiters: new qinpel_res_1.QinWaiters().addWaiter((result) => {
                    this.qinpel().frame.sendWaiters(result);
                }),
            }));
        case adcommon_1.AdModules.NATION:
            return new ad_nation_1.AdNation(new adcommon_1.AdExpect({
                scopes,
                filters,
                waiters: new qinpel_res_1.QinWaiters().addWaiter((result) => {
                    this.qinpel().frame.sendWaiters(result);
                }),
            }));
        default:
            return new Menu();
    }
}
startUp().style.putAsBody();

},{"./ad-nation":12,"./ad-region":13,"adcommon":11,"qinpel-cps":15,"qinpel-res":38}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = exports.QinExplorer = exports.QinEdit = exports.QinBase = exports.QinTools = exports.QinPath = exports.QinCombo = exports.QinColumn = exports.QinLine = exports.QinButton = exports.QinMenuItem = exports.QinMenu = exports.QinMutantsArm = exports.QinMutants = exports.QinChooser = exports.QinField = exports.qinAssetUrl = exports.QinAsset = exports.QinPanel = exports.QinTabs = exports.QinIcon = exports.QinString = exports.QinLabel = exports.QinBaseStyle = exports.QinBoolean = void 0;
var qin_boolean_1 = require("./qin-boolean");
Object.defineProperty(exports, "QinBoolean", { enumerable: true, get: function () { return qin_boolean_1.QinBoolean; } });
var qin_base_style_1 = require("./qin-base-style");
Object.defineProperty(exports, "QinBaseStyle", { enumerable: true, get: function () { return qin_base_style_1.QinBaseStyle; } });
var qin_label_1 = require("./qin-label");
Object.defineProperty(exports, "QinLabel", { enumerable: true, get: function () { return qin_label_1.QinLabel; } });
var qin_string_1 = require("./qin-string");
Object.defineProperty(exports, "QinString", { enumerable: true, get: function () { return qin_string_1.QinString; } });
var qin_icon_1 = require("./qin-icon");
Object.defineProperty(exports, "QinIcon", { enumerable: true, get: function () { return qin_icon_1.QinIcon; } });
var qin_tabs_1 = require("./qin-tabs");
Object.defineProperty(exports, "QinTabs", { enumerable: true, get: function () { return qin_tabs_1.QinTabs; } });
var qin_panel_1 = require("./qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_assets_1 = require("./qin-assets");
Object.defineProperty(exports, "QinAsset", { enumerable: true, get: function () { return qin_assets_1.QinAsset; } });
var qin_assets_2 = require("./qin-assets");
Object.defineProperty(exports, "qinAssetUrl", { enumerable: true, get: function () { return qin_assets_2.qinAssetUrl; } });
var qin_field_1 = require("./qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_chooser_1 = require("./qin-chooser");
Object.defineProperty(exports, "QinChooser", { enumerable: true, get: function () { return qin_chooser_1.QinChooser; } });
var qin_mutants_1 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutants", { enumerable: true, get: function () { return qin_mutants_1.QinMutants; } });
var qin_mutants_2 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutantsArm", { enumerable: true, get: function () { return qin_mutants_2.QinMutantsArm; } });
var qin_menu_1 = require("./qin-menu");
Object.defineProperty(exports, "QinMenu", { enumerable: true, get: function () { return qin_menu_1.QinMenu; } });
var qin_menu_2 = require("./qin-menu");
Object.defineProperty(exports, "QinMenuItem", { enumerable: true, get: function () { return qin_menu_2.QinMenuItem; } });
var qin_button_1 = require("./qin-button");
Object.defineProperty(exports, "QinButton", { enumerable: true, get: function () { return qin_button_1.QinButton; } });
var qin_line_1 = require("./qin-line");
Object.defineProperty(exports, "QinLine", { enumerable: true, get: function () { return qin_line_1.QinLine; } });
var qin_column_1 = require("./qin-column");
Object.defineProperty(exports, "QinColumn", { enumerable: true, get: function () { return qin_column_1.QinColumn; } });
var qin_combo_1 = require("./qin-combo");
Object.defineProperty(exports, "QinCombo", { enumerable: true, get: function () { return qin_combo_1.QinCombo; } });
var qin_path_1 = require("./qin-path");
Object.defineProperty(exports, "QinPath", { enumerable: true, get: function () { return qin_path_1.QinPath; } });
var qin_tools_1 = require("./qin-tools");
Object.defineProperty(exports, "QinTools", { enumerable: true, get: function () { return qin_tools_1.QinTools; } });
var qin_base_1 = require("./qin-base");
Object.defineProperty(exports, "QinBase", { enumerable: true, get: function () { return qin_base_1.QinBase; } });
var qin_edit_1 = require("./qin-edit");
Object.defineProperty(exports, "QinEdit", { enumerable: true, get: function () { return qin_edit_1.QinEdit; } });
var qin_explorer_1 = require("./qin-explorer");
Object.defineProperty(exports, "QinExplorer", { enumerable: true, get: function () { return qin_explorer_1.QinExplorer; } });
var qin_integer_1 = require("./qin-integer");
Object.defineProperty(exports, "QinInteger", { enumerable: true, get: function () { return qin_integer_1.QinInteger; } });

},{"./qin-assets":16,"./qin-base":18,"./qin-base-style":17,"./qin-boolean":19,"./qin-button":20,"./qin-chooser":21,"./qin-column":22,"./qin-combo":23,"./qin-edit":24,"./qin-explorer":25,"./qin-field":26,"./qin-icon":27,"./qin-integer":28,"./qin-label":29,"./qin-line":30,"./qin-menu":31,"./qin-mutants":32,"./qin-panel":33,"./qin-path":34,"./qin-string":35,"./qin-tabs":36,"./qin-tools":37}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
    QinAsset["ExplorerMovie"] = "explorer-movie.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["BackgroundNormal24"] = "background-normal-24.png";
    QinAsset["BackgroundLight25"] = "background-light-25.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["ExplorerFile"] = "explorer-file.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["BackgroundNormal13"] = "background-normal-13.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["SourceSerifPro"] = "source-serif-pro.ttf";
    QinAsset["BackgroundDark"] = "background-dark.png";
    QinAsset["BackgroundDark23"] = "background-dark-23.png";
    QinAsset["BackgroundNormal2"] = "background-normal-2.png";
    QinAsset["BackgroundNormal4"] = "background-normal-4.png";
    QinAsset["BackgroundNormal25"] = "background-normal-25.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FrameResize"] = "frame-resize.png";
    QinAsset["BackgroundDark18"] = "background-dark-18.png";
    QinAsset["Qinpel"] = "qinpel.png";
    QinAsset["BackgroundLight12"] = "background-light-12.png";
    QinAsset["ExplorerZipped"] = "explorer-zipped.png";
    QinAsset["BackgroundNormal29"] = "background-normal-29.png";
    QinAsset["BackgroundDark26"] = "background-dark-26.png";
    QinAsset["Qinpel48"] = "qinpel-48.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["BackgroundLight13"] = "background-light-13.png";
    QinAsset["BackgroundDark9"] = "background-dark-9.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
    QinAsset["BackgroundDark5"] = "background-dark-5.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["BackgroundDark14"] = "background-dark-14.png";
    QinAsset["BackgroundLight4"] = "background-light-4.png";
    QinAsset["BackgroundLight5"] = "background-light-5.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["BackgroundDark1"] = "background-dark-1.png";
    QinAsset["BackgroundNormal18"] = "background-normal-18.png";
    QinAsset["SourceSansPro"] = "source-sans-pro.ttf";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["BackgroundNormal23"] = "background-normal-23.png";
    QinAsset["BackgroundLight20"] = "background-light-20.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["ExplorerExec"] = "explorer-exec.png";
    QinAsset["FaceAdd"] = "face-add.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["ExplorerApps"] = "explorer-apps.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["BackgroundNormal1"] = "background-normal-1.png";
    QinAsset["BackgroundLight1"] = "background-light-1.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["ExplorerImage"] = "explorer-image.png";
    QinAsset["BackgroundNormal12"] = "background-normal-12.png";
    QinAsset["ExplorerMusic"] = "explorer-music.png";
    QinAsset["BackgroundLight7"] = "background-light-7.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["LoginKey"] = "login-key.png";
    QinAsset["BackgroundLight24"] = "background-light-24.png";
    QinAsset["BackgroundDark27"] = "background-dark-27.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["BackgroundLight"] = "background-light.png";
    QinAsset["BackgroundNormal20"] = "background-normal-20.png";
    QinAsset["BackgroundDark21"] = "background-dark-21.png";
    QinAsset["FrameStatusInfo"] = "frame-status-info.png";
    QinAsset["BackgroundLight19"] = "background-light-19.png";
    QinAsset["BackgroundDark22"] = "background-dark-22.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["BackgroundDark24"] = "background-dark-24.png";
    QinAsset["BackgroundLight11"] = "background-light-11.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["BackgroundDark4"] = "background-dark-4.png";
    QinAsset["BackgroundNormal26"] = "background-normal-26.png";
    QinAsset["BackTiny01"] = "back-tiny-01.png";
    QinAsset["BackgroundNormal21"] = "background-normal-21.png";
    QinAsset["BackgroundNormal15"] = "background-normal-15.png";
    QinAsset["BackgroundNormal5"] = "background-normal-5.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["BackgroundNormal6"] = "background-normal-6.png";
    QinAsset["BackgroundLight28"] = "background-light-28.png";
    QinAsset["BackgroundDark6"] = "background-dark-6.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["ExplorerDir"] = "explorer-dir.png";
    QinAsset["FaceCircle"] = "face-circle.png";
    QinAsset["BackgroundLight0"] = "background-light-0.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["BackgroundNormal16"] = "background-normal-16.png";
    QinAsset["BackgroundNormal8"] = "background-normal-8.png";
    QinAsset["BackgroundNormal19"] = "background-normal-19.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["BackgroundLight14"] = "background-light-14.png";
    QinAsset["BackgroundLight8"] = "background-light-8.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["BackgroundDark10"] = "background-dark-10.png";
    QinAsset["BackgroundLight22"] = "background-light-22.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["BackgroundDark8"] = "background-dark-8.png";
    QinAsset["BackgroundNormal27"] = "background-normal-27.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["BackgroundNormal11"] = "background-normal-11.png";
    QinAsset["BackgroundLight18"] = "background-light-18.png";
    QinAsset["BackgroundLight17"] = "background-light-17.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["BackgroundLight10"] = "background-light-10.png";
    QinAsset["BackgroundDark15"] = "background-dark-15.png";
    QinAsset["BackgroundNormal17"] = "background-normal-17.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["BackgroundLight16"] = "background-light-16.png";
    QinAsset["BackgroundLight27"] = "background-light-27.png";
    QinAsset["BackgroundDark17"] = "background-dark-17.png";
    QinAsset["BackgroundLight23"] = "background-light-23.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["BackgroundDark13"] = "background-dark-13.png";
    QinAsset["BackgroundNormal28"] = "background-normal-28.png";
    QinAsset["BackgroundNormal9"] = "background-normal-9.png";
    QinAsset["BackgroundNormal10"] = "background-normal-10.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["BackgroundNormal14"] = "background-normal-14.png";
    QinAsset["FrameMinimize"] = "frame-minimize.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["BackgroundLight15"] = "background-light-15.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["BackgroundLight9"] = "background-light-9.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["BackgroundNormal0"] = "background-normal-0.png";
    QinAsset["FrameMenu"] = "frame-menu.png";
    QinAsset["BackgroundDark0"] = "background-dark-0.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["BackgroundLight2"] = "background-light-2.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FrameStatusError"] = "frame-status-error.png";
    QinAsset["BackgroundNormal"] = "background-normal.png";
    QinAsset["FrameMaximize"] = "frame-maximize.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["BackgroundDark28"] = "background-dark-28.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["BackgroundDark25"] = "background-dark-25.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["BackgroundDark3"] = "background-dark-3.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["BackgroundDark11"] = "background-dark-11.png";
    QinAsset["BackgroundLight3"] = "background-light-3.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["BackgroundDark29"] = "background-dark-29.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["BackgroundDark20"] = "background-dark-20.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["BackgroundDark19"] = "background-dark-19.png";
    QinAsset["BackgroundNormal3"] = "background-normal-3.png";
    QinAsset["BackgroundNormal22"] = "background-normal-22.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["BackgroundLight6"] = "background-light-6.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["BackgroundDark2"] = "background-dark-2.png";
    QinAsset["BackgroundLight29"] = "background-light-29.png";
    QinAsset["BackgroundLight21"] = "background-light-21.png";
    QinAsset["FrameClose"] = "frame-close.png";
    QinAsset["MenuDevtools"] = "menu-devtools.ico";
    QinAsset["ExplorerCmds"] = "explorer-cmds.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["BackgroundDark16"] = "background-dark-16.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["BackgroundNormal7"] = "background-normal-7.png";
    QinAsset["BackgroundDark7"] = "background-dark-7.png";
    QinAsset["BackgroundLight26"] = "background-light-26.png";
    QinAsset["BackgroundDark12"] = "background-dark-12.png";
})(QinAsset = exports.QinAsset || (exports.QinAsset = {}));
function qinAssetUrl(asset) {
    return "/app/qinpel-app/assets/" + asset;
}
exports.qinAssetUrl = qinAssetUrl;

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBaseStyle = void 0;
const qinpel_res_1 = require("qinpel-res");
class QinBaseStyle {
    constructor(element) {
        this.element = element;
    }
    putAsBody() {
        document.body.appendChild(this.element);
        qinpel_res_1.QinSkin.styleAsBody(this.element);
    }
    delAsBody() {
        document.body.removeChild(this.element);
    }
    putAsEdit() {
        qinpel_res_1.QinSkin.styleAsEdit(this.element);
        this.element.tabIndex = 0;
    }
    putAsScroll() {
        this.element.style.overflow = "auto";
    }
    putAsMargin(margin) {
        this.element.style.margin = margin ? margin + "px" : "initial";
    }
    putAsMarginTop(margin) {
        this.element.style.marginTop = margin ? margin + "px" : "initial";
    }
    putAsMarginBottom(margin) {
        this.element.style.marginBottom = margin ? margin + "px" : "initial";
    }
    putAsMarginLeft(margin) {
        this.element.style.marginLeft = margin ? margin + "px" : "initial";
    }
    putAsMarginRight(margin) {
        this.element.style.marginRight = margin ? margin + "px" : "initial";
    }
    putAsPadding(padding) {
        this.element.style.padding = padding ? padding + "px" : "initial";
    }
    putAsPaddingTop(margin) {
        this.element.style.paddingTop = margin ? margin + "px" : "initial";
    }
    putAsPaddingBottom(margin) {
        this.element.style.paddingBottom = margin ? margin + "px" : "initial";
    }
    putAsPaddingLeft(margin) {
        this.element.style.paddingLeft = margin ? margin + "px" : "initial";
    }
    putAsPaddingRight(margin) {
        this.element.style.paddingRight = margin ? margin + "px" : "initial";
    }
    putAsAllCentered() {
        this.element.style.textAlign = "center";
        this.element.style.alignItems = "center";
        this.element.style.alignContent = "center";
        this.element.style.verticalAlign = "middle";
    }
    putAsDisplayFlex() {
        this.element.style.display = "flex";
    }
    putAsDisplayInline() {
        this.element.style.display = "inline";
    }
    putAsDisplayInlineBlock() {
        this.element.style.display = "inline-block";
    }
    putAsFlexDirectionRow() {
        this.element.style.flexDirection = "row";
    }
    putAsFlexDirectionRowReverse() {
        this.element.style.flexDirection = "row-reverse";
    }
    putAsFlexDirectionColumn() {
        this.element.style.flexDirection = "column";
    }
    putAsFlexDirectionColumnReverse() {
        this.element.style.flexDirection = "column-reverse";
    }
    putAsFlexWrap() {
        this.element.style.flexWrap = "wrap";
    }
    putAsFlexWrapNot() {
        this.element.style.flexWrap = "nowrap";
    }
    putAsFlexWrapReverse() {
        this.element.style.flexWrap = "wrap-reverse";
    }
    putAsFlexMin() {
        this.element.style.flex = "none";
    }
    putAsFlexMax() {
        this.element.style.flex = "auto";
    }
    putAsWidth(width) {
        if (width != null && width != undefined) {
            this.element.style.width = width + "px";
        }
    }
    putAsHeight(height) {
        if (height != null && height != undefined) {
            this.element.style.height = height + "px";
        }
    }
    putAsSize(width, height) {
        if (width != null && width != undefined) {
            this.element.style.width = width + "px";
        }
        if (height != null && height != undefined) {
            this.element.style.height = height + "px";
        }
    }
    putAsMinWidth(width) {
        if (width != null && width != undefined) {
            this.element.style.minWidth = width + "px";
        }
    }
    putAsMinHeight(height) {
        if (height != null && height != undefined) {
            this.element.style.minHeight = height + "px";
        }
    }
    putAsMinSize(width, height) {
        if (width != null && width != undefined) {
            this.element.style.minWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.element.style.minHeight = height + "px";
        }
    }
    putAsMaxWidth(width) {
        if (width != null && width != undefined) {
            this.element.style.maxWidth = width + "px";
        }
    }
    putAsMaxHeight(height) {
        if (height != null && height != undefined) {
            this.element.style.maxHeight = height + "px";
        }
    }
    putAsMaxSize(width, height) {
        if (width != null && width != undefined) {
            this.element.style.maxWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.element.style.maxHeight = height + "px";
        }
    }
    putAsForeground(foreground) {
        this.element.style.color = foreground;
    }
    putAsBackground(background) {
        this.element.style.background = background;
    }
    putAsBackAsset(asset) {
        this.element.style.backgroundImage = "url('/app/qinpel-app/assets/" + asset + "')";
    }
    putAsBackInitial() {
        this.element.style.backgroundImage = "initial";
    }
    putAsDisabledSelection() {
        qinpel_res_1.QinSkin.disableSelection(this.element);
    }
}
exports.QinBaseStyle = QinBaseStyle;

},{"qinpel-res":38}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tools_1 = require("./qin-tools");
class QinBase {
    constructor() {
        this._baseParent = null;
        this._baseChildren = [];
        this._baseDisplay = "initial";
        this._baseVisibility = "initial";
        this._style = null;
    }
    get qinpel() {
        return qin_tools_1.QinTools.qinpel();
    }
    get style() {
        if (this._style == null) {
            this._style = new qin_base_style_1.QinBaseStyle(this.getMain());
        }
        return this._style;
    }
    install(onBase) {
        this._baseParent = onBase;
        this._baseParent.appendChild(this);
    }
    unInstall() {
        this._baseParent.removeChild(this);
    }
    reInstall() {
        this._baseParent.appendChild(this);
    }
    unDisplay() {
        if (this.getMain().style.display !== "none") {
            this._baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    }
    reDisplay() {
        this.getMain().style.display = this._baseDisplay;
    }
    unVisible() {
        if (this.getMain().style.display !== "hidden") {
            this._baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    }
    reVisible() {
        this.getMain().style.visibility = this._baseVisibility;
    }
    appendChild(child) {
        this._baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }
    removeChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    }
    children() {
        return this._baseChildren;
    }
    clearChildren() {
        for (const child of this._baseChildren) {
            this.getMain().removeChild(child.getMain());
        }
        this._baseChildren = [];
    }
    addAction(action) {
        qinpel_res_1.QinArm.addAction(this.getMain(), action);
    }
    putTabIndex(index) {
        this.getMain().tabIndex = index;
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":17,"./qin-tools":37,"qinpel-res":38}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBoolean = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinBoolean extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCircle);
        this._value = false;
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.style.putAsEdit();
        this._qinSpan.style.putAsDisplayFlex();
        this._qinSpan.style.putAsAllCentered();
        this._qinSpan.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.toggle();
            }
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._value;
    }
    setData(data) {
        this._value = data;
        this.updateIcon();
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinSpan() {
        return this._qinSpan;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateIcon();
    }
    updateIcon() {
        if (this._value) {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceConfirm);
        }
        else {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceCircle);
        }
    }
    toggle() {
        this._value = !this._value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":16,"./qin-edit":24,"./qin-icon":27,"./qin-label":29,"./qin-line":30}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("button");
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options === null || options === void 0 ? void 0 : options.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }
    getMain() {
        return this._elMain;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get qinLabel() {
        return this._qinLabel;
    }
}
exports.QinButton = QinButton;
const styles = {
    applyOnButton: (el) => {
        qinpel_res_1.QinSkin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    },
};

},{"./qin-base":18,"qinpel-res":38}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinChooser = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_combo_1 = require("./qin-combo");
const qin_edit_1 = require("./qin-edit");
const qin_explorer_1 = require("./qin-explorer");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
const qin_string_1 = require("./qin-string");
class QinChooser extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinUpper = new qin_line_1.QinLine();
        this._qinConfirm = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceConfirm),
        });
        this._qinFolder = new qin_string_1.QinString();
        this._qinExtensions = new qin_combo_1.QinCombo();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceSearch),
        });
        this._qinUnder = new qin_panel_1.QinPanel();
        this._qinExplorer = new qin_explorer_1.QinExplorer();
        this._listeners = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = (options === null || options === void 0 ? void 0 : options.operation) ? options.operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = (options === null || options === void 0 ? void 0 : options.descriptors) ? options.descriptors : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options === null || options === void 0 ? void 0 : options.singleSelection : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
    }
    initMain() {
        this._qinUpper.install(this._qinMain);
        this._qinUnder.install(this._qinMain);
    }
    initUpper() {
        this._qinUpper.style.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                let data = this.getData();
                for (const chosen of this._listeners) {
                    chosen(data);
                }
                qinEvent.consumed();
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.style.putAsMinWidth(100);
        this._qinFolder.style.putAsFlexMax();
        this._qinFolder.addAction((qinEvent) => {
            if (qinEvent.isEnter) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.style.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
    }
    initUnder() {
        this._qinUnder.style.putAsScroll();
        this._qinUnder.style.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
        this._qinExplorer.singleSelection = this._singleSelection;
    }
    initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: "All Files (*.*)",
                value: "*",
                selected: true,
            });
            this._qinExplorer.extensions = [];
        }
        else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0,
                });
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinExplorer.getData();
    }
    setData(data) {
        this._qinExplorer.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinUpper() {
        return this._qinUpper;
    }
    get qinConfirm() {
        return this._qinConfirm;
    }
    get qinFolder() {
        return this._qinFolder;
    }
    get qinExtensions() {
        return this._qinExtensions;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinUnder() {
        return this._qinUnder;
    }
    get qinExplorer() {
        return this._qinExplorer;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
        this._qinExplorer.nature = value;
    }
    get operation() {
        return this._operation;
    }
    set operation(value) {
        this._operation = value;
    }
    get descriptors() {
        return this._descriptors;
    }
    set descriptors(value) {
        this._descriptors = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this._qinExplorer.singleSelection = value;
    }
    loadFolder() {
        this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
            this._qinFolder.setData(loaded);
        });
    }
    addChosen(chosen) {
        this._listeners.push(chosen);
        return this;
    }
}
exports.QinChooser = QinChooser;

},{"./qin-assets":16,"./qin-button":20,"./qin-column":22,"./qin-combo":23,"./qin-edit":24,"./qin-explorer":25,"./qin-icon":27,"./qin-line":30,"./qin-panel":33,"./qin-string":35,"qinpel-res":38}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_base_1 = require("./qin-base");
class QinColumn extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinColumn = QinColumn;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.flexWrap = "nowrap";
    },
};

},{"./qin-base":18}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("select");
        this.style.putAsEdit();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (let item of options.items) {
                this.addItem(item);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.selected) {
            this.setData(options.selected);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    addItem(item) {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        this._elMain.appendChild(option);
        return this;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":24}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
}
exports.QinEdit = QinEdit;

},{"./qin-base":18}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinExplorer = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinExplorer extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._folderActual = "";
        this._folderServer = "";
        this._items = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options.singleSelection : false;
        this.initMain();
    }
    initMain() {
        styles.applyOnMain(this._qinMain.getMain());
        this._qinMain.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.cleanSelection();
            }
        });
        this._qinMain.style.putAsDisabledSelection();
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        this._items.forEach((item) => {
            if (item.isSelected()) {
                result.push(qinpel_res_1.QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
            }
        });
        return result;
    }
    setData(data) {
        this.clean();
        if (data && data.length > 0) {
            let folderRoot = qinpel_res_1.QinSoul.foot.getParent(data[0]);
            this.load(folderRoot, (_) => {
                for (const itemPath of data) {
                    let itemRoot = qinpel_res_1.QinSoul.foot.getParent(itemPath);
                    let itemName = qinpel_res_1.QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        this.qinpel.frame.statusError(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            this.qinpel.frame.statusError(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }
    get qinMain() {
        return this._qinMain;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
    }
    get extensions() {
        return this._extensions;
    }
    set extensions(value) {
        this._extensions = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this.updateSingleSelection();
    }
    get folderActual() {
        return this._folderActual;
    }
    get folderServer() {
        return this._folderServer;
    }
    updateSingleSelection() {
        if (this._singleSelection) {
            let alreadyHas = false;
            for (const item of this._items) {
                if (item.isSelected()) {
                    if (alreadyHas) {
                        item.unselect();
                    }
                    else {
                        alreadyHas = true;
                    }
                }
            }
        }
    }
    load(folder, onLoad) {
        this.clean();
        this.qinpel
            .post("/dir/list", { path: folder })
            .then((res) => {
            this._folderActual = folder;
            for (let line of qinpel_res_1.QinSoul.body.getTextLines(res.data)) {
                let lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.startsWith("P: ")) {
                    this._folderServer = lineValue;
                    if (onLoad) {
                        onLoad(lineValue);
                    }
                }
                else if (line.startsWith("D: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.DIRECTORIES) {
                        this.newDir(lineValue);
                    }
                }
                else if (line.startsWith("F: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.FILES) {
                        let extension = qinpel_res_1.QinSoul.foot.getFileExtension(lineValue);
                        let passedExtension = true;
                        if (this._extensions && this._extensions.length > 0) {
                            passedExtension = this._extensions.indexOf(extension) > -1;
                        }
                        if (passedExtension) {
                            this.newFile(lineValue, extension);
                        }
                    }
                }
            }
        })
            .catch((err) => {
            this.qinpel.frame.statusError(err, "{qinpel-cps}(ErrCode-000003)");
        });
    }
    reload(onLoad) {
        this.load(this._folderServer, onLoad);
    }
    goFolderUp(onLoad) {
        let parent = qinpel_res_1.QinFoot.getParent(this._folderServer);
        if (parent) {
            this.load(parent, onLoad);
        }
    }
    clean() {
        this._qinMain.getMain().innerHTML = "";
        this._items = [];
        this._folderActual = "";
        this._folderServer = "";
    }
    cleanSelection() {
        for (const item of this._items) {
            item.unselect();
        }
    }
    select(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        }
        else {
            return false;
        }
    }
    unselect(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.unselect();
            return true;
        }
        else {
            return false;
        }
    }
    newDir(name) {
        this.newItem(name, "explorer-dir.png");
    }
    newFile(name, extension) {
        this.newItem(name, getIconName(extension));
    }
    newItem(name, icon) {
        const item = new Item(this, name, icon);
        item.install(this._qinMain.getMain());
        this._items.push(item);
    }
}
exports.QinExplorer = QinExplorer;
class Item {
    constructor(explorer, fileName, iconName) {
        this.divItem = document.createElement("div");
        this.divItemBody = document.createElement("div");
        this.spanIcon = document.createElement("span");
        this.imgIcon = document.createElement("img");
        this.spanText = document.createElement("span");
        this.selected = false;
        this.explorer = explorer;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }
    initItem() {
        styles.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        styles.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        styles.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        styles.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel_res_1.QinSoul.arm.addAction(this.divItem, (qinEvent) => {
            if (qinEvent.isPrimary) {
                this.divItem.focus();
                this.toggle();
                qinEvent.consumed();
            }
        });
    }
    install(on) {
        on.appendChild(this.divItem);
    }
    select() {
        styles.applyOnDivSelect(this.divItem);
        this.selected = true;
    }
    unselect() {
        styles.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    }
    toggle() {
        if (this.selected) {
            this.unselect();
        }
        else {
            if (this.explorer.singleSelection) {
                this.explorer.cleanSelection();
            }
            this.select();
        }
    }
    getName() {
        return this.fileName;
    }
    isSelected() {
        return this.selected;
    }
}
function getIconName(fromExtension) {
    let result = "explorer-file.png";
    if (qinpel_res_1.QinSoul.foot.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileZipped(fromExtension)) {
        result = "explorer-zipped.png";
    }
    return result;
}
const styles = {
    applyOnMain: (el) => {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.overflow = "auto";
        el.style.minWidth = "160px";
        el.style.minHeight = "160px";
        el.tabIndex = 0;
    },
    applyOnDivItem: (el) => {
        el.style.margin = "2px";
        el.style.padding = "9px";
        el.style.display = "inline-block";
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "1px solid #360045";
        el.style.borderRadius = "3px";
        el.style.color = "#270036";
        el.addEventListener("focus", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #360045";
        });
    },
    applyOnDivItemBody: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "96px";
    },
    applyOnSpanIcon: (el) => {
        el.style.textAlign = "center";
    },
    applyOnSpanText: (el) => {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (el) => {
        el.style.backgroundColor = "#faefff";
    },
    applyOnDivUnSelect: (el) => {
        el.style.backgroundColor = "#ffffff";
    },
};

},{"./qin-edit":24,"./qin-panel":33,"qinpel-res":38}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_label_1 = require("./qin-label");
class QinField extends qin_edit_1.QinEdit {
    constructor(title, edit) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinLabel = new qin_label_1.QinLabel();
        this._qinEdit = null;
        this._qinLabel.setTitle(title);
        this._qinLabel.install(this._qinMain);
        this._qinEdit = edit;
        this._qinEdit.install(this._qinMain);
        this._qinMain.getMain().style.marginRight = "5px";
        this._qinMain.getMain().style.marginBottom = "5px";
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinEdit.getData();
    }
    setData(data) {
        this._qinEdit.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinLabel() {
        return this._qinLabel;
    }
    get qinEdit() {
        return this._qinEdit;
    }
}
exports.QinField = QinField;

},{"./qin-column":22,"./qin-edit":24,"./qin-label":29}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_base_1 = require("./qin-base");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL) {
        super();
        this._elMain = document.createElement("img");
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSoul.skin.styleSize(this._elMain, size);
    }
    getMain() {
        return this._elMain;
    }
    change(asset) {
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":16,"./qin-base":18,"qinpel-res":38}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._elMain);
        this._elMain.style.width = "120px";
        this._elMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        const value = this._elMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this._elMain.value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this._elMain.value = "";
        }
        else {
            this._elMain.value = (data | 0).toString();
        }
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":24,"qinpel-res":38}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title) {
        super();
        this._elMain = document.createElement("span");
        if (title) {
            this._elMain.textContent = title;
        }
    }
    getMain() {
        return this._elMain;
    }
    setTitle(title) {
        this._elMain.textContent = title;
    }
    getTitle() {
        return this._elMain.textContent;
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":18}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_base_1 = require("./qin-base");
class QinLine extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (let viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinLine = QinLine;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    },
};

},{"./qin-base":18}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMenuItem = exports.QinMenu = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinMenu extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._qinMain.style.putAsEdit();
        this._qinMain.style.putAsScroll();
        if (options === null || options === void 0 ? void 0 : options.items) {
            this.setData(options.items);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        for (let child of this.children()) {
            if (child instanceof QinMenuItem) {
                result.push(child);
            }
        }
        return result;
    }
    setData(data) {
        this.clearChildren();
        for (let item of data) {
            item.install(this);
        }
    }
    putItem(item) {
        item.install(this);
    }
}
exports.QinMenu = QinMenu;
class QinMenuItem extends qin_panel_1.QinPanel {
    constructor(icon, label) {
        super();
        this._face = new qin_panel_1.QinPanel();
        this._body = new qin_column_1.QinColumn();
        this._selected = false;
        this._face.install(this);
        this._body.install(this._face);
        this._icon = icon;
        if (this._icon) {
            this._icon.install(this._body);
        }
        this._label = label;
        if (this._label) {
            this._label.install(this._body);
        }
        this.putTabIndex(0);
        this.style.putAsEdit();
        this.style.putAsMargin(3);
        this.style.putAsPadding(6);
        this.style.putAsDisplayInlineBlock();
        this.style.putAsMaxWidth(96);
        this._body.style.putAsAllCentered();
    }
    select() {
        this._face.style.putAsBackAsset(qin_assets_1.QinAsset.BackTiny01);
        this._selected = true;
    }
    unSelect() {
        this._face.style.putAsBackInitial();
        this._selected = false;
    }
    swapSelect() {
        if (this._selected) {
            this.unSelect();
        }
        else {
            this.select();
        }
    }
}
exports.QinMenuItem = QinMenuItem;

},{"./qin-assets":16,"./qin-column":22,"./qin-edit":24,"./qin-panel":33}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMutantsArm = exports.QinMutants = void 0;
const qin_boolean_1 = require("./qin-boolean");
const qin_chooser_1 = require("./qin-chooser");
const qin_combo_1 = require("./qin-combo");
const qin_explorer_1 = require("./qin-explorer");
const qin_integer_1 = require("./qin-integer");
const qin_path_1 = require("./qin-path");
const qin_string_1 = require("./qin-string");
var QinMutants;
(function (QinMutants) {
    QinMutants["BOOLEAN"] = "boolean";
    QinMutants["CHOOSER"] = "chooser";
    QinMutants["COMBO"] = "combo";
    QinMutants["EXPLORER"] = "explorer";
    QinMutants["INTEGER"] = "integer";
    QinMutants["PATH"] = "path";
    QinMutants["STRING"] = "string";
})(QinMutants = exports.QinMutants || (exports.QinMutants = {}));
function newEdit(kind, options) {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new qin_boolean_1.QinBoolean(options);
        case QinMutants.CHOOSER:
            return new qin_chooser_1.QinChooser(options);
        case QinMutants.COMBO:
            return new qin_combo_1.QinCombo(options);
        case QinMutants.EXPLORER:
            return new qin_explorer_1.QinExplorer(options);
        case QinMutants.INTEGER:
            return new qin_integer_1.QinInteger(options);
        case QinMutants.PATH:
            return new qin_path_1.QinPath(options);
        case QinMutants.STRING:
            return new qin_string_1.QinString(options);
        default:
            throw new Error("Unknown kind of mutant to create.");
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":19,"./qin-chooser":21,"./qin-combo":23,"./qin-explorer":25,"./qin-integer":28,"./qin-path":34,"./qin-string":35}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":18}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPath = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_chooser_1 = require("./qin-chooser");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
class QinPath extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._qinChooser = new qin_chooser_1.QinChooser({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.frame.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this._qinPopup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinChooser.addChosen((chosen) => {
            if (chosen && chosen.length > 0) {
                this._qinPath.setData(chosen[0]);
            }
            this._qinPopup.close();
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinPath.getData();
    }
    setData(data) {
        this._qinPath.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinChooser;
    }
    get qinPopup() {
        return this._qinPopup;
    }
}
exports.QinPath = QinPath;

},{"./qin-assets":16,"./qin-button":20,"./qin-chooser":21,"./qin-edit":24,"./qin-icon":27,"./qin-line":30,"./qin-string":35}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "text";
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this._elMain.maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7) / 3);
            this._elMain.style.width = width + "px";
        }
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this._elMain.selectionStart;
        let endPos = this._elMain.selectionEnd;
        let oldVal = this._elMain.value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") +
            data +
            (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this._elMain.value = newVal;
        this._elMain.selectionStart = startPos;
        this._elMain.selectionEnd = startPos + data.length;
    }
}
exports.QinString = QinString;

},{"./qin-edit":24,"qinpel-res":38}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTabs = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
class QinTabs extends qin_column_1.QinColumn {
    constructor(options) {
        super();
        this._qinTabs = new qin_line_1.QinLine();
        this._qinPanel = new qin_panel_1.QinPanel();
        this._tabs = [];
        this._qinTabs.install(this);
        this._qinPanel.install(this);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const tab of options === null || options === void 0 ? void 0 : options.initial) {
                this.addTab(tab);
            }
        }
    }
    get qinTabs() {
        return this._qinTabs;
    }
    get qinPanel() {
        return this._qinPanel;
    }
    addTab(tab) {
        const button = new qin_button_1.QinButton({ label: new qin_label_1.QinLabel(tab.title) });
        button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
        button.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.showViewer(tab.viewer);
            }
        });
        button.install(this._qinTabs);
        let first = this._tabs.length == 0;
        let tabRef = {
            title: tab.title,
            viewer: tab.viewer,
            button,
        };
        this._tabs.push(tabRef);
        if (first) {
            this.showViewer(tab.viewer);
        }
    }
    showTab(title) {
        for (const tab of this._tabs) {
            if (tab.title == title) {
                this.showViewer(tab.viewer);
                break;
            }
        }
    }
    showViewer(viewer) {
        this._qinPanel.clearChildren();
        viewer.install(this._qinPanel);
        for (const tab of this._tabs) {
            if (tab.viewer == viewer) {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorActive);
            }
            else {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
            }
        }
    }
}
exports.QinTabs = QinTabs;

},{"./qin-button":20,"./qin-column":22,"./qin-label":29,"./qin-line":30,"./qin-panel":33,"qinpel-res":38}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = void 0;
const refQinpel = window.frameElement.qinpel;
function qinpel() {
    return refQinpel;
}
exports.QinTools = {
    qinpel,
};

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = exports.QinSoul = exports.QinBody = exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinSkin = exports.QinStyles = void 0;
var qin_skin_1 = require("./qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_1.QinStyles; } });
var qin_skin_2 = require("./qin-skin");
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_2.QinSkin; } });
var qin_head_1 = require("./qin-head");
Object.defineProperty(exports, "QinPoint", { enumerable: true, get: function () { return qin_head_1.QinPoint; } });
var qin_head_2 = require("./qin-head");
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_head_2.QinDimension; } });
var qin_head_3 = require("./qin-head");
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_head_3.QinBounds; } });
var qin_head_4 = require("./qin-head");
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_head_4.QinGrandeur; } });
var qin_head_5 = require("./qin-head");
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_5.QinHead; } });
var qin_body_1 = require("./qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_1.QinBody; } });
var qin_soul_1 = require("./qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });
var qin_arm_1 = require("./qin-arm");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
var qin_arm_2 = require("./qin-arm");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arm_2.QinWaiters; } });
var qin_arm_3 = require("./qin-arm");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arm_3.QinPointerCalls; } });
var qin_arm_4 = require("./qin-arm");
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_4.QinArm; } });
var qin_foot_1 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
var qin_foot_2 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_2.QinFilesOperation; } });
var qin_foot_3 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_3.QinFilesDescriptor; } });
var qin_foot_4 = require("./qin-foot");
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_4.QinFoot; } });

},{"./qin-arm":39,"./qin-body":40,"./qin-foot":41,"./qin-head":42,"./qin-skin":43,"./qin-soul":44}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
class QinEvent {
    constructor(isStart, event) {
        this._event = null;
        this._point = null;
        this._stop = false;
        this._start = isStart;
        this._event = event;
        if (event instanceof MouseEvent || event instanceof TouchEvent) {
            this._point = makeEventPointer(isStart, event);
        }
    }
    get isStart() {
        return this._start;
    }
    get fromOrigin() {
        if (this._event) {
            return this._event.target;
        }
        return null;
    }
    get fromTyping() {
        return this._event instanceof KeyboardEvent;
    }
    get fromPointing() {
        return (this._event instanceof MouseEvent || this._event instanceof TouchEvent);
    }
    get hasAlt() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.altKey;
    }
    get hasCtrl() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.ctrlKey;
    }
    get hasShift() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.shiftKey;
    }
    get hasMeta() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.metaKey;
    }
    get keyTyped() {
        if (this._event instanceof KeyboardEvent) {
            return this._event.key;
        }
        return null;
    }
    get isEnter() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEnter(this._event);
        }
        return false;
    }
    get isEscape() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEscape(this._event);
        }
        return false;
    }
    get isSpace() {
        if (this._event instanceof KeyboardEvent) {
            return isKeySpace(this._event);
        }
        return false;
    }
    get isDouble() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerDouble(this._start, this._event);
        }
        return false;
    }
    get isLong() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerLong(this._start, this._event);
        }
        return false;
    }
    get point() {
        return this._point;
    }
    get pointX() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientX;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientX;
            }
        }
        return null;
    }
    get pointY() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientY;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientY;
            }
        }
        return null;
    }
    get isFirstButton() {
        if (this._event instanceof MouseEvent) {
            return isFirstButton(this._event);
        }
        return false;
    }
    get isMiddleButton() {
        if (this._event instanceof MouseEvent) {
            return isMiddleButton(this._event);
        }
        return false;
    }
    get isSecondButton() {
        if (this._event instanceof MouseEvent) {
            return isSecondButton(this._event);
        }
        return false;
    }
    get isOneFinger() {
        if (this._event instanceof TouchEvent) {
            return isOneFinger(this._event);
        }
        return false;
    }
    get isTwoFingers() {
        if (this._event instanceof TouchEvent) {
            return isTwoFingers(this._event);
        }
        return false;
    }
    get isThreeFingers() {
        if (this._event instanceof TouchEvent) {
            return isThreeFingers(this._event);
        }
        return false;
    }
    get isFourFingers() {
        if (this._event instanceof TouchEvent) {
            return isFourFingers(this._event);
        }
        return false;
    }
    get isPrimary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isPrimaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isPrimaryPoint(this._event);
        }
        return false;
    }
    get isAuxiliary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isAuxiliaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isAuxiliaryPoint(this._event);
        }
        return false;
    }
    get isSecondary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isSecondaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isSecondaryPoint(this._event);
        }
        return false;
    }
    get stop() {
        return this._stop;
    }
    consumed() {
        this._stop = true;
    }
}
exports.QinEvent = QinEvent;
class QinWaiters {
    constructor(initial) {
        this.waiters = initial ? initial : [];
    }
    addWaiter(waiter) {
        this.waiters.push(waiter);
        return this;
    }
    hasWaiter() {
        return this.waiters.length > 0;
    }
    sendWaiters(result) {
        for (const waiter of this.waiters) {
            waiter(result);
        }
    }
}
exports.QinWaiters = QinWaiters;
class QinPointerCalls {
}
exports.QinPointerCalls = QinPointerCalls;
function stopEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.cancelBubble = true;
    return false;
}
var lastEventPointer = null;
function makeEventPointer(isStart, ev) {
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev instanceof MouseEvent) {
        if (ev.clientX || ev.clientY) {
            result.posX = ev.clientX;
            result.posY = ev.clientY;
        }
    }
    else if (ev instanceof TouchEvent) {
        if (ev.touches && this._event.touches.length > 1) {
            let index = Math.floor(this._event.touches.length / 2);
            result.posX = ev.touches[index].clientX;
            result.posY = ev.touches[index].clientY;
        }
    }
    if (isStart) {
        lastEventPointer = ev;
    }
    return result;
}
function isEventPointerDouble(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif < 450;
}
function isEventPointerLong(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    let keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function isFirstButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 0;
}
function isMiddleButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 1;
}
function isSecondButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 2;
}
function isOneFinger(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 1;
}
function isTwoFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 2;
}
function isThreeFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 3;
}
function isFourFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 4;
}
function isPrimaryKey(ev) {
    return isKeyEnter(ev);
}
function isAuxiliaryKey(ev) {
    return ev.ctrlKey && ev.altKey && isKeySpace(ev);
}
function isSecondaryKey(ev) {
    return ev.ctrlKey && !ev.altKey && isKeySpace(ev);
}
function isPrimaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isFirstButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isOneFinger(ev);
    }
    return false;
}
function isAuxiliaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isMiddleButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isThreeFingers(ev);
    }
    return false;
}
function isSecondaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isSecondButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isTwoFingers(ev);
    }
    return false;
}
function addAction(element, action) {
    element.addEventListener("keydown", actKeyDown);
    element.addEventListener("keyup", actKeyUp);
    element.addEventListener("mousedown", actMouseDown);
    element.addEventListener("mouseup", actMouseUp);
    element.addEventListener("touchstart", actTouchStart);
    element.addEventListener("touchend", actTouchEnd);
    function actKeyDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addActionMain(element, action) {
    element.onkeyup = actKeyUp;
    element.onmouseup = actMouseUp;
    element.ontouchend = actTouchEnd;
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
}
function putActionProxy(destiny, origins) {
    for (const origin of origins) {
        origin.addEventListener("keydown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("keyup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mousedown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mouseup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchstart", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchend", (e) => {
            destiny.dispatchEvent(e);
        });
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (let source of sources) {
        source.onmousedown = onMoverInit;
        source.ontouchstart = onMoverInit;
        source.ondragstart = stopEvent;
    }
    function onMoverInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.ontouchmove = onMoverMove;
        document.onmousemove = onMoverMove;
        document.ontouchend = onMoverClose;
        document.onmouseup = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitEventX;
        var dragDifY = pointer.posY - dragInitEventY;
        var dragFinalX = dragInitPosX + dragDifX;
        var dragFinalY = dragInitPosY + dragDifY;
        target.style.left = (dragFinalX > 0 ? dragFinalX : 0) + "px";
        target.style.top = (dragFinalY > 0 ? dragFinalY : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onMoverClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addResizer(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitWidth = 0;
    var dragInitHeight = 0;
    for (let source of sources) {
        source.onmousedown = onResizerInit;
        source.ontouchstart = onResizerInit;
        source.ondragstart = stopEvent;
    }
    function onResizerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.ontouchmove = onResizerMove;
        document.onmousemove = onResizerMove;
        document.ontouchend = onResizerClose;
        document.onmouseup = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width =
            (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height =
            (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addScroller(target, dragCalls) {
    var dragInitX = 0;
    var dragInitY = 0;
    var dragScrollX = 0;
    var dragScrollY = 0;
    target.ondragstart = stopEvent;
    target.ontouchstart = onScrollerInit;
    target.onmousedown = onScrollerInit;
    function onScrollerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.ontouchmove = onScrollerMove;
        document.onmousemove = onScrollerMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitX;
        var dragDifY = pointer.posY - dragInitY;
        var dragNewX = dragScrollX - dragDifX;
        var dragNewY = dragScrollY - dragDifY;
        target.scrollTo(dragNewX, dragNewY);
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onScrollerClose(ev) {
        document.ontouchmove = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
exports.QinArm = {
    stopEvent,
    makeEventPointer,
    isEventPointerDouble,
    isEventPointerLong,
    isKeyInList,
    isKeyEnter,
    isKeySpace,
    isFirstButton,
    isMiddleButton,
    isSecondButton,
    isOneFinger,
    isTwoFingers,
    isThreeFingers,
    isFourFingers,
    isPrimaryPoint,
    isAuxiliaryPoint,
    isSecondaryPoint,
    addAction,
    addActionMain,
    putActionProxy,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":43}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBody = void 0;
function getCookie(name, orDefault) {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split("=");
        if (name == decodeURIComponent(cookiePair[0]).trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return orDefault;
}
function setCookie(name, value, options = {}) {
    options = Object.assign({ path: "/" }, options);
    if (!options.expires) {
        let date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        options.expires = date;
    }
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function delCookie(name, options = {}) {
    let updatedCookie = encodeURIComponent(name) + "=;  expires=Thu, 01 Jan 1970 00:00:00 GMT";
    if (options.expires) {
        delete options.expires;
    }
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
}
function getCSVRows(fromText, names) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = !names ? [] : {};
        let inside_quotes = false;
        let column_value = "";
        let column_index = 0;
        for (let char_index = 0; char_index < line.length; char_index++) {
            let actual = line.charAt(char_index);
            if (inside_quotes) {
                if (actual == '"') {
                    let next = char_index < line.length - 1 ? line.charAt(char_index + 1) : "";
                    if (next == '"') {
                        column_value += actual;
                        char_index++;
                    }
                    else {
                        inside_quotes = false;
                    }
                }
                else {
                    column_value += actual;
                }
            }
            else {
                if (actual == '"') {
                    inside_quotes = true;
                }
                else if (actual == ",") {
                    column_value = unmaskSpecialChars(column_value);
                    if (!names) {
                        row.push(column_value);
                    }
                    else {
                        let column_name = "col_" + column_index;
                        if (column_index < names.length) {
                            column_name = names[column_index];
                        }
                        row[column_name] = column_value;
                    }
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        if (!names) {
            row.push(column_value);
            result.push(row);
        }
        else {
            let column_name = "col_" + column_index;
            if (column_index < names.length) {
                column_name = names[column_index];
            }
            row[column_name] = column_value;
            result.push(row);
        }
    }
    return result;
}
function maskSpecialChars(fromText) {
    return fromText
        .replace("\\", "\\\\")
        .replace("\r", "\\r")
        .replace("\n", "\\n")
        .replace("\t", "\\t");
}
function unmaskSpecialChars(fromText) {
    return fromText
        .replace("\\\\", "\\")
        .replace("\\r", "\r")
        .replace("\\n", "\n")
        .replace("\\t", "\t");
}
function parseParameters(source) {
    let result = [];
    let open = false;
    let actual = "";
    for (const letter of Array.from(source)) {
        if (open) {
            if (letter == '"') {
                open = false;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
        else {
            if (letter == '"') {
                open = true;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else if (letter == " ") {
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
    }
    return result;
}
exports.QinBody = {
    getCookie,
    setCookie,
    delCookie,
    getTextLines,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = void 0;
var QinFilesNature;
(function (QinFilesNature) {
    QinFilesNature["BOTH"] = "both";
    QinFilesNature["DIRECTORIES"] = "directories";
    QinFilesNature["FILES"] = "files";
})(QinFilesNature = exports.QinFilesNature || (exports.QinFilesNature = {}));
var QinFilesOperation;
(function (QinFilesOperation) {
    QinFilesOperation["OPEN"] = "open";
    QinFilesOperation["SAVE"] = "save";
})(QinFilesOperation = exports.QinFilesOperation || (exports.QinFilesOperation = {}));
class QinFilesDescriptor {
}
exports.QinFilesDescriptor = QinFilesDescriptor;
function getLocation() {
    return window.location.href;
}
function isLocalHost() {
    var location = getLocation();
    var start = location.indexOf("://");
    if (start == -1) {
        start = 0;
    }
    else {
        start += 3;
    }
    location = location.substring(start);
    return location.indexOf("localhost") === 0 || location.indexOf("127.0.0.1") === 0;
}
function getSeparator(ofPath) {
    let result = "/";
    if (ofPath && ofPath.indexOf("\\") > -1) {
        result = "\\";
    }
    return result;
}
function getPathJoin(pathA, pathB) {
    if (pathA == null || pathA == undefined) {
        pathA = "";
    }
    if (pathB == null || pathB == undefined) {
        pathB = "";
    }
    if (pathA.length == 0) {
        return pathB;
    }
    else if (pathB.length == 0) {
        return pathA;
    }
    else {
        let union = "/";
        if (pathA.indexOf("\\") > -1 || pathB.indexOf("\\") > -1) {
            union = "\\";
        }
        let pathAEnd = pathA.substring(pathA.length - 1, pathA.length);
        let pathBStart = pathB.substring(0, 1);
        if (pathAEnd == union || pathBStart == union) {
            union = "";
        }
        return pathA + union + pathB;
    }
}
function getParent(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(0, last);
        }
    }
    return "";
}
function getStem(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(last + 1);
        }
    }
    return "";
}
function getFileExtension(name) {
    let position = name.lastIndexOf(".");
    if (position > -1) {
        return name.substring(position + 1);
    }
    else {
        return "";
    }
}
const appsExtensions = [
    "htm", "html", "css", "js", "jsx", "ts", "tsx", "phtml"
];
function isFileApp(extension) {
    return appsExtensions.indexOf(extension) > -1;
}
const cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
function isFileCmd(extension) {
    return cmdsExtensions.indexOf(extension) > -1;
}
const execExtensions = [
    "exe", "jar", "com", "bat", "sh"
];
function isFileExec(extension) {
    return execExtensions.indexOf(extension) > -1;
}
const imageExtensions = [
    "jpg", "jpeg", "png", "gif", "bmp"
];
function isFileImage(extension) {
    return imageExtensions.indexOf(extension) > -1;
}
const vectorExtensions = [
    "svg"
];
function isFileVector(extension) {
    return vectorExtensions.indexOf(extension) > -1;
}
const movieExtensions = [
    "avi", "mp4"
];
function isFileMovie(extension) {
    return movieExtensions.indexOf(extension) > -1;
}
const musicExtensions = [
    "wav", "mp3"
];
function isFileMusic(extension) {
    return musicExtensions.indexOf(extension) > -1;
}
const zippedExtensions = [
    "zip", "rar", "7z", "tar", "gz"
];
function isFileZipped(extension) {
    return zippedExtensions.indexOf(extension) > -1;
}
exports.QinFoot = {
    getLocation,
    isLocalHost,
    getSeparator,
    getPathJoin,
    getParent,
    getStem,
    getFileExtension,
    isFileApp,
    isFileCmd,
    isFileExec,
    isFileImage,
    isFileVector,
    isFileMovie,
    isFileMusic,
    isFileZipped,
};

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
class QinPoint {
}
exports.QinPoint = QinPoint;
;
class QinDimension {
}
exports.QinDimension = QinDimension;
;
class QinBounds {
}
exports.QinBounds = QinBounds;
;
var QinGrandeur;
(function (QinGrandeur) {
    QinGrandeur["SMALL"] = "small";
    QinGrandeur["MEDIUM"] = "medium";
    QinGrandeur["LARGE"] = "large";
})(QinGrandeur = exports.QinGrandeur || (exports.QinGrandeur = {}));
function getDeskAPI() {
    var win = window;
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.parent;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.top;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    return undefined;
}
const logged = [];
function getLogged() {
    return logged;
}
function log(message) {
    logged.push(message);
    try {
        console.log(message);
    }
    catch (_) { }
    try {
        getDeskAPI().send("logOnMain", message);
    }
    catch (_) { }
}
function logError(error, origin) {
    log(getErrorMessage(error, origin));
}
function getErrorMessage(error, origin) {
    return getTreatMessage("Problem with:", error, origin);
}
function logWarning(error, origin) {
    log(getWarningMessage(error, origin));
}
function getWarningMessage(error, origin) {
    return getTreatMessage("Checkout this:", error, origin);
}
function logSupport(error, origin) {
    log(getSupportMessage(error, origin));
}
function getSupportMessage(error, origin) {
    return getTreatMessage("Need Support on:", error, origin);
}
function getTreatMessage(prefix, error, origin) {
    var result = prefix + (error ? " " + error.toString() : "");
    if (error.response && error.response.data) {
        var errorData = error.response.data;
        if (!(typeof errorData == "string" || errorData instanceof String)) {
            errorData = JSON.stringify(errorData);
        }
        result += " - Data: " + errorData;
    }
    else {
        if (!(typeof error == "string" || error instanceof String)) {
            result += " - Data: " + JSON.stringify(error);
        }
    }
    if (origin) {
        result += " - Origin: " + origin;
    }
    const stack = (new Error("")).stack;
    if (stack) {
        result += " - Stack: " + stack;
    }
    return result;
}
function toggleDevTools() {
    try {
        getDeskAPI().send("toggleDevTools");
    }
    catch (e) {
        logError(e, "{qinpel-res}(ErrCode-000001)");
    }
}
exports.QinHead = {
    getDeskAPI,
    getLogged,
    log,
    logError,
    getErrorMessage,
    logWarning,
    getWarningMessage,
    logSupport,
    getSupportMessage,
    getTreatMessage,
    toggleDevTools,
};

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_head_1 = require("./qin-head");
exports.QinStyles = {
    ColorForeground: "#270036",
    ColorBackground: "#fffaef",
    ColorInactive: "#faefff",
    ColorActive: "#facdcd",
    FontName: "SourceSansPro",
    FontSize: "16px",
};
function styleAsBody(el) {
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.right = "0px";
    el.style.bottom = "0px";
    el.style.left = "0px";
    el.style.padding = "9px";
    el.style.overflow = "auto";
}
function styleAsEdit(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.border = "1px solid #180027";
    el.style.borderRadius = "3px";
    el.style.color = "#180027";
    el.style.backgroundColor = "#ffffff";
    el.style.fontFamily = "SourceSansPro";
    el.style.fontSize = "16px";
    el.addEventListener("focus", () => {
        el.style.outline = "none";
        el.style.backgroundColor = "#faefff";
        el.style.border = "1px solid #ae0000";
    });
    el.addEventListener("focusout", () => {
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "1px solid #180027";
    });
}
function styleMaxSizeForNotOverFlow(el, parent) {
    console.log("D1");
    if (!parent) {
        parent = el.parentElement;
        console.log("D2: " + parent);
    }
    if (parent) {
        let maxWidth = 0;
        let maxHeight = 0;
        let imediate = el;
        do {
            maxWidth = maxWidth + imediate.clientLeft;
            maxHeight = maxHeight + imediate.clientTop;
            console.log("D3: " + maxWidth);
            console.log("D4: " + maxHeight);
            imediate = imediate.parentElement;
        } while (imediate != null && imediate != parent);
        maxWidth = parent.clientWidth - maxWidth;
        maxHeight = parent.clientHeight - maxHeight;
        console.log("D5: " + maxWidth);
        console.log("D6: " + maxHeight);
        el.style.maxWidth = maxWidth + "px";
        el.style.maxHeight = maxHeight + "px";
    }
}
function styleSize(el, size) {
    if (size) {
        if (size instanceof qin_head_1.QinDimension) {
            el.style.width = size.width + "px";
            el.style.height = size.height + "px";
        }
        else {
            let dim = getDimensionSize(size);
            el.style.width = dim.width + "px";
            el.style.height = dim.height + "px";
        }
    }
}
function styleFlexMax(el) {
    el.style.flex = "1";
}
function styleFlexMin(el) {
    el.style.flex = "0";
}
function getWindowSize() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    };
}
function getWindowSizeStyle() {
    const width = getWindowSize().width;
    if (width < 600) {
        return qin_head_1.QinGrandeur.SMALL;
    }
    else if (width < 1000) {
        return qin_head_1.QinGrandeur.MEDIUM;
    }
    else {
        return qin_head_1.QinGrandeur.LARGE;
    }
}
function hideAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "hidden";
    }
}
function showAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "visible";
    }
}
function disableSelection(element) {
    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";
    element.onselectstart = qin_arm_1.QinArm.stopEvent;
}
function clearSelection() {
    setTimeout(() => {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }, 360);
}
function isElementVisibleInScroll(element) {
    if (element.parentElement) {
        if (element.offsetTop < element.parentElement.scrollTop) {
            return false;
        }
        if (element.offsetLeft < element.parentElement.scrollLeft) {
            return false;
        }
        if (element.clientWidth >
            element.parentElement.clientWidth -
                (element.offsetLeft - element.parentElement.scrollLeft)) {
            return false;
        }
        if (element.clientHeight >
            element.parentElement.clientHeight -
                (element.offsetTop - element.parentElement.scrollTop)) {
            return false;
        }
    }
    return true;
}
function getDimensionSize(size) {
    if (size == qin_head_1.QinGrandeur.LARGE) {
        return getDimensionLarge();
    }
    else if (size == qin_head_1.QinGrandeur.MEDIUM) {
        return getDimensionMedium();
    }
    else {
        return getDimensionSmall();
    }
}
const dimensionSmall = {
    width: 16,
    height: 16,
};
function getDimensionSmall() {
    return dimensionSmall;
}
const dimensionMedium = {
    width: 32,
    height: 32,
};
function getDimensionMedium() {
    return dimensionMedium;
}
const dimensionLarge = {
    width: 64,
    height: 64,
};
function getDimensionLarge() {
    return dimensionLarge;
}
exports.QinSkin = {
    styles: exports.QinStyles,
    styleAsBody,
    styleAsEdit,
    styleMaxSizeForNotOverFlow,
    styleSize,
    styleFlexMax,
    styleFlexMin,
    getWindowSize,
    getWindowSizeStyle,
    hideAllIFrames,
    showAllIFrames,
    disableSelection,
    clearSelection,
    isElementVisibleInScroll,
    getDimensionSize,
    getDimensionSmall,
    getDimensionMedium,
    getDimensionLarge,
};

},{"./qin-arm":39,"./qin-head":42}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_body_1 = require("./qin-body");
const qin_foot_1 = require("./qin-foot");
const qin_head_1 = require("./qin-head");
const qin_skin_1 = require("./qin-skin");
exports.QinSoul = {
    arm: qin_arm_1.QinArm,
    body: qin_body_1.QinBody,
    foot: qin_foot_1.QinFoot,
    head: qin_head_1.QinHead,
    skin: qin_skin_1.QinSkin,
};

},{"./qin-arm":39,"./qin-body":40,"./qin-foot":41,"./qin-head":42,"./qin-skin":43}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWNvbnN0cy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWV4cGVjdC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWZpZWxkLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtZmlsdGVycy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLW1vZGVsLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLWJhci5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy1ib2R5LmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLXRhYmxlLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnaXN0ZXIuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC10b29scy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FsbC5qcyIsImJ1aWxkL2FkLW5hdGlvbi5qcyIsImJ1aWxkL2FkLXJlZ2lvbi5qcyIsImJ1aWxkL2luZGV4LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9hbGwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1hc3NldHMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1iYXNlLXN0eWxlLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJvb2xlYW4uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1idXR0b24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1jaG9vc2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29sdW1uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29tYm8uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1lZGl0LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZXhwbG9yZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWVsZC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pbnRlZ2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1saW5lLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbWVudS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLW11dGFudHMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1wYW5lbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXBhdGguanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zdHJpbmcuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10YWJzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tdG9vbHMuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL2FsbC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWFybS5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWJvZHkuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1mb290LmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4taGVhZC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLXNraW4uanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1zb3VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1cEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZE1vZHVsZXMgPSBleHBvcnRzLkFkU2NvcGUgPSBleHBvcnRzLkFkT3B0aW9ucyA9IHZvaWQgMDtcbnZhciBBZE9wdGlvbnM7XG4oZnVuY3Rpb24gKEFkT3B0aW9ucykge1xuICAgIEFkT3B0aW9uc1tcIk1PRFVMRVwiXSA9IFwibW9kdWxlXCI7XG4gICAgQWRPcHRpb25zW1wiU0NPUEVTXCJdID0gXCJzY29wZXNcIjtcbiAgICBBZE9wdGlvbnNbXCJGSUxURVJTXCJdID0gXCJmaWx0ZXJzXCI7XG59KShBZE9wdGlvbnMgPSBleHBvcnRzLkFkT3B0aW9ucyB8fCAoZXhwb3J0cy5BZE9wdGlvbnMgPSB7fSkpO1xudmFyIEFkU2NvcGU7XG4oZnVuY3Rpb24gKEFkU2NvcGUpIHtcbiAgICBBZFNjb3BlW1wiQUxMXCJdID0gXCJhbGxcIjtcbiAgICBBZFNjb3BlW1wiU0VBUkNIXCJdID0gXCJzZWFyY2hcIjtcbiAgICBBZFNjb3BlW1wiSU5TRVJUXCJdID0gXCJpbnNlcnRcIjtcbiAgICBBZFNjb3BlW1wiRURJVFwiXSA9IFwiZWRpdFwiO1xuICAgIEFkU2NvcGVbXCJERUxFVEVcIl0gPSBcImRlbGV0ZVwiO1xufSkoQWRTY29wZSA9IGV4cG9ydHMuQWRTY29wZSB8fCAoZXhwb3J0cy5BZFNjb3BlID0ge30pKTtcbnZhciBBZE1vZHVsZXM7XG4oZnVuY3Rpb24gKEFkTW9kdWxlcykge1xuICAgIEFkTW9kdWxlc1tcIkJVU0lORVNTXCJdID0gXCJidXNpbmVzc1wiO1xuICAgIEFkTW9kdWxlc1tcIlJFR0lPTlwiXSA9IFwicmVnaW9uXCI7XG4gICAgQWRNb2R1bGVzW1wiTkFUSU9OXCJdID0gXCJuYXRpb25cIjtcbiAgICBBZE1vZHVsZXNbXCJTVEFURVwiXSA9IFwic3RhdGVcIjtcbiAgICBBZE1vZHVsZXNbXCJDSVRZXCJdID0gXCJjaXR5XCI7XG4gICAgQWRNb2R1bGVzW1wiRElTVFJJQ1RcIl0gPSBcImRpc3RyaWN0XCI7XG4gICAgQWRNb2R1bGVzW1wiUEVPUExFXCJdID0gXCJwZW9wbGVcIjtcbiAgICBBZE1vZHVsZXNbXCJQRU9QTEVfR1JPVVBcIl0gPSBcInBlb3BsZV9ncm91cFwiO1xuICAgIEFkTW9kdWxlc1tcIlBFT1BMRV9TVUJHUk9VUFwiXSA9IFwicGVvcGxlX3N1Ymdyb3VwXCI7XG59KShBZE1vZHVsZXMgPSBleHBvcnRzLkFkTW9kdWxlcyB8fCAoZXhwb3J0cy5BZE1vZHVsZXMgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtY29uc3RzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZEV4cGVjdCA9IHZvaWQgMDtcbmNsYXNzIEFkRXhwZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3Njb3BlcyA9IG9wdGlvbnMuc2NvcGVzO1xuICAgICAgICB0aGlzLl9maWx0ZXJzID0gb3B0aW9ucy5maWx0ZXJzO1xuICAgICAgICB0aGlzLl93YWl0ZXJzID0gb3B0aW9ucy53YWl0ZXJzO1xuICAgIH1cbiAgICBnZXQgc2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGVzO1xuICAgIH1cbiAgICBnZXQgZmlsdGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7XG4gICAgfVxuICAgIGdldCB3YWl0ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2FpdGVycztcbiAgICB9XG59XG5leHBvcnRzLkFkRXhwZWN0ID0gQWRFeHBlY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1leHBlY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFkRmllbGQgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcbmNsYXNzIEFkRmllbGQge1xuICAgIGNvbnN0cnVjdG9yKG5ld2VyKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmV3ZXIudGl0bGU7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuZXdlci5uYW1lO1xuICAgICAgICB0aGlzLl9raW5kID0gbmV3ZXIua2luZDtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG5ld2VyLm9wdGlvbnM7XG4gICAgICAgIHRoaXMuX2tleSA9IG5ld2VyLmtleSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgbmV3RWRpdCgpIHtcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzQXJtLm5ld0VkaXQodGhpcy5fa2luZCwgdGhpcy5fb3B0aW9ucyk7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGdldCBraW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cbiAgICBnZXQga2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xuICAgIH1cbn1cbmV4cG9ydHMuQWRGaWVsZCA9IEFkRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1maWVsZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWRGaWx0ZXJVbmlvbiA9IGV4cG9ydHMuQWRGaWx0ZXJNb2RlID0gZXhwb3J0cy5BZEZpbHRlckl0ZW0gPSBleHBvcnRzLkFkRmlsdGVycyA9IHZvaWQgMDtcbmNsYXNzIEFkRmlsdGVycyB7XG4gICAgY29uc3RydWN0b3IoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxufVxuZXhwb3J0cy5BZEZpbHRlcnMgPSBBZEZpbHRlcnM7XG5jbGFzcyBBZEZpbHRlckl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG1vZGUsIHZhbHVlLCB1bmlvbikge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3VuaW9uID0gdW5pb247XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgZ2V0IG1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHVuaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdW5pb247XG4gICAgfVxufVxuZXhwb3J0cy5BZEZpbHRlckl0ZW0gPSBBZEZpbHRlckl0ZW07XG52YXIgQWRGaWx0ZXJNb2RlO1xuKGZ1bmN0aW9uIChBZEZpbHRlck1vZGUpIHtcbiAgICBBZEZpbHRlck1vZGVbXCJFUVVBTFNcIl0gPSBcImVxdWFsc1wiO1xuICAgIEFkRmlsdGVyTW9kZVtcIkRJRkZFUkVOVFwiXSA9IFwiZGlmZmVyZW50XCI7XG4gICAgQWRGaWx0ZXJNb2RlW1wiQklHR0VSXCJdID0gXCJiaWdnZXJcIjtcbiAgICBBZEZpbHRlck1vZGVbXCJMRVNTRVJcIl0gPSBcImxlc3NlclwiO1xuICAgIEFkRmlsdGVyTW9kZVtcIkJJR0dFUl9PUl9FUVVBTFNcIl0gPSBcImJpZ2dlcl9vcl9lcXVhbHNcIjtcbiAgICBBZEZpbHRlck1vZGVbXCJMRVNTRVJfT1JfRVFVQUxTXCJdID0gXCJsZXNzZXJfb3JfZXF1YWxzXCI7XG59KShBZEZpbHRlck1vZGUgPSBleHBvcnRzLkFkRmlsdGVyTW9kZSB8fCAoZXhwb3J0cy5BZEZpbHRlck1vZGUgPSB7fSkpO1xudmFyIEFkRmlsdGVyVW5pb247XG4oZnVuY3Rpb24gKEFkRmlsdGVyVW5pb24pIHtcbiAgICBBZEZpbHRlclVuaW9uW1wiT1JcIl0gPSBcIm9yXCI7XG4gICAgQWRGaWx0ZXJVbmlvbltcIkFORFwiXSA9IFwiYW5kXCI7XG59KShBZEZpbHRlclVuaW9uID0gZXhwb3J0cy5BZEZpbHRlclVuaW9uIHx8IChleHBvcnRzLkFkRmlsdGVyVW5pb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtZmlsdGVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWRNb2RlbCA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xuY2xhc3MgQWRNb2RlbCB7XG4gICAgY29uc3RydWN0b3IodGFibGUpIHtcbiAgICAgICAgdGhpcy5fdGFibGUgPSB0YWJsZTtcbiAgICAgICAgdGhpcy5fZmllbGRzID0gW107XG4gICAgfVxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuX2ZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICB9XG4gICAgaW5zZXJ0KHZhbHVlcykge1xuICAgICAgICBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCk7XG4gICAgfVxuICAgIHNlYXJjaChmaWx0ZXJzKSB7XG4gICAgICAgIHFpbnBlbF9jcHNfMS5RaW5Ub29scy5xaW5wZWwoKTtcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlcywgZmlsdGVycykge1xuICAgICAgICBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCk7XG4gICAgfVxuICAgIGRlbGV0ZShmaWx0ZXJzKSB7XG4gICAgICAgIHFpbnBlbF9jcHNfMS5RaW5Ub29scy5xaW5wZWwoKTtcbiAgICB9XG59XG5leHBvcnRzLkFkTW9kZWwgPSBBZE1vZGVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtbW9kZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFkUmVnQmFyID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNsYXNzIEFkUmVnQmFyIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkxpbmUge1xuICAgIGNvbnN0cnVjdG9yKHJlZ2lzdGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3Rlc3QgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VBZGQsIHFpbnBlbF9yZXNfMS5RaW5HcmFuZGV1ci5NRURJVU0pO1xuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcbiAgICAgICAgdGhpcy5fdGVzdC5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl90ZXN0LnN0eWxlLnB1dEFzTWFyZ2luQm90dG9tKDMwKTtcbiAgICB9XG59XG5leHBvcnRzLkFkUmVnQmFyID0gQWRSZWdCYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctYmFyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZFJlZ0JvZHkgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcbmNsYXNzIEFkUmVnQm9keSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5QYW5lbCB7XG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fdGFicyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NvbHVtbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX2xpbmUgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcbiAgICB9XG4gICAgYWRkVGFiKHRpdGxlKSB7XG4gICAgICAgIGlmICh0aGlzLl90YWJzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMgPSBuZXcgcWlucGVsX2Nwc18xLlFpblRhYnMoKTtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb2x1bW4gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkNvbHVtbigpO1xuICAgICAgICB0aGlzLl90YWJzLmFkZFRhYih7IHRpdGxlLCB2aWV3ZXI6IHRoaXMuX2NvbHVtbiB9KTtcbiAgICAgICAgdGhpcy5fbGluZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9saW5lLmluc3RhbGwodGhpcy5fY29sdW1uKTtcbiAgICB9XG4gICAgYWRkTGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbHVtbiA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkNvbHVtbigpO1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uLmluc3RhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGluZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9saW5lLmluc3RhbGwodGhpcy5fY29sdW1uKTtcbiAgICB9XG4gICAgYWRkVmlldyhmaWVsZCkge1xuICAgICAgICB0aGlzLl9yZWcubW9kZWwuYWRkRmllbGQoZmllbGQpO1xuICAgICAgICBpZiAodGhpcy5fbGluZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlZGl0b3IgPSBxaW5wZWxfY3BzXzEuUWluTXV0YW50c0FybS5uZXdFZGl0KGZpZWxkLmtpbmQsIGZpZWxkLm9wdGlvbnMpO1xuICAgICAgICBpZiAoZmllbGQudGl0bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdlciA9IG5ldyBxaW5wZWxfY3BzXzEuUWluRmllbGQoZmllbGQudGl0bGUsIGVkaXRvcik7XG4gICAgICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzLl9saW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVkaXRvci5pbnN0YWxsKHRoaXMuX2xpbmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5BZFJlZ0JvZHkgPSBBZFJlZ0JvZHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctYm9keS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWRSZWdUYWJsZSA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xuY2xhc3MgQWRSZWdUYWJsZSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5QYW5lbCB7XG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVnID0gcmVnaXN0ZXI7XG4gICAgfVxufVxuZXhwb3J0cy5BZFJlZ1RhYmxlID0gQWRSZWdUYWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZy10YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWRSZWdpc3RlciA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xuY29uc3QgYWRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2FkLW1vZGVsXCIpO1xuY29uc3QgYWRfcmVnX2Jhcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWJhclwiKTtcbmNvbnN0IGFkX3JlZ19ib2R5XzEgPSByZXF1aXJlKFwiLi9hZC1yZWctYm9keVwiKTtcbmNvbnN0IGFkX3JlZ190YWJsZV8xID0gcmVxdWlyZShcIi4vYWQtcmVnLXRhYmxlXCIpO1xuY2xhc3MgQWRSZWdpc3RlciBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4ge1xuICAgIGNvbnN0cnVjdG9yKGV4cGVjdCwgdGFibGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYmFyID0gbmV3IGFkX3JlZ19iYXJfMS5BZFJlZ0Jhcih0aGlzKTtcbiAgICAgICAgdGhpcy5fYm9keSA9IG5ldyBhZF9yZWdfYm9keV8xLkFkUmVnQm9keSh0aGlzKTtcbiAgICAgICAgdGhpcy5fdGFibGUgPSBuZXcgYWRfcmVnX3RhYmxlXzEuQWRSZWdUYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5fZXhwZWN0ID0gZXhwZWN0O1xuICAgICAgICB0aGlzLl9tb2RlbCA9IG5ldyBhZF9tb2RlbF8xLkFkTW9kZWwodGFibGUpO1xuICAgICAgICB0aGlzLl9iYXIuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYm9keS5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl90YWJsZS5pbnN0YWxsKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgZXhwZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwZWN0O1xuICAgIH1cbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgICB9XG4gICAgYWRkVGFiKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuX2JvZHkuYWRkVGFiKHRpdGxlKTtcbiAgICB9XG4gICAgYWRkTGluZSgpIHtcbiAgICAgICAgdGhpcy5fYm9keS5hZGRMaW5lKCk7XG4gICAgfVxuICAgIGFkZFZpZXcoZmllbGQpIHtcbiAgICAgICAgdGhpcy5fYm9keS5hZGRWaWV3KGZpZWxkKTtcbiAgICB9XG59XG5leHBvcnRzLkFkUmVnaXN0ZXIgPSBBZFJlZ2lzdGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcmVnaXN0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFkVG9vbHMgPSB2b2lkIDA7XG5jb25zdCBhZF9jb25zdHNfMSA9IHJlcXVpcmUoXCIuL2FkLWNvbnN0c1wiKTtcbmZ1bmN0aW9uIG5ld0FkT3B0aW9uKG1vZHVsZSwgc2NvcGVzLCBmaWx0ZXJzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdFthZF9jb25zdHNfMS5BZE9wdGlvbnMuTU9EVUxFXSA9IG1vZHVsZTtcbiAgICByZXN1bHRbYWRfY29uc3RzXzEuQWRPcHRpb25zLlNDT1BFU10gPSBzY29wZXM7XG4gICAgcmVzdWx0W2FkX2NvbnN0c18xLkFkT3B0aW9ucy5GSUxURVJTXSA9IGZpbHRlcnM7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuQWRUb29scyA9IHtcbiAgICBuZXdBZE9wdGlvblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXRvb2xzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZFJlZ0JvZHkgPSBleHBvcnRzLkFkTW9kZWwgPSBleHBvcnRzLkFkUmVnVGFibGUgPSBleHBvcnRzLkFkRXhwZWN0ID0gZXhwb3J0cy5BZFJlZ2lzdGVyID0gZXhwb3J0cy5BZFJlZ0JhciA9IGV4cG9ydHMuQWRUb29scyA9IGV4cG9ydHMuQWRGaWVsZCA9IGV4cG9ydHMuQWRGaWx0ZXJVbmlvbiA9IGV4cG9ydHMuQWRGaWx0ZXJNb2RlID0gZXhwb3J0cy5BZEZpbHRlckl0ZW0gPSBleHBvcnRzLkFkRmlsdGVycyA9IGV4cG9ydHMuQWRNb2R1bGVzID0gZXhwb3J0cy5BZFNjb3BlID0gZXhwb3J0cy5BZE9wdGlvbnMgPSB2b2lkIDA7XG52YXIgYWRfY29uc3RzXzEgPSByZXF1aXJlKFwiLi9hZC1jb25zdHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE9wdGlvbnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2NvbnN0c18xLkFkT3B0aW9uczsgfSB9KTtcbnZhciBhZF9jb25zdHNfMiA9IHJlcXVpcmUoXCIuL2FkLWNvbnN0c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkU2NvcGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2NvbnN0c18yLkFkU2NvcGU7IH0gfSk7XG52YXIgYWRfY29uc3RzXzMgPSByZXF1aXJlKFwiLi9hZC1jb25zdHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1vZHVsZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2NvbnN0c18zLkFkTW9kdWxlczsgfSB9KTtcbnZhciBhZF9maWx0ZXJzXzEgPSByZXF1aXJlKFwiLi9hZC1maWx0ZXJzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWx0ZXJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9maWx0ZXJzXzEuQWRGaWx0ZXJzOyB9IH0pO1xudmFyIGFkX2ZpbHRlcnNfMiA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEZpbHRlckl0ZW1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcnNfMi5BZEZpbHRlckl0ZW07IH0gfSk7XG52YXIgYWRfZmlsdGVyc18zID0gcmVxdWlyZShcIi4vYWQtZmlsdGVyc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyTW9kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyc18zLkFkRmlsdGVyTW9kZTsgfSB9KTtcbnZhciBhZF9maWx0ZXJzXzQgPSByZXF1aXJlKFwiLi9hZC1maWx0ZXJzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWx0ZXJVbmlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyc180LkFkRmlsdGVyVW5pb247IH0gfSk7XG52YXIgYWRfZmllbGRfMSA9IHJlcXVpcmUoXCIuL2FkLWZpZWxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWVsZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmllbGRfMS5BZEZpZWxkOyB9IH0pO1xudmFyIGFkX3Rvb2xzXzEgPSByZXF1aXJlKFwiLi9hZC10b29sc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkVG9vbHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3Rvb2xzXzEuQWRUb29sczsgfSB9KTtcbnZhciBhZF9yZWdfYmFyXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctYmFyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdCYXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ19iYXJfMS5BZFJlZ0JhcjsgfSB9KTtcbnZhciBhZF9yZWdpc3Rlcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ2lzdGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdpc3Rlcl8xLkFkUmVnaXN0ZXI7IH0gfSk7XG52YXIgYWRfZXhwZWN0XzEgPSByZXF1aXJlKFwiLi9hZC1leHBlY3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEV4cGVjdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZXhwZWN0XzEuQWRFeHBlY3Q7IH0gfSk7XG52YXIgYWRfcmVnX3RhYmxlXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctdGFibGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ1RhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfdGFibGVfMS5BZFJlZ1RhYmxlOyB9IH0pO1xudmFyIGFkX21vZGVsXzEgPSByZXF1aXJlKFwiLi9hZC1tb2RlbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkTW9kZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX21vZGVsXzEuQWRNb2RlbDsgfSB9KTtcbnZhciBhZF9yZWdfYm9keV8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWJvZHlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ0JvZHlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ19ib2R5XzEuQWRSZWdCb2R5OyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZE5hdGlvbiA9IHZvaWQgMDtcbmNvbnN0IGFkY29tbW9uXzEgPSByZXF1aXJlKFwiYWRjb21tb25cIik7XG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcbmNsYXNzIEFkTmF0aW9uIGV4dGVuZHMgYWRjb21tb25fMS5BZFJlZ2lzdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihleHBlY3QpIHtcbiAgICAgICAgc3VwZXIoZXhwZWN0LCBcInBhaXNlc1wiKTtcbiAgICAgICAgdGhpcy5hZGRWaWV3KG5ldyBhZGNvbW1vbl8xLkFkRmllbGQoe1xuICAgICAgICAgICAgbmFtZTogXCJjb2RpZ29cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkPDs2RpZ29cIixcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuYWRkVmlldyhuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcbiAgICAgICAgICAgIG5hbWU6IFwiYXRpdm9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkF0aXZvXCIsXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5CT09MRUFOLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuYWRkVmlldyhuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcbiAgICAgICAgICAgIG5hbWU6IFwibm9tZVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTm9tZVwiLFxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1heExlbmd0aDogNjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuZXhwb3J0cy5BZE5hdGlvbiA9IEFkTmF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtbmF0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BZFJlZ2lvbiA9IHZvaWQgMDtcbmNvbnN0IGFkY29tbW9uXzEgPSByZXF1aXJlKFwiYWRjb21tb25cIik7XG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcbmNsYXNzIEFkUmVnaW9uIGV4dGVuZHMgYWRjb21tb25fMS5BZFJlZ2lzdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihleHBlY3QpIHtcbiAgICAgICAgc3VwZXIoZXhwZWN0LCBcInJlZ2lvZXNcIik7XG4gICAgICAgIHRoaXMuYWRkVmlldyhuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcbiAgICAgICAgICAgIG5hbWU6IFwiY29kaWdvXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJDw7NkaWdvXCIsXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5TVFJJTkcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmFkZFZpZXcobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XG4gICAgICAgICAgICBuYW1lOiBcImF0aXZvXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJBdGl2b1wiLFxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuQk9PTEVBTixcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmFkZFZpZXcobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XG4gICAgICAgICAgICBuYW1lOiBcIm5vbWVcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vbWVcIixcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDYwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuQWRSZWdpb24gPSBBZFJlZ2lvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZ2lvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFkY29tbW9uXzEgPSByZXF1aXJlKFwiYWRjb21tb25cIik7XG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgYWRfbmF0aW9uXzEgPSByZXF1aXJlKFwiLi9hZC1uYXRpb25cIik7XG5jb25zdCBhZF9yZWdpb25fMSA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lvblwiKTtcbmNsYXNzIE1lbnUgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5xaW5SZWdpb24gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGxhYmVsOiBuZXcgcWlucGVsX2Nwc18xLlFpbkxhYmVsKFwiUmVnacOjb1wiKSB9KTtcbiAgICAgICAgdGhpcy5xaW5OYXRpb24gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGxhYmVsOiBuZXcgcWlucGVsX2Nwc18xLlFpbkxhYmVsKFwiUGHDrXNcIikgfSk7XG4gICAgICAgIHRoaXMucWluUmVnaW9uLmluc3RhbGwodGhpcyk7XG4gICAgICAgIHRoaXMucWluUmVnaW9uLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnFpbnBlbC5tYW5hZ2VyLm5ld0ZyYW1lKFwiUmVnacOjb1wiLCBcImFkcGVvcGxlXCIsIGFkY29tbW9uXzEuQWRUb29scy5uZXdBZE9wdGlvbihhZGNvbW1vbl8xLkFkTW9kdWxlcy5SRUdJT04sIFthZGNvbW1vbl8xLkFkU2NvcGUuQUxMXSkpO1xuICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnFpbk5hdGlvbi5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnFpbk5hdGlvbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwubWFuYWdlci5uZXdGcmFtZShcIlBhw61zXCIsIFwiYWRwZW9wbGVcIiwgYWRjb21tb25fMS5BZFRvb2xzLm5ld0FkT3B0aW9uKGFkY29tbW9uXzEuQWRNb2R1bGVzLk5BVElPTiwgW2FkY29tbW9uXzEuQWRTY29wZS5BTExdKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuZnJhbWUuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RhcnRVcCgpIHtcbiAgICBjb25zdCBtb2R1bGUgPSBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCkuZnJhbWUuZ2V0T3B0aW9uKGFkY29tbW9uXzEuQWRPcHRpb25zLk1PRFVMRSk7XG4gICAgY29uc3Qgc2NvcGVzID0gcWlucGVsX2Nwc18xLlFpblRvb2xzLnFpbnBlbCgpLmZyYW1lLmdldE9wdGlvbihhZGNvbW1vbl8xLkFkT3B0aW9ucy5TQ09QRVMpO1xuICAgIGNvbnN0IGZpbHRlcnMgPSBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCkuZnJhbWUuZ2V0T3B0aW9uKGFkY29tbW9uXzEuQWRPcHRpb25zLkZJTFRFUlMpO1xuICAgIHN3aXRjaCAobW9kdWxlKSB7XG4gICAgICAgIGNhc2UgYWRjb21tb25fMS5BZE1vZHVsZXMuUkVHSU9OOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBhZF9yZWdpb25fMS5BZFJlZ2lvbihuZXcgYWRjb21tb25fMS5BZEV4cGVjdCh7XG4gICAgICAgICAgICAgICAgc2NvcGVzLFxuICAgICAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgd2FpdGVyczogbmV3IHFpbnBlbF9yZXNfMS5RaW5XYWl0ZXJzKCkuYWRkV2FpdGVyKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwoKS5mcmFtZS5zZW5kV2FpdGVycyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICBjYXNlIGFkY29tbW9uXzEuQWRNb2R1bGVzLk5BVElPTjpcbiAgICAgICAgICAgIHJldHVybiBuZXcgYWRfbmF0aW9uXzEuQWROYXRpb24obmV3IGFkY29tbW9uXzEuQWRFeHBlY3Qoe1xuICAgICAgICAgICAgICAgIHNjb3BlcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzLFxuICAgICAgICAgICAgICAgIHdhaXRlcnM6IG5ldyBxaW5wZWxfcmVzXzEuUWluV2FpdGVycygpLmFkZFdhaXRlcigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsKCkuZnJhbWUuc2VuZFdhaXRlcnMocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVudSgpO1xuICAgIH1cbn1cbnN0YXJ0VXAoKS5zdHlsZS5wdXRBc0JvZHkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5JbnRlZ2VyID0gZXhwb3J0cy5RaW5FeHBsb3JlciA9IGV4cG9ydHMuUWluRWRpdCA9IGV4cG9ydHMuUWluQmFzZSA9IGV4cG9ydHMuUWluVG9vbHMgPSBleHBvcnRzLlFpblBhdGggPSBleHBvcnRzLlFpbkNvbWJvID0gZXhwb3J0cy5RaW5Db2x1bW4gPSBleHBvcnRzLlFpbkxpbmUgPSBleHBvcnRzLlFpbkJ1dHRvbiA9IGV4cG9ydHMuUWluTWVudUl0ZW0gPSBleHBvcnRzLlFpbk1lbnUgPSBleHBvcnRzLlFpbk11dGFudHNBcm0gPSBleHBvcnRzLlFpbk11dGFudHMgPSBleHBvcnRzLlFpbkNob29zZXIgPSBleHBvcnRzLlFpbkZpZWxkID0gZXhwb3J0cy5xaW5Bc3NldFVybCA9IGV4cG9ydHMuUWluQXNzZXQgPSBleHBvcnRzLlFpblBhbmVsID0gZXhwb3J0cy5RaW5UYWJzID0gZXhwb3J0cy5RaW5JY29uID0gZXhwb3J0cy5RaW5TdHJpbmcgPSBleHBvcnRzLlFpbkxhYmVsID0gZXhwb3J0cy5RaW5CYXNlU3R5bGUgPSBleHBvcnRzLlFpbkJvb2xlYW4gPSB2b2lkIDA7XG52YXIgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9vbGVhblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jvb2xlYW5fMS5RaW5Cb29sZWFuOyB9IH0pO1xudmFyIHFpbl9iYXNlX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZS1zdHlsZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJhc2VTdHlsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jhc2Vfc3R5bGVfMS5RaW5CYXNlU3R5bGU7IH0gfSk7XG52YXIgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MYWJlbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xhYmVsXzEuUWluTGFiZWw7IH0gfSk7XG52YXIgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0cmluZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3N0cmluZ18xLlFpblN0cmluZzsgfSB9KTtcbnZhciBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl8xLlFpbkljb247IH0gfSk7XG52YXIgcWluX3RhYnNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGFic1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3RhYnNfMS5RaW5UYWJzOyB9IH0pO1xudmFyIHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGFuZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYW5lbF8xLlFpblBhbmVsOyB9IH0pO1xudmFyIHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Bc3NldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18xLlFpbkFzc2V0OyB9IH0pO1xudmFyIHFpbl9hc3NldHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJxaW5Bc3NldFVybFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18yLnFpbkFzc2V0VXJsOyB9IH0pO1xudmFyIHFpbl9maWVsZF8xID0gcmVxdWlyZShcIi4vcWluLWZpZWxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWVsZF8xLlFpbkZpZWxkOyB9IH0pO1xudmFyIHFpbl9jaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9xaW4tY2hvb3NlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNob29zZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jaG9vc2VyXzEuUWluQ2hvb3NlcjsgfSB9KTtcbnZhciBxaW5fbXV0YW50c18xID0gcmVxdWlyZShcIi4vcWluLW11dGFudHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18xLlFpbk11dGFudHM7IH0gfSk7XG52YXIgcWluX211dGFudHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTXV0YW50c0FybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX211dGFudHNfMi5RaW5NdXRhbnRzQXJtOyB9IH0pO1xudmFyIHFpbl9tZW51XzEgPSByZXF1aXJlKFwiLi9xaW4tbWVudVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbk1lbnVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9tZW51XzEuUWluTWVudTsgfSB9KTtcbnZhciBxaW5fbWVudV8yID0gcmVxdWlyZShcIi4vcWluLW1lbnVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NZW51SXRlbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX21lbnVfMi5RaW5NZW51SXRlbTsgfSB9KTtcbnZhciBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQnV0dG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYnV0dG9uXzEuUWluQnV0dG9uOyB9IH0pO1xudmFyIHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9saW5lXzEuUWluTGluZTsgfSB9KTtcbnZhciBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29sdW1uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29sdW1uXzEuUWluQ29sdW1uOyB9IH0pO1xudmFyIHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29tYm9cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jb21ib18xLlFpbkNvbWJvOyB9IH0pO1xudmFyIHFpbl9wYXRoXzEgPSByZXF1aXJlKFwiLi9xaW4tcGF0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYXRoXzEuUWluUGF0aDsgfSB9KTtcbnZhciBxaW5fdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRvb2xzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdG9vbHNfMS5RaW5Ub29sczsgfSB9KTtcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CYXNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYmFzZV8xLlFpbkJhc2U7IH0gfSk7XG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRWRpdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2VkaXRfMS5RaW5FZGl0OyB9IH0pO1xudmFyIHFpbl9leHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vcWluLWV4cGxvcmVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRXhwbG9yZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9leHBsb3Jlcl8xLlFpbkV4cGxvcmVyOyB9IH0pO1xudmFyIHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkludGVnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcjsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucWluQXNzZXRVcmwgPSBleHBvcnRzLlFpbkFzc2V0ID0gdm9pZCAwO1xudmFyIFFpbkFzc2V0O1xuKGZ1bmN0aW9uIChRaW5Bc3NldCkge1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJNb3ZpZVwiXSA9IFwiZXhwbG9yZXItbW92aWUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlVXBsb2FkXCJdID0gXCJmYWNlLXVwbG9hZC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VOZXdzXCJdID0gXCJmYWNlLW5ld3MucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlSW1hZ2VcIl0gPSBcImZhY2UtaW1hZ2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckZpbGVcIl0gPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRm9sZGVyXCJdID0gXCJmYWNlLWZvbGRlci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTWVzc2FnZVwiXSA9IFwiZmFjZS1tZXNzYWdlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiU291cmNlU2VyaWZQcm9cIl0gPSBcInNvdXJjZS1zZXJpZi1wcm8udHRmXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFya1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2FydFwiXSA9IFwiZmFjZS1jYXJ0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVSZXNpemVcIl0gPSBcImZyYW1lLXJlc2l6ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMThcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIlFpbnBlbFwiXSA9IFwicWlucGVsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlclppcHBlZFwiXSA9IFwiZXhwbG9yZXItemlwcGVkLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI5XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjZcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIlFpbnBlbDQ4XCJdID0gXCJxaW5wZWwtNDgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlVW5saW5rXCJdID0gXCJmYWNlLXVubGluay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VXaWZpXCJdID0gXCJmYWNlLXdpZmkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazVcIl0gPSBcImJhY2tncm91bmQtZGFyay01LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVVubG9ja1wiXSA9IFwiZmFjZS11bmxvY2sucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlR2VhclwiXSA9IFwiZmFjZS1nZWFyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNvbmZpcm1cIl0gPSBcImZhY2UtY29uZmlybS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTRcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmFzaFwiXSA9IFwiZmFjZS10cmFzaC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMThcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiU291cmNlU2Fuc1Byb1wiXSA9IFwic291cmNlLXNhbnMtcHJvLnR0ZlwiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1pY0Rpc2FibGVcIl0gPSBcImZhY2UtbWljLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTWljXCJdID0gXCJmYWNlLW1pYy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VFeWVEaXNhYmxlXCJdID0gXCJmYWNlLWV5ZS1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIzXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUZpbHRlclwiXSA9IFwiZmFjZS1maWx0ZXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckV4ZWNcIl0gPSBcImV4cGxvcmVyLWV4ZWMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQWRkXCJdID0gXCJmYWNlLWFkZC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGVha2VyRGlzYWJsZVwiXSA9IFwiZmFjZS1zcGVha2VyLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29udHJvbFwiXSA9IFwiZmFjZS1jb250cm9sLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNhbGVuZGFyXCJdID0gXCJmYWNlLWNhbGVuZGFyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93VXBcIl0gPSBcImZhY2UtYXJyb3ctdXAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckFwcHNcIl0gPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2hpZWxkXCJdID0gXCJmYWNlLXNoaWVsZC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VMb2NrXCJdID0gXCJmYWNlLWxvY2sucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTGlua1wiXSA9IFwiZmFjZS1saW5rLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNlbmRcIl0gPSBcImZhY2Utc2VuZC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1pbnVzXCJdID0gXCJmYWNlLW1pbnVzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUxhYmVsXCJdID0gXCJmYWNlLWxhYmVsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVVuZG9cIl0gPSBcImZhY2UtdW5kby5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVySW1hZ2VcIl0gPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDEyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTXVzaWNcIl0gPSBcImV4cGxvcmVyLW11c2ljLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0N1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC03LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1hcERpc2FibGVcIl0gPSBcImZhY2UtbWFwLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJMb2dpbktleVwiXSA9IFwibG9naW4ta2V5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRmlsZVwiXSA9IFwiZmFjZS1maWxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjFcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lU3RhdHVzSW5mb1wiXSA9IFwiZnJhbWUtc3RhdHVzLWluZm8ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0xlZnRcIl0gPSBcImZhY2UtYXJyb3ctbGVmdC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjRcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDExXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTExLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNldHRpbmdzXCJdID0gXCJmYWNlLXNldHRpbmdzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1vdmllXCJdID0gXCJmYWNlLW1vdmllLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrVGlueTAxXCJdID0gXCJiYWNrLXRpbnktMDEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIxLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC01LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNoZWNrXCJdID0gXCJmYWNlLWNoZWNrLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlSG9tZVwiXSA9IFwiZmFjZS1ob21lLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVN0YXJcIl0gPSBcImZhY2Utc3Rhci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRGlyXCJdID0gXCJleHBsb3Jlci1kaXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2lyY2xlXCJdID0gXCJmYWNlLWNpcmNsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VBdHRhY2hcIl0gPSBcImZhY2UtYXR0YWNoLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBhc3RlXCJdID0gXCJmYWNlLXBhc3RlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC04LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE5XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQbHVzXCJdID0gXCJmYWNlLXBsdXMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDhcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQaG9uZVwiXSA9IFwiZmFjZS1waG9uZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTBcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIyXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNvZ1wiXSA9IFwiZmFjZS1jb2cucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazhcIl0gPSBcImJhY2tncm91bmQtZGFyay04LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250YWN0XCJdID0gXCJmYWNlLWNvbnRhY3QucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRXhpdFwiXSA9IFwiZmFjZS1leGl0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNvbXBhc3NcIl0gPSBcImZhY2UtY29tcGFzcy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNsb3NlXCJdID0gXCJmYWNlLWNsb3NlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZURvd25sb2FkXCJdID0gXCJmYWNlLWRvd25sb2FkLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBlbmNpbFwiXSA9IFwiZmFjZS1wZW5jaWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTVcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQmVsbERpc2FibGVcIl0gPSBcImZhY2UtYmVsbC1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyN1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTdcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUVudGVyXCJdID0gXCJmYWNlLWVudGVyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw5XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC05LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDEwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VCZWxsXCJdID0gXCJmYWNlLWJlbGwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVNaW5pbWl6ZVwiXSA9IFwiZnJhbWUtbWluaW1pemUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2FtZXJhRGlzYWJsZVwiXSA9IFwiZmFjZS1jYW1lcmEtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE1LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUVyYXNlXCJdID0gXCJmYWNlLWVyYXNlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0OVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC05LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUV5ZVwiXSA9IFwiZmFjZS1leWUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lTWVudVwiXSA9IFwiZnJhbWUtbWVudS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTWFwXCJdID0gXCJmYWNlLW1hcC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGFyZVwiXSA9IFwiZmFjZS1zaGFyZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VXaWZpRGlzYWJsZVwiXSA9IFwiZmFjZS13aWZpLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZVN0YXR1c0Vycm9yXCJdID0gXCJmcmFtZS1zdGF0dXMtZXJyb3IucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lTWF4aW1pemVcIl0gPSBcImZyYW1lLW1heGltaXplLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93UmlnaHRcIl0gPSBcImZhY2UtYXJyb3ctcmlnaHQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2F2ZVwiXSA9IFwiZmFjZS1zYXZlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUJhZ1wiXSA9IFwiZmFjZS1iYWcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUmVkb1wiXSA9IFwiZmFjZS1yZWRvLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNvcHlcIl0gPSBcImZhY2UtY29weS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VFbmxhcmdlXCJdID0gXCJmYWNlLWVubGFyZ2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazNcIl0gPSBcImJhY2tncm91bmQtZGFyay0zLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNlYXJjaFwiXSA9IFwiZmFjZS1zZWFyY2gucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazExXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvY2tcIl0gPSBcImZhY2UtY2xvY2sucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2hyaW5rXCJdID0gXCJmYWNlLXNocmluay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjBcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQaG9uZURpc2FibGVcIl0gPSBcImZhY2UtcGhvbmUtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTlcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwzXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0zLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0Rvd25cIl0gPSBcImZhY2UtYXJyb3ctZG93bi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW1lcmFcIl0gPSBcImZhY2UtY2FtZXJhLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNhbmNlbFwiXSA9IFwiZmFjZS1jYW5jZWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTWFpbFwiXSA9IFwiZmFjZS1tYWlsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZURlbFwiXSA9IFwiZmFjZS1kZWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lQ2xvc2VcIl0gPSBcImZyYW1lLWNsb3NlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiTWVudURldnRvb2xzXCJdID0gXCJtZW51LWRldnRvb2xzLmljb1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJDbWRzXCJdID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBpblwiXSA9IFwiZmFjZS1waW4ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGVyc29uXCJdID0gXCJmYWNlLXBlcnNvbi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGVha2VyXCJdID0gXCJmYWNlLXNwZWFrZXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlSGVhcnRcIl0gPSBcImZhY2UtaGVhcnQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTJcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMi5wbmdcIjtcbn0pKFFpbkFzc2V0ID0gZXhwb3J0cy5RaW5Bc3NldCB8fCAoZXhwb3J0cy5RaW5Bc3NldCA9IHt9KSk7XG5mdW5jdGlvbiBxaW5Bc3NldFVybChhc3NldCkge1xuICAgIHJldHVybiBcIi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldDtcbn1cbmV4cG9ydHMucWluQXNzZXRVcmwgPSBxaW5Bc3NldFVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hc3NldHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkJhc2VTdHlsZSA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY2xhc3MgUWluQmFzZVN0eWxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIHB1dEFzQm9keSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzQm9keSh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICBkZWxBc0JvZHkoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgcHV0QXNFZGl0KCkge1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzRWRpdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQudGFiSW5kZXggPSAwO1xuICAgIH1cbiAgICBwdXRBc1Njcm9sbCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgfVxuICAgIHB1dEFzTWFyZ2luKG1hcmdpbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luID0gbWFyZ2luID8gbWFyZ2luICsgXCJweFwiIDogXCJpbml0aWFsXCI7XG4gICAgfVxuICAgIHB1dEFzTWFyZ2luVG9wKG1hcmdpbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luID8gbWFyZ2luICsgXCJweFwiIDogXCJpbml0aWFsXCI7XG4gICAgfVxuICAgIHB1dEFzTWFyZ2luQm90dG9tKG1hcmdpbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gbWFyZ2luID8gbWFyZ2luICsgXCJweFwiIDogXCJpbml0aWFsXCI7XG4gICAgfVxuICAgIHB1dEFzTWFyZ2luTGVmdChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW4gPyBtYXJnaW4gKyBcInB4XCIgOiBcImluaXRpYWxcIjtcbiAgICB9XG4gICAgcHV0QXNNYXJnaW5SaWdodChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0ID0gbWFyZ2luID8gbWFyZ2luICsgXCJweFwiIDogXCJpbml0aWFsXCI7XG4gICAgfVxuICAgIHB1dEFzUGFkZGluZyhwYWRkaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gcGFkZGluZyA/IHBhZGRpbmcgKyBcInB4XCIgOiBcImluaXRpYWxcIjtcbiAgICB9XG4gICAgcHV0QXNQYWRkaW5nVG9wKG1hcmdpbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IG1hcmdpbiA/IG1hcmdpbiArIFwicHhcIiA6IFwiaW5pdGlhbFwiO1xuICAgIH1cbiAgICBwdXRBc1BhZGRpbmdCb3R0b20obWFyZ2luKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gbWFyZ2luID8gbWFyZ2luICsgXCJweFwiIDogXCJpbml0aWFsXCI7XG4gICAgfVxuICAgIHB1dEFzUGFkZGluZ0xlZnQobWFyZ2luKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IG1hcmdpbiA/IG1hcmdpbiArIFwicHhcIiA6IFwiaW5pdGlhbFwiO1xuICAgIH1cbiAgICBwdXRBc1BhZGRpbmdSaWdodChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IG1hcmdpbiA/IG1hcmdpbiArIFwicHhcIiA6IFwiaW5pdGlhbFwiO1xuICAgIH1cbiAgICBwdXRBc0FsbENlbnRlcmVkKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYWxpZ25Db250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xuICAgIH1cbiAgICBwdXRBc0Rpc3BsYXlGbGV4KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICB9XG4gICAgcHV0QXNEaXNwbGF5SW5saW5lQmxvY2soKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICB9XG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uUm93KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgfVxuICAgIHB1dEFzRmxleERpcmVjdGlvblJvd1JldmVyc2UoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3ctcmV2ZXJzZVwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW4oKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICB9XG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uUmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtbi1yZXZlcnNlXCI7XG4gICAgfVxuICAgIHB1dEFzRmxleFdyYXAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhXcmFwTm90KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhXcmFwUmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwLXJldmVyc2VcIjtcbiAgICB9XG4gICAgcHV0QXNGbGV4TWluKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleCA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhNYXgoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4ID0gXCJhdXRvXCI7XG4gICAgfVxuICAgIHB1dEFzV2lkdGgod2lkdGgpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdXRBc0hlaWdodChoZWlnaHQpIHtcbiAgICAgICAgaWYgKGhlaWdodCAhPSBudWxsICYmIGhlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdXRBc01pbldpZHRoKHdpZHRoKSB7XG4gICAgICAgIGlmICh3aWR0aCAhPSBudWxsICYmIHdpZHRoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNaW5IZWlnaHQoaGVpZ2h0KSB7XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWluU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh3aWR0aCAhPSBudWxsICYmIHdpZHRoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCAhPSBudWxsICYmIGhlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNYXhXaWR0aCh3aWR0aCkge1xuICAgICAgICBpZiAod2lkdGggIT0gbnVsbCAmJiB3aWR0aCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWF4SGVpZ2h0KGhlaWdodCkge1xuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdXRBc01heFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAod2lkdGggIT0gbnVsbCAmJiB3aWR0aCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzRm9yZWdyb3VuZChmb3JlZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IGZvcmVncm91bmQ7XG4gICAgfVxuICAgIHB1dEFzQmFja2dyb3VuZChiYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB9XG4gICAgcHV0QXNCYWNrQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgYXNzZXQgKyBcIicpXCI7XG4gICAgfVxuICAgIHB1dEFzQmFja0luaXRpYWwoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImluaXRpYWxcIjtcbiAgICB9XG4gICAgcHV0QXNEaXNhYmxlZFNlbGVjdGlvbigpIHtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uZGlzYWJsZVNlbGVjdGlvbih0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQmFzZVN0eWxlID0gUWluQmFzZVN0eWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJhc2Utc3R5bGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkJhc2UgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9iYXNlX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZS1zdHlsZVwiKTtcbmNvbnN0IHFpbl90b29sc18xID0gcmVxdWlyZShcIi4vcWluLXRvb2xzXCIpO1xuY2xhc3MgUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5fYmFzZURpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgICAgICAgdGhpcy5fYmFzZVZpc2liaWxpdHkgPSBcImluaXRpYWxcIjtcbiAgICAgICAgdGhpcy5fc3R5bGUgPSBudWxsO1xuICAgIH1cbiAgICBnZXQgcWlucGVsKCkge1xuICAgICAgICByZXR1cm4gcWluX3Rvb2xzXzEuUWluVG9vbHMucWlucGVsKCk7XG4gICAgfVxuICAgIGdldCBzdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlID0gbmV3IHFpbl9iYXNlX3N0eWxlXzEuUWluQmFzZVN0eWxlKHRoaXMuZ2V0TWFpbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XG4gICAgfVxuICAgIGluc3RhbGwob25CYXNlKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBvbkJhc2U7XG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICAgIHVuSW5zdGFsbCgpIHtcbiAgICAgICAgdGhpcy5fYmFzZVBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgcmVJbnN0YWxsKCkge1xuICAgICAgICB0aGlzLl9iYXNlUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIH1cbiAgICB1bkRpc3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgdGhpcy5fYmFzZURpc3BsYXkgPSB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2Jhc2VEaXNwbGF5O1xuICAgIH1cbiAgICB1blZpc2libGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ICE9PSBcImhpZGRlblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9iYXNlVmlzaWJpbGl0eSA9IHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHk7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZVZpc2libGUoKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLl9iYXNlVmlzaWJpbGl0eTtcbiAgICB9XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB0aGlzLmdldE1haW4oKS5hcHBlbmRDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xuICAgIH1cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9iYXNlQ2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldE1haW4oKS5yZW1vdmVDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xuICAgIH1cbiAgICBjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhc2VDaGlsZHJlbjtcbiAgICB9XG4gICAgY2xlYXJDaGlsZHJlbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLl9iYXNlQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnJlbW92ZUNoaWxkKGNoaWxkLmdldE1haW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuID0gW107XG4gICAgfVxuICAgIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb24odGhpcy5nZXRNYWluKCksIGFjdGlvbik7XG4gICAgfVxuICAgIHB1dFRhYkluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnRhYkluZGV4ID0gaW5kZXg7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5CYXNlID0gUWluQmFzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1iYXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Cb29sZWFuID0gdm9pZCAwO1xuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuY2xhc3MgUWluQm9vbGVhbiBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5TcGFuID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XG4gICAgICAgIHRoaXMuX3Fpbkljb24gPSBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2lyY2xlKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xuICAgICAgICB0aGlzLl9xaW5JY29uLmluc3RhbGwodGhpcy5fcWluU3Bhbik7XG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNFZGl0KCk7XG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNEaXNwbGF5RmxleCgpO1xuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzQWxsQ2VudGVyZWQoKTtcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IGRhdGE7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbiAgICBnZXQgcWluTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XG4gICAgfVxuICAgIGdldCBxaW5TcGFuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluU3BhbjtcbiAgICB9XG4gICAgZ2V0IHFpbkljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbiAgICB1cGRhdGVJY29uKCkge1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uY2hhbmdlKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ29uZmlybSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmNoYW5nZShxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNpcmNsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9ICF0aGlzLl92YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5Cb29sZWFuID0gUWluQm9vbGVhbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib29sZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5CdXR0b24gPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkJ1dHRvbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9xaW5JY29uID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBudWxsO1xuICAgICAgICBzdHlsZXMuYXBwbHlPbkJ1dHRvbih0aGlzLl9lbE1haW4pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmljb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24gPSBvcHRpb25zLmljb247XG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmluc3RhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBvcHRpb25zLmxhYmVsO1xuICAgICAgICAgICAgdGhpcy5fcWluTGFiZWwuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbiAgICBnZXQgcWluSWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbkljb247XG4gICAgfVxuICAgIGdldCBxaW5MYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQnV0dG9uID0gUWluQnV0dG9uO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGFwcGx5T25CdXR0b246IChlbCkgPT4ge1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzRWRpdChlbCk7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgIGVsLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJ1dHRvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQ2hvb3NlciA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuY29uc3QgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5fZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1leHBsb3JlclwiKTtcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcbmNvbnN0IHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcbmNsYXNzIFFpbkNob29zZXIgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XG4gICAgICAgIHRoaXMuX3FpblVwcGVyID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5Db25maXJtID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm0pLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucyA9IG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibygpO1xuICAgICAgICB0aGlzLl9xaW5TZWFyY2ggPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlU2VhcmNoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpblVuZGVyID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyID0gbmV3IHFpbl9leHBsb3Jlcl8xLlFpbkV4cGxvcmVyKCk7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbikgPyBvcHRpb25zLm9wZXJhdGlvbiA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc09wZXJhdGlvbi5PUEVOO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdG9ycyA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVzY3JpcHRvcnMpID8gb3B0aW9ucy5kZXNjcmlwdG9ycyA6IFtdO1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbikgPyBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uIDogZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcbiAgICAgICAgdGhpcy5pbml0VXBwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0VW5kZXIoKTtcbiAgICB9XG4gICAgaW5pdE1haW4oKSB7XG4gICAgICAgIHRoaXMuX3FpblVwcGVyLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpblVuZGVyLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgfVxuICAgIGluaXRVcHBlcigpIHtcbiAgICAgICAgdGhpcy5fcWluVXBwZXIuc3R5bGUucHV0QXNGbGV4TWluKCk7XG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaG9zZW4gb2YgdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNob3NlbihkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnN0eWxlLnB1dEFzTWluV2lkdGgoMTAwKTtcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnN0eWxlLnB1dEFzRmxleE1heCgpO1xuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzRW50ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIoKTtcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5zdHlsZS5wdXRBc01pbldpZHRoKDEwMCk7XG4gICAgICAgIHRoaXMuaW5pdEV4dGVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcigpO1xuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0VW5kZXIoKSB7XG4gICAgICAgIHRoaXMuX3FpblVuZGVyLnN0eWxlLnB1dEFzU2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuX3FpblVuZGVyLnN0eWxlLnB1dEFzRmxleE1heCgpO1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5pbnN0YWxsKHRoaXMuX3FpblVuZGVyKTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubmF0dXJlID0gdGhpcy5fbmF0dXJlO1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24gPSB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XG4gICAgfVxuICAgIGluaXRFeHRlbnNpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5fZGVzY3JpcHRvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuYWRkSXRlbSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIEZpbGVzICgqLiopXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiKlwiLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5leHRlbnNpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGVzY3JpcHRvcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2Rlc2NyaXB0b3JzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmFkZEl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRvci5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlc2NyaXB0b3IuZXh0ZW5zaW9ucy5qb2luKFwiO1wiKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09IDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5leHRlbnNpb25zID0gdGhpcy5fZGVzY3JpcHRvcnNbMF0uZXh0ZW5zaW9ucztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3Jlci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXQgcWluTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XG4gICAgfVxuICAgIGdldCBxaW5VcHBlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVwcGVyO1xuICAgIH1cbiAgICBnZXQgcWluQ29uZmlybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkNvbmZpcm07XG4gICAgfVxuICAgIGdldCBxaW5Gb2xkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Gb2xkZXI7XG4gICAgfVxuICAgIGdldCBxaW5FeHRlbnNpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXh0ZW5zaW9ucztcbiAgICB9XG4gICAgZ2V0IHFpblNlYXJjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcbiAgICB9XG4gICAgZ2V0IHFpblVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluVW5kZXI7XG4gICAgfVxuICAgIGdldCBxaW5FeHBsb3JlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4cGxvcmVyO1xuICAgIH1cbiAgICBnZXQgbmF0dXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmF0dXJlO1xuICAgIH1cbiAgICBzZXQgbmF0dXJlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX25hdHVyZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5uYXR1cmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG9wZXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjtcbiAgICB9XG4gICAgc2V0IG9wZXJhdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0b3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdG9ycyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdG9ycyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgbG9hZEZvbGRlcigpIHtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubG9hZCh0aGlzLl9xaW5Gb2xkZXIuZ2V0RGF0YSgpLCAobG9hZGVkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc2V0RGF0YShsb2FkZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkQ2hvc2VuKGNob3Nlbikge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChjaG9zZW4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnRzLlFpbkNob29zZXIgPSBRaW5DaG9vc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNob29zZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkNvbHVtbiA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkNvbHVtbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmluaXRQYW5lbCgpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgdmlld2VyIG9mIG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgICAgIHZpZXdlci5pbnN0YWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGluaXRQYW5lbCgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25QYW5lbCh0aGlzLl9lbE1haW4pO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQ29sdW1uID0gUWluQ29sdW1uO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGFwcGx5T25QYW5lbDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb2x1bW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkNvbWJvID0gdm9pZCAwO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY2xhc3MgUWluQ29tYm8gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0VkaXQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBvcHRpb25zLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLnNlbGVjdGVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnZhbHVlO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gZGF0YTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gaXRlbS50aXRsZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgIT0gdW5kZWZpbmVkICYmIGl0ZW0uc2VsZWN0ZWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbE1haW4uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5Db21ibyA9IFFpbkNvbWJvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbWJvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5FZGl0ID0gdm9pZCAwO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluRWRpdCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG59XG5leHBvcnRzLlFpbkVkaXQgPSBRaW5FZGl0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWVkaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkV4cGxvcmVyID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbmNsYXNzIFFpbkV4cGxvcmVyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcbiAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gXCJcIjtcbiAgICAgICAgdGhpcy5fZm9sZGVyU2VydmVyID0gXCJcIjtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUpID8gb3B0aW9ucy5uYXR1cmUgOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USDtcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucyA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZXh0ZW5zaW9ucykgPyBvcHRpb25zLmV4dGVuc2lvbnMgOiBbXTtcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xuICAgIH1cbiAgICBpbml0TWFpbigpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25NYWluKHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhblNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zdHlsZS5wdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhdGhKb2luKHRoaXMuX2ZvbGRlclNlcnZlciwgaXRlbS5nZXROYW1lKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGZvbGRlclJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChkYXRhWzBdKTtcbiAgICAgICAgICAgIHRoaXMubG9hZChmb2xkZXJSb290LCAoXykgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbVBhdGggb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChpdGVtUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0U3RlbShpdGVtUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUm9vdCAhPT0gZm9sZGVyUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuZnJhbWUuc3RhdHVzRXJyb3IoYFRoZSBpdGVtICcke2l0ZW1QYXRofScgaXMgbm90IG9uIHRoZSByb290ICcke2ZvbGRlclJvb3R9Jy5gLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMSlcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0KGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLnN0YXR1c0Vycm9yKGBEb2VzIG5vdCBoYXZlIHRoZSBpdGVtICcke2l0ZW1OYW1lfScgb24gdGhlIGZvbGRlciAnJHtmb2xkZXJSb290fSdgLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMilcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgcWluTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XG4gICAgfVxuICAgIGdldCBuYXR1cmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYXR1cmU7XG4gICAgfVxuICAgIHNldCBuYXR1cmUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBleHRlbnNpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0ZW5zaW9ucztcbiAgICB9XG4gICAgc2V0IGV4dGVuc2lvbnModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpbmdsZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBnZXQgZm9sZGVyQWN0dWFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9sZGVyQWN0dWFsO1xuICAgIH1cbiAgICBnZXQgZm9sZGVyU2VydmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9sZGVyU2VydmVyO1xuICAgIH1cbiAgICB1cGRhdGVTaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBhbHJlYWR5SGFzID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5faXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlIYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlIYXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWQoZm9sZGVyLCBvbkxvYWQpIHtcbiAgICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgICB0aGlzLnFpbnBlbFxuICAgICAgICAgICAgLnBvc3QoXCIvZGlyL2xpc3RcIiwgeyBwYXRoOiBmb2xkZXIgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IGZvbGRlcjtcbiAgICAgICAgICAgIGZvciAobGV0IGxpbmUgb2YgcWlucGVsX3Jlc18xLlFpblNvdWwuYm9keS5nZXRUZXh0TGluZXMocmVzLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmVWYWx1ZSA9IGxpbmUuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKFwiUDogXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IGxpbmVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKGxpbmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKFwiRDogXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RGlyKGxpbmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKFwiRjogXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRklMRVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHRlbnNpb24gPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldEZpbGVFeHRlbnNpb24obGluZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXNzZWRFeHRlbnNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbnMgJiYgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkRXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0ZpbGUobGluZVZhbHVlLCBleHRlbnNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLnN0YXR1c0Vycm9yKGVyciwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDMpXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVsb2FkKG9uTG9hZCkge1xuICAgICAgICB0aGlzLmxvYWQodGhpcy5fZm9sZGVyU2VydmVyLCBvbkxvYWQpO1xuICAgIH1cbiAgICBnb0ZvbGRlclVwKG9uTG9hZCkge1xuICAgICAgICBsZXQgcGFyZW50ID0gcWlucGVsX3Jlc18xLlFpbkZvb3QuZ2V0UGFyZW50KHRoaXMuX2ZvbGRlclNlcnZlcik7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZChwYXJlbnQsIG9uTG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW4oKSB7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XG4gICAgfVxuICAgIGNsZWFuU2VsZWN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5faXRlbXMpIHtcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3QoaXRlbU5hbWUpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtcy5maW5kKChpbnNpZGUpID0+IGluc2lkZS5nZXROYW1lKCkgPT0gaXRlbU5hbWUpO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5zZWxlY3QoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVuc2VsZWN0KGl0ZW1OYW1lKSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXMuZmluZCgoaW5zaWRlKSA9PiBpbnNpZGUuZ2V0TmFtZSgpID09IGl0ZW1OYW1lKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5ld0RpcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBcImV4cGxvcmVyLWRpci5wbmdcIik7XG4gICAgfVxuICAgIG5ld0ZpbGUobmFtZSwgZXh0ZW5zaW9uKSB7XG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBnZXRJY29uTmFtZShleHRlbnNpb24pKTtcbiAgICB9XG4gICAgbmV3SXRlbShuYW1lLCBpY29uKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuYW1lLCBpY29uKTtcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpKTtcbiAgICAgICAgdGhpcy5faXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG59XG5leHBvcnRzLlFpbkV4cGxvcmVyID0gUWluRXhwbG9yZXI7XG5jbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihleHBsb3JlciwgZmlsZU5hbWUsIGljb25OYW1lKSB7XG4gICAgICAgIHRoaXMuZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNwYW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRoaXMuaW1nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHRoaXMuc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV4cGxvcmVyID0gZXhwbG9yZXI7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICAgICAgdGhpcy5pY29uTmFtZSA9IGljb25OYW1lO1xuICAgICAgICB0aGlzLmluaXRJdGVtKCk7XG4gICAgfVxuICAgIGluaXRJdGVtKCkge1xuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdkl0ZW0odGhpcy5kaXZJdGVtKTtcbiAgICAgICAgdGhpcy5kaXZJdGVtLnRhYkluZGV4ID0gMDtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtQm9keSh0aGlzLmRpdkl0ZW1Cb2R5KTtcbiAgICAgICAgdGhpcy5kaXZJdGVtLmFwcGVuZENoaWxkKHRoaXMuZGl2SXRlbUJvZHkpO1xuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5JY29uKHRoaXMuc3Bhbkljb24pO1xuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuc3Bhbkljb24pO1xuICAgICAgICB0aGlzLmltZ0ljb24uc3JjID0gXCIvYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgdGhpcy5pY29uTmFtZTtcbiAgICAgICAgdGhpcy5zcGFuSWNvbi5hcHBlbmRDaGlsZCh0aGlzLmltZ0ljb24pO1xuICAgICAgICB0aGlzLnNwYW5UZXh0LmlubmVyVGV4dCA9IHRoaXMuZmlsZU5hbWU7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uU3BhblRleHQodGhpcy5zcGFuVGV4dCk7XG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuVGV4dCk7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmFybS5hZGRBY3Rpb24odGhpcy5kaXZJdGVtLCAocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnN0YWxsKG9uKSB7XG4gICAgICAgIG9uLmFwcGVuZENoaWxkKHRoaXMuZGl2SXRlbSk7XG4gICAgfVxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZTZWxlY3QodGhpcy5kaXZJdGVtKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHVuc2VsZWN0KCkge1xuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdlVuU2VsZWN0KHRoaXMuZGl2SXRlbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51bnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBsb3Jlci5jbGVhblNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlTmFtZTtcbiAgICB9XG4gICAgaXNTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0SWNvbk5hbWUoZnJvbUV4dGVuc2lvbikge1xuICAgIGxldCByZXN1bHQgPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XG4gICAgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlQXBwKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVDbWQoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUV4ZWMoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUltYWdlKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlVmVjdG9yKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlTXVzaWMoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNb3ZpZShmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZVppcHBlZChmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uTWFpbjogKGVsKSA9PiB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQoZWwpO1xuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgICAgICBlbC5zdHlsZS5taW5XaWR0aCA9IFwiMTYwcHhcIjtcbiAgICAgICAgZWwuc3R5bGUubWluSGVpZ2h0ID0gXCIxNjBweFwiO1xuICAgICAgICBlbC50YWJJbmRleCA9IDA7XG4gICAgfSxcbiAgICBhcHBseU9uRGl2SXRlbTogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjlweFwiO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzM2MDA0NVwiO1xuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xuICAgICAgICBlbC5zdHlsZS5jb2xvciA9IFwiIzI3MDAzNlwiO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2FlMDAwMFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhcHBseU9uRGl2SXRlbUJvZHk6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBlbC5zdHlsZS53aWR0aCA9IFwiOTZweFwiO1xuICAgIH0sXG4gICAgYXBwbHlPblNwYW5JY29uOiAoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB9LFxuICAgIGFwcGx5T25TcGFuVGV4dDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGVsLnN0eWxlLndvcmRXcmFwID0gXCJicmVhay13b3JkXCI7XG4gICAgfSxcbiAgICBhcHBseU9uRGl2U2VsZWN0OiAoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XG4gICAgfSxcbiAgICBhcHBseU9uRGl2VW5TZWxlY3Q6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1leHBsb3Jlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRmllbGQgPSB2b2lkIDA7XG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XG5jbGFzcyBRaW5GaWVsZCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGVkaXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XG4gICAgICAgIHRoaXMuX3FpbkVkaXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9xaW5MYWJlbC5zZXRUaXRsZSh0aXRsZSk7XG4gICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpbkVkaXQgPSBlZGl0O1xuICAgICAgICB0aGlzLl9xaW5FZGl0Lmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI1cHhcIjtcbiAgICAgICAgdGhpcy5fcWluTWFpbi5nZXRNYWluKCkuc3R5bGUubWFyZ2luQm90dG9tID0gXCI1cHhcIjtcbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRWRpdC5nZXREYXRhKCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9xaW5FZGl0LnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldCBxaW5NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcbiAgICB9XG4gICAgZ2V0IHFpbkxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTGFiZWw7XG4gICAgfVxuICAgIGdldCBxaW5FZGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRWRpdDtcbiAgICB9XG59XG5leHBvcnRzLlFpbkZpZWxkID0gUWluRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmllbGQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkljb24gPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5JY29uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihhc3NldCwgc2l6ZSA9IHFpbnBlbF9yZXNfMS5RaW5HcmFuZGV1ci5TTUFMTCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB0aGlzLl9lbE1haW4uc3JjID0gKDAsIHFpbl9hc3NldHNfMS5xaW5Bc3NldFVybCkoYXNzZXQpO1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlU2l6ZSh0aGlzLl9lbE1haW4sIHNpemUpO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbiAgICBjaGFuZ2UoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5fZWxNYWluLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcbiAgICB9XG59XG5leHBvcnRzLlFpbkljb24gPSBRaW5JY29uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkludGVnZXIgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNsYXNzIFFpbkludGVnZXIgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLl9lbE1haW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5fZWxNYWluKTtcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLndpZHRoID0gXCIxMjBweFwiO1xuICAgICAgICB0aGlzLl9lbE1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmdldERhdGEoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWxNYWluLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX2VsTWFpbi52YWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gKGRhdGEgfCAwKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5RaW5JbnRlZ2VyID0gUWluSW50ZWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pbnRlZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5MYWJlbCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkxhYmVsIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbE1haW4udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLl9lbE1haW4udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB9XG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW4udGV4dENvbnRlbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5MYWJlbCA9IFFpbkxhYmVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxhYmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5MaW5lID0gdm9pZCAwO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluTGluZSBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmluaXRQYW5lbCgpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHZpZXdlciBvZiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0UGFuZWwoKSB7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uUGFuZWwodGhpcy5fZWxNYWluKTtcbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkxpbmUgPSBRaW5MaW5lO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGFwcGx5T25QYW5lbDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbGluZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluTWVudUl0ZW0gPSBleHBvcnRzLlFpbk1lbnUgPSB2b2lkIDA7XG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xuY2xhc3MgUWluTWVudSBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uc3R5bGUucHV0QXNFZGl0KCk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uc3R5bGUucHV0QXNTY3JvbGwoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFFpbk1lbnVJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0SXRlbShpdGVtKSB7XG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcbiAgICB9XG59XG5leHBvcnRzLlFpbk1lbnUgPSBRaW5NZW51O1xuY2xhc3MgUWluTWVudUl0ZW0gZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XG4gICAgY29uc3RydWN0b3IoaWNvbiwgbGFiZWwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZmFjZSA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xuICAgICAgICB0aGlzLl9ib2R5ID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmFjZS5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9ib2R5Lmluc3RhbGwodGhpcy5fZmFjZSk7XG4gICAgICAgIHRoaXMuX2ljb24gPSBpY29uO1xuICAgICAgICBpZiAodGhpcy5faWNvbikge1xuICAgICAgICAgICAgdGhpcy5faWNvbi5pbnN0YWxsKHRoaXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwuaW5zdGFsbCh0aGlzLl9ib2R5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1dFRhYkluZGV4KDApO1xuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRWRpdCgpO1xuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWFyZ2luKDMpO1xuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzUGFkZGluZyg2KTtcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0Rpc3BsYXlJbmxpbmVCbG9jaygpO1xuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWF4V2lkdGgoOTYpO1xuICAgICAgICB0aGlzLl9ib2R5LnN0eWxlLnB1dEFzQWxsQ2VudGVyZWQoKTtcbiAgICB9XG4gICAgc2VsZWN0KCkge1xuICAgICAgICB0aGlzLl9mYWNlLnN0eWxlLnB1dEFzQmFja0Fzc2V0KHFpbl9hc3NldHNfMS5RaW5Bc3NldC5CYWNrVGlueTAxKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1blNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy5fZmFjZS5zdHlsZS5wdXRBc0JhY2tJbml0aWFsKCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHN3YXBTZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUWluTWVudUl0ZW0gPSBRaW5NZW51SXRlbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1tZW51LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0gZXhwb3J0cy5RaW5NdXRhbnRzID0gdm9pZCAwO1xuY29uc3QgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xuY29uc3QgcWluX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1jaG9vc2VyXCIpO1xuY29uc3QgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XG5jb25zdCBxaW5fZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1leHBsb3JlclwiKTtcbmNvbnN0IHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcbmNvbnN0IHFpbl9wYXRoXzEgPSByZXF1aXJlKFwiLi9xaW4tcGF0aFwiKTtcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XG52YXIgUWluTXV0YW50cztcbihmdW5jdGlvbiAoUWluTXV0YW50cykge1xuICAgIFFpbk11dGFudHNbXCJCT09MRUFOXCJdID0gXCJib29sZWFuXCI7XG4gICAgUWluTXV0YW50c1tcIkNIT09TRVJcIl0gPSBcImNob29zZXJcIjtcbiAgICBRaW5NdXRhbnRzW1wiQ09NQk9cIl0gPSBcImNvbWJvXCI7XG4gICAgUWluTXV0YW50c1tcIkVYUExPUkVSXCJdID0gXCJleHBsb3JlclwiO1xuICAgIFFpbk11dGFudHNbXCJJTlRFR0VSXCJdID0gXCJpbnRlZ2VyXCI7XG4gICAgUWluTXV0YW50c1tcIlBBVEhcIl0gPSBcInBhdGhcIjtcbiAgICBRaW5NdXRhbnRzW1wiU1RSSU5HXCJdID0gXCJzdHJpbmdcIjtcbn0pKFFpbk11dGFudHMgPSBleHBvcnRzLlFpbk11dGFudHMgfHwgKGV4cG9ydHMuUWluTXV0YW50cyA9IHt9KSk7XG5mdW5jdGlvbiBuZXdFZGl0KGtpbmQsIG9wdGlvbnMpIHtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkJPT0xFQU46XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9ib29sZWFuXzEuUWluQm9vbGVhbihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNIT09TRVI6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9jaG9vc2VyXzEuUWluQ2hvb3NlcihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNPTUJPOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibyhvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkVYUExPUkVSOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLklOVEVHRVI6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLlBBVEg6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9wYXRoXzEuUWluUGF0aChvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLlNUUklORzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZyhvcHRpb25zKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24ga2luZCBvZiBtdXRhbnQgdG8gY3JlYXRlLlwiKTtcbiAgICB9XG59XG5leHBvcnRzLlFpbk11dGFudHNBcm0gPSB7XG4gICAgbmV3RWRpdCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbXV0YW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluUGFuZWwgPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5QYW5lbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5QYW5lbCA9IFFpblBhbmVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBhbmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5QYXRoID0gdm9pZCAwO1xuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XG5jb25zdCBxaW5fY2hvb3Nlcl8xID0gcmVxdWlyZShcIi4vcWluLWNob29zZXJcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xuY2xhc3MgUWluUGF0aCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5QYXRoID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUZvbGRlciksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5DaG9vc2VyID0gbmV3IHFpbl9jaG9vc2VyXzEuUWluQ2hvb3Nlcih7XG4gICAgICAgICAgICBuYXR1cmU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUsXG4gICAgICAgICAgICBvcGVyYXRpb246IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vcGVyYXRpb24sXG4gICAgICAgICAgICBkZXNjcmlwdG9yczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzLFxuICAgICAgICAgICAgc2luZ2xlU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluUG9wdXAgPSB0aGlzLnFpbnBlbC5mcmFtZS5uZXdQb3B1cCh0aGlzLl9xaW5DaG9vc2VyLmdldE1haW4oKSk7XG4gICAgICAgIHRoaXMuX3FpblBhdGguaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuc2hvdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwcGVySGVpZ2h0ID0gdGhpcy5fcWluQ2hvb3Nlci5xaW5VcHBlci5nZXRNYWluKCkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGxvcmVyTWF4SGVpZ2h0ID0gdGhpcy5fcWluUG9wdXAubWF4SGVpZ2h0IC0gKHVwcGVySGVpZ2h0ICsgMTIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNob29zZXIucWluRXhwbG9yZXIuc3R5bGUucHV0QXNNYXhIZWlnaHQoZXhwbG9yZXJNYXhIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluQ2hvb3Nlci5hZGRDaG9zZW4oKGNob3NlbikgPT4ge1xuICAgICAgICAgICAgaWYgKGNob3NlbiAmJiBjaG9zZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBhdGguc2V0RGF0YShjaG9zZW5bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aC5nZXREYXRhKCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9xaW5QYXRoLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldCBxaW5NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcbiAgICB9XG4gICAgZ2V0IHFpblBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYXRoO1xuICAgIH1cbiAgICBnZXQgcWluU2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluU2VhcmNoO1xuICAgIH1cbiAgICBnZXQgcWluQ2hvb3NlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkNob29zZXI7XG4gICAgfVxuICAgIGdldCBxaW5Qb3B1cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBvcHVwO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluUGF0aCA9IFFpblBhdGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluU3RyaW5nID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jbGFzcyBRaW5TdHJpbmcgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLl9lbE1haW4udHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1heExlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fZWxNYWluLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gTWF0aC5taW4oTWF0aC5tYXgob3B0aW9ucy5tYXhMZW5ndGggLSAxMCwgMCksIDkwKTtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3IoOTAgKyAocG9zaXRpb24gKiA3KSAvIDMpO1xuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdCh0aGlzLl9lbE1haW4pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW4udmFsdWU7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBkYXRhO1xuICAgIH1cbiAgICBpbnNlcnRBdEN1cnNvcihkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5fZWxNYWluLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy5fZWxNYWluLnNlbGVjdGlvbkVuZDtcbiAgICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuX2VsTWFpbi52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbCA9IChzdGFydFBvcyA+IDAgPyBvbGRWYWwuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSA6IFwiXCIpICtcbiAgICAgICAgICAgIGRhdGEgK1xuICAgICAgICAgICAgKGVuZFBvcyA8IG9sZFZhbC5sZW5ndGggPyBvbGRWYWwuc3Vic3RyaW5nKGVuZFBvcykgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gbmV3VmFsO1xuICAgICAgICB0aGlzLl9lbE1haW4uc2VsZWN0aW9uU3RhcnQgPSBzdGFydFBvcztcbiAgICAgICAgdGhpcy5fZWxNYWluLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zICsgZGF0YS5sZW5ndGg7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5TdHJpbmcgPSBRaW5TdHJpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5UYWJzID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XG5jbGFzcyBRaW5UYWJzIGV4dGVuZHMgcWluX2NvbHVtbl8xLlFpbkNvbHVtbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5UYWJzID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5QYW5lbCA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xuICAgICAgICB0aGlzLl90YWJzID0gW107XG4gICAgICAgIHRoaXMuX3FpblRhYnMuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5fcWluUGFuZWwuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFiKHRhYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHFpblRhYnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5UYWJzO1xuICAgIH1cbiAgICBnZXQgcWluUGFuZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYW5lbDtcbiAgICB9XG4gICAgYWRkVGFiKHRhYikge1xuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7IGxhYmVsOiBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwodGFiLnRpdGxlKSB9KTtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XG4gICAgICAgIGJ1dHRvbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLmluc3RhbGwodGhpcy5fcWluVGFicyk7XG4gICAgICAgIGxldCBmaXJzdCA9IHRoaXMuX3RhYnMubGVuZ3RoID09IDA7XG4gICAgICAgIGxldCB0YWJSZWYgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGFiLnRpdGxlLFxuICAgICAgICAgICAgdmlld2VyOiB0YWIudmlld2VyLFxuICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl90YWJzLnB1c2godGFiUmVmKTtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1RhYih0aXRsZSkge1xuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0aGlzLl90YWJzKSB7XG4gICAgICAgICAgICBpZiAodGFiLnRpdGxlID09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dWaWV3ZXIodmlld2VyKSB7XG4gICAgICAgIHRoaXMuX3FpblBhbmVsLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcy5fcWluUGFuZWwpO1xuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0aGlzLl90YWJzKSB7XG4gICAgICAgICAgICBpZiAodGFiLnZpZXdlciA9PSB2aWV3ZXIpIHtcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JBY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFiLmJ1dHRvbi5zdHlsZS5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9ySW5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5RaW5UYWJzID0gUWluVGFicztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10YWJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Ub29scyA9IHZvaWQgMDtcbmNvbnN0IHJlZlFpbnBlbCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQucWlucGVsO1xuZnVuY3Rpb24gcWlucGVsKCkge1xuICAgIHJldHVybiByZWZRaW5wZWw7XG59XG5leHBvcnRzLlFpblRvb2xzID0ge1xuICAgIHFpbnBlbCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdG9vbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkZvb3QgPSBleHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0gZXhwb3J0cy5RaW5Bcm0gPSBleHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IGV4cG9ydHMuUWluV2FpdGVycyA9IGV4cG9ydHMuUWluRXZlbnQgPSBleHBvcnRzLlFpblNvdWwgPSBleHBvcnRzLlFpbkJvZHkgPSBleHBvcnRzLlFpbkhlYWQgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSBleHBvcnRzLlFpblNraW4gPSBleHBvcnRzLlFpblN0eWxlcyA9IHZvaWQgMDtcbnZhciBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHlsZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzEuUWluU3R5bGVzOyB9IH0pO1xudmFyIHFpbl9za2luXzIgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNraW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzIuUWluU2tpbjsgfSB9KTtcbnZhciBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Qb2ludFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMS5RaW5Qb2ludDsgfSB9KTtcbnZhciBxaW5faGVhZF8yID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5EaW1lbnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzIuUWluRGltZW5zaW9uOyB9IH0pO1xudmFyIHFpbl9oZWFkXzMgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJvdW5kc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMy5RaW5Cb3VuZHM7IH0gfSk7XG52YXIgcWluX2hlYWRfNCA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluR3JhbmRldXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzQuUWluR3JhbmRldXI7IH0gfSk7XG52YXIgcWluX2hlYWRfNSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSGVhZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfNS5RaW5IZWFkOyB9IH0pO1xudmFyIHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJvZHlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9ib2R5XzEuUWluQm9keTsgfSB9KTtcbnZhciBxaW5fc291bF8xID0gcmVxdWlyZShcIi4vcWluLXNvdWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Tb3VsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc291bF8xLlFpblNvdWw7IH0gfSk7XG52YXIgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkV2ZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzEuUWluRXZlbnQ7IH0gfSk7XG52YXIgcWluX2FybV8yID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbldhaXRlcnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMi5RaW5XYWl0ZXJzOyB9IH0pO1xudmFyIHFpbl9hcm1fMyA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Qb2ludGVyQ2FsbHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMy5RaW5Qb2ludGVyQ2FsbHM7IH0gfSk7XG52YXIgcWluX2FybV80ID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkFybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV80LlFpbkFybTsgfSB9KTtcbnZhciBxaW5fZm9vdF8xID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc05hdHVyZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMS5RaW5GaWxlc05hdHVyZTsgfSB9KTtcbnZhciBxaW5fZm9vdF8yID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc09wZXJhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMi5RaW5GaWxlc09wZXJhdGlvbjsgfSB9KTtcbnZhciBxaW5fZm9vdF8zID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc0Rlc2NyaXB0b3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzMuUWluRmlsZXNEZXNjcmlwdG9yOyB9IH0pO1xudmFyIHFpbl9mb290XzQgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZvb3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzQuUWluRm9vdDsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQXJtID0gZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBleHBvcnRzLlFpbldhaXRlcnMgPSBleHBvcnRzLlFpbkV2ZW50ID0gdm9pZCAwO1xuY29uc3QgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xuY2xhc3MgUWluRXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKGlzU3RhcnQsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcG9pbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdG9wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gaXNTdGFydDtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBldmVudDtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ID0gbWFrZUV2ZW50UG9pbnRlcihpc1N0YXJ0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGlzU3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgICB9XG4gICAgZ2V0IGZyb21PcmlnaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LnRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0IGZyb21UeXBpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQ7XG4gICAgfVxuICAgIGdldCBmcm9tUG9pbnRpbmcoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8IHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCk7XG4gICAgfVxuICAgIGdldCBoYXNBbHQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX2V2ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWx0S2V5O1xuICAgIH1cbiAgICBnZXQgaGFzQ3RybCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jdHJsS2V5O1xuICAgIH1cbiAgICBnZXQgaGFzU2hpZnQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX2V2ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2hpZnRLZXk7XG4gICAgfVxuICAgIGdldCBoYXNNZXRhKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9ldmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1ldGFLZXk7XG4gICAgfVxuICAgIGdldCBrZXlUeXBlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LmtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0IGlzRW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0tleUVudGVyKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc0VzY2FwZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzS2V5RXNjYXBlKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc1NwYWNlKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNLZXlTcGFjZSh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgaXNEb3VibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHxcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRQb2ludGVyRG91YmxlKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgaXNMb25nKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0V2ZW50UG9pbnRlckxvbmcodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50O1xuICAgIH1cbiAgICBnZXQgcG9pbnRYKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQuY2xpZW50WDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggLyAyKSB8IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LnRvdWNoZXNbaW5kZXhdLmNsaWVudFg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGdldCBwb2ludFkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudC5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICh0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCAvIDIpIHwgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQudG91Y2hlc1tpbmRleF0uY2xpZW50WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0IGlzRmlyc3RCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0ZpcnN0QnV0dG9uKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc01pZGRsZUJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTWlkZGxlQnV0dG9uKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc1NlY29uZEJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzU2Vjb25kQnV0dG9uKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc09uZUZpbmdlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzT25lRmluZ2VyKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc1R3b0ZpbmdlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1R3b0ZpbmdlcnModGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzVGhyZWVGaW5nZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNUaHJlZUZpbmdlcnModGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzRm91ckZpbmdlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0ZvdXJGaW5nZXJzKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc1ByaW1hcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ByaW1hcnlLZXkodGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fFxuICAgICAgICAgICAgdGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNQcmltYXJ5UG9pbnQodGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzQXV4aWxpYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBdXhpbGlhcnlLZXkodGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fFxuICAgICAgICAgICAgdGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBdXhpbGlhcnlQb2ludCh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgaXNTZWNvbmRhcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1NlY29uZGFyeUtleSh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1NlY29uZGFyeVBvaW50KHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBzdG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcDtcbiAgICB9XG4gICAgY29uc3VtZWQoKSB7XG4gICAgICAgIHRoaXMuX3N0b3AgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluRXZlbnQgPSBRaW5FdmVudDtcbmNsYXNzIFFpbldhaXRlcnMge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWwpIHtcbiAgICAgICAgdGhpcy53YWl0ZXJzID0gaW5pdGlhbCA/IGluaXRpYWwgOiBbXTtcbiAgICB9XG4gICAgYWRkV2FpdGVyKHdhaXRlcikge1xuICAgICAgICB0aGlzLndhaXRlcnMucHVzaCh3YWl0ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaGFzV2FpdGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0ZXJzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIHNlbmRXYWl0ZXJzKHJlc3VsdCkge1xuICAgICAgICBmb3IgKGNvbnN0IHdhaXRlciBvZiB0aGlzLndhaXRlcnMpIHtcbiAgICAgICAgICAgIHdhaXRlcihyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5RaW5XYWl0ZXJzID0gUWluV2FpdGVycztcbmNsYXNzIFFpblBvaW50ZXJDYWxscyB7XG59XG5leHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IFFpblBvaW50ZXJDYWxscztcbmZ1bmN0aW9uIHN0b3BFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbnZhciBsYXN0RXZlbnRQb2ludGVyID0gbnVsbDtcbmZ1bmN0aW9uIG1ha2VFdmVudFBvaW50ZXIoaXNTdGFydCwgZXYpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHBvc1g6IDAsXG4gICAgICAgIHBvc1k6IDAsXG4gICAgfTtcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmIChldi5jbGllbnRYIHx8IGV2LmNsaWVudFkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wb3NYID0gZXYuY2xpZW50WDtcbiAgICAgICAgICAgIHJlc3VsdC5wb3NZID0gZXYuY2xpZW50WTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMgJiYgdGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoIC8gMik7XG4gICAgICAgICAgICByZXN1bHQucG9zWCA9IGV2LnRvdWNoZXNbaW5kZXhdLmNsaWVudFg7XG4gICAgICAgICAgICByZXN1bHQucG9zWSA9IGV2LnRvdWNoZXNbaW5kZXhdLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzU3RhcnQpIHtcbiAgICAgICAgbGFzdEV2ZW50UG9pbnRlciA9IGV2O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gaXNFdmVudFBvaW50ZXJEb3VibGUoaXNTdGFydCwgZXYpIHtcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50UG9pbnRlciA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50UG9pbnRlci50aW1lU3RhbXA7XG4gICAgcmV0dXJuIHRpbWVEaWYgPCA0NTA7XG59XG5mdW5jdGlvbiBpc0V2ZW50UG9pbnRlckxvbmcoaXNTdGFydCwgZXYpIHtcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50UG9pbnRlciA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50UG9pbnRlci50aW1lU3RhbXA7XG4gICAgcmV0dXJuIHRpbWVEaWYgPiA4NDA7XG59XG5mdW5jdGlvbiBpc0tleUluTGlzdChldiwgbGlzdCkge1xuICAgIGxldCBrZXlMb3dlciA9IGV2LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBsaXN0LmluZGV4T2Yoa2V5TG93ZXIpID4gLTE7XG59XG5mdW5jdGlvbiBpc0tleUVudGVyKGV2KSB7XG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlbnRlclwiLCBcInJldHVyblwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMTM7XG59XG5mdW5jdGlvbiBpc0tleUVzY2FwZShldikge1xuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZXNjXCIsIFwiZXNjYXBlXCJdKSB8fCBldi5rZXlDb2RlID09PSAyNztcbn1cbmZ1bmN0aW9uIGlzS2V5U3BhY2UoZXYpIHtcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcIiBcIiwgXCJzcGFjZVwiLCBcInNwYWNlYmFyXCJdKSB8fCBldi5rZXlDb2RlID09PSAzMjtcbn1cbmZ1bmN0aW9uIGlzRmlyc3RCdXR0b24oZXYpIHtcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5idXR0b24pID09IDA7XG59XG5mdW5jdGlvbiBpc01pZGRsZUJ1dHRvbihldikge1xuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LmJ1dHRvbikgPT0gMTtcbn1cbmZ1bmN0aW9uIGlzU2Vjb25kQnV0dG9uKGV2KSB7XG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAyO1xufVxuZnVuY3Rpb24gaXNPbmVGaW5nZXIoZXYpIHtcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMTtcbn1cbmZ1bmN0aW9uIGlzVHdvRmluZ2Vycyhldikge1xuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAyO1xufVxuZnVuY3Rpb24gaXNUaHJlZUZpbmdlcnMoZXYpIHtcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMztcbn1cbmZ1bmN0aW9uIGlzRm91ckZpbmdlcnMoZXYpIHtcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gNDtcbn1cbmZ1bmN0aW9uIGlzUHJpbWFyeUtleShldikge1xuICAgIHJldHVybiBpc0tleUVudGVyKGV2KTtcbn1cbmZ1bmN0aW9uIGlzQXV4aWxpYXJ5S2V5KGV2KSB7XG4gICAgcmV0dXJuIGV2LmN0cmxLZXkgJiYgZXYuYWx0S2V5ICYmIGlzS2V5U3BhY2UoZXYpO1xufVxuZnVuY3Rpb24gaXNTZWNvbmRhcnlLZXkoZXYpIHtcbiAgICByZXR1cm4gZXYuY3RybEtleSAmJiAhZXYuYWx0S2V5ICYmIGlzS2V5U3BhY2UoZXYpO1xufVxuZnVuY3Rpb24gaXNQcmltYXJ5UG9pbnQoZXYpIHtcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBpc0ZpcnN0QnV0dG9uKGV2KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXYgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgIHJldHVybiBpc09uZUZpbmdlcihldik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQXV4aWxpYXJ5UG9pbnQoZXYpIHtcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBpc01pZGRsZUJ1dHRvbihldik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICByZXR1cm4gaXNUaHJlZUZpbmdlcnMoZXYpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1NlY29uZGFyeVBvaW50KGV2KSB7XG4gICAgaWYgKGV2IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gaXNTZWNvbmRCdXR0b24oZXYpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGlzVHdvRmluZ2Vycyhldik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFkZEFjdGlvbihlbGVtZW50LCBhY3Rpb24pIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFjdEtleURvd24pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGFjdEtleVVwKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgYWN0TW91c2VEb3duKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGFjdE1vdXNlVXApO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgYWN0VG91Y2hTdGFydCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgYWN0VG91Y2hFbmQpO1xuICAgIGZ1bmN0aW9uIGFjdEtleURvd24oZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KHRydWUsIGV2KTtcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0S2V5VXAoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdE1vdXNlRG93bihldikge1xuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQodHJ1ZSwgZXYpO1xuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RNb3VzZVVwKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RUb3VjaFN0YXJ0KGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCh0cnVlLCBldik7XG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoRW5kKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW4oZWxlbWVudCwgYWN0aW9uKSB7XG4gICAgZWxlbWVudC5vbmtleXVwID0gYWN0S2V5VXA7XG4gICAgZWxlbWVudC5vbm1vdXNldXAgPSBhY3RNb3VzZVVwO1xuICAgIGVsZW1lbnQub250b3VjaGVuZCA9IGFjdFRvdWNoRW5kO1xuICAgIGZ1bmN0aW9uIGFjdEtleVVwKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xuICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0TW91c2VVcChldikge1xuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQoZmFsc2UsIGV2KTtcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoRW5kKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xuICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwdXRBY3Rpb25Qcm94eShkZXN0aW55LCBvcmlnaW5zKSB7XG4gICAgZm9yIChjb25zdCBvcmlnaW4gb2Ygb3JpZ2lucykge1xuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGRlc3RpbnkuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGRlc3RpbnkuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGRlc3RpbnkuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRNb3Zlcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xuICAgIHZhciBkcmFnSW5pdEV2ZW50WCA9IDA7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcbiAgICB2YXIgZHJhZ0luaXRQb3NYID0gMDtcbiAgICB2YXIgZHJhZ0luaXRQb3NZID0gMDtcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvbk1vdmVySW5pdDtcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uTW92ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW92ZXJJbml0KGV2KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcbiAgICAgICAgZHJhZ0luaXRQb3NYID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmxlZnQsIDEwKTtcbiAgICAgICAgZHJhZ0luaXRQb3NZID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uTW92ZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uTW92ZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25Nb3ZlckNsb3NlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvbk1vdmVyQ2xvc2U7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdmVyTW92ZShldikge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcihmYWxzZSwgZXYpO1xuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XG4gICAgICAgIHZhciBkcmFnRmluYWxYID0gZHJhZ0luaXRQb3NYICsgZHJhZ0RpZlg7XG4gICAgICAgIHZhciBkcmFnRmluYWxZID0gZHJhZ0luaXRQb3NZICsgZHJhZ0RpZlk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gKGRyYWdGaW5hbFggPiAwID8gZHJhZ0ZpbmFsWCA6IDApICsgXCJweFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gKGRyYWdGaW5hbFkgPiAwID8gZHJhZ0ZpbmFsWSA6IDApICsgXCJweFwiO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3ZlckNsb3NlKGV2KSB7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkUmVzaXplcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xuICAgIHZhciBkcmFnSW5pdEV2ZW50WCA9IDA7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcbiAgICB2YXIgZHJhZ0luaXRXaWR0aCA9IDA7XG4gICAgdmFyIGRyYWdJbml0SGVpZ2h0ID0gMDtcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvblJlc2l6ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25SZXNpemVySW5pdDtcbiAgICAgICAgc291cmNlLm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJJbml0KGV2KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcbiAgICAgICAgZHJhZ0luaXRXaWR0aCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS53aWR0aCwgMTApO1xuICAgICAgICBkcmFnSW5pdEhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5oZWlnaHQsIDEwKTtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblJlc2l6ZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uUmVzaXplck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblJlc2l6ZXJDbG9zZTtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25SZXNpemVyQ2xvc2U7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJNb3ZlKGV2KSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRFdmVudFg7XG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbFdpZHRoID0gZHJhZ0luaXRXaWR0aCArIGZyYW1lRHJhZ0RpZlg7XG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbEhlaWdodCA9IGRyYWdJbml0SGVpZ2h0ICsgZnJhbWVEcmFnRGlmWTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID1cbiAgICAgICAgICAgIChmcmFtZURyYWdGaW5hbFdpZHRoID4gMCA/IGZyYW1lRHJhZ0ZpbmFsV2lkdGggOiAwKSArIFwicHhcIjtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9XG4gICAgICAgICAgICAoZnJhbWVEcmFnRmluYWxIZWlnaHQgPiAwID8gZnJhbWVEcmFnRmluYWxIZWlnaHQgOiAwKSArIFwicHhcIjtcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckNsb3NlKGV2KSB7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkU2Nyb2xsZXIodGFyZ2V0LCBkcmFnQ2FsbHMpIHtcbiAgICB2YXIgZHJhZ0luaXRYID0gMDtcbiAgICB2YXIgZHJhZ0luaXRZID0gMDtcbiAgICB2YXIgZHJhZ1Njcm9sbFggPSAwO1xuICAgIHZhciBkcmFnU2Nyb2xsWSA9IDA7XG4gICAgdGFyZ2V0Lm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xuICAgIHRhcmdldC5vbnRvdWNoc3RhcnQgPSBvblNjcm9sbGVySW5pdDtcbiAgICB0YXJnZXQub25tb3VzZWRvd24gPSBvblNjcm9sbGVySW5pdDtcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVySW5pdChldikge1xuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50UG9pbnRlckRvdWJsZSh0cnVlLCBldikpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50UG9pbnRlckxvbmcodHJ1ZSwgZXYpKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIodHJ1ZSwgZXYpO1xuICAgICAgICBkcmFnSW5pdFggPSBwb2ludGVyLnBvc1g7XG4gICAgICAgIGRyYWdJbml0WSA9IHBvaW50ZXIucG9zWTtcbiAgICAgICAgZHJhZ1Njcm9sbFggPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgZHJhZ1Njcm9sbFkgPSB0YXJnZXQuc2Nyb2xsVG9wO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uU2Nyb2xsZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uU2Nyb2xsZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25TY3JvbGxlckNsb3NlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblNjcm9sbGVyQ2xvc2U7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyTW92ZShldikge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcihmYWxzZSwgZXYpO1xuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdFg7XG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0WTtcbiAgICAgICAgdmFyIGRyYWdOZXdYID0gZHJhZ1Njcm9sbFggLSBkcmFnRGlmWDtcbiAgICAgICAgdmFyIGRyYWdOZXdZID0gZHJhZ1Njcm9sbFkgLSBkcmFnRGlmWTtcbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvKGRyYWdOZXdYLCBkcmFnTmV3WSk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyQ2xvc2UoZXYpIHtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG59XG5leHBvcnRzLlFpbkFybSA9IHtcbiAgICBzdG9wRXZlbnQsXG4gICAgbWFrZUV2ZW50UG9pbnRlcixcbiAgICBpc0V2ZW50UG9pbnRlckRvdWJsZSxcbiAgICBpc0V2ZW50UG9pbnRlckxvbmcsXG4gICAgaXNLZXlJbkxpc3QsXG4gICAgaXNLZXlFbnRlcixcbiAgICBpc0tleVNwYWNlLFxuICAgIGlzRmlyc3RCdXR0b24sXG4gICAgaXNNaWRkbGVCdXR0b24sXG4gICAgaXNTZWNvbmRCdXR0b24sXG4gICAgaXNPbmVGaW5nZXIsXG4gICAgaXNUd29GaW5nZXJzLFxuICAgIGlzVGhyZWVGaW5nZXJzLFxuICAgIGlzRm91ckZpbmdlcnMsXG4gICAgaXNQcmltYXJ5UG9pbnQsXG4gICAgaXNBdXhpbGlhcnlQb2ludCxcbiAgICBpc1NlY29uZGFyeVBvaW50LFxuICAgIGFkZEFjdGlvbixcbiAgICBhZGRBY3Rpb25NYWluLFxuICAgIHB1dEFjdGlvblByb3h5LFxuICAgIGFkZE1vdmVyLFxuICAgIGFkZFJlc2l6ZXIsXG4gICAgYWRkU2Nyb2xsZXIsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFybS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQm9keSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lLCBvckRlZmF1bHQpIHtcbiAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb29raWVQYWlyID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICAgIGlmIChuYW1lID09IGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzBdKS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llUGFpclsxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9yRGVmYXVsdDtcbn1cbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiBcIi9cIiB9LCBvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMuZXhwaXJlcykge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIDEgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZGF0ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuICAgIGxldCB1cGRhdGVkQ29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XG59XG5mdW5jdGlvbiBkZWxDb29raWUobmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj07ICBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI7XG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlcykge1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5leHBpcmVzO1xuICAgIH1cbiAgICBmb3IgKGxldCBvcHRpb25LZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xuICAgICAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xufVxuZnVuY3Rpb24gZ2V0VGV4dExpbmVzKGZyb21UZXh0KSB7XG4gICAgcmV0dXJuIGZyb21UZXh0Lm1hdGNoKC9bXlxcclxcbl0rL2cpO1xufVxuZnVuY3Rpb24gZ2V0Q1NWUm93cyhmcm9tVGV4dCwgbmFtZXMpIHtcbiAgICB2YXIgbGluZXMgPSBnZXRUZXh0TGluZXMoZnJvbVRleHQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgIGxldCByb3cgPSAhbmFtZXMgPyBbXSA6IHt9O1xuICAgICAgICBsZXQgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sdW1uX3ZhbHVlID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbHVtbl9pbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGNoYXJfaW5kZXggPSAwOyBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGg7IGNoYXJfaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGFjdHVhbCA9IGxpbmUuY2hhckF0KGNoYXJfaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGluc2lkZV9xdW90ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGggLSAxID8gbGluZS5jaGFyQXQoY2hhcl9pbmRleCArIDEpIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJfaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZV9xdW90ZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zaWRlX3F1b3RlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjdHVhbCA9PSBcIixcIikge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgPSB1bm1hc2tTcGVjaWFsQ2hhcnMoY29sdW1uX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5fbmFtZSA9IFwiY29sX1wiICsgY29sdW1uX2luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbl9pbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbl9uYW1lID0gbmFtZXNbY29sdW1uX2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1tjb2x1bW5fbmFtZV0gPSBjb2x1bW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb2x1bW5fdmFsdWUgPSB1bm1hc2tTcGVjaWFsQ2hhcnMoY29sdW1uX3ZhbHVlKTtcbiAgICAgICAgaWYgKCFuYW1lcykge1xuICAgICAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgY29sdW1uX25hbWUgPSBcImNvbF9cIiArIGNvbHVtbl9pbmRleDtcbiAgICAgICAgICAgIGlmIChjb2x1bW5faW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5fbmFtZSA9IG5hbWVzW2NvbHVtbl9pbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dbY29sdW1uX25hbWVdID0gY29sdW1uX3ZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbWFza1NwZWNpYWxDaGFycyhmcm9tVGV4dCkge1xuICAgIHJldHVybiBmcm9tVGV4dFxuICAgICAgICAucmVwbGFjZShcIlxcXFxcIiwgXCJcXFxcXFxcXFwiKVxuICAgICAgICAucmVwbGFjZShcIlxcclwiLCBcIlxcXFxyXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFxuXCIsIFwiXFxcXG5cIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgXCJcXFxcdFwiKTtcbn1cbmZ1bmN0aW9uIHVubWFza1NwZWNpYWxDaGFycyhmcm9tVGV4dCkge1xuICAgIHJldHVybiBmcm9tVGV4dFxuICAgICAgICAucmVwbGFjZShcIlxcXFxcXFxcXCIsIFwiXFxcXFwiKVxuICAgICAgICAucmVwbGFjZShcIlxcXFxyXCIsIFwiXFxyXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXG5cIiwgXCJcXG5cIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcdFwiLCBcIlxcdFwiKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyhzb3VyY2UpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IG9wZW4gPSBmYWxzZTtcbiAgICBsZXQgYWN0dWFsID0gXCJcIjtcbiAgICBmb3IgKGNvbnN0IGxldHRlciBvZiBBcnJheS5mcm9tKHNvdXJjZSkpIHtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsICs9IGxldHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsZXR0ZXIgPT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsICs9IGxldHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5RaW5Cb2R5ID0ge1xuICAgIGdldENvb2tpZSxcbiAgICBzZXRDb29raWUsXG4gICAgZGVsQ29va2llLFxuICAgIGdldFRleHRMaW5lcyxcbiAgICBnZXRDU1ZSb3dzLFxuICAgIG1hc2tTcGVjaWFsQ2hhcnMsXG4gICAgdW5tYXNrU3BlY2lhbENoYXJzLFxuICAgIHBhcnNlUGFyYW1ldGVycyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYm9keS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB2b2lkIDA7XG52YXIgUWluRmlsZXNOYXR1cmU7XG4oZnVuY3Rpb24gKFFpbkZpbGVzTmF0dXJlKSB7XG4gICAgUWluRmlsZXNOYXR1cmVbXCJCT1RIXCJdID0gXCJib3RoXCI7XG4gICAgUWluRmlsZXNOYXR1cmVbXCJESVJFQ1RPUklFU1wiXSA9IFwiZGlyZWN0b3JpZXNcIjtcbiAgICBRaW5GaWxlc05hdHVyZVtcIkZJTEVTXCJdID0gXCJmaWxlc1wiO1xufSkoUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlIHx8IChleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0ge30pKTtcbnZhciBRaW5GaWxlc09wZXJhdGlvbjtcbihmdW5jdGlvbiAoUWluRmlsZXNPcGVyYXRpb24pIHtcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIk9QRU5cIl0gPSBcIm9wZW5cIjtcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIlNBVkVcIl0gPSBcInNhdmVcIjtcbn0pKFFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiB8fCAoZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IHt9KSk7XG5jbGFzcyBRaW5GaWxlc0Rlc2NyaXB0b3Ige1xufVxuZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBRaW5GaWxlc0Rlc2NyaXB0b3I7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG59XG5mdW5jdGlvbiBpc0xvY2FsSG9zdCgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbigpO1xuICAgIHZhciBzdGFydCA9IGxvY2F0aW9uLmluZGV4T2YoXCI6Ly9cIik7XG4gICAgaWYgKHN0YXJ0ID09IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXJ0ICs9IDM7XG4gICAgfVxuICAgIGxvY2F0aW9uID0gbG9jYXRpb24uc3Vic3RyaW5nKHN0YXJ0KTtcbiAgICByZXR1cm4gbG9jYXRpb24uaW5kZXhPZihcImxvY2FsaG9zdFwiKSA9PT0gMCB8fCBsb2NhdGlvbi5pbmRleE9mKFwiMTI3LjAuMC4xXCIpID09PSAwO1xufVxuZnVuY3Rpb24gZ2V0U2VwYXJhdG9yKG9mUGF0aCkge1xuICAgIGxldCByZXN1bHQgPSBcIi9cIjtcbiAgICBpZiAob2ZQYXRoICYmIG9mUGF0aC5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiXFxcXFwiO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0UGF0aEpvaW4ocGF0aEEsIHBhdGhCKSB7XG4gICAgaWYgKHBhdGhBID09IG51bGwgfHwgcGF0aEEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhdGhBID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKHBhdGhCID09IG51bGwgfHwgcGF0aEIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhdGhCID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKHBhdGhBLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBwYXRoQjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aEIubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdGhBO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHVuaW9uID0gXCIvXCI7XG4gICAgICAgIGlmIChwYXRoQS5pbmRleE9mKFwiXFxcXFwiKSA+IC0xIHx8IHBhdGhCLmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcbiAgICAgICAgICAgIHVuaW9uID0gXCJcXFxcXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGhBRW5kID0gcGF0aEEuc3Vic3RyaW5nKHBhdGhBLmxlbmd0aCAtIDEsIHBhdGhBLmxlbmd0aCk7XG4gICAgICAgIGxldCBwYXRoQlN0YXJ0ID0gcGF0aEIuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICBpZiAocGF0aEFFbmQgPT0gdW5pb24gfHwgcGF0aEJTdGFydCA9PSB1bmlvbikge1xuICAgICAgICAgICAgdW5pb24gPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoQSArIHVuaW9uICsgcGF0aEI7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0UGFyZW50KHBhdGgpIHtcbiAgICBpZiAocGF0aCkge1xuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xuICAgICAgICBsZXQgbGFzdCA9IHBhdGgubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKGxhc3QgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIGxhc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0U3RlbShwYXRoKSB7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgICAgbGV0IHNlcGFyYXRvciA9IGdldFNlcGFyYXRvcihwYXRoKTtcbiAgICAgICAgbGV0IGxhc3QgPSBwYXRoLmxhc3RJbmRleE9mKHNlcGFyYXRvcik7XG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cmluZyhsYXN0ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKG5hbWUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBuYW1lLmxhc3RJbmRleE9mKFwiLlwiKTtcbiAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICByZXR1cm4gbmFtZS5zdWJzdHJpbmcocG9zaXRpb24gKyAxKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cbmNvbnN0IGFwcHNFeHRlbnNpb25zID0gW1xuICAgIFwiaHRtXCIsIFwiaHRtbFwiLCBcImNzc1wiLCBcImpzXCIsIFwianN4XCIsIFwidHNcIiwgXCJ0c3hcIiwgXCJwaHRtbFwiXG5dO1xuZnVuY3Rpb24gaXNGaWxlQXBwKGV4dGVuc2lvbikge1xuICAgIHJldHVybiBhcHBzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IGNtZHNFeHRlbnNpb25zID0gW1xuICAgIFwiaFwiLCBcImNcIiwgXCJocHBcIiwgXCJjcHBcIiwgXCJyc1wiLCBcImpsXCIsXG4gICAgXCJjc1wiLCBcImNzcHJvalwiLCBcImZzXCIsIFwibWxcIiwgXCJmc2lcIiwgXCJtbGlcIiwgXCJmc3hcIiwgXCJmc3NjcmlwdFwiLFxuICAgIFwiamF2YVwiLCBcImd5XCIsIFwiZ3Z5XCIsIFwiZ3Jvb3Z5XCIsIFwic2NcIiwgXCJzY2FsYVwiLCBcImNsalwiLFxuICAgIFwicHlcIiwgXCJydWJ5XCIsIFwicGhwXCIsIFwicGh0bWxcIixcbl07XG5mdW5jdGlvbiBpc0ZpbGVDbWQoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGNtZHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgZXhlY0V4dGVuc2lvbnMgPSBbXG4gICAgXCJleGVcIiwgXCJqYXJcIiwgXCJjb21cIiwgXCJiYXRcIiwgXCJzaFwiXG5dO1xuZnVuY3Rpb24gaXNGaWxlRXhlYyhleHRlbnNpb24pIHtcbiAgICByZXR1cm4gZXhlY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCBpbWFnZUV4dGVuc2lvbnMgPSBbXG4gICAgXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwiZ2lmXCIsIFwiYm1wXCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVJbWFnZShleHRlbnNpb24pIHtcbiAgICByZXR1cm4gaW1hZ2VFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgdmVjdG9yRXh0ZW5zaW9ucyA9IFtcbiAgICBcInN2Z1wiXG5dO1xuZnVuY3Rpb24gaXNGaWxlVmVjdG9yKGV4dGVuc2lvbikge1xuICAgIHJldHVybiB2ZWN0b3JFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgbW92aWVFeHRlbnNpb25zID0gW1xuICAgIFwiYXZpXCIsIFwibXA0XCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVNb3ZpZShleHRlbnNpb24pIHtcbiAgICByZXR1cm4gbW92aWVFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgbXVzaWNFeHRlbnNpb25zID0gW1xuICAgIFwid2F2XCIsIFwibXAzXCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVNdXNpYyhleHRlbnNpb24pIHtcbiAgICByZXR1cm4gbXVzaWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgemlwcGVkRXh0ZW5zaW9ucyA9IFtcbiAgICBcInppcFwiLCBcInJhclwiLCBcIjd6XCIsIFwidGFyXCIsIFwiZ3pcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZVppcHBlZChleHRlbnNpb24pIHtcbiAgICByZXR1cm4gemlwcGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmV4cG9ydHMuUWluRm9vdCA9IHtcbiAgICBnZXRMb2NhdGlvbixcbiAgICBpc0xvY2FsSG9zdCxcbiAgICBnZXRTZXBhcmF0b3IsXG4gICAgZ2V0UGF0aEpvaW4sXG4gICAgZ2V0UGFyZW50LFxuICAgIGdldFN0ZW0sXG4gICAgZ2V0RmlsZUV4dGVuc2lvbixcbiAgICBpc0ZpbGVBcHAsXG4gICAgaXNGaWxlQ21kLFxuICAgIGlzRmlsZUV4ZWMsXG4gICAgaXNGaWxlSW1hZ2UsXG4gICAgaXNGaWxlVmVjdG9yLFxuICAgIGlzRmlsZU1vdmllLFxuICAgIGlzRmlsZU11c2ljLFxuICAgIGlzRmlsZVppcHBlZCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZm9vdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluSGVhZCA9IGV4cG9ydHMuUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkJvdW5kcyA9IGV4cG9ydHMuUWluRGltZW5zaW9uID0gZXhwb3J0cy5RaW5Qb2ludCA9IHZvaWQgMDtcbmNsYXNzIFFpblBvaW50IHtcbn1cbmV4cG9ydHMuUWluUG9pbnQgPSBRaW5Qb2ludDtcbjtcbmNsYXNzIFFpbkRpbWVuc2lvbiB7XG59XG5leHBvcnRzLlFpbkRpbWVuc2lvbiA9IFFpbkRpbWVuc2lvbjtcbjtcbmNsYXNzIFFpbkJvdW5kcyB7XG59XG5leHBvcnRzLlFpbkJvdW5kcyA9IFFpbkJvdW5kcztcbjtcbnZhciBRaW5HcmFuZGV1cjtcbihmdW5jdGlvbiAoUWluR3JhbmRldXIpIHtcbiAgICBRaW5HcmFuZGV1cltcIlNNQUxMXCJdID0gXCJzbWFsbFwiO1xuICAgIFFpbkdyYW5kZXVyW1wiTUVESVVNXCJdID0gXCJtZWRpdW1cIjtcbiAgICBRaW5HcmFuZGV1cltcIkxBUkdFXCJdID0gXCJsYXJnZVwiO1xufSkoUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkdyYW5kZXVyIHx8IChleHBvcnRzLlFpbkdyYW5kZXVyID0ge30pKTtcbmZ1bmN0aW9uIGdldERlc2tBUEkoKSB7XG4gICAgdmFyIHdpbiA9IHdpbmRvdztcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luID0gd2luZG93LnBhcmVudDtcbiAgICB9XG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdpbiA9IHdpbmRvdy50b3A7XG4gICAgfVxuICAgIGlmICh3aW4uZGVza0FQSSkge1xuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5jb25zdCBsb2dnZWQgPSBbXTtcbmZ1bmN0aW9uIGdldExvZ2dlZCgpIHtcbiAgICByZXR1cm4gbG9nZ2VkO1xufVxuZnVuY3Rpb24gbG9nKG1lc3NhZ2UpIHtcbiAgICBsb2dnZWQucHVzaChtZXNzYWdlKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgY2F0Y2ggKF8pIHsgfVxuICAgIHRyeSB7XG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwibG9nT25NYWluXCIsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjYXRjaCAoXykgeyB9XG59XG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvciwgb3JpZ2luKSB7XG4gICAgbG9nKGdldEVycm9yTWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XG59XG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJQcm9ibGVtIHdpdGg6XCIsIGVycm9yLCBvcmlnaW4pO1xufVxuZnVuY3Rpb24gbG9nV2FybmluZyhlcnJvciwgb3JpZ2luKSB7XG4gICAgbG9nKGdldFdhcm5pbmdNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcbn1cbmZ1bmN0aW9uIGdldFdhcm5pbmdNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKFwiQ2hlY2tvdXQgdGhpczpcIiwgZXJyb3IsIG9yaWdpbik7XG59XG5mdW5jdGlvbiBsb2dTdXBwb3J0KGVycm9yLCBvcmlnaW4pIHtcbiAgICBsb2coZ2V0U3VwcG9ydE1lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xufVxuZnVuY3Rpb24gZ2V0U3VwcG9ydE1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJOZWVkIFN1cHBvcnQgb246XCIsIGVycm9yLCBvcmlnaW4pO1xufVxuZnVuY3Rpb24gZ2V0VHJlYXRNZXNzYWdlKHByZWZpeCwgZXJyb3IsIG9yaWdpbikge1xuICAgIHZhciByZXN1bHQgPSBwcmVmaXggKyAoZXJyb3IgPyBcIiBcIiArIGVycm9yLnRvU3RyaW5nKCkgOiBcIlwiKTtcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICB2YXIgZXJyb3JEYXRhID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgaWYgKCEodHlwZW9mIGVycm9yRGF0YSA9PSBcInN0cmluZ1wiIHx8IGVycm9yRGF0YSBpbnN0YW5jZW9mIFN0cmluZykpIHtcbiAgICAgICAgICAgIGVycm9yRGF0YSA9IEpTT04uc3RyaW5naWZ5KGVycm9yRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gRGF0YTogXCIgKyBlcnJvckRhdGE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoISh0eXBlb2YgZXJyb3IgPT0gXCJzdHJpbmdcIiB8fCBlcnJvciBpbnN0YW5jZW9mIFN0cmluZykpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiAtIERhdGE6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcmlnaW4pIHtcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gT3JpZ2luOiBcIiArIG9yaWdpbjtcbiAgICB9XG4gICAgY29uc3Qgc3RhY2sgPSAobmV3IEVycm9yKFwiXCIpKS5zdGFjaztcbiAgICBpZiAoc3RhY2spIHtcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gU3RhY2s6IFwiICsgc3RhY2s7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiB0b2dnbGVEZXZUb29scygpIHtcbiAgICB0cnkge1xuICAgICAgICBnZXREZXNrQVBJKCkuc2VuZChcInRvZ2dsZURldlRvb2xzXCIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBsb2dFcnJvcihlLCBcIntxaW5wZWwtcmVzfShFcnJDb2RlLTAwMDAwMSlcIik7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5IZWFkID0ge1xuICAgIGdldERlc2tBUEksXG4gICAgZ2V0TG9nZ2VkLFxuICAgIGxvZyxcbiAgICBsb2dFcnJvcixcbiAgICBnZXRFcnJvck1lc3NhZ2UsXG4gICAgbG9nV2FybmluZyxcbiAgICBnZXRXYXJuaW5nTWVzc2FnZSxcbiAgICBsb2dTdXBwb3J0LFxuICAgIGdldFN1cHBvcnRNZXNzYWdlLFxuICAgIGdldFRyZWF0TWVzc2FnZSxcbiAgICB0b2dnbGVEZXZUb29scyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taGVhZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluU2tpbiA9IGV4cG9ydHMuUWluU3R5bGVzID0gdm9pZCAwO1xuY29uc3QgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcbmNvbnN0IHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbmV4cG9ydHMuUWluU3R5bGVzID0ge1xuICAgIENvbG9yRm9yZWdyb3VuZDogXCIjMjcwMDM2XCIsXG4gICAgQ29sb3JCYWNrZ3JvdW5kOiBcIiNmZmZhZWZcIixcbiAgICBDb2xvckluYWN0aXZlOiBcIiNmYWVmZmZcIixcbiAgICBDb2xvckFjdGl2ZTogXCIjZmFjZGNkXCIsXG4gICAgRm9udE5hbWU6IFwiU291cmNlU2Fuc1Byb1wiLFxuICAgIEZvbnRTaXplOiBcIjE2cHhcIixcbn07XG5mdW5jdGlvbiBzdHlsZUFzQm9keShlbCkge1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgZWwuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgIGVsLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgZWwuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XG4gICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbn1cbmZ1bmN0aW9uIHN0eWxlQXNFZGl0KGVsKSB7XG4gICAgZWwuc3R5bGUubWFyZ2luID0gXCIxcHhcIjtcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcbiAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE4MDAyN1wiO1xuICAgIGVsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiM3B4XCI7XG4gICAgZWwuc3R5bGUuY29sb3IgPSBcIiMxODAwMjdcIjtcbiAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICBlbC5zdHlsZS5mb250RmFtaWx5ID0gXCJTb3VyY2VTYW5zUHJvXCI7XG4gICAgZWwuc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZWZmZlwiO1xuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYWUwMDAwXCI7XG4gICAgfSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE4MDAyN1wiO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc3R5bGVNYXhTaXplRm9yTm90T3ZlckZsb3coZWwsIHBhcmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiRDFcIik7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc29sZS5sb2coXCJEMjogXCIgKyBwYXJlbnQpO1xuICAgIH1cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGxldCBtYXhXaWR0aCA9IDA7XG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgICAgICBsZXQgaW1lZGlhdGUgPSBlbDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCArIGltZWRpYXRlLmNsaWVudExlZnQ7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgKyBpbWVkaWF0ZS5jbGllbnRUb3A7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkQzOiBcIiArIG1heFdpZHRoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDQ6IFwiICsgbWF4SGVpZ2h0KTtcbiAgICAgICAgICAgIGltZWRpYXRlID0gaW1lZGlhdGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgfSB3aGlsZSAoaW1lZGlhdGUgIT0gbnVsbCAmJiBpbWVkaWF0ZSAhPSBwYXJlbnQpO1xuICAgICAgICBtYXhXaWR0aCA9IHBhcmVudC5jbGllbnRXaWR0aCAtIG1heFdpZHRoO1xuICAgICAgICBtYXhIZWlnaHQgPSBwYXJlbnQuY2xpZW50SGVpZ2h0IC0gbWF4SGVpZ2h0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkQ1OiBcIiArIG1heFdpZHRoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJENjogXCIgKyBtYXhIZWlnaHQpO1xuICAgICAgICBlbC5zdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoICsgXCJweFwiO1xuICAgICAgICBlbC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxufVxuZnVuY3Rpb24gc3R5bGVTaXplKGVsLCBzaXplKSB7XG4gICAgaWYgKHNpemUpIHtcbiAgICAgICAgaWYgKHNpemUgaW5zdGFuY2VvZiBxaW5faGVhZF8xLlFpbkRpbWVuc2lvbikge1xuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGltID0gZ2V0RGltZW5zaW9uU2l6ZShzaXplKTtcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gZGltLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gZGltLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHN0eWxlRmxleE1heChlbCkge1xuICAgIGVsLnN0eWxlLmZsZXggPSBcIjFcIjtcbn1cbmZ1bmN0aW9uIHN0eWxlRmxleE1pbihlbCkge1xuICAgIGVsLnN0eWxlLmZsZXggPSBcIjBcIjtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVTdHlsZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IGdldFdpbmRvd1NpemUoKS53aWR0aDtcbiAgICBpZiAod2lkdGggPCA2MDApIHtcbiAgICAgICAgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXIuU01BTEw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpZHRoIDwgMTAwMCkge1xuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5NRURJVU07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5MQVJHRTtcbiAgICB9XG59XG5mdW5jdGlvbiBoaWRlQWxsSUZyYW1lcygpIHtcbiAgICB2YXIgZG9jX2lmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvY19pZnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XG4gICAgICAgIGRvY19pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfVxufVxuZnVuY3Rpb24gc2hvd0FsbElGcmFtZXMoKSB7XG4gICAgdmFyIGRvY19pZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZG9jX2lmcmFtZSA9IGRvY19pZnJhbWVzW2ldO1xuICAgICAgICBkb2NfaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9XG59XG5mdW5jdGlvbiBkaXNhYmxlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICBlbGVtZW50LnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICBlbGVtZW50Lm9uc2VsZWN0c3RhcnQgPSBxaW5fYXJtXzEuUWluQXJtLnN0b3BFdmVudDtcbn1cbmZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICB9XG4gICAgfSwgMzYwKTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGVJblNjcm9sbChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRUb3AgPCBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0TGVmdCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxMZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuY2xpZW50V2lkdGggPlxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC1cbiAgICAgICAgICAgICAgICAoZWxlbWVudC5vZmZzZXRMZWZ0IC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLVxuICAgICAgICAgICAgICAgIChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3ApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBnZXREaW1lbnNpb25TaXplKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA9PSBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLkxBUkdFKSB7XG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25MYXJnZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzaXplID09IHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTUVESVVNKSB7XG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25NZWRpdW0oKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25TbWFsbCgpO1xuICAgIH1cbn1cbmNvbnN0IGRpbWVuc2lvblNtYWxsID0ge1xuICAgIHdpZHRoOiAxNixcbiAgICBoZWlnaHQ6IDE2LFxufTtcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNtYWxsKCkge1xuICAgIHJldHVybiBkaW1lbnNpb25TbWFsbDtcbn1cbmNvbnN0IGRpbWVuc2lvbk1lZGl1bSA9IHtcbiAgICB3aWR0aDogMzIsXG4gICAgaGVpZ2h0OiAzMixcbn07XG5mdW5jdGlvbiBnZXREaW1lbnNpb25NZWRpdW0oKSB7XG4gICAgcmV0dXJuIGRpbWVuc2lvbk1lZGl1bTtcbn1cbmNvbnN0IGRpbWVuc2lvbkxhcmdlID0ge1xuICAgIHdpZHRoOiA2NCxcbiAgICBoZWlnaHQ6IDY0LFxufTtcbmZ1bmN0aW9uIGdldERpbWVuc2lvbkxhcmdlKCkge1xuICAgIHJldHVybiBkaW1lbnNpb25MYXJnZTtcbn1cbmV4cG9ydHMuUWluU2tpbiA9IHtcbiAgICBzdHlsZXM6IGV4cG9ydHMuUWluU3R5bGVzLFxuICAgIHN0eWxlQXNCb2R5LFxuICAgIHN0eWxlQXNFZGl0LFxuICAgIHN0eWxlTWF4U2l6ZUZvck5vdE92ZXJGbG93LFxuICAgIHN0eWxlU2l6ZSxcbiAgICBzdHlsZUZsZXhNYXgsXG4gICAgc3R5bGVGbGV4TWluLFxuICAgIGdldFdpbmRvd1NpemUsXG4gICAgZ2V0V2luZG93U2l6ZVN0eWxlLFxuICAgIGhpZGVBbGxJRnJhbWVzLFxuICAgIHNob3dBbGxJRnJhbWVzLFxuICAgIGRpc2FibGVTZWxlY3Rpb24sXG4gICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgaXNFbGVtZW50VmlzaWJsZUluU2Nyb2xsLFxuICAgIGdldERpbWVuc2lvblNpemUsXG4gICAgZ2V0RGltZW5zaW9uU21hbGwsXG4gICAgZ2V0RGltZW5zaW9uTWVkaXVtLFxuICAgIGdldERpbWVuc2lvbkxhcmdlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1za2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Tb3VsID0gdm9pZCAwO1xuY29uc3QgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcbmNvbnN0IHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcbmNvbnN0IHFpbl9mb290XzEgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbmNvbnN0IHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbmNvbnN0IHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcbmV4cG9ydHMuUWluU291bCA9IHtcbiAgICBhcm06IHFpbl9hcm1fMS5RaW5Bcm0sXG4gICAgYm9keTogcWluX2JvZHlfMS5RaW5Cb2R5LFxuICAgIGZvb3Q6IHFpbl9mb290XzEuUWluRm9vdCxcbiAgICBoZWFkOiBxaW5faGVhZF8xLlFpbkhlYWQsXG4gICAgc2tpbjogcWluX3NraW5fMS5RaW5Ta2luLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zb3VsLmpzLm1hcCJdfQ==
