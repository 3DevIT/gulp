// Del include
import {deleteAsync} from "del";

// Url include
import url from "../settings/url.js";

// Del
export default () => {
    return deleteAsync(url.ready)
}
