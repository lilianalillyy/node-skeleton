import { $emitter } from "./Emitter";

export class Globals {
    private hello: string = "world";

    public getHello(): string {
        return this.hello;
    }

    public setHello(hello: string): string {
        this.hello = hello;

        $emitter.emitGlobalsUpdate();

        return this.hello;
    }
}

export const $globals = new Globals();