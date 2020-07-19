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

var ChannelApplicationProvidedService_activeBuddySubscriberCount_args = function(args) {
};
ChannelApplicationProvidedService_activeBuddySubscriberCount_args.prototype = {};
ChannelApplicationProvidedService_activeBuddySubscriberCount_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_activeBuddySubscriberCount_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_activeBuddySubscriberCount_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_activeBuddySubscriberCount_result = function(args) {
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
ChannelApplicationProvidedService_activeBuddySubscriberCount_result.prototype = {};
ChannelApplicationProvidedService_activeBuddySubscriberCount_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_activeBuddySubscriberCount_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_activeBuddySubscriberCount_result');
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

var ChannelApplicationProvidedService_addOperationForChannel_args = function(args) {
  this.opType = null;
  this.param1 = null;
  this.param2 = null;
  this.param3 = null;
  if (args) {
    if (args.opType !== undefined && args.opType !== null) {
      this.opType = args.opType;
    }
    if (args.param1 !== undefined && args.param1 !== null) {
      this.param1 = args.param1;
    }
    if (args.param2 !== undefined && args.param2 !== null) {
      this.param2 = args.param2;
    }
    if (args.param3 !== undefined && args.param3 !== null) {
      this.param3 = args.param3;
    }
  }
};
ChannelApplicationProvidedService_addOperationForChannel_args.prototype = {};
ChannelApplicationProvidedService_addOperationForChannel_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.opType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.param1 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.param2 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.param3 = input.readString();
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

ChannelApplicationProvidedService_addOperationForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_addOperationForChannel_args');
  if (this.opType !== null && this.opType !== undefined) {
    output.writeFieldBegin('opType', Thrift.Type.I32, 1);
    output.writeI32(this.opType);
    output.writeFieldEnd();
  }
  if (this.param1 !== null && this.param1 !== undefined) {
    output.writeFieldBegin('param1', Thrift.Type.STRING, 2);
    output.writeString(this.param1);
    output.writeFieldEnd();
  }
  if (this.param2 !== null && this.param2 !== undefined) {
    output.writeFieldBegin('param2', Thrift.Type.STRING, 3);
    output.writeString(this.param2);
    output.writeFieldEnd();
  }
  if (this.param3 !== null && this.param3 !== undefined) {
    output.writeFieldBegin('param3', Thrift.Type.STRING, 4);
    output.writeString(this.param3);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_addOperationForChannel_result = function(args) {
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
ChannelApplicationProvidedService_addOperationForChannel_result.prototype = {};
ChannelApplicationProvidedService_addOperationForChannel_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_addOperationForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_addOperationForChannel_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_displayBuddySubscriberCount_args = function(args) {
};
ChannelApplicationProvidedService_displayBuddySubscriberCount_args.prototype = {};
ChannelApplicationProvidedService_displayBuddySubscriberCount_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_displayBuddySubscriberCount_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_displayBuddySubscriberCount_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_displayBuddySubscriberCount_result = function(args) {
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
ChannelApplicationProvidedService_displayBuddySubscriberCount_result.prototype = {};
ChannelApplicationProvidedService_displayBuddySubscriberCount_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_displayBuddySubscriberCount_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_displayBuddySubscriberCount_result');
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

var ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_args = function(args) {
  this.userid = null;
  if (args) {
    if (args.userid !== undefined && args.userid !== null) {
      this.userid = args.userid;
    }
  }
};
ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_args.prototype = {};
ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_args.prototype.read = function(input) {
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
        this.userid = input.readString();
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

ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_args');
  if (this.userid !== null && this.userid !== undefined) {
    output.writeFieldBegin('userid', Thrift.Type.STRING, 2);
    output.writeString(this.userid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Contact(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result.prototype = {};
ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result.prototype.read = function(input) {
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
        this.success = new ttypes.Contact();
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

ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result');
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

var ChannelApplicationProvidedService_getAllContactIdsForChannel_args = function(args) {
};
ChannelApplicationProvidedService_getAllContactIdsForChannel_args.prototype = {};
ChannelApplicationProvidedService_getAllContactIdsForChannel_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getAllContactIdsForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getAllContactIdsForChannel_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getAllContactIdsForChannel_result = function(args) {
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
ChannelApplicationProvidedService_getAllContactIdsForChannel_result.prototype = {};
ChannelApplicationProvidedService_getAllContactIdsForChannel_result.prototype.read = function(input) {
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
        var _size606 = 0;
        var _rtmp3610;
        this.success = [];
        var _etype609 = 0;
        _rtmp3610 = input.readListBegin();
        _etype609 = _rtmp3610.etype;
        _size606 = _rtmp3610.size;
        for (var _i611 = 0; _i611 < _size606; ++_i611)
        {
          var elem612 = null;
          elem612 = input.readString();
          this.success.push(elem612);
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

ChannelApplicationProvidedService_getAllContactIdsForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getAllContactIdsForChannel_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter613 in this.success)
    {
      if (this.success.hasOwnProperty(iter613))
      {
        iter613 = this.success[iter613];
        output.writeString(iter613);
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

var ChannelApplicationProvidedService_getCompactContacts_args = function(args) {
  this.lastModifiedTimestamp = null;
  if (args) {
    if (args.lastModifiedTimestamp !== undefined && args.lastModifiedTimestamp !== null) {
      this.lastModifiedTimestamp = args.lastModifiedTimestamp;
    }
  }
};
ChannelApplicationProvidedService_getCompactContacts_args.prototype = {};
ChannelApplicationProvidedService_getCompactContacts_args.prototype.read = function(input) {
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
        this.lastModifiedTimestamp = input.readI64();
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

ChannelApplicationProvidedService_getCompactContacts_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getCompactContacts_args');
  if (this.lastModifiedTimestamp !== null && this.lastModifiedTimestamp !== undefined) {
    output.writeFieldBegin('lastModifiedTimestamp', Thrift.Type.I64, 2);
    output.writeI64(this.lastModifiedTimestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getCompactContacts_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.CompactContact]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getCompactContacts_result.prototype = {};
ChannelApplicationProvidedService_getCompactContacts_result.prototype.read = function(input) {
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
        var _size614 = 0;
        var _rtmp3618;
        this.success = [];
        var _etype617 = 0;
        _rtmp3618 = input.readListBegin();
        _etype617 = _rtmp3618.etype;
        _size614 = _rtmp3618.size;
        for (var _i619 = 0; _i619 < _size614; ++_i619)
        {
          var elem620 = null;
          elem620 = new ttypes.CompactContact();
          elem620.read(input);
          this.success.push(elem620);
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

ChannelApplicationProvidedService_getCompactContacts_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getCompactContacts_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter621 in this.success)
    {
      if (this.success.hasOwnProperty(iter621))
      {
        iter621 = this.success[iter621];
        iter621.write(output);
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

var ChannelApplicationProvidedService_getContactsForChannel_args = function(args) {
  this.ids = null;
  if (args) {
    if (args.ids !== undefined && args.ids !== null) {
      this.ids = Thrift.copyList(args.ids, [null]);
    }
  }
};
ChannelApplicationProvidedService_getContactsForChannel_args.prototype = {};
ChannelApplicationProvidedService_getContactsForChannel_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size622 = 0;
        var _rtmp3626;
        this.ids = [];
        var _etype625 = 0;
        _rtmp3626 = input.readListBegin();
        _etype625 = _rtmp3626.etype;
        _size622 = _rtmp3626.size;
        for (var _i627 = 0; _i627 < _size622; ++_i627)
        {
          var elem628 = null;
          elem628 = input.readString();
          this.ids.push(elem628);
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

ChannelApplicationProvidedService_getContactsForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getContactsForChannel_args');
  if (this.ids !== null && this.ids !== undefined) {
    output.writeFieldBegin('ids', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.ids.length);
    for (var iter629 in this.ids)
    {
      if (this.ids.hasOwnProperty(iter629))
      {
        iter629 = this.ids[iter629];
        output.writeString(iter629);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getContactsForChannel_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.Contact]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getContactsForChannel_result.prototype = {};
ChannelApplicationProvidedService_getContactsForChannel_result.prototype.read = function(input) {
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
        var _size630 = 0;
        var _rtmp3634;
        this.success = [];
        var _etype633 = 0;
        _rtmp3634 = input.readListBegin();
        _etype633 = _rtmp3634.etype;
        _size630 = _rtmp3634.size;
        for (var _i635 = 0; _i635 < _size630; ++_i635)
        {
          var elem636 = null;
          elem636 = new ttypes.Contact();
          elem636.read(input);
          this.success.push(elem636);
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

ChannelApplicationProvidedService_getContactsForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getContactsForChannel_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter637 in this.success)
    {
      if (this.success.hasOwnProperty(iter637))
      {
        iter637 = this.success[iter637];
        iter637.write(output);
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

var ChannelApplicationProvidedService_getDisplayName_args = function(args) {
  this.mid = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
  }
};
ChannelApplicationProvidedService_getDisplayName_args.prototype = {};
ChannelApplicationProvidedService_getDisplayName_args.prototype.read = function(input) {
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
        this.mid = input.readString();
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

ChannelApplicationProvidedService_getDisplayName_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getDisplayName_args');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 2);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getDisplayName_result = function(args) {
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
ChannelApplicationProvidedService_getDisplayName_result.prototype = {};
ChannelApplicationProvidedService_getDisplayName_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getDisplayName_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getDisplayName_result');
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

var ChannelApplicationProvidedService_getFavoriteMidsForChannel_args = function(args) {
};
ChannelApplicationProvidedService_getFavoriteMidsForChannel_args.prototype = {};
ChannelApplicationProvidedService_getFavoriteMidsForChannel_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getFavoriteMidsForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getFavoriteMidsForChannel_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getFavoriteMidsForChannel_result = function(args) {
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
ChannelApplicationProvidedService_getFavoriteMidsForChannel_result.prototype = {};
ChannelApplicationProvidedService_getFavoriteMidsForChannel_result.prototype.read = function(input) {
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
        var _size638 = 0;
        var _rtmp3642;
        this.success = [];
        var _etype641 = 0;
        _rtmp3642 = input.readListBegin();
        _etype641 = _rtmp3642.etype;
        _size638 = _rtmp3642.size;
        for (var _i643 = 0; _i643 < _size638; ++_i643)
        {
          var elem644 = null;
          elem644 = input.readString();
          this.success.push(elem644);
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

ChannelApplicationProvidedService_getFavoriteMidsForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getFavoriteMidsForChannel_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter645 in this.success)
    {
      if (this.success.hasOwnProperty(iter645))
      {
        iter645 = this.success[iter645];
        output.writeString(iter645);
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

var ChannelApplicationProvidedService_getFriendMids_args = function(args) {
};
ChannelApplicationProvidedService_getFriendMids_args.prototype = {};
ChannelApplicationProvidedService_getFriendMids_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getFriendMids_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getFriendMids_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getFriendMids_result = function(args) {
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
ChannelApplicationProvidedService_getFriendMids_result.prototype = {};
ChannelApplicationProvidedService_getFriendMids_result.prototype.read = function(input) {
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
        var _size646 = 0;
        var _rtmp3650;
        this.success = [];
        var _etype649 = 0;
        _rtmp3650 = input.readListBegin();
        _etype649 = _rtmp3650.etype;
        _size646 = _rtmp3650.size;
        for (var _i651 = 0; _i651 < _size646; ++_i651)
        {
          var elem652 = null;
          elem652 = input.readString();
          this.success.push(elem652);
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

ChannelApplicationProvidedService_getFriendMids_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getFriendMids_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter653 in this.success)
    {
      if (this.success.hasOwnProperty(iter653))
      {
        iter653 = this.success[iter653];
        output.writeString(iter653);
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

var ChannelApplicationProvidedService_getGroupMemberMids_args = function(args) {
  this.groupId = null;
  if (args) {
    if (args.groupId !== undefined && args.groupId !== null) {
      this.groupId = args.groupId;
    }
  }
};
ChannelApplicationProvidedService_getGroupMemberMids_args.prototype = {};
ChannelApplicationProvidedService_getGroupMemberMids_args.prototype.read = function(input) {
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
        this.groupId = input.readString();
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

ChannelApplicationProvidedService_getGroupMemberMids_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getGroupMemberMids_args');
  if (this.groupId !== null && this.groupId !== undefined) {
    output.writeFieldBegin('groupId', Thrift.Type.STRING, 1);
    output.writeString(this.groupId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getGroupMemberMids_result = function(args) {
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
ChannelApplicationProvidedService_getGroupMemberMids_result.prototype = {};
ChannelApplicationProvidedService_getGroupMemberMids_result.prototype.read = function(input) {
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
        var _size654 = 0;
        var _rtmp3658;
        this.success = [];
        var _etype657 = 0;
        _rtmp3658 = input.readListBegin();
        _etype657 = _rtmp3658.etype;
        _size654 = _rtmp3658.size;
        for (var _i659 = 0; _i659 < _size654; ++_i659)
        {
          var elem660 = null;
          elem660 = input.readString();
          this.success.push(elem660);
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

ChannelApplicationProvidedService_getGroupMemberMids_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getGroupMemberMids_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter661 in this.success)
    {
      if (this.success.hasOwnProperty(iter661))
      {
        iter661 = this.success[iter661];
        output.writeString(iter661);
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

var ChannelApplicationProvidedService_getGroupsForChannel_args = function(args) {
  this.groupIds = null;
  if (args) {
    if (args.groupIds !== undefined && args.groupIds !== null) {
      this.groupIds = Thrift.copyList(args.groupIds, [null]);
    }
  }
};
ChannelApplicationProvidedService_getGroupsForChannel_args.prototype = {};
ChannelApplicationProvidedService_getGroupsForChannel_args.prototype.read = function(input) {
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
        var _size662 = 0;
        var _rtmp3666;
        this.groupIds = [];
        var _etype665 = 0;
        _rtmp3666 = input.readListBegin();
        _etype665 = _rtmp3666.etype;
        _size662 = _rtmp3666.size;
        for (var _i667 = 0; _i667 < _size662; ++_i667)
        {
          var elem668 = null;
          elem668 = input.readString();
          this.groupIds.push(elem668);
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

ChannelApplicationProvidedService_getGroupsForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getGroupsForChannel_args');
  if (this.groupIds !== null && this.groupIds !== undefined) {
    output.writeFieldBegin('groupIds', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.groupIds.length);
    for (var iter669 in this.groupIds)
    {
      if (this.groupIds.hasOwnProperty(iter669))
      {
        iter669 = this.groupIds[iter669];
        output.writeString(iter669);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getGroupsForChannel_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.Group]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getGroupsForChannel_result.prototype = {};
ChannelApplicationProvidedService_getGroupsForChannel_result.prototype.read = function(input) {
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
        var _size670 = 0;
        var _rtmp3674;
        this.success = [];
        var _etype673 = 0;
        _rtmp3674 = input.readListBegin();
        _etype673 = _rtmp3674.etype;
        _size670 = _rtmp3674.size;
        for (var _i675 = 0; _i675 < _size670; ++_i675)
        {
          var elem676 = null;
          elem676 = new ttypes.Group();
          elem676.read(input);
          this.success.push(elem676);
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

ChannelApplicationProvidedService_getGroupsForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getGroupsForChannel_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter677 in this.success)
    {
      if (this.success.hasOwnProperty(iter677))
      {
        iter677 = this.success[iter677];
        iter677.write(output);
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

var ChannelApplicationProvidedService_getIdentityCredential_args = function(args) {
};
ChannelApplicationProvidedService_getIdentityCredential_args.prototype = {};
ChannelApplicationProvidedService_getIdentityCredential_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getIdentityCredential_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getIdentityCredential_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getIdentityCredential_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.IdentityCredential(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getIdentityCredential_result.prototype = {};
ChannelApplicationProvidedService_getIdentityCredential_result.prototype.read = function(input) {
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
        this.success = new ttypes.IdentityCredential();
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

ChannelApplicationProvidedService_getIdentityCredential_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getIdentityCredential_result');
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

var ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_args = function(args) {
};
ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_args.prototype = {};
ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result = function(args) {
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
ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result.prototype = {};
ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result.prototype.read = function(input) {
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
        var _size678 = 0;
        var _rtmp3682;
        this.success = [];
        var _etype681 = 0;
        _rtmp3682 = input.readListBegin();
        _etype681 = _rtmp3682.etype;
        _size678 = _rtmp3682.size;
        for (var _i683 = 0; _i683 < _size678; ++_i683)
        {
          var elem684 = null;
          elem684 = input.readString();
          this.success.push(elem684);
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

ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter685 in this.success)
    {
      if (this.success.hasOwnProperty(iter685))
      {
        iter685 = this.success[iter685];
        output.writeString(iter685);
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

var ChannelApplicationProvidedService_getMetaProfile_args = function(args) {
};
ChannelApplicationProvidedService_getMetaProfile_args.prototype = {};
ChannelApplicationProvidedService_getMetaProfile_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getMetaProfile_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getMetaProfile_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getMetaProfile_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.MetaProfile(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getMetaProfile_result.prototype = {};
ChannelApplicationProvidedService_getMetaProfile_result.prototype.read = function(input) {
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
        this.success = new ttypes.MetaProfile();
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

ChannelApplicationProvidedService_getMetaProfile_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getMetaProfile_result');
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

var ChannelApplicationProvidedService_getMid_args = function(args) {
};
ChannelApplicationProvidedService_getMid_args.prototype = {};
ChannelApplicationProvidedService_getMid_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getMid_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getMid_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getMid_result = function(args) {
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
ChannelApplicationProvidedService_getMid_result.prototype = {};
ChannelApplicationProvidedService_getMid_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getMid_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getMid_result');
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

var ChannelApplicationProvidedService_getPrimaryClientForChannel_args = function(args) {
};
ChannelApplicationProvidedService_getPrimaryClientForChannel_args.prototype = {};
ChannelApplicationProvidedService_getPrimaryClientForChannel_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getPrimaryClientForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getPrimaryClientForChannel_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getPrimaryClientForChannel_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SimpleChannelClient(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getPrimaryClientForChannel_result.prototype = {};
ChannelApplicationProvidedService_getPrimaryClientForChannel_result.prototype.read = function(input) {
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
        this.success = new ttypes.SimpleChannelClient();
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

ChannelApplicationProvidedService_getPrimaryClientForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getPrimaryClientForChannel_result');
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

var ChannelApplicationProvidedService_getProfileForChannel_args = function(args) {
};
ChannelApplicationProvidedService_getProfileForChannel_args.prototype = {};
ChannelApplicationProvidedService_getProfileForChannel_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getProfileForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getProfileForChannel_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getProfileForChannel_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Profile(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getProfileForChannel_result.prototype = {};
ChannelApplicationProvidedService_getProfileForChannel_result.prototype.read = function(input) {
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
        this.success = new ttypes.Profile();
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

ChannelApplicationProvidedService_getProfileForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getProfileForChannel_result');
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

var ChannelApplicationProvidedService_getSimpleChannelContacts_args = function(args) {
  this.ids = null;
  if (args) {
    if (args.ids !== undefined && args.ids !== null) {
      this.ids = Thrift.copyList(args.ids, [null]);
    }
  }
};
ChannelApplicationProvidedService_getSimpleChannelContacts_args.prototype = {};
ChannelApplicationProvidedService_getSimpleChannelContacts_args.prototype.read = function(input) {
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
        var _size686 = 0;
        var _rtmp3690;
        this.ids = [];
        var _etype689 = 0;
        _rtmp3690 = input.readListBegin();
        _etype689 = _rtmp3690.etype;
        _size686 = _rtmp3690.size;
        for (var _i691 = 0; _i691 < _size686; ++_i691)
        {
          var elem692 = null;
          elem692 = input.readString();
          this.ids.push(elem692);
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

ChannelApplicationProvidedService_getSimpleChannelContacts_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getSimpleChannelContacts_args');
  if (this.ids !== null && this.ids !== undefined) {
    output.writeFieldBegin('ids', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.ids.length);
    for (var iter693 in this.ids)
    {
      if (this.ids.hasOwnProperty(iter693))
      {
        iter693 = this.ids[iter693];
        output.writeString(iter693);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getSimpleChannelContacts_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.SimpleChannelContact]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getSimpleChannelContacts_result.prototype = {};
ChannelApplicationProvidedService_getSimpleChannelContacts_result.prototype.read = function(input) {
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
        var _size694 = 0;
        var _rtmp3698;
        this.success = [];
        var _etype697 = 0;
        _rtmp3698 = input.readListBegin();
        _etype697 = _rtmp3698.etype;
        _size694 = _rtmp3698.size;
        for (var _i699 = 0; _i699 < _size694; ++_i699)
        {
          var elem700 = null;
          elem700 = new ttypes.SimpleChannelContact();
          elem700.read(input);
          this.success.push(elem700);
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

ChannelApplicationProvidedService_getSimpleChannelContacts_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getSimpleChannelContacts_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter701 in this.success)
    {
      if (this.success.hasOwnProperty(iter701))
      {
        iter701 = this.success[iter701];
        iter701.write(output);
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

var ChannelApplicationProvidedService_getUserCountryForBilling_args = function(args) {
  this.country = null;
  this.remoteIp = null;
  if (args) {
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.remoteIp !== undefined && args.remoteIp !== null) {
      this.remoteIp = args.remoteIp;
    }
  }
};
ChannelApplicationProvidedService_getUserCountryForBilling_args.prototype = {};
ChannelApplicationProvidedService_getUserCountryForBilling_args.prototype.read = function(input) {
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
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.remoteIp = input.readString();
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

ChannelApplicationProvidedService_getUserCountryForBilling_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserCountryForBilling_args');
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 2);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.remoteIp !== null && this.remoteIp !== undefined) {
    output.writeFieldBegin('remoteIp', Thrift.Type.STRING, 3);
    output.writeString(this.remoteIp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getUserCountryForBilling_result = function(args) {
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
ChannelApplicationProvidedService_getUserCountryForBilling_result.prototype = {};
ChannelApplicationProvidedService_getUserCountryForBilling_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getUserCountryForBilling_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserCountryForBilling_result');
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

var ChannelApplicationProvidedService_getUserCreateTime_args = function(args) {
};
ChannelApplicationProvidedService_getUserCreateTime_args.prototype = {};
ChannelApplicationProvidedService_getUserCreateTime_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getUserCreateTime_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserCreateTime_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getUserCreateTime_result = function(args) {
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
ChannelApplicationProvidedService_getUserCreateTime_result.prototype = {};
ChannelApplicationProvidedService_getUserCreateTime_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getUserCreateTime_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserCreateTime_result');
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

var ChannelApplicationProvidedService_getUserIdentities_args = function(args) {
};
ChannelApplicationProvidedService_getUserIdentities_args.prototype = {};
ChannelApplicationProvidedService_getUserIdentities_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getUserIdentities_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserIdentities_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getUserIdentities_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyMap(args.success, [null]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_getUserIdentities_result.prototype = {};
ChannelApplicationProvidedService_getUserIdentities_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.MAP) {
        var _size702 = 0;
        var _rtmp3706;
        this.success = {};
        var _ktype703 = 0;
        var _vtype704 = 0;
        _rtmp3706 = input.readMapBegin();
        _ktype703 = _rtmp3706.ktype;
        _vtype704 = _rtmp3706.vtype;
        _size702 = _rtmp3706.size;
        for (var _i707 = 0; _i707 < _size702; ++_i707)
        {
          var key708 = null;
          var val709 = null;
          key708 = input.readI32();
          val709 = input.readString();
          this.success[key708] = val709;
        }
        input.readMapEnd();
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

ChannelApplicationProvidedService_getUserIdentities_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserIdentities_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.MAP, 0);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.STRING, Thrift.objectLength(this.success));
    for (var kiter710 in this.success)
    {
      if (this.success.hasOwnProperty(kiter710))
      {
        var viter711 = this.success[kiter710];
        output.writeI32(kiter710);
        output.writeString(viter711);
      }
    }
    output.writeMapEnd();
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

var ChannelApplicationProvidedService_getUserLanguage_args = function(args) {
};
ChannelApplicationProvidedService_getUserLanguage_args.prototype = {};
ChannelApplicationProvidedService_getUserLanguage_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getUserLanguage_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserLanguage_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getUserLanguage_result = function(args) {
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
ChannelApplicationProvidedService_getUserLanguage_result.prototype = {};
ChannelApplicationProvidedService_getUserLanguage_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getUserLanguage_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserLanguage_result');
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

var ChannelApplicationProvidedService_getUserMidsWhoAddedMe_args = function(args) {
};
ChannelApplicationProvidedService_getUserMidsWhoAddedMe_args.prototype = {};
ChannelApplicationProvidedService_getUserMidsWhoAddedMe_args.prototype.read = function(input) {
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

ChannelApplicationProvidedService_getUserMidsWhoAddedMe_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserMidsWhoAddedMe_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result = function(args) {
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
ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result.prototype = {};
ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result.prototype.read = function(input) {
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
        var _size712 = 0;
        var _rtmp3716;
        this.success = [];
        var _etype715 = 0;
        _rtmp3716 = input.readListBegin();
        _etype715 = _rtmp3716.etype;
        _size712 = _rtmp3716.size;
        for (var _i717 = 0; _i717 < _size712; ++_i717)
        {
          var elem718 = null;
          elem718 = input.readString();
          this.success.push(elem718);
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

ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter719 in this.success)
    {
      if (this.success.hasOwnProperty(iter719))
      {
        iter719 = this.success[iter719];
        output.writeString(iter719);
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

var ChannelApplicationProvidedService_isGroupMember_args = function(args) {
  this.groupId = null;
  if (args) {
    if (args.groupId !== undefined && args.groupId !== null) {
      this.groupId = args.groupId;
    }
  }
};
ChannelApplicationProvidedService_isGroupMember_args.prototype = {};
ChannelApplicationProvidedService_isGroupMember_args.prototype.read = function(input) {
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
        this.groupId = input.readString();
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

ChannelApplicationProvidedService_isGroupMember_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_isGroupMember_args');
  if (this.groupId !== null && this.groupId !== undefined) {
    output.writeFieldBegin('groupId', Thrift.Type.STRING, 1);
    output.writeString(this.groupId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_isGroupMember_result = function(args) {
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
ChannelApplicationProvidedService_isGroupMember_result.prototype = {};
ChannelApplicationProvidedService_isGroupMember_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_isGroupMember_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_isGroupMember_result');
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

var ChannelApplicationProvidedService_isInContact_args = function(args) {
  this.mid = null;
  if (args) {
    if (args.mid !== undefined && args.mid !== null) {
      this.mid = args.mid;
    }
  }
};
ChannelApplicationProvidedService_isInContact_args.prototype = {};
ChannelApplicationProvidedService_isInContact_args.prototype.read = function(input) {
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
        this.mid = input.readString();
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

ChannelApplicationProvidedService_isInContact_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_isInContact_args');
  if (this.mid !== null && this.mid !== undefined) {
    output.writeFieldBegin('mid', Thrift.Type.STRING, 2);
    output.writeString(this.mid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_isInContact_result = function(args) {
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
ChannelApplicationProvidedService_isInContact_result.prototype = {};
ChannelApplicationProvidedService_isInContact_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_isInContact_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_isInContact_result');
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

var ChannelApplicationProvidedService_registerChannelCP_args = function(args) {
  this.cpId = null;
  this.registerPassword = null;
  if (args) {
    if (args.cpId !== undefined && args.cpId !== null) {
      this.cpId = args.cpId;
    }
    if (args.registerPassword !== undefined && args.registerPassword !== null) {
      this.registerPassword = args.registerPassword;
    }
  }
};
ChannelApplicationProvidedService_registerChannelCP_args.prototype = {};
ChannelApplicationProvidedService_registerChannelCP_args.prototype.read = function(input) {
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
        this.cpId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.registerPassword = input.readString();
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

ChannelApplicationProvidedService_registerChannelCP_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_registerChannelCP_args');
  if (this.cpId !== null && this.cpId !== undefined) {
    output.writeFieldBegin('cpId', Thrift.Type.STRING, 2);
    output.writeString(this.cpId);
    output.writeFieldEnd();
  }
  if (this.registerPassword !== null && this.registerPassword !== undefined) {
    output.writeFieldBegin('registerPassword', Thrift.Type.STRING, 3);
    output.writeString(this.registerPassword);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_registerChannelCP_result = function(args) {
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
ChannelApplicationProvidedService_registerChannelCP_result.prototype = {};
ChannelApplicationProvidedService_registerChannelCP_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_registerChannelCP_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_registerChannelCP_result');
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

var ChannelApplicationProvidedService_removeNotificationStatus_args = function(args) {
  this.notificationStatus = null;
  if (args) {
    if (args.notificationStatus !== undefined && args.notificationStatus !== null) {
      this.notificationStatus = args.notificationStatus;
    }
  }
};
ChannelApplicationProvidedService_removeNotificationStatus_args.prototype = {};
ChannelApplicationProvidedService_removeNotificationStatus_args.prototype.read = function(input) {
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
        this.notificationStatus = input.readI32();
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

ChannelApplicationProvidedService_removeNotificationStatus_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_removeNotificationStatus_args');
  if (this.notificationStatus !== null && this.notificationStatus !== undefined) {
    output.writeFieldBegin('notificationStatus', Thrift.Type.I32, 2);
    output.writeI32(this.notificationStatus);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_removeNotificationStatus_result = function(args) {
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
ChannelApplicationProvidedService_removeNotificationStatus_result.prototype = {};
ChannelApplicationProvidedService_removeNotificationStatus_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_removeNotificationStatus_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_removeNotificationStatus_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_sendMessageForChannel_args = function(args) {
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = new ttypes.Message(args.message);
    }
  }
};
ChannelApplicationProvidedService_sendMessageForChannel_args.prototype = {};
ChannelApplicationProvidedService_sendMessageForChannel_args.prototype.read = function(input) {
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
        this.message = new ttypes.Message();
        this.message.read(input);
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

ChannelApplicationProvidedService_sendMessageForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_sendMessageForChannel_args');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRUCT, 2);
    this.message.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_sendMessageForChannel_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Message(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ChannelApplicationProvidedService_sendMessageForChannel_result.prototype = {};
ChannelApplicationProvidedService_sendMessageForChannel_result.prototype.read = function(input) {
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
        this.success = new ttypes.Message();
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

ChannelApplicationProvidedService_sendMessageForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_sendMessageForChannel_result');
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

var ChannelApplicationProvidedService_sendPinCodeOperation_args = function(args) {
  this.verifier = null;
  if (args) {
    if (args.verifier !== undefined && args.verifier !== null) {
      this.verifier = args.verifier;
    }
  }
};
ChannelApplicationProvidedService_sendPinCodeOperation_args.prototype = {};
ChannelApplicationProvidedService_sendPinCodeOperation_args.prototype.read = function(input) {
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
        this.verifier = input.readString();
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

ChannelApplicationProvidedService_sendPinCodeOperation_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_sendPinCodeOperation_args');
  if (this.verifier !== null && this.verifier !== undefined) {
    output.writeFieldBegin('verifier', Thrift.Type.STRING, 1);
    output.writeString(this.verifier);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_sendPinCodeOperation_result = function(args) {
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
ChannelApplicationProvidedService_sendPinCodeOperation_result.prototype = {};
ChannelApplicationProvidedService_sendPinCodeOperation_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_sendPinCodeOperation_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_sendPinCodeOperation_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_updateProfileAttributeForChannel_args = function(args) {
  this.profileAttribute = null;
  this.value = null;
  if (args) {
    if (args.profileAttribute !== undefined && args.profileAttribute !== null) {
      this.profileAttribute = args.profileAttribute;
    }
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
  }
};
ChannelApplicationProvidedService_updateProfileAttributeForChannel_args.prototype = {};
ChannelApplicationProvidedService_updateProfileAttributeForChannel_args.prototype.read = function(input) {
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
        this.profileAttribute = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
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

ChannelApplicationProvidedService_updateProfileAttributeForChannel_args.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_updateProfileAttributeForChannel_args');
  if (this.profileAttribute !== null && this.profileAttribute !== undefined) {
    output.writeFieldBegin('profileAttribute', Thrift.Type.I32, 2);
    output.writeI32(this.profileAttribute);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 3);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedService_updateProfileAttributeForChannel_result = function(args) {
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
ChannelApplicationProvidedService_updateProfileAttributeForChannel_result.prototype = {};
ChannelApplicationProvidedService_updateProfileAttributeForChannel_result.prototype.read = function(input) {
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

ChannelApplicationProvidedService_updateProfileAttributeForChannel_result.prototype.write = function(output) {
  output.writeStructBegin('ChannelApplicationProvidedService_updateProfileAttributeForChannel_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ChannelApplicationProvidedServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ChannelApplicationProvidedServiceClient.prototype = {};
ChannelApplicationProvidedServiceClient.prototype.seqid = function() { return this._seqid; };
ChannelApplicationProvidedServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
ChannelApplicationProvidedServiceClient.prototype.activeBuddySubscriberCount = function(callback) {
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
    this.send_activeBuddySubscriberCount();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_activeBuddySubscriberCount();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_activeBuddySubscriberCount = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('activeBuddySubscriberCount', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_activeBuddySubscriberCount_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_activeBuddySubscriberCount = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_activeBuddySubscriberCount_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('activeBuddySubscriberCount failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.addOperationForChannel = function(opType, param1, param2, param3, callback) {
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
    this.send_addOperationForChannel(opType, param1, param2, param3);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addOperationForChannel(opType, param1, param2, param3);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_addOperationForChannel = function(opType, param1, param2, param3) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addOperationForChannel', Thrift.MessageType.CALL, this.seqid());
  var params = {
    opType: opType,
    param1: param1,
    param2: param2,
    param3: param3
  };
  var args = new ChannelApplicationProvidedService_addOperationForChannel_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_addOperationForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_addOperationForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ChannelApplicationProvidedServiceClient.prototype.displayBuddySubscriberCount = function(callback) {
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
    this.send_displayBuddySubscriberCount();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_displayBuddySubscriberCount();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_displayBuddySubscriberCount = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('displayBuddySubscriberCount', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_displayBuddySubscriberCount_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_displayBuddySubscriberCount = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_displayBuddySubscriberCount_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('displayBuddySubscriberCount failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.findContactByUseridWithoutAbuseBlockForChannel = function(userid, callback) {
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
    this.send_findContactByUseridWithoutAbuseBlockForChannel(userid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_findContactByUseridWithoutAbuseBlockForChannel(userid);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_findContactByUseridWithoutAbuseBlockForChannel = function(userid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('findContactByUseridWithoutAbuseBlockForChannel', Thrift.MessageType.CALL, this.seqid());
  var params = {
    userid: userid
  };
  var args = new ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_findContactByUseridWithoutAbuseBlockForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('findContactByUseridWithoutAbuseBlockForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getAllContactIdsForChannel = function(callback) {
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
    this.send_getAllContactIdsForChannel();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getAllContactIdsForChannel();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getAllContactIdsForChannel = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getAllContactIdsForChannel', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getAllContactIdsForChannel_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getAllContactIdsForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getAllContactIdsForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getAllContactIdsForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getCompactContacts = function(lastModifiedTimestamp, callback) {
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
    this.send_getCompactContacts(lastModifiedTimestamp);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getCompactContacts(lastModifiedTimestamp);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getCompactContacts = function(lastModifiedTimestamp) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCompactContacts', Thrift.MessageType.CALL, this.seqid());
  var params = {
    lastModifiedTimestamp: lastModifiedTimestamp
  };
  var args = new ChannelApplicationProvidedService_getCompactContacts_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getCompactContacts = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getCompactContacts_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCompactContacts failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getContactsForChannel = function(ids, callback) {
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
    this.send_getContactsForChannel(ids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getContactsForChannel(ids);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getContactsForChannel = function(ids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getContactsForChannel', Thrift.MessageType.CALL, this.seqid());
  var params = {
    ids: ids
  };
  var args = new ChannelApplicationProvidedService_getContactsForChannel_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getContactsForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getContactsForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getContactsForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getDisplayName = function(mid, callback) {
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
    this.send_getDisplayName(mid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getDisplayName(mid);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getDisplayName = function(mid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getDisplayName', Thrift.MessageType.CALL, this.seqid());
  var params = {
    mid: mid
  };
  var args = new ChannelApplicationProvidedService_getDisplayName_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getDisplayName = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getDisplayName_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getDisplayName failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getFavoriteMidsForChannel = function(callback) {
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
    this.send_getFavoriteMidsForChannel();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getFavoriteMidsForChannel();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getFavoriteMidsForChannel = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFavoriteMidsForChannel', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getFavoriteMidsForChannel_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getFavoriteMidsForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getFavoriteMidsForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFavoriteMidsForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getFriendMids = function(callback) {
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
    this.send_getFriendMids();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getFriendMids();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getFriendMids = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFriendMids', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getFriendMids_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getFriendMids = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getFriendMids_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFriendMids failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getGroupMemberMids = function(groupId, callback) {
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
    this.send_getGroupMemberMids(groupId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getGroupMemberMids(groupId);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getGroupMemberMids = function(groupId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getGroupMemberMids', Thrift.MessageType.CALL, this.seqid());
  var params = {
    groupId: groupId
  };
  var args = new ChannelApplicationProvidedService_getGroupMemberMids_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getGroupMemberMids = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getGroupMemberMids_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getGroupMemberMids failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getGroupsForChannel = function(groupIds, callback) {
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
    this.send_getGroupsForChannel(groupIds);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getGroupsForChannel(groupIds);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getGroupsForChannel = function(groupIds) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getGroupsForChannel', Thrift.MessageType.CALL, this.seqid());
  var params = {
    groupIds: groupIds
  };
  var args = new ChannelApplicationProvidedService_getGroupsForChannel_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getGroupsForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getGroupsForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getGroupsForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getIdentityCredential = function(callback) {
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
    this.send_getIdentityCredential();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getIdentityCredential();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getIdentityCredential = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getIdentityCredential', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getIdentityCredential_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getIdentityCredential = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getIdentityCredential_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getIdentityCredential failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getJoinedGroupIdsForChannel = function(callback) {
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
    this.send_getJoinedGroupIdsForChannel();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getJoinedGroupIdsForChannel();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getJoinedGroupIdsForChannel = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getJoinedGroupIdsForChannel', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getJoinedGroupIdsForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getJoinedGroupIdsForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getMetaProfile = function(callback) {
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
    this.send_getMetaProfile();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getMetaProfile();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getMetaProfile = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getMetaProfile', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getMetaProfile_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getMetaProfile = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getMetaProfile_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getMetaProfile failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getMid = function(callback) {
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
    this.send_getMid();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getMid();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getMid = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getMid', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getMid_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getMid = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getMid_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getMid failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getPrimaryClientForChannel = function(callback) {
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
    this.send_getPrimaryClientForChannel();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPrimaryClientForChannel();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getPrimaryClientForChannel = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPrimaryClientForChannel', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getPrimaryClientForChannel_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getPrimaryClientForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getPrimaryClientForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPrimaryClientForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getProfileForChannel = function(callback) {
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
    this.send_getProfileForChannel();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getProfileForChannel();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getProfileForChannel = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getProfileForChannel', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getProfileForChannel_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getProfileForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getProfileForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getProfileForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getSimpleChannelContacts = function(ids, callback) {
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
    this.send_getSimpleChannelContacts(ids);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getSimpleChannelContacts(ids);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getSimpleChannelContacts = function(ids) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getSimpleChannelContacts', Thrift.MessageType.CALL, this.seqid());
  var params = {
    ids: ids
  };
  var args = new ChannelApplicationProvidedService_getSimpleChannelContacts_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getSimpleChannelContacts = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getSimpleChannelContacts_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getSimpleChannelContacts failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getUserCountryForBilling = function(country, remoteIp, callback) {
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
    this.send_getUserCountryForBilling(country, remoteIp);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUserCountryForBilling(country, remoteIp);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getUserCountryForBilling = function(country, remoteIp) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getUserCountryForBilling', Thrift.MessageType.CALL, this.seqid());
  var params = {
    country: country,
    remoteIp: remoteIp
  };
  var args = new ChannelApplicationProvidedService_getUserCountryForBilling_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getUserCountryForBilling = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getUserCountryForBilling_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUserCountryForBilling failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getUserCreateTime = function(callback) {
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
    this.send_getUserCreateTime();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUserCreateTime();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getUserCreateTime = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getUserCreateTime', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getUserCreateTime_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getUserCreateTime = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getUserCreateTime_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUserCreateTime failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getUserIdentities = function(callback) {
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
    this.send_getUserIdentities();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUserIdentities();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getUserIdentities = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getUserIdentities', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getUserIdentities_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getUserIdentities = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getUserIdentities_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUserIdentities failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getUserLanguage = function(callback) {
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
    this.send_getUserLanguage();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUserLanguage();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getUserLanguage = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getUserLanguage', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getUserLanguage_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getUserLanguage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getUserLanguage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUserLanguage failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.getUserMidsWhoAddedMe = function(callback) {
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
    this.send_getUserMidsWhoAddedMe();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getUserMidsWhoAddedMe();
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_getUserMidsWhoAddedMe = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getUserMidsWhoAddedMe', Thrift.MessageType.CALL, this.seqid());
  var args = new ChannelApplicationProvidedService_getUserMidsWhoAddedMe_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_getUserMidsWhoAddedMe = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getUserMidsWhoAddedMe failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.isGroupMember = function(groupId, callback) {
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
    this.send_isGroupMember(groupId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_isGroupMember(groupId);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_isGroupMember = function(groupId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('isGroupMember', Thrift.MessageType.CALL, this.seqid());
  var params = {
    groupId: groupId
  };
  var args = new ChannelApplicationProvidedService_isGroupMember_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_isGroupMember = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_isGroupMember_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('isGroupMember failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.isInContact = function(mid, callback) {
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
    this.send_isInContact(mid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_isInContact(mid);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_isInContact = function(mid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('isInContact', Thrift.MessageType.CALL, this.seqid());
  var params = {
    mid: mid
  };
  var args = new ChannelApplicationProvidedService_isInContact_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_isInContact = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_isInContact_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('isInContact failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.registerChannelCP = function(cpId, registerPassword, callback) {
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
    this.send_registerChannelCP(cpId, registerPassword);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_registerChannelCP(cpId, registerPassword);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_registerChannelCP = function(cpId, registerPassword) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('registerChannelCP', Thrift.MessageType.CALL, this.seqid());
  var params = {
    cpId: cpId,
    registerPassword: registerPassword
  };
  var args = new ChannelApplicationProvidedService_registerChannelCP_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_registerChannelCP = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_registerChannelCP_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('registerChannelCP failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.removeNotificationStatus = function(notificationStatus, callback) {
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
    this.send_removeNotificationStatus(notificationStatus);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_removeNotificationStatus(notificationStatus);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_removeNotificationStatus = function(notificationStatus) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('removeNotificationStatus', Thrift.MessageType.CALL, this.seqid());
  var params = {
    notificationStatus: notificationStatus
  };
  var args = new ChannelApplicationProvidedService_removeNotificationStatus_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_removeNotificationStatus = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_removeNotificationStatus_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ChannelApplicationProvidedServiceClient.prototype.sendMessageForChannel = function(message, callback) {
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
    this.send_sendMessageForChannel(message);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendMessageForChannel(message);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_sendMessageForChannel = function(message) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendMessageForChannel', Thrift.MessageType.CALL, this.seqid());
  var params = {
    message: message
  };
  var args = new ChannelApplicationProvidedService_sendMessageForChannel_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_sendMessageForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_sendMessageForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('sendMessageForChannel failed: unknown result');
};
ChannelApplicationProvidedServiceClient.prototype.sendPinCodeOperation = function(verifier, callback) {
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
    this.send_sendPinCodeOperation(verifier);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_sendPinCodeOperation(verifier);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_sendPinCodeOperation = function(verifier) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('sendPinCodeOperation', Thrift.MessageType.CALL, this.seqid());
  var params = {
    verifier: verifier
  };
  var args = new ChannelApplicationProvidedService_sendPinCodeOperation_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_sendPinCodeOperation = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_sendPinCodeOperation_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ChannelApplicationProvidedServiceClient.prototype.updateProfileAttributeForChannel = function(profileAttribute, value, callback) {
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
    this.send_updateProfileAttributeForChannel(profileAttribute, value);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateProfileAttributeForChannel(profileAttribute, value);
  }
};

ChannelApplicationProvidedServiceClient.prototype.send_updateProfileAttributeForChannel = function(profileAttribute, value) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateProfileAttributeForChannel', Thrift.MessageType.CALL, this.seqid());
  var params = {
    profileAttribute: profileAttribute,
    value: value
  };
  var args = new ChannelApplicationProvidedService_updateProfileAttributeForChannel_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ChannelApplicationProvidedServiceClient.prototype.recv_updateProfileAttributeForChannel = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ChannelApplicationProvidedService_updateProfileAttributeForChannel_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
var ChannelApplicationProvidedServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
ChannelApplicationProvidedServiceProcessor.prototype.process = function(input, output) {
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
ChannelApplicationProvidedServiceProcessor.prototype.process_activeBuddySubscriberCount = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_activeBuddySubscriberCount_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.activeBuddySubscriberCount.length === 0) {
    Q.fcall(this._handler.activeBuddySubscriberCount.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_activeBuddySubscriberCount_result({success: result});
        output.writeMessageBegin("activeBuddySubscriberCount", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_activeBuddySubscriberCount_result(err);
          output.writeMessageBegin("activeBuddySubscriberCount", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("activeBuddySubscriberCount", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.activeBuddySubscriberCount(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_activeBuddySubscriberCount_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("activeBuddySubscriberCount", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("activeBuddySubscriberCount", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_addOperationForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_addOperationForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addOperationForChannel.length === 4) {
    Q.fcall(this._handler.addOperationForChannel.bind(this._handler), args.opType, args.param1, args.param2, args.param3)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_addOperationForChannel_result({success: result});
        output.writeMessageBegin("addOperationForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_addOperationForChannel_result(err);
          output.writeMessageBegin("addOperationForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("addOperationForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.addOperationForChannel(args.opType, args.param1, args.param2, args.param3, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_addOperationForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("addOperationForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("addOperationForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_displayBuddySubscriberCount = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_displayBuddySubscriberCount_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.displayBuddySubscriberCount.length === 0) {
    Q.fcall(this._handler.displayBuddySubscriberCount.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_displayBuddySubscriberCount_result({success: result});
        output.writeMessageBegin("displayBuddySubscriberCount", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_displayBuddySubscriberCount_result(err);
          output.writeMessageBegin("displayBuddySubscriberCount", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("displayBuddySubscriberCount", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.displayBuddySubscriberCount(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_displayBuddySubscriberCount_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("displayBuddySubscriberCount", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("displayBuddySubscriberCount", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_findContactByUseridWithoutAbuseBlockForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.findContactByUseridWithoutAbuseBlockForChannel.length === 1) {
    Q.fcall(this._handler.findContactByUseridWithoutAbuseBlockForChannel.bind(this._handler), args.userid)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result({success: result});
        output.writeMessageBegin("findContactByUseridWithoutAbuseBlockForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result(err);
          output.writeMessageBegin("findContactByUseridWithoutAbuseBlockForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("findContactByUseridWithoutAbuseBlockForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.findContactByUseridWithoutAbuseBlockForChannel(args.userid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_findContactByUseridWithoutAbuseBlockForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("findContactByUseridWithoutAbuseBlockForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("findContactByUseridWithoutAbuseBlockForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getAllContactIdsForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getAllContactIdsForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getAllContactIdsForChannel.length === 0) {
    Q.fcall(this._handler.getAllContactIdsForChannel.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getAllContactIdsForChannel_result({success: result});
        output.writeMessageBegin("getAllContactIdsForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getAllContactIdsForChannel_result(err);
          output.writeMessageBegin("getAllContactIdsForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getAllContactIdsForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getAllContactIdsForChannel(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getAllContactIdsForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getAllContactIdsForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getAllContactIdsForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getCompactContacts = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getCompactContacts_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getCompactContacts.length === 1) {
    Q.fcall(this._handler.getCompactContacts.bind(this._handler), args.lastModifiedTimestamp)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getCompactContacts_result({success: result});
        output.writeMessageBegin("getCompactContacts", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getCompactContacts_result(err);
          output.writeMessageBegin("getCompactContacts", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getCompactContacts", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getCompactContacts(args.lastModifiedTimestamp, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getCompactContacts_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getCompactContacts", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getCompactContacts", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getContactsForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getContactsForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getContactsForChannel.length === 1) {
    Q.fcall(this._handler.getContactsForChannel.bind(this._handler), args.ids)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getContactsForChannel_result({success: result});
        output.writeMessageBegin("getContactsForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getContactsForChannel_result(err);
          output.writeMessageBegin("getContactsForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getContactsForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getContactsForChannel(args.ids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getContactsForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getContactsForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getContactsForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getDisplayName = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getDisplayName_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getDisplayName.length === 1) {
    Q.fcall(this._handler.getDisplayName.bind(this._handler), args.mid)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getDisplayName_result({success: result});
        output.writeMessageBegin("getDisplayName", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getDisplayName_result(err);
          output.writeMessageBegin("getDisplayName", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getDisplayName", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getDisplayName(args.mid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getDisplayName_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getDisplayName", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getDisplayName", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getFavoriteMidsForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getFavoriteMidsForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getFavoriteMidsForChannel.length === 0) {
    Q.fcall(this._handler.getFavoriteMidsForChannel.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getFavoriteMidsForChannel_result({success: result});
        output.writeMessageBegin("getFavoriteMidsForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getFavoriteMidsForChannel_result(err);
          output.writeMessageBegin("getFavoriteMidsForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getFavoriteMidsForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getFavoriteMidsForChannel(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getFavoriteMidsForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getFavoriteMidsForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getFavoriteMidsForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getFriendMids = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getFriendMids_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getFriendMids.length === 0) {
    Q.fcall(this._handler.getFriendMids.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getFriendMids_result({success: result});
        output.writeMessageBegin("getFriendMids", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getFriendMids_result(err);
          output.writeMessageBegin("getFriendMids", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getFriendMids", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getFriendMids(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getFriendMids_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getFriendMids", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getFriendMids", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getGroupMemberMids = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getGroupMemberMids_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getGroupMemberMids.length === 1) {
    Q.fcall(this._handler.getGroupMemberMids.bind(this._handler), args.groupId)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getGroupMemberMids_result({success: result});
        output.writeMessageBegin("getGroupMemberMids", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getGroupMemberMids_result(err);
          output.writeMessageBegin("getGroupMemberMids", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getGroupMemberMids", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getGroupMemberMids(args.groupId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getGroupMemberMids_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getGroupMemberMids", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getGroupMemberMids", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getGroupsForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getGroupsForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getGroupsForChannel.length === 1) {
    Q.fcall(this._handler.getGroupsForChannel.bind(this._handler), args.groupIds)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getGroupsForChannel_result({success: result});
        output.writeMessageBegin("getGroupsForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getGroupsForChannel_result(err);
          output.writeMessageBegin("getGroupsForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getGroupsForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getGroupsForChannel(args.groupIds, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getGroupsForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getGroupsForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getGroupsForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getIdentityCredential = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getIdentityCredential_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getIdentityCredential.length === 0) {
    Q.fcall(this._handler.getIdentityCredential.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getIdentityCredential_result({success: result});
        output.writeMessageBegin("getIdentityCredential", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getIdentityCredential_result(err);
          output.writeMessageBegin("getIdentityCredential", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getIdentityCredential", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getIdentityCredential(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getIdentityCredential_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getIdentityCredential", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getIdentityCredential", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getJoinedGroupIdsForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getJoinedGroupIdsForChannel.length === 0) {
    Q.fcall(this._handler.getJoinedGroupIdsForChannel.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result({success: result});
        output.writeMessageBegin("getJoinedGroupIdsForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result(err);
          output.writeMessageBegin("getJoinedGroupIdsForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getJoinedGroupIdsForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getJoinedGroupIdsForChannel(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getJoinedGroupIdsForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getJoinedGroupIdsForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getJoinedGroupIdsForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getMetaProfile = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getMetaProfile_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getMetaProfile.length === 0) {
    Q.fcall(this._handler.getMetaProfile.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getMetaProfile_result({success: result});
        output.writeMessageBegin("getMetaProfile", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getMetaProfile_result(err);
          output.writeMessageBegin("getMetaProfile", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getMetaProfile", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getMetaProfile(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getMetaProfile_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getMetaProfile", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getMetaProfile", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getMid = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getMid_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getMid.length === 0) {
    Q.fcall(this._handler.getMid.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getMid_result({success: result});
        output.writeMessageBegin("getMid", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getMid_result(err);
          output.writeMessageBegin("getMid", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getMid", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getMid(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getMid_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getMid", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getMid", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getPrimaryClientForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getPrimaryClientForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPrimaryClientForChannel.length === 0) {
    Q.fcall(this._handler.getPrimaryClientForChannel.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getPrimaryClientForChannel_result({success: result});
        output.writeMessageBegin("getPrimaryClientForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getPrimaryClientForChannel_result(err);
          output.writeMessageBegin("getPrimaryClientForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPrimaryClientForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPrimaryClientForChannel(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getPrimaryClientForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPrimaryClientForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPrimaryClientForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getProfileForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getProfileForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getProfileForChannel.length === 0) {
    Q.fcall(this._handler.getProfileForChannel.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getProfileForChannel_result({success: result});
        output.writeMessageBegin("getProfileForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getProfileForChannel_result(err);
          output.writeMessageBegin("getProfileForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getProfileForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getProfileForChannel(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getProfileForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getProfileForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getProfileForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getSimpleChannelContacts = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getSimpleChannelContacts_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getSimpleChannelContacts.length === 1) {
    Q.fcall(this._handler.getSimpleChannelContacts.bind(this._handler), args.ids)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getSimpleChannelContacts_result({success: result});
        output.writeMessageBegin("getSimpleChannelContacts", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getSimpleChannelContacts_result(err);
          output.writeMessageBegin("getSimpleChannelContacts", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getSimpleChannelContacts", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getSimpleChannelContacts(args.ids, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getSimpleChannelContacts_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getSimpleChannelContacts", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getSimpleChannelContacts", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getUserCountryForBilling = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getUserCountryForBilling_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUserCountryForBilling.length === 2) {
    Q.fcall(this._handler.getUserCountryForBilling.bind(this._handler), args.country, args.remoteIp)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getUserCountryForBilling_result({success: result});
        output.writeMessageBegin("getUserCountryForBilling", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getUserCountryForBilling_result(err);
          output.writeMessageBegin("getUserCountryForBilling", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getUserCountryForBilling", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getUserCountryForBilling(args.country, args.remoteIp, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getUserCountryForBilling_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getUserCountryForBilling", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUserCountryForBilling", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getUserCreateTime = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getUserCreateTime_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUserCreateTime.length === 0) {
    Q.fcall(this._handler.getUserCreateTime.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getUserCreateTime_result({success: result});
        output.writeMessageBegin("getUserCreateTime", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getUserCreateTime_result(err);
          output.writeMessageBegin("getUserCreateTime", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getUserCreateTime", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getUserCreateTime(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getUserCreateTime_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getUserCreateTime", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUserCreateTime", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getUserIdentities = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getUserIdentities_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUserIdentities.length === 0) {
    Q.fcall(this._handler.getUserIdentities.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getUserIdentities_result({success: result});
        output.writeMessageBegin("getUserIdentities", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getUserIdentities_result(err);
          output.writeMessageBegin("getUserIdentities", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getUserIdentities", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getUserIdentities(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getUserIdentities_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getUserIdentities", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUserIdentities", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getUserLanguage = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getUserLanguage_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUserLanguage.length === 0) {
    Q.fcall(this._handler.getUserLanguage.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getUserLanguage_result({success: result});
        output.writeMessageBegin("getUserLanguage", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getUserLanguage_result(err);
          output.writeMessageBegin("getUserLanguage", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getUserLanguage", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getUserLanguage(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getUserLanguage_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getUserLanguage", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUserLanguage", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_getUserMidsWhoAddedMe = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_getUserMidsWhoAddedMe_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getUserMidsWhoAddedMe.length === 0) {
    Q.fcall(this._handler.getUserMidsWhoAddedMe.bind(this._handler))
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result({success: result});
        output.writeMessageBegin("getUserMidsWhoAddedMe", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result(err);
          output.writeMessageBegin("getUserMidsWhoAddedMe", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getUserMidsWhoAddedMe", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getUserMidsWhoAddedMe(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_getUserMidsWhoAddedMe_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getUserMidsWhoAddedMe", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getUserMidsWhoAddedMe", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_isGroupMember = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_isGroupMember_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.isGroupMember.length === 1) {
    Q.fcall(this._handler.isGroupMember.bind(this._handler), args.groupId)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_isGroupMember_result({success: result});
        output.writeMessageBegin("isGroupMember", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_isGroupMember_result(err);
          output.writeMessageBegin("isGroupMember", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("isGroupMember", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.isGroupMember(args.groupId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_isGroupMember_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("isGroupMember", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isGroupMember", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_isInContact = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_isInContact_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.isInContact.length === 1) {
    Q.fcall(this._handler.isInContact.bind(this._handler), args.mid)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_isInContact_result({success: result});
        output.writeMessageBegin("isInContact", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_isInContact_result(err);
          output.writeMessageBegin("isInContact", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("isInContact", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.isInContact(args.mid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_isInContact_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("isInContact", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isInContact", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_registerChannelCP = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_registerChannelCP_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.registerChannelCP.length === 2) {
    Q.fcall(this._handler.registerChannelCP.bind(this._handler), args.cpId, args.registerPassword)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_registerChannelCP_result({success: result});
        output.writeMessageBegin("registerChannelCP", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_registerChannelCP_result(err);
          output.writeMessageBegin("registerChannelCP", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("registerChannelCP", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.registerChannelCP(args.cpId, args.registerPassword, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_registerChannelCP_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("registerChannelCP", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("registerChannelCP", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_removeNotificationStatus = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_removeNotificationStatus_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.removeNotificationStatus.length === 1) {
    Q.fcall(this._handler.removeNotificationStatus.bind(this._handler), args.notificationStatus)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_removeNotificationStatus_result({success: result});
        output.writeMessageBegin("removeNotificationStatus", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_removeNotificationStatus_result(err);
          output.writeMessageBegin("removeNotificationStatus", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("removeNotificationStatus", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.removeNotificationStatus(args.notificationStatus, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_removeNotificationStatus_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("removeNotificationStatus", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("removeNotificationStatus", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_sendMessageForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_sendMessageForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendMessageForChannel.length === 1) {
    Q.fcall(this._handler.sendMessageForChannel.bind(this._handler), args.message)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_sendMessageForChannel_result({success: result});
        output.writeMessageBegin("sendMessageForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_sendMessageForChannel_result(err);
          output.writeMessageBegin("sendMessageForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendMessageForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendMessageForChannel(args.message, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_sendMessageForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendMessageForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendMessageForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_sendPinCodeOperation = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_sendPinCodeOperation_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.sendPinCodeOperation.length === 1) {
    Q.fcall(this._handler.sendPinCodeOperation.bind(this._handler), args.verifier)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_sendPinCodeOperation_result({success: result});
        output.writeMessageBegin("sendPinCodeOperation", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_sendPinCodeOperation_result(err);
          output.writeMessageBegin("sendPinCodeOperation", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("sendPinCodeOperation", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.sendPinCodeOperation(args.verifier, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_sendPinCodeOperation_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("sendPinCodeOperation", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("sendPinCodeOperation", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ChannelApplicationProvidedServiceProcessor.prototype.process_updateProfileAttributeForChannel = function(seqid, input, output) {
  var args = new ChannelApplicationProvidedService_updateProfileAttributeForChannel_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateProfileAttributeForChannel.length === 2) {
    Q.fcall(this._handler.updateProfileAttributeForChannel.bind(this._handler), args.profileAttribute, args.value)
      .then(function(result) {
        var result_obj = new ChannelApplicationProvidedService_updateProfileAttributeForChannel_result({success: result});
        output.writeMessageBegin("updateProfileAttributeForChannel", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ChannelApplicationProvidedService_updateProfileAttributeForChannel_result(err);
          output.writeMessageBegin("updateProfileAttributeForChannel", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateProfileAttributeForChannel", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateProfileAttributeForChannel(args.profileAttribute, args.value, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ChannelApplicationProvidedService_updateProfileAttributeForChannel_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateProfileAttributeForChannel", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateProfileAttributeForChannel", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
