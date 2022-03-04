$(document).ready(function () {
    const url = "https://api.adviceslip.com/advice";
    $(".randomise-btn").on('click', function (e) {

        $.ajax({
            url: url,
            type: "GET",
            success: function (result){
                let advice = JSON.parse(result);
                $(".card-text").text(advice.slip.advice);
                $(".advice").text(advice.slip.id);
                console.log(advice);
            },
            error:function(error){
                console.log(`Error ${error}`)
            }

        })

    })

})