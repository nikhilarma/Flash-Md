





const _0x4fb629=_0x4eae;(function(_0x1bf1ab,_0x829137){const _0x5b2927=_0x4eae,_0x14c67b=_0x1bf1ab();while(!![]){try{const _0x1a6ba0=parseInt(_0x5b2927(0x1f3))/0x1*(-parseInt(_0x5b2927(0x1f1))/0x2)+parseInt(_0x5b2927(0x1fd))/0x3*(parseInt(_0x5b2927(0x1f8))/0x4)+parseInt(_0x5b2927(0x1ee))/0x5+-parseInt(_0x5b2927(0x1f9))/0x6*(parseInt(_0x5b2927(0x1f5))/0x7)+-parseInt(_0x5b2927(0x1e8))/0x8+-parseInt(_0x5b2927(0x1ea))/0x9+parseInt(_0x5b2927(0x1f7))/0xa*(parseInt(_0x5b2927(0x1e5))/0xb);if(_0x1a6ba0===_0x829137)break;else _0x14c67b['push'](_0x14c67b['shift']());}catch(_0x55903e){_0x14c67b['push'](_0x14c67b['shift']());}}}(_0x1edc,0x53591),require('dotenv')[_0x4fb629(0x1ff)]());const {Pool}=require('pg'),s=require(_0x4fb629(0x1fb));var dbUrl=s[_0x4fb629(0x1eb)]?s[_0x4fb629(0x1eb)]:_0x4fb629(0x1e9);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableBanUser=async()=>{const _0x498195=_0x4fb629;try{await pool[_0x498195(0x1e7)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20banUser\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console[_0x498195(0x1fe)](_0x498195(0x1ef));}catch(_0x1c6293){console[_0x498195(0x1f0)]('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27banUser\x27:',_0x1c6293);}};creerTableBanUser();function _0x1edc(){const _0x4d9fc5=['release','50420AMvdgm','212956cKDaJJ','384QtdwbY','exists','../set','JID\x20','9kmALCU','log','config','DELETE\x20FROM\x20banUser\x20WHERE\x20jid\x20=\x20$1','3333qiifDi','Erreur\x20lors\x20de\x20l\x27ajout\x20de\x20l\x27utilisateur\x20banni\x20:','query','3767632WVedzt','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','4069512WpcAaU','DATABASE_URL','\x20ajouté\x20à\x20la\x20liste\x20des\x20bannis.','connect','1898395iGEDAS','La\x20table\x20\x27banUser\x27\x20a\x20été\x20créée\x20avec\x20succès.','error','4274hRrgMc','rows','263JZYXKq','Erreur\x20lors\x20de\x20la\x20suppression\x20de\x20l\x27utilisateur\x20banni\x20:','26313SlTmee'];_0x1edc=function(){return _0x4d9fc5;};return _0x1edc();}async function addUserToBanList(_0x20228c){const _0x490364=_0x4fb629,_0x176ef6=await pool[_0x490364(0x1ed)]();try{const _0xd9860a='INSERT\x20INTO\x20banUser\x20(jid)\x20VALUES\x20($1)',_0x1a77bb=[_0x20228c];await _0x176ef6['query'](_0xd9860a,_0x1a77bb),console[_0x490364(0x1fe)](_0x490364(0x1fc)+_0x20228c+_0x490364(0x1ec));}catch(_0x5583a7){console['error'](_0x490364(0x1e6),_0x5583a7);}finally{_0x176ef6['release']();}}async function isUserBanned(_0x5d6e12){const _0xcdbb84=_0x4fb629,_0x4d23ca=await pool['connect']();try{const _0x4f09b1='SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20banUser\x20WHERE\x20jid\x20=\x20$1)',_0x3f4b38=[_0x5d6e12],_0x53a229=await _0x4d23ca['query'](_0x4f09b1,_0x3f4b38);return _0x53a229[_0xcdbb84(0x1f2)][0x0][_0xcdbb84(0x1fa)];}catch(_0x36f66c){return console['error']('Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27utilisateur\x20banni\x20:',_0x36f66c),![];}finally{_0x4d23ca[_0xcdbb84(0x1f6)]();}}function _0x4eae(_0x506cc3,_0x37e52b){const _0x1edc4b=_0x1edc();return _0x4eae=function(_0x4eaef2,_0xd8561f){_0x4eaef2=_0x4eaef2-0x1e5;let _0x4d4754=_0x1edc4b[_0x4eaef2];return _0x4d4754;},_0x4eae(_0x506cc3,_0x37e52b);}async function removeUserFromBanList(_0x119255){const _0x107051=_0x4fb629,_0x3ae732=await pool[_0x107051(0x1ed)]();try{const _0x1e53f4=_0x107051(0x200),_0x53f96a=[_0x119255];await _0x3ae732[_0x107051(0x1e7)](_0x1e53f4,_0x53f96a),console[_0x107051(0x1fe)]('JID\x20'+_0x119255+'\x20supprimé\x20de\x20la\x20liste\x20des\x20bannis.');}catch(_0x2364d1){console['error'](_0x107051(0x1f4),_0x2364d1);}finally{_0x3ae732[_0x107051(0x1f6)]();}}module['exports']={'addUserToBanList':addUserToBanList,'isUserBanned':isUserBanned,'removeUserFromBanList':removeUserFromBanList};
