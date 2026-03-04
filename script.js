(function () {
  emailjs.init("sfSUjNJdvoQAhw6_z"); // ✅ PUBLIC KEY
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_fpqbtuu",   // ✅ SERVICE ID
    "template_aujo8md",  // ✅ TEMPLATE ID
    this
  )
  .then(function () {
    document.getElementById("successMsg").innerText =
      "Message sent successfully ✅";
  })
  .catch(function (error) {
    document.getElementById("successMsg").innerText =
      "Message failed ❌";
    console.error("EmailJS Error:", error);
  });

  this.reset();
});
