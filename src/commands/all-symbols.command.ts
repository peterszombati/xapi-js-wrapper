import {BaseCommand} from "./base.command";

export class AllSymbolsCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'getAllSymbols';
    }
}
