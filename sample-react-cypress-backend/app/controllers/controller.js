// Find a single Tutorial with an id
exports.findzip = (req, res) => {
  var request = require('request');
  
  const pZipCode = req.query.zipcode;

  // クエリーを準備
  const formData = {
    zipcode: pZipCode
  };

  console.log('pZipCode:'+pZipCode);
  
  try{

    request({url:'http://zipcloud.ibsnet.co.jp/api/search', qs:formData}, (error, response, body) => {
      // 実際の処理
      res.send(response.body);
    });  
  }catch(e){
    res.send({error:"error"});
  }  
};