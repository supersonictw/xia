<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="contact-list">
    <div id="contact-list-type">
      <a href="#">Contact</a>
      <a href="#">Group</a>
    </div>
    <div class="contact-item">
      <a href="#">
        <div id="contact">
          <img
            class="picture-icon"
            src="https://avatars1.githubusercontent.com/u/13705584"
          />
          <div>
            <h3>Contact Name</h3>
            <p>Status Messages</p>
          </div>
        </div></a
      >
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

#contact-list {
  margin: 10px 10px 10px 10px;
  width: 200px;
  height: 350px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  overflow: scroll;
}

#contact-list-type {
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

#contact-list-type a {
  margin: 0 10px 0 10px;
}

.contact-item {
  text-align: left;
  margin: 10px 0 10px 0;
}

#contact {
  display: flex;
  width: auto;
  height: 50px;
  color: rgba(0, 0, 0, 0.7);
}

#contact .picture-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

#contact h3 {
  width: auto;
  height: 18px;
  font-size: 15px;
  margin: 5px auto;
}

#contact p {
  width: auto;
  height: 15px;
  font-size: 12px;
  margin: 5px auto;
}

.picture-icon {
  width: 90px;
  height: 90px;
  border-radius: 90px;
}
</style>
