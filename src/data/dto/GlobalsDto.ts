import { Globals } from "../Globals";

export class GlobalsDto {
    constructor(
        public hello: string
    ) {}

    public fromGlobals(globals: Globals): GlobalsDto {
        return new GlobalsDto(globals.getHello())
    }
}