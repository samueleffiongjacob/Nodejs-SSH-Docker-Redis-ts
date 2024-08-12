import { send } from "./request.mjs";
import { read } from "./response.mjs";

export default {
    rep: send,
    res: read
};