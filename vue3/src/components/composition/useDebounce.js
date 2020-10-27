// import {ref} from "vue";

export default function useDebounce() {
    var timeout;

    function debounce(func, wait = 500) {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
        console.log(wait)
    }

    return debounce;
}