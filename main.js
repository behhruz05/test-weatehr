
let input_city = document.querySelector('.input_city')
let btn_search = document.querySelector('.btn_search')

let city_name = document.querySelector('.city_name')

let city_image = document.querySelector('.city_image')



btn_search.addEventListener('click', () => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${input_city.value}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ee2cad67d1msh63087c28612d031p18be0bjsn058bf2df91ee',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };



    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            city_name.textContent = data.current.temp_c
            city_image.setAttribute('src', data.current.condition.icon)
        }
        )
})




if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then(() => console.log("Service Worker registered"))
            .catch((err) => console.log("SW error:", err));
    });
}