module.exports = function(req, res, next) {
  req.url = '/api' + req.url;
  if (req.method === 'POST') {
    req.method = 'GET'; // GETに偽装
    req.url += '_post'; // アクセス先をPOST用に変更
  }
  next();
};
