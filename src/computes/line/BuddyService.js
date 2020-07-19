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

var BuddyService_findBuddyContactsByQuery_args = function(args) {
  this.language = null;
  this.country = null;
  this.query = null;
  this.fromIndex = null;
  this.count = null;
  this.requestSource = null;
  if (args) {
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.query !== undefined && args.query !== null) {
      this.query = args.query;
    }
    if (args.fromIndex !== undefined && args.fromIndex !== null) {
      this.fromIndex = args.fromIndex;
    }
    if (args.count !== undefined && args.count !== null) {
      this.count = args.count;
    }
    if (args.requestSource !== undefined && args.requestSource !== null) {
      this.requestSource = args.requestSource;
    }
  }
};
BuddyService_findBuddyContactsByQuery_args.prototype = {};
BuddyService_findBuddyContactsByQuery_args.prototype.read = function(input) {
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
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.fromIndex = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.requestSource = input.readI32();
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

BuddyService_findBuddyContactsByQuery_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_findBuddyContactsByQuery_args');
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 2);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 3);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.query !== null && this.query !== undefined) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 4);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  if (this.fromIndex !== null && this.fromIndex !== undefined) {
    output.writeFieldBegin('fromIndex', Thrift.Type.I32, 5);
    output.writeI32(this.fromIndex);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 6);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  if (this.requestSource !== null && this.requestSource !== undefined) {
    output.writeFieldBegin('requestSource', Thrift.Type.I32, 7);
    output.writeI32(this.requestSource);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_findBuddyContactsByQuery_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.BuddySearchResult]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyService_findBuddyContactsByQuery_result.prototype = {};
BuddyService_findBuddyContactsByQuery_result.prototype.read = function(input) {
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
        var _size556 = 0;
        var _rtmp3560;
        this.success = [];
        var _etype559 = 0;
        _rtmp3560 = input.readListBegin();
        _etype559 = _rtmp3560.etype;
        _size556 = _rtmp3560.size;
        for (var _i561 = 0; _i561 < _size556; ++_i561)
        {
          var elem562 = null;
          elem562 = new ttypes.BuddySearchResult();
          elem562.read(input);
          this.success.push(elem562);
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

BuddyService_findBuddyContactsByQuery_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_findBuddyContactsByQuery_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter563 in this.success)
    {
      if (this.success.hasOwnProperty(iter563))
      {
        iter563 = this.success[iter563];
        iter563.write(output);
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

var BuddyService_getBuddyContacts_args = function(args) {
  this.language = null;
  this.country = null;
  this.classification = null;
  this.fromIndex = null;
  this.count = null;
  if (args) {
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.classification !== undefined && args.classification !== null) {
      this.classification = args.classification;
    }
    if (args.fromIndex !== undefined && args.fromIndex !== null) {
      this.fromIndex = args.fromIndex;
    }
    if (args.count !== undefined && args.count !== null) {
      this.count = args.count;
    }
  }
};
BuddyService_getBuddyContacts_args.prototype = {};
BuddyService_getBuddyContacts_args.prototype.read = function(input) {
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
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.classification = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.fromIndex = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
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

BuddyService_getBuddyContacts_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getBuddyContacts_args');
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 2);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 3);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.classification !== null && this.classification !== undefined) {
    output.writeFieldBegin('classification', Thrift.Type.STRING, 4);
    output.writeString(this.classification);
    output.writeFieldEnd();
  }
  if (this.fromIndex !== null && this.fromIndex !== undefined) {
    output.writeFieldBegin('fromIndex', Thrift.Type.I32, 5);
    output.writeI32(this.fromIndex);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 6);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getBuddyContacts_result = function(args) {
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
BuddyService_getBuddyContacts_result.prototype = {};
BuddyService_getBuddyContacts_result.prototype.read = function(input) {
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
        var _size564 = 0;
        var _rtmp3568;
        this.success = [];
        var _etype567 = 0;
        _rtmp3568 = input.readListBegin();
        _etype567 = _rtmp3568.etype;
        _size564 = _rtmp3568.size;
        for (var _i569 = 0; _i569 < _size564; ++_i569)
        {
          var elem570 = null;
          elem570 = new ttypes.Contact();
          elem570.read(input);
          this.success.push(elem570);
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

BuddyService_getBuddyContacts_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getBuddyContacts_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter571 in this.success)
    {
      if (this.success.hasOwnProperty(iter571))
      {
        iter571 = this.success[iter571];
        iter571.write(output);
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

var BuddyService_getBuddyDetail_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyService_getBuddyDetail_args.prototype = {};
BuddyService_getBuddyDetail_args.prototype.read = function(input) {
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
      case 4:
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

BuddyService_getBuddyDetail_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getBuddyDetail_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 4);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getBuddyDetail_result = function(args) {
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
BuddyService_getBuddyDetail_result.prototype = {};
BuddyService_getBuddyDetail_result.prototype.read = function(input) {
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

BuddyService_getBuddyDetail_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getBuddyDetail_result');
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

var BuddyService_getBuddyOnAir_args = function(args) {
  this.buddyMid = null;
  if (args) {
    if (args.buddyMid !== undefined && args.buddyMid !== null) {
      this.buddyMid = args.buddyMid;
    }
  }
};
BuddyService_getBuddyOnAir_args.prototype = {};
BuddyService_getBuddyOnAir_args.prototype.read = function(input) {
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
      case 4:
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

BuddyService_getBuddyOnAir_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getBuddyOnAir_args');
  if (this.buddyMid !== null && this.buddyMid !== undefined) {
    output.writeFieldBegin('buddyMid', Thrift.Type.STRING, 4);
    output.writeString(this.buddyMid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getBuddyOnAir_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.BuddyOnAir(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyService_getBuddyOnAir_result.prototype = {};
BuddyService_getBuddyOnAir_result.prototype.read = function(input) {
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
        this.success = new ttypes.BuddyOnAir();
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

BuddyService_getBuddyOnAir_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getBuddyOnAir_result');
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

var BuddyService_getCountriesHavingBuddy_args = function(args) {
};
BuddyService_getCountriesHavingBuddy_args.prototype = {};
BuddyService_getCountriesHavingBuddy_args.prototype.read = function(input) {
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

BuddyService_getCountriesHavingBuddy_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getCountriesHavingBuddy_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getCountriesHavingBuddy_result = function(args) {
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
BuddyService_getCountriesHavingBuddy_result.prototype = {};
BuddyService_getCountriesHavingBuddy_result.prototype.read = function(input) {
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
        var _size572 = 0;
        var _rtmp3576;
        this.success = [];
        var _etype575 = 0;
        _rtmp3576 = input.readListBegin();
        _etype575 = _rtmp3576.etype;
        _size572 = _rtmp3576.size;
        for (var _i577 = 0; _i577 < _size572; ++_i577)
        {
          var elem578 = null;
          elem578 = input.readString();
          this.success.push(elem578);
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

BuddyService_getCountriesHavingBuddy_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getCountriesHavingBuddy_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter579 in this.success)
    {
      if (this.success.hasOwnProperty(iter579))
      {
        iter579 = this.success[iter579];
        output.writeString(iter579);
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

var BuddyService_getNewlyReleasedBuddyIds_args = function(args) {
  this.country = null;
  if (args) {
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
BuddyService_getNewlyReleasedBuddyIds_args.prototype = {};
BuddyService_getNewlyReleasedBuddyIds_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

BuddyService_getNewlyReleasedBuddyIds_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getNewlyReleasedBuddyIds_args');
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 3);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getNewlyReleasedBuddyIds_result = function(args) {
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
BuddyService_getNewlyReleasedBuddyIds_result.prototype = {};
BuddyService_getNewlyReleasedBuddyIds_result.prototype.read = function(input) {
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
        var _size580 = 0;
        var _rtmp3584;
        this.success = {};
        var _ktype581 = 0;
        var _vtype582 = 0;
        _rtmp3584 = input.readMapBegin();
        _ktype581 = _rtmp3584.ktype;
        _vtype582 = _rtmp3584.vtype;
        _size580 = _rtmp3584.size;
        for (var _i585 = 0; _i585 < _size580; ++_i585)
        {
          var key586 = null;
          var val587 = null;
          key586 = input.readString();
          val587 = input.readI64();
          this.success[key586] = val587;
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

BuddyService_getNewlyReleasedBuddyIds_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getNewlyReleasedBuddyIds_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.MAP, 0);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I64, Thrift.objectLength(this.success));
    for (var kiter588 in this.success)
    {
      if (this.success.hasOwnProperty(kiter588))
      {
        var viter589 = this.success[kiter588];
        output.writeString(kiter588);
        output.writeI64(viter589);
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

var BuddyService_getPopularBuddyBanner_args = function(args) {
  this.language = null;
  this.country = null;
  this.applicationType = null;
  this.resourceSpecification = null;
  if (args) {
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.applicationType !== undefined && args.applicationType !== null) {
      this.applicationType = args.applicationType;
    }
    if (args.resourceSpecification !== undefined && args.resourceSpecification !== null) {
      this.resourceSpecification = args.resourceSpecification;
    }
  }
};
BuddyService_getPopularBuddyBanner_args.prototype = {};
BuddyService_getPopularBuddyBanner_args.prototype.read = function(input) {
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
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.applicationType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.resourceSpecification = input.readString();
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

BuddyService_getPopularBuddyBanner_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getPopularBuddyBanner_args');
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 2);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 3);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.applicationType !== null && this.applicationType !== undefined) {
    output.writeFieldBegin('applicationType', Thrift.Type.I32, 4);
    output.writeI32(this.applicationType);
    output.writeFieldEnd();
  }
  if (this.resourceSpecification !== null && this.resourceSpecification !== undefined) {
    output.writeFieldBegin('resourceSpecification', Thrift.Type.STRING, 5);
    output.writeString(this.resourceSpecification);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getPopularBuddyBanner_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.BuddyBanner(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyService_getPopularBuddyBanner_result.prototype = {};
BuddyService_getPopularBuddyBanner_result.prototype.read = function(input) {
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
        this.success = new ttypes.BuddyBanner();
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

BuddyService_getPopularBuddyBanner_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getPopularBuddyBanner_result');
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

var BuddyService_getPopularBuddyLists_args = function(args) {
  this.language = null;
  this.country = null;
  if (args) {
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
BuddyService_getPopularBuddyLists_args.prototype = {};
BuddyService_getPopularBuddyLists_args.prototype.read = function(input) {
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
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

BuddyService_getPopularBuddyLists_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getPopularBuddyLists_args');
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 2);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 3);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getPopularBuddyLists_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.BuddyList]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BuddyService_getPopularBuddyLists_result.prototype = {};
BuddyService_getPopularBuddyLists_result.prototype.read = function(input) {
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
        var _size590 = 0;
        var _rtmp3594;
        this.success = [];
        var _etype593 = 0;
        _rtmp3594 = input.readListBegin();
        _etype593 = _rtmp3594.etype;
        _size590 = _rtmp3594.size;
        for (var _i595 = 0; _i595 < _size590; ++_i595)
        {
          var elem596 = null;
          elem596 = new ttypes.BuddyList();
          elem596.read(input);
          this.success.push(elem596);
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

BuddyService_getPopularBuddyLists_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getPopularBuddyLists_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter597 in this.success)
    {
      if (this.success.hasOwnProperty(iter597))
      {
        iter597 = this.success[iter597];
        iter597.write(output);
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

var BuddyService_getPromotedBuddyContacts_args = function(args) {
  this.language = null;
  this.country = null;
  if (args) {
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
BuddyService_getPromotedBuddyContacts_args.prototype = {};
BuddyService_getPromotedBuddyContacts_args.prototype.read = function(input) {
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
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

BuddyService_getPromotedBuddyContacts_args.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getPromotedBuddyContacts_args');
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 2);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 3);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuddyService_getPromotedBuddyContacts_result = function(args) {
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
BuddyService_getPromotedBuddyContacts_result.prototype = {};
BuddyService_getPromotedBuddyContacts_result.prototype.read = function(input) {
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
        var _size598 = 0;
        var _rtmp3602;
        this.success = [];
        var _etype601 = 0;
        _rtmp3602 = input.readListBegin();
        _etype601 = _rtmp3602.etype;
        _size598 = _rtmp3602.size;
        for (var _i603 = 0; _i603 < _size598; ++_i603)
        {
          var elem604 = null;
          elem604 = new ttypes.Contact();
          elem604.read(input);
          this.success.push(elem604);
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

BuddyService_getPromotedBuddyContacts_result.prototype.write = function(output) {
  output.writeStructBegin('BuddyService_getPromotedBuddyContacts_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter605 in this.success)
    {
      if (this.success.hasOwnProperty(iter605))
      {
        iter605 = this.success[iter605];
        iter605.write(output);
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

var BuddyServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
BuddyServiceClient.prototype = {};
BuddyServiceClient.prototype.seqid = function() { return this._seqid; };
BuddyServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
BuddyServiceClient.prototype.findBuddyContactsByQuery = function(language, country, query, fromIndex, count, requestSource, callback) {
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
    this.send_findBuddyContactsByQuery(language, country, query, fromIndex, count, requestSource);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_findBuddyContactsByQuery(language, country, query, fromIndex, count, requestSource);
  }
};

BuddyServiceClient.prototype.send_findBuddyContactsByQuery = function(language, country, query, fromIndex, count, requestSource) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('findBuddyContactsByQuery', Thrift.MessageType.CALL, this.seqid());
  var params = {
    language: language,
    country: country,
    query: query,
    fromIndex: fromIndex,
    count: count,
    requestSource: requestSource
  };
  var args = new BuddyService_findBuddyContactsByQuery_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_findBuddyContactsByQuery = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_findBuddyContactsByQuery_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('findBuddyContactsByQuery failed: unknown result');
};
BuddyServiceClient.prototype.getBuddyContacts = function(language, country, classification, fromIndex, count, callback) {
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
    this.send_getBuddyContacts(language, country, classification, fromIndex, count);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBuddyContacts(language, country, classification, fromIndex, count);
  }
};

BuddyServiceClient.prototype.send_getBuddyContacts = function(language, country, classification, fromIndex, count) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBuddyContacts', Thrift.MessageType.CALL, this.seqid());
  var params = {
    language: language,
    country: country,
    classification: classification,
    fromIndex: fromIndex,
    count: count
  };
  var args = new BuddyService_getBuddyContacts_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getBuddyContacts = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getBuddyContacts_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBuddyContacts failed: unknown result');
};
BuddyServiceClient.prototype.getBuddyDetail = function(buddyMid, callback) {
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
    this.send_getBuddyDetail(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBuddyDetail(buddyMid);
  }
};

BuddyServiceClient.prototype.send_getBuddyDetail = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBuddyDetail', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyService_getBuddyDetail_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getBuddyDetail = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getBuddyDetail_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBuddyDetail failed: unknown result');
};
BuddyServiceClient.prototype.getBuddyOnAir = function(buddyMid, callback) {
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
    this.send_getBuddyOnAir(buddyMid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getBuddyOnAir(buddyMid);
  }
};

BuddyServiceClient.prototype.send_getBuddyOnAir = function(buddyMid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getBuddyOnAir', Thrift.MessageType.CALL, this.seqid());
  var params = {
    buddyMid: buddyMid
  };
  var args = new BuddyService_getBuddyOnAir_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getBuddyOnAir = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getBuddyOnAir_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getBuddyOnAir failed: unknown result');
};
BuddyServiceClient.prototype.getCountriesHavingBuddy = function(callback) {
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
    this.send_getCountriesHavingBuddy();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getCountriesHavingBuddy();
  }
};

BuddyServiceClient.prototype.send_getCountriesHavingBuddy = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCountriesHavingBuddy', Thrift.MessageType.CALL, this.seqid());
  var args = new BuddyService_getCountriesHavingBuddy_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getCountriesHavingBuddy = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getCountriesHavingBuddy_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCountriesHavingBuddy failed: unknown result');
};
BuddyServiceClient.prototype.getNewlyReleasedBuddyIds = function(country, callback) {
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
    this.send_getNewlyReleasedBuddyIds(country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getNewlyReleasedBuddyIds(country);
  }
};

BuddyServiceClient.prototype.send_getNewlyReleasedBuddyIds = function(country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getNewlyReleasedBuddyIds', Thrift.MessageType.CALL, this.seqid());
  var params = {
    country: country
  };
  var args = new BuddyService_getNewlyReleasedBuddyIds_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getNewlyReleasedBuddyIds = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getNewlyReleasedBuddyIds_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getNewlyReleasedBuddyIds failed: unknown result');
};
BuddyServiceClient.prototype.getPopularBuddyBanner = function(language, country, applicationType, resourceSpecification, callback) {
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
    this.send_getPopularBuddyBanner(language, country, applicationType, resourceSpecification);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPopularBuddyBanner(language, country, applicationType, resourceSpecification);
  }
};

BuddyServiceClient.prototype.send_getPopularBuddyBanner = function(language, country, applicationType, resourceSpecification) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPopularBuddyBanner', Thrift.MessageType.CALL, this.seqid());
  var params = {
    language: language,
    country: country,
    applicationType: applicationType,
    resourceSpecification: resourceSpecification
  };
  var args = new BuddyService_getPopularBuddyBanner_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getPopularBuddyBanner = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getPopularBuddyBanner_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPopularBuddyBanner failed: unknown result');
};
BuddyServiceClient.prototype.getPopularBuddyLists = function(language, country, callback) {
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
    this.send_getPopularBuddyLists(language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPopularBuddyLists(language, country);
  }
};

BuddyServiceClient.prototype.send_getPopularBuddyLists = function(language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPopularBuddyLists', Thrift.MessageType.CALL, this.seqid());
  var params = {
    language: language,
    country: country
  };
  var args = new BuddyService_getPopularBuddyLists_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getPopularBuddyLists = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getPopularBuddyLists_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPopularBuddyLists failed: unknown result');
};
BuddyServiceClient.prototype.getPromotedBuddyContacts = function(language, country, callback) {
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
    this.send_getPromotedBuddyContacts(language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPromotedBuddyContacts(language, country);
  }
};

BuddyServiceClient.prototype.send_getPromotedBuddyContacts = function(language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPromotedBuddyContacts', Thrift.MessageType.CALL, this.seqid());
  var params = {
    language: language,
    country: country
  };
  var args = new BuddyService_getPromotedBuddyContacts_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BuddyServiceClient.prototype.recv_getPromotedBuddyContacts = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BuddyService_getPromotedBuddyContacts_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPromotedBuddyContacts failed: unknown result');
};
var BuddyServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
BuddyServiceProcessor.prototype.process = function(input, output) {
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
BuddyServiceProcessor.prototype.process_findBuddyContactsByQuery = function(seqid, input, output) {
  var args = new BuddyService_findBuddyContactsByQuery_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.findBuddyContactsByQuery.length === 6) {
    Q.fcall(this._handler.findBuddyContactsByQuery.bind(this._handler), args.language, args.country, args.query, args.fromIndex, args.count, args.requestSource)
      .then(function(result) {
        var result_obj = new BuddyService_findBuddyContactsByQuery_result({success: result});
        output.writeMessageBegin("findBuddyContactsByQuery", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_findBuddyContactsByQuery_result(err);
          output.writeMessageBegin("findBuddyContactsByQuery", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("findBuddyContactsByQuery", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.findBuddyContactsByQuery(args.language, args.country, args.query, args.fromIndex, args.count, args.requestSource, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_findBuddyContactsByQuery_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("findBuddyContactsByQuery", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("findBuddyContactsByQuery", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getBuddyContacts = function(seqid, input, output) {
  var args = new BuddyService_getBuddyContacts_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBuddyContacts.length === 5) {
    Q.fcall(this._handler.getBuddyContacts.bind(this._handler), args.language, args.country, args.classification, args.fromIndex, args.count)
      .then(function(result) {
        var result_obj = new BuddyService_getBuddyContacts_result({success: result});
        output.writeMessageBegin("getBuddyContacts", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getBuddyContacts_result(err);
          output.writeMessageBegin("getBuddyContacts", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBuddyContacts", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBuddyContacts(args.language, args.country, args.classification, args.fromIndex, args.count, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getBuddyContacts_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBuddyContacts", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBuddyContacts", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getBuddyDetail = function(seqid, input, output) {
  var args = new BuddyService_getBuddyDetail_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBuddyDetail.length === 1) {
    Q.fcall(this._handler.getBuddyDetail.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyService_getBuddyDetail_result({success: result});
        output.writeMessageBegin("getBuddyDetail", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getBuddyDetail_result(err);
          output.writeMessageBegin("getBuddyDetail", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBuddyDetail", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBuddyDetail(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getBuddyDetail_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBuddyDetail", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBuddyDetail", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getBuddyOnAir = function(seqid, input, output) {
  var args = new BuddyService_getBuddyOnAir_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getBuddyOnAir.length === 1) {
    Q.fcall(this._handler.getBuddyOnAir.bind(this._handler), args.buddyMid)
      .then(function(result) {
        var result_obj = new BuddyService_getBuddyOnAir_result({success: result});
        output.writeMessageBegin("getBuddyOnAir", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getBuddyOnAir_result(err);
          output.writeMessageBegin("getBuddyOnAir", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getBuddyOnAir", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getBuddyOnAir(args.buddyMid, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getBuddyOnAir_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getBuddyOnAir", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getBuddyOnAir", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getCountriesHavingBuddy = function(seqid, input, output) {
  var args = new BuddyService_getCountriesHavingBuddy_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getCountriesHavingBuddy.length === 0) {
    Q.fcall(this._handler.getCountriesHavingBuddy.bind(this._handler))
      .then(function(result) {
        var result_obj = new BuddyService_getCountriesHavingBuddy_result({success: result});
        output.writeMessageBegin("getCountriesHavingBuddy", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getCountriesHavingBuddy_result(err);
          output.writeMessageBegin("getCountriesHavingBuddy", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getCountriesHavingBuddy", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getCountriesHavingBuddy(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getCountriesHavingBuddy_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getCountriesHavingBuddy", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getCountriesHavingBuddy", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getNewlyReleasedBuddyIds = function(seqid, input, output) {
  var args = new BuddyService_getNewlyReleasedBuddyIds_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getNewlyReleasedBuddyIds.length === 1) {
    Q.fcall(this._handler.getNewlyReleasedBuddyIds.bind(this._handler), args.country)
      .then(function(result) {
        var result_obj = new BuddyService_getNewlyReleasedBuddyIds_result({success: result});
        output.writeMessageBegin("getNewlyReleasedBuddyIds", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getNewlyReleasedBuddyIds_result(err);
          output.writeMessageBegin("getNewlyReleasedBuddyIds", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getNewlyReleasedBuddyIds", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getNewlyReleasedBuddyIds(args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getNewlyReleasedBuddyIds_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getNewlyReleasedBuddyIds", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getNewlyReleasedBuddyIds", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getPopularBuddyBanner = function(seqid, input, output) {
  var args = new BuddyService_getPopularBuddyBanner_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPopularBuddyBanner.length === 4) {
    Q.fcall(this._handler.getPopularBuddyBanner.bind(this._handler), args.language, args.country, args.applicationType, args.resourceSpecification)
      .then(function(result) {
        var result_obj = new BuddyService_getPopularBuddyBanner_result({success: result});
        output.writeMessageBegin("getPopularBuddyBanner", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getPopularBuddyBanner_result(err);
          output.writeMessageBegin("getPopularBuddyBanner", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPopularBuddyBanner", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPopularBuddyBanner(args.language, args.country, args.applicationType, args.resourceSpecification, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getPopularBuddyBanner_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPopularBuddyBanner", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPopularBuddyBanner", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getPopularBuddyLists = function(seqid, input, output) {
  var args = new BuddyService_getPopularBuddyLists_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPopularBuddyLists.length === 2) {
    Q.fcall(this._handler.getPopularBuddyLists.bind(this._handler), args.language, args.country)
      .then(function(result) {
        var result_obj = new BuddyService_getPopularBuddyLists_result({success: result});
        output.writeMessageBegin("getPopularBuddyLists", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getPopularBuddyLists_result(err);
          output.writeMessageBegin("getPopularBuddyLists", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPopularBuddyLists", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPopularBuddyLists(args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getPopularBuddyLists_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPopularBuddyLists", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPopularBuddyLists", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
BuddyServiceProcessor.prototype.process_getPromotedBuddyContacts = function(seqid, input, output) {
  var args = new BuddyService_getPromotedBuddyContacts_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPromotedBuddyContacts.length === 2) {
    Q.fcall(this._handler.getPromotedBuddyContacts.bind(this._handler), args.language, args.country)
      .then(function(result) {
        var result_obj = new BuddyService_getPromotedBuddyContacts_result({success: result});
        output.writeMessageBegin("getPromotedBuddyContacts", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new BuddyService_getPromotedBuddyContacts_result(err);
          output.writeMessageBegin("getPromotedBuddyContacts", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPromotedBuddyContacts", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPromotedBuddyContacts(args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new BuddyService_getPromotedBuddyContacts_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPromotedBuddyContacts", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPromotedBuddyContacts", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
