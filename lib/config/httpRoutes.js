module.exports = [
  // GET
  {verb: 'get', url: '/users/_me', controller: 'auth', action: 'getCurrentUser'},
  {verb: 'get', url: '/users/_me/_rights', controller: 'auth', action: 'getMyRights'},
  {verb: 'get', url: '/_login/:strategy', controller: 'auth', action: 'login'},
  {verb: 'get', url: '/_logout', controller: 'auth', action: 'logout'},

  {verb: 'get', url: '/:index/:collection/_exists', controller: 'collection', action: 'exists'},
  {verb: 'get', url: '/:index/:collection/_mapping', controller: 'collection', action: 'getMapping'},
  {verb: 'get', url: '/:index/:collection/_specifications', controller: 'collection', action: 'getSpecifications'},
  {verb: 'get', url: '/users/_mapping', controller: 'collection', action: 'getUserMapping'},
  {verb: 'get', url: '/:index/_list', controller: 'collection', action: 'list'},
  {verb: 'get', url: '/:index/_list/:type', controller: 'collection', action: 'list'},

  {verb: 'get', url: '/:index/:collection/:_id', controller: 'document', action: 'get'},

  {verb: 'get', url: '/:index/_autoRefresh', controller: 'index', action: 'getAutoRefresh'},
  {verb: 'get', url: '/:index/_exists', controller: 'index', action: 'exists'},
  {verb: 'get', url: '/_list', controller: 'index', action: 'list'},
  {verb: 'get', url: '/_refreshInternal', controller: 'index', action: 'refreshInternal'},

  {verb: 'get', url: '/_listSubscriptions', controller: 'realtime', action: 'list'},

  {verb: 'get', url: '/profiles/:_id', controller: 'security', action: 'getProfile'},
  {verb: 'get', url: '/profiles/:_id/_rights', controller: 'security', action: 'getProfileRights'},
  {verb: 'get', url: '/roles/:_id', controller: 'security', action: 'getRole'},
  {verb: 'get', url: '/users/:_id', controller: 'security', action: 'getUser'},
  {verb: 'get', url: '/users/:_id/_rights', controller: 'security', action: 'getUserRights'},

  {verb: 'get', url: '/_adminExists', controller: 'server', action: 'adminExists'},
  {verb: 'get', url: '/_getAllStats', controller: 'server', action: 'getAllStats'},
  {verb: 'get', url: '/_getConfig', controller: 'server', action: 'getConfig'},
  {verb: 'get', url: '/_getLastStats', controller: 'server', action: 'getLastStats'},
  {verb: 'get', url: '/', controller: 'server', action: 'info'},
  {verb: 'get', url: '/_serverInfo', controller: 'server', action: 'info'},
  {verb: 'get', url: '/_now', controller: 'server', action: 'now'},

  {verb: 'get', url: '/ms/_bitpos/:_id/:bit', controller: 'ms', action: 'bitpos'},
  {verb: 'get', url: '/ms/_dbsize', controller: 'ms', action: 'dbsize'},
  {verb: 'get', url: '/ms/_dump/:_id', controller: 'ms', action: 'dump'},
  {verb: 'get', url: '/ms/_getbit/:_id/:offset', controller: 'ms', action: 'getbit'},
  {verb: 'get', url: '/ms/_getrange/:_id/:start/:end', controller: 'ms', action: 'getrange'},
  {verb: 'get', url: '/ms/_exists/:_id', controller: 'ms', action: 'exists'},
  {verb: 'get', url: '/ms/_geohash/:_id/:member', controller: 'ms', action: 'geohash'},
  {verb: 'get', url: '/ms/_geopos/:_id/:member', controller: 'ms', action: 'geopos'},
  {verb: 'get', url: '/ms/_geodist/:_id/:member1/:member2', controller: 'ms', action: 'geodist'},
  {verb: 'get', url: '/ms/_georadius/:_id', controller: 'ms', action: 'georadius'},
  {verb: 'get', url: '/ms/_georadiusbymember/:_id', controller: 'ms', action: 'georadiusbymember'},
  {verb: 'get', url: '/ms/_hget/:_id/:field', controller: 'ms', action: 'hget'},
  {verb: 'get', url: '/ms/_hgetall/:_id', controller: 'ms', action: 'hgetall'},
  {verb: 'get', url: '/ms/_hkeys/:_id', controller: 'ms', action: 'hkeys'},
  {verb: 'get', url: '/ms/_hlen/:_id', controller: 'ms', action: 'hlen'},
  {verb: 'get', url: '/ms/_hmget/:_id/:field', controller: 'ms', action: 'hmget'},
  {verb: 'get', url: '/ms/_hstrlen/:_id/:field', controller: 'ms', action: 'hstrlen'},
  {verb: 'get', url: '/ms/_hvals/:_id', controller: 'ms', action: 'hvals'},
  {verb: 'get', url: '/ms/_info/:section', controller: 'ms', action: 'info'},
  {verb: 'get', url: '/ms/_info', controller: 'ms', action: 'info'},
  {verb: 'get', url: '/ms/_keys/:pattern', controller: 'ms', action: 'keys'},
  {verb: 'get', url: '/ms/_lastsave', controller: 'ms', action: 'lastsave'},
  {verb: 'get', url: '/ms/_lindex/:_id/:idx', controller: 'ms', action: 'lindex'},
  {verb: 'get', url: '/ms/_llen/:_id', controller: 'ms', action: 'llen'},
  {verb: 'get', url: '/ms/_lrange/:_id/:start/:stop', controller: 'ms', action: 'lrange'},
  {verb: 'get', url: '/ms/_mget/:_id', controller: 'ms', action: 'mget'},
  {verb: 'get', url: '/ms/_mget', controller: 'ms', action: 'mget'},
  {verb: 'get', url: '/ms/_object', controller: 'ms', action: 'object'},
  {verb: 'get', url: '/ms/_pfcount/:_id', controller: 'ms', action: 'pfcount'},
  {verb: 'get', url: '/ms/_pfcount', controller: 'ms', action: 'pfcount'},
  {verb: 'get', url: '/ms/_ping', controller: 'ms', action: 'ping'},
  {verb: 'get', url: '/ms/_pttl/:_id', controller: 'ms', action: 'pttl'},
  {verb: 'get', url: '/ms/_randomkey', controller: 'ms', action: 'randomkey'},
  {verb: 'get', url: '/ms/_scard/:_id', controller: 'ms', action: 'scard'},
  {verb: 'get', url: '/ms/_sdiff/:_id', controller: 'ms', action: 'sdiff'},
  {verb: 'get', url: '/ms/_sinter/:_id', controller: 'ms', action: 'sinter'},
  {verb: 'get', url: '/ms/_sismember/:_id/:member', controller: 'ms', action: 'sismember'},
  {verb: 'get', url: '/ms/_smembers/:_id', controller: 'ms', action: 'smembers'},
  {verb: 'get', url: '/ms/_srandmember/:_id/:count', controller: 'ms', action: 'srandmember'},
  {verb: 'get', url: '/ms/_srandmember/:_id', controller: 'ms', action: 'srandmember'},
  {verb: 'get', url: '/ms/_strlen/:_id', controller: 'ms', action: 'strlen'},
  {verb: 'get', url: '/ms/_time', controller: 'ms', action: 'time'},
  {verb: 'get', url: '/ms/_ttl/:_id', controller: 'ms', action: 'ttl'},
  {verb: 'get', url: '/ms/_type/:_id', controller: 'ms', action: 'type'},
  {verb: 'get', url: '/ms/_zcard/:_id', controller: 'ms', action: 'zcard'},
  {verb: 'get', url: '/ms/_zcount/:_id/:min/:max', controller: 'ms', action: 'zcount'},
  {verb: 'get', url: '/ms/_zlexcount/:_id/:min/:max', controller: 'ms', action: 'zlexcount'},
  {verb: 'get', url: '/ms/_zrange/:_id/:start/:stop', controller: 'ms', action: 'zrange'},
  {verb: 'get', url: '/ms/_zrangebylex/:_id/:min/:max', controller: 'ms', action: 'zrangebylex'},
  {verb: 'get', url: '/ms/_zrevrangebylex/:_id/:min/:max', controller: 'ms', action: 'zrevrangebylex'},
  {verb: 'get', url: '/ms/_zrangebyscore/:_id/:min/:max', controller: 'ms', action: 'zrangebyscore'},
  {verb: 'get', url: '/ms/_zrank/:_id/:member', controller: 'ms', action: 'zrank'},
  {verb: 'get', url: '/ms/_zrevrange/:_id/:start/:stop', controller: 'ms', action: 'zrevrange'},
  {verb: 'get', url: '/ms/_zrevrangebyscore/:_id/:max/:min', controller: 'ms', action: 'zrevrangebyscore'},
  {verb: 'get', url: '/ms/_zrevrank/:_id/:member', controller: 'ms', action: 'zrevrank'},
  {verb: 'get', url: '/ms/_zscore/:_id/:member', controller: 'ms', action: 'zscore'},
  {verb: 'get', url: '/ms/:_id', controller: 'ms', action: 'get'},

  // POST
  {verb: 'post', url: '/_login', controller: 'auth', action: 'login'},
  {verb: 'post', url: '/_checkToken', controller: 'auth', action: 'checkToken'},
  {verb: 'post', url: '/_login/:strategy', controller: 'auth', action: 'login'},

  {verb: 'post', url: '/_validateSpecifications', controller: 'collection', action: 'validateSpecifications'},
  {verb: 'post', url: '/validations/_search', controller: 'collection', action: 'searchSpecifications'},

  {verb: 'post', url: '/_bulk', controller: 'bulk', action: 'import'},
  {verb: 'post', url: '/:index/_bulk', controller: 'bulk', action: 'import'},
  {verb: 'post', url: '/:index/:collection/_bulk', controller: 'bulk', action: 'import'},

  {verb: 'post', url: '/_getStats', controller: 'server', action: 'getStats'},

  {verb: 'post', url: '/:index/_refresh', controller: 'index', action: 'refresh'},
  {verb: 'post', url: '/:index/_autoRefresh', controller: 'index', action: 'setAutoRefresh'},

  {verb: 'post', url: '/:index/:collection/_count', controller: 'document', action: 'count'},
  {verb: 'post', url: '/:index/:collection/_create', controller: 'document', action: 'create'},
  {verb: 'post', url: '/:index/:collection', controller: 'realtime', action: 'publish'},
  {verb: 'post', url: '/:index/:collection/_search', controller: 'document', action: 'search'},
  {verb: 'post', url: '/_scroll/:scrollId', controller: 'document', action: 'scroll'},
  {verb: 'post', url: '/:index/:collection/_validate', controller: 'document', action: 'validate'},

  {verb: 'post', url: '/_createFirstAdmin', controller: 'security', action: 'createFirstAdmin'},
  {verb: 'post', url: '/profiles/:_id/_create', controller: 'security', action: 'createProfile'},
  {verb: 'post', url: '/roles/:_id/_create', controller: 'security', action: 'createRole'},
  {verb: 'post', url: '/users/:_id/_createRestricted', controller: 'security', action: 'createRestrictedUser'},
  {verb: 'post', url: '/users/_createRestricted', controller: 'security', action: 'createRestrictedUser'},
  {verb: 'post', url: '/users/_create', controller: 'security', action: 'createUser'},
  {verb: 'post', url: '/users/:_id/_create', controller: 'security', action: 'createUser'},
  {verb: 'post', url: '/profiles/_mget', controller: 'security', action: 'mGetProfiles'},
  {verb: 'post', url: '/roles/_mget', controller: 'security', action: 'mGetRoles'},
  {verb: 'post', url: '/profiles/_search', controller: 'security', action: 'searchProfiles'},
  {verb: 'post', url: '/roles/_search', controller: 'security', action: 'searchRoles'},
  {verb: 'post', url: '/users/_search', controller: 'security', action: 'searchUsers'},
  {verb: 'post', url: '/profiles/:_id', controller: 'security', action: 'updateProfile'},
  {verb: 'post', url: '/roles/:_id', controller: 'security', action: 'updateRole'},
  {verb: 'post', url: '/users/:_id', controller: 'security', action: 'updateUser'},


  {verb: 'post', url: '/ms/_append/:_id', controller: 'ms', action: 'append'},
  {verb: 'post', url: '/ms/_bgrewriteaof', controller: 'ms', action: 'bgrewriteaof'},
  {verb: 'post', url: '/ms/_bgsave', controller: 'ms', action: 'bgsave'},
  {verb: 'post', url: '/ms/_bitop/:operation/:destkey/:key', controller: 'ms', action: 'bitop'},
  {verb: 'post', url: '/ms/_bitop/:operation/:destkey', controller: 'ms', action: 'bitop'},
  {verb: 'post', url: '/ms/_blpop', controller: 'ms', action: 'blpop'},
  {verb: 'post', url: '/ms/_blpop/:_id', controller: 'ms', action: 'blpop'},
  {verb: 'post', url: '/ms/_brpop', controller: 'ms', action: 'brpop'},
  {verb: 'post', url: '/ms/_brpop/:_id', controller: 'ms', action: 'brpop'},
  {verb: 'post', url: '/ms/_brpoplpush', controller: 'ms', action: 'brpoplpush'},
  {verb: 'post', url: '/ms/_decr/:_id', controller: 'ms', action: 'decr'},
  {verb: 'post', url: '/ms/_decrby/:_id', controller: 'ms', action: 'decrby'},
  {verb: 'post', url: '/ms/_discard', controller: 'ms', action: 'discard'},
  {verb: 'post', url: '/ms/_exec', controller: 'ms', action: 'exec'},
  {verb: 'post', url: '/ms/_expire/:_id', controller: 'ms', action: 'expire'},
  {verb: 'post', url: '/ms/_expireat/:_id', controller: 'ms', action: 'expireat'},
  {verb: 'post', url: '/ms/_flushdb', controller: 'ms', action: 'flushdb'},
  {verb: 'post', url: '/ms/_geoadd/:_id', controller: 'ms', action: 'geoadd'},
  {verb: 'post', url: '/ms/_getset/:_id', controller: 'ms', action: 'getset'},
  {verb: 'post', url: '/ms/_hincrby/:_id', controller: 'ms', action: 'hincrby'},
  {verb: 'post', url: '/ms/_hincrbyfloat/:_id', controller: 'ms', action: 'hincrbyfloat'},
  {verb: 'post', url: '/ms/_hmset/:_id', controller: 'ms', action: 'hmset'},
  {verb: 'post', url: '/ms/_hset/:_id', controller: 'ms', action: 'hset'},
  {verb: 'post', url: '/ms/_hsetnx/:_id', controller: 'ms', action: 'hsetnx'},
  {verb: 'post', url: '/ms/_incr/:_id', controller: 'ms', action: 'incr'},
  {verb: 'post', url: '/ms/_incrby/:_id', controller: 'ms', action: 'incrby'},
  {verb: 'post', url: '/ms/_incrbyfloat/:_id', controller: 'ms', action: 'incrbyfloat'},
  {verb: 'post', url: '/ms/_linsert/:_id', controller: 'ms', action: 'linsert'},
  {verb: 'post', url: '/ms/_lpop/:_id', controller: 'ms', action: 'lpop'},
  {verb: 'post', url: '/ms/_lpush/:_id', controller: 'ms', action: 'lpush'},
  {verb: 'post', url: '/ms/_lpushx/:_id', controller: 'ms', action: 'lpushx'},
  {verb: 'post', url: '/ms/_lset/:_id', controller: 'ms', action: 'lset'},
  {verb: 'post', url: '/ms/_ltrim/:_id', controller: 'ms', action: 'ltrim'},
  {verb: 'post', url: '/ms/_mset/:_id', controller: 'ms', action: 'mset'},
  {verb: 'post', url: '/ms/_mset', controller: 'ms', action: 'mset'},
  {verb: 'post', url: '/ms/_msetnx', controller: 'ms', action: 'msetnx'},
  {verb: 'post', url: '/ms/_multi', controller: 'ms', action: 'multi'},
  {verb: 'post', url: '/ms/_persist/:_id', controller: 'ms', action: 'persist'},
  {verb: 'post', url: '/ms/_pexpire/:_id', controller: 'ms', action: 'pexpire'},
  {verb: 'post', url: '/ms/_pexpireat/:_id', controller: 'ms', action: 'pexpireat'},
  {verb: 'post', url: '/ms/_pfadd/:_id', controller: 'ms', action: 'pfadd'},
  {verb: 'post', url: '/ms/_pfmerge', controller: 'ms', action: 'pfmerge'},
  {verb: 'post', url: '/ms/_psetex/:_id', controller: 'ms', action: 'psetex'},
  {verb: 'post', url: '/ms/_psetex', controller: 'ms', action: 'psetex'},
  {verb: 'post', url: '/ms/_publish/:channel', controller: 'ms', action: 'publish'},
  {verb: 'post', url: '/ms/_rename/:_id', controller: 'ms', action: 'rename'},
  {verb: 'post', url: '/ms/_renamenx/:_id', controller: 'ms', action: 'renamenx'},
  {verb: 'post', url: '/ms/_restore/:_id', controller: 'ms', action: 'restore'},
  {verb: 'post', url: '/ms/_rpop/:_id', controller: 'ms', action: 'rpop'},
  {verb: 'post', url: '/ms/_rpoplpush', controller: 'ms', action: 'rpoplpush'},
  {verb: 'post', url: '/ms/_rpush/:_id', controller: 'ms', action: 'rpush'},
  {verb: 'post', url: '/ms/_rpushx/:_id', controller: 'ms', action: 'rpushx'},
  {verb: 'post', url: '/ms/_sadd/:_id', controller: 'ms', action: 'sadd'},
  {verb: 'post', url: '/ms/_save', controller: 'ms', action: 'save'},
  {verb: 'post', url: '/ms/_sdiffstore/:_id', controller: 'ms', action: 'sdiffstore'},
  {verb: 'post', url: '/ms/_sdiffstore', controller: 'ms', action: 'sdiffstore'},
  {verb: 'post', url: '/ms/_setbit/:_id', controller: 'ms', action: 'setbit'},
  {verb: 'post', url: '/ms/_setex/:_id', controller: 'ms', action: 'setex'},
  {verb: 'post', url: '/ms/_setnx/:_id', controller: 'ms', action: 'setnx'},
  {verb: 'post', url: '/ms/_setrange/:_id', controller: 'ms', action: 'setrange'},
  {verb: 'post', url: '/ms/_sinterstore/:_id', controller: 'ms', action: 'sinterstore'},
  {verb: 'post', url: '/ms/_smove/:_id', controller: 'ms', action: 'smove'},
  {verb: 'post', url: '/ms/_smove', controller: 'ms', action: 'smove'},
  {verb: 'post', url: '/ms/_sort/:_id', controller: 'ms', action: 'sort'},
  {verb: 'post', url: '/ms/_spop/:_id', controller: 'ms', action: 'spop'},
  {verb: 'post', url: '/ms/_sunion/:_id', controller: 'ms', action: 'sunion'},
  {verb: 'post', url: '/ms/_sunionstore/:_id', controller: 'ms', action: 'sunionstore'},
  {verb: 'post', url: '/ms/_zadd/:_id', controller: 'ms', action: 'zadd'},
  {verb: 'post', url: '/ms/_zincrby/:_id', controller: 'ms', action: 'zincrby'},
  {verb: 'post', url: '/ms/_zinterstore', controller: 'ms', action: 'zinterstore'},
  {verb: 'post', url: '/ms/_zunionstore', controller: 'ms', action: 'zunionstore'},
  {verb: 'post', url: '/ms/:_id', controller: 'ms', action: 'set'},


  // DELETE
  {verb: 'delete', url: '/:index/:collection/_truncate', controller: 'collection', action: 'truncate'},
  {verb: 'delete', url: '/:index/:collection/_specifications', controller: 'collection', action: 'deleteSpecifications'},

  {verb: 'delete', url: '/:index/:collection/_query', controller: 'document', action: 'deleteByQuery'},
  {verb: 'delete', url: '/:index/:collection/:_id', controller: 'document', action: 'delete'},

  {verb: 'delete', url: '/_mdelete', controller: 'index', action: 'mDelete'},
  {verb: 'delete', url: '/:index', controller: 'index', action: 'delete'},

  {verb: 'delete', url: '/roles/:_id', controller: 'security', action: 'deleteRole'},
  {verb: 'delete', url: '/profiles/:_id', controller: 'security', action: 'deleteProfile'},
  {verb: 'delete', url: '/users/:_id', controller: 'security', action: 'deleteUser'},

  {verb: 'delete', url: '/ms/_hdel/:_id', controller: 'ms', action: 'hdel'},
  {verb: 'delete', url: '/ms/_lrem/:_id', controller: 'ms', action: 'lrem'},
  {verb: 'delete', url: '/ms/_srem/:_id', controller: 'ms', action: 'srem'},
  {verb: 'delete', url: '/ms/_zrem/:_id', controller: 'ms', action: 'zrem'},
  {verb: 'delete', url: '/ms/_zremrangebylex/:_id', controller: 'ms', action: 'zremrangebylex'},
  {verb: 'delete', url: '/ms/_zremrangebyscore/:_id', controller: 'ms', action: 'zremrangebyscore'},
  {verb: 'delete', url: '/ms/:_id', controller: 'ms', action: 'del'},
  {verb: 'delete', url: '/ms', controller: 'ms', action: 'del'},


  // PUT
  {verb: 'put', url: '/_updateSelf', controller: 'auth', action: 'updateSelf'},

  {verb: 'put', url: '/:index/:collection', controller: 'collection', action: 'create'},
  {verb: 'put', url: '/:index/:collection/_mapping', controller: 'collection', action: 'updateMapping'},
  {verb: 'put', url: '/users/_mapping', controller: 'collection', action: 'updateUserMapping'},
  {verb: 'put', url: '/_specifications', controller: 'collection', action: 'updateSpecifications'},

  {verb: 'put', url: '/:index', controller: 'index', action: 'create'},

  {verb: 'put', url: '/profiles/:_id', controller: 'security', action: 'createOrReplaceProfile'},
  {verb: 'put', url: '/profiles/:_id/_createOrReplace', controller: 'security', action: 'createOrReplaceProfile'},
  {verb: 'put', url: '/roles/:_id', controller: 'security', action: 'createOrReplaceRole'},
  {verb: 'put', url: '/roles/:_id/_createOrReplace', controller: 'security', action: 'createOrReplaceRole'},
  {verb: 'put', url: '/users/:_id', controller: 'security', action: 'createOrReplaceUser'},

  {verb: 'put', url: '/:index/:collection/:_id/_create', controller: 'document', action: 'create'},
  {verb: 'put', url: '/:index/:collection/:_id', controller: 'document', action: 'createOrReplace'},
  {verb: 'put', url: '/:index/:collection/:_id/_replace', controller: 'document', action: 'replace'},
  {verb: 'put', url: '/:index/:collection/:_id/_update', controller: 'document', action: 'update'}
];
