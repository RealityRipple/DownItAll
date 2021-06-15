/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
/* globals content, sendAsyncMessage, addMessageListener, removeMessageListener */
(function() {
"use strict";

function handleGetURI(m) {
 sendAsyncMessage(m.data.topic, {
  location: content.location.href,
  characterSet: content.document.characterSet
 });
}

function handleShutdown() {
 removeMessageListener("DIA:ch:getURI", handleGetURI);
 removeMessageListener("DIA:ch:shutdown", handleShutdown);

}

addMessageListener("DIA:ch:getURI", handleGetURI);
addMessageListener("DIA:ch:shutdown", handleShutdown);

})();
