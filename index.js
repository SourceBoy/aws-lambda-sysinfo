/*
 * @author https://github.com/SourceBoy
 * @license Apache-2.0
 */

'use strict';

const si = require('systeminformation');

exports.handler = async function(event, context)
{
  const [
    cpu, mem, os, versions, filesystems, blocks, interfaces, connections, users
  ] = await Promise.all([
    si.cpu(),
    si.mem(),
    si.osInfo(),
    si.versions(),
    si.fsSize(),
    si.blockDevices(),
    si.networkInterfaces(),
    si.networkConnections(),
    si.users()
  ]);
  
  const { arch, platform, release, env } = process;

  const output = {
    'time': si.time(),
    'disks': { filesystems, blocks },
    'net': { interfaces, connections },
    'versions': Object.assign(versions, process.versions),
    cpu, mem, os, users,
    arch, platform, release, env,
    context, event,
  };

  return {
    'statusCode': 200,
    'body': output
  };
};
