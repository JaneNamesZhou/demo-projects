function debounce(func, wait) {
    let timeout;

    return function (...args) {
        const context = this;

        clearTimeout(timeout); // 清除之前的定时器

        timeout = setTimeout(() => {
            func.apply(context, args); // 执行函数
        }, wait);
    };
}


const searchHandler = (query) => {
    console.log(`Searching for: ${query}`);
};

const debouncedSearchHandler = debounce(searchHandler, 300, true);

document.getElementById('searchInput').addEventListener('input', debouncedSearchHandler);