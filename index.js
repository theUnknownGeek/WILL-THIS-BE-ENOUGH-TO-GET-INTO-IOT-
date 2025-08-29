$(document).ready(function () {
  $(".nav-menu a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      let target = $(this.hash);
      $("html,body").animate(
        {
          scrollTop: target.offset().top - 60,
        },
        800
      );
    }
  });
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      alert("please fill in all the fields");
      return;
    }

    alert("message sent successfully");
    $(this)[0].reset();
  });

  function revealOnScroll(){
    $(".reveal").each(function(){
        let windowBottom = $(window).scrollTop() + $(window).height();
        let elementTop = $(this).offset().top;

        if(!$(this).hasClass("active") && windowBottom>elementTop+50){
            $(this).addClass("active");
        }
    });
  }

  revealOnScroll();
  $(window).on("scroll", revealOnScroll);
});
