// tidak dapat mengambil data dari .e
// import { API_KEY_ALL_FILM, API_KEY_MODAL } from "./env";

// Menggunakan Jquery
// $('.search-button').on('click', function() {
//     $.ajax({
//         url: API_KEY_ALL_FILM + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
//             // ketika tombol detail di-klik
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: API_KEY_MODAL + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetails(m);
//                         $('.modal-body').html(movieDetail)
//                     },
//                     error: (e) => {
//                         console.log(e.responseText)
//                     }
//                 })
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     })
// })

// Menggunakan Fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=1c8c5f33&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;

            // ketika tombol detail di klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=1c8c5f33&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showMovieDetails(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail
                        })
                })
            })
        })
});


function showCards(m) {
    return `
            <div class="col-md-4 my-3">
                <div class="card" style="width: 18rem;">
                    <img src="${m.Poster}" class="card-img-top" alt="Image not Found">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary  modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">See Details</a>
                    </div>
                </div>
            </div>
            `
}

function showMovieDetails(m) {
    return ` 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}