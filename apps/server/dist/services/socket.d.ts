import { Server } from 'socket.io';
declare class SocketService {
    private _io;
    constructor();
    initListners(): void;
    get io(): Server<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
}
export default SocketService;
//# sourceMappingURL=socket.d.ts.map