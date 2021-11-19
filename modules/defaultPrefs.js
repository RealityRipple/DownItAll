"use strict";

/* global pref */
pref("extensions.dia.ctxmenu", "1,1,0");
pref("extensions.dia.ctxcompact", false);
pref("extensions.dia.toolsmenu", "0,0,0");
pref("extensions.dia.toolshidden", false);
pref("extensions.dia.closedia", false);
pref("extensions.dia.saveTemp", false);
pref("extensions.dia.downloadWin", true);
pref("extensions.dia.conflictresolution", 3);
pref("extensions.dia.ntask", 8);
pref("extensions.dia.timeout", 300);
pref("extensions.dia.maxchunks", 4);
pref("extensions.dia.history", 5);
pref("extensions.dia.alertbox", 2);
pref("extensions.dia.removecompleted", true);
pref("extensions.dia.removecompletedimmediate", false);
pref("extensions.dia.removecanceled", false);
pref("extensions.dia.removeaborted", false);
pref("extensions.dia.infophrases", true);
pref("extensions.dia.statistics", false); // later use!
pref("extensions.dia.logging", false);
pref("extensions.dta.selectextension", false);
pref("extensions.dia.sounds.done", true);
pref("extensions.dia.sounds.error", false);
pref("extensions.dia.settime", true);
pref("extensions.dia.showtooltip", true);
pref("extensions.dia.renaming.default", JSON.stringify([
 "*name*.*ext*", "*num*_*name*.*ext*", "*url*-*name*.*ext*",
 "*name* (*text*).*ext*", "*name* (*hh*-*mm*).*ext*"
 ]));
pref("extensions.dia.filter.default", JSON.stringify([
 "", "/\\.mp3$/", "/\\.(html|htm|rtf|doc|pdf)$/",
 "http://www.website.com/subdir/*.*",
 "http://www.website.com/subdir/pre*.???",
 "*.z??, *.css, *.html"
 ]));
pref("extensions.dia.lastqueued", false);
pref("extensions.dia.lastalltabs", false);
pref("extensions.dia.rememberoneclick", false);
pref("extensions.dia.autoretryinterval", 300);
pref("extensions.dia.maxautoretries", 5);
pref("extensions.dia.autoclearcomplete", false);
pref("extensions.dia.confirmcancel", true);
pref("extensions.dia.confirmremove", true);
pref("extensions.dia.confirmremovecompleted", true);
pref("extensions.dia.permissions", 416);
pref("extensions.dia.loadendfirst", 0);
pref("extensions.dia.loadendfirst", 0);
pref("extensions.dia.startminimized", false);
pref("extensions.dia.flatreplacementchar", "-");
pref("extensions.dia.recoverallhttperrors", false);
pref("extensions.dia.selectbgimages", false);
pref("extensions.dia.nagnever", false);
pref("extensions.dia.nagnext", 500);
pref("extensions.dia.speedlimit", -1);
pref("extensions.dia.listsniffedvideos", false);
pref("extensions.dia.nokeepalive", true);
pref("extensions.dia.resumeonerror", false);
pref("extensions.dia.textlinks", true);
pref("extensions.dia.serverlimit.perserver", 4);
pref("extensions.dia.serverlimit.connectionscheduler", 'fast');
pref("extensions.dia.exposeInUA", false);
pref("extensions.dia.sparsefiles", false);
pref("extensions.dia.autosegments", true);
pref("extensions.dia.notification2", 2);
pref("extensions.dia.usesysalerts", true);
pref("extensions.dia.seriesdigits", 3);
pref("extensions.dia.usecleanrequests", false);
pref("extensions.dia.showactions", true);

// Non-customizable-toolbar specific
pref("extensions.dia.tb.buttons", "1,1,0");

/**
 * Schedule
 */
pref("extensions.dia.schedule.enabled", false);
pref("extensions.dia.schedule.start", 0);
pref("extensions.dia.schedule.end", 1380); // 23:00
pref("extensions.dia.schedule.open", true);

/**
 * Privacy Controls
 */
pref("privacy.cpd.extensions-dia", false);
pref("privacy.clearOnShutdown.extensions-dia", false);

pref("extensions.mintrayr.downthemall.watchmanager", false);
