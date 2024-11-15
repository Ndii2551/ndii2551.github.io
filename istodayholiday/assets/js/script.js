$(document).ready(function () {
  $.get("https://ipinfo.io/?token=48fe1b062410e7", function (response) {
    const country = response.country;
    $("#countryID").html(country);
    const apiKey = "dvNX1B0Bu5h7Cexf7waD4JVW9PSOej2G";
    //   const country = "ID";
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    $.ajax({
      url: `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=${year}&month=${month}&day=${day}`,
      method: "GET",
      dataType: "json",
      success: function (response) {
        if (response.response.holidays.length > 0) {
          $("#isHoliday").html("<b>YES</b>");
          $("#dateNow").html(response.response.holidays[0].date.iso);
          response.response.holidays.forEach(function (data) {
            $("#listOfDesc").append(
              "<li><h3>" + data.name + "</h3></br>" + data.description + "</li>"
            );
          });
        } else {
          $("#isHoliday").html("<b>NO</b>");
          $("#dateNow").html(year + "-" + month + "-" + day);
          $("#holidayDesc").html("<h3>Today is not a holiday.</h3>");
        }
      },
      error: function () {
        if (429) {
          $("#isHoliday").html("<b>?</b>");
          $("#dateNow").html(year + "-" + month + "-" + day);
          $("#holidayDesc").html("<h3>Access limit reached.</h3>");
        } else {
          $("#isHoliday").html("<b>Error fetching holiday data</b>");
        }
      },
    });
  });
});

var myFullpage = new fullpage("#fullpage", {
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
});
$(window).on("load", function () {
  $(".fp-watermark").hide();
});
