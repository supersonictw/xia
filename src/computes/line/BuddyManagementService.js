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

var BuddyManagementService_addBuddyMember_args = function(args) {
  this.requestId = null;
  this.userMid = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.userMid !== undefined && args.userMid !== null) {
      this.userMid = args.userMid;
    }
  }
};
BuddyManagementService_addBuddyMember_args.prototype = {};
BuddyManagementService_addBuddyMember_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userMid = input.readString();
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

BuddyManagementService_addBuddyMember_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_addBuddyMember_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.userMid !== null && this.userMid !== undefined) {
    output.writeFieldBegin('userMid', Thrift.Type.STRING, 2);
    output.writeString(this.userMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_addBuddyMember_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_addBuddyMember_result.prototype = {};
BuddyManagementService_addBuddyMember_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_addBuddyMember_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_addBuddyMember_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_addBuddyMembers_args = function(args) {
  this.requestId = null;
  this.userMids = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.userMids !== undefined && args.userMids !== null) {
      this.userMids = Thrift.copyList(args.userMids, [null]);
    }
  }
};
BuddyManagementService_addBuddyMembers_args.prototype = {};
BuddyManagementService_addBuddyMembers_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size386 = 0;
        var _rtmp3390;
        this.userMids = [];
        var _etype389 = 0;
        _rtmp3390 = input.readListBegin();
        _etype389 = _rtmp3390.etype;
        _size386 = _rtmp3390.size;
        for (var _i391 = 0; _i391 < _size386; ++_i391)
        {
          var elem392 = null;
          elem392 = input.readString();
          this.userMids.push(elem392);
        }
        input.readListEnd();
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

BuddyManagementService_addBuddyMembers_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_addBuddyMembers_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.userMids !== null && this.userMids !== undefined) {
    output.writeFieldBegin('userMids', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.userMids.length);
    for (var iter393 in this.userMids)
    {
      if (this.userMids.hasOwnProperty(iter393))
      {
        iter393 = this.userMids[iter393];
        output.writeString(iter393);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_addBuddyMembers_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_addBuddyMembers_result.prototype = {};
BuddyManagementService_addBuddyMembers_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_addBuddyMembers_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_addBuddyMembers_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_blockBuddyMember_args = function(args) {
  this.requestId = null;
  this.mid = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
  }
};
BuddyManagementService_blockBuddyMember_args.prototype = {};
BuddyManagementService_blockBuddyMember_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
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

BuddyManagementService_blockBuddyMember_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_blockBuddyMember_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 2);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_blockBuddyMember_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_blockBuddyMember_result.prototype = {};
BuddyManagementService_blockBuddyMember_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_blockBuddyMember_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_blockBuddyMember_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_commitSendMessagesToAll_args = function(args) {
  this.requestIdList = null;
  if (args) {
    if (args.requestIdList !== undefined && args.requestIdList !== null) {
      this.requestIdList = Thrift.copyList(args.requestIdList, [null]);
    }
  }
};
BuddyManagementService_commitSendMessagesToAll_args.prototype = {};
BuddyManagementService_commitSendMessagesToAll_args.prototype.read = function(input) {
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
        var _size394 = 0;
        var _rtmp3398;
        this.requestIdList = [];
        var _etype397 = 0;
        _rtmp3398 = input.readListBegin();
        _etype397 = _rtmp3398.etype;
        _size394 = _rtmp3398.size;
        for (var _i399 = 0; _i399 < _size394; ++_i399)
        {
          var elem400 = null;
          elem400 = input.readString();
          this.requestIdList.push(elem400);
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

BuddyManagementService_commitSendMessagesToAll_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_commitSendMessagesToAll_args');
  if (this.requestIdList !== null && this.requestIdList !== undefined) {
    output.writeFieldBegin('requestIdList', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.requestIdList.length);
    for (var iter401 in this.requestIdList)
    {
      if (this.requestIdList.hasOwnProperty(iter401))
      {
        iter401 = this.requestIdList[iter401];
        output.writeString(iter401);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_commitSendMessagesToAll_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.SendBuddyMessageResult]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_commitSendMessagesToAll_result.prototype = {};
BuddyManagementService_commitSendMessagesToAll_result.prototype.read = function(input) {
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
        var _size402 = 0;
        var _rtmp3406;
        this.success = [];
        var _etype405 = 0;
        _rtmp3406 = input.readListBegin();
        _etype405 = _rtmp3406.etype;
        _size402 = _rtmp3406.size;
        for (var _i407 = 0; _i407 < _size402; ++_i407)
        {
          var elem408 = null;
          elem408 = new ttypes.SendBuddyMessageResult();
          elem408.read(input);
          this.success.push(elem408);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_commitSendMessagesToAll_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_commitSendMessagesToAll_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter409 in this.success)
    {
      if (this.success.hasOwnProperty(iter409))
      {
        iter409 = this.success[iter409];
        iter409.write(output);
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

var BuddyManagementService_commitSendMessagesToMids_args = function(args) {
  this.requestIdList = null;
  this.mids = null;
  if (args) {
    if (args.requestIdList !== undefined && args.requestIdList !== null) {
      this.requestIdList = Thrift.copyList(args.requestIdList, [null]);
    }
    if (args.mids !== undefined && args.mids !== null) {
      this.mids = Thrift.copyList(args.mids, [null]);
    }
  }
};
BuddyManagementService_commitSendMessagesToMids_args.prototype = {};
BuddyManagementService_commitSendMessagesToMids_args.prototype.read = function(input) {
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
        var _size410 = 0;
        var _rtmp3414;
        this.requestIdList = [];
        var _etype413 = 0;
        _rtmp3414 = input.readListBegin();
        _etype413 = _rtmp3414.etype;
        _size410 = _rtmp3414.size;
        for (var _i415 = 0; _i415 < _size410; ++_i415)
        {
          var elem416 = null;
          elem416 = input.readString();
          this.requestIdList.push(elem416);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size417 = 0;
        var _rtmp3421;
        this.mids = [];
        var _etype420 = 0;
        _rtmp3421 = input.readListBegin();
        _etype420 = _rtmp3421.etype;
        _size417 = _rtmp3421.size;
        for (var _i422 = 0; _i422 < _size417; ++_i422)
        {
          var elem423 = null;
          elem423 = input.readString();
          this.mids.push(elem423);
        }
        input.readListEnd();
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

BuddyManagementService_commitSendMessagesToMids_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_commitSendMessagesToMids_args');
  if (this.requestIdList !== null && this.requestIdList !== undefined) {
    output.writeFieldBegin('requestIdList', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.requestIdList.length);
    for (var iter424 in this.requestIdList)
    {
      if (this.requestIdList.hasOwnProperty(iter424))
      {
        iter424 = this.requestIdList[iter424];
        output.writeString(iter424);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.mids !== null && this.mids !== undefined) {
    output.writeFieldBegin('mids', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.mids.length);
    for (var iter425 in this.mids)
    {
      if (this.mids.hasOwnProperty(iter425))
      {
        iter425 = this.mids[iter425];
        output.writeString(iter425);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_commitSendMessagesToMids_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.SendBuddyMessageResult]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_commitSendMessagesToMids_result.prototype = {};
BuddyManagementService_commitSendMessagesToMids_result.prototype.read = function(input) {
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
        var _size426 = 0;
        var _rtmp3430;
        this.success = [];
        var _etype429 = 0;
        _rtmp3430 = input.readListBegin();
        _etype429 = _rtmp3430.etype;
        _size426 = _rtmp3430.size;
        for (var _i431 = 0; _i431 < _size426; ++_i431)
        {
          var elem432 = null;
          elem432 = new ttypes.SendBuddyMessageResult();
          elem432.read(input);
          this.success.push(elem432);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_commitSendMessagesToMids_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_commitSendMessagesToMids_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter433 in this.success)
    {
      if (this.success.hasOwnProperty(iter433))
      {
        iter433 = this.success[iter433];
        iter433.write(output);
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

var BuddyManagementService_containsBuddyMember_args = function(args) {
  this.requestId = null;
  this.userMid = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.userMid !== undefined && args.userMid !== null) {
      this.userMid = args.userMid;
    }
  }
};
BuddyManagementService_containsBuddyMember_args.prototype = {};
BuddyManagementService_containsBuddyMember_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userMid = input.readString();
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

BuddyManagementService_containsBuddyMember_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_containsBuddyMember_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.userMid !== null && this.userMid !== undefined) {
    output.writeFieldBegin('userMid', Thrift.Type.STRING, 2);
    output.writeString(this.userMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_containsBuddyMember_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_containsBuddyMember_result.prototype = {};
BuddyManagementService_containsBuddyMember_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_containsBuddyMember_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_containsBuddyMember_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
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

var BuddyManagementService_downloadMessageContent_args = function(args) {
  this.requestId = null;
  this.messageId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.messageId !== undefined && args.messageId !== null) {
      this.messageId = args.messageId;
    }
  }
};
BuddyManagementService_downloadMessageContent_args.prototype = {};
BuddyManagementService_downloadMessageContent_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.messageId = input.readString();
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

BuddyManagementService_downloadMessageContent_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadMessageContent_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.messageId !== null && this.messageId !== undefined) {
    output.writeFieldBegin('messageId', Thrift.Type.STRING, 2);
    output.writeString(this.messageId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_downloadMessageContent_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_downloadMessageContent_result.prototype = {};
BuddyManagementService_downloadMessageContent_result.prototype.read = function(input) {
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
        this.success = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_downloadMessageContent_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadMessageContent_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeBinary(this.success);
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

var BuddyManagementService_downloadMessageContentPreview_args = function(args) {
  this.requestId = null;
  this.messageId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.messageId !== undefined && args.messageId !== null) {
      this.messageId = args.messageId;
    }
  }
};
BuddyManagementService_downloadMessageContentPreview_args.prototype = {};
BuddyManagementService_downloadMessageContentPreview_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.messageId = input.readString();
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

BuddyManagementService_downloadMessageContentPreview_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadMessageContentPreview_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.messageId !== null && this.messageId !== undefined) {
    output.writeFieldBegin('messageId', Thrift.Type.STRING, 2);
    output.writeString(this.messageId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_downloadMessageContentPreview_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_downloadMessageContentPreview_result.prototype = {};
BuddyManagementService_downloadMessageContentPreview_result.prototype.read = function(input) {
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
        this.success = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_downloadMessageContentPreview_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadMessageContentPreview_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeBinary(this.success);
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

var BuddyManagementService_downloadProfileImage_args = function(args) {
  this.requestId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
  }
};
BuddyManagementService_downloadProfileImage_args.prototype = {};
BuddyManagementService_downloadProfileImage_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
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

BuddyManagementService_downloadProfileImage_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadProfileImage_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_downloadProfileImage_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_downloadProfileImage_result.prototype = {};
BuddyManagementService_downloadProfileImage_result.prototype.read = function(input) {
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
        this.success = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_downloadProfileImage_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadProfileImage_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeBinary(this.success);
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

var BuddyManagementService_downloadProfileImagePreview_args = function(args) {
  this.requestId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
  }
};
BuddyManagementService_downloadProfileImagePreview_args.prototype = {};
BuddyManagementService_downloadProfileImagePreview_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
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

BuddyManagementService_downloadProfileImagePreview_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadProfileImagePreview_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_downloadProfileImagePreview_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_downloadProfileImagePreview_result.prototype = {};
BuddyManagementService_downloadProfileImagePreview_result.prototype.read = function(input) {
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
        this.success = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_downloadProfileImagePreview_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_downloadProfileImagePreview_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeBinary(this.success);
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

var BuddyManagementService_getActiveMemberCountByBuddyMid_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyManagementService_getActiveMemberCountByBuddyMid_args.prototype = {};
BuddyManagementService_getActiveMemberCountByBuddyMid_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
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

BuddyManagementService_getActiveMemberCountByBuddyMid_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getActiveMemberCountByBuddyMid_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 2);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getActiveMemberCountByBuddyMid_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_getActiveMemberCountByBuddyMid_result.prototype = {};
BuddyManagementService_getActiveMemberCountByBuddyMid_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.success = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getActiveMemberCountByBuddyMid_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getActiveMemberCountByBuddyMid_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I64, 0);
    output.writeI64(this.success);
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

var BuddyManagementService_getActiveMemberMidsByBuddyMid_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyManagementService_getActiveMemberMidsByBuddyMid_args.prototype = {};
BuddyManagementService_getActiveMemberMidsByBuddyMid_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
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

BuddyManagementService_getActiveMemberMidsByBuddyMid_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getActiveMemberMidsByBuddyMid_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 2);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getActiveMemberMidsByBuddyMid_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [null]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getActiveMemberMidsByBuddyMid_result.prototype = {};
BuddyManagementService_getActiveMemberMidsByBuddyMid_result.prototype.read = function(input) {
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
        var _size434 = 0;
        var _rtmp3438;
        this.success = [];
        var _etype437 = 0;
        _rtmp3438 = input.readListBegin();
        _etype437 = _rtmp3438.etype;
        _size434 = _rtmp3438.size;
        for (var _i439 = 0; _i439 < _size434; ++_i439)
        {
          var elem440 = null;
          elem440 = input.readString();
          this.success.push(elem440);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getActiveMemberMidsByBuddyMid_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getActiveMemberMidsByBuddyMid_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter441 in this.success)
    {
      if (this.success.hasOwnProperty(iter441))
      {
        iter441 = this.success[iter441];
        output.writeString(iter441);
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

var BuddyManagementService_getAllBuddyMembers_args = function(args) {
};
BuddyManagementService_getAllBuddyMembers_args.prototype = {};
BuddyManagementService_getAllBuddyMembers_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyManagementService_getAllBuddyMembers_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getAllBuddyMembers_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getAllBuddyMembers_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [null]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getAllBuddyMembers_result.prototype = {};
BuddyManagementService_getAllBuddyMembers_result.prototype.read = function(input) {
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
        var _size442 = 0;
        var _rtmp3446;
        this.success = [];
        var _etype445 = 0;
        _rtmp3446 = input.readListBegin();
        _etype445 = _rtmp3446.etype;
        _size442 = _rtmp3446.size;
        for (var _i447 = 0; _i447 < _size442; ++_i447)
        {
          var elem448 = null;
          elem448 = input.readString();
          this.success.push(elem448);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getAllBuddyMembers_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getAllBuddyMembers_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter449 in this.success)
    {
      if (this.success.hasOwnProperty(iter449))
      {
        iter449 = this.success[iter449];
        output.writeString(iter449);
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

var BuddyManagementService_getBlockedBuddyMembers_args = function(args) {
};
BuddyManagementService_getBlockedBuddyMembers_args.prototype = {};
BuddyManagementService_getBlockedBuddyMembers_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyManagementService_getBlockedBuddyMembers_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBlockedBuddyMembers_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getBlockedBuddyMembers_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [null]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getBlockedBuddyMembers_result.prototype = {};
BuddyManagementService_getBlockedBuddyMembers_result.prototype.read = function(input) {
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
        var _size450 = 0;
        var _rtmp3454;
        this.success = [];
        var _etype453 = 0;
        _rtmp3454 = input.readListBegin();
        _etype453 = _rtmp3454.etype;
        _size450 = _rtmp3454.size;
        for (var _i455 = 0; _i455 < _size450; ++_i455)
        {
          var elem456 = null;
          elem456 = input.readString();
          this.success.push(elem456);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getBlockedBuddyMembers_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBlockedBuddyMembers_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter457 in this.success)
    {
      if (this.success.hasOwnProperty(iter457))
      {
        iter457 = this.success[iter457];
        output.writeString(iter457);
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

var BuddyManagementService_getBlockerCountByBuddyMid_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyManagementService_getBlockerCountByBuddyMid_args.prototype = {};
BuddyManagementService_getBlockerCountByBuddyMid_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
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

BuddyManagementService_getBlockerCountByBuddyMid_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBlockerCountByBuddyMid_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 2);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getBlockerCountByBuddyMid_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_getBlockerCountByBuddyMid_result.prototype = {};
BuddyManagementService_getBlockerCountByBuddyMid_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.success = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getBlockerCountByBuddyMid_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBlockerCountByBuddyMid_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I64, 0);
    output.writeI64(this.success);
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

var BuddyManagementService_getBuddyDetailByMid_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyManagementService_getBuddyDetailByMid_args.prototype = {};
BuddyManagementService_getBuddyDetailByMid_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
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

BuddyManagementService_getBuddyDetailByMid_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBuddyDetailByMid_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 2);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getBuddyDetailByMid_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.BuddyDetail(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getBuddyDetailByMid_result.prototype = {};
BuddyManagementService_getBuddyDetailByMid_result.prototype.read = function(input) {
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
        this.success = new ttypes.BuddyDetail();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getBuddyDetailByMid_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBuddyDetailByMid_result');
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

var BuddyManagementService_getBuddyProfile_args = function(args) {
};
BuddyManagementService_getBuddyProfile_args.prototype = {};
BuddyManagementService_getBuddyProfile_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyManagementService_getBuddyProfile_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBuddyProfile_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getBuddyProfile_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.BuddyProfile(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getBuddyProfile_result.prototype = {};
BuddyManagementService_getBuddyProfile_result.prototype.read = function(input) {
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
        this.success = new ttypes.BuddyProfile();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getBuddyProfile_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getBuddyProfile_result');
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

var BuddyManagementService_getContactTicket_args = function(args) {
};
BuddyManagementService_getContactTicket_args.prototype = {};
BuddyManagementService_getContactTicket_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuddyManagementService_getContactTicket_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getContactTicket_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getContactTicket_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Ticket(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getContactTicket_result.prototype = {};
BuddyManagementService_getContactTicket_result.prototype.read = function(input) {
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
        this.success = new ttypes.Ticket();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getContactTicket_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getContactTicket_result');
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

var BuddyManagementService_getMemberCountByBuddyMid_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyManagementService_getMemberCountByBuddyMid_args.prototype = {};
BuddyManagementService_getMemberCountByBuddyMid_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
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

BuddyManagementService_getMemberCountByBuddyMid_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getMemberCountByBuddyMid_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 2);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getMemberCountByBuddyMid_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_getMemberCountByBuddyMid_result.prototype = {};
BuddyManagementService_getMemberCountByBuddyMid_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.success = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getMemberCountByBuddyMid_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getMemberCountByBuddyMid_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I64, 0);
    output.writeI64(this.success);
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

var BuddyManagementService_getSendBuddyMessageResult_args = function(args) {
  this.sendBuddyMessageRequestId = null;
  if (args) {
    if (args.sendBuddyMessageRequestId !== undefined && args.sendBuddyMessageRequestId !== null) {
      this.sendBuddyMessageRequestId = args.sendBuddyMessageRequestId;
    }
  }
};
BuddyManagementService_getSendBuddyMessageResult_args.prototype = {};
BuddyManagementService_getSendBuddyMessageResult_args.prototype.read = function(input) {
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
        this.sendBuddyMessageRequestId = input.readString();
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

BuddyManagementService_getSendBuddyMessageResult_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getSendBuddyMessageResult_args');
  if (this.sendBuddyMessageRequestId !== null && this.sendBuddyMessageRequestId !== undefined) {
    output.writeFieldBegin('sendBuddyMessageRequestId', Thrift.Type.STRING, 1);
    output.writeString(this.sendBuddyMessageRequestId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getSendBuddyMessageResult_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SendBuddyMessageResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getSendBuddyMessageResult_result.prototype = {};
BuddyManagementService_getSendBuddyMessageResult_result.prototype.read = function(input) {
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
        this.success = new ttypes.SendBuddyMessageResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getSendBuddyMessageResult_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getSendBuddyMessageResult_result');
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

var BuddyManagementService_getSetBuddyOnAirResult_args = function(args) {
  this.setBuddyOnAirRequestId = null;
  if (args) {
    if (args.setBuddyOnAirRequestId !== undefined && args.setBuddyOnAirRequestId !== null) {
      this.setBuddyOnAirRequestId = args.setBuddyOnAirRequestId;
    }
  }
};
BuddyManagementService_getSetBuddyOnAirResult_args.prototype = {};
BuddyManagementService_getSetBuddyOnAirResult_args.prototype.read = function(input) {
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
        this.setBuddyOnAirRequestId = input.readString();
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

BuddyManagementService_getSetBuddyOnAirResult_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getSetBuddyOnAirResult_args');
  if (this.setBuddyOnAirRequestId !== null && this.setBuddyOnAirRequestId !== undefined) {
    output.writeFieldBegin('setBuddyOnAirRequestId', Thrift.Type.STRING, 1);
    output.writeString(this.setBuddyOnAirRequestId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getSetBuddyOnAirResult_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SetBuddyOnAirResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getSetBuddyOnAirResult_result.prototype = {};
BuddyManagementService_getSetBuddyOnAirResult_result.prototype.read = function(input) {
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
        this.success = new ttypes.SetBuddyOnAirResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getSetBuddyOnAirResult_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getSetBuddyOnAirResult_result');
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

var BuddyManagementService_getUpdateBuddyProfileResult_args = function(args) {
  this.updateBuddyProfileRequestId = null;
  if (args) {
    if (args.updateBuddyProfileRequestId !== undefined && args.updateBuddyProfileRequestId !== null) {
      this.updateBuddyProfileRequestId = args.updateBuddyProfileRequestId;
    }
  }
};
BuddyManagementService_getUpdateBuddyProfileResult_args.prototype = {};
BuddyManagementService_getUpdateBuddyProfileResult_args.prototype.read = function(input) {
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
        this.updateBuddyProfileRequestId = input.readString();
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

BuddyManagementService_getUpdateBuddyProfileResult_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getUpdateBuddyProfileResult_args');
  if (this.updateBuddyProfileRequestId !== null && this.updateBuddyProfileRequestId !== undefined) {
    output.writeFieldBegin('updateBuddyProfileRequestId', Thrift.Type.STRING, 1);
    output.writeString(this.updateBuddyProfileRequestId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_getUpdateBuddyProfileResult_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.UpdateBuddyProfileResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_getUpdateBuddyProfileResult_result.prototype = {};
BuddyManagementService_getUpdateBuddyProfileResult_result.prototype.read = function(input) {
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
        this.success = new ttypes.UpdateBuddyProfileResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_getUpdateBuddyProfileResult_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_getUpdateBuddyProfileResult_result');
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

var BuddyManagementService_isBuddyOnAirByMid_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyManagementService_isBuddyOnAirByMid_args.prototype = {};
BuddyManagementService_isBuddyOnAirByMid_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
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

BuddyManagementService_isBuddyOnAirByMid_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_isBuddyOnAirByMid_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 2);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_isBuddyOnAirByMid_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_isBuddyOnAirByMid_result.prototype = {};
BuddyManagementService_isBuddyOnAirByMid_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_isBuddyOnAirByMid_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_isBuddyOnAirByMid_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
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

var BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.sourceContentId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.sourceContentId !== undefined && args.sourceContentId !== null) {
      this.sourceContentId = args.sourceContentId;
    }
  }
};
BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_args.prototype = {};
BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.sourceContentId = input.readString();
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

BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.sourceContentId !== null && this.sourceContentId !== undefined) {
    output.writeFieldBegin('sourceContentId', Thrift.Type.STRING, 3);
    output.writeString(this.sourceContentId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result.prototype = {};
BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result');
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

var BuddyManagementService_linkAndSendBuddyContentMessageToMids_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.sourceContentId = null;
  this.mids = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.sourceContentId !== undefined && args.sourceContentId !== null) {
      this.sourceContentId = args.sourceContentId;
    }
    if (args.mids !== undefined && args.mids !== null) {
      this.mids = Thrift.copyList(args.mids, [null]);
    }
  }
};
BuddyManagementService_linkAndSendBuddyContentMessageToMids_args.prototype = {};
BuddyManagementService_linkAndSendBuddyContentMessageToMids_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.sourceContentId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size458 = 0;
        var _rtmp3462;
        this.mids = [];
        var _etype461 = 0;
        _rtmp3462 = input.readListBegin();
        _etype461 = _rtmp3462.etype;
        _size458 = _rtmp3462.size;
        for (var _i463 = 0; _i463 < _size458; ++_i463)
        {
          var elem464 = null;
          elem464 = input.readString();
          this.mids.push(elem464);
        }
        input.readListEnd();
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

BuddyManagementService_linkAndSendBuddyContentMessageToMids_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_linkAndSendBuddyContentMessageToMids_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.sourceContentId !== null && this.sourceContentId !== undefined) {
    output.writeFieldBegin('sourceContentId', Thrift.Type.STRING, 3);
    output.writeString(this.sourceContentId);
    output.writeFieldEnd();
  }
  if (this.mids !== null && this.mids !== undefined) {
    output.writeFieldBegin('mids', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.mids.length);
    for (var iter465 in this.mids)
    {
      if (this.mids.hasOwnProperty(iter465))
      {
        iter465 = this.mids[iter465];
        output.writeString(iter465);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_linkAndSendBuddyContentMessageToMids_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SendBuddyMessageResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_linkAndSendBuddyContentMessageToMids_result.prototype = {};
BuddyManagementService_linkAndSendBuddyContentMessageToMids_result.prototype.read = function(input) {
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
        this.success = new ttypes.SendBuddyMessageResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_linkAndSendBuddyContentMessageToMids_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_linkAndSendBuddyContentMessageToMids_result');
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

var BuddyManagementService_notifyBuddyBlocked_args = function(args) {
  this.buddyMid = null;
  this.blockerMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
    if (args.blockerMid !== undefined && args.blockerMid !== null) {
      this.blockerMid = args.blockerMid;
    }
  }
};
BuddyManagementService_notifyBuddyBlocked_args.prototype = {};
BuddyManagementService_notifyBuddyBlocked_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.blockerMid = input.readString();
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

BuddyManagementService_notifyBuddyBlocked_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_notifyBuddyBlocked_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 1);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  if (this.blockerMid !== null && this.blockerMid !== undefined) {
    output.writeFieldBegin('blockerMid', Thrift.Type.STRING, 2);
    output.writeString(this.blockerMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_notifyBuddyBlocked_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_notifyBuddyBlocked_result.prototype = {};
BuddyManagementService_notifyBuddyBlocked_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_notifyBuddyBlocked_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_notifyBuddyBlocked_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_notifyBuddyUnblocked_args = function(args) {
  this.buddyMid = null;
  this.blockerMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
    if (args.blockerMid !== undefined && args.blockerMid !== null) {
      this.blockerMid = args.blockerMid;
    }
  }
};
BuddyManagementService_notifyBuddyUnblocked_args.prototype = {};
BuddyManagementService_notifyBuddyUnblocked_args.prototype.read = function(input) {
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
        this.buddyMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.blockerMid = input.readString();
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

BuddyManagementService_notifyBuddyUnblocked_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_notifyBuddyUnblocked_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 1);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  if (this.blockerMid !== null && this.blockerMid !== undefined) {
    output.writeFieldBegin('blockerMid', Thrift.Type.STRING, 2);
    output.writeString(this.blockerMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_notifyBuddyUnblocked_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_notifyBuddyUnblocked_result.prototype = {};
BuddyManagementService_notifyBuddyUnblocked_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_notifyBuddyUnblocked_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_notifyBuddyUnblocked_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_registerBuddy_args = function(args) {
  this.buddyId = null;
  this.searchId = null;
  this.displayName = null;
  this.statusMeessage = null;
  this.picture = null;
  this.settings = null;
  if (args) {
    if (args.buddyId !== undefined && args.buddyId !== null) {
      this.buddyId = args.buddyId;
    }
    if (args.searchId !== undefined && args.searchId !== null) {
      this.searchId = args.searchId;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.statusMeessage !== undefined && args.statusMeessage !== null) {
      this.statusMeessage = args.statusMeessage;
    }
    if (args.picture !== undefined && args.picture !== null) {
      this.picture = args.picture;
    }
    if (args.settings !== undefined && args.settings !== null) {
      this.settings = Thrift.copyMap(args.settings, [null]);
    }
  }
};
BuddyManagementService_registerBuddy_args.prototype = {};
BuddyManagementService_registerBuddy_args.prototype.read = function(input) {
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
        this.buddyId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.searchId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.statusMeessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.picture = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.MAP) {
        var _size466 = 0;
        var _rtmp3470;
        this.settings = {};
        var _ktype467 = 0;
        var _vtype468 = 0;
        _rtmp3470 = input.readMapBegin();
        _ktype467 = _rtmp3470.ktype;
        _vtype468 = _rtmp3470.vtype;
        _size466 = _rtmp3470.size;
        for (var _i471 = 0; _i471 < _size466; ++_i471)
        {
          var key472 = null;
          var val473 = null;
          key472 = input.readString();
          val473 = input.readString();
          this.settings[key472] = val473;
        }
        input.readMapEnd();
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

BuddyManagementService_registerBuddy_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_registerBuddy_args');
  if (this.buddyId !== null && this.buddyId !== undefined) {
    output.writeFieldBegin('buddyId', Thrift.Type.STRING, 2);
    output.writeString(this.buddyId);
    output.writeFieldEnd();
  }
  if (this.searchId !== null && this.searchId !== undefined) {
    output.writeFieldBegin('searchId', Thrift.Type.STRING, 3);
    output.writeString(this.searchId);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 4);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.statusMeessage !== null && this.statusMeessage !== undefined) {
    output.writeFieldBegin('statusMeessage', Thrift.Type.STRING, 5);
    output.writeString(this.statusMeessage);
    output.writeFieldEnd();
  }
  if (this.picture !== null && this.picture !== undefined) {
    output.writeFieldBegin('picture', Thrift.Type.STRING, 6);
    output.writeBinary(this.picture);
    output.writeFieldEnd();
  }
  if (this.settings !== null && this.settings !== undefined) {
    output.writeFieldBegin('settings', Thrift.Type.MAP, 7);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.settings));
    for (var kiter474 in this.settings)
    {
      if (this.settings.hasOwnProperty(kiter474))
      {
        var viter475 = this.settings[kiter474];
        output.writeString(kiter474);
        output.writeString(viter475);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_registerBuddy_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_registerBuddy_result.prototype = {};
BuddyManagementService_registerBuddy_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_registerBuddy_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_registerBuddy_result');
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

var BuddyManagementService_registerBuddyAdmin_args = function(args) {
  this.buddyId = null;
  this.searchId = null;
  this.displayName = null;
  this.statusMessage = null;
  this.picture = null;
  if (args) {
    if (args.buddyId !== undefined && args.buddyId !== null) {
      this.buddyId = args.buddyId;
    }
    if (args.searchId !== undefined && args.searchId !== null) {
      this.searchId = args.searchId;
    }
    if (args.displayName !== undefined && args.displayName !== null) {
      this.displayName = args.displayName;
    }
    if (args.statusMessage !== undefined && args.statusMessage !== null) {
      this.statusMessage = args.statusMessage;
    }
    if (args.picture !== undefined && args.picture !== null) {
      this.picture = args.picture;
    }
  }
};
BuddyManagementService_registerBuddyAdmin_args.prototype = {};
BuddyManagementService_registerBuddyAdmin_args.prototype.read = function(input) {
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
        this.buddyId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.searchId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.displayName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.statusMessage = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.picture = input.readBinary();
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

BuddyManagementService_registerBuddyAdmin_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_registerBuddyAdmin_args');
  if (this.buddyId !== null && this.buddyId !== undefined) {
    output.writeFieldBegin('buddyId', Thrift.Type.STRING, 2);
    output.writeString(this.buddyId);
    output.writeFieldEnd();
  }
  if (this.searchId !== null && this.searchId !== undefined) {
    output.writeFieldBegin('searchId', Thrift.Type.STRING, 3);
    output.writeString(this.searchId);
    output.writeFieldEnd();
  }
  if (this.displayName !== null && this.displayName !== undefined) {
    output.writeFieldBegin('displayName', Thrift.Type.STRING, 4);
    output.writeString(this.displayName);
    output.writeFieldEnd();
  }
  if (this.statusMessage !== null && this.statusMessage !== undefined) {
    output.writeFieldBegin('statusMessage', Thrift.Type.STRING, 5);
    output.writeString(this.statusMessage);
    output.writeFieldEnd();
  }
  if (this.picture !== null && this.picture !== undefined) {
    output.writeFieldBegin('picture', Thrift.Type.STRING, 6);
    output.writeBinary(this.picture);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_registerBuddyAdmin_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_registerBuddyAdmin_result.prototype = {};
BuddyManagementService_registerBuddyAdmin_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_registerBuddyAdmin_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_registerBuddyAdmin_result');
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

var BuddyManagementService_reissueContactTicket_args = function(args) {
  this.expirationTime = null;
  this.maxUseCount = null;
  if (args) {
    if (args.expirationTime !== undefined && args.expirationTime !== null) {
      this.expirationTime = args.expirationTime;
    }
    if (args.maxUseCount !== undefined && args.maxUseCount !== null) {
      this.maxUseCount = args.maxUseCount;
    }
  }
};
BuddyManagementService_reissueContactTicket_args.prototype = {};
BuddyManagementService_reissueContactTicket_args.prototype.read = function(input) {
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
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.expirationTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.maxUseCount = input.readI32();
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

BuddyManagementService_reissueContactTicket_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_reissueContactTicket_args');
  if (this.expirationTime !== null && this.expirationTime !== undefined) {
    output.writeFieldBegin('expirationTime', Thrift.Type.I64, 3);
    output.writeI64(this.expirationTime);
    output.writeFieldEnd();
  }
  if (this.maxUseCount !== null && this.maxUseCount !== undefined) {
    output.writeFieldBegin('maxUseCount', Thrift.Type.I32, 4);
    output.writeI32(this.maxUseCount);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_reissueContactTicket_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_reissueContactTicket_result.prototype = {};
BuddyManagementService_reissueContactTicket_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_reissueContactTicket_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_reissueContactTicket_result');
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

var BuddyManagementService_removeBuddyMember_args = function(args) {
  this.requestId = null;
  this.userMid = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.userMid !== undefined && args.userMid !== null) {
      this.userMid = args.userMid;
    }
  }
};
BuddyManagementService_removeBuddyMember_args.prototype = {};
BuddyManagementService_removeBuddyMember_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userMid = input.readString();
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

BuddyManagementService_removeBuddyMember_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_removeBuddyMember_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.userMid !== null && this.userMid !== undefined) {
    output.writeFieldBegin('userMid', Thrift.Type.STRING, 2);
    output.writeString(this.userMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_removeBuddyMember_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_removeBuddyMember_result.prototype = {};
BuddyManagementService_removeBuddyMember_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_removeBuddyMember_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_removeBuddyMember_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_removeBuddyMembers_args = function(args) {
  this.requestId = null;
  this.userMids = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.userMids !== undefined && args.userMids !== null) {
      this.userMids = Thrift.copyList(args.userMids, [null]);
    }
  }
};
BuddyManagementService_removeBuddyMembers_args.prototype = {};
BuddyManagementService_removeBuddyMembers_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size476 = 0;
        var _rtmp3480;
        this.userMids = [];
        var _etype479 = 0;
        _rtmp3480 = input.readListBegin();
        _etype479 = _rtmp3480.etype;
        _size476 = _rtmp3480.size;
        for (var _i481 = 0; _i481 < _size476; ++_i481)
        {
          var elem482 = null;
          elem482 = input.readString();
          this.userMids.push(elem482);
        }
        input.readListEnd();
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

BuddyManagementService_removeBuddyMembers_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_removeBuddyMembers_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.userMids !== null && this.userMids !== undefined) {
    output.writeFieldBegin('userMids', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.userMids.length);
    for (var iter483 in this.userMids)
    {
      if (this.userMids.hasOwnProperty(iter483))
      {
        iter483 = this.userMids[iter483];
        output.writeString(iter483);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_removeBuddyMembers_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_removeBuddyMembers_result.prototype = {};
BuddyManagementService_removeBuddyMembers_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_removeBuddyMembers_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_removeBuddyMembers_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyContentMessageToAll_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.content = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
  }
};
BuddyManagementService_sendBuddyContentMessageToAll_args.prototype = {};
BuddyManagementService_sendBuddyContentMessageToAll_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readBinary();
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

BuddyManagementService_sendBuddyContentMessageToAll_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToAll_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 3);
    output.writeBinary(this.content);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyContentMessageToAll_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SendBuddyMessageResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_sendBuddyContentMessageToAll_result.prototype = {};
BuddyManagementService_sendBuddyContentMessageToAll_result.prototype.read = function(input) {
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
        this.success = new ttypes.SendBuddyMessageResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyContentMessageToAll_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToAll_result');
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

var BuddyManagementService_sendBuddyContentMessageToAllAsync_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.content = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
  }
};
BuddyManagementService_sendBuddyContentMessageToAllAsync_args.prototype = {};
BuddyManagementService_sendBuddyContentMessageToAllAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readBinary();
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

BuddyManagementService_sendBuddyContentMessageToAllAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToAllAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 3);
    output.writeBinary(this.content);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyContentMessageToAllAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_sendBuddyContentMessageToAllAsync_result.prototype = {};
BuddyManagementService_sendBuddyContentMessageToAllAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyContentMessageToAllAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToAllAsync_result');
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

var BuddyManagementService_sendBuddyContentMessageToMids_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.content = null;
  this.mids = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
    if (args.mids !== undefined && args.mids !== null) {
      this.mids = Thrift.copyList(args.mids, [null]);
    }
  }
};
BuddyManagementService_sendBuddyContentMessageToMids_args.prototype = {};
BuddyManagementService_sendBuddyContentMessageToMids_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size484 = 0;
        var _rtmp3488;
        this.mids = [];
        var _etype487 = 0;
        _rtmp3488 = input.readListBegin();
        _etype487 = _rtmp3488.etype;
        _size484 = _rtmp3488.size;
        for (var _i489 = 0; _i489 < _size484; ++_i489)
        {
          var elem490 = null;
          elem490 = input.readString();
          this.mids.push(elem490);
        }
        input.readListEnd();
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

BuddyManagementService_sendBuddyContentMessageToMids_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToMids_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 3);
    output.writeBinary(this.content);
    output.writeFieldEnd();
  }
  if (this.mids !== null && this.mids !== undefined) {
    output.writeFieldBegin('mids', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.mids.length);
    for (var iter491 in this.mids)
    {
      if (this.mids.hasOwnProperty(iter491))
      {
        iter491 = this.mids[iter491];
        output.writeString(iter491);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyContentMessageToMids_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SendBuddyMessageResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_sendBuddyContentMessageToMids_result.prototype = {};
BuddyManagementService_sendBuddyContentMessageToMids_result.prototype.read = function(input) {
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
        this.success = new ttypes.SendBuddyMessageResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyContentMessageToMids_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToMids_result');
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

var BuddyManagementService_sendBuddyContentMessageToMidsAsync_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.content = null;
  this.mids = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
    if (args.mids !== undefined && args.mids !== null) {
      this.mids = Thrift.copyList(args.mids, [null]);
    }
  }
};
BuddyManagementService_sendBuddyContentMessageToMidsAsync_args.prototype = {};
BuddyManagementService_sendBuddyContentMessageToMidsAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size492 = 0;
        var _rtmp3496;
        this.mids = [];
        var _etype495 = 0;
        _rtmp3496 = input.readListBegin();
        _etype495 = _rtmp3496.etype;
        _size492 = _rtmp3496.size;
        for (var _i497 = 0; _i497 < _size492; ++_i497)
        {
          var elem498 = null;
          elem498 = input.readString();
          this.mids.push(elem498);
        }
        input.readListEnd();
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

BuddyManagementService_sendBuddyContentMessageToMidsAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToMidsAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 3);
    output.writeBinary(this.content);
    output.writeFieldEnd();
  }
  if (this.mids !== null && this.mids !== undefined) {
    output.writeFieldBegin('mids', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.mids.length);
    for (var iter499 in this.mids)
    {
      if (this.mids.hasOwnProperty(iter499))
      {
        iter499 = this.mids[iter499];
        output.writeString(iter499);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyContentMessageToMidsAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_sendBuddyContentMessageToMidsAsync_result.prototype = {};
BuddyManagementService_sendBuddyContentMessageToMidsAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyContentMessageToMidsAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyContentMessageToMidsAsync_result');
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

var BuddyManagementService_sendBuddyMessageToAll_args = function(args) {
  this.requestId = null;
  this.msg = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
  }
};
BuddyManagementService_sendBuddyMessageToAll_args.prototype = {};
BuddyManagementService_sendBuddyMessageToAll_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
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

BuddyManagementService_sendBuddyMessageToAll_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToAll_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyMessageToAll_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SendBuddyMessageResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_sendBuddyMessageToAll_result.prototype = {};
BuddyManagementService_sendBuddyMessageToAll_result.prototype.read = function(input) {
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
        this.success = new ttypes.SendBuddyMessageResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyMessageToAll_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToAll_result');
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

var BuddyManagementService_sendBuddyMessageToAllAsync_args = function(args) {
  this.requestId = null;
  this.msg = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
  }
};
BuddyManagementService_sendBuddyMessageToAllAsync_args.prototype = {};
BuddyManagementService_sendBuddyMessageToAllAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
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

BuddyManagementService_sendBuddyMessageToAllAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToAllAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyMessageToAllAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_sendBuddyMessageToAllAsync_result.prototype = {};
BuddyManagementService_sendBuddyMessageToAllAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyMessageToAllAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToAllAsync_result');
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

var BuddyManagementService_sendBuddyMessageToMids_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.mids = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.mids !== undefined && args.mids !== null) {
      this.mids = Thrift.copyList(args.mids, [null]);
    }
  }
};
BuddyManagementService_sendBuddyMessageToMids_args.prototype = {};
BuddyManagementService_sendBuddyMessageToMids_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size500 = 0;
        var _rtmp3504;
        this.mids = [];
        var _etype503 = 0;
        _rtmp3504 = input.readListBegin();
        _etype503 = _rtmp3504.etype;
        _size500 = _rtmp3504.size;
        for (var _i505 = 0; _i505 < _size500; ++_i505)
        {
          var elem506 = null;
          elem506 = input.readString();
          this.mids.push(elem506);
        }
        input.readListEnd();
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

BuddyManagementService_sendBuddyMessageToMids_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToMids_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.mids !== null && this.mids !== undefined) {
    output.writeFieldBegin('mids', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.mids.length);
    for (var iter507 in this.mids)
    {
      if (this.mids.hasOwnProperty(iter507))
      {
        iter507 = this.mids[iter507];
        output.writeString(iter507);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyMessageToMids_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SendBuddyMessageResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_sendBuddyMessageToMids_result.prototype = {};
BuddyManagementService_sendBuddyMessageToMids_result.prototype.read = function(input) {
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
        this.success = new ttypes.SendBuddyMessageResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyMessageToMids_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToMids_result');
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

var BuddyManagementService_sendBuddyMessageToMidsAsync_args = function(args) {
  this.requestId = null;
  this.msg = null;
  this.mids = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = new ttypes.Message(args.msg);
    }
    if (args.mids !== undefined && args.mids !== null) {
      this.mids = Thrift.copyList(args.mids, [null]);
    }
  }
};
BuddyManagementService_sendBuddyMessageToMidsAsync_args.prototype = {};
BuddyManagementService_sendBuddyMessageToMidsAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.msg = new ttypes.Message();
        this.msg.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size508 = 0;
        var _rtmp3512;
        this.mids = [];
        var _etype511 = 0;
        _rtmp3512 = input.readListBegin();
        _etype511 = _rtmp3512.etype;
        _size508 = _rtmp3512.size;
        for (var _i513 = 0; _i513 < _size508; ++_i513)
        {
          var elem514 = null;
          elem514 = input.readString();
          this.mids.push(elem514);
        }
        input.readListEnd();
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

BuddyManagementService_sendBuddyMessageToMidsAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToMidsAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRUCT, 2);
    this.msg.write(output);
    output.writeFieldEnd();
  }
  if (this.mids !== null && this.mids !== undefined) {
    output.writeFieldBegin('mids', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.mids.length);
    for (var iter515 in this.mids)
    {
      if (this.mids.hasOwnProperty(iter515))
      {
        iter515 = this.mids[iter515];
        output.writeString(iter515);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendBuddyMessageToMidsAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_sendBuddyMessageToMidsAsync_result.prototype = {};
BuddyManagementService_sendBuddyMessageToMidsAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendBuddyMessageToMidsAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendBuddyMessageToMidsAsync_result');
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

var BuddyManagementService_sendIndividualEventToAllAsync_args = function(args) {
  this.requestId = null;
  this.buddyMid = null;
  this.notificationStatus = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
    if (args.notificationStatus !== undefined && args.notificationStatus !== null) {
      this.notificationStatus = args.notificationStatus;
    }
  }
};
BuddyManagementService_sendIndividualEventToAllAsync_args.prototype = {};
BuddyManagementService_sendIndividualEventToAllAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.buddyMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.notificationStatus = input.readI32();
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

BuddyManagementService_sendIndividualEventToAllAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendIndividualEventToAllAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 2);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  if (this.notificationStatus !== null && this.notificationStatus !== undefined) {
    output.writeFieldBegin('notificationStatus', Thrift.Type.I32, 3);
    output.writeI32(this.notificationStatus);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_sendIndividualEventToAllAsync_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_sendIndividualEventToAllAsync_result.prototype = {};
BuddyManagementService_sendIndividualEventToAllAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_sendIndividualEventToAllAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_sendIndividualEventToAllAsync_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_setBuddyOnAir_args = function(args) {
  this.requestId = null;
  this.onAir = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.onAir !== undefined && args.onAir !== null) {
      this.onAir = args.onAir;
    }
  }
};
BuddyManagementService_setBuddyOnAir_args.prototype = {};
BuddyManagementService_setBuddyOnAir_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.onAir = input.readBool();
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

BuddyManagementService_setBuddyOnAir_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_setBuddyOnAir_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.onAir !== null && this.onAir !== undefined) {
    output.writeFieldBegin('onAir', Thrift.Type.BOOL, 2);
    output.writeBool(this.onAir);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_setBuddyOnAir_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SetBuddyOnAirResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_setBuddyOnAir_result.prototype = {};
BuddyManagementService_setBuddyOnAir_result.prototype.read = function(input) {
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
        this.success = new ttypes.SetBuddyOnAirResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_setBuddyOnAir_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_setBuddyOnAir_result');
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

var BuddyManagementService_setBuddyOnAirAsync_args = function(args) {
  this.requestId = null;
  this.onAir = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.onAir !== undefined && args.onAir !== null) {
      this.onAir = args.onAir;
    }
  }
};
BuddyManagementService_setBuddyOnAirAsync_args.prototype = {};
BuddyManagementService_setBuddyOnAirAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.onAir = input.readBool();
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

BuddyManagementService_setBuddyOnAirAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_setBuddyOnAirAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.onAir !== null && this.onAir !== undefined) {
    output.writeFieldBegin('onAir', Thrift.Type.BOOL, 2);
    output.writeBool(this.onAir);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_setBuddyOnAirAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_setBuddyOnAirAsync_result.prototype = {};
BuddyManagementService_setBuddyOnAirAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_setBuddyOnAirAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_setBuddyOnAirAsync_result');
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

var BuddyManagementService_storeMessage_args = function(args) {
  this.requestId = null;
  this.messageRequest = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.messageRequest !== undefined && args.messageRequest !== null) {
      this.messageRequest = new ttypes.BuddyMessageRequest(args.messageRequest);
    }
  }
};
BuddyManagementService_storeMessage_args.prototype = {};
BuddyManagementService_storeMessage_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.messageRequest = new ttypes.BuddyMessageRequest();
        this.messageRequest.read(input);
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

BuddyManagementService_storeMessage_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_storeMessage_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.messageRequest !== null && this.messageRequest !== undefined) {
    output.writeFieldBegin('messageRequest', Thrift.Type.STRUCT, 2);
    this.messageRequest.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_storeMessage_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SendBuddyMessageResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_storeMessage_result.prototype = {};
BuddyManagementService_storeMessage_result.prototype.read = function(input) {
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
        this.success = new ttypes.SendBuddyMessageResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_storeMessage_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_storeMessage_result');
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

var BuddyManagementService_unblockBuddyMember_args = function(args) {
  this.requestId = null;
  this.mid = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
  }
};
BuddyManagementService_unblockBuddyMember_args.prototype = {};
BuddyManagementService_unblockBuddyMember_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.mid = input.readString();
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

BuddyManagementService_unblockBuddyMember_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_unblockBuddyMember_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 2);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_unblockBuddyMember_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_unblockBuddyMember_result.prototype = {};
BuddyManagementService_unblockBuddyMember_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_unblockBuddyMember_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_unblockBuddyMember_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_unregisterBuddy_args = function(args) {
  this.requestId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
  }
};
BuddyManagementService_unregisterBuddy_args.prototype = {};
BuddyManagementService_unregisterBuddy_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
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

BuddyManagementService_unregisterBuddy_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_unregisterBuddy_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_unregisterBuddy_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_unregisterBuddy_result.prototype = {};
BuddyManagementService_unregisterBuddy_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_unregisterBuddy_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_unregisterBuddy_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_unregisterBuddyAdmin_args = function(args) {
  this.requestId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
  }
};
BuddyManagementService_unregisterBuddyAdmin_args.prototype = {};
BuddyManagementService_unregisterBuddyAdmin_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
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

BuddyManagementService_unregisterBuddyAdmin_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_unregisterBuddyAdmin_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_unregisterBuddyAdmin_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_unregisterBuddyAdmin_result.prototype = {};
BuddyManagementService_unregisterBuddyAdmin_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_unregisterBuddyAdmin_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_unregisterBuddyAdmin_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyAdminProfileAttribute_args = function(args) {
  this.requestId = null;
  this.attributes = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.attributes !== undefined && args.attributes !== null) {
      this.attributes = Thrift.copyMap(args.attributes, [null]);
    }
  }
};
BuddyManagementService_updateBuddyAdminProfileAttribute_args.prototype = {};
BuddyManagementService_updateBuddyAdminProfileAttribute_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size516 = 0;
        var _rtmp3520;
        this.attributes = {};
        var _ktype517 = 0;
        var _vtype518 = 0;
        _rtmp3520 = input.readMapBegin();
        _ktype517 = _rtmp3520.ktype;
        _vtype518 = _rtmp3520.vtype;
        _size516 = _rtmp3520.size;
        for (var _i521 = 0; _i521 < _size516; ++_i521)
        {
          var key522 = null;
          var val523 = null;
          key522 = input.readString();
          val523 = input.readString();
          this.attributes[key522] = val523;
        }
        input.readMapEnd();
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

BuddyManagementService_updateBuddyAdminProfileAttribute_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyAdminProfileAttribute_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.attributes !== null && this.attributes !== undefined) {
    output.writeFieldBegin('attributes', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.attributes));
    for (var kiter524 in this.attributes)
    {
      if (this.attributes.hasOwnProperty(kiter524))
      {
        var viter525 = this.attributes[kiter524];
        output.writeString(kiter524);
        output.writeString(viter525);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyAdminProfileAttribute_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_updateBuddyAdminProfileAttribute_result.prototype = {};
BuddyManagementService_updateBuddyAdminProfileAttribute_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddyAdminProfileAttribute_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyAdminProfileAttribute_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyAdminProfileImage_args = function(args) {
  this.requestId = null;
  this.picture = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.picture !== undefined && args.picture !== null) {
      this.picture = args.picture;
    }
  }
};
BuddyManagementService_updateBuddyAdminProfileImage_args.prototype = {};
BuddyManagementService_updateBuddyAdminProfileImage_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.picture = input.readBinary();
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

BuddyManagementService_updateBuddyAdminProfileImage_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyAdminProfileImage_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.picture !== null && this.picture !== undefined) {
    output.writeFieldBegin('picture', Thrift.Type.STRING, 2);
    output.writeBinary(this.picture);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyAdminProfileImage_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_updateBuddyAdminProfileImage_result.prototype = {};
BuddyManagementService_updateBuddyAdminProfileImage_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddyAdminProfileImage_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyAdminProfileImage_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyProfileAttributes_args = function(args) {
  this.requestId = null;
  this.attributes = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.attributes !== undefined && args.attributes !== null) {
      this.attributes = Thrift.copyMap(args.attributes, [null]);
    }
  }
};
BuddyManagementService_updateBuddyProfileAttributes_args.prototype = {};
BuddyManagementService_updateBuddyProfileAttributes_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size526 = 0;
        var _rtmp3530;
        this.attributes = {};
        var _ktype527 = 0;
        var _vtype528 = 0;
        _rtmp3530 = input.readMapBegin();
        _ktype527 = _rtmp3530.ktype;
        _vtype528 = _rtmp3530.vtype;
        _size526 = _rtmp3530.size;
        for (var _i531 = 0; _i531 < _size526; ++_i531)
        {
          var key532 = null;
          var val533 = null;
          key532 = input.readString();
          val533 = input.readString();
          this.attributes[key532] = val533;
        }
        input.readMapEnd();
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

BuddyManagementService_updateBuddyProfileAttributes_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileAttributes_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.attributes !== null && this.attributes !== undefined) {
    output.writeFieldBegin('attributes', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.attributes));
    for (var kiter534 in this.attributes)
    {
      if (this.attributes.hasOwnProperty(kiter534))
      {
        var viter535 = this.attributes[kiter534];
        output.writeString(kiter534);
        output.writeString(viter535);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyProfileAttributes_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.UpdateBuddyProfileResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_updateBuddyProfileAttributes_result.prototype = {};
BuddyManagementService_updateBuddyProfileAttributes_result.prototype.read = function(input) {
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
        this.success = new ttypes.UpdateBuddyProfileResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddyProfileAttributes_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileAttributes_result');
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

var BuddyManagementService_updateBuddyProfileAttributesAsync_args = function(args) {
  this.requestId = null;
  this.attributes = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.attributes !== undefined && args.attributes !== null) {
      this.attributes = Thrift.copyMap(args.attributes, [null]);
    }
  }
};
BuddyManagementService_updateBuddyProfileAttributesAsync_args.prototype = {};
BuddyManagementService_updateBuddyProfileAttributesAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size536 = 0;
        var _rtmp3540;
        this.attributes = {};
        var _ktype537 = 0;
        var _vtype538 = 0;
        _rtmp3540 = input.readMapBegin();
        _ktype537 = _rtmp3540.ktype;
        _vtype538 = _rtmp3540.vtype;
        _size536 = _rtmp3540.size;
        for (var _i541 = 0; _i541 < _size536; ++_i541)
        {
          var key542 = null;
          var val543 = null;
          key542 = input.readString();
          val543 = input.readString();
          this.attributes[key542] = val543;
        }
        input.readMapEnd();
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

BuddyManagementService_updateBuddyProfileAttributesAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileAttributesAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.attributes !== null && this.attributes !== undefined) {
    output.writeFieldBegin('attributes', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.attributes));
    for (var kiter544 in this.attributes)
    {
      if (this.attributes.hasOwnProperty(kiter544))
      {
        var viter545 = this.attributes[kiter544];
        output.writeString(kiter544);
        output.writeString(viter545);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyProfileAttributesAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_updateBuddyProfileAttributesAsync_result.prototype = {};
BuddyManagementService_updateBuddyProfileAttributesAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddyProfileAttributesAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileAttributesAsync_result');
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

var BuddyManagementService_updateBuddyProfileImage_args = function(args) {
  this.requestId = null;
  this.image = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.image !== undefined && args.image !== null) {
      this.image = args.image;
    }
  }
};
BuddyManagementService_updateBuddyProfileImage_args.prototype = {};
BuddyManagementService_updateBuddyProfileImage_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.image = input.readBinary();
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

BuddyManagementService_updateBuddyProfileImage_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileImage_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.image !== null && this.image !== undefined) {
    output.writeFieldBegin('image', Thrift.Type.STRING, 2);
    output.writeBinary(this.image);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyProfileImage_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.UpdateBuddyProfileResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_updateBuddyProfileImage_result.prototype = {};
BuddyManagementService_updateBuddyProfileImage_result.prototype.read = function(input) {
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
        this.success = new ttypes.UpdateBuddyProfileResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddyProfileImage_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileImage_result');
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

var BuddyManagementService_updateBuddyProfileImageAsync_args = function(args) {
  this.requestId = null;
  this.image = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.image !== undefined && args.image !== null) {
      this.image = args.image;
    }
  }
};
BuddyManagementService_updateBuddyProfileImageAsync_args.prototype = {};
BuddyManagementService_updateBuddyProfileImageAsync_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.image = input.readBinary();
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

BuddyManagementService_updateBuddyProfileImageAsync_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileImageAsync_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.image !== null && this.image !== undefined) {
    output.writeFieldBegin('image', Thrift.Type.STRING, 2);
    output.writeBinary(this.image);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddyProfileImageAsync_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_updateBuddyProfileImageAsync_result.prototype = {};
BuddyManagementService_updateBuddyProfileImageAsync_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddyProfileImageAsync_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddyProfileImageAsync_result');
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

var BuddyManagementService_updateBuddySearchId_args = function(args) {
  this.requestId = null;
  this.searchId = null;
  if (args) {
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.searchId !== undefined && args.searchId !== null) {
      this.searchId = args.searchId;
    }
  }
};
BuddyManagementService_updateBuddySearchId_args.prototype = {};
BuddyManagementService_updateBuddySearchId_args.prototype.read = function(input) {
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
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.searchId = input.readString();
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

BuddyManagementService_updateBuddySearchId_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddySearchId_args');
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 1);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.searchId !== null && this.searchId !== undefined) {
    output.writeFieldBegin('searchId', Thrift.Type.STRING, 2);
    output.writeString(this.searchId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddySearchId_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_updateBuddySearchId_result.prototype = {};
BuddyManagementService_updateBuddySearchId_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddySearchId_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddySearchId_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddySettings_args = function(args) {
  this.settings = null;
  if (args) {
    if (args.settings !== undefined && args.settings !== null) {
      this.settings = Thrift.copyMap(args.settings, [null]);
    }
  }
};
BuddyManagementService_updateBuddySettings_args.prototype = {};
BuddyManagementService_updateBuddySettings_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.MAP) {
        var _size546 = 0;
        var _rtmp3550;
        this.settings = {};
        var _ktype547 = 0;
        var _vtype548 = 0;
        _rtmp3550 = input.readMapBegin();
        _ktype547 = _rtmp3550.ktype;
        _vtype548 = _rtmp3550.vtype;
        _size546 = _rtmp3550.size;
        for (var _i551 = 0; _i551 < _size546; ++_i551)
        {
          var key552 = null;
          var val553 = null;
          key552 = input.readString();
          val553 = input.readString();
          this.settings[key552] = val553;
        }
        input.readMapEnd();
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

BuddyManagementService_updateBuddySettings_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddySettings_args');
  if (this.settings !== null && this.settings !== undefined) {
    output.writeFieldBegin('settings', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.settings));
    for (var kiter554 in this.settings)
    {
      if (this.settings.hasOwnProperty(kiter554))
      {
        var viter555 = this.settings[kiter554];
        output.writeString(kiter554);
        output.writeString(viter555);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_updateBuddySettings_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyManagementService_updateBuddySettings_result.prototype = {};
BuddyManagementService_updateBuddySettings_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_updateBuddySettings_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_updateBuddySettings_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_uploadBuddyContent_args = function(args) {
  this.contentType = null;
  this.content = null;
  if (args) {
    if (args.contentType !== undefined && args.contentType !== null) {
      this.contentType = args.contentType;
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
  }
};
BuddyManagementService_uploadBuddyContent_args.prototype = {};
BuddyManagementService_uploadBuddyContent_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.contentType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readBinary();
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

BuddyManagementService_uploadBuddyContent_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_uploadBuddyContent_args');
  if (this.contentType !== null && this.contentType !== undefined) {
    output.writeFieldBegin('contentType', Thrift.Type.I32, 2);
    output.writeI32(this.contentType);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 3);
    output.writeBinary(this.content);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyManagementService_uploadBuddyContent_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
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
BuddyManagementService_uploadBuddyContent_result.prototype = {};
BuddyManagementService_uploadBuddyContent_result.prototype.read = function(input) {
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
        this.e = new ttypes.TalkException();
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

BuddyManagementService_uploadBuddyContent_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyManagementService_uploadBuddyContent_result');
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

var BuddyManagementServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
BuddyManagementServiceClient.prototype = {};
BuddyManagementServiceClient.prototype.seqid = function() { return this._seqid; };
BuddyManagementServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
BuddyManagementServiceClient.prototype.addBuddyMember = function(requestId, userMid, callback) {
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
    this.send_addBuddyMember(requestId, userMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addBuddyMember(requestId, userMid);
  }
};

BuddyManagementServiceClient.prototype.send_addBuddyMember = function(requestId, userMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addBuddyMember', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    userMid: userMid
  };
  var args = new BuddyManagementService_addBuddyMember_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_addBuddyMember = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_addBuddyMember_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.addBuddyMembers = function(requestId, userMids, callback) {
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
    this.send_addBuddyMembers(requestId, userMids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addBuddyMembers(requestId, userMids);
  }
};

BuddyManagementServiceClient.prototype.send_addBuddyMembers = function(requestId, userMids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addBuddyMembers', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    userMids: userMids
  };
  var args = new BuddyManagementService_addBuddyMembers_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_addBuddyMembers = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_addBuddyMembers_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.blockBuddyMember = function(requestId, mid, callback) {
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
    this.send_blockBuddyMember(requestId, mid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_blockBuddyMember(requestId, mid);
  }
};

BuddyManagementServiceClient.prototype.send_blockBuddyMember = function(requestId, mid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('blockBuddyMember', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    mid: mid
  };
  var args = new BuddyManagementService_blockBuddyMember_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_blockBuddyMember = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_blockBuddyMember_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.commitSendMessagesToAll = function(requestIdList, callback) {
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
    this.send_commitSendMessagesToAll(requestIdList);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_commitSendMessagesToAll(requestIdList);
  }
};

BuddyManagementServiceClient.prototype.send_commitSendMessagesToAll = function(requestIdList) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('commitSendMessagesToAll', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestIdList: requestIdList
  };
  var args = new BuddyManagementService_commitSendMessagesToAll_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_commitSendMessagesToAll = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_commitSendMessagesToAll_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('commitSendMessagesToAll failed: unknown result');
};
BuddyManagementServiceClient.prototype.commitSendMessagesToMids = function(requestIdList, mids, callback) {
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
    this.send_commitSendMessagesToMids(requestIdList, mids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_commitSendMessagesToMids(requestIdList, mids);
  }
};

BuddyManagementServiceClient.prototype.send_commitSendMessagesToMids = function(requestIdList, mids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('commitSendMessagesToMids', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestIdList: requestIdList,
    mids: mids
  };
  var args = new BuddyManagementService_commitSendMessagesToMids_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_commitSendMessagesToMids = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_commitSendMessagesToMids_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('commitSendMessagesToMids failed: unknown result');
};
BuddyManagementServiceClient.prototype.containsBuddyMember = function(requestId, userMid, callback) {
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
    this.send_containsBuddyMember(requestId, userMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_containsBuddyMember(requestId, userMid);
  }
};

BuddyManagementServiceClient.prototype.send_containsBuddyMember = function(requestId, userMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('containsBuddyMember', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    userMid: userMid
  };
  var args = new BuddyManagementService_containsBuddyMember_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_containsBuddyMember = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_containsBuddyMember_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('containsBuddyMember failed: unknown result');
};
BuddyManagementServiceClient.prototype.downloadMessageContent = function(requestId, messageId, callback) {
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
    this.send_downloadMessageContent(requestId, messageId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_downloadMessageContent(requestId, messageId);
  }
};

BuddyManagementServiceClient.prototype.send_downloadMessageContent = function(requestId, messageId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('downloadMessageContent', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    messageId: messageId
  };
  var args = new BuddyManagementService_downloadMessageContent_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_downloadMessageContent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_downloadMessageContent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('downloadMessageContent failed: unknown result');
};
BuddyManagementServiceClient.prototype.downloadMessageContentPreview = function(requestId, messageId, callback) {
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
    this.send_downloadMessageContentPreview(requestId, messageId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_downloadMessageContentPreview(requestId, messageId);
  }
};

BuddyManagementServiceClient.prototype.send_downloadMessageContentPreview = function(requestId, messageId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('downloadMessageContentPreview', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    messageId: messageId
  };
  var args = new BuddyManagementService_downloadMessageContentPreview_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_downloadMessageContentPreview = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_downloadMessageContentPreview_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('downloadMessageContentPreview failed: unknown result');
};
BuddyManagementServiceClient.prototype.downloadProfileImage = function(requestId, callback) {
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
    this.send_downloadProfileImage(requestId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_downloadProfileImage(requestId);
  }
};

BuddyManagementServiceClient.prototype.send_downloadProfileImage = function(requestId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('downloadProfileImage', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId
  };
  var args = new BuddyManagementService_downloadProfileImage_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_downloadProfileImage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_downloadProfileImage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('downloadProfileImage failed: unknown result');
};
BuddyManagementServiceClient.prototype.downloadProfileImagePreview = function(requestId, callback) {
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
    this.send_downloadProfileImagePreview(requestId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_downloadProfileImagePreview(requestId);
  }
};

BuddyManagementServiceClient.prototype.send_downloadProfileImagePreview = function(requestId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('downloadProfileImagePreview', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId
  };
  var args = new BuddyManagementService_downloadProfileImagePreview_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_downloadProfileImagePreview = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_downloadProfileImagePreview_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('downloadProfileImagePreview failed: unknown result');
};
BuddyManagementServiceClient.prototype.getActiveMemberCountByBuddyMid = function(buddyMid, callback) {
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
    this.send_getActiveMemberCountByBuddyMid(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getActiveMemberCountByBuddyMid(buddyMid);
  }
};

BuddyManagementServiceClient.prototype.send_getActiveMemberCountByBuddyMid = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getActiveMemberCountByBuddyMid', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyManagementService_getActiveMemberCountByBuddyMid_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getActiveMemberCountByBuddyMid = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getActiveMemberCountByBuddyMid_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getActiveMemberCountByBuddyMid failed: unknown result');
};
BuddyManagementServiceClient.prototype.getActiveMemberMidsByBuddyMid = function(buddyMid, callback) {
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
    this.send_getActiveMemberMidsByBuddyMid(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getActiveMemberMidsByBuddyMid(buddyMid);
  }
};

BuddyManagementServiceClient.prototype.send_getActiveMemberMidsByBuddyMid = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getActiveMemberMidsByBuddyMid', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyManagementService_getActiveMemberMidsByBuddyMid_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getActiveMemberMidsByBuddyMid = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getActiveMemberMidsByBuddyMid_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getActiveMemberMidsByBuddyMid failed: unknown result');
};
BuddyManagementServiceClient.prototype.getAllBuddyMembers = function(callback) {
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
    this.send_getAllBuddyMembers();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getAllBuddyMembers();
  }
};

BuddyManagementServiceClient.prototype.send_getAllBuddyMembers = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getAllBuddyMembers', Thrift.MessageType.CALL, this.seqid());
  var args = new BuddyManagementService_getAllBuddyMembers_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getAllBuddyMembers = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getAllBuddyMembers_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getAllBuddyMembers failed: unknown result');
};
BuddyManagementServiceClient.prototype.getBlockedBuddyMembers = function(callback) {
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
    this.send_getBlockedBuddyMembers();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBlockedBuddyMembers();
  }
};

BuddyManagementServiceClient.prototype.send_getBlockedBuddyMembers = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBlockedBuddyMembers', Thrift.MessageType.CALL, this.seqid());
  var args = new BuddyManagementService_getBlockedBuddyMembers_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getBlockedBuddyMembers = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getBlockedBuddyMembers_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBlockedBuddyMembers failed: unknown result');
};
BuddyManagementServiceClient.prototype.getBlockerCountByBuddyMid = function(buddyMid, callback) {
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
    this.send_getBlockerCountByBuddyMid(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBlockerCountByBuddyMid(buddyMid);
  }
};

BuddyManagementServiceClient.prototype.send_getBlockerCountByBuddyMid = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBlockerCountByBuddyMid', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyManagementService_getBlockerCountByBuddyMid_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getBlockerCountByBuddyMid = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getBlockerCountByBuddyMid_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBlockerCountByBuddyMid failed: unknown result');
};
BuddyManagementServiceClient.prototype.getBuddyDetailByMid = function(buddyMid, callback) {
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
    this.send_getBuddyDetailByMid(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBuddyDetailByMid(buddyMid);
  }
};

BuddyManagementServiceClient.prototype.send_getBuddyDetailByMid = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBuddyDetailByMid', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyManagementService_getBuddyDetailByMid_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getBuddyDetailByMid = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getBuddyDetailByMid_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBuddyDetailByMid failed: unknown result');
};
BuddyManagementServiceClient.prototype.getBuddyProfile = function(callback) {
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
    this.send_getBuddyProfile();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBuddyProfile();
  }
};

BuddyManagementServiceClient.prototype.send_getBuddyProfile = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBuddyProfile', Thrift.MessageType.CALL, this.seqid());
  var args = new BuddyManagementService_getBuddyProfile_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getBuddyProfile = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getBuddyProfile_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBuddyProfile failed: unknown result');
};
BuddyManagementServiceClient.prototype.getContactTicket = function(callback) {
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
    this.send_getContactTicket();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getContactTicket();
  }
};

BuddyManagementServiceClient.prototype.send_getContactTicket = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getContactTicket', Thrift.MessageType.CALL, this.seqid());
  var args = new BuddyManagementService_getContactTicket_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getContactTicket = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getContactTicket_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getContactTicket failed: unknown result');
};
BuddyManagementServiceClient.prototype.getMemberCountByBuddyMid = function(buddyMid, callback) {
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
    this.send_getMemberCountByBuddyMid(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getMemberCountByBuddyMid(buddyMid);
  }
};

BuddyManagementServiceClient.prototype.send_getMemberCountByBuddyMid = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getMemberCountByBuddyMid', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyManagementService_getMemberCountByBuddyMid_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getMemberCountByBuddyMid = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getMemberCountByBuddyMid_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getMemberCountByBuddyMid failed: unknown result');
};
BuddyManagementServiceClient.prototype.getSendBuddyMessageResult = function(sendBuddyMessageRequestId, callback) {
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
    this.send_getSendBuddyMessageResult(sendBuddyMessageRequestId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getSendBuddyMessageResult(sendBuddyMessageRequestId);
  }
};

BuddyManagementServiceClient.prototype.send_getSendBuddyMessageResult = function(sendBuddyMessageRequestId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getSendBuddyMessageResult', Thrift.MessageType.CALL, this.seqid());
  var params = {
    sendBuddyMessageRequestId: sendBuddyMessageRequestId
  };
  var args = new BuddyManagementService_getSendBuddyMessageResult_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getSendBuddyMessageResult = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getSendBuddyMessageResult_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getSendBuddyMessageResult failed: unknown result');
};
BuddyManagementServiceClient.prototype.getSetBuddyOnAirResult = function(setBuddyOnAirRequestId, callback) {
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
    this.send_getSetBuddyOnAirResult(setBuddyOnAirRequestId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getSetBuddyOnAirResult(setBuddyOnAirRequestId);
  }
};

BuddyManagementServiceClient.prototype.send_getSetBuddyOnAirResult = function(setBuddyOnAirRequestId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getSetBuddyOnAirResult', Thrift.MessageType.CALL, this.seqid());
  var params = {
    setBuddyOnAirRequestId: setBuddyOnAirRequestId
  };
  var args = new BuddyManagementService_getSetBuddyOnAirResult_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getSetBuddyOnAirResult = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getSetBuddyOnAirResult_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getSetBuddyOnAirResult failed: unknown result');
};
BuddyManagementServiceClient.prototype.getUpdateBuddyProfileResult = function(updateBuddyProfileRequestId, callback) {
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
    this.send_getUpdateBuddyProfileResult(updateBuddyProfileRequestId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUpdateBuddyProfileResult(updateBuddyProfileRequestId);
  }
};

BuddyManagementServiceClient.prototype.send_getUpdateBuddyProfileResult = function(updateBuddyProfileRequestId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getUpdateBuddyProfileResult', Thrift.MessageType.CALL, this.seqid());
  var params = {
    updateBuddyProfileRequestId: updateBuddyProfileRequestId
  };
  var args = new BuddyManagementService_getUpdateBuddyProfileResult_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_getUpdateBuddyProfileResult = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_getUpdateBuddyProfileResult_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUpdateBuddyProfileResult failed: unknown result');
};
BuddyManagementServiceClient.prototype.isBuddyOnAirByMid = function(buddyMid, callback) {
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
    this.send_isBuddyOnAirByMid(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_isBuddyOnAirByMid(buddyMid);
  }
};

BuddyManagementServiceClient.prototype.send_isBuddyOnAirByMid = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('isBuddyOnAirByMid', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyManagementService_isBuddyOnAirByMid_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_isBuddyOnAirByMid = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_isBuddyOnAirByMid_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('isBuddyOnAirByMid failed: unknown result');
};
BuddyManagementServiceClient.prototype.linkAndSendBuddyContentMessageToAllAsync = function(requestId, msg, sourceContentId, callback) {
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
    this.send_linkAndSendBuddyContentMessageToAllAsync(requestId, msg, sourceContentId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_linkAndSendBuddyContentMessageToAllAsync(requestId, msg, sourceContentId);
  }
};

BuddyManagementServiceClient.prototype.send_linkAndSendBuddyContentMessageToAllAsync = function(requestId, msg, sourceContentId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('linkAndSendBuddyContentMessageToAllAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    sourceContentId: sourceContentId
  };
  var args = new BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_linkAndSendBuddyContentMessageToAllAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('linkAndSendBuddyContentMessageToAllAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.linkAndSendBuddyContentMessageToMids = function(requestId, msg, sourceContentId, mids, callback) {
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
    this.send_linkAndSendBuddyContentMessageToMids(requestId, msg, sourceContentId, mids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_linkAndSendBuddyContentMessageToMids(requestId, msg, sourceContentId, mids);
  }
};

BuddyManagementServiceClient.prototype.send_linkAndSendBuddyContentMessageToMids = function(requestId, msg, sourceContentId, mids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('linkAndSendBuddyContentMessageToMids', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    sourceContentId: sourceContentId,
    mids: mids
  };
  var args = new BuddyManagementService_linkAndSendBuddyContentMessageToMids_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_linkAndSendBuddyContentMessageToMids = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_linkAndSendBuddyContentMessageToMids_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('linkAndSendBuddyContentMessageToMids failed: unknown result');
};
BuddyManagementServiceClient.prototype.notifyBuddyBlocked = function(buddyMid, blockerMid, callback) {
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
    this.send_notifyBuddyBlocked(buddyMid, blockerMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_notifyBuddyBlocked(buddyMid, blockerMid);
  }
};

BuddyManagementServiceClient.prototype.send_notifyBuddyBlocked = function(buddyMid, blockerMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('notifyBuddyBlocked', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid,
    blockerMid: blockerMid
  };
  var args = new BuddyManagementService_notifyBuddyBlocked_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_notifyBuddyBlocked = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_notifyBuddyBlocked_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.notifyBuddyUnblocked = function(buddyMid, blockerMid, callback) {
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
    this.send_notifyBuddyUnblocked(buddyMid, blockerMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_notifyBuddyUnblocked(buddyMid, blockerMid);
  }
};

BuddyManagementServiceClient.prototype.send_notifyBuddyUnblocked = function(buddyMid, blockerMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('notifyBuddyUnblocked', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid,
    blockerMid: blockerMid
  };
  var args = new BuddyManagementService_notifyBuddyUnblocked_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_notifyBuddyUnblocked = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_notifyBuddyUnblocked_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.registerBuddy = function(buddyId, searchId, displayName, statusMeessage, picture, settings, callback) {
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
    this.send_registerBuddy(buddyId, searchId, displayName, statusMeessage, picture, settings);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_registerBuddy(buddyId, searchId, displayName, statusMeessage, picture, settings);
  }
};

BuddyManagementServiceClient.prototype.send_registerBuddy = function(buddyId, searchId, displayName, statusMeessage, picture, settings) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('registerBuddy', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyId: buddyId,
    searchId: searchId,
    displayName: displayName,
    statusMeessage: statusMeessage,
    picture: picture,
    settings: settings
  };
  var args = new BuddyManagementService_registerBuddy_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_registerBuddy = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_registerBuddy_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('registerBuddy failed: unknown result');
};
BuddyManagementServiceClient.prototype.registerBuddyAdmin = function(buddyId, searchId, displayName, statusMessage, picture, callback) {
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
    this.send_registerBuddyAdmin(buddyId, searchId, displayName, statusMessage, picture);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_registerBuddyAdmin(buddyId, searchId, displayName, statusMessage, picture);
  }
};

BuddyManagementServiceClient.prototype.send_registerBuddyAdmin = function(buddyId, searchId, displayName, statusMessage, picture) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('registerBuddyAdmin', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyId: buddyId,
    searchId: searchId,
    displayName: displayName,
    statusMessage: statusMessage,
    picture: picture
  };
  var args = new BuddyManagementService_registerBuddyAdmin_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_registerBuddyAdmin = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_registerBuddyAdmin_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('registerBuddyAdmin failed: unknown result');
};
BuddyManagementServiceClient.prototype.reissueContactTicket = function(expirationTime, maxUseCount, callback) {
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
    this.send_reissueContactTicket(expirationTime, maxUseCount);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_reissueContactTicket(expirationTime, maxUseCount);
  }
};

BuddyManagementServiceClient.prototype.send_reissueContactTicket = function(expirationTime, maxUseCount) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('reissueContactTicket', Thrift.MessageType.CALL, this.seqid());
  var params = {
    expirationTime: expirationTime,
    maxUseCount: maxUseCount
  };
  var args = new BuddyManagementService_reissueContactTicket_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_reissueContactTicket = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_reissueContactTicket_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('reissueContactTicket failed: unknown result');
};
BuddyManagementServiceClient.prototype.removeBuddyMember = function(requestId, userMid, callback) {
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
    this.send_removeBuddyMember(requestId, userMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_removeBuddyMember(requestId, userMid);
  }
};

BuddyManagementServiceClient.prototype.send_removeBuddyMember = function(requestId, userMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('removeBuddyMember', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    userMid: userMid
  };
  var args = new BuddyManagementService_removeBuddyMember_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_removeBuddyMember = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_removeBuddyMember_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.removeBuddyMembers = function(requestId, userMids, callback) {
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
    this.send_removeBuddyMembers(requestId, userMids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_removeBuddyMembers(requestId, userMids);
  }
};

BuddyManagementServiceClient.prototype.send_removeBuddyMembers = function(requestId, userMids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('removeBuddyMembers', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    userMids: userMids
  };
  var args = new BuddyManagementService_removeBuddyMembers_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_removeBuddyMembers = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_removeBuddyMembers_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.sendBuddyContentMessageToAll = function(requestId, msg, content, callback) {
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
    this.send_sendBuddyContentMessageToAll(requestId, msg, content);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyContentMessageToAll(requestId, msg, content);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyContentMessageToAll = function(requestId, msg, content) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyContentMessageToAll', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    content: content
  };
  var args = new BuddyManagementService_sendBuddyContentMessageToAll_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyContentMessageToAll = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyContentMessageToAll_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyContentMessageToAll failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendBuddyContentMessageToAllAsync = function(requestId, msg, content, callback) {
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
    this.send_sendBuddyContentMessageToAllAsync(requestId, msg, content);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyContentMessageToAllAsync(requestId, msg, content);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyContentMessageToAllAsync = function(requestId, msg, content) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyContentMessageToAllAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    content: content
  };
  var args = new BuddyManagementService_sendBuddyContentMessageToAllAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyContentMessageToAllAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyContentMessageToAllAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyContentMessageToAllAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendBuddyContentMessageToMids = function(requestId, msg, content, mids, callback) {
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
    this.send_sendBuddyContentMessageToMids(requestId, msg, content, mids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyContentMessageToMids(requestId, msg, content, mids);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyContentMessageToMids = function(requestId, msg, content, mids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyContentMessageToMids', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    content: content,
    mids: mids
  };
  var args = new BuddyManagementService_sendBuddyContentMessageToMids_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyContentMessageToMids = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyContentMessageToMids_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyContentMessageToMids failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendBuddyContentMessageToMidsAsync = function(requestId, msg, content, mids, callback) {
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
    this.send_sendBuddyContentMessageToMidsAsync(requestId, msg, content, mids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyContentMessageToMidsAsync(requestId, msg, content, mids);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyContentMessageToMidsAsync = function(requestId, msg, content, mids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyContentMessageToMidsAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    content: content,
    mids: mids
  };
  var args = new BuddyManagementService_sendBuddyContentMessageToMidsAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyContentMessageToMidsAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyContentMessageToMidsAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyContentMessageToMidsAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendBuddyMessageToAll = function(requestId, msg, callback) {
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
    this.send_sendBuddyMessageToAll(requestId, msg);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyMessageToAll(requestId, msg);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyMessageToAll = function(requestId, msg) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyMessageToAll', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg
  };
  var args = new BuddyManagementService_sendBuddyMessageToAll_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyMessageToAll = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyMessageToAll_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyMessageToAll failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendBuddyMessageToAllAsync = function(requestId, msg, callback) {
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
    this.send_sendBuddyMessageToAllAsync(requestId, msg);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyMessageToAllAsync(requestId, msg);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyMessageToAllAsync = function(requestId, msg) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyMessageToAllAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg
  };
  var args = new BuddyManagementService_sendBuddyMessageToAllAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyMessageToAllAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyMessageToAllAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyMessageToAllAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendBuddyMessageToMids = function(requestId, msg, mids, callback) {
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
    this.send_sendBuddyMessageToMids(requestId, msg, mids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyMessageToMids(requestId, msg, mids);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyMessageToMids = function(requestId, msg, mids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyMessageToMids', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    mids: mids
  };
  var args = new BuddyManagementService_sendBuddyMessageToMids_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyMessageToMids = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyMessageToMids_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyMessageToMids failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendBuddyMessageToMidsAsync = function(requestId, msg, mids, callback) {
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
    this.send_sendBuddyMessageToMidsAsync(requestId, msg, mids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendBuddyMessageToMidsAsync(requestId, msg, mids);
  }
};

BuddyManagementServiceClient.prototype.send_sendBuddyMessageToMidsAsync = function(requestId, msg, mids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendBuddyMessageToMidsAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    msg: msg,
    mids: mids
  };
  var args = new BuddyManagementService_sendBuddyMessageToMidsAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendBuddyMessageToMidsAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendBuddyMessageToMidsAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendBuddyMessageToMidsAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.sendIndividualEventToAllAsync = function(requestId, buddyMid, notificationStatus, callback) {
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
    this.send_sendIndividualEventToAllAsync(requestId, buddyMid, notificationStatus);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendIndividualEventToAllAsync(requestId, buddyMid, notificationStatus);
  }
};

BuddyManagementServiceClient.prototype.send_sendIndividualEventToAllAsync = function(requestId, buddyMid, notificationStatus) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendIndividualEventToAllAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    buddyMid: buddyMid,
    notificationStatus: notificationStatus
  };
  var args = new BuddyManagementService_sendIndividualEventToAllAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_sendIndividualEventToAllAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_sendIndividualEventToAllAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.setBuddyOnAir = function(requestId, onAir, callback) {
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
    this.send_setBuddyOnAir(requestId, onAir);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_setBuddyOnAir(requestId, onAir);
  }
};

BuddyManagementServiceClient.prototype.send_setBuddyOnAir = function(requestId, onAir) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('setBuddyOnAir', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    onAir: onAir
  };
  var args = new BuddyManagementService_setBuddyOnAir_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_setBuddyOnAir = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_setBuddyOnAir_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('setBuddyOnAir failed: unknown result');
};
BuddyManagementServiceClient.prototype.setBuddyOnAirAsync = function(requestId, onAir, callback) {
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
    this.send_setBuddyOnAirAsync(requestId, onAir);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_setBuddyOnAirAsync(requestId, onAir);
  }
};

BuddyManagementServiceClient.prototype.send_setBuddyOnAirAsync = function(requestId, onAir) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('setBuddyOnAirAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    onAir: onAir
  };
  var args = new BuddyManagementService_setBuddyOnAirAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_setBuddyOnAirAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_setBuddyOnAirAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('setBuddyOnAirAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.storeMessage = function(requestId, messageRequest, callback) {
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
    this.send_storeMessage(requestId, messageRequest);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_storeMessage(requestId, messageRequest);
  }
};

BuddyManagementServiceClient.prototype.send_storeMessage = function(requestId, messageRequest) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('storeMessage', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    messageRequest: messageRequest
  };
  var args = new BuddyManagementService_storeMessage_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_storeMessage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_storeMessage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('storeMessage failed: unknown result');
};
BuddyManagementServiceClient.prototype.unblockBuddyMember = function(requestId, mid, callback) {
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
    this.send_unblockBuddyMember(requestId, mid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_unblockBuddyMember(requestId, mid);
  }
};

BuddyManagementServiceClient.prototype.send_unblockBuddyMember = function(requestId, mid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('unblockBuddyMember', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    mid: mid
  };
  var args = new BuddyManagementService_unblockBuddyMember_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_unblockBuddyMember = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_unblockBuddyMember_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.unregisterBuddy = function(requestId, callback) {
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
    this.send_unregisterBuddy(requestId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_unregisterBuddy(requestId);
  }
};

BuddyManagementServiceClient.prototype.send_unregisterBuddy = function(requestId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('unregisterBuddy', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId
  };
  var args = new BuddyManagementService_unregisterBuddy_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_unregisterBuddy = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_unregisterBuddy_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.unregisterBuddyAdmin = function(requestId, callback) {
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
    this.send_unregisterBuddyAdmin(requestId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_unregisterBuddyAdmin(requestId);
  }
};

BuddyManagementServiceClient.prototype.send_unregisterBuddyAdmin = function(requestId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('unregisterBuddyAdmin', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId
  };
  var args = new BuddyManagementService_unregisterBuddyAdmin_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_unregisterBuddyAdmin = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_unregisterBuddyAdmin_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.updateBuddyAdminProfileAttribute = function(requestId, attributes, callback) {
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
    this.send_updateBuddyAdminProfileAttribute(requestId, attributes);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddyAdminProfileAttribute(requestId, attributes);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddyAdminProfileAttribute = function(requestId, attributes) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddyAdminProfileAttribute', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    attributes: attributes
  };
  var args = new BuddyManagementService_updateBuddyAdminProfileAttribute_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddyAdminProfileAttribute = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddyAdminProfileAttribute_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.updateBuddyAdminProfileImage = function(requestId, picture, callback) {
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
    this.send_updateBuddyAdminProfileImage(requestId, picture);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddyAdminProfileImage(requestId, picture);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddyAdminProfileImage = function(requestId, picture) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddyAdminProfileImage', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    picture: picture
  };
  var args = new BuddyManagementService_updateBuddyAdminProfileImage_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddyAdminProfileImage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddyAdminProfileImage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.updateBuddyProfileAttributes = function(requestId, attributes, callback) {
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
    this.send_updateBuddyProfileAttributes(requestId, attributes);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddyProfileAttributes(requestId, attributes);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddyProfileAttributes = function(requestId, attributes) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddyProfileAttributes', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    attributes: attributes
  };
  var args = new BuddyManagementService_updateBuddyProfileAttributes_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddyProfileAttributes = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddyProfileAttributes_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateBuddyProfileAttributes failed: unknown result');
};
BuddyManagementServiceClient.prototype.updateBuddyProfileAttributesAsync = function(requestId, attributes, callback) {
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
    this.send_updateBuddyProfileAttributesAsync(requestId, attributes);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddyProfileAttributesAsync(requestId, attributes);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddyProfileAttributesAsync = function(requestId, attributes) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddyProfileAttributesAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    attributes: attributes
  };
  var args = new BuddyManagementService_updateBuddyProfileAttributesAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddyProfileAttributesAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddyProfileAttributesAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateBuddyProfileAttributesAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.updateBuddyProfileImage = function(requestId, image, callback) {
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
    this.send_updateBuddyProfileImage(requestId, image);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddyProfileImage(requestId, image);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddyProfileImage = function(requestId, image) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddyProfileImage', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    image: image
  };
  var args = new BuddyManagementService_updateBuddyProfileImage_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddyProfileImage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddyProfileImage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateBuddyProfileImage failed: unknown result');
};
BuddyManagementServiceClient.prototype.updateBuddyProfileImageAsync = function(requestId, image, callback) {
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
    this.send_updateBuddyProfileImageAsync(requestId, image);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddyProfileImageAsync(requestId, image);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddyProfileImageAsync = function(requestId, image) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddyProfileImageAsync', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    image: image
  };
  var args = new BuddyManagementService_updateBuddyProfileImageAsync_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddyProfileImageAsync = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddyProfileImageAsync_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateBuddyProfileImageAsync failed: unknown result');
};
BuddyManagementServiceClient.prototype.updateBuddySearchId = function(requestId, searchId, callback) {
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
    this.send_updateBuddySearchId(requestId, searchId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddySearchId(requestId, searchId);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddySearchId = function(requestId, searchId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddySearchId', Thrift.MessageType.CALL, this.seqid());
  var params = {
    requestId: requestId,
    searchId: searchId
  };
  var args = new BuddyManagementService_updateBuddySearchId_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddySearchId = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddySearchId_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.updateBuddySettings = function(settings, callback) {
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
    this.send_updateBuddySettings(settings);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBuddySettings(settings);
  }
};

BuddyManagementServiceClient.prototype.send_updateBuddySettings = function(settings) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBuddySettings', Thrift.MessageType.CALL, this.seqid());
  var params = {
    settings: settings
  };
  var args = new BuddyManagementService_updateBuddySettings_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_updateBuddySettings = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_updateBuddySettings_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
BuddyManagementServiceClient.prototype.uploadBuddyContent = function(contentType, content, callback) {
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
    this.send_uploadBuddyContent(contentType, content);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_uploadBuddyContent(contentType, content);
  }
};

BuddyManagementServiceClient.prototype.send_uploadBuddyContent = function(contentType, content) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('uploadBuddyContent', Thrift.MessageType.CALL, this.seqid());
  var params = {
    contentType: contentType,
    content: content
  };
  var args = new BuddyManagementService_uploadBuddyContent_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyManagementServiceClient.prototype.recv_uploadBuddyContent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyManagementService_uploadBuddyContent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('uploadBuddyContent failed: unknown result');
};
var BuddyManagementServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
BuddyManagementServiceProcessor.prototype.process = function(input, output) {
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
BuddyManagementServiceProcessor.prototype.process_addBuddyMember = function(seqid, input, output) {
  var args = new BuddyManagementService_addBuddyMember_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addBuddyMember.length === 2) {
    Q.fcall(this._handler.addBuddyMember.bind(this._handler), args.requestId, args.userMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_addBuddyMember_result({success: result});
        output.writeMessageBegin("addBuddyMember", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_addBuddyMember_result(err);
          output.writeMessageBegin("addBuddyMember", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("addBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.addBuddyMember(args.requestId, args.userMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_addBuddyMember_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("addBuddyMember", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("addBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_addBuddyMembers = function(seqid, input, output) {
  var args = new BuddyManagementService_addBuddyMembers_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addBuddyMembers.length === 2) {
    Q.fcall(this._handler.addBuddyMembers.bind(this._handler), args.requestId, args.userMids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_addBuddyMembers_result({success: result});
        output.writeMessageBegin("addBuddyMembers", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_addBuddyMembers_result(err);
          output.writeMessageBegin("addBuddyMembers", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("addBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.addBuddyMembers(args.requestId, args.userMids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_addBuddyMembers_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("addBuddyMembers", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("addBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_blockBuddyMember = function(seqid, input, output) {
  var args = new BuddyManagementService_blockBuddyMember_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.blockBuddyMember.length === 2) {
    Q.fcall(this._handler.blockBuddyMember.bind(this._handler), args.requestId, args.mid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_blockBuddyMember_result({success: result});
        output.writeMessageBegin("blockBuddyMember", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_blockBuddyMember_result(err);
          output.writeMessageBegin("blockBuddyMember", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("blockBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.blockBuddyMember(args.requestId, args.mid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_blockBuddyMember_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("blockBuddyMember", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("blockBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_commitSendMessagesToAll = function(seqid, input, output) {
  var args = new BuddyManagementService_commitSendMessagesToAll_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.commitSendMessagesToAll.length === 1) {
    Q.fcall(this._handler.commitSendMessagesToAll.bind(this._handler), args.requestIdList)
      .then(function(result) {
        var result_obj = new BuddyManagementService_commitSendMessagesToAll_result({success: result});
        output.writeMessageBegin("commitSendMessagesToAll", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_commitSendMessagesToAll_result(err);
          output.writeMessageBegin("commitSendMessagesToAll", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("commitSendMessagesToAll", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.commitSendMessagesToAll(args.requestIdList, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_commitSendMessagesToAll_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("commitSendMessagesToAll", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("commitSendMessagesToAll", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_commitSendMessagesToMids = function(seqid, input, output) {
  var args = new BuddyManagementService_commitSendMessagesToMids_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.commitSendMessagesToMids.length === 2) {
    Q.fcall(this._handler.commitSendMessagesToMids.bind(this._handler), args.requestIdList, args.mids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_commitSendMessagesToMids_result({success: result});
        output.writeMessageBegin("commitSendMessagesToMids", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_commitSendMessagesToMids_result(err);
          output.writeMessageBegin("commitSendMessagesToMids", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("commitSendMessagesToMids", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.commitSendMessagesToMids(args.requestIdList, args.mids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_commitSendMessagesToMids_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("commitSendMessagesToMids", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("commitSendMessagesToMids", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_containsBuddyMember = function(seqid, input, output) {
  var args = new BuddyManagementService_containsBuddyMember_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.containsBuddyMember.length === 2) {
    Q.fcall(this._handler.containsBuddyMember.bind(this._handler), args.requestId, args.userMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_containsBuddyMember_result({success: result});
        output.writeMessageBegin("containsBuddyMember", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_containsBuddyMember_result(err);
          output.writeMessageBegin("containsBuddyMember", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("containsBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.containsBuddyMember(args.requestId, args.userMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_containsBuddyMember_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("containsBuddyMember", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("containsBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_downloadMessageContent = function(seqid, input, output) {
  var args = new BuddyManagementService_downloadMessageContent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.downloadMessageContent.length === 2) {
    Q.fcall(this._handler.downloadMessageContent.bind(this._handler), args.requestId, args.messageId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_downloadMessageContent_result({success: result});
        output.writeMessageBegin("downloadMessageContent", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_downloadMessageContent_result(err);
          output.writeMessageBegin("downloadMessageContent", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("downloadMessageContent", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.downloadMessageContent(args.requestId, args.messageId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_downloadMessageContent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("downloadMessageContent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("downloadMessageContent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_downloadMessageContentPreview = function(seqid, input, output) {
  var args = new BuddyManagementService_downloadMessageContentPreview_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.downloadMessageContentPreview.length === 2) {
    Q.fcall(this._handler.downloadMessageContentPreview.bind(this._handler), args.requestId, args.messageId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_downloadMessageContentPreview_result({success: result});
        output.writeMessageBegin("downloadMessageContentPreview", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_downloadMessageContentPreview_result(err);
          output.writeMessageBegin("downloadMessageContentPreview", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("downloadMessageContentPreview", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.downloadMessageContentPreview(args.requestId, args.messageId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_downloadMessageContentPreview_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("downloadMessageContentPreview", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("downloadMessageContentPreview", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_downloadProfileImage = function(seqid, input, output) {
  var args = new BuddyManagementService_downloadProfileImage_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.downloadProfileImage.length === 1) {
    Q.fcall(this._handler.downloadProfileImage.bind(this._handler), args.requestId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_downloadProfileImage_result({success: result});
        output.writeMessageBegin("downloadProfileImage", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_downloadProfileImage_result(err);
          output.writeMessageBegin("downloadProfileImage", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("downloadProfileImage", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.downloadProfileImage(args.requestId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_downloadProfileImage_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("downloadProfileImage", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("downloadProfileImage", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_downloadProfileImagePreview = function(seqid, input, output) {
  var args = new BuddyManagementService_downloadProfileImagePreview_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.downloadProfileImagePreview.length === 1) {
    Q.fcall(this._handler.downloadProfileImagePreview.bind(this._handler), args.requestId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_downloadProfileImagePreview_result({success: result});
        output.writeMessageBegin("downloadProfileImagePreview", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_downloadProfileImagePreview_result(err);
          output.writeMessageBegin("downloadProfileImagePreview", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("downloadProfileImagePreview", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.downloadProfileImagePreview(args.requestId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_downloadProfileImagePreview_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("downloadProfileImagePreview", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("downloadProfileImagePreview", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getActiveMemberCountByBuddyMid = function(seqid, input, output) {
  var args = new BuddyManagementService_getActiveMemberCountByBuddyMid_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getActiveMemberCountByBuddyMid.length === 1) {
    Q.fcall(this._handler.getActiveMemberCountByBuddyMid.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getActiveMemberCountByBuddyMid_result({success: result});
        output.writeMessageBegin("getActiveMemberCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getActiveMemberCountByBuddyMid_result(err);
          output.writeMessageBegin("getActiveMemberCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getActiveMemberCountByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getActiveMemberCountByBuddyMid(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getActiveMemberCountByBuddyMid_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getActiveMemberCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getActiveMemberCountByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getActiveMemberMidsByBuddyMid = function(seqid, input, output) {
  var args = new BuddyManagementService_getActiveMemberMidsByBuddyMid_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getActiveMemberMidsByBuddyMid.length === 1) {
    Q.fcall(this._handler.getActiveMemberMidsByBuddyMid.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getActiveMemberMidsByBuddyMid_result({success: result});
        output.writeMessageBegin("getActiveMemberMidsByBuddyMid", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getActiveMemberMidsByBuddyMid_result(err);
          output.writeMessageBegin("getActiveMemberMidsByBuddyMid", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getActiveMemberMidsByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getActiveMemberMidsByBuddyMid(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getActiveMemberMidsByBuddyMid_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getActiveMemberMidsByBuddyMid", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getActiveMemberMidsByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getAllBuddyMembers = function(seqid, input, output) {
  var args = new BuddyManagementService_getAllBuddyMembers_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getAllBuddyMembers.length === 0) {
    Q.fcall(this._handler.getAllBuddyMembers.bind(this._handler))
      .then(function(result) {
        var result_obj = new BuddyManagementService_getAllBuddyMembers_result({success: result});
        output.writeMessageBegin("getAllBuddyMembers", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getAllBuddyMembers_result(err);
          output.writeMessageBegin("getAllBuddyMembers", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getAllBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getAllBuddyMembers(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getAllBuddyMembers_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getAllBuddyMembers", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getAllBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getBlockedBuddyMembers = function(seqid, input, output) {
  var args = new BuddyManagementService_getBlockedBuddyMembers_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBlockedBuddyMembers.length === 0) {
    Q.fcall(this._handler.getBlockedBuddyMembers.bind(this._handler))
      .then(function(result) {
        var result_obj = new BuddyManagementService_getBlockedBuddyMembers_result({success: result});
        output.writeMessageBegin("getBlockedBuddyMembers", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getBlockedBuddyMembers_result(err);
          output.writeMessageBegin("getBlockedBuddyMembers", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBlockedBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBlockedBuddyMembers(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getBlockedBuddyMembers_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBlockedBuddyMembers", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBlockedBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getBlockerCountByBuddyMid = function(seqid, input, output) {
  var args = new BuddyManagementService_getBlockerCountByBuddyMid_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBlockerCountByBuddyMid.length === 1) {
    Q.fcall(this._handler.getBlockerCountByBuddyMid.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getBlockerCountByBuddyMid_result({success: result});
        output.writeMessageBegin("getBlockerCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getBlockerCountByBuddyMid_result(err);
          output.writeMessageBegin("getBlockerCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBlockerCountByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBlockerCountByBuddyMid(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getBlockerCountByBuddyMid_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBlockerCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBlockerCountByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getBuddyDetailByMid = function(seqid, input, output) {
  var args = new BuddyManagementService_getBuddyDetailByMid_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBuddyDetailByMid.length === 1) {
    Q.fcall(this._handler.getBuddyDetailByMid.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getBuddyDetailByMid_result({success: result});
        output.writeMessageBegin("getBuddyDetailByMid", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getBuddyDetailByMid_result(err);
          output.writeMessageBegin("getBuddyDetailByMid", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBuddyDetailByMid", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBuddyDetailByMid(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getBuddyDetailByMid_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBuddyDetailByMid", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBuddyDetailByMid", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getBuddyProfile = function(seqid, input, output) {
  var args = new BuddyManagementService_getBuddyProfile_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBuddyProfile.length === 0) {
    Q.fcall(this._handler.getBuddyProfile.bind(this._handler))
      .then(function(result) {
        var result_obj = new BuddyManagementService_getBuddyProfile_result({success: result});
        output.writeMessageBegin("getBuddyProfile", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getBuddyProfile_result(err);
          output.writeMessageBegin("getBuddyProfile", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBuddyProfile", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBuddyProfile(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getBuddyProfile_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBuddyProfile", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBuddyProfile", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getContactTicket = function(seqid, input, output) {
  var args = new BuddyManagementService_getContactTicket_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getContactTicket.length === 0) {
    Q.fcall(this._handler.getContactTicket.bind(this._handler))
      .then(function(result) {
        var result_obj = new BuddyManagementService_getContactTicket_result({success: result});
        output.writeMessageBegin("getContactTicket", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getContactTicket_result(err);
          output.writeMessageBegin("getContactTicket", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getContactTicket", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getContactTicket(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getContactTicket_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getContactTicket", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getContactTicket", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getMemberCountByBuddyMid = function(seqid, input, output) {
  var args = new BuddyManagementService_getMemberCountByBuddyMid_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getMemberCountByBuddyMid.length === 1) {
    Q.fcall(this._handler.getMemberCountByBuddyMid.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getMemberCountByBuddyMid_result({success: result});
        output.writeMessageBegin("getMemberCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getMemberCountByBuddyMid_result(err);
          output.writeMessageBegin("getMemberCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getMemberCountByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getMemberCountByBuddyMid(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getMemberCountByBuddyMid_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getMemberCountByBuddyMid", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getMemberCountByBuddyMid", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getSendBuddyMessageResult = function(seqid, input, output) {
  var args = new BuddyManagementService_getSendBuddyMessageResult_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getSendBuddyMessageResult.length === 1) {
    Q.fcall(this._handler.getSendBuddyMessageResult.bind(this._handler), args.sendBuddyMessageRequestId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getSendBuddyMessageResult_result({success: result});
        output.writeMessageBegin("getSendBuddyMessageResult", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getSendBuddyMessageResult_result(err);
          output.writeMessageBegin("getSendBuddyMessageResult", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getSendBuddyMessageResult", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getSendBuddyMessageResult(args.sendBuddyMessageRequestId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getSendBuddyMessageResult_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getSendBuddyMessageResult", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getSendBuddyMessageResult", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getSetBuddyOnAirResult = function(seqid, input, output) {
  var args = new BuddyManagementService_getSetBuddyOnAirResult_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getSetBuddyOnAirResult.length === 1) {
    Q.fcall(this._handler.getSetBuddyOnAirResult.bind(this._handler), args.setBuddyOnAirRequestId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getSetBuddyOnAirResult_result({success: result});
        output.writeMessageBegin("getSetBuddyOnAirResult", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getSetBuddyOnAirResult_result(err);
          output.writeMessageBegin("getSetBuddyOnAirResult", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getSetBuddyOnAirResult", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getSetBuddyOnAirResult(args.setBuddyOnAirRequestId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getSetBuddyOnAirResult_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getSetBuddyOnAirResult", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getSetBuddyOnAirResult", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_getUpdateBuddyProfileResult = function(seqid, input, output) {
  var args = new BuddyManagementService_getUpdateBuddyProfileResult_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUpdateBuddyProfileResult.length === 1) {
    Q.fcall(this._handler.getUpdateBuddyProfileResult.bind(this._handler), args.updateBuddyProfileRequestId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_getUpdateBuddyProfileResult_result({success: result});
        output.writeMessageBegin("getUpdateBuddyProfileResult", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_getUpdateBuddyProfileResult_result(err);
          output.writeMessageBegin("getUpdateBuddyProfileResult", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getUpdateBuddyProfileResult", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getUpdateBuddyProfileResult(args.updateBuddyProfileRequestId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_getUpdateBuddyProfileResult_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getUpdateBuddyProfileResult", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUpdateBuddyProfileResult", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_isBuddyOnAirByMid = function(seqid, input, output) {
  var args = new BuddyManagementService_isBuddyOnAirByMid_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.isBuddyOnAirByMid.length === 1) {
    Q.fcall(this._handler.isBuddyOnAirByMid.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_isBuddyOnAirByMid_result({success: result});
        output.writeMessageBegin("isBuddyOnAirByMid", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_isBuddyOnAirByMid_result(err);
          output.writeMessageBegin("isBuddyOnAirByMid", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("isBuddyOnAirByMid", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.isBuddyOnAirByMid(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_isBuddyOnAirByMid_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("isBuddyOnAirByMid", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isBuddyOnAirByMid", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_linkAndSendBuddyContentMessageToAllAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.linkAndSendBuddyContentMessageToAllAsync.length === 3) {
    Q.fcall(this._handler.linkAndSendBuddyContentMessageToAllAsync.bind(this._handler), args.requestId, args.msg, args.sourceContentId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result({success: result});
        output.writeMessageBegin("linkAndSendBuddyContentMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result(err);
          output.writeMessageBegin("linkAndSendBuddyContentMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("linkAndSendBuddyContentMessageToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.linkAndSendBuddyContentMessageToAllAsync(args.requestId, args.msg, args.sourceContentId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_linkAndSendBuddyContentMessageToAllAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("linkAndSendBuddyContentMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("linkAndSendBuddyContentMessageToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_linkAndSendBuddyContentMessageToMids = function(seqid, input, output) {
  var args = new BuddyManagementService_linkAndSendBuddyContentMessageToMids_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.linkAndSendBuddyContentMessageToMids.length === 4) {
    Q.fcall(this._handler.linkAndSendBuddyContentMessageToMids.bind(this._handler), args.requestId, args.msg, args.sourceContentId, args.mids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_linkAndSendBuddyContentMessageToMids_result({success: result});
        output.writeMessageBegin("linkAndSendBuddyContentMessageToMids", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_linkAndSendBuddyContentMessageToMids_result(err);
          output.writeMessageBegin("linkAndSendBuddyContentMessageToMids", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("linkAndSendBuddyContentMessageToMids", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.linkAndSendBuddyContentMessageToMids(args.requestId, args.msg, args.sourceContentId, args.mids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_linkAndSendBuddyContentMessageToMids_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("linkAndSendBuddyContentMessageToMids", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("linkAndSendBuddyContentMessageToMids", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_notifyBuddyBlocked = function(seqid, input, output) {
  var args = new BuddyManagementService_notifyBuddyBlocked_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.notifyBuddyBlocked.length === 2) {
    Q.fcall(this._handler.notifyBuddyBlocked.bind(this._handler), args.buddyMid, args.blockerMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_notifyBuddyBlocked_result({success: result});
        output.writeMessageBegin("notifyBuddyBlocked", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_notifyBuddyBlocked_result(err);
          output.writeMessageBegin("notifyBuddyBlocked", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyBuddyBlocked", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.notifyBuddyBlocked(args.buddyMid, args.blockerMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_notifyBuddyBlocked_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("notifyBuddyBlocked", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("notifyBuddyBlocked", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_notifyBuddyUnblocked = function(seqid, input, output) {
  var args = new BuddyManagementService_notifyBuddyUnblocked_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.notifyBuddyUnblocked.length === 2) {
    Q.fcall(this._handler.notifyBuddyUnblocked.bind(this._handler), args.buddyMid, args.blockerMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_notifyBuddyUnblocked_result({success: result});
        output.writeMessageBegin("notifyBuddyUnblocked", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_notifyBuddyUnblocked_result(err);
          output.writeMessageBegin("notifyBuddyUnblocked", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyBuddyUnblocked", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.notifyBuddyUnblocked(args.buddyMid, args.blockerMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_notifyBuddyUnblocked_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("notifyBuddyUnblocked", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("notifyBuddyUnblocked", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_registerBuddy = function(seqid, input, output) {
  var args = new BuddyManagementService_registerBuddy_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.registerBuddy.length === 6) {
    Q.fcall(this._handler.registerBuddy.bind(this._handler), args.buddyId, args.searchId, args.displayName, args.statusMeessage, args.picture, args.settings)
      .then(function(result) {
        var result_obj = new BuddyManagementService_registerBuddy_result({success: result});
        output.writeMessageBegin("registerBuddy", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_registerBuddy_result(err);
          output.writeMessageBegin("registerBuddy", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("registerBuddy", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.registerBuddy(args.buddyId, args.searchId, args.displayName, args.statusMeessage, args.picture, args.settings, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_registerBuddy_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("registerBuddy", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("registerBuddy", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_registerBuddyAdmin = function(seqid, input, output) {
  var args = new BuddyManagementService_registerBuddyAdmin_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.registerBuddyAdmin.length === 5) {
    Q.fcall(this._handler.registerBuddyAdmin.bind(this._handler), args.buddyId, args.searchId, args.displayName, args.statusMessage, args.picture)
      .then(function(result) {
        var result_obj = new BuddyManagementService_registerBuddyAdmin_result({success: result});
        output.writeMessageBegin("registerBuddyAdmin", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_registerBuddyAdmin_result(err);
          output.writeMessageBegin("registerBuddyAdmin", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("registerBuddyAdmin", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.registerBuddyAdmin(args.buddyId, args.searchId, args.displayName, args.statusMessage, args.picture, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_registerBuddyAdmin_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("registerBuddyAdmin", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("registerBuddyAdmin", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_reissueContactTicket = function(seqid, input, output) {
  var args = new BuddyManagementService_reissueContactTicket_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.reissueContactTicket.length === 2) {
    Q.fcall(this._handler.reissueContactTicket.bind(this._handler), args.expirationTime, args.maxUseCount)
      .then(function(result) {
        var result_obj = new BuddyManagementService_reissueContactTicket_result({success: result});
        output.writeMessageBegin("reissueContactTicket", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_reissueContactTicket_result(err);
          output.writeMessageBegin("reissueContactTicket", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("reissueContactTicket", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.reissueContactTicket(args.expirationTime, args.maxUseCount, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_reissueContactTicket_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("reissueContactTicket", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("reissueContactTicket", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_removeBuddyMember = function(seqid, input, output) {
  var args = new BuddyManagementService_removeBuddyMember_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.removeBuddyMember.length === 2) {
    Q.fcall(this._handler.removeBuddyMember.bind(this._handler), args.requestId, args.userMid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_removeBuddyMember_result({success: result});
        output.writeMessageBegin("removeBuddyMember", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_removeBuddyMember_result(err);
          output.writeMessageBegin("removeBuddyMember", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("removeBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.removeBuddyMember(args.requestId, args.userMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_removeBuddyMember_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("removeBuddyMember", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("removeBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_removeBuddyMembers = function(seqid, input, output) {
  var args = new BuddyManagementService_removeBuddyMembers_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.removeBuddyMembers.length === 2) {
    Q.fcall(this._handler.removeBuddyMembers.bind(this._handler), args.requestId, args.userMids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_removeBuddyMembers_result({success: result});
        output.writeMessageBegin("removeBuddyMembers", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_removeBuddyMembers_result(err);
          output.writeMessageBegin("removeBuddyMembers", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("removeBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.removeBuddyMembers(args.requestId, args.userMids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_removeBuddyMembers_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("removeBuddyMembers", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("removeBuddyMembers", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyContentMessageToAll = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyContentMessageToAll_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyContentMessageToAll.length === 3) {
    Q.fcall(this._handler.sendBuddyContentMessageToAll.bind(this._handler), args.requestId, args.msg, args.content)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyContentMessageToAll_result({success: result});
        output.writeMessageBegin("sendBuddyContentMessageToAll", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyContentMessageToAll_result(err);
          output.writeMessageBegin("sendBuddyContentMessageToAll", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyContentMessageToAll", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyContentMessageToAll(args.requestId, args.msg, args.content, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyContentMessageToAll_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyContentMessageToAll", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyContentMessageToAll", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyContentMessageToAllAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyContentMessageToAllAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyContentMessageToAllAsync.length === 3) {
    Q.fcall(this._handler.sendBuddyContentMessageToAllAsync.bind(this._handler), args.requestId, args.msg, args.content)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyContentMessageToAllAsync_result({success: result});
        output.writeMessageBegin("sendBuddyContentMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyContentMessageToAllAsync_result(err);
          output.writeMessageBegin("sendBuddyContentMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyContentMessageToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyContentMessageToAllAsync(args.requestId, args.msg, args.content, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyContentMessageToAllAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyContentMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyContentMessageToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyContentMessageToMids = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyContentMessageToMids_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyContentMessageToMids.length === 4) {
    Q.fcall(this._handler.sendBuddyContentMessageToMids.bind(this._handler), args.requestId, args.msg, args.content, args.mids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyContentMessageToMids_result({success: result});
        output.writeMessageBegin("sendBuddyContentMessageToMids", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyContentMessageToMids_result(err);
          output.writeMessageBegin("sendBuddyContentMessageToMids", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyContentMessageToMids", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyContentMessageToMids(args.requestId, args.msg, args.content, args.mids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyContentMessageToMids_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyContentMessageToMids", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyContentMessageToMids", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyContentMessageToMidsAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyContentMessageToMidsAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyContentMessageToMidsAsync.length === 4) {
    Q.fcall(this._handler.sendBuddyContentMessageToMidsAsync.bind(this._handler), args.requestId, args.msg, args.content, args.mids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyContentMessageToMidsAsync_result({success: result});
        output.writeMessageBegin("sendBuddyContentMessageToMidsAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyContentMessageToMidsAsync_result(err);
          output.writeMessageBegin("sendBuddyContentMessageToMidsAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyContentMessageToMidsAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyContentMessageToMidsAsync(args.requestId, args.msg, args.content, args.mids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyContentMessageToMidsAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyContentMessageToMidsAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyContentMessageToMidsAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyMessageToAll = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyMessageToAll_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyMessageToAll.length === 2) {
    Q.fcall(this._handler.sendBuddyMessageToAll.bind(this._handler), args.requestId, args.msg)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyMessageToAll_result({success: result});
        output.writeMessageBegin("sendBuddyMessageToAll", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyMessageToAll_result(err);
          output.writeMessageBegin("sendBuddyMessageToAll", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyMessageToAll", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyMessageToAll(args.requestId, args.msg, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyMessageToAll_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyMessageToAll", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyMessageToAll", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyMessageToAllAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyMessageToAllAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyMessageToAllAsync.length === 2) {
    Q.fcall(this._handler.sendBuddyMessageToAllAsync.bind(this._handler), args.requestId, args.msg)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyMessageToAllAsync_result({success: result});
        output.writeMessageBegin("sendBuddyMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyMessageToAllAsync_result(err);
          output.writeMessageBegin("sendBuddyMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyMessageToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyMessageToAllAsync(args.requestId, args.msg, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyMessageToAllAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyMessageToAllAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyMessageToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyMessageToMids = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyMessageToMids_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyMessageToMids.length === 3) {
    Q.fcall(this._handler.sendBuddyMessageToMids.bind(this._handler), args.requestId, args.msg, args.mids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyMessageToMids_result({success: result});
        output.writeMessageBegin("sendBuddyMessageToMids", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyMessageToMids_result(err);
          output.writeMessageBegin("sendBuddyMessageToMids", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyMessageToMids", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyMessageToMids(args.requestId, args.msg, args.mids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyMessageToMids_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyMessageToMids", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyMessageToMids", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendBuddyMessageToMidsAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_sendBuddyMessageToMidsAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendBuddyMessageToMidsAsync.length === 3) {
    Q.fcall(this._handler.sendBuddyMessageToMidsAsync.bind(this._handler), args.requestId, args.msg, args.mids)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendBuddyMessageToMidsAsync_result({success: result});
        output.writeMessageBegin("sendBuddyMessageToMidsAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendBuddyMessageToMidsAsync_result(err);
          output.writeMessageBegin("sendBuddyMessageToMidsAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendBuddyMessageToMidsAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendBuddyMessageToMidsAsync(args.requestId, args.msg, args.mids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendBuddyMessageToMidsAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendBuddyMessageToMidsAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendBuddyMessageToMidsAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_sendIndividualEventToAllAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_sendIndividualEventToAllAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendIndividualEventToAllAsync.length === 3) {
    Q.fcall(this._handler.sendIndividualEventToAllAsync.bind(this._handler), args.requestId, args.buddyMid, args.notificationStatus)
      .then(function(result) {
        var result_obj = new BuddyManagementService_sendIndividualEventToAllAsync_result({success: result});
        output.writeMessageBegin("sendIndividualEventToAllAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_sendIndividualEventToAllAsync_result(err);
          output.writeMessageBegin("sendIndividualEventToAllAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendIndividualEventToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendIndividualEventToAllAsync(args.requestId, args.buddyMid, args.notificationStatus, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_sendIndividualEventToAllAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendIndividualEventToAllAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendIndividualEventToAllAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_setBuddyOnAir = function(seqid, input, output) {
  var args = new BuddyManagementService_setBuddyOnAir_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.setBuddyOnAir.length === 2) {
    Q.fcall(this._handler.setBuddyOnAir.bind(this._handler), args.requestId, args.onAir)
      .then(function(result) {
        var result_obj = new BuddyManagementService_setBuddyOnAir_result({success: result});
        output.writeMessageBegin("setBuddyOnAir", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_setBuddyOnAir_result(err);
          output.writeMessageBegin("setBuddyOnAir", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("setBuddyOnAir", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.setBuddyOnAir(args.requestId, args.onAir, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_setBuddyOnAir_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("setBuddyOnAir", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setBuddyOnAir", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_setBuddyOnAirAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_setBuddyOnAirAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.setBuddyOnAirAsync.length === 2) {
    Q.fcall(this._handler.setBuddyOnAirAsync.bind(this._handler), args.requestId, args.onAir)
      .then(function(result) {
        var result_obj = new BuddyManagementService_setBuddyOnAirAsync_result({success: result});
        output.writeMessageBegin("setBuddyOnAirAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_setBuddyOnAirAsync_result(err);
          output.writeMessageBegin("setBuddyOnAirAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("setBuddyOnAirAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.setBuddyOnAirAsync(args.requestId, args.onAir, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_setBuddyOnAirAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("setBuddyOnAirAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setBuddyOnAirAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_storeMessage = function(seqid, input, output) {
  var args = new BuddyManagementService_storeMessage_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.storeMessage.length === 2) {
    Q.fcall(this._handler.storeMessage.bind(this._handler), args.requestId, args.messageRequest)
      .then(function(result) {
        var result_obj = new BuddyManagementService_storeMessage_result({success: result});
        output.writeMessageBegin("storeMessage", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_storeMessage_result(err);
          output.writeMessageBegin("storeMessage", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("storeMessage", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.storeMessage(args.requestId, args.messageRequest, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_storeMessage_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("storeMessage", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("storeMessage", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_unblockBuddyMember = function(seqid, input, output) {
  var args = new BuddyManagementService_unblockBuddyMember_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.unblockBuddyMember.length === 2) {
    Q.fcall(this._handler.unblockBuddyMember.bind(this._handler), args.requestId, args.mid)
      .then(function(result) {
        var result_obj = new BuddyManagementService_unblockBuddyMember_result({success: result});
        output.writeMessageBegin("unblockBuddyMember", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_unblockBuddyMember_result(err);
          output.writeMessageBegin("unblockBuddyMember", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("unblockBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.unblockBuddyMember(args.requestId, args.mid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_unblockBuddyMember_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("unblockBuddyMember", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("unblockBuddyMember", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_unregisterBuddy = function(seqid, input, output) {
  var args = new BuddyManagementService_unregisterBuddy_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.unregisterBuddy.length === 1) {
    Q.fcall(this._handler.unregisterBuddy.bind(this._handler), args.requestId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_unregisterBuddy_result({success: result});
        output.writeMessageBegin("unregisterBuddy", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_unregisterBuddy_result(err);
          output.writeMessageBegin("unregisterBuddy", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("unregisterBuddy", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.unregisterBuddy(args.requestId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_unregisterBuddy_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("unregisterBuddy", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("unregisterBuddy", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_unregisterBuddyAdmin = function(seqid, input, output) {
  var args = new BuddyManagementService_unregisterBuddyAdmin_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.unregisterBuddyAdmin.length === 1) {
    Q.fcall(this._handler.unregisterBuddyAdmin.bind(this._handler), args.requestId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_unregisterBuddyAdmin_result({success: result});
        output.writeMessageBegin("unregisterBuddyAdmin", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_unregisterBuddyAdmin_result(err);
          output.writeMessageBegin("unregisterBuddyAdmin", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("unregisterBuddyAdmin", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.unregisterBuddyAdmin(args.requestId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_unregisterBuddyAdmin_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("unregisterBuddyAdmin", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("unregisterBuddyAdmin", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddyAdminProfileAttribute = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddyAdminProfileAttribute_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddyAdminProfileAttribute.length === 2) {
    Q.fcall(this._handler.updateBuddyAdminProfileAttribute.bind(this._handler), args.requestId, args.attributes)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddyAdminProfileAttribute_result({success: result});
        output.writeMessageBegin("updateBuddyAdminProfileAttribute", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddyAdminProfileAttribute_result(err);
          output.writeMessageBegin("updateBuddyAdminProfileAttribute", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddyAdminProfileAttribute", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddyAdminProfileAttribute(args.requestId, args.attributes, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddyAdminProfileAttribute_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddyAdminProfileAttribute", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddyAdminProfileAttribute", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddyAdminProfileImage = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddyAdminProfileImage_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddyAdminProfileImage.length === 2) {
    Q.fcall(this._handler.updateBuddyAdminProfileImage.bind(this._handler), args.requestId, args.picture)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddyAdminProfileImage_result({success: result});
        output.writeMessageBegin("updateBuddyAdminProfileImage", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddyAdminProfileImage_result(err);
          output.writeMessageBegin("updateBuddyAdminProfileImage", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddyAdminProfileImage", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddyAdminProfileImage(args.requestId, args.picture, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddyAdminProfileImage_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddyAdminProfileImage", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddyAdminProfileImage", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddyProfileAttributes = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddyProfileAttributes_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddyProfileAttributes.length === 2) {
    Q.fcall(this._handler.updateBuddyProfileAttributes.bind(this._handler), args.requestId, args.attributes)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddyProfileAttributes_result({success: result});
        output.writeMessageBegin("updateBuddyProfileAttributes", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddyProfileAttributes_result(err);
          output.writeMessageBegin("updateBuddyProfileAttributes", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddyProfileAttributes", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddyProfileAttributes(args.requestId, args.attributes, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddyProfileAttributes_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddyProfileAttributes", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddyProfileAttributes", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddyProfileAttributesAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddyProfileAttributesAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddyProfileAttributesAsync.length === 2) {
    Q.fcall(this._handler.updateBuddyProfileAttributesAsync.bind(this._handler), args.requestId, args.attributes)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddyProfileAttributesAsync_result({success: result});
        output.writeMessageBegin("updateBuddyProfileAttributesAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddyProfileAttributesAsync_result(err);
          output.writeMessageBegin("updateBuddyProfileAttributesAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddyProfileAttributesAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddyProfileAttributesAsync(args.requestId, args.attributes, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddyProfileAttributesAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddyProfileAttributesAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddyProfileAttributesAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddyProfileImage = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddyProfileImage_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddyProfileImage.length === 2) {
    Q.fcall(this._handler.updateBuddyProfileImage.bind(this._handler), args.requestId, args.image)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddyProfileImage_result({success: result});
        output.writeMessageBegin("updateBuddyProfileImage", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddyProfileImage_result(err);
          output.writeMessageBegin("updateBuddyProfileImage", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddyProfileImage", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddyProfileImage(args.requestId, args.image, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddyProfileImage_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddyProfileImage", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddyProfileImage", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddyProfileImageAsync = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddyProfileImageAsync_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddyProfileImageAsync.length === 2) {
    Q.fcall(this._handler.updateBuddyProfileImageAsync.bind(this._handler), args.requestId, args.image)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddyProfileImageAsync_result({success: result});
        output.writeMessageBegin("updateBuddyProfileImageAsync", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddyProfileImageAsync_result(err);
          output.writeMessageBegin("updateBuddyProfileImageAsync", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddyProfileImageAsync", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddyProfileImageAsync(args.requestId, args.image, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddyProfileImageAsync_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddyProfileImageAsync", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddyProfileImageAsync", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddySearchId = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddySearchId_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddySearchId.length === 2) {
    Q.fcall(this._handler.updateBuddySearchId.bind(this._handler), args.requestId, args.searchId)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddySearchId_result({success: result});
        output.writeMessageBegin("updateBuddySearchId", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddySearchId_result(err);
          output.writeMessageBegin("updateBuddySearchId", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddySearchId", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddySearchId(args.requestId, args.searchId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddySearchId_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddySearchId", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddySearchId", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_updateBuddySettings = function(seqid, input, output) {
  var args = new BuddyManagementService_updateBuddySettings_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBuddySettings.length === 1) {
    Q.fcall(this._handler.updateBuddySettings.bind(this._handler), args.settings)
      .then(function(result) {
        var result_obj = new BuddyManagementService_updateBuddySettings_result({success: result});
        output.writeMessageBegin("updateBuddySettings", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_updateBuddySettings_result(err);
          output.writeMessageBegin("updateBuddySettings", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateBuddySettings", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBuddySettings(args.settings, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_updateBuddySettings_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateBuddySettings", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateBuddySettings", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyManagementServiceProcessor.prototype.process_uploadBuddyContent = function(seqid, input, output) {
  var args = new BuddyManagementService_uploadBuddyContent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.uploadBuddyContent.length === 2) {
    Q.fcall(this._handler.uploadBuddyContent.bind(this._handler), args.contentType, args.content)
      .then(function(result) {
        var result_obj = new BuddyManagementService_uploadBuddyContent_result({success: result});
        output.writeMessageBegin("uploadBuddyContent", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyManagementService_uploadBuddyContent_result(err);
          output.writeMessageBegin("uploadBuddyContent", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("uploadBuddyContent", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.uploadBuddyContent(args.contentType, args.content, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyManagementService_uploadBuddyContent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("uploadBuddyContent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("uploadBuddyContent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
