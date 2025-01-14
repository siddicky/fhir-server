// noinspection JSUnresolvedFunction

const pageOffsetInput = document.querySelector('input[name="_getpagesoffset"]');
const countInput = document.querySelector('input[name="_count"]');

const nextLink = document.getElementById('lnkNext');
if (nextLink) {
    nextLink.addEventListener(
        'click',
        function () {
            goNext();
        },
        false
    );
}

const prevLink = document.getElementById('lnkPrevious');
if (prevLink) {
    prevLink.addEventListener(
        'click',
        function () {
            goPrevious();
        },
        false
    );
}

const currentPageOffset = () => {
    const parsedValue = parseInt(pageOffsetInput.value);
    return isNaN(parsedValue) ? 0 : parsedValue;
};

function goNext() {
    pageOffsetInput.value = currentPageOffset() + 1;
    submitSearchForm(null, false);
}
function goPrevious() {
    pageOffsetInput.value = currentPageOffset() > 0 ? currentPageOffset() - 1 : 0;
    submitSearchForm(null, false);
}
