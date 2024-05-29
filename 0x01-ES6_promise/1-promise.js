export default function getFullResponseFromAPI(success) {
  return((response, reject) =>{
    if (success) {
      response({status:200, body:'Success'});
    } else {
      reject(new Error('Reject API'));
    }
  });
}
