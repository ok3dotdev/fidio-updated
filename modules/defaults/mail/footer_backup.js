export default (props, divider = true, social = []) => {
    return `${divider ? `<div class='divider'></div>` : ``}
    <footer>
        <div class="social-links">
            ${
                social.map((m, i) => 
                    `<a href="${m.link}">
                        <img src="${m.img}" alt="" class="${m.platform}">
                    </a>`
                )
            }
        </div>
    </footer>`
}