import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
    renderGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
const PER_PAGE = 15;

loadMoreBtn.style.display = "none";

async function fetchImages(isNewSearch = false) {
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        if (isNewSearch) {
            clearGallery();
        }

        if (data.hits.length === 0 && isNewSearch) {
            iziToast.error({
                message:
                    "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            loadMoreBtn.style.display = "none";
            return;
        }

        renderGallery(data.hits);

        const totalPages = Math.ceil(data.totalHits / PER_PAGE);

        if (page >= totalPages) {
            loadMoreBtn.style.display = "none";

            iziToast.info({
                message:
                    "We're sorry, but you've reached the end of search results.",
                position: "topRight",
            });
        } else {
            loadMoreBtn.style.display = "block";
        }
    } catch (error) {
        console.error(error);
        iziToast.error({
            message: "Сталася помилка при запиті!",
            position: "topRight",
        });
    } finally {
        hideLoader();
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const input = e.currentTarget.elements["search-text"];
    query = input.value.trim();

    if (!query) {
        iziToast.warning({
            message: "Введіть текст для пошуку!",
            position: "topRight",
        });
        return;
    }

    page = 1;
    loadMoreBtn.style.display = "none";

    fetchImages(true);
});

loadMoreBtn.addEventListener("click", () => {
    page += 1;
    fetchImages();
});