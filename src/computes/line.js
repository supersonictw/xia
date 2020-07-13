/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

import thrift from "thrift";
import Constant from "@/data/const.js";
import talkService from "@/computes/line/TalkService.js";

let lineClient = function(path, authToken = null) {
  let header = {
    "X-Line-Application": Constant.LINE_APPLICATION_IDENTITY,
  };

  if (authToken !== null) {
    header["X-Line-Access"] = authToken;
  }

  let host = Constant.LINE_SERVER_HOST;
  let port = Constant.LINE_USE_HTTPS ? 443 : 80;
  let opts = {
    transport: thrift.TBufferedTransport,
    protocol: thrift.TCompactProtocol,
    headers: header,
    https: Constant.LINE_USE_HTTPS,
    path: path,
    useCORS: true,
  };

  let connection = thrift.createHttpConnection(host, port, opts);
  let thriftClient = thrift.createHttpClient(talkService, connection);

  connection.on("error", (err) => {
    console.error(err);
  });

  return thriftClient;
};

export default lineClient;
