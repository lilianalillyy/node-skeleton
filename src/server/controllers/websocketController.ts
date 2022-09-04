import { $s } from "../../container";
import { GlobalsDto } from "../../data/dto/GlobalsDto";
import { $emitter } from "../../data/Emitter";
import { controller } from "../plugins/controllers";
import { socketSend } from "../websocket";

export default controller(async (server) => {
    server.get("/ws", { websocket: true }, (connection, req) => {
        const onGlobalsUpdate = async () => {
            socketSend(connection.socket, GlobalsDto.fromGlobals($s("globals")))
        }

        $emitter.onGlobalsUpdate(onGlobalsUpdate);

        connection.on("close", () => {
            $emitter.offGlobalsUpdate(onGlobalsUpdate);
        })
    });
});
