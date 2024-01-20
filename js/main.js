$(".menu-btn").click(() => {
  $(".menu-links").animate({ width: "230px" }, 800);
  $(".menu-btn").animate({ marginLeft: "230px" }, 800);
});

$(".fa-close").click(() => {
  $(".menu-links").animate({ width: "0px" }, 800);
  $(".menu-btn").animate({ marginLeft: "0px" }, 800);
});

$("#slider h3").click(function () {
  $("#slider div").not($(this).next()).slideUp(800);
  $(this).next().slideToggle(800);
});

setInterval(() => {
  let finalDate = new Date("Nov 17, 2024 23:59:59").getTime();
  let dateNow = new Date().getTime();
  let dateDiff = finalDate - dateNow;

  let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".days").text(`${day} D`);
  $(".hours").text(`${hours} H`);
  $(".minutes").text(`${minutes} M`);
  $(".seconds").text(`${seconds} S`);
}, 1000);

$(".message").keyup(() => {
  let currentLength = $(".message").val().length;
  let remainigChars = 100 - currentLength;
  if (remainigChars <= 0) $(".chars").text("your available character finished");
  else $(".chars").text(remainigChars);
});

$(".menu-link").click(function () {
  const id = $(this).attr("href");
  const sectionTop = $(id).offset().top;
  $("html").animate({ scrollTop: sectionTop - 50 }, 2000);
});
