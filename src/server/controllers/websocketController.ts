import { $emitter } from "../../data/Emitter";
import { controller } from "../plugins/controllers";

export default controller(async (server) => {
    server.get("/ws", { websocket: true }, (connection, req) => {
        const onGlobalsUpdate = async () => {
            
        }

        $emitter.onGlobalsUpdate(onGlobalsUpdate);

        connection.on("close", () => {
            $emitter.offGlobalsUpdate(onGlobalsUpdate);
        })
    });
});
