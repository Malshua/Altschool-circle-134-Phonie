function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!


  /* List of networks defined as key pairs of the networks object */
  const Networks = {
    arrMtn: ['0803', '0806', '0703', '0706', '0810', '0813', '0814', '0816', '0903', '0906'],
    arrGlo: ['0805', '0807', '0811', '0705', '0815', '0905'],
    arr9mobile: ['0809', '0817', '0818', '0908', '0909'],
    arrAirtel: ['0802', '0808', '0812', '0701', '0708', '0902', '0907', '0901'],
  };

  const submitBtn = document.querySelector('.btn');
  const imageTag = document.querySelector('#image');


  let imagePath = "img/"
  let networkArr = Object.keys(Networks);

  submitBtn.addEventListener('click', function() {

    const FormInput = document.querySelector('.form-input').value;

    for (let i = 0; i < networkArr.length; i++) {
      console.log(networkArr[i]);
      const checkArrValues = Networks[networkArr[i]]
      for (let a = 0; a < checkArrValues.length; a++) {
        if (FormInput.startsWith(checkArrValues[a])) {
          imageTag.innerHTML = `<img src = ${imagePath}${networkArr[i]}.png  alt= ${networkArr[i]} />`
        }
      }
    }
  })










};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //