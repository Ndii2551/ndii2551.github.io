$(document).ready(function () {
  $.get("https://ipinfo.io/?token=48fe1b062410e7")
    .done(function (response) {
      const country = response.country;
      $("#countryID").html(country);
      const apiKey = "dvNX1B0Bu5h7Cexf7waD4JVW9PSOej2G";
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
                "<li><h3>" +
                  data.name +
                  "</h3></br>" +
                  data.description +
                  "</li>"
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
    })
    .fail(function () {
      // Error handling for the IP Info API call
      $("#countryID").html("<b>Error fetching country information</b>");
      $("#isHoliday").html("<b>?</b>");
      $("#dateNow").html(new Date().toISOString().split("T")[0]); // Current date in YYYY-MM-DD format
      $("#holidayDesc").html(
        "<h3>Unable to retrieve holiday information.</h3>"
      );
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
