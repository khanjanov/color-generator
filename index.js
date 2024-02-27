$(document).ready(() => {
  // for copy
  $("#copy").click(() => {
    let copiedText = $("#clipboard").text();
    navigator.clipboard.writeText(copiedText);
  });

  // generate color by yourself
  $("#choose").on("input", () => {
    $("#clipboard").text($("#choose").val());
    $(".wrapper__top").css("backgroundColor", $("#choose").val());
    $("#clipboard").css("backgroundColor", $("#choose").val());
  });

  //generate random color
  $("#random").click(() => {
    let colorDigits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let combine = "#";
    for (el of colorDigits) {
      combine += colorDigits[Math.floor(Math.random() * colorDigits.length)];
      if (combine.length === 7) {
        $("#clipboard").text(combine);
        $(".wrapper__top").css("backgroundColor", combine);
        $("#clipboard").css("backgroundColor", combine);
        return;
      }
    }
  });
});
