function collect_ratings() {
    console.log("function started")
    const ratings = {
        count: 0,
        sum: 0,
        average: 0
    }
    let rating = 0;

    const elements = document.querySelectorAll("rating");
    elements.forEach(element => {
        let text = element.id;
        let result = text.replace("star", "");
        rating = parseInt(result);

        let ratingsCount = parseInt(element.value);
        ratings.count = ratingsCount;

        ratings.sum = ratingsCount * rating;
    });

    if (ratings.count != 0) {
        ratings.average = ratings.sum / ratings.count
    }

    console.log("function run")
    return ratings
}

document.addEventListener("change",
    () => {        
        const ratings = collect_ratings;        
        document.querySelector("#average").value = ratings.average;        
    }
)