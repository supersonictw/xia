/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

import Vue from 'vue'
import LineClient from "@/client/index"

class Client {}

Client.install = function (Vue) {
    const client = new LineClient()
    Vue.prototype.$client = client
}

Vue.use(Client)

export default new Auth()
