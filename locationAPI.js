
const options = {
    method: 'GET',
    url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
    params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
    headers: {
      'X-RapidAPI-Key': '15cc8515femsh4a813c24a65da7ap137b0bjsnb5bb0614873b',
      'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
    }
  };
  


  // try {
  //   const updateData = await MongooseModel.findOneAndUpdate(
  //     { email },
  //     { $set: req.body }
  //   );
  //   if (updateData) {
  //     res.json({
  //       successful: true,
  //     });
  //   } else {
  //     res.json({
  //       successful: false,
  //       message: `No data found`,
  //       statusCode: 404,
  //     });
  //   }
  //   } catch (err) {
  //     handleErr(err);
  //   }
  
// const summonAxios = () => {
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
// summonAxios();

module.exports = options;