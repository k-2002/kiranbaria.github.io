var typed = new Typed('#element', {
    strings: ['MCA Student'],
    typeSpeed: 70,
  });

document.addEventListener('DOMContentLoaded', (event) => {
    const emailLink = document.getElementById('email-link');
    emailLink.href = 'mailto:kiranbaria094@gmail.com';
});

// function SendEmail(){
//   // Email.send({
//   //   key:"c9eb6fd6-ae46-4562-9d1e-84e01b25cea5",
//   //   Host : "smtp.elasticemail.com",
//   //   Username : "domcarrental@gmail.com",
//   //   Password : "524DDB44BDC1E65DD0E38C36D5D1F4B69C55",
//   //   To : 'kiranbaria094@gmail.com',
//   //   From : document.getElementById('email').value,
//   //   Subject : "New Enquiry",
//   //   Body : "And this is the body"
//   // }).then(
//   //   message => alert(message)
//   // );

//   Email.send({
//     SecureToken : "c9eb6fd6-ae46-4562-9d1e-84e01b25cea5",
//     To : 'kiranbaria094@gmail.com',
//     From : document.getElementById('email').value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }