var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(async function () {
  $(document).on("scroll", function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });

  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".slick-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false
  });


  async function getCountries() {
    const response = await fetch("./assets/js/countries.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  }

  const countries = await getCountries();
  const formCountrySelect = document.querySelector(
    "select#form-country-select"
  );

  for (const key in countries) {
    formCountrySelect.options.add(new Option(countries[key], key));
  }

  $("#contact-form-landing").on("submit", function (e) {
    e.preventDefault();

    window.location.href = "/thankyou.html";
  });
});
