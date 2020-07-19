/*jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./line_types');
//HELPER FUNCTIONS AND STRUCTURES

var ChannelService_approveChannelAndIssueChannelToken_args = function(args) {
  this.channelId = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
  }
};
ChannelService_approveChannelAndIssueChannelToken_args.prototype = {};
ChannelService_approveChannelAndIssueChannelToken_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_approveChannelAndIssueChannelToken_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_approveChannelAndIssueChannelToken_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_approveChannelAndIssueChannelToken_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ChannelToken(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_approveChannelAndIssueChannelToken_result.prototype = {};
ChannelService_approveChannelAndIssueChannelToken_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ChannelToken();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_approveChannelAndIssueChannelToken_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_approveChannelAndIssueChannelToken_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_approveChannelAndIssueRequestToken_args = function(args) {
  this.channelId = null;
  this.otpId = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.otpId !== undefined && args.otpId !== null) {
      this.otpId = args.otpId;
    }
  }
};
ChannelService_approveChannelAndIssueRequestToken_args.prototype = {};
ChannelService_approveChannelAndIssueRequestToken_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.otpId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_approveChannelAndIssueRequestToken_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_approveChannelAndIssueRequestToken_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.otpId !== null && this.otpId !== undefined) {
    output.writeFieldBegin('otpId', Thrift.Type.STRING, 2);
    output.writeString(this.otpId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_approveChannelAndIssueRequestToken_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_approveChannelAndIssueRequestToken_result.prototype = {};
ChannelService_approveChannelAndIssueRequestToken_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_approveChannelAndIssueRequestToken_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_approveChannelAndIssueRequestToken_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_fetchNotificationItems_args = function(args) {
  this.localRev = null;
  if (args) {
    if (args.localRev !== undefined && args.localRev !== null) {
      this.localRev = args.localRev;
    }
  }
};
ChannelService_fetchNotificationItems_args.prototype = {};
ChannelService_fetchNotificationItems_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.localRev = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_fetchNotificationItems_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_fetchNotificationItems_args');
  if (this.localRev !== null && this.localRev !== undefined) {
    output.writeFieldBegin('localRev', Thrift.Type.I64, 2);
    output.writeI64(this.localRev);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_fetchNotificationItems_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.NotificationFetchResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_fetchNotificationItems_result.prototype = {};
ChannelService_fetchNotificationItems_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.NotificationFetchResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_fetchNotificationItems_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_fetchNotificationItems_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getApprovedChannels_args = function(args) {
  this.lastSynced = null;
  this.locale = null;
  if (args) {
    if (args.lastSynced !== undefined && args.lastSynced !== null) {
      this.lastSynced = args.lastSynced;
    }
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
ChannelService_getApprovedChannels_args.prototype = {};
ChannelService_getApprovedChannels_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.lastSynced = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getApprovedChannels_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getApprovedChannels_args');
  if (this.lastSynced !== null && this.lastSynced !== undefined) {
    output.writeFieldBegin('lastSynced', Thrift.Type.I64, 2);
    output.writeI64(this.lastSynced);
    output.writeFieldEnd();
  }
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 3);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getApprovedChannels_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ApprovedChannelInfos(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getApprovedChannels_result.prototype = {};
ChannelService_getApprovedChannels_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ApprovedChannelInfos();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getApprovedChannels_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getApprovedChannels_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannelInfo_args = function(args) {
  this.channelId = null;
  this.locale = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
ChannelService_getChannelInfo_args.prototype = {};
ChannelService_getChannelInfo_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannelInfo_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannelInfo_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 2);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 3);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannelInfo_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ChannelInfo(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getChannelInfo_result.prototype = {};
ChannelService_getChannelInfo_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ChannelInfo();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannelInfo_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannelInfo_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannelNotificationSetting_args = function(args) {
  this.channelId = null;
  this.locale = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
ChannelService_getChannelNotificationSetting_args.prototype = {};
ChannelService_getChannelNotificationSetting_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannelNotificationSetting_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannelNotificationSetting_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 2);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannelNotificationSetting_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ChannelNotificationSetting(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getChannelNotificationSetting_result.prototype = {};
ChannelService_getChannelNotificationSetting_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ChannelNotificationSetting();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannelNotificationSetting_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannelNotificationSetting_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannelNotificationSettings_args = function(args) {
  this.locale = null;
  if (args) {
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
ChannelService_getChannelNotificationSettings_args.prototype = {};
ChannelService_getChannelNotificationSettings_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannelNotificationSettings_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannelNotificationSettings_args');
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 1);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannelNotificationSettings_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.ChannelNotificationSetting]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getChannelNotificationSettings_result.prototype = {};
ChannelService_getChannelNotificationSettings_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size720 = 0;
        var _rtmp3724;
        this.success = [];
        var _etype723 = 0;
        _rtmp3724 = input.readListBegin();
        _etype723 = _rtmp3724.etype;
        _size720 = _rtmp3724.size;
        for (var _i725 = 0; _i725 < _size720; ++_i725)
        {
          var elem726 = null;
          elem726 = new ttypes.ChannelNotificationSetting();
          elem726.read(input);
          this.success.push(elem726);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannelNotificationSettings_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannelNotificationSettings_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter727 in this.success)
    {
      if (this.success.hasOwnProperty(iter727))
      {
        iter727 = this.success[iter727];
        iter727.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannels_args = function(args) {
  this.lastSynced = null;
  this.locale = null;
  if (args) {
    if (args.lastSynced !== undefined && args.lastSynced !== null) {
      this.lastSynced = args.lastSynced;
    }
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
ChannelService_getChannels_args.prototype = {};
ChannelService_getChannels_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.lastSynced = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannels_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannels_args');
  if (this.lastSynced !== null && this.lastSynced !== undefined) {
    output.writeFieldBegin('lastSynced', Thrift.Type.I64, 2);
    output.writeI64(this.lastSynced);
    output.writeFieldEnd();
  }
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 3);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getChannels_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ChannelInfos(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getChannels_result.prototype = {};
ChannelService_getChannels_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ChannelInfos();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getChannels_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getChannels_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getDomains_args = function(args) {
  this.lastSynced = null;
  if (args) {
    if (args.lastSynced !== undefined && args.lastSynced !== null) {
      this.lastSynced = args.lastSynced;
    }
  }
};
ChannelService_getDomains_args.prototype = {};
ChannelService_getDomains_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.lastSynced = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getDomains_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getDomains_args');
  if (this.lastSynced !== null && this.lastSynced !== undefined) {
    output.writeFieldBegin('lastSynced', Thrift.Type.I64, 2);
    output.writeI64(this.lastSynced);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getDomains_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ChannelDomains(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getDomains_result.prototype = {};
ChannelService_getDomains_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ChannelDomains();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getDomains_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getDomains_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getFriendChannelMatrices_args = function(args) {
  this.channelIds = null;
  if (args) {
    if (args.channelIds !== undefined && args.channelIds !== null) {
      this.channelIds = Thrift.copyList(args.channelIds, [null]);
    }
  }
};
ChannelService_getFriendChannelMatrices_args.prototype = {};
ChannelService_getFriendChannelMatrices_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size728 = 0;
        var _rtmp3732;
        this.channelIds = [];
        var _etype731 = 0;
        _rtmp3732 = input.readListBegin();
        _etype731 = _rtmp3732.etype;
        _size728 = _rtmp3732.size;
        for (var _i733 = 0; _i733 < _size728; ++_i733)
        {
          var elem734 = null;
          elem734 = input.readString();
          this.channelIds.push(elem734);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getFriendChannelMatrices_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getFriendChannelMatrices_args');
  if (this.channelIds !== null && this.channelIds !== undefined) {
    output.writeFieldBegin('channelIds', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.channelIds.length);
    for (var iter735 in this.channelIds)
    {
      if (this.channelIds.hasOwnProperty(iter735))
      {
        iter735 = this.channelIds[iter735];
        output.writeString(iter735);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getFriendChannelMatrices_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.FriendChannelMatricesResponse(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getFriendChannelMatrices_result.prototype = {};
ChannelService_getFriendChannelMatrices_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.FriendChannelMatricesResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getFriendChannelMatrices_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getFriendChannelMatrices_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getNotificationBadgeCount_args = function(args) {
  this.localRev = null;
  if (args) {
    if (args.localRev !== undefined && args.localRev !== null) {
      this.localRev = args.localRev;
    }
  }
};
ChannelService_getNotificationBadgeCount_args.prototype = {};
ChannelService_getNotificationBadgeCount_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.localRev = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getNotificationBadgeCount_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getNotificationBadgeCount_args');
  if (this.localRev !== null && this.localRev !== undefined) {
    output.writeFieldBegin('localRev', Thrift.Type.I64, 2);
    output.writeI64(this.localRev);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_getNotificationBadgeCount_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_getNotificationBadgeCount_result.prototype = {};
ChannelService_getNotificationBadgeCount_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_getNotificationBadgeCount_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_getNotificationBadgeCount_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_issueChannelToken_args = function(args) {
  this.channelId = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
  }
};
ChannelService_issueChannelToken_args.prototype = {};
ChannelService_issueChannelToken_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_issueChannelToken_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_issueChannelToken_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_issueChannelToken_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ChannelToken(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_issueChannelToken_result.prototype = {};
ChannelService_issueChannelToken_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ChannelToken();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_issueChannelToken_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_issueChannelToken_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_issueRequestToken_args = function(args) {
  this.channelId = null;
  this.otpId = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.otpId !== undefined && args.otpId !== null) {
      this.otpId = args.otpId;
    }
  }
};
ChannelService_issueRequestToken_args.prototype = {};
ChannelService_issueRequestToken_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.otpId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_issueRequestToken_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_issueRequestToken_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.otpId !== null && this.otpId !== undefined) {
    output.writeFieldBegin('otpId', Thrift.Type.STRING, 2);
    output.writeString(this.otpId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_issueRequestToken_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_issueRequestToken_result.prototype = {};
ChannelService_issueRequestToken_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_issueRequestToken_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_issueRequestToken_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_issueRequestTokenWithAuthScheme_args = function(args) {
  this.channelId = null;
  this.otpId = null;
  this.authScheme = null;
  this.returnUrl = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
    if (args.otpId !== undefined && args.otpId !== null) {
      this.otpId = args.otpId;
    }
    if (args.authScheme !== undefined && args.authScheme !== null) {
      this.authScheme = Thrift.copyList(args.authScheme, [null]);
    }
    if (args.returnUrl !== undefined && args.returnUrl !== null) {
      this.returnUrl = args.returnUrl;
    }
  }
};
ChannelService_issueRequestTokenWithAuthScheme_args.prototype = {};
ChannelService_issueRequestTokenWithAuthScheme_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.otpId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size736 = 0;
        var _rtmp3740;
        this.authScheme = [];
        var _etype739 = 0;
        _rtmp3740 = input.readListBegin();
        _etype739 = _rtmp3740.etype;
        _size736 = _rtmp3740.size;
        for (var _i741 = 0; _i741 < _size736; ++_i741)
        {
          var elem742 = null;
          elem742 = input.readString();
          this.authScheme.push(elem742);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.returnUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_issueRequestTokenWithAuthScheme_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_issueRequestTokenWithAuthScheme_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  if (this.otpId !== null && this.otpId !== undefined) {
    output.writeFieldBegin('otpId', Thrift.Type.STRING, 2);
    output.writeString(this.otpId);
    output.writeFieldEnd();
  }
  if (this.authScheme !== null && this.authScheme !== undefined) {
    output.writeFieldBegin('authScheme', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.authScheme.length);
    for (var iter743 in this.authScheme)
    {
      if (this.authScheme.hasOwnProperty(iter743))
      {
        iter743 = this.authScheme[iter743];
        output.writeString(iter743);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.returnUrl !== null && this.returnUrl !== undefined) {
    output.writeFieldBegin('returnUrl', Thrift.Type.STRING, 4);
    output.writeString(this.returnUrl);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_issueRequestTokenWithAuthScheme_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.RequestTokenResponse(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_issueRequestTokenWithAuthScheme_result.prototype = {};
ChannelService_issueRequestTokenWithAuthScheme_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.RequestTokenResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_issueRequestTokenWithAuthScheme_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_issueRequestTokenWithAuthScheme_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_reserveCoinUse_args = function(args) {
  this.request = null;
  this.locale = null;
  if (args) {
    if (args.request !== undefined && args.request !== null) {
      this.request = new ttypes.CoinUseReservation(args.request);
    }
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
ChannelService_reserveCoinUse_args.prototype = {};
ChannelService_reserveCoinUse_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.request = new ttypes.CoinUseReservation();
        this.request.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_reserveCoinUse_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_reserveCoinUse_args');
  if (this.request !== null && this.request !== undefined) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 2);
    this.request.write(output);
    output.writeFieldEnd();
  }
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 3);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_reserveCoinUse_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_reserveCoinUse_result.prototype = {};
ChannelService_reserveCoinUse_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_reserveCoinUse_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_reserveCoinUse_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_revokeChannel_args = function(args) {
  this.channelId = null;
  if (args) {
    if (args.channelId !== undefined && args.channelId !== null) {
      this.channelId = args.channelId;
    }
  }
};
ChannelService_revokeChannel_args.prototype = {};
ChannelService_revokeChannel_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.channelId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_revokeChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_revokeChannel_args');
  if (this.channelId !== null && this.channelId !== undefined) {
    output.writeFieldBegin('channelId', Thrift.Type.STRING, 1);
    output.writeString(this.channelId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_revokeChannel_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_revokeChannel_result.prototype = {};
ChannelService_revokeChannel_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_revokeChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_revokeChannel_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_syncChannelData_args = function(args) {
  this.lastSynced = null;
  this.locale = null;
  if (args) {
    if (args.lastSynced !== undefined && args.lastSynced !== null) {
      this.lastSynced = args.lastSynced;
    }
    if (args.locale !== undefined && args.locale !== null) {
      this.locale = args.locale;
    }
  }
};
ChannelService_syncChannelData_args.prototype = {};
ChannelService_syncChannelData_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.lastSynced = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.locale = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_syncChannelData_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_syncChannelData_args');
  if (this.lastSynced !== null && this.lastSynced !== undefined) {
    output.writeFieldBegin('lastSynced', Thrift.Type.I64, 2);
    output.writeI64(this.lastSynced);
    output.writeFieldEnd();
  }
  if (this.locale !== null && this.locale !== undefined) {
    output.writeFieldBegin('locale', Thrift.Type.STRING, 3);
    output.writeString(this.locale);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_syncChannelData_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ChannelSyncDatas(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_syncChannelData_result.prototype = {};
ChannelService_syncChannelData_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ChannelSyncDatas();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_syncChannelData_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_syncChannelData_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_updateChannelNotificationSetting_args = function(args) {
  this.setting = null;
  if (args) {
    if (args.setting !== undefined && args.setting !== null) {
      this.setting = Thrift.copyList(args.setting, [ttypes.ChannelNotificationSetting]);
    }
  }
};
ChannelService_updateChannelNotificationSetting_args.prototype = {};
ChannelService_updateChannelNotificationSetting_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size744 = 0;
        var _rtmp3748;
        this.setting = [];
        var _etype747 = 0;
        _rtmp3748 = input.readListBegin();
        _etype747 = _rtmp3748.etype;
        _size744 = _rtmp3748.size;
        for (var _i749 = 0; _i749 < _size744; ++_i749)
        {
          var elem750 = null;
          elem750 = new ttypes.ChannelNotificationSetting();
          elem750.read(input);
          this.setting.push(elem750);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_updateChannelNotificationSetting_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_updateChannelNotificationSetting_args');
  if (this.setting !== null && this.setting !== undefined) {
    output.writeFieldBegin('setting', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.setting.length);
    for (var iter751 in this.setting)
    {
      if (this.setting.hasOwnProperty(iter751))
      {
        iter751 = this.setting[iter751];
        iter751.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelService_updateChannelNotificationSetting_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.ChannelException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelService_updateChannelNotificationSetting_result.prototype = {};
ChannelService_updateChannelNotificationSetting_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.ChannelException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ChannelService_updateChannelNotificationSetting_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelService_updateChannelNotificationSetting_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ChannelServiceClient.prototype = {};
ChannelServiceClient.prototype.seqid = function() { return this._seqid; };
ChannelServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
ChannelServiceClient.prototype.approveChannelAndIssueChannelToken = function(channelId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_approveChannelAndIssueChannelToken(channelId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_approveChannelAndIssueChannelToken(channelId);
  }
};

ChannelServiceClient.prototype.send_approveChannelAndIssueChannelToken = function(channelId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('approveChannelAndIssueChannelToken', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId
  };
  var args = new ChannelService_approveChannelAndIssueChannelToken_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_approveChannelAndIssueChannelToken = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_approveChannelAndIssueChannelToken_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('approveChannelAndIssueChannelToken failed: unknown result');
};
ChannelServiceClient.prototype.approveChannelAndIssueRequestToken = function(channelId, otpId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_approveChannelAndIssueRequestToken(channelId, otpId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_approveChannelAndIssueRequestToken(channelId, otpId);
  }
};

ChannelServiceClient.prototype.send_approveChannelAndIssueRequestToken = function(channelId, otpId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('approveChannelAndIssueRequestToken', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId,
    otpId: otpId
  };
  var args = new ChannelService_approveChannelAndIssueRequestToken_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_approveChannelAndIssueRequestToken = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_approveChannelAndIssueRequestToken_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('approveChannelAndIssueRequestToken failed: unknown result');
};
ChannelServiceClient.prototype.fetchNotificationItems = function(localRev, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_fetchNotificationItems(localRev);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_fetchNotificationItems(localRev);
  }
};

ChannelServiceClient.prototype.send_fetchNotificationItems = function(localRev) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('fetchNotificationItems', Thrift.MessageType.CALL, this.seqid());
  var params = {
    localRev: localRev
  };
  var args = new ChannelService_fetchNotificationItems_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_fetchNotificationItems = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_fetchNotificationItems_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('fetchNotificationItems failed: unknown result');
};
ChannelServiceClient.prototype.getApprovedChannels = function(lastSynced, locale, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getApprovedChannels(lastSynced, locale);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getApprovedChannels(lastSynced, locale);
  }
};

ChannelServiceClient.prototype.send_getApprovedChannels = function(lastSynced, locale) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getApprovedChannels', Thrift.MessageType.CALL, this.seqid());
  var params = {
    lastSynced: lastSynced,
    locale: locale
  };
  var args = new ChannelService_getApprovedChannels_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getApprovedChannels = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getApprovedChannels_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getApprovedChannels failed: unknown result');
};
ChannelServiceClient.prototype.getChannelInfo = function(channelId, locale, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getChannelInfo(channelId, locale);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getChannelInfo(channelId, locale);
  }
};

ChannelServiceClient.prototype.send_getChannelInfo = function(channelId, locale) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getChannelInfo', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId,
    locale: locale
  };
  var args = new ChannelService_getChannelInfo_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getChannelInfo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getChannelInfo_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getChannelInfo failed: unknown result');
};
ChannelServiceClient.prototype.getChannelNotificationSetting = function(channelId, locale, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getChannelNotificationSetting(channelId, locale);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getChannelNotificationSetting(channelId, locale);
  }
};

ChannelServiceClient.prototype.send_getChannelNotificationSetting = function(channelId, locale) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getChannelNotificationSetting', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId,
    locale: locale
  };
  var args = new ChannelService_getChannelNotificationSetting_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getChannelNotificationSetting = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getChannelNotificationSetting_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getChannelNotificationSetting failed: unknown result');
};
ChannelServiceClient.prototype.getChannelNotificationSettings = function(locale, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getChannelNotificationSettings(locale);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getChannelNotificationSettings(locale);
  }
};

ChannelServiceClient.prototype.send_getChannelNotificationSettings = function(locale) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getChannelNotificationSettings', Thrift.MessageType.CALL, this.seqid());
  var params = {
    locale: locale
  };
  var args = new ChannelService_getChannelNotificationSettings_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getChannelNotificationSettings = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getChannelNotificationSettings_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getChannelNotificationSettings failed: unknown result');
};
ChannelServiceClient.prototype.getChannels = function(lastSynced, locale, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getChannels(lastSynced, locale);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getChannels(lastSynced, locale);
  }
};

ChannelServiceClient.prototype.send_getChannels = function(lastSynced, locale) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getChannels', Thrift.MessageType.CALL, this.seqid());
  var params = {
    lastSynced: lastSynced,
    locale: locale
  };
  var args = new ChannelService_getChannels_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getChannels = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getChannels_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getChannels failed: unknown result');
};
ChannelServiceClient.prototype.getDomains = function(lastSynced, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getDomains(lastSynced);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getDomains(lastSynced);
  }
};

ChannelServiceClient.prototype.send_getDomains = function(lastSynced) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getDomains', Thrift.MessageType.CALL, this.seqid());
  var params = {
    lastSynced: lastSynced
  };
  var args = new ChannelService_getDomains_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getDomains = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getDomains_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getDomains failed: unknown result');
};
ChannelServiceClient.prototype.getFriendChannelMatrices = function(channelIds, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getFriendChannelMatrices(channelIds);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getFriendChannelMatrices(channelIds);
  }
};

ChannelServiceClient.prototype.send_getFriendChannelMatrices = function(channelIds) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFriendChannelMatrices', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelIds: channelIds
  };
  var args = new ChannelService_getFriendChannelMatrices_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getFriendChannelMatrices = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getFriendChannelMatrices_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFriendChannelMatrices failed: unknown result');
};
ChannelServiceClient.prototype.getNotificationBadgeCount = function(localRev, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getNotificationBadgeCount(localRev);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getNotificationBadgeCount(localRev);
  }
};

ChannelServiceClient.prototype.send_getNotificationBadgeCount = function(localRev) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getNotificationBadgeCount', Thrift.MessageType.CALL, this.seqid());
  var params = {
    localRev: localRev
  };
  var args = new ChannelService_getNotificationBadgeCount_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_getNotificationBadgeCount = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_getNotificationBadgeCount_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getNotificationBadgeCount failed: unknown result');
};
ChannelServiceClient.prototype.issueChannelToken = function(channelId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_issueChannelToken(channelId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_issueChannelToken(channelId);
  }
};

ChannelServiceClient.prototype.send_issueChannelToken = function(channelId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('issueChannelToken', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId
  };
  var args = new ChannelService_issueChannelToken_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_issueChannelToken = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_issueChannelToken_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('issueChannelToken failed: unknown result');
};
ChannelServiceClient.prototype.issueRequestToken = function(channelId, otpId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_issueRequestToken(channelId, otpId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_issueRequestToken(channelId, otpId);
  }
};

ChannelServiceClient.prototype.send_issueRequestToken = function(channelId, otpId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('issueRequestToken', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId,
    otpId: otpId
  };
  var args = new ChannelService_issueRequestToken_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_issueRequestToken = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_issueRequestToken_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('issueRequestToken failed: unknown result');
};
ChannelServiceClient.prototype.issueRequestTokenWithAuthScheme = function(channelId, otpId, authScheme, returnUrl, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_issueRequestTokenWithAuthScheme(channelId, otpId, authScheme, returnUrl);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_issueRequestTokenWithAuthScheme(channelId, otpId, authScheme, returnUrl);
  }
};

ChannelServiceClient.prototype.send_issueRequestTokenWithAuthScheme = function(channelId, otpId, authScheme, returnUrl) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('issueRequestTokenWithAuthScheme', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId,
    otpId: otpId,
    authScheme: authScheme,
    returnUrl: returnUrl
  };
  var args = new ChannelService_issueRequestTokenWithAuthScheme_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_issueRequestTokenWithAuthScheme = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_issueRequestTokenWithAuthScheme_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('issueRequestTokenWithAuthScheme failed: unknown result');
};
ChannelServiceClient.prototype.reserveCoinUse = function(request, locale, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_reserveCoinUse(request, locale);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_reserveCoinUse(request, locale);
  }
};

ChannelServiceClient.prototype.send_reserveCoinUse = function(request, locale) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('reserveCoinUse', Thrift.MessageType.CALL, this.seqid());
  var params = {
    request: request,
    locale: locale
  };
  var args = new ChannelService_reserveCoinUse_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_reserveCoinUse = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_reserveCoinUse_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('reserveCoinUse failed: unknown result');
};
ChannelServiceClient.prototype.revokeChannel = function(channelId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_revokeChannel(channelId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_revokeChannel(channelId);
  }
};

ChannelServiceClient.prototype.send_revokeChannel = function(channelId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('revokeChannel', Thrift.MessageType.CALL, this.seqid());
  var params = {
    channelId: channelId
  };
  var args = new ChannelService_revokeChannel_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_revokeChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_revokeChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ChannelServiceClient.prototype.syncChannelData = function(lastSynced, locale, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_syncChannelData(lastSynced, locale);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_syncChannelData(lastSynced, locale);
  }
};

ChannelServiceClient.prototype.send_syncChannelData = function(lastSynced, locale) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('syncChannelData', Thrift.MessageType.CALL, this.seqid());
  var params = {
    lastSynced: lastSynced,
    locale: locale
  };
  var args = new ChannelService_syncChannelData_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_syncChannelData = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_syncChannelData_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('syncChannelData failed: unknown result');
};
ChannelServiceClient.prototype.updateChannelNotificationSetting = function(setting, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_updateChannelNotificationSetting(setting);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateChannelNotificationSetting(setting);
  }
};

ChannelServiceClient.prototype.send_updateChannelNotificationSetting = function(setting) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateChannelNotificationSetting', Thrift.MessageType.CALL, this.seqid());
  var params = {
    setting: setting
  };
  var args = new ChannelService_updateChannelNotificationSetting_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelServiceClient.prototype.recv_updateChannelNotificationSetting = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelService_updateChannelNotificationSetting_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
var ChannelServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
ChannelServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
ChannelServiceProcessor.prototype.process_approveChannelAndIssueChannelToken = function(seqid, input, output) {
  var args = new ChannelService_approveChannelAndIssueChannelToken_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.approveChannelAndIssueChannelToken.length === 1) {
    Q.fcall(this._handler.approveChannelAndIssueChannelToken.bind(this._handler), args.channelId)
      .then(function(result) {
        var result_obj = new ChannelService_approveChannelAndIssueChannelToken_result({success: result});
        output.writeMessageBegin("approveChannelAndIssueChannelToken", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_approveChannelAndIssueChannelToken_result(err);
          output.writeMessageBegin("approveChannelAndIssueChannelToken", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("approveChannelAndIssueChannelToken", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.approveChannelAndIssueChannelToken(args.channelId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_approveChannelAndIssueChannelToken_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("approveChannelAndIssueChannelToken", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("approveChannelAndIssueChannelToken", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_approveChannelAndIssueRequestToken = function(seqid, input, output) {
  var args = new ChannelService_approveChannelAndIssueRequestToken_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.approveChannelAndIssueRequestToken.length === 2) {
    Q.fcall(this._handler.approveChannelAndIssueRequestToken.bind(this._handler), args.channelId, args.otpId)
      .then(function(result) {
        var result_obj = new ChannelService_approveChannelAndIssueRequestToken_result({success: result});
        output.writeMessageBegin("approveChannelAndIssueRequestToken", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_approveChannelAndIssueRequestToken_result(err);
          output.writeMessageBegin("approveChannelAndIssueRequestToken", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("approveChannelAndIssueRequestToken", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.approveChannelAndIssueRequestToken(args.channelId, args.otpId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_approveChannelAndIssueRequestToken_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("approveChannelAndIssueRequestToken", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("approveChannelAndIssueRequestToken", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_fetchNotificationItems = function(seqid, input, output) {
  var args = new ChannelService_fetchNotificationItems_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.fetchNotificationItems.length === 1) {
    Q.fcall(this._handler.fetchNotificationItems.bind(this._handler), args.localRev)
      .then(function(result) {
        var result_obj = new ChannelService_fetchNotificationItems_result({success: result});
        output.writeMessageBegin("fetchNotificationItems", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_fetchNotificationItems_result(err);
          output.writeMessageBegin("fetchNotificationItems", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("fetchNotificationItems", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.fetchNotificationItems(args.localRev, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_fetchNotificationItems_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("fetchNotificationItems", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("fetchNotificationItems", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getApprovedChannels = function(seqid, input, output) {
  var args = new ChannelService_getApprovedChannels_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getApprovedChannels.length === 2) {
    Q.fcall(this._handler.getApprovedChannels.bind(this._handler), args.lastSynced, args.locale)
      .then(function(result) {
        var result_obj = new ChannelService_getApprovedChannels_result({success: result});
        output.writeMessageBegin("getApprovedChannels", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getApprovedChannels_result(err);
          output.writeMessageBegin("getApprovedChannels", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getApprovedChannels", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getApprovedChannels(args.lastSynced, args.locale, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getApprovedChannels_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getApprovedChannels", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getApprovedChannels", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getChannelInfo = function(seqid, input, output) {
  var args = new ChannelService_getChannelInfo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getChannelInfo.length === 2) {
    Q.fcall(this._handler.getChannelInfo.bind(this._handler), args.channelId, args.locale)
      .then(function(result) {
        var result_obj = new ChannelService_getChannelInfo_result({success: result});
        output.writeMessageBegin("getChannelInfo", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getChannelInfo_result(err);
          output.writeMessageBegin("getChannelInfo", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getChannelInfo", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getChannelInfo(args.channelId, args.locale, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getChannelInfo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getChannelInfo", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getChannelInfo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getChannelNotificationSetting = function(seqid, input, output) {
  var args = new ChannelService_getChannelNotificationSetting_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getChannelNotificationSetting.length === 2) {
    Q.fcall(this._handler.getChannelNotificationSetting.bind(this._handler), args.channelId, args.locale)
      .then(function(result) {
        var result_obj = new ChannelService_getChannelNotificationSetting_result({success: result});
        output.writeMessageBegin("getChannelNotificationSetting", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getChannelNotificationSetting_result(err);
          output.writeMessageBegin("getChannelNotificationSetting", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getChannelNotificationSetting", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getChannelNotificationSetting(args.channelId, args.locale, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getChannelNotificationSetting_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getChannelNotificationSetting", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getChannelNotificationSetting", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getChannelNotificationSettings = function(seqid, input, output) {
  var args = new ChannelService_getChannelNotificationSettings_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getChannelNotificationSettings.length === 1) {
    Q.fcall(this._handler.getChannelNotificationSettings.bind(this._handler), args.locale)
      .then(function(result) {
        var result_obj = new ChannelService_getChannelNotificationSettings_result({success: result});
        output.writeMessageBegin("getChannelNotificationSettings", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getChannelNotificationSettings_result(err);
          output.writeMessageBegin("getChannelNotificationSettings", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getChannelNotificationSettings", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getChannelNotificationSettings(args.locale, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getChannelNotificationSettings_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getChannelNotificationSettings", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getChannelNotificationSettings", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getChannels = function(seqid, input, output) {
  var args = new ChannelService_getChannels_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getChannels.length === 2) {
    Q.fcall(this._handler.getChannels.bind(this._handler), args.lastSynced, args.locale)
      .then(function(result) {
        var result_obj = new ChannelService_getChannels_result({success: result});
        output.writeMessageBegin("getChannels", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getChannels_result(err);
          output.writeMessageBegin("getChannels", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getChannels", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getChannels(args.lastSynced, args.locale, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getChannels_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getChannels", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getChannels", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getDomains = function(seqid, input, output) {
  var args = new ChannelService_getDomains_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getDomains.length === 1) {
    Q.fcall(this._handler.getDomains.bind(this._handler), args.lastSynced)
      .then(function(result) {
        var result_obj = new ChannelService_getDomains_result({success: result});
        output.writeMessageBegin("getDomains", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getDomains_result(err);
          output.writeMessageBegin("getDomains", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getDomains", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getDomains(args.lastSynced, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getDomains_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getDomains", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getDomains", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getFriendChannelMatrices = function(seqid, input, output) {
  var args = new ChannelService_getFriendChannelMatrices_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getFriendChannelMatrices.length === 1) {
    Q.fcall(this._handler.getFriendChannelMatrices.bind(this._handler), args.channelIds)
      .then(function(result) {
        var result_obj = new ChannelService_getFriendChannelMatrices_result({success: result});
        output.writeMessageBegin("getFriendChannelMatrices", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getFriendChannelMatrices_result(err);
          output.writeMessageBegin("getFriendChannelMatrices", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getFriendChannelMatrices", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getFriendChannelMatrices(args.channelIds, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getFriendChannelMatrices_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getFriendChannelMatrices", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getFriendChannelMatrices", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_getNotificationBadgeCount = function(seqid, input, output) {
  var args = new ChannelService_getNotificationBadgeCount_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getNotificationBadgeCount.length === 1) {
    Q.fcall(this._handler.getNotificationBadgeCount.bind(this._handler), args.localRev)
      .then(function(result) {
        var result_obj = new ChannelService_getNotificationBadgeCount_result({success: result});
        output.writeMessageBegin("getNotificationBadgeCount", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_getNotificationBadgeCount_result(err);
          output.writeMessageBegin("getNotificationBadgeCount", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getNotificationBadgeCount", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getNotificationBadgeCount(args.localRev, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_getNotificationBadgeCount_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getNotificationBadgeCount", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getNotificationBadgeCount", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_issueChannelToken = function(seqid, input, output) {
  var args = new ChannelService_issueChannelToken_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.issueChannelToken.length === 1) {
    Q.fcall(this._handler.issueChannelToken.bind(this._handler), args.channelId)
      .then(function(result) {
        var result_obj = new ChannelService_issueChannelToken_result({success: result});
        output.writeMessageBegin("issueChannelToken", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_issueChannelToken_result(err);
          output.writeMessageBegin("issueChannelToken", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("issueChannelToken", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.issueChannelToken(args.channelId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_issueChannelToken_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("issueChannelToken", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("issueChannelToken", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_issueRequestToken = function(seqid, input, output) {
  var args = new ChannelService_issueRequestToken_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.issueRequestToken.length === 2) {
    Q.fcall(this._handler.issueRequestToken.bind(this._handler), args.channelId, args.otpId)
      .then(function(result) {
        var result_obj = new ChannelService_issueRequestToken_result({success: result});
        output.writeMessageBegin("issueRequestToken", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_issueRequestToken_result(err);
          output.writeMessageBegin("issueRequestToken", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("issueRequestToken", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.issueRequestToken(args.channelId, args.otpId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_issueRequestToken_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("issueRequestToken", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("issueRequestToken", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_issueRequestTokenWithAuthScheme = function(seqid, input, output) {
  var args = new ChannelService_issueRequestTokenWithAuthScheme_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.issueRequestTokenWithAuthScheme.length === 4) {
    Q.fcall(this._handler.issueRequestTokenWithAuthScheme.bind(this._handler), args.channelId, args.otpId, args.authScheme, args.returnUrl)
      .then(function(result) {
        var result_obj = new ChannelService_issueRequestTokenWithAuthScheme_result({success: result});
        output.writeMessageBegin("issueRequestTokenWithAuthScheme", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_issueRequestTokenWithAuthScheme_result(err);
          output.writeMessageBegin("issueRequestTokenWithAuthScheme", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("issueRequestTokenWithAuthScheme", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.issueRequestTokenWithAuthScheme(args.channelId, args.otpId, args.authScheme, args.returnUrl, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_issueRequestTokenWithAuthScheme_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("issueRequestTokenWithAuthScheme", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("issueRequestTokenWithAuthScheme", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_reserveCoinUse = function(seqid, input, output) {
  var args = new ChannelService_reserveCoinUse_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.reserveCoinUse.length === 2) {
    Q.fcall(this._handler.reserveCoinUse.bind(this._handler), args.request, args.locale)
      .then(function(result) {
        var result_obj = new ChannelService_reserveCoinUse_result({success: result});
        output.writeMessageBegin("reserveCoinUse", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_reserveCoinUse_result(err);
          output.writeMessageBegin("reserveCoinUse", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("reserveCoinUse", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.reserveCoinUse(args.request, args.locale, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_reserveCoinUse_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("reserveCoinUse", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("reserveCoinUse", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_revokeChannel = function(seqid, input, output) {
  var args = new ChannelService_revokeChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.revokeChannel.length === 1) {
    Q.fcall(this._handler.revokeChannel.bind(this._handler), args.channelId)
      .then(function(result) {
        var result_obj = new ChannelService_revokeChannel_result({success: result});
        output.writeMessageBegin("revokeChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_revokeChannel_result(err);
          output.writeMessageBegin("revokeChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("revokeChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.revokeChannel(args.channelId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_revokeChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("revokeChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("revokeChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_syncChannelData = function(seqid, input, output) {
  var args = new ChannelService_syncChannelData_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.syncChannelData.length === 2) {
    Q.fcall(this._handler.syncChannelData.bind(this._handler), args.lastSynced, args.locale)
      .then(function(result) {
        var result_obj = new ChannelService_syncChannelData_result({success: result});
        output.writeMessageBegin("syncChannelData", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_syncChannelData_result(err);
          output.writeMessageBegin("syncChannelData", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("syncChannelData", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.syncChannelData(args.lastSynced, args.locale, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_syncChannelData_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("syncChannelData", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("syncChannelData", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelServiceProcessor.prototype.process_updateChannelNotificationSetting = function(seqid, input, output) {
  var args = new ChannelService_updateChannelNotificationSetting_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateChannelNotificationSetting.length === 1) {
    Q.fcall(this._handler.updateChannelNotificationSetting.bind(this._handler), args.setting)
      .then(function(result) {
        var result_obj = new ChannelService_updateChannelNotificationSetting_result({success: result});
        output.writeMessageBegin("updateChannelNotificationSetting", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.ChannelException) {
          result = new ChannelService_updateChannelNotificationSetting_result(err);
          output.writeMessageBegin("updateChannelNotificationSetting", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateChannelNotificationSetting", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateChannelNotificationSetting(args.setting, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.ChannelException) {
        result_obj = new ChannelService_updateChannelNotificationSetting_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateChannelNotificationSetting", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateChannelNotificationSetting", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
